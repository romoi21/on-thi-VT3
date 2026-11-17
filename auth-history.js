/**
 * ============================================================================
 * HỆ THỐNG ĐĂNG NHẬP, TẠO TÀI KHOẢN HỌC SINH (LIÊN KẾT GMAIL) & LỊCH SỬ LÀM BÀI - K71
 * Tính năng:
 * 1. Đăng ký (Tạo tài khoản học sinh mới: Họ tên, Lớp/Khối, Tài khoản/Gmail, Mật khẩu)
 * 2. Đăng nhập bằng Tài khoản/Gmail + Mật khẩu HOẶC Đăng nhập/Liên kết nhanh bằng Gmail (Google) & Facebook
 * 3. Liên kết địa chỉ Gmail vào tài khoản học sinh đã tạo
 * 4. Tự động lưu lịch sử làm bài Trắc nghiệm THPT (10 môn) & IELTS khi làm bài xong
 * 5. Xem lại chi tiết từng câu hỏi, đáp án đã chọn và lời giải của mọi bài đã thi
 * ============================================================================
 */
(function () {
    // Mã PIN bảo vệ Bảng điều khiển Developer (Có thể đổi tùy ý tại đây)
    const DEV_PIN = '2026';
    window.DEV_PIN = DEV_PIN;

    // Tài khoản Nhà Sáng Lập (Founder / Admin chính thức của hệ thống)
    const FOUNDER_EMAIL = 'rooneytran6789@gmail.com';
    const FOUNDER_DEFAULT_PW = 'rooney6789';
    window.FOUNDER_EMAIL = FOUNDER_EMAIL;

    const ACCOUNTS_KEY = 'VT3_USERS_LIST';
    const LEGACY_ACCOUNTS_KEY = 'k71_accounts_db_v1';
    const LOGIN_LOGS_KEY = 'k71_login_logs_v1';
    const PW_RESET_KEY = 'k71_pw_reset_tokens_v1';
    const KNOWN_USER_KEYS = [
        'VT3_USERS_LIST',
        'k71_accounts_db_v1',
        'users',
        'user',
        'registeredUsers',
        'accounts',
        'account',
        'userList',
        'students'
    ];
    const CURRENT_UID_KEY = 'k71_current_uid_v1';
    const HISTORY_PREFIX = 'k71_exam_history_v1_';

    const AVATAR_COLORS = [
        '#e58547', '#2563eb', '#8b5cf6', '#10b981',
        '#ec4899', '#06b6d4', '#f59e0b', '#ef4444'
    ];

    function genId(prefix) {
        return (prefix || 'id') + '_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 7);
    }

    function getInitials(name) {
        if (!name) return 'HS';
        const parts = name.trim().split(/\s+/);
        if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }

    function pickColor(str) {
        let hash = 0;
        const s = str || 'K71';
        for (let i = 0; i < s.length; i++) {
            hash = s.charCodeAt(i) + ((hash << 5) - hash);
        }
        return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
    }

    function isFounderAccount(userOrEmail) {
        if (!userOrEmail) return false;
        if (typeof userOrEmail === 'string') {
            return userOrEmail.trim().toLowerCase() === FOUNDER_EMAIL;
        }
        const u = userOrEmail;
        return Boolean(
            u.isFounder === true ||
            u.role === 'founder' ||
            (u.email && String(u.email).trim().toLowerCase() === FOUNDER_EMAIL) ||
            (u.googleEmail && String(u.googleEmail).trim().toLowerCase() === FOUNDER_EMAIL) ||
            (u.username && String(u.username).trim().toLowerCase() === FOUNDER_EMAIL)
        );
    }

    /* ==================== 1. QUẢN LÝ & ĐỒNG BỘ DỮ LIỆU TÀI KHOẢN (AUTO-MIGRATION) ==================== */
    function isIgnoredStorageKey(key) {
        if (!key) return true;
        if (
            key === 'k71_theme_color' ||
            key === 'k71_theme' ||
            key === 'k71_quiz_theme' ||
            key === 'k71_gemini_api_key' ||
            key === CURRENT_UID_KEY ||
            key === LOGIN_LOGS_KEY ||
            key === PW_RESET_KEY ||
            key.startsWith(HISTORY_PREFIX) ||
            key.startsWith('k71_active_quiz_') ||
            key.startsWith('k71_wrong_bank_')
        ) {
            return true;
        }
        return false;
    }

    function isLikelyUserObject(obj) {
        if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false;
        // Loại trừ bản ghi lịch sử làm bài thi hoặc đề đang làm dở
        if (obj.totalQuestions !== undefined && obj.correctCount !== undefined) return false;
        if (obj.questions && Array.isArray(obj.questions)) return false;
        if (obj.history && Array.isArray(obj.history) && obj.version !== undefined) return false;

        const hasIdentity = Boolean(
            obj.email ||
            obj.googleEmail ||
            obj.username ||
            obj.fullName ||
            obj.name ||
            obj.phone
        );
        const hasAuthField = Boolean(
            obj.password !== undefined ||
            obj.pw !== undefined ||
            obj.pass !== undefined ||
            obj.uid ||
            obj.id ||
            obj.email ||
            obj.googleEmail ||
            obj.username
        );
        return hasIdentity && hasAuthField;
    }

    function normalizeAccountObject(raw, idx) {
        const obj = raw || {};
        const emailVal = String(obj.email || obj.googleEmail || (obj.username && String(obj.username).includes('@') ? obj.username : '') || '').trim();
        const usernameVal = String(obj.username || emailVal || obj.phone || '').trim();
        const isFounder = isFounderAccount(emailVal) || isFounderAccount(usernameVal) || obj.role === 'founder' || obj.isFounder === true;
        const nameVal = String(
            obj.fullName ||
            obj.name ||
            obj.googleName ||
            obj.facebookName ||
            (isFounder ? 'Nhà Sáng Lập K71 (Founder)' : '') ||
            (emailVal ? emailVal.split('@')[0] : '') ||
            usernameVal ||
            'Học viên'
        ).trim();
        const phoneVal = String(obj.phone || obj.phoneNumber || obj.sdt || obj.tel || (isFounder ? '0965678900' : '')).trim();
        const passwordVal = obj.password !== undefined && obj.password !== null && String(obj.password) !== ''
            ? String(obj.password)
            : (obj.pw !== undefined ? String(obj.pw) : (obj.pass !== undefined ? String(obj.pass) : (isFounder ? FOUNDER_DEFAULT_PW : '')));
        const idVal = isFounder ? 'founder_rooneytran6789' : String(obj.id || obj.uid || genId('hs_' + (idx || 0))).trim();
        const createdVal = obj.createdAt || obj.registeredAt || obj.created_at || obj.timestamp || Date.now();

        return {
            ...obj,
            id: idVal,
            uid: isFounder ? 'founder_rooneytran6789' : String(obj.uid || idVal),
            fullName: nameVal,
            name: nameVal,
            username: usernameVal || emailVal,
            email: isFounder ? FOUNDER_EMAIL : (emailVal || usernameVal),
            phone: phoneVal,
            password: passwordVal,
            role: isFounder ? 'founder' : (obj.role || 'student'),
            isFounder: isFounder,
            className: isFounder ? '👑 Nhà Sáng Lập Website' : String(obj.className || 'Khối 11 - K71').trim(),
            color: isFounder ? '#f59e0b' : (obj.color || pickColor(nameVal + (emailVal || usernameVal))),
            providers: Array.isArray(obj.providers) ? obj.providers : (isFounder ? ['student', 'google', 'founder'] : ['student']),
            googleEmail: isFounder ? FOUNDER_EMAIL : String(obj.googleEmail || (emailVal.includes('@') ? emailVal : '')),
            loginCount: Number(obj.loginCount) || 0,
            createdAt: createdVal,
            lastLoginAt: obj.lastLoginAt || null
        };
    }

    function ensureFounderInList(list) {
        const arr = Array.isArray(list) ? list : [];
        const hasFounder = arr.some(item => isFounderAccount(item));
        if (!hasFounder) {
            arr.unshift(normalizeAccountObject({
                id: 'founder_rooneytran6789',
                uid: 'founder_rooneytran6789',
                fullName: 'Nhà Sáng Lập K71 (Founder)',
                name: 'Nhà Sáng Lập K71 (Founder)',
                username: FOUNDER_EMAIL,
                email: FOUNDER_EMAIL,
                googleEmail: FOUNDER_EMAIL,
                phone: '0965678900',
                password: FOUNDER_DEFAULT_PW,
                role: 'founder',
                isFounder: true,
                className: '👑 Nhà Sáng Lập Website',
                color: '#f59e0b',
                providers: ['student', 'google', 'founder'],
                loginCount: 1,
                createdAt: Date.now(),
                lastLoginAt: Date.now()
            }, 0));
        }
        return arr;
    }

    function getLoginLogs() {
        try {
            const raw = localStorage.getItem(LOGIN_LOGS_KEY);
            const list = raw ? JSON.parse(raw) : [];
            return Array.isArray(list) ? list : [];
        } catch (e) {
            return [];
        }
    }

    function recordLoginEvent(acc, methodLabel) {
        if (!acc) return;
        const logs = getLoginLogs();
        logs.unshift({
            id: genId('log'),
            uid: acc.uid || acc.id,
            name: acc.fullName || acc.name || 'Học viên',
            email: acc.email || acc.googleEmail || acc.username || '',
            isFounder: isFounderAccount(acc),
            method: methodLabel || 'Đăng nhập hệ thống',
            timestamp: Date.now()
        });
        if (logs.length > 300) logs.length = 300;
        try {
            localStorage.setItem(LOGIN_LOGS_KEY, JSON.stringify(logs));
        } catch (e) {}
    }

    function getAccountIdentityKey(acc) {
        if (!acc) return '';
        const email = String(acc.email || acc.googleEmail || '').trim().toLowerCase();
        if (email) return 'email:' + email;
        const username = String(acc.username || '').trim().toLowerCase();
        if (username) return 'user:' + username;
        const phone = String(acc.phone || '').trim();
        if (phone) return 'phone:' + phone;
        const uid = String(acc.uid || acc.id || '').trim();
        return uid ? 'id:' + uid : '';
    }

    // Quét toàn bộ localStorage để gộp tất cả các tài khoản cũ về khóa chuẩn VT3_USERS_LIST
    function migrateAndSyncAllStorageUsers() {
        const mergedMap = new Map();
        const idMap = new Map();

        function addCandidate(rawObj, idx) {
            if (!isLikelyUserObject(rawObj)) return;
            const norm = normalizeAccountObject(rawObj, idx);
            const identKey = getAccountIdentityKey(norm);
            const uidKey = norm.uid || norm.id;
            if (!identKey && !uidKey) return;

            const existingKey = (identKey && mergedMap.has(identKey))
                ? identKey
                : (uidKey && idMap.has(uidKey) ? idMap.get(uidKey) : null);

            if (existingKey && mergedMap.has(existingKey)) {
                const prev = mergedMap.get(existingKey);
                const combined = {
                    ...prev,
                    ...norm,
                    id: prev.id || norm.id,
                    uid: prev.uid || norm.uid,
                    fullName: norm.fullName && norm.fullName !== 'Học viên' ? norm.fullName : prev.fullName,
                    name: norm.name && norm.name !== 'Học viên' ? norm.name : prev.name,
                    email: norm.email || prev.email,
                    username: norm.username || prev.username,
                    phone: norm.phone || prev.phone,
                    password: norm.password || prev.password,
                    loginCount: Math.max(Number(prev.loginCount) || 0, Number(norm.loginCount) || 0),
                    createdAt: prev.createdAt || norm.createdAt,
                    lastLoginAt: norm.lastLoginAt || prev.lastLoginAt
                };
                mergedMap.set(existingKey, combined);
                if (combined.uid) idMap.set(combined.uid, existingKey);
            } else {
                const mapKey = identKey || ('id:' + uidKey);
                mergedMap.set(mapKey, norm);
                if (uidKey) idMap.set(uidKey, mapKey);
            }
        }

        try {
            const allKeys = new Set([...KNOWN_USER_KEYS, ...Object.keys(localStorage)]);
            let counter = 0;
            allKeys.forEach(key => {
                if (isIgnoredStorageKey(key)) return;
                let raw = null;
                try {
                    raw = localStorage.getItem(key);
                } catch (e) {}
                if (!raw || (raw[0] !== '[' && raw[0] !== '{')) return;

                try {
                    const parsed = JSON.parse(raw);
                    if (Array.isArray(parsed)) {
                        parsed.forEach(item => addCandidate(item, ++counter));
                    } else if (parsed && typeof parsed === 'object') {
                        if (Array.isArray(parsed.users)) {
                            parsed.users.forEach(item => addCandidate(item, ++counter));
                        } else if (Array.isArray(parsed.accounts)) {
                            parsed.accounts.forEach(item => addCandidate(item, ++counter));
                        } else {
                            addCandidate(parsed, ++counter);
                        }
                    }
                } catch (e) {}
            });
        } catch (e) {}

        const unifiedList = ensureFounderInList(Array.from(mergedMap.values()));
        try {
            const jsonStr = JSON.stringify(unifiedList);
            localStorage.setItem(ACCOUNTS_KEY, jsonStr);
            localStorage.setItem(LEGACY_ACCOUNTS_KEY, jsonStr);
        } catch (e) {}
        return unifiedList;
    }

    function getAllAccounts() {
        try {
            const raw = localStorage.getItem(ACCOUNTS_KEY) || localStorage.getItem(LEGACY_ACCOUNTS_KEY);
            const list = raw ? JSON.parse(raw) : [];
            if (Array.isArray(list) && list.length > 0) {
                const normalized = ensureFounderInList(list.map((item, idx) => normalizeAccountObject(item, idx)));
                return normalized;
            }
            return migrateAndSyncAllStorageUsers();
        } catch (e) {
            return ensureFounderInList([]);
        }
    }

    function saveAllAccounts(list) {
        try {
            const normalized = ensureFounderInList((Array.isArray(list) ? list : []).map((item, idx) => normalizeAccountObject(item, idx)));
            const jsonStr = JSON.stringify(normalized);
            localStorage.setItem(ACCOUNTS_KEY, jsonStr);
            localStorage.setItem(LEGACY_ACCOUNTS_KEY, jsonStr);
        } catch (e) {}
    }

    function getCurrentUid() {
        return localStorage.getItem(CURRENT_UID_KEY) || '';
    }

    function setCurrentUid(uid) {
        if (uid) {
            localStorage.setItem(CURRENT_UID_KEY, uid);
        } else {
            localStorage.removeItem(CURRENT_UID_KEY);
        }
        notifyAuthChanged();
    }

    function getCurrentUser() {
        const uid = getCurrentUid();
        if (!uid) return null;
        const accounts = getAllAccounts();
        return accounts.find(a => a.uid === uid || a.id === uid) || null;
    }

    /* ==================== 2. ĐĂNG KÝ, ĐĂNG NHẬP & LIÊN KẾT GMAIL ==================== */
    // Tạo tài khoản học sinh mới (Có mật khẩu & liên kết Gmail)
    function registerStudentAccount(payload) {
        const name = (payload.fullName || payload.name || '').trim();
        const usernameOrEmail = (payload.username || payload.email || '').trim().toLowerCase();
        const gmail = (payload.gmail || (usernameOrEmail.includes('@') ? usernameOrEmail : '')).trim().toLowerCase();
        const phone = (payload.phone || '').trim();
        const password = (payload.password || '').trim();
        const className = (payload.className || 'Khối 11 - K71').trim();

        if (!name) {
            return { ok: false, message: 'Vui lòng nhập họ và tên của bạn!' };
        }
        if (!usernameOrEmail) {
            return { ok: false, message: 'Vui lòng nhập địa chỉ Email hoặc tên tài khoản!' };
        }
        if (!password || password.length < 4) {
            return { ok: false, message: 'Mật khẩu phải có ít nhất 4 ký tự!' };
        }

        const accounts = getAllAccounts();
        const existed = accounts.find(a =>
            (a.username && a.username.toLowerCase() === usernameOrEmail) ||
            (a.email && a.email.toLowerCase() === usernameOrEmail) ||
            (gmail && a.googleEmail && a.googleEmail.toLowerCase() === gmail) ||
            (phone && a.phone && a.phone === phone)
        );

        if (existed) {
            if (isFounderAccount(existed)) {
                return { ok: false, message: `Email ${FOUNDER_EMAIL} là Tài Khoản Nhà Sáng Lập đã được kích hoạt sẵn! Vui lòng chuyển sang màn hình Đăng nhập.` };
            }
            return { ok: false, message: 'Email hoặc tài khoản này đã được đăng ký! Vui lòng chuyển sang Đăng nhập.' };
        }

        const providers = ['student'];
        if (gmail) providers.push('google');

        const generatedId = genId('hs');
        const nowTs = Date.now();
        const newAcc = {
            id: generatedId,
            uid: generatedId,
            fullName: name,
            name: name,
            username: usernameOrEmail,
            email: gmail || usernameOrEmail,
            phone: phone,
            password: password,
            role: 'student',
            isFounder: false,
            className: className,
            color: pickColor(name + usernameOrEmail),
            providers: providers,
            googleEmail: gmail || '',
            googleName: gmail ? name : '',
            facebookId: '',
            facebookName: '',
            loginCount: 1,
            createdAt: nowTs,
            lastLoginAt: nowTs
        };

        accounts.push(newAcc);
        saveAllAccounts(accounts);
        recordLoginEvent(newAcc, 'Đăng ký tài khoản mới');
        setCurrentUid(newAcc.uid);
        const mergedCount = mergeGuestHistoryToUser(newAcc.uid);
        notifyAuthChanged();

        return { ok: true, user: newAcc, mergedCount };
    }

    function deleteAccountById(idOrUid) {
        if (!idOrUid) return false;
        const target = String(idOrUid);
        const accounts = getAllAccounts();
        const removedAcc = accounts.find(a => String(a.uid || a.id) === target || String(a.id) === target);
        if (removedAcc && isFounderAccount(removedAcc)) {
            showToast('⚠️ Không thể xóa tài khoản Nhà Sáng Lập (rooneytran6789@gmail.com)!');
            return false;
        }
        const filtered = accounts.filter(a => String(a.uid || a.id) !== target && String(a.id) !== target);
        if (filtered.length === accounts.length) return false;
        saveAllAccounts(filtered);

        // Dọn cả trong các khóa cũ nếu có để tránh bị gộp lại khi quét
        KNOWN_USER_KEYS.forEach(k => {
            if (k === ACCOUNTS_KEY || k === LEGACY_ACCOUNTS_KEY) return;
            try {
                const raw = localStorage.getItem(k);
                if (!raw) return;
                const parsed = JSON.parse(raw);
                if (Array.isArray(parsed)) {
                    const nextArr = parsed.filter(item => {
                        if (!item || typeof item !== 'object') return true;
                        if (String(item.uid || item.id) === target) return false;
                        if (removedAcc && removedAcc.email && String(item.email || '').toLowerCase() === String(removedAcc.email).toLowerCase()) return false;
                        return true;
                    });
                    localStorage.setItem(k, JSON.stringify(nextArr));
                } else if (parsed && typeof parsed === 'object') {
                    if (String(parsed.uid || parsed.id) === target || (removedAcc && removedAcc.email && String(parsed.email || '').toLowerCase() === String(removedAcc.email).toLowerCase())) {
                        localStorage.removeItem(k);
                    }
                }
            } catch (e) {}
        });

        if (getCurrentUid() === target) {
            setCurrentUid('');
        } else {
            notifyAuthChanged();
        }
        return true;
    }

    function clearAllAccounts() {
        KNOWN_USER_KEYS.forEach(k => {
            try { localStorage.removeItem(k); } catch (e) {}
        });
        saveAllAccounts([]);
        const current = getCurrentUser();
        if (!current || !isFounderAccount(current)) {
            setCurrentUid('');
        }
        return true;
    }

    // Đăng nhập bằng Tên đăng nhập / Gmail / SĐT + Mật khẩu
    function loginWithCredentials(identifierRaw, passwordRaw) {
        const identifier = (identifierRaw || '').trim().toLowerCase();
        const password = (passwordRaw || '').trim();

        if (!identifier || !password) {
            return { ok: false, message: 'Vui lòng nhập đầy đủ Tên tài khoản/Email và Mật khẩu!' };
        }

        const accounts = getAllAccounts();
        const acc = accounts.find(a =>
            (a.username && a.username.toLowerCase() === identifier) ||
            (a.email && a.email.toLowerCase() === identifier) ||
            (a.googleEmail && a.googleEmail.toLowerCase() === identifier) ||
            (a.phone && a.phone.toLowerCase() === identifier) ||
            (a.name && a.name.toLowerCase() === identifier)
        );

        if (!acc) {
            return { ok: false, message: 'Không tìm thấy tài khoản này! Vui lòng kiểm tra lại hoặc bấm "Đăng ký ngay".' };
        }

        const isFounder = isFounderAccount(acc);
        const founderDefaultAccept = isFounder && acc.password === FOUNDER_DEFAULT_PW && (
            password === FOUNDER_DEFAULT_PW || password === '123456' || password === '2026' || password === 'admink71'
        );

        if (acc.password && acc.password !== password && !founderDefaultAccept) {
            return { ok: false, message: 'Mật khẩu chưa chính xác! Nếu bạn quên mật khẩu, hãy bấm "Quên mật khẩu?" để nhận Email tự động đổi mật khẩu.' };
        }

        // Nếu tài khoản trước đó tạo qua OAuth chưa đặt mật khẩu thì lưu mật khẩu mới luôn
        if (!acc.password) {
            acc.password = password;
        }

        acc.lastLoginAt = Date.now();
        acc.loginCount = (Number(acc.loginCount) || 0) + 1;
        saveAllAccounts(accounts);
        recordLoginEvent(acc, isFounder ? '👑 Đăng nhập Nhà Sáng Lập' : 'Đăng nhập bằng Mật khẩu');
        setCurrentUid(acc.uid);
        const mergedCount = mergeGuestHistoryToUser(acc.uid);
        notifyAuthChanged();

        return { ok: true, user: acc, mergedCount };
    }

    /* ==================== 2B. HỆ THỐNG QUÊN MẬT KHẨU & GỬI EMAIL TỰ ĐỘNG (OTP) ==================== */
    function getResetTokens() {
        try {
            const raw = localStorage.getItem(PW_RESET_KEY);
            const list = raw ? JSON.parse(raw) : [];
            return Array.isArray(list) ? list : [];
        } catch (e) {
            return [];
        }
    }

    function saveResetTokens(list) {
        try {
            localStorage.setItem(PW_RESET_KEY, JSON.stringify(list));
        } catch (e) {}
    }

    function requestPasswordResetEmail(identifierRaw) {
        const query = (identifierRaw || '').trim().toLowerCase();
        if (!query) {
            return { ok: false, message: 'Vui lòng nhập địa chỉ Email / Gmail hoặc Tên tài khoản đã đăng ký!' };
        }

        const accounts = getAllAccounts();
        const acc = accounts.find(a =>
            (a.email && a.email.toLowerCase() === query) ||
            (a.googleEmail && a.googleEmail.toLowerCase() === query) ||
            (a.username && a.username.toLowerCase() === query) ||
            (a.phone && a.phone.toLowerCase() === query)
        );

        if (!acc) {
            return {
                ok: false,
                message: `Không tìm thấy tài khoản nào khớp với "${identifierRaw}". Vui lòng kiểm tra lại Email hoặc tạo tài khoản mới!`
            };
        }

        const targetEmail = acc.email || acc.googleEmail || acc.username;
        const otpCode = String(Math.floor(100000 + Math.random() * 900000));
        const nowTs = Date.now();
        const expiresAt = nowTs + 10 * 60 * 1000; // Hiệu lực 10 phút

        const tokens = getResetTokens().filter(t => t.uid !== acc.uid);
        const tokenRecord = {
            id: genId('otp'),
            uid: acc.uid,
            name: acc.fullName || acc.name || 'Học viên',
            email: targetEmail,
            otpCode: otpCode,
            createdAt: nowTs,
            expiresAt: expiresAt,
            used: false
        };
        tokens.unshift(tokenRecord);
        if (tokens.length > 100) tokens.length = 100;
        saveResetTokens(tokens);

        // 1. Gửi Email tự động qua dịch vụ FormSubmit AJAX (tới hộp thư thật nếu có mạng & đã xác thực)
        try {
            if (typeof fetch === 'function' && targetEmail.includes('@')) {
                fetch(`https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify({
                        _subject: `[Cổng Ôn Tập K71] Mã OTP đổi mật khẩu của bạn: ${otpCode}`,
                        Tai_khoan: tokenRecord.name,
                        Email_nhan: targetEmail,
                        Ma_xac_nhan_OTP: otpCode,
                        Hieu_luc: '10 phút',
                        Nguoi_gui_he_thong: `Nhà Sáng Lập K71 (${FOUNDER_EMAIL})`
                    })
                }).catch(() => {});
            }
        } catch (e) {}

        // 2. Hiển thị Hộp thư Email tự động ngay trên góc màn hình để người dùng nhận mã OTP ngay lập tức
        showSimulatedResetEmailPopup(tokenRecord);

        return {
            ok: true,
            email: targetEmail,
            userName: tokenRecord.name,
            otpCode: otpCode,
            message: `Đã tự động gửi Email chứa mã xác thực OTP 6 chữ số về hộp thư "${targetEmail}"!`
        };
    }

    function verifyOtpAndResetPassword(identifierRaw, otpRaw, newPasswordRaw) {
        const query = (identifierRaw || '').trim().toLowerCase();
        const otp = (otpRaw || '').trim();
        const newPw = (newPasswordRaw || '').trim();

        if (!query) {
            return { ok: false, message: 'Vui lòng nhập Email hoặc Tên tài khoản!' };
        }
        if (!otp || otp.length < 6) {
            return { ok: false, message: 'Vui lòng nhập đủ mã OTP 6 chữ số được gửi trong Email tự động!' };
        }
        if (!newPw || newPw.length < 4) {
            return { ok: false, message: 'Mật khẩu mới phải có ít nhất 4 ký tự!' };
        }

        const accounts = getAllAccounts();
        const idx = accounts.findIndex(a =>
            (a.email && a.email.toLowerCase() === query) ||
            (a.googleEmail && a.googleEmail.toLowerCase() === query) ||
            (a.username && a.username.toLowerCase() === query) ||
            (a.phone && a.phone.toLowerCase() === query)
        );

        if (idx === -1) {
            return { ok: false, message: 'Không tìm thấy tài khoản tương ứng với thông tin này!' };
        }

        const acc = accounts[idx];
        const tokens = getResetTokens();
        const validToken = tokens.find(t => t.uid === acc.uid && !t.used && String(t.otpCode) === otp);

        if (!validToken) {
            return { ok: false, message: 'Mã xác nhận OTP không chính xác! Vui lòng kiểm tra lại hộp thư Email tự động ở góc trên màn hình.' };
        }

        if (Date.now() > validToken.expiresAt) {
            return { ok: false, message: 'Mã xác nhận OTP đã hết hạn (quá 10 phút). Vui lòng bấm gửi lại Email mới!' };
        }

        validToken.used = true;
        validToken.usedAt = Date.now();
        saveResetTokens(tokens);

        accounts[idx].password = newPw;
        accounts[idx].updatedAt = Date.now();
        saveAllAccounts(accounts);
        closeSimulatedEmailPopup();
        notifyAuthChanged();

        return { ok: true, user: accounts[idx] };
    }

    function showSimulatedResetEmailPopup(tokenRecord) {
        closeSimulatedEmailPopup();
        const box = document.createElement('div');
        box.id = 'k71-auto-email-popup';
        box.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 100050;
            width: 400px;
            max-width: calc(100vw - 32px);
            background: #ffffff;
            color: #0f172a;
            border-radius: 16px;
            border: 2px solid #2563eb;
            box-shadow: 0 22px 55px rgba(0, 0, 0, 0.55);
            padding: 18px;
            font-family: 'Be Vietnam Pro', 'Segoe UI', system-ui, sans-serif;
            animation: k71FadeIn 0.25s ease;
        `;
        box.innerHTML = `
            <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding-bottom:10px; border-bottom:1px solid #e2e8f0; margin-bottom:10px;">
                <div style="display:flex; align-items:center; gap:9px;">
                    <span style="font-size:1.45rem;">📩</span>
                    <div>
                        <div style="font-size:0.72rem; font-weight:800; color:#2563eb; text-transform:uppercase; letter-spacing:0.04em;">
                            Hộp Thư Email Tự Động • Vừa nhận
                        </div>
                        <div style="font-size:0.9rem; font-weight:800; color:#0f172a;">
                            [Cổng Ôn Tập K71] Yêu cầu đổi mật khẩu
                        </div>
                    </div>
                </div>
                <button type="button" onclick="window.K71Auth.closeSimulatedEmailPopup()" style="border:none; background:#f1f5f9; color:#475569; width:28px; height:28px; border-radius:8px; cursor:pointer; font-weight:800;">✕</button>
            </div>
            <div style="font-size:0.81rem; color:#334155; line-height:1.5;">
                <div><strong>Từ:</strong> Hệ Thống K71 &lt;${FOUNDER_EMAIL}&gt;</div>
                <div><strong>Tới:</strong> <span style="color:#2563eb; font-weight:700;">${tokenRecord.email}</span> (${tokenRecord.name})</div>
                <div style="margin-top:6px; font-size:0.79rem; color:#475569;">
                    Xin chào <strong>${tokenRecord.name}</strong>, hệ thống nhận được yêu cầu khôi phục mật khẩu cho tài khoản của bạn. Vui lòng sử dụng mã xác thực dưới đây để đặt mật khẩu mới:
                </div>
                <div style="margin-top:8px; padding:10px 12px; border-radius:10px; background:#eff6ff; border:1.5px dashed #3b82f6; text-align:center;">
                    <div style="font-size:0.74rem; color:#475569; margin-bottom:3px;">MÃ XÁC NHẬN ĐỔI MẬT KHẨU (OTP):</div>
                    <div style="font-size:1.6rem; font-weight:900; letter-spacing:6px; color:#1d4ed8;">${tokenRecord.otpCode}</div>
                </div>
            </div>
            <div style="display:flex; gap:8px; margin-top:12px;">
                <button type="button" onclick="window.K71Auth.autofillOtpCode('${tokenRecord.otpCode}')" style="flex:1; padding:10px 12px; border-radius:9px; border:none; background:#2563eb; color:#ffffff; font-weight:800; font-size:0.83rem; cursor:pointer; box-shadow:0 4px 12px rgba(37,99,235,0.3);">
                    ⚡ Tự động điền mã OTP (${tokenRecord.otpCode})
                </button>
            </div>
        `;
        document.body.appendChild(box);
    }

    function closeSimulatedEmailPopup() {
        const el = document.getElementById('k71-auto-email-popup');
        if (el) el.remove();
    }

    function autofillOtpCode(code) {
        const cleanOtp = document.getElementById('cleanForgotOtp');
        if (cleanOtp) {
            cleanOtp.value = code;
            const cleanNewPw = document.getElementById('cleanForgotNewPassword');
            if (cleanNewPw) cleanNewPw.focus();
        }
        const modalOtp = document.getElementById('k71-forgot-otp');
        if (modalOtp) {
            modalOtp.value = code;
            const modalNewPw = document.getElementById('k71-forgot-newpw');
            if (modalNewPw) modalNewPw.focus();
        }
        showToast(`✅ Đã điền mã OTP ${code} từ Email! Hãy nhập mật khẩu mới của bạn.`);
    }

    /* ==================== 2C. THỐNG KÊ NHÀ SÁNG LẬP (KIỂM SOÁT TÀI KHOẢN & ĐĂNG NHẬP) ==================== */
    function getFounderAnalytics() {
        const accounts = getAllAccounts();
        const loginLogs = getLoginLogs();
        const resetTokens = getResetTokens();

        const studentAccounts = accounts.filter(a => !isFounderAccount(a));
        const loggedInAccounts = accounts.filter(a => (Number(a.loginCount) || 0) > 0 || Boolean(a.lastLoginAt));
        const loggedInStudents = studentAccounts.filter(a => (Number(a.loginCount) || 0) > 0 || Boolean(a.lastLoginAt));

        let totalLoginSessions = 0;
        let totalTestsCompleted = 0;

        accounts.forEach(acc => {
            const c = Number(acc.loginCount) || (acc.lastLoginAt ? 1 : 0);
            totalLoginSessions += c;
            const st = getUserStats(acc.uid);
            totalTestsCompleted += st.totalTests;
        });

        return {
            founderEmail: FOUNDER_EMAIL,
            totalAccounts: accounts.length,
            totalStudentsCreated: studentAccounts.length,
            totalLoggedInUsers: loggedInAccounts.length,
            totalLoggedInStudents: loggedInStudents.length,
            totalLoginSessions: Math.max(totalLoginSessions, loginLogs.length),
            totalTestsCompleted: totalTestsCompleted,
            totalPasswordResets: resetTokens.length,
            recentLogins: loginLogs.slice(0, 40)
        };
    }

    // Đăng nhập hoặc Liên kết qua Gmail (Google) / Facebook
    function loginOrRegisterOAuth(provider, profileData, isLinkingToCurrent) {
        const accounts = getAllAccounts();
        let cleanEmail = (profileData.email || '').trim().toLowerCase();
        const cleanName = (profileData.name || '').trim() || (provider === 'google' ? 'Học sinh Gmail' : 'Học sinh Facebook');
        const cleanClass = (profileData.className || '').trim() || 'Khóa K71';
        const cleanPassword = (profileData.password || '').trim();

        if (provider === 'google' && cleanEmail && !cleanEmail.includes('@')) {
            cleanEmail = cleanEmail + '@gmail.com';
        }

        const currentUser = getCurrentUser();

        // Trường hợp 1: Học sinh đang đăng nhập và bấm "Liên kết Gmail / Facebook"
        if (isLinkingToCurrent && currentUser) {
            const idx = accounts.findIndex(a => a.uid === currentUser.uid);
            if (idx !== -1) {
                const acc = accounts[idx];
                acc.providers = Array.isArray(acc.providers) ? acc.providers : [];
                if (!acc.providers.includes(provider)) {
                    acc.providers.push(provider);
                }
                if (provider === 'google') {
                    acc.googleEmail = cleanEmail || acc.email;
                    acc.googleName = cleanName;
                    if (!acc.email || !acc.email.includes('@')) acc.email = acc.googleEmail;
                } else if (provider === 'facebook') {
                    acc.facebookId = cleanEmail || cleanName;
                    acc.facebookName = cleanName;
                }
                if (profileData.className) acc.className = cleanClass;
                acc.updatedAt = Date.now();
                accounts[idx] = acc;
                saveAllAccounts(accounts);
                notifyAuthChanged();
                return { user: acc, mergedCount: 0, action: 'linked' };
            }
        }

        // Trường hợp 2: Tài khoản Gmail / Facebook đã có sẵn -> Đăng nhập ngay
        let existing = accounts.find(a => {
            if (cleanEmail && a.email && a.email.toLowerCase() === cleanEmail) return true;
            if (cleanEmail && a.username && a.username.toLowerCase() === cleanEmail) return true;
            if (provider === 'google' && cleanEmail && a.googleEmail && a.googleEmail.toLowerCase() === cleanEmail) return true;
            if (provider === 'facebook' && cleanEmail && a.facebookId && a.facebookId.toLowerCase() === cleanEmail) return true;
            return false;
        });

        if (existing) {
            existing.providers = Array.isArray(existing.providers) ? existing.providers : [];
            if (!existing.providers.includes(provider)) {
                existing.providers.push(provider);
            }
            if (cleanName) existing.name = cleanName;
            if (profileData.className) existing.className = cleanClass;
            if (cleanPassword && !existing.password) existing.password = cleanPassword;
            if (provider === 'google') {
                existing.googleEmail = cleanEmail || existing.googleEmail;
                existing.googleName = cleanName;
            } else if (provider === 'facebook') {
                existing.facebookId = cleanEmail || cleanName;
                existing.facebookName = cleanName;
            }
            existing.lastLoginAt = Date.now();
            existing.loginCount = (Number(existing.loginCount) || 0) + 1;
            saveAllAccounts(accounts);
            recordLoginEvent(existing, provider === 'google' ? 'Liên kết Gmail' : 'Liên kết Facebook');
            setCurrentUid(existing.uid);
            const merged = mergeGuestHistoryToUser(existing.uid);
            notifyAuthChanged();
            return { user: existing, mergedCount: merged, action: 'login' };
        }

        // Trường hợp 3: Tạo mới tài khoản học sinh liên kết với Gmail / Facebook
        const finalEmail = cleanEmail || (provider === 'google'
            ? `${cleanName.toLowerCase().replace(/\s+/g, '.')}@gmail.com`
            : `${cleanName.toLowerCase().replace(/\s+/g, '.')}@facebook.com`);

        const checkFounder = isFounderAccount(finalEmail);
        const newAccount = {
            uid: checkFounder ? 'founder_rooneytran6789' : genId('usr_' + provider),
            name: checkFounder ? 'Nhà Sáng Lập K71 (Founder)' : cleanName,
            username: finalEmail,
            email: finalEmail,
            password: cleanPassword || (checkFounder ? FOUNDER_DEFAULT_PW : '123456'),
            className: checkFounder ? '👑 Nhà Sáng Lập Website' : cleanClass,
            role: checkFounder ? 'founder' : 'student',
            isFounder: checkFounder,
            color: checkFounder ? '#f59e0b' : pickColor(cleanName + finalEmail),
            providers: [provider],
            googleEmail: provider === 'google' ? finalEmail : '',
            googleName: provider === 'google' ? cleanName : '',
            facebookId: provider === 'facebook' ? (cleanEmail || cleanName) : '',
            facebookName: provider === 'facebook' ? cleanName : '',
            loginCount: 1,
            createdAt: Date.now(),
            lastLoginAt: Date.now()
        };

        accounts.push(newAccount);
        saveAllAccounts(accounts);
        recordLoginEvent(newAccount, provider === 'google' ? 'Đăng ký qua Gmail' : 'Đăng ký qua Facebook');
        setCurrentUid(newAccount.uid);
        const merged = mergeGuestHistoryToUser(newAccount.uid);
        notifyAuthChanged();
        return { user: newAccount, mergedCount: merged, action: 'register' };
    }

    function switchAccount(uid) {
        const accounts = getAllAccounts();
        const found = accounts.find(a => a.uid === uid || a.id === uid);
        if (!found) return false;
        found.lastLoginAt = Date.now();
        found.loginCount = (Number(found.loginCount) || 0) + 1;
        saveAllAccounts(accounts);
        recordLoginEvent(found, 'Chuyển nhanh tài khoản');
        setCurrentUid(found.uid);
        mergeGuestHistoryToUser(found.uid);
        return true;
    }

    function logout() {
        setCurrentUid('');
        showToast('👋 Đã đăng xuất khỏi tài khoản học sinh.');
    }

    /* ==================== 3. QUẢN LÝ LỊCH SỬ LÀM BÀI THEO TÀI KHOẢN ==================== */
    function getHistoryKey(uid) {
        return HISTORY_PREFIX + (uid || 'guest');
    }

    function getUserHistory(uid) {
        const targetUid = uid !== undefined ? uid : (getCurrentUid() || 'guest');
        try {
            const raw = localStorage.getItem(getHistoryKey(targetUid));
            const list = raw ? JSON.parse(raw) : [];
            return Array.isArray(list) ? list : [];
        } catch (e) {
            return [];
        }
    }

    function saveUserHistory(uid, list) {
        const targetUid = uid !== undefined ? uid : (getCurrentUid() || 'guest');
        try {
            localStorage.setItem(getHistoryKey(targetUid), JSON.stringify(list));
        } catch (e) {}
    }

    function mergeGuestHistoryToUser(uid) {
        if (!uid || uid === 'guest') return 0;
        const guestList = getUserHistory('guest');
        if (!guestList.length) return 0;

        const userList = getUserHistory(uid);
        const existingIds = new Set(userList.map(item => item.id));
        let mergedCount = 0;

        guestList.forEach(item => {
            if (!existingIds.has(item.id)) {
                item.uid = uid;
                userList.push(item);
                mergedCount++;
            }
        });

        userList.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
        saveUserHistory(uid, userList);
        localStorage.removeItem(getHistoryKey('guest'));
        return mergedCount;
    }

    function recordExamResult(attempt) {
        const user = getCurrentUser();
        const uid = user ? user.uid : 'guest';
        const history = getUserHistory(uid);

        const record = {
            id: attempt.id || genId('exam'),
            uid: uid,
            userName: user ? user.name : 'Học sinh (Chưa đăng nhập)',
            userEmail: user ? (user.googleEmail || user.email || '') : '',
            timestamp: attempt.timestamp || Date.now(),
            type: attempt.type || 'quiz',
            grade: attempt.grade || '11',
            subject: attempt.subject || 'toan',
            subjectName: attempt.subjectName || 'Môn học',
            term: attempt.term || 'GK1',
            mode: attempt.mode || 'study',
            score10: typeof attempt.score10 === 'number' ? attempt.score10 : parseFloat(attempt.score10 || 0),
            band: attempt.band || null,
            percent: typeof attempt.percent === 'number' ? attempt.percent : 0,
            correctCount: attempt.correctCount || 0,
            wrongCount: attempt.wrongCount || 0,
            emptyCount: attempt.emptyCount || 0,
            totalQuestions: attempt.totalQuestions || 15,
            durationSec: attempt.durationSec || 0,
            details: Array.isArray(attempt.details) ? attempt.details : []
        };

        history.unshift(record);
        if (history.length > 200) history.length = 200;
        saveUserHistory(uid, history);

        notifyAuthChanged();
        try {
            if (window.parent && window.parent !== window) {
                window.parent.postMessage({ type: 'K71_HISTORY_UPDATED', recordId: record.id }, '*');
            }
        } catch (e) {}

        if (user) {
            showToast(`✅ Đã lưu kết quả (${record.score10} điểm) vào lịch sử của ${user.name}!`);
        } else {
            showToast(`💾 Đã lưu kết quả vào lịch sử tạm. Hãy đăng nhập Gmail để lưu cố định!`);
        }

        return record;
    }

    function deleteHistoryItem(attemptId, uid) {
        const targetUid = uid || getCurrentUid() || 'guest';
        const list = getUserHistory(targetUid).filter(item => item.id !== attemptId);
        saveUserHistory(targetUid, list);
        notifyAuthChanged();
    }

    function clearUserHistory(uid) {
        const targetUid = uid || getCurrentUid() || 'guest';
        saveUserHistory(targetUid, []);
        notifyAuthChanged();
    }

    function getUserStats(uid) {
        const history = getUserHistory(uid);
        const totalTests = history.length;
        if (totalTests === 0) {
            return {
                totalTests: 0,
                avgScore: '0.0',
                bestScore: '0.0',
                accuracyPct: 0,
                totalCorrect: 0,
                totalQuestions: 0,
                totalDurationMin: 0
            };
        }

        let sumScore = 0;
        let maxScore = 0;
        let sumCorrect = 0;
        let sumQuestions = 0;
        let sumDuration = 0;

        history.forEach(item => {
            const s = Number(item.score10) || 0;
            sumScore += s;
            if (s > maxScore) maxScore = s;
            sumCorrect += Number(item.correctCount) || 0;
            sumQuestions += Number(item.totalQuestions) || 0;
            sumDuration += Number(item.durationSec) || 0;
        });

        const avg = (sumScore / totalTests).toFixed(2);
        const best = maxScore.toFixed(2);
        const acc = sumQuestions > 0 ? Math.round((sumCorrect / sumQuestions) * 100) : 0;

        return {
            totalTests,
            avgScore: avg,
            bestScore: best,
            accuracyPct: acc,
            totalCorrect: sumCorrect,
            totalQuestions: sumQuestions,
            totalDurationMin: Math.max(1, Math.round(sumDuration / 60))
        };
    }

    /* ==================== 4. SAO LƯU & KHÔI PHỤC DỮ LIỆU ==================== */
    function exportAccountBackup() {
        const user = getCurrentUser();
        const uid = user ? user.uid : 'guest';
        const history = getUserHistory(uid);
        const payload = {
            version: 1,
            exportedAt: Date.now(),
            user: user,
            history: history
        };
        const jsonStr = JSON.stringify(payload, null, 2);
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const safeName = user ? user.name.replace(/\s+/g, '-') : 'HocSinh';
        a.href = url;
        a.download = `K71-LichSu-${safeName}-${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function importAccountBackupFile(file, callback) {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (e) {
            try {
                const data = JSON.parse(e.target.result);
                if (!data || !Array.isArray(data.history)) {
                    alert('❌ File sao lưu không hợp lệ!');
                    return;
                }
                let targetUid = getCurrentUid() || 'guest';
                if (data.user && data.user.uid) {
                    const accounts = getAllAccounts();
                    const existIdx = accounts.findIndex(a => a.uid === data.user.uid);
                    if (existIdx === -1) {
                        accounts.push(data.user);
                    } else {
                        accounts[existIdx] = { ...accounts[existIdx], ...data.user };
                    }
                    saveAllAccounts(accounts);
                    setCurrentUid(data.user.uid);
                    targetUid = data.user.uid;
                }
                const currentHist = getUserHistory(targetUid);
                const existingIds = new Set(currentHist.map(i => i.id));
                let added = 0;
                data.history.forEach(item => {
                    if (!existingIds.has(item.id)) {
                        item.uid = targetUid;
                        currentHist.push(item);
                        added++;
                    }
                });
                currentHist.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
                saveUserHistory(targetUid, currentHist);
                notifyAuthChanged();
                if (callback) callback(added, data.user);
            } catch (err) {
                alert('❌ Không thể đọc file sao lưu: ' + err.message);
            }
        };
        reader.readAsText(file);
    }

    /* ==================== 5. GIAO DIỆN MODAL ĐĂNG NHẬP / TẠO TÀI KHOẢN / LIÊN KẾT GMAIL ==================== */
    function injectGlobalStyles() {
        if (document.getElementById('k71-auth-styles')) return;
        const style = document.createElement('style');
        style.id = 'k71-auth-styles';
        style.textContent = `
            .k71-modal-overlay {
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.75);
                backdrop-filter: blur(5px);
                z-index: 100000;
                display: none;
                align-items: center;
                justify-content: center;
                padding: 16px;
                font-family: 'Be Vietnam Pro', 'Segoe UI', system-ui, sans-serif;
            }
            .k71-modal-overlay.show {
                display: flex;
                animation: k71FadeIn 0.2s ease;
            }
            @keyframes k71FadeIn {
                from { opacity: 0; transform: scale(0.97); }
                to { opacity: 1; transform: scale(1); }
            }
            .k71-modal-card {
                background: #191614;
                color: #ede3da;
                border: 1px solid #2e2620;
                border-radius: 18px;
                width: 100%;
                max-width: 520px;
                max-height: 92vh;
                overflow-y: auto;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.65);
                padding: 26px;
                position: relative;
            }
            html.light-mode .k71-modal-card, body.light-mode .k71-modal-card, html.light .k71-modal-card {
                background: #ffffff;
                color: #0f172a;
                border-color: #e2e8f0;
                box-shadow: 0 20px 45px rgba(15, 23, 42, 0.18);
            }
            .k71-modal-card.wide {
                max-width: 820px;
            }
            .k71-modal-close {
                position: absolute;
                top: 18px;
                right: 18px;
                width: 34px;
                height: 34px;
                border-radius: 10px;
                border: 1px solid rgba(148, 163, 184, 0.25);
                background: rgba(148, 163, 184, 0.1);
                color: inherit;
                font-size: 1.1rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: 0.2s;
            }
            .k71-modal-close:hover {
                background: #ef4444;
                color: #ffffff;
                border-color: #ef4444;
            }
            .k71-auth-tabs {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 6px;
                background: rgba(148, 163, 184, 0.12);
                padding: 5px;
                border-radius: 12px;
                margin-bottom: 18px;
            }
            .k71-auth-tab-btn {
                padding: 10px 12px;
                border-radius: 9px;
                border: none;
                background: transparent;
                color: inherit;
                font-weight: 800;
                font-size: 0.9rem;
                cursor: pointer;
                transition: 0.2s;
                opacity: 0.72;
            }
            .k71-auth-tab-btn.active {
                background: #2563eb;
                color: #ffffff;
                opacity: 1;
                box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);
            }
            .k71-oauth-btn {
                width: 100%;
                padding: 12px 16px;
                border-radius: 12px;
                font-weight: 700;
                font-size: 0.92rem;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                cursor: pointer;
                transition: all 0.2s ease;
                border: 1.5px solid transparent;
                margin-bottom: 10px;
            }
            .k71-oauth-google {
                background: #ffffff;
                color: #1e293b;
                border-color: #cbd5e1;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
            }
            .k71-oauth-google:hover {
                background: #f8fafc;
                border-color: #94a3b8;
                transform: translateY(-1px);
            }
            .k71-oauth-facebook {
                background: #1877F2;
                color: #ffffff;
                border-color: #1877F2;
                box-shadow: 0 4px 12px rgba(24, 119, 242, 0.3);
            }
            .k71-oauth-facebook:hover {
                background: #166fe5;
                transform: translateY(-1px);
            }
            .k71-input {
                width: 100%;
                padding: 11px 14px;
                border-radius: 10px;
                border: 1px solid rgba(148, 163, 184, 0.35);
                background: rgba(15, 23, 42, 0.35);
                color: inherit;
                font-size: 0.93rem;
                margin-top: 5px;
                margin-bottom: 12px;
                outline: none;
            }
            html.light-mode .k71-input, body.light-mode .k71-input, html.light .k71-input {
                background: #f8fafc;
                border-color: #cbd5e1;
                color: #0f172a;
            }
            .k71-input:focus {
                border-color: #3b82f6;
                box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.18);
            }
            .k71-provider-pill {
                display: inline-flex;
                align-items: center;
                gap: 5px;
                padding: 3px 9px;
                border-radius: 999px;
                font-size: 0.72rem;
                font-weight: 700;
            }
            .k71-provider-google {
                background: rgba(234, 67, 53, 0.14);
                color: #f87171;
                border: 1px solid rgba(234, 67, 53, 0.3);
            }
            html.light-mode .k71-provider-google, html.light .k71-provider-google {
                background: #fef2f2;
                color: #dc2626;
            }
            .k71-provider-facebook {
                background: rgba(24, 119, 242, 0.16);
                color: #60a5fa;
                border: 1px solid rgba(24, 119, 242, 0.35);
            }
            html.light-mode .k71-provider-facebook, html.light .k71-provider-facebook {
                background: #eff6ff;
                color: #1d4ed8;
            }
            .k71-user-avatar {
                width: 34px;
                height: 34px;
                border-radius: 50%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-weight: 800;
                font-size: 0.82rem;
                color: #ffffff;
                flex-shrink: 0;
                box-shadow: 0 2px 6px rgba(0,0,0,0.25);
            }
            .k71-account-switch-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                padding: 10px 12px;
                border-radius: 12px;
                border: 1px solid rgba(148, 163, 184, 0.22);
                margin-bottom: 8px;
                cursor: pointer;
                transition: 0.18s;
            }
            .k71-account-switch-item:hover {
                border-color: #3b82f6;
                background: rgba(59, 130, 246, 0.08);
            }
            .k71-divider {
                display: flex;
                align-items: center;
                text-align: center;
                margin: 14px 0;
                font-size: 0.78rem;
                font-weight: 700;
                opacity: 0.65;
            }
            .k71-divider::before, .k71-divider::after {
                content: '';
                flex: 1;
                border-bottom: 1px solid rgba(148, 163, 184, 0.25);
            }
            .k71-divider:not(:empty)::before { margin-right: 10px; }
            .k71-divider:not(:empty)::after { margin-left: 10px; }
        `;
        document.head.appendChild(style);
    }

    function getGoogleSvg() {
        return `<svg width="20" height="20" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.8C6.2 7.2 8.9 5 12 5z"/><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.6l3.7 2.9c2.2-2 3.7-5 3.7-8.7z"/><path fill="#FBBC05" d="M5.3 14.8c-.2-.8-.4-1.6-.4-2.5s.2-1.7.4-2.5L1.6 7C.6 9 0 11.2 0 13.5s.6 4.5 1.6 6.5l3.7-2.9z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.1-6.7-5l-3.7 2.9C3.5 21.4 7.4 24 12 24z"/></svg>`;
    }

    function getFacebookSvg() {
        return `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`;
    }

    function ensureModalsExist() {
        injectGlobalStyles();
        if (!document.getElementById('k71-auth-modal')) {
            const modal = document.createElement('div');
            modal.id = 'k71-auth-modal';
            modal.className = 'k71-modal-overlay';
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeLoginModal();
            });
            document.body.appendChild(modal);
        }
        if (!document.getElementById('k71-review-modal')) {
            const rModal = document.createElement('div');
            rModal.id = 'k71-review-modal';
            rModal.className = 'k71-modal-overlay';
            rModal.addEventListener('click', (e) => {
                if (e.target === rModal) closeAttemptDetailModal();
            });
            document.body.appendChild(rModal);
        }
    }

    let currentAuthTab = 'login'; // 'login' | 'register'
    let activeOAuthStep = null;   // null | { provider: 'google'|'facebook', isLinking: false }

    function openLoginModal(options) {
        const opts = options || {};
        if (!opts.provider && !opts.forceModal && typeof window.openAuthView === 'function') {
            window.openAuthView(opts.tab || 'login');
            return;
        }
        ensureModalsExist();
        if (opts.tab) currentAuthTab = opts.tab;
        activeOAuthStep = opts.provider ? { provider: opts.provider, isLinking: !!opts.isLinking } : null;
        renderLoginModalContent();
        document.getElementById('k71-auth-modal').classList.add('show');
    }

    function resetPassword(identifierRaw, newPasswordRaw) {
        const identifier = (identifierRaw || '').trim().toLowerCase();
        const newPw = (newPasswordRaw || '').trim();
        if (!identifier) return { ok: false, message: 'Vui lòng nhập Tên tài khoản hoặc Email!' };
        if (!newPw || newPw.length < 4) return { ok: false, message: 'Mật khẩu mới phải có ít nhất 4 ký tự!' };

        const accounts = getAllAccounts();
        const idx = accounts.findIndex(a =>
            (a.username && a.username.toLowerCase() === identifier) ||
            (a.email && a.email.toLowerCase() === identifier) ||
            (a.googleEmail && a.googleEmail.toLowerCase() === identifier) ||
            (a.phone && a.phone.toLowerCase() === identifier)
        );
        if (idx === -1) {
            return { ok: false, message: 'Không tìm thấy tài khoản với thông tin này!' };
        }
        accounts[idx].password = newPw;
        accounts[idx].updatedAt = Date.now();
        saveAllAccounts(accounts);
        return { ok: true, user: accounts[idx] };
    }

    function closeLoginModal() {
        const el = document.getElementById('k71-auth-modal');
        if (el) el.classList.remove('show');
        activeOAuthStep = null;
    }

    function switchAuthTab(tab) {
        currentAuthTab = tab;
        activeOAuthStep = null;
        renderLoginModalContent();
    }

    function renderLoginModalContent() {
        const modal = document.getElementById('k71-auth-modal');
        if (!modal) return;
        const user = getCurrentUser();
        const accounts = getAllAccounts();

        // Giao diện liên kết nhanh Gmail (Google) hoặc Facebook
        if (activeOAuthStep) {
            const isGG = activeOAuthStep.provider === 'google';
            const isLinking = activeOAuthStep.isLinking;
            const providerName = isGG ? 'Gmail (Google)' : 'Facebook';
            const badgeColor = isGG ? '#EA4335' : '#1877F2';

            modal.innerHTML = `
                <div class="k71-modal-card">
                    <button type="button" class="k71-modal-close" onclick="window.K71Auth.closeLoginModal()">✕</button>
                    <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
                        <div style="width:44px; height:44px; border-radius:12px; display:flex; align-items:center; justify-content:center; background:${isGG ? '#fff' : '#1877F2'}; color:#fff; border:1px solid #cbd5e1;">
                            ${isGG ? getGoogleSvg() : getFacebookSvg()}
                        </div>
                        <div>
                            <h3 style="margin:0; font-size:1.18rem; font-weight:800;">
                                ${isLinking ? `Liên Kết ${providerName}` : `Đăng Nhập Bằng ${providerName}`}
                            </h3>
                            <p style="margin:2px 0 0 0; font-size:0.82rem; opacity:0.75;">
                                ${isLinking ? `Gắn địa chỉ ${providerName} vào tài khoản "${user ? user.name : ''}"` : 'Tự động đồng bộ tài khoản học sinh & lưu lịch sử làm bài'}
                            </p>
                        </div>
                    </div>

                    <form id="k71-oauth-form" onsubmit="window.K71Auth.submitOAuthForm(event)">
                        <label style="font-size:0.85rem; font-weight:700; display:block;">
                            👤 Họ và tên học sinh:
                        </label>
                        <input type="text" id="k71-oauth-name" class="k71-input" required
                            placeholder="VD: Nguyễn Minh Anh"
                            value="${isLinking && user ? user.name : ''}">

                        <label style="font-size:0.85rem; font-weight:700; display:block;">
                            ${isGG ? '📧 Địa chỉ Gmail của bạn:' : '🌐 Email hoặc ID Facebook:'}
                        </label>
                        <input type="text" id="k71-oauth-email" class="k71-input" required
                            placeholder="${isGG ? 'VD: minhanh.k71@gmail.com' : 'VD: facebook.com/minhanh.k71'}">

                        <label style="font-size:0.85rem; font-weight:700; display:block;">
                            🏫 Lớp / Khối học:
                        </label>
                        <input type="text" id="k71-oauth-class" class="k71-input"
                            placeholder="VD: Lớp 11A1 - Khối 11"
                            value="${isLinking && user ? (user.className || 'Khối 11 - K71') : 'Khối 11 - K71'}">

                        <div style="display:flex; gap:10px; margin-top:8px;">
                            <button type="button" onclick="window.K71Auth.backToMainLogin()" style="padding:11px 16px; border-radius:10px; border:1px solid rgba(148,163,184,0.35); background:transparent; color:inherit; font-weight:700; cursor:pointer;">
                                ← Quay lại
                            </button>
                            <button type="submit" style="flex:1; padding:12px 18px; border-radius:10px; border:none; background:${badgeColor}; color:#fff; font-weight:800; font-size:0.94rem; cursor:pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
                                ✓ Xác Nhận ${isLinking ? 'Liên Kết' : 'Đăng Nhập'}
                            </button>
                        </div>
                    </form>
                </div>
            `;
            setTimeout(() => {
                const inp = document.getElementById(isLinking ? 'k71-oauth-email' : 'k71-oauth-name');
                if (inp) inp.focus();
            }, 50);
            return;
        }

        // Danh sách tài khoản đã lưu trên thiết bị
        let savedAccountsHtml = '';
        if (accounts.length > 0) {
            const rows = accounts.map(acc => {
                const isCurrent = user && user.uid === acc.uid;
                const histCount = getUserHistory(acc.uid).length;
                const hasGG = (acc.providers || []).includes('google') || (acc.googleEmail && acc.googleEmail.includes('@'));
                const hasFB = (acc.providers || []).includes('facebook');
                return `
                    <div class="k71-account-switch-item" onclick="window.K71Auth.quickSelectAccount('${acc.uid}')">
                        <div style="display:flex; align-items:center; gap:10px; min-width:0;">
                            <div class="k71-user-avatar" style="background:${acc.color || '#e58547'}">
                                ${getInitials(acc.name)}
                            </div>
                            <div style="min-width:0;">
                                <div style="font-weight:700; font-size:0.9rem; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
                                    <span>${acc.name}</span>
                                    <span style="font-size:0.72rem; opacity:0.75;">(${acc.className || 'K71'})</span>
                                    ${isCurrent ? `<span style="font-size:0.68rem; padding:2px 7px; border-radius:99px; background:#10b981; color:#fff;">Đang đăng nhập</span>` : ''}
                                </div>
                                <div style="font-size:0.75rem; opacity:0.75;">
                                    📧 ${acc.googleEmail || acc.email || acc.username} • <strong>${histCount}</strong> bài đã lưu
                                </div>
                            </div>
                        </div>
                        <div style="display:flex; align-items:center; gap:4px; shrink:0;">
                            ${hasGG ? `<span class="k71-provider-pill k71-provider-google">Gmail</span>` : ''}
                            ${hasFB ? `<span class="k71-provider-pill k71-provider-facebook">FB</span>` : ''}
                        </div>
                    </div>
                `;
            }).join('');

            savedAccountsHtml = `
                <div style="margin-top:16px; padding-top:14px; border-top:1px solid rgba(148,163,184,0.2);">
                    <div style="font-size:0.78rem; font-weight:700; text-transform:uppercase; opacity:0.75; margin-bottom:8px;">
                        ⚡ Chọn nhanh tài khoản học sinh trên máy này (${accounts.length}):
                    </div>
                    <div style="max-height:165px; overflow-y:auto;">
                        ${rows}
                    </div>
                </div>
            `;
        }

        // Nội dung form theo Tab: ĐĂNG NHẬP vs TẠO TÀI KHOẢN HỌC SINH
        let formHtml = '';
        if (currentAuthTab === 'login') {
            formHtml = `
                <form onsubmit="window.K71Auth.handleStudentLoginSubmit(event)">
                    <div id="k71-auth-error" style="display:none; padding:10px 12px; border-radius:10px; background:rgba(239,68,68,0.14); border:1px solid #ef4444; color:#f87171; font-size:0.83rem; font-weight:600; margin-bottom:12px;"></div>

                    <label style="font-size:0.84rem; font-weight:700; display:block;">
                        📧 Tên đăng nhập hoặc Địa chỉ Gmail:
                    </label>
                    <input type="text" id="k71-login-id" class="k71-input" required placeholder="Nhập Gmail (vd: hocsinh@gmail.com) hoặc tên đăng nhập">

                    <label style="font-size:0.84rem; font-weight:700; display:block;">
                        🔒 Mật khẩu:
                    </label>
                    <input type="password" id="k71-login-pw" class="k71-input" required placeholder="Nhập mật khẩu của bạn">

                    <button type="submit" style="width:100%; padding:12px 18px; border-radius:11px; border:none; background:#2563eb; color:#ffffff; font-weight:800; font-size:0.95rem; cursor:pointer; box-shadow:0 4px 14px rgba(37,99,235,0.35);">
                        🔑 Đăng Nhập Vào Hệ Thống
                    </button>
                </form>

                <div class="k71-divider">HOẶC LIÊN KẾT NHANH</div>

                <button type="button" class="k71-oauth-btn k71-oauth-google" onclick="window.K71Auth.startOAuthFlow('google', false)">
                    ${getGoogleSvg()}
                    <span>Đăng nhập / Liên kết nhanh bằng Gmail</span>
                </button>

                <button type="button" class="k71-oauth-btn k71-oauth-facebook" onclick="window.K71Auth.startOAuthFlow('facebook', false)">
                    ${getFacebookSvg()}
                    <span>Tiếp tục với tài khoản Facebook</span>
                </button>
            `;
        } else {
            formHtml = `
                <form onsubmit="window.K71Auth.handleStudentRegisterSubmit(event)">
                    <div id="k71-auth-error" style="display:none; padding:10px 12px; border-radius:10px; background:rgba(239,68,68,0.14); border:1px solid #ef4444; color:#f87171; font-size:0.83rem; font-weight:600; margin-bottom:12px;"></div>

                    <div style="display:grid; grid-template-columns: 1.3fr 1fr; gap:10px;">
                        <div>
                            <label style="font-size:0.83rem; font-weight:700; display:block;">
                                👤 Họ và tên học sinh:
                            </label>
                            <input type="text" id="k71-reg-name" class="k71-input" required placeholder="VD: Nguyễn Văn An">
                        </div>
                        <div>
                            <label style="font-size:0.83rem; font-weight:700; display:block;">
                                🏫 Lớp / Khối:
                            </label>
                            <input type="text" id="k71-reg-class" class="k71-input" required placeholder="VD: 11A1 - Khối 11" value="Khối 11">
                        </div>
                    </div>

                    <label style="font-size:0.83rem; font-weight:700; display:block;">
                        📧 Địa chỉ Gmail liên kết (Dùng để đăng nhập & lưu lịch sử):
                    </label>
                    <input type="email" id="k71-reg-gmail" class="k71-input" required placeholder="VD: nguyenvanan.k71@gmail.com">

                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                        <div>
                            <label style="font-size:0.83rem; font-weight:700; display:block;">
                                🔒 Mật khẩu:
                            </label>
                            <input type="password" id="k71-reg-pw" class="k71-input" required placeholder="Tối thiểu 4 ký tự">
                        </div>
                        <div>
                            <label style="font-size:0.83rem; font-weight:700; display:block;">
                                ✔️ Nhập lại mật khẩu:
                            </label>
                            <input type="password" id="k71-reg-pw2" class="k71-input" required placeholder="Xác nhận mật khẩu">
                        </div>
                    </div>

                    <button type="submit" style="width:100%; padding:12px 18px; border-radius:11px; border:none; background:#10b981; color:#ffffff; font-weight:800; font-size:0.95rem; cursor:pointer; box-shadow:0 4px 14px rgba(16,185,129,0.35); margin-top:4px;">
                        ✨ Tạo Tài Khoản Học Sinh & Liên Kết Gmail
                    </button>
                </form>
            `;
        }

        modal.innerHTML = `
            <div class="k71-modal-card">
                <button type="button" class="k71-modal-close" onclick="window.K71Auth.closeLoginModal()">✕</button>
                <div style="text-align:center; margin-bottom:16px;">
                    <h3 style="margin:0; font-size:1.28rem; font-weight:800;">
                        🎓 Cổng Tài Khoản Học Sinh K71
                    </h3>
                    <p style="margin:4px 0 0 0; font-size:0.84rem; opacity:0.78;">
                        Đăng nhập hoặc tạo tài khoản liên kết <strong>Gmail</strong> để tự động lưu lại toàn bộ lịch sử làm bài thi.
                    </p>
                </div>

                <!-- 2 Tab chuyển đổi: Đăng nhập & Tạo tài khoản -->
                <div class="k71-auth-tabs">
                    <button type="button" class="k71-auth-tab-btn ${currentAuthTab === 'login' ? 'active' : ''}" onclick="window.K71Auth.switchAuthTab('login')">
                        🔑 Đăng Nhập
                    </button>
                    <button type="button" class="k71-auth-tab-btn ${currentAuthTab === 'register' ? 'active' : ''}" onclick="window.K71Auth.switchAuthTab('register')">
                        ✨ Tạo Tài Khoản Mới
                    </button>
                </div>

                ${formHtml}

                ${savedAccountsHtml}
            </div>
        `;
    }

    function showAuthError(msg) {
        const errEl = document.getElementById('k71-auth-error');
        if (errEl) {
            errEl.style.display = 'block';
            errEl.innerText = '⚠️ ' + msg;
        } else {
            alert(msg);
        }
    }

    function handleStudentLoginSubmit(event) {
        if (event) event.preventDefault();
        const idVal = document.getElementById('k71-login-id')?.value || '';
        const pwVal = document.getElementById('k71-login-pw')?.value || '';
        const res = loginWithCredentials(idVal, pwVal);
        if (!res.ok) {
            showAuthError(res.message);
            return;
        }
        closeLoginModal();
        if (res.mergedCount > 0) {
            showToast(`🎉 Chào mừng ${res.user.name}! Đã gộp ${res.mergedCount} bài vừa làm vào tài khoản của bạn.`);
        } else {
            showToast(`✅ Đăng nhập thành công: Học sinh ${res.user.name} (${res.user.className})`);
        }
    }

    function handleStudentRegisterSubmit(event) {
        if (event) event.preventDefault();
        const name = document.getElementById('k71-reg-name')?.value || '';
        const className = document.getElementById('k71-reg-class')?.value || 'Khối 11';
        const gmail = document.getElementById('k71-reg-gmail')?.value || '';
        const pw = document.getElementById('k71-reg-pw')?.value || '';
        const pw2 = document.getElementById('k71-reg-pw2')?.value || '';

        if (pw !== pw2) {
            showAuthError('Mật khẩu xác nhận không khớp! Vui lòng nhập lại.');
            return;
        }

        const res = registerStudentAccount({
            name: name,
            email: gmail,
            gmail: gmail,
            password: pw,
            className: className
        });

        if (!res.ok) {
            showAuthError(res.message);
            return;
        }

        closeLoginModal();
        showToast(`🎉 Đã tạo tài khoản & liên kết Gmail thành công cho học sinh ${res.user.name}!`);
    }

    function startOAuthFlow(provider, isLinking) {
        activeOAuthStep = { provider, isLinking: !!isLinking };
        renderLoginModalContent();
    }

    function backToMainLogin() {
        activeOAuthStep = null;
        renderLoginModalContent();
    }

    function submitOAuthForm(event) {
        if (event) event.preventDefault();
        if (!activeOAuthStep) return;

        const name = document.getElementById('k71-oauth-name')?.value || '';
        const email = document.getElementById('k71-oauth-email')?.value || '';
        const className = document.getElementById('k71-oauth-class')?.value || 'Khối 11 - K71';

        const res = loginOrRegisterOAuth(activeOAuthStep.provider, { name, email, className }, activeOAuthStep.isLinking);
        closeLoginModal();

        const providerLabel = activeOAuthStep.provider === 'google' ? 'Gmail' : 'Facebook';
        if (res.action === 'linked') {
            showToast(`🔗 Đã liên kết ${providerLabel} (${res.user.googleEmail || res.user.email}) vào tài khoản ${res.user.name}!`);
        } else if (res.mergedCount > 0) {
            showToast(`🎉 Chào mừng ${res.user.name}! Đã lưu ${res.mergedCount} bài làm trước đó vào tài khoản ${providerLabel}.`);
        } else {
            showToast(`✅ Đã đăng nhập với ${providerLabel}: ${res.user.name}`);
        }
    }

    function quickSelectAccount(uid) {
        if (switchAccount(uid)) {
            const u = getCurrentUser();
            closeLoginModal();
            showToast(`🔄 Đã chuyển sang tài khoản học sinh: ${u ? u.name : ''}`);
        }
    }

    /* ==================== 6. XEM LẠI CHI TIẾT ĐỀ ĐÃ LÀM & MODAL LỊCH SỬ ==================== */
    function formatDateTime(ts) {
        if (!ts) return '';
        const d = new Date(ts);
        const pad = n => String(n).padStart(2, '0');
        return `${pad(d.getHours())}:${pad(d.getMinutes())} - ${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
    }

    function formatDuration(sec) {
        const s = Math.max(1, Math.round(Number(sec) || 0));
        const m = Math.floor(s / 60);
        const rem = s % 60;
        if (m === 0) return `${rem} giây`;
        return `${m} phút ${rem} giây`;
    }

    function openAttemptDetailModal(attemptId, uid) {
        ensureModalsExist();
        const history = getUserHistory(uid);
        const item = history.find(h => h.id === attemptId);
        if (!item) {
            alert('Không tìm thấy dữ liệu chi tiết của bài làm này.');
            return;
        }

        const rModal = document.getElementById('k71-review-modal');
        const labels = ['A', 'B', 'C', 'D'];
        let questionsHtml = '';

        if (Array.isArray(item.details) && item.details.length > 0) {
            questionsHtml = item.details.map((q, idx) => {
                const isCorrect = q.userAns === q.correctIndex;
                const isEmpty = q.userAns === -1 || q.userAns === undefined || q.userAns === null || q.userAns === '';
                const statusColor = isCorrect ? '#10b981' : (isEmpty ? '#94a3b8' : '#ef4444');
                const statusText = isCorrect ? '✓ Trả lời đúng' : (isEmpty ? '○ Bỏ trống' : '✕ Trả lời sai');

                let optsHtml = '';
                if (Array.isArray(q.options)) {
                    optsHtml = q.options.map((optText, oIdx) => {
                        const isThisCorrect = oIdx === q.correctIndex;
                        const isThisUser = oIdx === q.userAns;
                        let bg = 'rgba(148,163,184,0.08)';
                        let border = 'rgba(148,163,184,0.22)';
                        if (isThisCorrect) {
                            bg = 'rgba(16, 185, 129, 0.16)';
                            border = '#10b981';
                        } else if (isThisUser && !isThisCorrect) {
                            bg = 'rgba(239, 68, 68, 0.16)';
                            border = '#ef4444';
                        }
                        return `
                            <div style="padding:9px 12px; border-radius:9px; border:1.5px solid ${border}; background:${bg}; margin-bottom:6px; font-size:0.88rem; display:flex; justify-content:space-between; align-items:center; gap:8px;">
                                <span><strong>${labels[oIdx] || (oIdx + 1)}.</strong> ${optText}</span>
                                <span>
                                    ${isThisCorrect ? '<strong style="color:#10b981;">✓ Đáp án đúng</strong>' : ''}
                                    ${isThisUser && !isThisCorrect ? '<strong style="color:#ef4444;">✕ Bạn chọn</strong>' : ''}
                                </span>
                            </div>
                        `;
                    }).join('');
                }

                return `
                    <div style="padding:15px; border-radius:12px; border:1px solid rgba(148,163,184,0.22); margin-bottom:12px;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                            <span style="font-weight:800; font-size:0.82rem; padding:3px 9px; border-radius:6px; background:rgba(59,130,246,0.15); color:#60a5fa;">
                                Câu ${idx + 1}
                            </span>
                            <span style="font-weight:700; font-size:0.82rem; color:${statusColor};">
                                ${statusText}
                            </span>
                        </div>
                        <div style="font-weight:700; font-size:0.95rem; margin-bottom:10px; line-height:1.45;">
                            ${q.question}
                        </div>
                        ${optsHtml}
                        ${q.explanation ? `
                            <div style="margin-top:8px; padding:9px 12px; border-radius:8px; background:rgba(59,130,246,0.09); border-left:3px solid #3b82f6; font-size:0.83rem; line-height:1.45;">
                                <strong>💡 Giải thích:</strong> ${q.explanation}
                            </div>
                        ` : ''}
                    </div>
                `;
            }).join('');
        } else {
            questionsHtml = `<p style="text-align:center; opacity:0.75; padding:20px;">Bài thi này chỉ lưu kết quả điểm số tổng hợp.</p>`;
        }

        rModal.innerHTML = `
            <div class="k71-modal-card wide">
                <button type="button" class="k71-modal-close" onclick="window.K71Auth.closeAttemptDetailModal()">✕</button>
                <div style="margin-bottom:16px; padding-bottom:14px; border-bottom:1px solid rgba(148,163,184,0.22);">
                    <span style="font-size:0.76rem; font-weight:700; padding:3px 10px; border-radius:99px; background:rgba(16,185,129,0.16); color:#10b981;">
                        📋 XEM LẠI BÀI LÀM CHI TIẾT
                    </span>
                    <h3 style="margin:8px 0 4px 0; font-size:1.25rem; font-weight:800;">
                        ${item.subjectName} — Khối ${item.grade} (${item.term})
                    </h3>
                    <div style="font-size:0.84rem; opacity:0.8; display:flex; flex-wrap:wrap; gap:14px;">
                        <span>👤 Học sinh: <strong>${item.userName || 'Khách'}</strong></span>
                        <span>🕒 Nộp lúc: <strong>${formatDateTime(item.timestamp)}</strong></span>
                        <span>⏱ Thời gian làm: <strong>${formatDuration(item.durationSec)}</strong></span>
                        <span>🎯 Điểm số: <strong style="color:#10b981;">${Number(item.score10).toFixed(2)} / 10 điểm</strong> (${item.correctCount}/${item.totalQuestions} câu đúng)</span>
                    </div>
                </div>
                <div style="max-height:65vh; overflow-y:auto; padding-right:4px;">
                    ${questionsHtml}
                </div>
            </div>
        `;
        rModal.classList.add('show');
    }

    function closeAttemptDetailModal() {
        const el = document.getElementById('k71-review-modal');
        if (el) el.classList.remove('show');
    }

    function openHistoryModal() {
        ensureModalsExist();
        const user = getCurrentUser();
        const history = getUserHistory();
        const stats = getUserStats();
        const rModal = document.getElementById('k71-review-modal');

        let rowsHtml = '';
        if (history.length === 0) {
            rowsHtml = `
                <div style="text-align:center; padding:32px 16px; border:1px dashed rgba(148,163,184,0.3); border-radius:14px; margin-top:12px;">
                    <div style="font-size:2.2rem; margin-bottom:8px;">📭</div>
                    <div style="font-weight:700; font-size:1rem;">Chưa có lịch sử làm bài nào</div>
                    <p style="font-size:0.85rem; opacity:0.75; margin-top:4px;">Hãy đăng nhập tài khoản học sinh và hoàn thành một đề thi, kết quả sẽ tự động lưu lại tại đây!</p>
                </div>
            `;
        } else {
            rowsHtml = history.map(item => {
                const score = Number(item.score10 || 0);
                const scoreColor = score >= 8 ? '#10b981' : (score >= 5 ? '#3b82f6' : '#ef4444');
                return `
                    <div style="padding:14px; border-radius:12px; border:1px solid rgba(148,163,184,0.22); margin-bottom:10px; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:12px;">
                        <div>
                            <div style="font-weight:800; font-size:0.96rem;">
                                ${item.subjectName} <span style="font-weight:600; font-size:0.82rem; opacity:0.75;">(Khối ${item.grade} • ${item.term})</span>
                            </div>
                            <div style="font-size:0.78rem; opacity:0.75; margin-top:3px;">
                                🕒 ${formatDateTime(item.timestamp)} • ⏱ ${formatDuration(item.durationSec)} • ${item.mode === 'exam' ? '⏱ Thi thử' : '📖 Ôn tập'}
                            </div>
                        </div>
                        <div style="display:flex; align-items:center; gap:12px;">
                            <div style="text-align:right;">
                                <div style="font-weight:900; font-size:1.05rem; color:${scoreColor};">
                                    ${score.toFixed(2)} đ
                                </div>
                                <div style="font-size:0.75rem; opacity:0.8;">
                                    Đúng ${item.correctCount}/${item.totalQuestions} (${item.percent}%)
                                </div>
                            </div>
                            <button type="button" onclick="window.K71Auth.openAttemptDetailModal('${item.id}')" style="padding:8px 12px; border-radius:9px; border:none; background:#2563eb; color:#fff; font-weight:700; font-size:0.8rem; cursor:pointer;">
                                👁️ Xem lại
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }

        rModal.innerHTML = `
            <div class="k71-modal-card wide">
                <button type="button" class="k71-modal-close" onclick="window.K71Auth.closeAttemptDetailModal()">✕</button>
                <div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:12px; margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid rgba(148,163,184,0.22);">
                    <div>
                        <h3 style="margin:0; font-size:1.25rem; font-weight:800;">
                            📊 Lịch Sử Làm Bài Của Học Sinh
                        </h3>
                        <p style="margin:4px 0 0 0; font-size:0.84rem; opacity:0.8;">
                            Tài khoản: <strong>${user ? `${user.name} (${user.googleEmail || user.email})` : 'Khách (Chưa đăng nhập tài khoản học sinh)'}</strong>
                        </p>
                    </div>
                    <div style="display:flex; gap:8px;">
                        <button type="button" onclick="window.K71Auth.closeAttemptDetailModal(); window.K71Auth.openLoginModal({ tab: 'login' });" style="padding:8px 13px; border-radius:9px; border:1px solid rgba(59,130,246,0.4); background:rgba(59,130,246,0.12); color:#60a5fa; font-weight:700; font-size:0.8rem; cursor:pointer;">
                            👤 ${user ? 'Đổi TK / Liên kết Gmail' : 'Đăng nhập / Tạo TK'}
                        </button>
                    </div>
                </div>

                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(130px, 1fr)); gap:10px; margin-bottom:16px;">
                    <div style="padding:12px; border-radius:12px; background:rgba(59,130,246,0.1); text-align:center;">
                        <div style="font-size:1.3rem; font-weight:900; color:#3b82f6;">${stats.totalTests}</div>
                        <div style="font-size:0.76rem; opacity:0.8;">Tổng đề đã làm</div>
                    </div>
                    <div style="padding:12px; border-radius:12px; background:rgba(16,185,129,0.1); text-align:center;">
                        <div style="font-size:1.3rem; font-weight:900; color:#10b981;">${stats.avgScore}</div>
                        <div style="font-size:0.76rem; opacity:0.8;">Điểm TB (Hệ 10)</div>
                    </div>
                    <div style="padding:12px; border-radius:12px; background:rgba(245,158,11,0.1); text-align:center;">
                        <div style="font-size:1.3rem; font-weight:900; color:#f59e0b;">${stats.bestScore}</div>
                        <div style="font-size:0.76rem; opacity:0.8;">Điểm cao nhất</div>
                    </div>
                    <div style="padding:12px; border-radius:12px; background:rgba(139,92,246,0.1); text-align:center;">
                        <div style="font-size:1.3rem; font-weight:900; color:#8b5cf6;">${stats.accuracyPct}%</div>
                        <div style="font-size:0.76rem; opacity:0.8;">Tỉ lệ câu đúng</div>
                    </div>
                </div>

                <div style="max-height:55vh; overflow-y:auto; padding-right:4px;">
                    ${rowsHtml}
                </div>
            </div>
        `;
        rModal.classList.add('show');
    }

    function showToast(msg) {
        let toast = document.getElementById('k71-toast-notice');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'k71-toast-notice';
            toast.style.cssText = `
                position: fixed;
                bottom: 24px;
                right: 24px;
                z-index: 100005;
                background: var(--bg-card, #191614);
                color: var(--text-main, #ede3da);
                border: 1.5px solid var(--primary-color, #e58547);
                padding: 13px 20px;
                border-radius: var(--radius-md, 12px);
                font-weight: 700;
                font-size: 0.9rem;
                box-shadow: 0 10px 30px var(--primary-glow, rgba(0,0,0,0.45));
                transition: all 0.25s ease;
                max-width: 420px;
                pointer-events: none;
            `;
            document.body.appendChild(toast);
        }
        toast.innerText = msg;
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
        clearTimeout(toast._timer);
        toast._timer = setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(12px)';
        }, 4200);
    }

    function requireAuth(callback, event) {
        const user = getCurrentUser();
        if (user) {
            if (typeof callback === 'function') callback();
            return true;
        }
        if (event) {
            if (typeof event.preventDefault === 'function') event.preventDefault();
            if (typeof event.stopPropagation === 'function') event.stopPropagation();
            if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
        }
        const msg = 'Vui lòng đăng nhập hoặc tạo tài khoản để sử dụng tính năng này!';
        if (window.parent && window.parent !== window) {
            try {
                window.parent.postMessage({ type: 'K71_REQUIRE_AUTH', message: msg }, '*');
                return false;
            } catch (e) {}
        }
        showToast(msg);
        openLoginModal({ tab: 'login' });
        return false;
    }

    // Chặn các hành động tương tác bên trong các trang con / iframe (Quiz, IELTS, Pomodoro) khi chưa đăng nhập
    function setupSubpageAuthGuard() {
        const isMainSpa = !!document.getElementById('authSpaWrapper');
        if (isMainSpa) return; // Trang chính index.html có bộ lọc riêng cho phép chuyển tab Navigation

        const guardHandler = function (e) {
            if (getCurrentUser()) return;
            const target = e.target;
            if (!target || typeof target.closest !== 'function') return;
            // Không chặn thao tác trong modal đăng nhập của chính K71Auth
            if (target.closest('#k71-auth-modal')) return;

            const interactive = target.closest(
                'button, a, input, select, textarea, label, [onclick], [role="button"], .option-btn, .choice-btn'
            );
            if (!interactive) return;

            requireAuth(null, e);
        };

        document.addEventListener('click', guardHandler, true);
        document.addEventListener('submit', guardHandler, true);
        document.addEventListener('change', guardHandler, true);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupSubpageAuthGuard);
    } else {
        setupSubpageAuthGuard();
    }

    const listeners = [];
    function onChange(fn) {
        if (typeof fn === 'function') listeners.push(fn);
    }

    function notifyAuthChanged() {
        const user = getCurrentUser();
        const stats = getUserStats();
        listeners.forEach(fn => {
            try { fn(user, stats); } catch (e) {}
        });
    }

    window.addEventListener('storage', (e) => {
        if (!e.key) return;
        if (e.key === ACCOUNTS_KEY || e.key === CURRENT_UID_KEY || e.key.startsWith(HISTORY_PREFIX)) {
            notifyAuthChanged();
        }
    });

    window.addEventListener('message', (e) => {
        if (e.data && e.data.type === 'K71_HISTORY_UPDATED') {
            notifyAuthChanged();
        }
    });

    window.addEventListener('keydown', (e) => {
        const key = (e.key || '').toLowerCase();
        const isCtrlShiftM = e.ctrlKey && e.shiftKey && key === 'm';
        const isAltShiftA = e.altKey && e.shiftKey && key === 'a';
        if (isCtrlShiftM || isAltShiftA) {
            e.preventDefault();
            if (window.parent && window.parent !== window) {
                try {
                    window.parent.postMessage({ type: 'K71_OPEN_DEV_ADMIN' }, '*');
                } catch (err) {}
            } else if (typeof window.triggerDevAdminAccess === 'function') {
                window.triggerDevAdminAccess();
            }
        }
    });

    // Tự động chạy đồng bộ/di trú toàn bộ tài khoản cũ ngay khi khởi tạo
    migrateAndSyncAllStorageUsers();

    window.K71Auth = {
        DEV_PIN,
        FOUNDER_EMAIL,
        ACCOUNTS_KEY,
        migrateAndSyncAllStorageUsers,
        isFounderAccount,
        getAllAccounts,
        saveAllAccounts,
        deleteAccountById,
        clearAllAccounts,
        getCurrentUser,
        getUserHistory,
        getUserStats,
        getLoginLogs,
        getFounderAnalytics,
        recordExamResult,
        deleteHistoryItem,
        clearUserHistory,
        registerStudentAccount,
        loginWithCredentials,
        resetPassword,
        requestPasswordResetEmail,
        verifyOtpAndResetPassword,
        closeSimulatedEmailPopup,
        autofillOtpCode,
        loginOrRegisterOAuth,
        switchAccount,
        logout,
        exportAccountBackup,
        importAccountBackupFile,
        openLoginModal,
        closeLoginModal,
        switchAuthTab,
        handleStudentLoginSubmit,
        handleStudentRegisterSubmit,
        startOAuthFlow,
        backToMainLogin,
        submitOAuthForm,
        quickSelectAccount,
        openAttemptDetailModal,
        closeAttemptDetailModal,
        openHistoryModal,
        formatDateTime,
        formatDuration,
        getInitials,
        getGoogleSvg,
        getFacebookSvg,
        showToast,
        requireAuth,
        onChange
    };
    window.requireAuth = requireAuth;
})();
