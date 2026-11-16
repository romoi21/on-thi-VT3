// =========================================================================
// NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM CHUẨN GDPT 2018 (KHỐI 10, 11, 12 - 4 KÌ - TOÁN, LÝ, HÓA, SINH, VĂN, ANH, CÔNG NGHỆ, ĐỊA LÍ, LỊCH SỬ, GDKT&PL) - K71
// =========================================================================

var QUESTION_BANK = [

    // ===================================================================
    // 1. TOÁN 11 - GIỮA KÌ 1 (15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "toan", term: "GK1",
        question: "Góc có số đo 108° đổi sang đơn vị radian là:",
        options: ["3π/5", "π/10", "3π/2", "π/4"],
        answer: 0,
        explanation: "Áp dụng công thức đổi độ sang radian: α = (108° × π) / 180° = 3π/5."
    },
    {
        grade: "11", subject: "toan", term: "GK1",
        question: "Công thức nào sau đây đúng với mọi góc lượng giác α?",
        options: ["sin²α + cos²α = 1", "sin²α - cos²α = 1", "sinα + cosα = 1", "tanα + cotα = 1"],
        answer: 0,
        explanation: "Hệ thức lượng giác cơ bản: sin²α + cos²α = 1 với mọi α."
    },
    {
        grade: "11", subject: "toan", term: "GK1",
        question: "Tập xác định của hàm số y = tan(x) là:",
        options: ["ℝ \\ {π/2 + kπ, k ∈ ℤ}", "ℝ \\ {kπ, k ∈ ℤ}", "ℝ \\ {π/2 + k2π, k ∈ ℤ}", "ℝ"],
        answer: 0,
        explanation: "tan(x) = sin(x)/cos(x) xác định khi cos(x) ≠ 0 ⇔ x ≠ π/2 + kπ (k ∈ ℤ)."
    },
    {
        grade: "11", subject: "toan", term: "GK1",
        question: "Nghiệm của phương trình sin(x) = 1 là:",
        options: ["x = π/2 + k2π (k ∈ ℤ)", "x = π/2 + kπ (k ∈ ℤ)", "x = k2π (k ∈ ℤ)", "x = -π/2 + k2π (k ∈ ℤ)"],
        answer: 0,
        explanation: "Trên đường tròn lượng giác, sin(x) = 1 tại điểm cao nhất ứng với x = π/2 + k2π."
    },
    {
        grade: "11", subject: "toan", term: "GK1",
        question: "Nghiệm của phương trình cos(x) = -1 là:",
        options: ["x = π + k2π (k ∈ ℤ)", "x = k2π (k ∈ ℤ)", "x = π/2 + kπ (k ∈ ℤ)", "x = kπ (k ∈ ℤ)"],
        answer: 0,
        explanation: "Phương trình lượng giác đặc biệt: cos(x) = -1 ⇔ x = π + k2π (k ∈ ℤ)."
    },
    {
        grade: "11", subject: "toan", term: "GK1",
        question: "Cho cấp số cộng (uₙ) có số hạng đầu u₁ = 3 và công sai d = 2. Giá trị của u₅ bằng:",
        options: ["11", "13", "9", "15"],
        answer: 0,
        explanation: "Công thức số hạng tổng quát cấp số cộng: u₅ = u₁ + 4d = 3 + 4×2 = 11."
    },
    {
        grade: "11", subject: "toan", term: "GK1",
        question: "Cho cấp số nhân (uₙ) có u₁ = 2 và công bội q = 3. Giá trị của u₄ bằng:",
        options: ["54", "18", "162", "11"],
        answer: 0,
        explanation: "Công thức số hạng tổng quát cấp số nhân: u₄ = u₁ × q³ = 2 × 3³ = 54."
    },
    {
        grade: "11", subject: "toan", term: "GK1",
        question: "Hàm số nào sau đây là hàm số chẵn trên ℝ?",
        options: ["y = cos(x)", "y = sin(x)", "y = tan(x)", "y = cot(x)"],
        answer: 0,
        explanation: "Với mọi x ∈ ℝ, ta có cos(-x) = cos(x) nên y = cos(x) là hàm số chẵn."
    },
    {
        grade: "11", subject: "toan", term: "GK1",
        question: "Giá trị lớn nhất của hàm số y = 3sin(x) - 2 bằng:",
        options: ["1", "3", "-5", "5"],
        answer: 0,
        explanation: "Vì -1 ≤ sin(x) ≤ 1 nên -5 ≤ 3sin(x) - 2 ≤ 1. Giá trị lớn nhất bằng 1 khi sin(x) = 1."
    },
    {
        grade: "11", subject: "toan", term: "GK1",
        question: "Công thức nhân đôi nào sau đây là ĐÚNG?",
        options: ["sin(2a) = 2sin(a)cos(a)", "sin(2a) = sin(a)cos(a)", "cos(2a) = cos²(a) + sin²(a)", "cos(2a) = 2sin(a)cos(a)"],
        answer: 0,
        explanation: "Theo công thức nhân đôi lượng giác: sin(2a) = 2sin(a)cos(a)."
    },
    {
        grade: "11", subject: "toan", term: "GK1",
        question: "Dãy số nào sau đây là một cấp số cộng?",
        options: ["1; 4; 7; 10; 13", "1; 2; 4; 8; 16", "1; 3; 6; 10; 15", "2; 4; 7; 11; 16"],
        answer: 0,
        explanation: "Dãy 1; 4; 7; 10; 13 có hiệu hai số hạng liên tiếp không đổi (công sai d = 3)."
    },
    {
        grade: "11", subject: "toan", term: "GK1",
        question: "Cho dãy số (uₙ) với uₙ = 2n + 1. Số hạng thứ 3 của dãy số là:",
        options: ["7", "5", "6", "9"],
        answer: 0,
        explanation: "Thay n = 3 vào công thức: u₃ = 2×3 + 1 = 7."
    },
    {
        grade: "11", subject: "toan", term: "GK1",
        question: "Chu kì tuần hoàn của hàm số y = sin(x) là:",
        options: ["2π", "π", "π/2", "4π"],
        answer: 0,
        explanation: "Hàm số y = sin(x) và y = cos(x) tuần hoàn với chu kì T = 2π."
    },
    {
        grade: "11", subject: "toan", term: "GK1",
        question: "Cho cấp số cộng (uₙ) có u₁ = 1 và u₂ = 5. Công sai d của cấp số cộng đó là:",
        options: ["4", "5", "-4", "6"],
        answer: 0,
        explanation: "Công sai d = u₂ - u₁ = 5 - 1 = 4."
    },
    {
        grade: "11", subject: "toan", term: "GK1",
        question: "Trong không gian, qua ba điểm không thẳng hàng xác định được bao nhiêu mặt phẳng?",
        options: ["1 mặt phẳng duy nhất", "2 mặt phẳng", "3 mặt phẳng", "Vô số mặt phẳng"],
        answer: 0,
        explanation: "Theo tiên đề hình học không gian: Có một và chỉ một mặt phẳng đi qua ba điểm không thẳng hàng."
    },

    // ===================================================================
    // 2. VẬT LÍ 11 - GIỮA KÌ 1 (15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "ly", term: "GK1",
        question: "Trong dao động điều hòa, đại lượng nào sau đây luôn dương?",
        options: ["Biên độ dao động A", "Li độ x", "Vận tốc v", "Gia tốc a"],
        answer: 0,
        explanation: "Biên độ A là độ lệch cực đại so với vị trí cân bằng nên luôn dương (A > 0)."
    },
    {
        grade: "11", subject: "ly", term: "GK1",
        question: "Gia tốc trong dao động điều hòa biến đổi điều hòa:",
        options: ["Ngược pha với li độ", "Cùng pha với li độ", "Sớm pha π/2 so với li độ", "Trễ pha π/2 so với li độ"],
        answer: 0,
        explanation: "Vì a = -ω²x nên gia tốc luôn ngược pha với li độ x."
    },
    {
        grade: "11", subject: "ly", term: "GK1",
        question: "Mối liên hệ giữa tần số góc ω và chu kì T của dao động điều hòa là:",
        options: ["ω = 2π / T", "ω = 2πT", "ω = T / 2π", "ω = 1 / T"],
        answer: 0,
        explanation: "Công thức cơ bản: ω = 2πf = 2π/T."
    },
    {
        grade: "11", subject: "ly", term: "GK1",
        question: "Một chất điểm dao động điều hòa với phương trình x = 5cos(2πt + π/3) (cm). Biên độ dao động của chất điểm là:",
        options: ["5 cm", "2π cm", "π/3 cm", "10 cm"],
        answer: 0,
        explanation: "So sánh với phương trình chuẩn x = Acos(ωt + φ), ta có biên độ A = 5 cm."
    },
    {
        grade: "11", subject: "ly", term: "GK1",
        question: "Vận tốc của vật dao động điều hòa có độ lớn cực đại khi vật ở vị trí nào?",
        options: ["Vị trí cân bằng (x = 0)", "Vị trí biên dương (x = A)", "Vị trí biên âm (x = -A)", "Vị trí có li độ x = A/2"],
        answer: 0,
        explanation: "Khi qua vị trí cân bằng (x = 0), thế năng bằng 0 và động năng cực đại nên tốc độ đạt cực đại v_max = ωA."
    },
    {
        grade: "11", subject: "ly", term: "GK1",
        question: "Trong dao động điều hòa, vận tốc biến đổi điều hòa như thế nào so với li độ?",
        options: ["Sớm pha π/2 so với li độ", "Trễ pha π/2 so với li độ", "Cùng pha với li độ", "Ngược pha với li độ"],
        answer: 0,
        explanation: "Vận tốc v = x' = -ωAsin(ωt + φ) = ωAcos(ωt + φ + π/2), sớm pha π/2 so với li độ x."
    },
    {
        grade: "11", subject: "ly", term: "GK1",
        question: "Chu kì dao động điều hòa của con lắc lò xo gồm vật nặng khối lượng m và lò xo có độ cứng k là:",
        options: ["T = 2π√(m/k)", "T = 2π√(k/m)", "T = (1/2π)√(m/k)", "T = (1/2π)√(k/m)"],
        answer: 0,
        explanation: "Công thức chu kì con lắc lò xo: T = 2π√(m/k)."
    },
    {
        grade: "11", subject: "ly", term: "GK1",
        question: "Chu kì dao động điều hòa của con lắc đơn có chiều dài l tại nơi có gia tốc trọng trường g là:",
        options: ["T = 2π√(l/g)", "T = 2π√(g/l)", "T = (1/2π)√(l/g)", "T = 2π(l/g)"],
        answer: 0,
        explanation: "Công thức chu kì con lắc đơn: T = 2π√(l/g)."
    },
    {
        grade: "11", subject: "ly", term: "GK1",
        question: "Cơ năng của một con lắc lò xo dao động điều hòa tỉ lệ thuận với:",
        options: ["Bình phương biên độ dao động", "Biên độ dao động", "Khối lượng của vật nặng", "Chiều dài quỹ đạo dao động"],
        answer: 0,
        explanation: "Cơ năng W = (1/2)kA² = (1/2)mω²A², tỉ lệ thuận với bình phương biên độ dao động A²."
    },
    {
        grade: "11", subject: "ly", term: "GK1",
        question: "Một vật dao động điều hòa có biên độ A = 4 cm. Chiều dài quỹ đạo dao động của vật là:",
        options: ["8 cm", "4 cm", "16 cm", "2 cm"],
        answer: 0,
        explanation: "Chiều dài quỹ đạo dao động điều hòa L = 2A = 2 × 4 = 8 cm."
    },
    {
        grade: "11", subject: "ly", term: "GK1",
        question: "Một vật thực hiện được 20 dao động toàn phần trong thời gian 10 giây. Tần số dao động của vật là:",
        options: ["2 Hz", "0,5 Hz", "20 Hz", "200 Hz"],
        answer: 0,
        explanation: "Tần số là số dao động toàn phần trong 1 giây: f = N / t = 20 / 10 = 2 Hz."
    },
    {
        grade: "11", subject: "ly", term: "GK1",
        question: "Dao động tắt dần là dao động có:",
        options: ["Biên độ và cơ năng giảm dần theo thời gian", "Tần số tăng dần theo thời gian", "Biên độ không đổi theo thời gian", "Li độ luôn giảm dần theo thời gian"],
        answer: 0,
        explanation: "Do lực cản của môi trường, dao động tắt dần có biên độ và năng lượng (cơ năng) giảm dần theo thời gian."
    },
    {
        grade: "11", subject: "ly", term: "GK1",
        question: "Hiện tượng cộng hưởng cơ xảy ra khi:",
        options: [
            "Tần số của ngoại lực cưỡng bức bằng tần số riêng của hệ (f = f₀)",
            "Tần số ngoại lực rất lớn so với tần số riêng của hệ",
            "Lực cản của môi trường rất lớn",
            "Biên độ của ngoại lực bằng 0"
        ],
        answer: 0,
        explanation: "Điều kiện xảy ra cộng hưởng là tần số lực cưỡng bức bằng tần số riêng của hệ dao động (f = f₀)."
    },
    {
        grade: "11", subject: "ly", term: "GK1",
        question: "Hệ thức độc lập với thời gian giữa li độ x, vận tốc v và tần số góc ω trong dao động điều hòa là:",
        options: ["A² = x² + v²/ω²", "A² = x² + ω²v²", "A = x + v/ω", "A² = v² + x²/ω²"],
        answer: 0,
        explanation: "Công thức độc lập thời gian giữa x và v: x² + (v/ω)² = A²."
    },
    {
        grade: "11", subject: "ly", term: "GK1",
        question: "Khi một vật dao động điều hòa đi từ vị trí cân bằng ra vị trí biên thì:",
        options: ["Động năng giảm, thế năng tăng", "Động năng tăng, thế năng giảm", "Cả động năng và thế năng đều tăng", "Cơ năng giảm dần về 0"],
        answer: 0,
        explanation: "Từ VTCB ra biên, li độ |x| tăng nên thế năng tăng, tốc độ |v| giảm nên động năng giảm (cơ năng bảo toàn)."
    },

    // ===================================================================
    // 3. TIẾNG ANH 11 - GIỮA KÌ 1 (15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "anh", term: "GK1",
        question: "Choose the correct word: Regular exercise helps increase your life _______.",
        options: ["expectancy", "expectation", "expectant", "expecting"],
        answer: 0,
        explanation: "Cụm danh từ cố định 'life expectancy' (Unit 1) mang nghĩa là tuổi thọ trung bình."
    },
    {
        grade: "11", subject: "anh", term: "GK1",
        question: "Choose the correct tense: My grandfather _______ regular exercise since he retired 10 years ago.",
        options: ["has done", "did", "was doing", "does"],
        answer: 0,
        explanation: "Cấu trúc: Hiện tại hoàn thành (has/have + V3/ed) + since + Quá khứ đơn."
    },
    {
        grade: "11", subject: "anh", term: "GK1",
        question: "Choose the correct modal verb: You _______ use your mobile phone during the exam. It's strictly against the rules.",
        options: ["mustn't", "don't have to", "should", "ought to"],
        answer: 0,
        explanation: "'mustn't' diễn tả sự cấm đoán (bắt buộc không được làm theo nội quy)."
    },
    {
        grade: "11", subject: "anh", term: "GK1",
        question: "Choose the correct form: The soup tastes _______! What spices did you put in it?",
        options: ["delicious", "deliciously", "well", "badly"],
        answer: 0,
        explanation: "Sau động từ chỉ giác quan (taste - đóng vai trò là linking verb) ta dùng tính từ (delicious), không dùng trạng từ."
    },
    {
        grade: "11", subject: "anh", term: "GK1",
        question: "Choose the correct vocabulary: The _______ gap is the difference in attitudes or behavior between younger and older age groups.",
        options: ["generation", "cultural", "economic", "educational"],
        answer: 0,
        explanation: "Cụm từ 'generation gap' (Unit 2) có nghĩa là khoảng cách thế hệ."
    },
    {
        grade: "11", subject: "anh", term: "GK1",
        question: "Choose the correct verb form: I _______ of buying a new bicycle because my old one keeps breaking down.",
        options: ["am thinking", "think", "thinks", "thought"],
        answer: 0,
        explanation: "Động từ 'think' mang nghĩa 'đang cân nhắc/dự định' là động từ chỉ hành động nên chia ở thì Hiện tại tiếp diễn (am thinking)."
    },
    {
        grade: "11", subject: "anh", term: "GK1",
        question: "Choose the correct word: Antibiotics are used to treat infections caused by _______, not viruses.",
        options: ["bacteria", "vaccines", "nutrients", "muscles"],
        answer: 0,
        explanation: "Thuốc kháng sinh (antibiotics) dùng để điều trị nhiễm trùng do vi khuẩn (bacteria) gây ra, không có tác dụng với virus."
    },
    {
        grade: "11", subject: "anh", term: "GK1",
        question: "Choose the correct phrase: An _______ family consists of only parents and their children living together.",
        options: ["nuclear", "extended", "single", "traditional"],
        answer: 0,
        explanation: "'nuclear family' là gia đình hạt nhân (chỉ gồm bố mẹ và con cái), phân biệt với 'extended family' (gia đình nhiều thế hệ)."
    },
    {
        grade: "11", subject: "anh", term: "GK1",
        question: "Choose the correct modal verb: Tomorrow is Sunday, so I _______ get up early for school.",
        options: ["don't have to", "mustn't", "shouldn't", "cannot"],
        answer: 0,
        explanation: "'don't have to' mang nghĩa là 'không cần phải làm gì' (không bắt buộc)."
    },
    {
        grade: "11", subject: "anh", term: "GK1",
        question: "Choose the correct tense: We _______ to Da Lat for our family vacation last summer.",
        options: ["went", "have gone", "go", "were going"],
        answer: 0,
        explanation: "Có dấu hiệu thời gian xác định trong quá khứ 'last summer' nên chia thì Quá khứ đơn (went)."
    },
    {
        grade: "11", subject: "anh", term: "GK1",
        question: "Choose the correct vocabulary: Future smart cities will use _______ sensors to monitor traffic and reduce pollution.",
        options: ["smart", "heavy", "manual", "ancient"],
        answer: 0,
        explanation: "'smart sensors' (cảm biến thông minh - Unit 3: Cities of the future) giúp giám sát giao thông và môi trường."
    },
    {
        grade: "11", subject: "anh", term: "GK1",
        question: "Choose the correct word: Teenagers often want to follow in their parents' _______ and choose the same career.",
        options: ["footsteps", "shoes", "pathways", "directions"],
        answer: 0,
        explanation: "Thành ngữ 'follow in someone's footsteps' mang nghĩa là nối nghiệp, tiếp bước ai đó."
    },
    {
        grade: "11", subject: "anh", term: "GK1",
        question: "Choose the correct form: My sister _______ very tired after working on her project all night.",
        options: ["looked", "looked at", "was looking", "looks like"],
        answer: 0,
        explanation: "Động từ nối 'look' + tính từ (tired) mang nghĩa 'trông có vẻ mệt mỏi' và không chia ở thì tiếp diễn."
    },
    {
        grade: "11", subject: "anh", term: "GK1",
        question: "Choose the correct preposition: Eating a balanced diet and cutting down _______ fast food will keep you fit.",
        options: ["on", "in", "with", "at"],
        answer: 0,
        explanation: "Cụm động từ (phrasal verb) 'cut down on something' có nghĩa là cắt giảm lượng tiêu thụ cái gì."
    },
    {
        grade: "11", subject: "anh", term: "GK1",
        question: "Choose the correct word: High-rise buildings with roof gardens can help reduce our carbon _______.",
        options: ["footprint", "footstep", "dioxide", "emission"],
        answer: 0,
        explanation: "Cụm từ 'carbon footprint' (dấu chân carbon / lượng khí thải carbon) là từ vựng trọng tâm của Unit 3."
    },
   // ===================================================================
    // TOÁN 11 - CUỐI KÌ 1 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "toan", term: "CK1",
        question: "Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Giao tuyến của hai mặt phẳng (SAB) và (SCD) là:",
        options: [
            "Đường thẳng đi qua S và song song với AB, CD",
            "Đường thẳng đi qua S và cắt AB",
            "Đường thẳng SO (với O là tâm đáy)",
            "Đường thẳng AC"
        ],
        answer: 0,
        explanation: "Hai mặt phẳng (SAB) và (SCD) có điểm chung S và chứa hai đường thẳng song song AB, CD nên giao tuyến qua S và song song với AB, CD."
    },
    {
        grade: "11", subject: "toan", term: "CK1",
        question: "Giá trị của giới hạn lim (n → +∞) (2n + 1) / (n + 3) bằng:",
        options: ["2", "1", "1/3", "+∞"],
        answer: 0,
        explanation: "Chia cả tử và mẫu cho n: lim (2 + 1/n) / (1 + 3/n) = 2/1 = 2."
    },
    {
        grade: "11", subject: "toan", term: "CK1",
        question: "Giá trị của giới hạn lim (x → 2) (x² - 4) / (x - 2) bằng:",
        options: ["4", "2", "0", "+∞"],
        answer: 0,
        explanation: "Rút gọn (x² - 4)/(x - 2) = x + 2. Khi x → 2 thì giới hạn bằng 2 + 2 = 4."
    },
    {
        grade: "11", subject: "toan", term: "CK1",
        question: "Hàm số f(x) = (x + 1) / (x - 3) gián đoạn tại điểm nào dưới đây?",
        options: ["x = 3", "x = -1", "x = 0", "x = 1"],
        answer: 0,
        explanation: "Hàm phân thức hữu tỉ gián đoạn tại điểm làm mẫu số bằng 0 là x = 3."
    },
    {
        grade: "11", subject: "toan", term: "CK1",
        question: "Cho tứ diện ABCD. Gọi M, N lần lượt là trung điểm của AB và AC. Đường thẳng MN song song với mặt phẳng nào sau đây?",
        options: ["(BCD)", "(ABC)", "(ABD)", "(ACD)"],
        answer: 0,
        explanation: "MN là đường trung bình của tam giác ABC nên MN // BC. Vì BC ⊂ (BCD) nên MN // (BCD)."
    },
    {
        grade: "11", subject: "toan", term: "CK1",
        question: "Giá trị của giới hạn lim (n → +∞) (1 / n²) bằng:",
        options: ["0", "1", "+∞", "-∞"],
        answer: 0,
        explanation: "Theo định lý giới hạn cơ bản: lim (1 / n^k) = 0 với k nguyên dương."
    },
    {
        grade: "11", subject: "toan", term: "CK1",
        question: "Tổng của cấp số nhân lùi vô hạn có số hạng đầu u₁ = 1 và công bội q = 1/2 là:",
        options: ["2", "1", "1/2", "4"],
        answer: 0,
        explanation: "Áp dụng công thức tổng cấp số nhân lùi vô hạn: S = u₁ / (1 - q) = 1 / (1 - 1/2) = 2."
    },
    {
        grade: "11", subject: "toan", term: "CK1",
        question: "Giới hạn lim (x → +∞) (x³ - 2x + 1) bằng:",
        options: ["+∞", "-∞", "1", "0"],
        answer: 0,
        explanation: "Ta có lim x³(1 - 2/x² + 1/x³) = +∞ vì lim x³ = +∞ và lim (1 - 2/x² + 1/x³) = 1 > 0."
    },
    {
        grade: "11", subject: "toan", term: "CK1",
        question: "Hàm số nào sau đây liên tục trên toàn bộ tập số thực ℝ?",
        options: ["y = x³ - 3x + 1", "y = 1 / x", "y = tan(x)", "y = √(x - 1)"],
        answer: 0,
        explanation: "Hàm đa thức luôn xác định và liên tục trên toàn bộ tập số thực ℝ."
    },
    {
        grade: "11", subject: "toan", term: "CK1",
        question: "Cho hình lăng trụ ABC.A'B'C'. Mặt phẳng (ABC) song song với mặt phẳng nào sau đây?",
        options: ["(A'B'C')", "(ABB'A')", "(BCC'B')", "(ACC'A')"],
        answer: 0,
        explanation: "Hai mặt đáy của hình lăng trụ luôn nằm trên hai mặt phẳng song song với nhau: (ABC) // (A'B'C')."
    },
    {
        grade: "11", subject: "toan", term: "CK1",
        question: "Phép chiếu song song biến hai đường thẳng song song (không song song với phương chiếu) thành:",
        options: ["Hai đường thẳng song song hoặc trùng nhau", "Hai đường thẳng cắt nhau", "Hai đường thẳng chéo nhau", "Một điểm duy nhất"],
        answer: 0,
        explanation: "Theo tính chất của phép chiếu song song, hình chiếu của hai đường thẳng song song là hai đường thẳng song song hoặc trùng nhau."
    },
    {
        grade: "11", subject: "toan", term: "CK1",
        question: "Trong các dãy số có số hạng tổng quát sau, dãy số nào có giới hạn bằng 0 khi n → +∞?",
        options: ["uₙ = (0,8)ⁿ", "uₙ = (1,2)ⁿ", "uₙ = (-2)ⁿ", "uₙ = n²"],
        answer: 0,
        explanation: "Với |q| < 1 thì lim qⁿ = 0. Vì |0,8| < 1 nên lim (0,8)ⁿ = 0."
    },
    {
        grade: "11", subject: "toan", term: "CK1",
        question: "Giá trị của giới hạn lim (x → 1) (3x² - 2x + 4) bằng:",
        options: ["5", "4", "3", "9"],
        answer: 0,
        explanation: "Thay trực tiếp x = 1 vào hàm đa thức: 3(1)² - 2(1) + 4 = 5."
    },
    {
        grade: "11", subject: "toan", term: "CK1",
        question: "Cho hai đường thẳng phân biệt a và b trong không gian. Có bao nhiêu vị trí tương đối giữa a và b?",
        options: ["3 (cắt nhau, song song, chéo nhau)", "2 (cắt nhau, song song)", "1 (chỉ cắt nhau)", "4"],
        answer: 0,
        explanation: "Trong không gian, hai đường thẳng phân biệt có 3 vị trí tương đối: cắt nhau, song song hoặc chéo nhau."
    },
    {
        grade: "11", subject: "toan", term: "CK1",
        question: "Để hàm số f(x) = (x² - 1)/(x - 1) khi x ≠ 1 và f(x) = m khi x = 1 liên tục tại điểm x₀ = 1 thì giá trị của m là:",
        options: ["m = 2", "m = 1", "m = 0", "m = -2"],
        answer: 0,
        explanation: "Ta có lim (x → 1) (x² - 1)/(x - 1) = lim (x + 1) = 2. Để hàm số liên tục tại x = 1 thì f(1) = m = 2."
    },

    // ===================================================================
    // TOÁN 11 - GIỮA KÌ 2 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "toan", term: "GK2",
        question: "Với a là số thực dương tùy ý và a ≠ 1, giá trị của logₐ(a³) bằng:",
        options: ["3", "1/3", "a", "1"],
        answer: 0,
        explanation: "Theo tính chất cơ bản của lôgarit: logₐ(a^α) = α ⇒ logₐ(a³) = 3."
    },
    {
        grade: "11", subject: "toan", term: "GK2",
        question: "Tập xác định của hàm số y = log₂(x - 1) là:",
        options: ["(1; +∞)", "[1; +∞)", "(0; +∞)", "ℝ \\ {1}"],
        answer: 0,
        explanation: "Điều kiện xác định của hàm số lôgarit là x - 1 > 0 ⇔ x > 1."
    },
    {
        grade: "11", subject: "toan", term: "GK2",
        question: "Nghiệm của phương trình 2^(x - 1) = 8 là:",
        options: ["x = 4", "x = 3", "x = 2", "x = 5"],
        answer: 0,
        explanation: "Ta có 2^(x - 1) = 2³ ⇔ x - 1 = 3 ⇔ x = 4."
    },
    {
        grade: "11", subject: "toan", term: "GK2",
        question: "Cho hình chóp S.ABC có SA ⊥ (ABC). Khẳng định nào sau đây là ĐÚNG?",
        options: ["SA ⊥ BC", "SB ⊥ BC", "SC ⊥ AB", "AB ⊥ BC"],
        answer: 0,
        explanation: "Vì SA ⊥ (ABC) và BC ⊂ (ABC) nên SA ⊥ BC."
    },
    {
        grade: "11", subject: "toan", term: "GK2",
        question: "Với mọi số thực dương a, b và cơ số c > 0, c ≠ 1. Công thức nào sau đây ĐÚNG?",
        options: ["log_c(a.b) = log_c(a) + log_c(b)", "log_c(a.b) = log_c(a).log_c(b)", "log_c(a + b) = log_c(a) + log_c(b)", "log_c(a/b) = log_c(b) - log_c(a)"],
        answer: 0,
        explanation: "Lôgarit của một tích bằng tổng hai lôgarit: log_c(a.b) = log_c(a) + log_c(b)."
    },
    {
        grade: "11", subject: "toan", term: "GK2",
        question: "Rút gọn biểu thức P = x^(1/3) . ⁶√x với x > 0 ta được:",
        options: ["P = √x", "P = x²", "P = x^(1/9)", "P = x^(2/3)"],
        answer: 0,
        explanation: "Ta có P = x^(1/3) . x^(1/6) = x^(1/3 + 1/6) = x^(1/2) = √x."
    },
    {
        grade: "11", subject: "toan", term: "GK2",
        question: "Hàm số nào dưới đây đồng biến trên tập xác định ℝ?",
        options: ["y = 3ˣ", "y = (0,5)ˣ", "y = (1/3)ˣ", "y = (√2 / 2)ˣ"],
        answer: 0,
        explanation: "Hàm số mũ y = aˣ đồng biến trên ℝ khi cơ số a > 1. Ở đây a = 3 > 1."
    },
    {
        grade: "11", subject: "toan", term: "GK2",
        question: "Nghiệm của phương trình log₃(2x - 1) = 2 là:",
        options: ["x = 5", "x = 4", "x = 7/2", "x = 3"],
        answer: 0,
        explanation: "log₃(2x - 1) = 2 ⇔ 2x - 1 = 3² = 9 ⇔ 2x = 10 ⇔ x = 5."
    },
    {
        grade: "11", subject: "toan", term: "GK2",
        question: "Tập nghiệm của bất phương trình 5ˣ < 25 là:",
        options: ["(-∞; 2)", "(2; +∞)", "(0; 2)", "(-∞; 5)"],
        answer: 0,
        explanation: "5ˣ < 5² ⇔ x < 2 (do cơ số 5 > 1 nên giữ nguyên chiều bất phương trình)."
    },
    {
        grade: "11", subject: "toan", term: "GK2",
        question: "Giá trị của biểu thức log₂(8) + log₃(9) bằng:",
        options: ["5", "6", "17", "4"],
        answer: 0,
        explanation: "Ta có log₂(2³) + log₃(3²) = 3 + 2 = 5."
    },
    {
        grade: "11", subject: "toan", term: "GK2",
        question: "Trong không gian, hai đường thẳng a và b vuông góc với nhau thì góc giữa chúng bằng:",
        options: ["90°", "0°", "180°", "45°"],
        answer: 0,
        explanation: "Theo định nghĩa, hai đường thẳng vuông góc với nhau khi góc giữa chúng bằng 90°."
    },
    {
        grade: "11", subject: "toan", term: "GK2",
        question: "Cho hình lập phương ABCD.A'B'C'D'. Góc giữa hai đường thẳng AB và B'C' bằng:",
        options: ["90°", "45°", "60°", "30°"],
        answer: 0,
        explanation: "Vì B'C' // BC mà AB ⊥ BC (ABCD là hình vuông) nên góc giữa AB và B'C' bằng góc giữa AB và BC và bằng 90°."
    },
    {
        grade: "11", subject: "toan", term: "GK2",
        question: "Điều kiện cần và đủ để đường thẳng d vuông góc với mặt phẳng (P) là d vuông góc với:",
        options: ["Hai đường thẳng cắt nhau nằm trong (P)", "Một đường thẳng nằm trong (P)", "Hai đường thẳng song song nằm trong (P)", "Mọi đường thẳng song song với (P)"],
        answer: 0,
        explanation: "Theo định lý: Nếu một đường thẳng vuông góc với hai đường thẳng cắt nhau cùng thuộc một mặt phẳng thì nó vuông góc với mặt phẳng ấy."
    },
    {
        grade: "11", subject: "toan", term: "GK2",
        question: "Cho hình chóp S.ABCD có đáy ABCD là hình vuông và SA ⊥ (ABCD). Đường thẳng BD vuông góc với mặt phẳng nào sau đây?",
        options: ["(SAC)", "(SAB)", "(SCD)", "(SAD)"],
        answer: 0,
        explanation: "Ta có BD ⊥ AC (hai đường chéo hình vuông) và BD ⊥ SA (do SA ⊥ (ABCD)) ⇒ BD ⊥ (SAC)."
    },
    {
        grade: "11", subject: "toan", term: "GK2",
        question: "Cho hình chóp S.ABC có SA ⊥ (ABC). Hình chiếu vuông góc của đường thẳng SB lên mặt phẳng (ABC) là:",
        options: ["AB", "BC", "AC", "SA"],
        answer: 0,
        explanation: "Vì SA ⊥ (ABC) nên A là hình chiếu vuông góc của S lên (ABC). Do đó AB là hình chiếu vuông góc của SB lên (ABC)."
    },

    // ===================================================================
    // TOÁN 11 - CUỐI KÌ 2 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "toan", term: "CK2",
        question: "Đạo hàm của hàm số y = x³ - 3x² + 2 là:",
        options: ["y' = 3x² - 6x", "y' = 3x² - 3x", "y' = x² - 6x", "y' = 3x² - 6x + 2"],
        answer: 0,
        explanation: "Áp dụng quy tắc đạo hàm hàm đa thức: (x³)' - 3(x²)' + (2)' = 3x² - 6x."
    },
    {
        grade: "11", subject: "toan", term: "CK2",
        question: "Hệ số góc của tiếp tuyến của đồ thị hàm số y = x² tại điểm có hoành độ x₀ = 2 là:",
        options: ["4", "2", "1", "8"],
        answer: 0,
        explanation: "Ta có y' = 2x. Hệ số góc tiếp tuyến tại x₀ = 2 là k = y'(2) = 2 × 2 = 4."
    },
    {
        grade: "11", subject: "toan", term: "CK2",
        question: "Cho hai biến cố A và B độc lập với nhau, biết P(A) = 0,4 và P(B) = 0,5. Xác suất của biến cố giao P(AB) bằng:",
        options: ["0,2", "0,9", "0,1", "0,45"],
        answer: 0,
        explanation: "Hai biến cố A, B độc lập nên P(AB) = P(A).P(B) = 0,4 × 0,5 = 0,2."
    },
    {
        grade: "11", subject: "toan", term: "CK2",
        question: "Cho hình lập phương ABCD.A'B'C'D' có cạnh bằng a. Khoảng cách giữa hai mặt phẳng (ABCD) và (A'B'C'D') bằng:",
        options: ["a", "a√2", "a√3", "a/2"],
        answer: 0,
        explanation: "Khoảng cách giữa hai mặt đáy của hình lập phương bằng độ dài cạnh bên AA' = a."
    },
    {
        grade: "11", subject: "toan", term: "CK2",
        question: "Đạo hàm của hàm số y = cos(x) trên ℝ là:",
        options: ["y' = -sin(x)", "y' = sin(x)", "y' = -cos(x)", "y' = tan(x)"],
        answer: 0,
        explanation: "Theo bảng đạo hàm lượng giác cơ bản: (cos x)' = -sin x."
    },
    {
        grade: "11", subject: "toan", term: "CK2",
        question: "Đạo hàm của hàm số y = eˣ trên ℝ là:",
        options: ["y' = eˣ", "y' = x.e^(x-1)", "y' = eˣ / x", "y' = 1 / eˣ"],
        answer: 0,
        explanation: "Hàm số mũ tự nhiên y = eˣ có đạo hàm là chính nó: (eˣ)' = eˣ."
    },
    {
        grade: "11", subject: "toan", term: "CK2",
        question: "Đạo hàm của hàm số y = ln(x) trên khoảng (0; +∞) là:",
        options: ["y' = 1 / x", "y' = x", "y' = -1 / x²", "y' = eˣ"],
        answer: 0,
        explanation: "Theo công thức đạo hàm hàm số lôgarit tự nhiên: (ln x)' = 1 / x."
    },
    {
        grade: "11", subject: "toan", term: "CK2",
        question: "Một chất điểm chuyển động theo phương trình s(t) = t² + 2t (t tính bằng giây, s tính bằng mét). Vận tốc tức thời của chất điểm tại thời điểm t = 3 (s) là:",
        options: ["8 m/s", "15 m/s", "6 m/s", "11 m/s"],
        answer: 0,
        explanation: "Vận tốc tức thời v(t) = s'(t) = 2t + 2. Tại t = 3s thì v(3) = 2×3 + 2 = 8 m/s."
    },
    {
        grade: "11", subject: "toan", term: "CK2",
        question: "Đạo hàm cấp hai của hàm số y = x⁴ - 2x² + 1 là:",
        options: ["y'' = 12x² - 4", "y'' = 4x³ - 4x", "y'' = 24x", "y'' = 12x² - 2"],
        answer: 0,
        explanation: "Ta có y' = 4x³ - 4x ⇒ đạo hàm cấp hai y'' = (y')' = 12x² - 4."
    },
    {
        grade: "11", subject: "toan", term: "CK2",
        question: "Cho hai biến cố xung khắc A và B có P(A) = 1/3 và P(B) = 1/4. Xác suất của biến cố hợp P(A ∪ B) bằng:",
        options: ["7/12", "1/12", "1/7", "5/12"],
        answer: 0,
        explanation: "Vì A và B xung khắc nên P(A ∪ B) = P(A) + P(B) = 1/3 + 1/4 = 7/12."
    },
    {
        grade: "11", subject: "toan", term: "CK2",
        question: "Thể tích V của khối chóp có diện tích đáy B và chiều cao h được tính theo công thức:",
        options: ["V = (1/3)Bh", "V = Bh", "V = (1/2)Bh", "V = 3Bh"],
        answer: 0,
        explanation: "Công thức thể tích khối chóp: V = (1/3).B.h."
    },
    {
        grade: "11", subject: "toan", term: "CK2",
        question: "Thể tích V của khối lăng trụ có diện tích đáy B và chiều cao h là:",
        options: ["V = Bh", "V = (1/3)Bh", "V = (1/2)Bh", "V = 2Bh"],
        answer: 0,
        explanation: "Công thức thể tích khối lăng trụ: V = B.h."
    },
    {
        grade: "11", subject: "toan", term: "CK2",
        question: "Cho khối hộp chữ nhật có ba kích thước lần lượt là 2, 3, 4. Thể tích của khối hộp chữ nhật đó bằng:",
        options: ["24", "9", "12", "8"],
        answer: 0,
        explanation: "Thể tích khối hộp chữ nhật V = a.b.c = 2 × 3 × 4 = 24."
    },
    {
        grade: "11", subject: "toan", term: "CK2",
        question: "Phương trình tiếp tuyến của đồ thị hàm số y = x² + 1 tại điểm M(1; 2) là:",
        options: ["y = 2x", "y = 2x + 2", "y = x + 1", "y = 2x - 1"],
        answer: 0,
        explanation: "Ta có y' = 2x ⇒ y'(1) = 2. Phương trình tiếp tuyến tại M(1; 2): y = 2(x - 1) + 2 ⇔ y = 2x."
    },
    {
        grade: "11", subject: "toan", term: "CK2",
        question: "Gieo một con xúc xắc cân đối và đồng chất 1 lần. Xác suất để xuất hiện mặt có số chấm chẵn là:",
        options: ["1/2", "1/3", "1/6", "2/3"],
        answer: 0,
        explanation: "Không gian mẫu có 6 kết quả. Có 3 mặt chẵn (2, 4, 6) nên xác suất P = 3/6 = 1/2."
    },
    // ===================================================================
    // VẬT LÍ 11 - CUỐI KÌ 1 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "ly", term: "CK1",
        question: "Sóng ngang là sóng có phương dao động của các phần tử môi trường:",
        options: ["Vuông góc với phương truyền sóng", "Trùng với phương truyền sóng", "Luôn theo phương thẳng đứng", "Luôn theo phương nằm ngang"],
        answer: 0,
        explanation: "Định nghĩa sóng ngang: các phần tử môi trường dao động theo phương vuông góc với phương truyền sóng."
    },
    {
        grade: "11", subject: "ly", term: "CK1",
        question: "Một sóng cơ có tần số f truyền trong môi trường với tốc độ v thì bước sóng λ được tính bằng công thức:",
        options: ["λ = v / f", "λ = v.f", "λ = f / v", "λ = 2πv / f"],
        answer: 0,
        explanation: "Công thức liên hệ giữa bước sóng, tốc độ truyền sóng và tần số: λ = v.T = v / f."
    },
    {
        grade: "11", subject: "ly", term: "CK1",
        question: "Trên một sợi dây đang có sóng dừng, khoảng cách giữa hai nút sóng liên tiếp bằng:",
        options: ["Một nửa bước sóng (λ/2)", "Một bước sóng (λ)", "Một phần tư bước sóng (λ/4)", "Hai lần bước sóng (2λ)"],
        answer: 0,
        explanation: "Trong hiện tượng sóng dừng, hai nút liên tiếp hoặc hai bụng liên tiếp cách nhau một khoảng bằng λ/2."
    },
    {
        grade: "11", subject: "ly", term: "CK1",
        question: "Trong thí nghiệm Y-âng về giao thoa ánh sáng, khoảng vân i được tính bằng công thức nào (với a là khoảng cách hai khe, D là khoảng cách từ hai khe đến màn)?",
        options: ["i = λD / a", "i = λa / D", "i = aD / λ", "i = λ / (aD)"],
        answer: 0,
        explanation: "Công thức tính khoảng vân giao thoa ánh sáng: i = λD / a."
    },
    {
        grade: "11", subject: "ly", term: "CK1",
        question: "Bức xạ nào sau đây thuộc vùng sóng điện từ có bước sóng ngắn hơn bước sóng của tia tử ngoại?",
        options: ["Tia X (tia Rơnghen)", "Tia hồng ngoại", "Ánh sáng nhìn thấy", "Sóng vô tuyến"],
        answer: 0,
        explanation: "Trong thang sóng điện từ sắp xếp theo bước sóng giảm dần: Sóng vô tuyến -> Hồng ngoại -> Ánh sáng nhìn thấy -> Tử ngoại -> Tia X -> Tia gamma."
    },
    {
        grade: "11", subject: "ly", term: "CK1",
        question: "Sóng dọc là sóng cơ truyền được trong các môi trường nào sau đây?",
        options: ["Rắn, lỏng và khí", "Chỉ trong chất rắn", "Chỉ trong chất khí và chân không", "Chỉ trên bề mặt chất lỏng"],
        answer: 0,
        explanation: "Sóng dọc liên quan đến biến dạng nén - dãn nên truyền được trong cả ba môi trường: rắn, lỏng và khí."
    },
    {
        grade: "11", subject: "ly", term: "CK1",
        question: "Hai nguồn sóng kết hợp là hai nguồn phát sóng có:",
        options: [
            "Cùng phương, cùng tần số và độ lệch pha không đổi theo thời gian",
            "Cùng biên độ nhưng khác tần số",
            "Cùng pha ban đầu nhưng khác tần số",
            "Cùng tốc độ truyền sóng nhưng phương vuông góc nhau"
        ],
        answer: 0,
        explanation: "Điều kiện hai nguồn kết hợp: dao động cùng phương, cùng tần số và có hiệu số pha không đổi theo thời gian."
    },
    {
        grade: "11", subject: "ly", term: "CK1",
        question: "Trong giao thoa của hai sóng cơ cùng pha, hiệu đường đi từ hai nguồn đến các cực đại giao thoa thỏa mãn điều kiện nào (với k ∈ ℤ)?",
        options: ["d₂ - d₁ = kλ", "d₂ - d₁ = (k + 0,5)λ", "d₂ - d₁ = 2kλ", "d₂ - d₁ = (2k + 1)λ"],
        answer: 0,
        explanation: "Với hai nguồn đồng pha, các điểm cực đại giao thoa có hiệu đường đi bằng một số nguyên lần bước sóng: d₂ - d₁ = kλ."
    },
    {
        grade: "11", subject: "ly", term: "CK1",
        question: "Điều kiện để có sóng dừng trên một sợi dây có chiều dài L với hai đầu cố định là (với k nguyên dương):",
        options: ["L = k(λ / 2)", "L = (2k + 1)(λ / 4)", "L = kλ", "L = (k + 0,5)λ"],
        answer: 0,
        explanation: "Với sợi dây hai đầu cố định, chiều dài dây bằng một số nguyên lần nửa bước sóng: L = k(λ / 2)."
    },
    {
        grade: "11", subject: "ly", term: "CK1",
        question: "Một sóng âm có tần số f = 440 Hz truyền trong không khí với tốc độ v = 330 m/s. Bước sóng của sóng âm này là:",
        options: ["0,75 m", "1,33 m", "145200 m", "0,5 m"],
        answer: 0,
        explanation: "Áp dụng công thức λ = v / f = 330 / 440 = 0,75 m."
    },
    {
        grade: "11", subject: "ly", term: "CK1",
        question: "Đặc điểm nào sau đây là ĐÚNG khi nói về sóng điện từ?",
        options: [
            "Truyền được trong chân không với tốc độ xấp xỉ 3.10⁸ m/s",
            "Là sóng dọc và không truyền được trong chân không",
            "Chỉ truyền được trong môi trường chất rắn và khí",
            "Có tốc độ truyền sóng không phụ thuộc vào môi trường"
        ],
        answer: 0,
        explanation: "Sóng điện từ là sóng ngang và truyền được trong chân không với tốc độ c ≈ 3.10⁸ m/s."
    },
    {
        grade: "11", subject: "ly", term: "CK1",
        question: "Trong thí nghiệm Y-âng về giao thoa ánh sáng, biết a = 1 mm, D = 2 m, bước sóng ánh sáng dùng trong thí nghiệm là λ = 0,5 μm. Khoảng vân i trên màn là:",
        options: ["1 mm", "0,5 mm", "2 mm", "1,5 mm"],
        answer: 0,
        explanation: "Ta có i = λD / a = (0,5.10⁻⁶ × 2) / 10⁻³ = 10⁻³ m = 1 mm."
    },
    {
        grade: "11", subject: "ly", term: "CK1",
        question: "Khi sóng ánh sáng truyền từ không khí vào nước (chiết suất n > 1) thì:",
        options: ["Tần số không đổi, bước sóng giảm", "Tần số tăng, bước sóng không đổi", "Tần số giảm, bước sóng tăng", "Cả tần số và bước sóng đều giảm"],
        answer: 0,
        explanation: "Khi sóng truyền qua các môi trường khác nhau, tần số f luôn không đổi. Trong nước tốc độ giảm n lần nên bước sóng λ' = λ / n giảm."
    },
    {
        grade: "11", subject: "ly", term: "CK1",
        question: "Trên một sợi dây có sóng dừng, khoảng cách giữa một nút sóng và một bụng sóng liên tiếp bằng:",
        options: ["λ / 4", "λ / 2", "λ", "2λ"],
        answer: 0,
        explanation: "Hai nút liên tiếp cách nhau λ/2 nên khoảng cách từ một nút đến bụng liền kề là một nửa đoạn đó, tức là λ/4."
    },
    {
        grade: "11", subject: "ly", term: "CK1",
        question: "Bức xạ được sử dụng phổ biến trong các bộ điều khiển từ xa (remote tivi, điều hòa) là:",
        options: ["Tia hồng ngoại", "Tia tử ngoại", "Tia X", "Tia gamma"],
        answer: 0,
        explanation: "Tia hồng ngoại được ứng dụng rộng rãi trong bộ điều khiển từ xa, cảm biến hồng ngoại và thiết bị nhìn đêm."
    },

    // ===================================================================
    // VẬT LÍ 11 - GIỮA KÌ 2 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "ly", term: "GK2",
        question: "Theo định luật Coulomb, độ lớn lực tương tác tĩnh điện giữa hai điện tích điểm đặt trong chân không:",
        options: [
            "Tỉ lệ nghịch với bình phương khoảng cách giữa chúng",
            "Tỉ lệ thuận với khoảng cách giữa chúng",
            "Tỉ lệ nghịch với khoảng cách giữa chúng",
            "Tỉ lệ thuận với bình phương khoảng cách giữa chúng"
        ],
        answer: 0,
        explanation: "Công thức định luật Coulomb: F = k.|q₁q₂| / r², nên F tỉ lệ nghịch với r²."
    },
    {
        grade: "11", subject: "ly", term: "GK2",
        question: "Đơn vị của cường độ điện trường E trong hệ SI là:",
        options: ["V/m (Vôn trên mét)", "C (Culông)", "J (Jun)", "F (Fara)"],
        answer: 0,
        explanation: "Cường độ điện trường có đơn vị đo là V/m hoặc N/C."
    },
    {
        grade: "11", subject: "ly", term: "GK2",
        question: "Công của lực điện tác dụng lên một điện tích q di chuyển trong điện trường đều KHÔNG phụ thuộc vào:",
        options: ["Hình dạng của đường đi", "Vị trí điểm đầu và điểm cuối", "Cường độ điện trường E", "Độ lớn điện tích q"],
        answer: 0,
        explanation: "Trường tĩnh điện là trường thế nên công của lực điện A = qEd không phụ thuộc hình dạng đường đi."
    },
    {
        grade: "11", subject: "ly", term: "GK2",
        question: "Đại lượng đặc trưng cho khả năng tích điện của tụ điện ở một hiệu điện thế nhất định được gọi là:",
        options: ["Điện dung của tụ điện (C)", "Cường độ điện trường (E)", "Điện thế (V)", "Công suất điện (P)"],
        answer: 0,
        explanation: "Điện dung C = Q / U đặc trưng cho khả năng tích điện của tụ điện, có đơn vị là Fara (F)."
    },
    {
        grade: "11", subject: "ly", term: "GK2",
        question: "Một tụ điện có điện dung C = 20 μF được tích điện ở hiệu điện thế U = 10 V. Điện tích Q của tụ điện là:",
        options: ["2.10⁻⁴ C", "200 C", "2.10⁻⁶ C", "0,5 C"],
        answer: 0,
        explanation: "Áp dụng công thức Q = C.U = 20.10⁻⁶ × 10 = 2.10⁻⁴ (C)."
    },
    {
        grade: "11", subject: "ly", term: "GK2",
        question: "Hai điện tích điểm cùng dấu khi đặt gần nhau sẽ:",
        options: ["Đẩy nhau", "Hút nhau", "Không tương tác với nhau", "Vừa hút vừa đẩy"],
        answer: 0,
        explanation: "Hai điện tích cùng dấu (cùng dương hoặc cùng âm) thì đẩy nhau, trái dấu thì hút nhau."
    },
    {
        grade: "11", subject: "ly", term: "GK2",
        question: "Nếu tăng khoảng cách giữa hai điện tích điểm lên 3 lần thì độ lớn lực tương tác tĩnh điện giữa chúng sẽ:",
        options: ["Giảm đi 9 lần", "Giảm đi 3 lần", "Tăng lên 3 lần", "Tăng lên 9 lần"],
        answer: 0,
        explanation: "Vì F tỉ lệ nghịch với r² nên khi r tăng 3 lần thì F giảm 3² = 9 lần."
    },
    {
        grade: "11", subject: "ly", term: "GK2",
        question: "Vectơ cường độ điện trường E tại một điểm và vectơ lực điện F tác dụng lên một điện tích thử âm (q < 0) đặt tại điểm đó có:",
        options: ["Cùng phương, ngược chiều", "Cùng phương, cùng chiều", "Phương vuông góc với nhau", "Độ lớn luôn bằng nhau"],
        answer: 0,
        explanation: "Ta có F = qE. Khi q < 0 thì vectơ F ngược chiều với vectơ E."
    },
    {
        grade: "11", subject: "ly", term: "GK2",
        question: "Các đường sức điện của điện trường đều là:",
        options: [
            "Những đường thẳng song song, cùng chiều và cách đều nhau",
            "Những đường tròn đồng tâm",
            "Những đường thẳng xuất phát từ một điểm ra vô cực",
            "Những đường cong khép kín"
        ],
        answer: 0,
        explanation: "Điện trường đều có vectơ E tại mọi điểm đều bằng nhau nên các đường sức là các đường thẳng song song, cùng chiều và cách đều nhau."
    },
    {
        grade: "11", subject: "ly", term: "GK2",
        question: "Mối liên hệ giữa cường độ điện trường đều E và hiệu điện thế U giữa hai bản phẳng song song cách nhau khoảng d là:",
        options: ["E = U / d", "E = U.d", "E = d / U", "E = U² / d"],
        answer: 0,
        explanation: "Công thức liên hệ giữa cường độ điện trường đều và hiệu điện thế: U = E.d ⇒ E = U / d."
    },
    {
        grade: "11", subject: "ly", term: "GK2",
        question: "Đổi đơn vị điện dung: 1 pF (picôfara) bằng bao nhiêu Fara (F)?",
        options: ["10⁻¹² F", "10⁻⁶ F", "10⁻⁹ F", "10⁻³ F"],
        answer: 0,
        explanation: "1 μF = 10⁻⁶ F, 1 nF = 10⁻⁹ F, 1 pF = 10⁻¹² F."
    },
    {
        grade: "11", subject: "ly", term: "GK2",
        question: "Khi ghép song song hai tụ điện có điện dung C₁ và C₂ thì điện dung tương đương C_b của bộ tụ là:",
        options: ["C_b = C₁ + C₂", "1/C_b = 1/C₁ + 1/C₂", "C_b = C₁.C₂", "C_b = |C₁ - C₂|"],
        answer: 0,
        explanation: "Khi ghép tụ song song, điện dung tương đương bằng tổng điện dung các tụ thành phần: C_b = C₁ + C₂."
    },
    {
        grade: "11", subject: "ly", term: "GK2",
        question: "Khi ghép nối tiếp hai tụ điện có điện dung C₁ = 6 μF và C₂ = 3 μF thì điện dung tương đương của bộ tụ là:",
        options: ["2 μF", "9 μF", "18 μF", "3 μF"],
        answer: 0,
        explanation: "Ghép nối tiếp: C_b = (C₁.C₂) / (C₁ + C₂) = (6 × 3) / (6 + 3) = 18 / 9 = 2 μF."
    },
    {
        grade: "11", subject: "ly", term: "GK2",
        question: "Công thức tính năng lượng điện trường W dự trữ trong tụ điện có điện dung C được tích điện ở hiệu điện thế U là:",
        options: ["W = (1/2)C.U²", "W = C.U²", "W = (1/2)C.U", "W = C².U"],
        answer: 0,
        explanation: "Năng lượng của tụ điện tích điện: W = (1/2)CU² = (1/2)QU = Q²/(2C)."
    },
    {
        grade: "11", subject: "ly", term: "GK2",
        question: "Nếu công của lực điện làm dịch chuyển điện tích q = 2 C từ điểm M đến điểm N là A_MN = 10 J thì hiệu điện thế U_MN bằng:",
        options: ["5 V", "20 V", "0,2 V", "8 V"],
        answer: 0,
        explanation: "Áp dụng công thức U_MN = A_MN / q = 10 / 2 = 5 V."
    },

    // ===================================================================
    // VẬT LÍ 11 - CUỐI KÌ 2 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "ly", term: "CK2",
        question: "Cường độ dòng điện không đổi chạy qua dây dẫn khi có điện lượng Δq = 12 C dịch chuyển qua tiết diện thẳng của dây trong thời gian Δt = 4 s là:",
        options: ["3 A", "48 A", "0,33 A", "8 A"],
        answer: 0,
        explanation: "Cường độ dòng điện I = Δq / Δt = 12 / 4 = 3 (A)."
    },
    {
        grade: "11", subject: "ly", term: "CK2",
        question: "Biểu thức của định luật Ohm đối với toàn mạch gồm nguồn điện có suất điện động E, điện trở trong r và mạch ngoài có điện trở R là:",
        options: ["I = E / (R + r)", "I = E / R", "I = E.(R + r)", "I = E / (R - r)"],
        answer: 0,
        explanation: "Theo định luật Ohm cho toàn mạch: I = E / (R + r)."
    },
    {
        grade: "11", subject: "ly", term: "CK2",
        question: "Công suất tỏa nhiệt P trên một điện trở R khi có dòng điện cường độ I chạy qua được tính bằng công thức:",
        options: ["P = R.I²", "P = R.I", "P = R²I", "P = I / R"],
        answer: 0,
        explanation: "Theo định luật Jun - Lenxơ, công suất tỏa nhiệt trên điện trở R là P = Q/t = R.I²."
    },
    {
        grade: "11", subject: "ly", term: "CK2",
        question: "Hạt tải điện chủ yếu trong kim loại là:",
        options: ["Các electron tự do", "Các ion dương", "Các ion âm", "Các lỗ trống"],
        answer: 0,
        explanation: "Dòng điện trong kim loại là dòng chuyển dời có hướng của các electron tự do ngược chiều điện trường."
    },
    {
        grade: "11", subject: "ly", term: "CK2",
        question: "Khi nhiệt độ của dây dẫn kim loại tăng lên thì điện trở suất của kim loại đó sẽ:",
        options: ["Tăng lên", "Giảm xuống", "Không thay đổi", "Bằng 0"],
        answer: 0,
        explanation: "Khi nhiệt độ tăng, điện trở suất của kim loại tăng theo hàm bậc nhất ρ = ρ₀[1 + α(t - t₀)]."
    },
    {
        grade: "11", subject: "ly", term: "CK2",
        question: "Đơn vị của điện trở R trong hệ SI là:",
        options: ["Ôm (Ω)", "Ampe (A)", "Vôn (V)", "Oát (W)"],
        answer: 0,
        explanation: "Đơn vị đo điện trở là Ôm (ký hiệu là Ω)."
    },
    {
        grade: "11", subject: "ly", term: "CK2",
        question: "Công thức tính điện trở R của một dây dẫn hình trụ đồng chất có chiều dài l, tiết diện S và điện trở suất ρ là:",
        options: ["R = ρ.l / S", "R = ρ.S / l", "R = l / (ρ.S)", "R = ρ.l.S"],
        answer: 0,
        explanation: "Điện trở dây dẫn tỉ lệ thuận với chiều dài l, tỉ lệ nghịch với tiết diện S: R = ρ.l / S."
    },
    {
        grade: "11", subject: "ly", term: "CK2",
        question: "Cho hai điện trở R₁ = 4 Ω và R₂ = 6 Ω mắc nối tiếp nhau. Điện trở tương đương của đoạn mạch là:",
        options: ["10 Ω", "2,4 Ω", "2 Ω", "24 Ω"],
        answer: 0,
        explanation: "Mắc nối tiếp hai điện trở: R_tđ = R₁ + R₂ = 4 + 6 = 10 Ω."
    },
    {
        grade: "11", subject: "ly", term: "CK2",
        question: "Cho hai điện trở R₁ = 6 Ω và R₂ = 3 Ω mắc song song với nhau. Điện trở tương đương của đoạn mạch là:",
        options: ["2 Ω", "9 Ω", "18 Ω", "3 Ω"],
        answer: 0,
        explanation: "Mắc song song: R_tđ = (R₁.R₂) / (R₁ + R₂) = (6 × 3) / (6 + 3) = 2 Ω."
    },
    {
        grade: "11", subject: "ly", term: "CK2",
        question: "Đại lượng đặc trưng cho khả năng thực hiện công của nguồn điện được gọi là:",
        options: ["Suất điện động của nguồn điện (E)", "Điện trở trong của nguồn (r)", "Cường độ dòng điện (I)", "Điện dung (C)"],
        answer: 0,
        explanation: "Suất điện động E = A / q đặc trưng cho khả năng thực hiện công của nguồn điện khi dịch chuyển điện tích dương ngược chiều điện trường bên trong nguồn."
    },
    {
        grade: "11", subject: "ly", term: "CK2",
        question: "Công của nguồn điện có suất điện động E sản ra khi phát dòng điện có cường độ I trong thời gian t là:",
        options: ["A_ng = E.I.t", "A_ng = E.I²t", "A_ng = E²It", "A_ng = E.I / t"],
        answer: 0,
        explanation: "Công thức tính điện năng sản ra của nguồn điện: A_ng = E.q = E.I.t."
    },
    {
        grade: "11", subject: "ly", term: "CK2",
        question: "Hiện tượng đoản mạch của nguồn điện xảy ra khi:",
        options: [
            "Nối hai cực của nguồn điện bằng dây dẫn có điện trở rất nhỏ (R ≈ 0)",
            "Ngắt mạch điện ngoài hoàn toàn (R = ∞)",
            "Mắc thêm một điện trở rất lớn vào mạch ngoài",
            "Ghép nối tiếp hai nguồn điện giống nhau"
        ],
        answer: 0,
        explanation: "Khi R ≈ 0 thì dòng điện trong mạch đạt giá trị cực đại I = E / r rất lớn, gọi là hiện tượng đoản mạch."
    },
    {
        grade: "11", subject: "ly", term: "CK2",
        question: "Một nguồn điện có suất điện động E = 12 V, điện trở trong r = 1 Ω nối với điện trở mạch ngoài R = 5 Ω thành mạch kín. Cường độ dòng điện chạy trong mạch là:",
        options: ["2 A", "2,4 A", "12 A", "1,5 A"],
        answer: 0,
        explanation: "Áp dụng định luật Ohm toàn mạch: I = E / (R + r) = 12 / (5 + 1) = 2 A."
    },
    {
        grade: "11", subject: "ly", term: "CK2",
        question: "Nhiệt lượng Q tỏa ra trên vật dẫn có điện trở R khi có dòng điện cường độ I chạy qua trong thời gian t được tính theo định luật Jun - Lenxơ là:",
        options: ["Q = R.I².t", "Q = R.I.t", "Q = R².I.t", "Q = I² / (R.t)"],
        answer: 0,
        explanation: "Biểu thức định luật Jun - Lenxơ: Q = R.I².t (đơn vị Jun - J)."
    },
    {
        grade: "11", subject: "ly", term: "CK2",
        question: "Linh kiện bán dẫn có điện trở giảm mạnh khi nhiệt độ tăng được gọi là:",
        options: ["Điện trở nhiệt (Thermistor - NTC)", "Quang điện trở", "Tụ điện xoay", "Cuộn cảm thuần"],
        answer: 0,
        explanation: "Điện trở nhiệt (Thermistor hệ số âm NTC) có điện trở giảm rõ rệt khi nhiệt độ tăng, dùng làm cảm biến nhiệt."
    },
    // ===================================================================
    // TIẾNG ANH 11 - CUỐI KÌ 1 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "anh", term: "CK1",
        question: "Choose the correct gerund form: _______ part in the ASEAN Youth Volunteer Programme was an unforgettable experience.",
        options: ["Taking", "Take", "To take", "Taken"],
        answer: 0,
        explanation: "Danh động từ (Gerund: V-ing) đóng vai trò làm chủ ngữ trong câu (Unit 4: ASEAN and Viet Nam)."
    },
    {
        grade: "11", subject: "anh", term: "CK1",
        question: "Choose the correct participle form: _______ from a distance, the ancient citadel looks magnificent.",
        options: ["Seen", "Seeing", "To see", "Saw"],
        answer: 0,
        explanation: "Mệnh đề phân từ quá khứ (Past Participle: V3/ed) dùng rút gọn mệnh đề mang nghĩa bị động (Được nhìn từ xa...)."
    },
    {
        grade: "11", subject: "anh", term: "CK1",
        question: "Choose the correct vocabulary: Burning fossil fuels releases large amounts of _______ gases into the atmosphere.",
        options: ["greenhouse", "natural", "oxygen", "fresh"],
        answer: 0,
        explanation: "Cụm từ 'greenhouse gases' (khí nhà kính - Unit 5: Global Warming) là nguyên nhân chính gây nóng lên toàn cầu."
    },
    {
        grade: "11", subject: "anh", term: "CK1",
        question: "Choose the correct verb form: Our class suggested _______ a fundraising event to help children in flooded areas.",
        options: ["organizing", "to organize", "organize", "organized"],
        answer: 0,
        explanation: "Cấu trúc: suggest + V-ing (đề xuất làm việc gì)."
    },
    {
        grade: "11", subject: "anh", term: "CK1",
        question: "Choose the correct word: The motto of ASEAN is 'One Vision, One Identity, One _______'.",
        options: ["Community", "Country", "Nation", "Economy"],
        answer: 0,
        explanation: "Khẩu hiệu chính thức của ASEAN là 'One Vision, One Identity, One Community' (Một Tầm nhìn, Một Bản sắc, Một Cộng đồng)."
    },
    {
        grade: "11", subject: "anh", term: "CK1",
        question: "Choose the correct form: Do you mind _______ me translate this article about ASEAN cultural exchanges?",
        options: ["helping", "to help", "help", "helped"],
        answer: 0,
        explanation: "Sau cấu trúc 'Would/Do you mind...' ta luôn dùng động từ dạng V-ing."
    },
    {
        grade: "11", subject: "anh", term: "CK1",
        question: "Choose the correct participle: _______ enough money, the students bought solar panels for their school project.",
        options: ["Saving", "Saved", "To save", "Be saved"],
        answer: 0,
        explanation: "Mệnh đề hiện tại phân từ (Present Participle: V-ing) dùng rút gọn hai mệnh đề cùng chủ ngữ mang nghĩa chủ động."
    },
    {
        grade: "11", subject: "anh", term: "CK1",
        question: "Choose the correct word: Deforestation and forest fires contribute significantly to _______ warming.",
        options: ["global", "local", "national", "regional"],
        answer: 0,
        explanation: "Cụm từ cố định 'global warming' (sự nóng lên toàn cầu)."
    },
    {
        grade: "11", subject: "anh", term: "CK1",
        question: "Choose the correct preposition: Qualifying for the ASEAN scholarship depends _______ your academic results and community service.",
        options: ["on", "in", "at", "with"],
        answer: 0,
        explanation: "Cấu trúc: depend on + V-ing/Noun (phụ thuộc vào cái gì)."
    },
    {
        grade: "11", subject: "anh", term: "CK1",
        question: "Choose the correct vocabulary: Methane is a powerful greenhouse gas that is _______ from landfills and agriculture.",
        options: ["released", "absorbed", "protected", "preserved"],
        answer: 0,
        explanation: "'release gas' có nghĩa là thải ra / phát thải khí vào bầu khí quyển."
    },
    {
        grade: "11", subject: "anh", term: "CK1",
        question: "Choose the correct verb form: Many countries have agreed to stop _______ coal-fired power plants to protect the environment.",
        options: ["building", "to build", "build", "built"],
        answer: 0,
        explanation: "'stop + V-ing' có nghĩa là dừng hẳn việc đang làm (dừng xây nhà máy nhiệt điện than)."
    },
    {
        grade: "11", subject: "anh", term: "CK1",
        question: "Choose the correct word: Cultural _______ helps young people in ASEAN countries understand and respect each other better.",
        options: ["exchange", "change", "transfer", "movement"],
        answer: 0,
        explanation: "Cụm từ 'cultural exchange' có nghĩa là giao lưu văn hóa."
    },
    {
        grade: "11", subject: "anh", term: "CK1",
        question: "Choose the correct participle form: _______ by the heavy storm, several coastal villages needed urgent relief.",
        options: ["Damaged", "Damaging", "To damage", "Damage"],
        answer: 0,
        explanation: "Chủ ngữ 'several coastal villages' chịu tác động bị động bởi cơn bão ('by the heavy storm') nên dùng quá khứ phân từ V3/ed (Damaged)."
    },
    {
        grade: "11", subject: "anh", term: "CK1",
        question: "Choose the correct vocabulary: Switching to _______ energy sources like wind and solar power is key to fighting climate change.",
        options: ["renewable", "non-renewable", "exhaustible", "fossil"],
        answer: 0,
        explanation: "'renewable energy' là năng lượng tái tạo (như năng lượng gió, mặt trời)."
    },
    {
        grade: "11", subject: "anh", term: "CK1",
        question: "Choose the correct form: My brother is really interested in _______ about the history of Southeast Asian nations.",
        options: ["learning", "to learn", "learn", "learned"],
        answer: 0,
        explanation: "Sau giới từ (in, on, at, about, of...) động từ luôn chia ở dạng danh động từ V-ing."
    },

    // ===================================================================
    // TIẾNG ANH 11 - GIỮA KÌ 2 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "anh", term: "GK2",
        question: "Choose the correct to-infinitive clause: Hoi An Ancient Town was the first site in Quang Nam _______ as a World Heritage Site.",
        options: ["to be recognized", "recognizing", "recognized", "be recognized"],
        answer: 0,
        explanation: "Sau số thứ tự (the first, the second, the last...) dùng mệnh đề To-V; vì mang nghĩa bị động nên dùng 'to be V3/ed' (Unit 6)."
    },
    {
        grade: "11", subject: "anh", term: "GK2",
        question: "Choose the correct perfect gerund: He admitted _______ the ancient statue at the museum unintentionally.",
        options: ["having damaged", "to have damaged", "damage", "be damaged"],
        answer: 0,
        explanation: "Sau động từ 'admit' dùng danh động từ hoàn thành (having + V3/ed) để nhấn mạnh hành động đã xảy ra trong quá khứ."
    },
    {
        grade: "11", subject: "anh", term: "GK2",
        question: "Choose the correct vocabulary: High school _______ often consider two main options: academic study at university or vocational training.",
        options: ["school-leavers", "teachers", "professors", "freshmen"],
        answer: 0,
        explanation: "'school-leavers' là học sinh vừa tốt nghiệp THPT (Unit 7: Education options for school-leavers)."
    },
    {
        grade: "11", subject: "anh", term: "GK2",
        question: "Choose the correct word: If you want to become a skilled car mechanic quickly, you should attend a _______ school.",
        options: ["vocational", "primary", "nursery", "high"],
        answer: 0,
        explanation: "'vocational school' là trường dạy nghề, tập trung đào tạo kỹ năng thực hành cho một công việc cụ thể."
    },
    {
        grade: "11", subject: "anh", term: "GK2",
        question: "Choose the correct word: Crowdfunding is a modern way to raise money for _______ cultural heritage sites.",
        options: ["preserving", "destroying", "forgetting", "ignoring"],
        answer: 0,
        explanation: "'preserve cultural heritage sites' có nghĩa là bảo tồn các di sản văn hóa."
    },
    {
        grade: "11", subject: "anh", term: "GK2",
        question: "Choose the correct form: Trang An Landscape Complex is the only site in Viet Nam _______ as a mixed World Heritage Site.",
        options: ["to be recognized", "recognizing", "to recognize", "recognize"],
        answer: 0,
        explanation: "Sau cụm 'the only + Noun' dùng cấu trúc To-infinitive; do di sản 'được công nhận' nên chia bị động 'to be recognized'."
    },
    {
        grade: "11", subject: "anh", term: "GK2",
        question: "Choose the correct perfect participle: _______ all the entrance exams successfully, Nam was accepted into a top university.",
        options: ["Having passed", "To pass", "Pass", "Having been passed"],
        answer: 0,
        explanation: "Phân từ hoàn thành (Having + V3/ed) đứng đầu câu diễn tả hành động đã hoàn tất trước một hành động khác trong quá khứ."
    },
    {
        grade: "11", subject: "anh", term: "GK2",
        question: "Choose the correct vocabulary: A _______ provides students with practical work experience while they are learning a trade.",
        options: ["apprenticeship", "scholarship", "championship", "friendship"],
        answer: 0,
        explanation: "'apprenticeship' là kỳ thực tập học nghề (vừa học vừa làm thực tế tại xưởng/doanh nghiệp)."
    },
    {
        grade: "11", subject: "anh", term: "GK2",
        question: "Choose the correct word: Don Ca Tai Tu is an important form of _______ cultural heritage in southern Viet Nam.",
        options: ["intangible", "concrete", "building", "monument"],
        answer: 0,
        explanation: "'intangible cultural heritage' có nghĩa là di sản văn hóa phi vật thể."
    },
    {
        grade: "11", subject: "anh", term: "GK2",
        question: "Choose the correct form: We went to Hue Imperial Citadel _______ more about the Nguyen Dynasty.",
        options: ["to learn", "learning", "learned", "for learn"],
        answer: 0,
        explanation: "Dùng To-infinitive (to learn) để chỉ mục đích của hành động (đến Kinh thành Huế để tìm hiểu thêm...)."
    },
    {
        grade: "11", subject: "anh", term: "GK2",
        question: "Choose the correct word: After finishing a four-year course at university, students will receive a _______'s degree.",
        options: ["bachelor", "master", "doctor", "principal"],
        answer: 0,
        explanation: "'bachelor's degree' là bằng cử nhân (cấp sau khi tốt nghiệp đại học hệ chính quy)."
    },
    {
        grade: "11", subject: "anh", term: "GK2",
        question: "Choose the correct form: Lan thanked her teacher for _______ her apply for the vocational course.",
        options: ["having helped", "to help", "help", "helped"],
        answer: 0,
        explanation: "Cấu trúc: thank someone for + V-ing / having V3/ed (cảm ơn ai vì đã làm việc gì trước đó)."
    },
    {
        grade: "11", subject: "anh", term: "GK2",
        question: "Choose the correct vocabulary: Heavy fines should be imposed on people who _______ historical monuments.",
        options: ["damage", "restore", "protect", "admire"],
        answer: 0,
        explanation: "'damage historical monuments' có nghĩa là làm hư hại các di tích lịch sử."
    },
    {
        grade: "11", subject: "anh", term: "GK2",
        question: "Choose the correct word: Many universities hold _______ days to give high school students a chance to visit the campus.",
        options: ["open", "closed", "free", "public"],
        answer: 0,
        explanation: "'open day' là ngày hội tư vấn tuyển sinh / mở cửa trường đại học cho học sinh THPT đến tham quan."
    },
    {
        grade: "11", subject: "anh", term: "GK2",
        question: "Choose the correct clause: Do you have any ideas about the best way _______ folk music among young people?",
        options: ["to promote", "promoting", "promoted", "promote"],
        answer: 0,
        explanation: "Sau cụm 'the best way' (so sánh nhất) ta dùng mệnh đề To-infinitive (to promote) để bổ nghĩa."
    },

    // ===================================================================
    // TIẾNG ANH 11 - CUỐI KÌ 2 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "anh", term: "CK2",
        question: "Choose the correct cleft sentence: It was time-management skills _______ helped me become more independent at university.",
        options: ["that", "who", "whom", "where"],
        answer: 0,
        explanation: "Cấu trúc câu chẻ (Cleft sentence - Unit 8) nhấn mạnh chủ ngữ chỉ sự vật: It + is/was + Noun + that + V..."
    },
    {
        grade: "11", subject: "anh", term: "CK2",
        question: "Choose the correct linking word: Many teenagers suffer from cyberbullying; _______, they are afraid to tell their parents or teachers.",
        options: ["however", "because", "although", "despite"],
        answer: 0,
        explanation: "Liên từ 'however' (tuy nhiên - đứng giữa dấu chấm phẩy và dấu phẩy) dùng nối hai mệnh đề tương phản (Unit 9)."
    },
    {
        grade: "11", subject: "anh", term: "CK2",
        question: "Choose the correct compound noun: Cutting down forests destroys the natural habitat and disrupts the _______.",
        options: ["food chain", "living room", "greenhouse", "bus stop"],
        answer: 0,
        explanation: "Danh từ ghép 'food chain' (chuỗi thức ăn - Unit 10: The ecosystem) chỉ mối quan hệ dinh dưỡng trong hệ sinh thái."
    },
    {
        grade: "11", subject: "anh", term: "CK2",
        question: "Choose the correct phrase: Teenagers often experience _______ pressure when they try to fit in with their group of friends.",
        options: ["peer", "parent", "school", "work"],
        answer: 0,
        explanation: "Cụm từ 'peer pressure' (áp lực đồng trang lứa) là từ vựng trọng tâm của Unit 9: Social issues."
    },
    {
        grade: "11", subject: "anh", term: "CK2",
        question: "Choose the correct preposition: When moving out to study at university, students need to learn how to deal _______ financial problems on their own.",
        options: ["with", "in", "at", "on"],
        answer: 0,
        explanation: "Cụm động từ 'deal with' có nghĩa là giải quyết, đối phó với vấn đề gì."
    },
    {
        grade: "11", subject: "anh", term: "CK2",
        question: "Choose the correct cleft sentence: It was my homeroom teacher _______ encouraged me to join the English speaking club.",
        options: ["who", "which", "where", "when"],
        answer: 0,
        explanation: "Câu chẻ nhấn mạnh chủ ngữ chỉ người ('my homeroom teacher') dùng đại từ quan hệ 'who' hoặc 'that'."
    },
    {
        grade: "11", subject: "anh", term: "CK2",
        question: "Choose the correct linking phrase: _______ the heavy rain, the volunteers continued cleaning up the local beach.",
        options: ["In spite of", "Although", "Because of", "Because"],
        answer: 0,
        explanation: "Trước cụm danh từ ('the heavy rain') và mang nghĩa nhượng bộ ('mặc dù'), ta dùng giới từ 'In spite of' hoặc 'Despite'."
    },
    {
        grade: "11", subject: "anh", term: "CK2",
        question: "Choose the correct vocabulary: Being _______ means you are able to take care of yourself and make your own decisions without relying on others.",
        options: ["independent", "dependent", "reliable", "confident"],
        answer: 0,
        explanation: "'independent' (tự lập - Unit 8: Becoming independent) là khả năng tự chăm sóc bản thân và tự ra quyết định."
    },
    {
        grade: "11", subject: "anh", term: "CK2",
        question: "Choose the correct word: U Minh Thuong National Park is home to many rare and _______ species of plants and animals.",
        options: ["endangered", "dangerous", "common", "extinct"],
        answer: 0,
        explanation: "'endangered species' là các loài động thực vật có nguy cơ tuyệt chủng cần được bảo vệ."
    },
    {
        grade: "11", subject: "anh", term: "CK2",
        question: "Choose the correct linking word: _______ body shaming can seriously affect a teenager's mental health, many people still make rude comments online.",
        options: ["Although", "Despite", "Because", "Therefore"],
        answer: 0,
        explanation: "Đứng trước một mệnh đề đầy đủ (S + V) và mang nghĩa tương phản 'Mặc dù...', ta dùng liên từ 'Although'."
    },
    {
        grade: "11", subject: "anh", term: "CK2",
        question: "Choose the correct phrase: To manage your pocket money effectively, you should make a weekly _______ Plan.",
        options: ["budgeting", "shopping", "playing", "sleeping"],
        answer: 0,
        explanation: "Lập kế hoạch chi tiêu / ngân sách ('budgeting') giúp học sinh quản lý tiền tiêu vặt hiệu quả."
    },
    {
        grade: "11", subject: "anh", term: "CK2",
        question: "Choose the correct compound noun: Coral reefs play a vital role in maintaining marine _______.",
        options: ["biodiversity", "greenhouse", "footprint", "rainforest"],
        answer: 0,
        explanation: "'marine biodiversity' có nghĩa là sự đa dạng sinh học biển (Unit 10)."
    },
    {
        grade: "11", subject: "anh", term: "CK2",
        question: "Choose the correct cleft sentence: It was in Da Lat _______ my family spent our summer holiday last year.",
        options: ["that", "where", "which", "who"],
        answer: 0,
        explanation: "Trong cấu trúc câu chẻ nhấn mạnh trạng ngữ chỉ nơi chốn ('It + is/was + giới từ + địa điểm + ...'), ta luôn dùng 'that' (không dùng 'where')."
    },
    {
        grade: "11", subject: "anh", term: "CK2",
        question: "Choose the correct linking word: Illegal hunting has led to the disappearance of many wild animals; _______, strict laws must be enacted immediately.",
        options: ["therefore", "however", "moreover", "otherwise"],
        answer: 0,
        explanation: "'therefore' (do đó, vì vậy) dùng để chỉ kết quả hợp lý của mệnh đề đứng trước."
    },
    {
        grade: "11", subject: "anh", term: "CK2",
        question: "Choose the correct phrase: Developing good _______ skills helps students balance their study và extracurricular activities.",
        options: ["time-management", "money-making", "note-taking", "decision-making"],
        answer: 0,
        explanation: "'time-management skills' (kỹ năng quản lý thời gian) giúp cân bằng giữa việc học và hoạt động ngoại khóa."
    },

    // ===================================================================
    // 4. NGỮ VĂN 11 - GIỮA KÌ 1 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "van", term: "GK1",
        question: "Tác phẩm truyện ngắn 'Chí Phèo' của nhà văn Nam Cao lúc mới in lần đầu năm 1941 có nhan đề là gì?",
        options: ["Cái lò gạch cũ", "Đôi lứa xứng đôi", "Nửa đêm", "Sống mòn"],
        answer: 0,
        explanation: "Truyện ngắn 'Chí Phèo' ban đầu có tên là 'Cái lò gạch cũ', sau đó NXB Đời mới đổi thành 'Đôi lứa xứng đôi' và đến tập 'Luống cày' (1946) Nam Cao đặt lại là 'Chí Phèo'."
    },
    {
        grade: "11", subject: "van", term: "GK1",
        question: "Trong truyện ngắn 'Chí Phèo' (Nam Cao), chi tiết nào đánh dấu bước ngoặt thức tỉnh phần người trong tâm hồn Chí Phèo sau đêm gặp Thị Nở?",
        options: ["Bát cháo hành của Thị Nở và những âm thanh cuộc sống buổi sáng", "Cuộc gặp gỡ với Bá Kiến tại nhà riêng", "Tiếng chửi vu vơ đầu tác phẩm", "Lời khuyên của ông Tư Đạm"],
        answer: 0,
        explanation: "Hơi ấm và hương vị bát cháo hành của Thị Nở cùng những âm thanh quen thuộc buổi sáng (tiếng chim hót, tiếng người đi chợ, tiếng gõ mái chèo) đã đánh thức lương tri và khát vọng hoàn lương của Chí Phèo."
    },
    {
        grade: "11", subject: "van", term: "GK1",
        question: "Trong tác phẩm 'Chữ người tử tù' (Nguyễn Tuân), nhân vật Huấn Cao được khắc họa nổi bật với vẻ đẹp của:",
        options: ["Tài hoa nghệ sĩ, khí phách hiên ngang và thiên lương trong sáng", "Quyền lực tuyệt đối chốn quan trường", "Sự nhẫn nhục cam chịu trước số phận", "Tài mưu lược quân sự xuất chúng"],
        answer: 0,
        explanation: "Huấn Cao là hình tượng con người tài hoa (viết chữ vuông tươi rất đẹp), có khí phách anh hùng bất khuất và thiên lương trong sáng ('ta nhất sinh không vì vàng ngọc hay quyền thế mà ép mình viết câu đối bao giờ')."
    },
    {
        grade: "11", subject: "van", term: "GK1",
        question: "Cảnh Huấn Cao cho chữ viên quản ngục trong 'Chữ người tử tù' được tác giả Nguyễn Tuân gọi là gì?",
        options: ["Một cảnh tượng xưa nay chưa từng có", "Một buổi dạ tiệc chốn lao tù", "Một cuộc hội ngộ tri âm nơi thôn dã", "Một nghi lễ truyền nghề trang nghiêm"],
        answer: 0,
        explanation: "Nguyễn Tuân gọi cảnh cho chữ trong buồng tối chật hẹp, ẩm ướt của nhà tù là 'một cảnh tượng xưa nay chưa từng có' bởi sự đối lập gay gắt giữa cái đẹp, cái thiện với nơi tối tăm, nhơ bẩn."
    },
    {
        grade: "11", subject: "van", term: "GK1",
        question: "Truyện ngắn 'Hai đứa trẻ' của nhà văn Thạch Lam được trần thuật chủ yếu từ điểm nhìn của nhân vật nào?",
        options: ["Nhân vật Liên", "Nhân vật An", "Bác phở Siêu", "Chị Tí bán hàng nước"],
        answer: 0,
        explanation: "Câu chuyện phố huyện lúc chiều tà đến đêm khuya được kể bằng ngôi thứ ba nhưng điểm nhìn trần thuật chủ yếu đặt vào tâm trạng và cảm nhận tinh tế của cô bé Liên."
    },
    {
        grade: "11", subject: "van", term: "GK1",
        question: "Hình ảnh đoàn tàu đêm đi qua phố huyện từ Hà Nội về trong truyện ngắn 'Hai đứa trẻ' (Thạch Lam) mang ý nghĩa biểu tượng cho điều gì?",
        options: ["Thế giới rực rỡ ánh sáng, giàu sang và khát vọng đổi thay cuộc sống tù đọng", "Sự ồn ào phá vỡ giấc ngủ yên bình của người dân quê", "Nỗi sợ hãi trước nền văn minh công nghiệp", "Biểu tượng cho sự chia ly vĩnh viễn của gia đình Liên"],
        answer: 0,
        explanation: "Đoàn tàu rực sáng từ Hà Nội chạy qua phố huyện nghèo tối tăm là biểu tượng của một thế giới tươi sáng, sôi động trong kí ức tuổi thơ Liên và niềm mong mỏi thoát khỏi kiếp sống mòn mỏi, quẩn quanh."
    },
    {
        grade: "11", subject: "van", term: "GK1",
        question: "Câu thơ mở đầu bài 'Đây thôn Vĩ Dạ' của Hàn Mặc Tử ('Sao anh không về chơi thôn Vĩ?') sử dụng biện pháp tu từ nổi bật nào?",
        options: ["Câu hỏi tu từ", "Nói quá (khoa trương)", "Chơi chữ", "Liệt kê"],
        answer: 0,
        explanation: "Câu thơ 'Sao anh không về chơi thôn Vĩ?' vừa là lời hỏi han, trách nhẹ dịu dàng của cô gái xứ Huế, vừa là câu hỏi tu từ bộc lộ nỗi niềm khao khát trở về Vĩ Dạ của chính thi nhân."
    },
    {
        grade: "11", subject: "van", term: "GK1",
        question: "Lời đề từ 'Bâng khuâng trời rộng nhớ sông dài' thuộc bài thơ nào trong phong trào Thơ mới?",
        options: ["Tràng giang – Huy Cận", "Đây thôn Vĩ Dạ – Hàn Mặc Tử", "Vội vàng – Xuân Diệu", "Tống biệt hành – Thâm Tâm"],
        answer: 0,
        explanation: "'Bâng khuâng trời rộng nhớ sông dài' là lời đề từ nổi tiếng thâu tóm cảm hứng chủ đạo (nỗi sầu trước vũ trụ mênh mông, rợn ngợp) của bài thơ 'Tràng giang' (Huy Cận)."
    },
    {
        grade: "11", subject: "van", term: "GK1",
        question: "Trong khổ cuối bài thơ 'Tràng giang' (Huy Cận), câu thơ 'Không khói hoàng hôn cũng nhớ nhà' được gợi cảm hứng từ điển tích trong bài thơ Đường nào?",
        options: ["Hoàng Hạc lâu – Thôi Hiệu", "Tĩnh dạ tứ – Lý Bạch", "Phong Kiều dạ bạc – Trương Kế", "Đăng Cao – Đỗ Phủ"],
        answer: 0,
        explanation: "Ý thơ đối sánh với câu kết bài 'Hoàng Hạc lâu' của Thôi Hiệu ('Yên ba giang thượng sử nhân sầu' – Khói sóng trên sông làm người buồn nhớ quê); Huy Cận khẳng định nỗi nhớ quê hương luôn thường trực ngay cả khi không có khói hoàng hôn."
    },
    {
        grade: "11", subject: "van", term: "GK1",
        question: "Đặc trưng cơ bản giúp phân biệt ngôi kể thứ nhất với ngôi kể thứ ba trong văn bản truyện là gì?",
        options: ["Người kể chuyện xưng 'tôi' và trực tiếp tham gia hoặc chứng kiến câu chuyện", "Người kể chuyện giấu mình hoàn toàn và biết hết mọi suy nghĩ của mọi nhân vật", "Truyện không có lời đối thoại giữa các nhân vật", "Truyện chỉ sử dụng ngôn ngữ độc thoại nội tâm"],
        answer: 0,
        explanation: "Ở ngôi kể thứ nhất, người kể chuyện lộ diện qua đại từ 'tôi' (hoặc 'chúng tôi'), kể lại những gì mình trực tiếp trải qua, chứng kiến."
    },
    {
        grade: "11", subject: "van", term: "GK1",
        question: "Lời khuyên cuối cùng của Huấn Cao dành cho viên quản ngục trong 'Chữ người tử tù' là gì?",
        options: ["Hãy thoát khỏi nghề coi ngục, về quê ở rồi hãy chơi chữ để giữ thiên lương lành vững", "Hãy xin thăng chức để cải tạo lại toàn bộ nhà giam", "Hãy đốt hết các bức thư pháp sau khi Huấn Cao chịu án", "Hãy tiếp tục giấu kín sở thích chơi chữ suốt đời"],
        answer: 0,
        explanation: "Huấn Cao khuyên quản ngục: 'Ở đây lẫn lộn. Ta khuyên thầy Quản nên thay chốn ở đi... Ở đây, khó giữ thiên lương cho lành vững và rồi cũng đến nhem nhuốc mất cái đời lương thiện đi'."
    },
    {
        grade: "11", subject: "van", term: "GK1",
        question: "Trong bài thơ 'Đây thôn Vĩ Dạ' (Hàn Mặc Tử), hai câu thơ 'Gió theo lối gió, mây đường mây / Dòng nước buồn thiu, hoa bắp lay' gợi lên tâm trạng gì?",
        options: ["Nỗi buồn chia lìa, mặc cảm cô đơn và dự cảm xa cách giữa thi nhân với cuộc đời", "Niềm vui sướng trước cảnh thiên nhiên xứ Huế nhộn nhịp", "Sự bình thản, vô tư của người lữ khách", "Khát vọng chinh phục thiên nhiên hùng vĩ"],
        answer: 0,
        explanation: "Hình ảnh gió - mây chia ngả và dòng nước 'buồn thiu' được nhân hóa thể hiện nỗi đau chia lìa, mặc cảm bơ vơ của nhà thơ trước thực tại."
    },
    {
        grade: "11", subject: "van", term: "GK1",
        question: "Khi chuyển từ ngôn ngữ nói sang ngôn ngữ viết trong văn bản học thuật, người viết cần tránh điều nào sau đây?",
        options: ["Sử dụng nhiều từ ngữ khẩu ngữ, trợ từ, thán từ suồng sã và câu tỉnh lược tùy tiện", "Sử dụng hệ thống dấu câu chuẩn xác để ngắt ý", "Lựa chọn từ ngữ chính xác, chặt chẽ, mạch lạc", "Tổ chức câu văn đầy đủ thành phần chủ - vị"],
        answer: 0,
        explanation: "Ngôn ngữ viết đòi hỏi tính chuẩn mực, chặt chẽ, có dấu câu rõ ràng, tránh lạm dụng khẩu ngữ suồng sã hoặc các yếu tố dư thừa của hội thoại tự nhiên."
    },
    {
        grade: "11", subject: "van", term: "GK1",
        question: "Hình ảnh 'Nắng hàng cau nắng mới lên' trong khổ đầu bài thơ 'Đây thôn Vĩ Dạ' miêu tả vẻ đẹp nào của thiên nhiên thôn Vĩ?",
        options: ["Vẻ đẹp tinh khôi, trong trẻo và tràn đầy sức sống của buổi bình minh", "Vẻ đẹp u buồn, héo úa lúc chiều tà", "Cảnh nắng gắt oi bức của trưa hè miền Trung", "Ánh trăng huyền ảo chiếu qua tàu lá cau"],
        answer: 0,
        explanation: "Điệp từ 'nắng' cùng hình ảnh hàng cau thẳng tắp đón ánh nắng ban mai tinh khiết gợi vẻ đẹp trong trẻo, tươi tắn của vườn thôn Vĩ buổi sớm."
    },
    {
        grade: "11", subject: "van", term: "GK1",
        question: "Lời văn vừa là lời của người kể chuyện, vừa tái hiện tiếng nói/suy nghĩ nội tâm của nhân vật (không đặt trong dấu ngoặc kép) được gọi là:",
        options: ["Lời nửa trực tiếp", "Lời đối thoại trực tiếp", "Lời chú thích của biên tập viên", "Lời chỉ dẫn sân khấu"],
        answer: 0,
        explanation: "Lời nửa trực tiếp (rất tiêu biểu trong 'Chí Phèo' của Nam Cao) là sự hòa trộn giữa giọng người kể chuyện và giọng điệu, ý thức của nhân vật."
    },

    // ===================================================================
    // 5. NGỮ VĂN 11 - CUỐI KÌ 1 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "van", term: "CK1",
        question: "Trong văn bản nghị luận, yếu tố nào đóng vai trò là vấn đề chính, xuyên suốt mà văn bản nêu lên để bàn luận?",
        options: ["Luận đề", "Bằng chứng (dẫn chứng)", "Số liệu thống kê", "Lời bình mở rộng"],
        answer: 0,
        explanation: "Luận đề là vấn đề trung tâm, bao trùm toàn bộ văn bản nghị luận; từ luận đề, người viết triển khai thành hệ thống các luận điểm, lí lẽ và bằng chứng."
    },
    {
        grade: "11", subject: "van", term: "CK1",
        question: "Mối quan hệ giữa luận đề, luận điểm, lí lẽ và bằng chứng trong văn bản nghị luận được sắp xếp theo trình tự nào là hợp lí nhất?",
        options: ["Luận đề → Các luận điểm → Lí lẽ và bằng chứng làm sáng tỏ từng luận điểm", "Bằng chứng → Luận đề → Lí lẽ → Nhan đề", "Lí lẽ → Luận đề → Tiểu kết → Mở bài", "Luận điểm → Luận đề → Cước chú"],
        answer: 0,
        explanation: "Cấu trúc tầng bậc của văn nghị luận: Luận đề (vấn đề chính) được cụ thể hóa thành các Luận điểm; mỗi Luận điểm được chứng minh bằng Lí lẽ và Bằng chứng xác thực."
    },
    {
        grade: "11", subject: "van", term: "CK1",
        question: "Đoạn trích 'Lời tiễn dặn' (trích truyện thơ 'Xống chụ xôn xao') là kiệt tác truyện thơ dân gian của dân tộc nào?",
        options: ["Dân tộc Thái", "Dân tộc Mường", "Dân tộc Tày", "Dân tộc H'Mông"],
        answer: 0,
        explanation: "'Xống chụ xôn xao' (Tiễn dặn người yêu) là truyện thơ dân gian nổi tiếng nhất của dân tộc Thái ở vùng Tây Bắc."
    },
    {
        grade: "11", subject: "van", term: "CK1",
        question: "Trong đoạn trích 'Lời tiễn dặn' (Xống chụ xôn xao), ước nguyện 'Không lấy được nhau mùa hạ, ta sẽ lấy nhau mùa đông / Không lấy được nhau thời trẻ, ta sẽ lấy nhau khi góa bụa về già' thể hiện điều gì?",
        options: ["Tình yêu thủy chung son sắt và khát vọng tự do yêu đương vượt lên lễ giáo ép duyên", "Sự buông xuôi, chấp nhận từ bỏ tình yêu đầu đời", "Mong muốn giàu sang phú quý nơi nhà chồng", "Sự oán trách cha mẹ hai bên"],
        answer: 0,
        explanation: "Lời thề nguyền tha thiết khẳng định lòng chung thủy sắt son, quyết tâm gắn bó trọn đời bất chấp hôn nhân ép buộc."
    },
    {
        grade: "11", subject: "van", term: "CK1",
        question: "Trong đoạn trích 'Trao duyên' (Truyện Kiều – Nguyễn Du), vì sao Thúy Kiều lại dùng từ 'cậy' ('Cậy em, em có chịu lời') và từ 'lạy' ('Ngồi lên cho chị lạy rồi sẽ thưa') khi nói với Thúy Vân?",
        options: ["Thể hiện sự tin tưởng tuyệt đối gắn với nỗi hàm ơn, trân trọng trước sự hi sinh tuổi xuân của em", "Vì Thúy Vân lớn tuổi hơn Thúy Kiều", "Vì Thúy Kiều muốn ra lệnh cho em gái", "Do thói quen giao tiếp thông thường trong gia đình"],
        answer: 0,
        explanation: "Từ 'cậy' có sức nặng gửi gắm niềm tin cậy thiết tha hơn từ 'nhờ', còn hành động 'lạy' đặt Thúy Vân vào vị thế ân nhân cao cả khi Kiều trao gửi mối tình dang dở với Kim Trọng."
    },
    {
        grade: "11", subject: "van", term: "CK1",
        question: "Những kỉ vật tình yêu nào được Thúy Kiều trao lại cho Thúy Vân trong đoạn trích 'Trao duyên' (Truyện Kiều)?",
        options: ["Chiếc vành với bức tờ mây, phím đàn và mảnh hương nguyền", "Cây trâm cài đầu và chiếc gương đồng", "Đôi hài thêu và chiếc quạt lụa", "Bức tranh tùng cúc và cây sáo trúc"],
        answer: 0,
        explanation: "Kiều trao lại kỉ vật hẹn ước với Kim Trọng ('Chiếc vành với bức tờ mây / Duyên này thì giữ vật này của chung') cùng tiếng đàn và mảnh hương nguyền."
    },
    {
        grade: "11", subject: "van", term: "CK1",
        question: "Trong đoạn trích 'Chí khí anh hùng' (Truyện Kiều – Nguyễn Du), hình ảnh 'Trông vời trời bể mênh mang / Thanh gươm yên ngựa lên đường thẳng rong' khắc họa vẻ đẹp nào của Từ Hải?",
        options: ["Tầm vóc vũ trụ kì vĩ và chí khí tung hoành bốn phương của bậc trượng phu", "Nỗi cô đơn, lẻ loi của người lính nơi biên ải", "Sự do dự, quyến luyến không nỡ rời xa lầu xanh", "Vẻ đẹp nho nhã của một thư sinh đi thi"],
        answer: 0,
        explanation: "Không gian 'trời bể mênh mang' cùng tư thế 'thanh gươm yên ngựa lên đường thẳng rong' làm nổi bật chí khí phi thường, dứt khoát lên đường lập nghiệp lớn của Từ Hải."
    },
    {
        grade: "11", subject: "van", term: "CK1",
        question: "Đặc điểm nổi bật của thể loại Truyện thơ Nôm bác học (như 'Truyện Kiều' của Nguyễn Du) là gì?",
        options: ["Kết hợp tự sự và trữ tình, viết bằng chữ Nôm theo thể thơ lục bát dân tộc", "Viết hoàn toàn bằng chữ Hán theo thể thất ngôn bát cú Đường luật", "Chỉ lưu truyền bằng hình thức truyền miệng, không có tác giả xác định", "Chỉ sử dụng văn xuôi hiện đại không có vần nhịp"],
        answer: 0,
        explanation: "Truyện thơ Nôm bác học có cốt truyện tự sự hoàn chỉnh kết hợp nhuần nhuyễn với chất trữ tình sâu sắc, sử dụng chữ Nôm và thể thơ lục bát truyền thống."
    },
    {
        grade: "11", subject: "van", term: "CK1",
        question: "Mục đích chính của văn bản thông tin (thuyết minh) là gì?",
        options: ["Cung cấp tri thức, thông tin khách quan, xác thực về sự vật, hiện tượng hoặc quy trình", "Bộc lộ cảm xúc chủ quan mãnh liệt thông qua hệ thống vần nhịp", "Xây dựng xung đột kịch tính để biểu diễn trên sân khấu", "Hư cấu nên thế giới thần tiên kì ảo"],
        answer: 0,
        explanation: "Văn bản thông tin hướng tới truyền tải thông tin, tri thức khách quan, chính xác cho người đọc; có thể lồng ghép yếu tố miêu tả, tự sự, biểu cảm để tăng sức hấp dẫn."
    },
    {
        grade: "11", subject: "van", term: "CK1",
        question: "Trong văn bản thông tin, các yếu tố như nhan đề, đề mục (sapo, tiêu đề phụ), chữ in đậm, biểu đồ, hình ảnh minh họa được gọi là gì?",
        options: ["Phương tiện giao tiếp phi ngôn ngữ và yếu tố hình thức hỗ trợ biểu đạt thông tin", "Luận điểm nghệ thuật của tác phẩm trữ tình", "Lời thoại độc thoại nội tâm", "Biện pháp tu từ ẩn dụ chuyển đổi cảm giác"],
        answer: 0,
        explanation: "Hình ảnh, sơ đồ, biểu đồ, bảng biểu là các phương tiện phi ngôn ngữ kết hợp với hệ thống đề mục giúp văn bản thông tin trực quan, dễ tra cứu và nắm bắt ý chính."
    },
    {
        grade: "11", subject: "van", term: "CK1",
        question: "Một đoạn văn mắc 'lỗi thiếu mạch lạc' khi nào?",
        options: ["Các câu trong đoạn không cùng hướng về một chủ đề chung hoặc sắp xếp lộn xộn, thiếu logic", "Đoạn văn sử dụng nhiều phép nối và phép thế", "Đoạn văn có câu chủ đề đứng ở đầu đoạn", "Đoạn văn có sử dụng từ Hán Việt"],
        answer: 0,
        explanation: "Tính mạch lạc đòi hỏi các câu, các ý phải thống nhất xoay quanh chủ đề chung và nối tiếp nhau theo trình tự hợp lí; nếu lạc ý hoặc đứt gãy logic sẽ mắc lỗi thiếu mạch lạc."
    },
    {
        grade: "11", subject: "van", term: "CK1",
        question: "Các phép liên kết hình thức thường dùng giữa các câu trong đoạn văn gồm những phép nào?",
        options: ["Phép lặp, phép thế, phép nối, phép đồng nghĩa / trái nghĩa / liên tưởng", "Phép nhân hóa, phép hoán dụ, phép nói giảm nói tránh", "Phép đối thanh, phép hiệp vần, phép ngắt nhịp", "Phép phóng đại, phép châm biếm"],
        answer: 0,
        explanation: "Liên kết hình thức giữa các câu trong đoạn văn được thực hiện qua phép lặp từ ngữ, phép thế (đại từ/từ đồng nghĩa), phép nối (quan hệ từ) và phép liên tưởng."
    },
    {
        grade: "11", subject: "van", term: "CK1",
        question: "Trong đoạn kết 'Trao duyên' ('Bây giờ trâm gãy bình tan... Ôi Kim Mã, hỡi Kim Lang! / Thôi thôi thiếp đã phụ chàng từ đây!'), lời nói của Thúy Kiều đã chuyển từ đối thoại với ai sang độc thoại với ai?",
        options: ["Từ đối thoại với Thúy Vân chuyển sang độc thoại nội tâm và hướng về Kim Trọng", "Từ nói với Kim Trọng chuyển sang nói với cha mẹ", "Từ nói với Mã Giám Sinh chuyển sang nói với Thúy Vân", "Từ độc thoại chuyển sang trò chuyện với Vương Quan"],
        answer: 0,
        explanation: "Nửa đầu đoạn trích Kiều dặn dò Thúy Vân, nhưng càng về cuối Kiều càng chìm vào nỗi đau đớn tột cùng, quên cả sự hiện diện của em để gọi tên Kim Trọng trong tuyệt vọng."
    },
    {
        grade: "11", subject: "van", term: "CK1",
        question: "Khi viết bài văn nghị luận về một vấn đề xã hội, phần Mở bài cần đảm bảo yêu cầu cốt lõi nào?",
        options: ["Giới thiệu được vấn đề cần bàn luận và nêu rõ quan điểm/định hướng của người viết", "Liệt kê toàn bộ số liệu chi tiết của bài viết", "Trích dẫn nguyên văn tất cả các văn bản pháp luật", "Tóm tắt tiểu sử của các nhà văn nổi tiếng"],
        answer: 0,
        explanation: "Mở bài của văn nghị luận xã hội có nhiệm vụ dẫn dắt, nêu đúng vấn đề nghị luận (luận đề) và thể hiện thái độ, quan điểm tổng quát của người viết."
    },
    {
        grade: "11", subject: "van", term: "CK1",
        question: "Yếu tố miêu tả và biểu cảm khi được đưa vào văn bản thông tin có tác dụng gì?",
        options: ["Giúp đối tượng thuyết minh hiện lên sinh động, giàu hình ảnh và gợi sự đồng cảm nơi người đọc", "Làm thay đổi hoàn toàn thể loại văn bản thành thơ trữ tình", "Thay thế hoàn toàn cho các dữ liệu khoa học chính xác", "Khiến thông tin trở nên mơ hồ, khó kiểm chứng"],
        answer: 0,
        explanation: "Trong văn bản thông tin tổng hợp, yếu tố miêu tả và biểu cảm hỗ trợ làm nổi bật đặc điểm sự vật và truyền cảm hứng, giúp thông tin không bị khô khan."
    },

    // ===================================================================
    // 6. NGỮ VĂN 11 - GIỮA KÌ 2 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "van", term: "GK2",
        question: "Đại thi hào Nguyễn Du (1765 – 1820) có tên chữ (tự) và tên hiệu là gì?",
        options: ["Tên chữ Tố Như, hiệu Thanh Hiên", "Tên chữ Ức Trai, hiệu Bạch Vân Cư Sĩ", "Tên chữ Cao Bá Quát, hiệu Chu Thần", "Tên chữ Yên Đổ, hiệu Quế Sơn"],
        answer: 0,
        explanation: "Nguyễn Du tên chữ là Tố Như, hiệu là Thanh Hiên (ngoài ra còn có hiệu Nam Sơn Mộng Hồ), quê ở làng Tiên Điền, huyện Nghi Xuân, tỉnh Hà Tĩnh."
    },
    {
        grade: "11", subject: "van", term: "GK2",
        question: "Kiệt tác 'Truyện Kiều' (Đoạn trường tân thanh) của Nguyễn Du được sáng tác dựa trên cốt truyện tiểu thuyết chương hồi nào của Trung Quốc?",
        options: ["Kim Vân Kiều truyện của Thanh Tâm Tài Nhân", "Tam quốc diễn nghĩa của La Quán Trung", "Hồng lâu mộng của Tào Tuyết Cần", "Tây sương kí của Vương Thực Phủ"],
        answer: 0,
        explanation: "Nguyễn Du mượn cốt truyện 'Kim Vân Kiều truyện' của Thanh Tâm Tài Nhân nhưng đã sáng tạo lại toàn diện về cảm hứng nhân đạo, tâm lí nhân vật và ngôn ngữ thơ lục bát chữ Nôm."
    },
    {
        grade: "11", subject: "van", term: "GK2",
        question: "Bài thơ chữ Hán 'Đọc Tiểu Thanh kí' (Độc Tiểu Thanh kí) của Nguyễn Du thể hiện sự đồng cảm sâu sắc với số phận của những ai?",
        options: ["Những người phụ nữ tài hoa, nhan sắc và những bậc nghệ sĩ bạc mệnh trong xã hội phong kiến", "Những vị tướng lĩnh trận mạc nơi biên ải", "Những thương nhân buôn bán trên sông nước", "Những ẩn sĩ sống xa lánh bụi trần"],
        answer: 0,
        explanation: "Mượn câu chuyện nàng Tiểu Thanh tài sắc mà mệnh bạc, Nguyễn Du khóc thương cho kiếp người tài hoa bị vùi dập và tự thương cho chính mình ('Bất tri tam bách dư niên hậu / Thiên hạ hà nhân khấp Tố Như?')."
    },
    {
        grade: "11", subject: "van", term: "GK2",
        question: "Hai câu kết bài 'Đọc Tiểu Thanh kí' ('Bất tri tam bách dư niên hậu / Thiên hạ hà nhân khấp Tố Như?') thể hiện tâm sự gì của Nguyễn Du?",
        options: ["Nỗi cô đơn giữa thời cuộc và khát vọng tìm kiếm sự tri âm, đồng cảm từ hậu thế", "Niềm tự hào về gia thế quyền quý của dòng họ", "Mong muốn được lưu danh trên bia đá công thần", "Sự an nhàn tuổi xế chiều nơi quê nhà"],
        answer: 0,
        explanation: "Câu hỏi hướng tới ba trăm năm sau thể hiện nỗi cô đơn mênh mông của một tâm hồn lớn và khát khao có người đời sau thấu hiểu, tri âm với nỗi đau của Tố Như."
    },
    {
        grade: "11", subject: "van", term: "GK2",
        question: "Tác phẩm 'Ai đã đặt tên cho dòng sông?' của nhà văn Hoàng Phủ Ngọc Tường thuộc thể loại văn học nào?",
        options: ["Bút kí / Tùy bút", "Tiểu thuyết lịch sử", "Bi kịch cổ điển", "Truyện truyền kì"],
        answer: 0,
        explanation: "'Ai đã đặt tên cho dòng sông?' (1981) là bài bút kí – tùy bút xuất sắc của Hoàng Phủ Ngọc Tường viết về vẻ đẹp thiên nhiên, lịch sử và văn hóa của dòng sông Hương xứ Huế."
    },
    {
        grade: "11", subject: "van", term: "GK2",
        question: "Trong bài kí 'Ai đã đặt tên cho dòng sông?' (Hoàng Phủ Ngọc Tường), khi còn ở vùng thượng nguồn đại ngàn Trường Sơn, sông Hương được ví với hình ảnh nào?",
        options: ["Một bản trường ca của rừng già và một cô gái Di-gan phóng khoáng, man dại", "Một người mẹ phù sa hiền hòa của vùng đồng bằng", "Một dải lụa đào êm ả giữa kinh thành", "Một ông lão trầm tư đọc sách bên hiên chùa"],
        answer: 0,
        explanation: "Ở thượng nguồn Trường Sơn, sông Hương mang vẻ đẹp mãnh liệt, hùng vĩ như 'một bản trường ca của rừng già' và như 'cô gái Di-gan phóng khoáng và man dại'."
    },
    {
        grade: "11", subject: "van", term: "GK2",
        question: "Hành trình của sông Hương từ thượng nguồn tìm về với thành phố Huế trong tác phẩm của Hoàng Phủ Ngọc Tường được miêu tả như:",
        options: ["Một cuộc tìm kiếm có ý thức để đến với người tình mong đợi trong một câu chuyện tình lãng mạn", "Một cuộc chạy trốn vội vã khỏi rừng già", "Một dòng chảy vô tình không vương vấn", "Một cuộc hành quân khốc liệt ra biển lớn"],
        answer: 0,
        explanation: "Bằng cái nhìn đắm say và liên tưởng tài hoa, Hoàng Phủ Ngọc Tường hình dung thủy trình của sông Hương về Huế như hành trình của người con gái tìm về điểm hẹn tình yêu với kinh thành."
    },
    {
        grade: "11", subject: "van", term: "GK2",
        question: "Theo Hoàng Phủ Ngọc Tường trong 'Ai đã đặt tên cho dòng sông?', nét đặc sắc nào của âm nhạc xứ Huế đã được sinh thành trên mặt nước sông Hương?",
        options: ["Toàn bộ nền âm nhạc cổ điển Huế (nhã nhạc, ca Huế trên sông lúc đêm khuya)", "Nghệ thuật hát chèo sân đình miền Bắc", "Đờn ca tài tử Nam Bộ", "Không gian văn hóa cồng chiêng Tây Nguyên"],
        answer: 0,
        explanation: "Tác giả khẳng định toàn bộ nền âm nhạc cổ điển Huế đã được sinh thành trên mặt nước của dòng sông này, giữa tiếng nước rơi bán âm của những mái chèo khuya."
    },
    {
        grade: "11", subject: "van", term: "GK2",
        question: "Đặc trưng cơ bản nhất của cái 'tôi' tác giả trong thể loại tùy bút và tản văn là gì?",
        options: ["Cái 'tôi' trữ tình bộc lộ trực tiếp cảm xúc, suy tư, liên tưởng tài hoa và vốn văn hóa uyên bác", "Tác giả hoàn toàn giấu kín cảm xúc cá nhân, chỉ ghi chép số liệu hành chính", "Nhân vật người kể chuyện hoàn toàn là nhân vật hư cấu không có thật", "Chỉ thuật lại sự kiện theo biên niên sử từng ngày"],
        answer: 0,
        explanation: "Trong tùy bút và tản văn, điểm tựa kết nối các sự việc là dòng cảm xúc, suy ngẫm chủ quan và liên tưởng phóng khoáng của cái 'tôi' trữ tình tác giả."
    },
    {
        grade: "11", subject: "van", term: "GK2",
        question: "Tác phẩm 'Thương nhớ mười hai' của nhà văn Vũ Bằng được viết trong hoàn cảnh và tâm trạng nào?",
        options: ["Viết tại Sài Gòn trong nỗi nhớ thương da diết quê hương miền Bắc và cảnh sắc Hà Nội mười hai tháng", "Viết khi tác giả đang đi du học ở châu Âu", "Viết ngay tại hồ Gươm trong ngày Tết Nguyên đán", "Viết về những chuyến thám hiểm vùng núi Tây Bắc"],
        answer: 0,
        explanation: "Trong những năm đất nước chia cắt, Vũ Bằng ở miền Nam viết 'Thương nhớ mười hai' để gửi gắm nỗi nhớ quê hương miền Bắc, thiên nhiên và con người Hà Nội qua bốn mùa."
    },
    {
        grade: "11", subject: "van", term: "GK2",
        question: "Sự kết hợp giữa yếu tố 'tự sự' và yếu tố 'trữ tình' trong tùy bút, tản văn được hiểu như thế nào?",
        options: ["Ghi chép con người, sự việc có thật (tự sự) làm điểm tựa để bộc lộ cảm xúc, suy tư thẩm mĩ (trữ tình)", "Chỉ kể cốt truyện li kì mà không có bất kì cảm xúc nào", "Chỉ làm thơ lục bát mà không nhắc tới sự vật thực tế", "Dùng hoàn toàn lời thoại kịch bản sân khấu"],
        answer: 0,
        explanation: "Trong tùy bút/tản văn, yếu tố tự sự (sự việc, trải nghiệm thực tế) và yếu tố trữ tình (tình cảm, suy tư của tác giả) đan xen, nâng đỡ lẫn nhau."
    },
    {
        grade: "11", subject: "van", term: "GK2",
        question: "Trong câu văn: 'Tre giữ làng, giữ nước, giữ mái nhà tranh, giữ đồng lúa chín' (Thép Mới), biện pháp tu từ nào đã tạo nên nhịp điệu dồn dập, khỏe khoắn?",
        options: ["Điệp từ và liệt kê (lặp cấu trúc cụm động từ)", "Nói giảm nói tránh", "Chơi chữ đồng âm", "Hoán dụ lấy bộ phận chỉ toàn thể"],
        answer: 0,
        explanation: "Việc lặp lại động từ 'giữ' kết hợp liệt kê hàng loạt hình ảnh quê hương tạo nhịp văn dồn dập, khẳng định công lao bền bỉ của cây tre Việt Nam."
    },
    {
        grade: "11", subject: "van", term: "GK2",
        question: "Đóng góp to lớn của 'Truyện Kiều' (Nguyễn Du) đối với sự phát triển của ngôn ngữ văn học dân tộc là gì?",
        options: ["Đưa ngôn ngữ văn học tiếng Việt (chữ Nôm) và thể thơ lục bát đạt tới đỉnh cao cổ điển, tinh tế và giàu sức biểu cảm", "Sáng tạo ra bảng chữ cái Quốc ngữ Latinh", "Thay thế hoàn toàn thơ lục bát bằng thơ tự do", "Chỉ sử dụng từ ngữ địa phương vùng Nghệ Tĩnh"],
        answer: 0,
        explanation: "Nguyễn Du đã kết hợp tinh hoa ngôn ngữ bác học và lời ăn tiếng nói dân gian, đưa tiếng Việt văn học và thể thơ lục bát lên đỉnh cao rực rỡ."
    },
    {
        grade: "11", subject: "van", term: "GK2",
        question: "Vì sao khi rời khỏi kinh thành Huế, sông Hương lại đột ngột đổi dòng rẽ ngoặt sang hướng đông bắc để vòng qua thôn Vĩ Dạ?",
        options: ["Theo cách lí giải đầy chất thơ của tác giả, vì sông Hương còn lưu luyến muốn nhìn lại thành phố Huế một lần nữa trước khi ra biển", "Vì có một con đập thủy điện lớn chặn ngang dòng chảy", "Vì địa hình núi cao chắn ở phía đông nam", "Vì con sông muốn chảy ngược lại về rừng Trường Sơn"],
        answer: 0,
        explanation: "Khúc quanh địa lí tự nhiên ở Cồn Hến được Hoàng Phủ Ngọc Tường lí giải bằng góc nhìn lãng mạn như 'nỗi vương vấn, cả một chút lẳng lơ kín đáo của tình yêu' để chào từ biệt Huế."
    },
    {
        grade: "11", subject: "van", term: "GK2",
        question: "Yếu tố 'phi hư cấu' trong thể loại kí (hồi kí, phóng sự, nhật kí, bút kí) có nghĩa là gì?",
        options: ["Tôn trọng sự thật khách quan về con người, sự kiện, thời gian và không gian có thực trong đời sống", "Mọi chi tiết trong tác phẩm đều do trí tưởng tượng bịa đặt ra", "Không được phép sử dụng bất kì biện pháp tu từ nào", "Chỉ được viết về các nhân vật thần thoại cổ đại"],
        answer: 0,
        explanation: "Tính phi hư cấu của thể kí đòi hỏi tác giả phải trung thành với những con người, sự việc, chứng cứ xác thực đã từng tồn tại hoặc diễn ra trong thực tế."
    },

    // ===================================================================
    // 7. NGỮ VĂN 11 - CUỐI KÌ 2 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "van", term: "CK2",
        question: "Trong văn học kịch, 'xung đột bi kịch' thường là sự mâu thuẫn không thể dung hòa giữa những yếu tố nào?",
        options: ["Giữa khát vọng cao đẹp, lí tưởng tiến bộ của nhân vật với thực tại nghiệt ngã hoặc giới hạn của chính họ", "Giữa những hiểu lầm vặt vãnh gây tiếng cười giải trí", "Giữa các nhân vật hài hước, lố bịch trong sinh hoạt đời thường", "Giữa con người với các loài động vật hoang dã"],
        answer: 0,
        explanation: "Bi kịch phản ánh xung đột gay gắt giữa khát vọng cao cả, chính nghĩa của nhân vật bi kịch với hoàn cảnh lịch sử chưa chín muồi hoặc định mệnh trớ trêu, dẫn tới kết cục bi tráng."
    },
    {
        grade: "11", subject: "van", term: "CK2",
        question: "Trong đoạn trích 'Vĩnh biệt Cửu Trùng Đài' (trích kịch 'Vũ Như Tô' – Nguyễn Huy Tưởng), khát vọng lớn nhất của kiến trúc sư Vũ Như Tô là gì?",
        options: ["Xây dựng một tòa Cửu Trùng Đài hùng vĩ, tuyệt mĩ để tô điểm cho non sông đất nước", "Trở thành tể tướng nắm quyền triều chính", "Tích lũy thật nhiều vàng bạc cho riêng gia đình mình", "Giúp Đan Thiềm lên ngôi hoàng hậu"],
        answer: 0,
        explanation: "Vũ Như Tô là người nghệ sĩ thiên tài mang hoài bão xây dựng một công trình kiến trúc vĩ đại, bền vững muôn đời cho đất nước ('tranh tinh xảo với hóa công')."
    },
    {
        grade: "11", subject: "van", term: "CK2",
        question: "Bi kịch đau đớn nhất của nhân vật Vũ Như Tô trong vở kịch cùng tên của Nguyễn Huy Tưởng là gì?",
        options: ["Mâu thuẫn giữa khát vọng nghệ thuật thuần túy siêu việt với lợi ích thiết thực, máu và nước mắt của nhân dân lao động", "Không đủ tài năng để thiết kế bản vẽ Cửu Trùng Đài", "Bị vua Lê Tương Dực tước bỏ chức vụ ngay từ đầu", "Bị người bạn thân ăn cắp bản thiết kế kiến trúc"],
        answer: 0,
        explanation: "Để thực hiện lí tưởng nghệ thuật cao siêu, Vũ Như Tô đã lợi dụng quyền thế của bạo chúa Lê Tương Dực, vô tình đẩy nhân dân vào cảnh sưu cao thuế nặng, dẫn đến Cửu Trùng Đài bị chính dân chúng đốt cháy."
    },
    {
        grade: "11", subject: "van", term: "CK2",
        question: "Trong vở kịch 'Vũ Như Tô', nhân vật nào là người duy nhất thấu hiểu trọn vẹn tài năng, đam mê nghệ thuật của Vũ Như Tô và tỉnh táo nhận ra bi kịch sắp ập đến?",
        options: ["Đan Thiềm", "Cung nữ Kim Phượng", "Hoàng hậu Nguyễn Thị Kim", "Trịnh Duy Sản"],
        answer: 0,
        explanation: "Đan Thiềm là người tri âm có 'biệt nhỡn liên tài', vừa khích lệ Vũ Như Tô xây đài, vừa sớm nhận ra nguy cơ khởi loạn và khuyên chàng trốn đi khi quân phản loạn kéo tới."
    },
    {
        grade: "11", subject: "van", term: "CK2",
        question: "Câu thoại nổi tiếng 'Sống, hay không sống – đó là vấn đề' (To be, or not to be) là lời độc thoại nội tâm của nhân vật nào trong kịch của William Shakespeare?",
        options: ["Hoàng tử Hăm-lét (Hamlet)", "Chàng Rô-mê-ô (Romeo)", "Vua Lia (King Lear)", "Tướng Ô-ten-lô (Othello)"],
        answer: 0,
        explanation: "Đây là lời độc thoại bất hủ của hoàng tử Hamlet (Hồi III, Cảnh 1) khi trăn trở giữa việc nhẫn nhục chịu đựng thực tại đen tối hay đứng lên đấu tranh chống lại biển khổ."
    },
    {
        grade: "11", subject: "van", term: "CK2",
        question: "Bài thơ 'Đàn ghi ta của Lor-ca' của nhà thơ Thanh Thảo được viết để tưởng niệm người nghệ sĩ vĩ đại của đất nước nào?",
        options: ["Tây Ban Nha (Federico García Lorca)", "Ý (Italy)", "Pháp (France)", "Nga (Russia)"],
        answer: 0,
        explanation: "Federico García Lorca (1898 – 1936) là nhà thơ, nhà viết kịch thiên tài người Tây Ban Nha, chiến sĩ đấu tranh cho tự do và cách tân nghệ thuật, bị chế độ phát xít Franco sát hại."
    },
    {
        grade: "11", subject: "van", term: "CK2",
        question: "Trong bài thơ 'Đàn ghi ta của Lor-ca' (Thanh Thảo), chuỗi âm thanh 'li-la li-la li-la' mang ý nghĩa nghệ thuật gì?",
        options: ["Vừa mô phỏng tiếng đàn ghi ta ngân vang, vừa gợi sắc hoa tử đinh hương (lilac) viếng hương hồn người nghệ sĩ bất tử", "Là tên một thành phố cảng ở miền Nam Tây Ban Nha", "Là khẩu lệnh hành quân của đội kị binh", "Là tên bản thảo kịch cuối cùng của Lor-ca"],
        answer: 0,
        explanation: "Chuỗi âm thanh 'li-la li-la li-la' giàu tính nhạc (láy âm tiếng đàn Tây Ban Nha) đồng thời gợi hình ảnh hoa tử đinh hương tím ngát tượng trưng cho sự bất diệt của nghệ thuật."
    },
    {
        grade: "11", subject: "van", term: "CK2",
        question: "Hình ảnh 'tiếng ghi ta nâu / tiếng ghi ta lá xanh biết mấy / tiếng ghi ta tròn bọt nước vỡ tan / tiếng ghi ta ròng ròng máu chảy' trong bài thơ của Thanh Thảo sử dụng biện pháp tu từ đặc trưng nào của thơ tượng trưng?",
        options: ["Ẩn dụ chuyển đổi cảm giác kết hợp điệp ngữ", "Nói giảm nói tránh", "Chơi chữ nói lái", "Liệt kê số liệu thống kê"],
        answer: 0,
        explanation: "Tiếng đàn (thính giác) được cảm nhận bằng màu sắc, hình khối, trạng thái ('nâu', 'lá xanh', 'tròn bọt nước vỡ tan', 'ròng ròng máu chảy') là phép ẩn dụ chuyển đổi cảm giác đậm chất tượng trưng – siêu thực."
    },
    {
        grade: "11", subject: "van", term: "CK2",
        question: "Trong bài thơ 'Thời gian' của Văn Cao ('Thời gian qua kẽ tay / Làm khô những chiếc lá... Riêng những câu thơ còn xanh / Riêng những bài hát còn xanh'), hình ảnh 'câu thơ còn xanh', 'bài hát còn xanh' biểu trưng cho điều gì?",
        options: ["Sức sống vĩnh cửu của nghệ thuật chân chính và vẻ đẹp tâm hồn con người vượt qua sự hủy hoại của thời gian", "Những bài thơ viết về chủ đề trồng rừng và bảo vệ cây xanh", "Những sáng tác chưa hoàn thiện của các tác giả trẻ", "Sự phai nhạt nhanh chóng của kí ức"],
        answer: 0,
        explanation: "Đối lập với 'những chiếc lá khô' và 'kỉ niệm rơi', màu xanh của câu thơ, bài hát và đôi mắt em biểu trưng cho sức sống bất diệt của nghệ thuật và tình yêu."
    },
    {
        grade: "11", subject: "van", term: "CK2",
        question: "Đặc điểm nổi bật của yếu tố tượng trưng trong thơ trữ tình hiện đại là gì?",
        options: ["Sử dụng những hình ảnh giàu tính biểu tượng, đa nghĩa, kết hợp nhạc tính và sự tương giao giữa các giác quan", "Chỉ miêu tả tỉ mỉ, chi tiết sự vật theo đúng quy luật tự nhiên", "Luôn tuân thủ nghiêm ngặt luật bằng trắc của thơ Đường luật", "Không sử dụng bất kì biện pháp tu từ nào"],
        answer: 0,
        explanation: "Thơ có yếu tố tượng trưng đề cao tính nhạc, sự tương giao giác quan và những biểu tượng hàm súc, gợi nhiều tầng liên tưởng triết lí sâu xa."
    },
    {
        grade: "11", subject: "van", term: "CK2",
        question: "Trong văn bản kịch, những dòng chữ thường được in nghiêng và đặt trong dấu ngoặc đơn (nêu cử chỉ, điệu bộ nhân vật, bối cảnh ánh sáng, âm thanh...) được gọi là gì?",
        options: ["Lời chỉ dẫn sân khấu", "Lời độc thoại nội tâm", "Lời bàng thoại", "Lời đề từ"],
        answer: 0,
        explanation: "Lời chỉ dẫn sân khấu của tác giả kịch bản giúp người đọc và đạo cụ/diễn viên hình dung không gian, hành động, thái độ của nhân vật khi trình diễn."
    },
    {
        grade: "11", subject: "van", term: "CK2",
        question: "Cách giải thích nghĩa của từ bằng việc đưa ra các từ đồng nghĩa hoặc trái nghĩa với từ cần giải thích được gọi là:",
        options: ["Giải thích bằng cách đối chiếu từ đồng nghĩa / trái nghĩa", "Giải thích bằng cách phân tích nội dung nghĩa (nêu đặc điểm sự vật)", "Giải thích bằng cách vẽ sơ đồ cây", "Giải thích bằng cách phiên âm quốc tế"],
        answer: 0,
        explanation: "Trong từ điển và văn bản giải thích từ ngữ, hai cách phổ biến nhất là: phân tích nội dung nghĩa và dùng từ đồng nghĩa/trái nghĩa quen thuộc hơn để đối chiếu."
    },
    {
        grade: "11", subject: "van", term: "CK2",
        question: "Khi dẫn lại nguyên văn lời nói hoặc câu viết của một tác giả khác trong bài viết nghị luận, người viết bắt buộc phải làm gì để tôn trọng quyền sở hữu trí tuệ?",
        options: ["Đặt phần trích dẫn trực tiếp trong dấu ngoặc kép và ghi rõ nguồn / tên tác giả", "Tự ý sửa đổi từ ngữ trong câu trích rồi nhận là của mình", "Không cần nêu tên tác giả nếu câu đó đã nổi tiếng", "In chữ nhỏ hơn và bỏ hết dấu câu"],
        answer: 0,
        explanation: "Trích dẫn trực tiếp bắt buộc phải chính xác từng từ, đặt trong dấu ngoặc kép và chú thích rõ tên tác giả, xuất xứ tác phẩm để tránh lỗi đạo văn."
    },
    {
        grade: "11", subject: "van", term: "CK2",
        question: "Trong thuật ngữ lí luận bi kịch (theo Aristotle), sự thanh lọc tâm hồn người xem thông qua niềm xót thương và nỗi sợ hãi trước số phận nhân vật bi kịch được gọi là gì?",
        options: ["Hiệu ứng thanh lọc (Catharsis)", "Hiệu ứng giãn cách hài kịch", "Phép nghịch ngữ châm biếm", "Cấu trúc vòng tròn"],
        answer: 0,
        explanation: "Khi chứng kiến cái chết hoặc thất bại bi tráng của nhân vật cao cả, khán giả trải qua sự chấn động cảm xúc để gột rửa những thấp hèn, hướng tới giá trị nhân văn cao đẹp (thanh lọc – Catharsis)."
    },
    {
        grade: "11", subject: "van", term: "CK2",
        question: "Vì sao đến giây phút cuối cùng khi Cửu Trùng Đài bị đốt cháy thành tro bụi, Vũ Như Tô mới bừng tỉnh và thốt lên: 'Ôi mộng lớn! Ôi Đan Thiềm! Ôi Cửu Trùng Đài! Thôi thế là hết! Dẫn ta ra pháp trường!'?",
        options: ["Vì tận mắt thấy công trình tâm huyết sụp đổ trong ngọn lửa căm phẫn của dân chúng, ông mới nhận ra ảo mộng của mình đã tan vỡ", "Vì ông muốn được nhà vua ban thưởng thêm tiền bạc", "Vì ông đã hoàn thành xong toàn bộ bản vẽ mới", "Vì quân khởi nghĩa hứa sẽ xây lại đài lớn hơn"],
        answer: 0,
        explanation: "Trước đó Vũ Như Tô vẫn đinh ninh mình vô tội, chỉ đến khi ánh lửa thiêu rụi Cửu Trùng Đài, ông mới đau đớn tuyệt vọng nhận ra bi kịch tan vỡ của mộng lớn nghệ thuật."
    },

    // ===================================================================
    // 8. HÓA HỌC 11 - GIỮA KÌ 1 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "hoa", term: "GK1",
        question: "Khi một phản ứng thuận nghịch đạt tới trạng thái cân bằng hóa học thì:",
        options: ["Tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch (v_t = v_n)", "Phản ứng thuận và phản ứng nghịch đều dừng lại hoàn toàn", "Nồng độ chất phản ứng luôn bằng nồng độ sản phẩm", "Khối lượng các chất tham gia bằng không"],
        answer: 0,
        explanation: "Cân bằng hóa học là cân bằng động: tại đó tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch và nồng độ các chất không đổi."
    },
    {
        grade: "11", subject: "hoa", term: "GK1",
        question: "Cho phản ứng thuận nghịch ở trạng thái cân bằng: N₂(g) + 3H₂(g) ⇌ 2NH₃(g). Biểu thức hằng số cân bằng K_C của phản ứng trên là:",
        options: ["K_C = [NH₃]² / ([N₂].[H₂]³)", "K_C = ([N₂].[H₂]³) / [NH₃]²", "K_C = 2[NH₃] / ([N₂] + 3[H₂])", "K_C = [NH₃] / ([N₂].[H₂])"],
        answer: 0,
        explanation: "Biểu thức hằng số cân bằng K_C cho phản ứng aA + bB ⇌ cC + dD là K_C = ([C]^c.[D]^d) / ([A]^a.[B]^b)."
    },
    {
        grade: "11", subject: "hoa", term: "GK1",
        question: "Hằng số cân bằng K_C của một phản ứng thuận nghịch chỉ phụ thuộc vào yếu tố nào sau đây?",
        options: ["Nhiệt độ và bản chất của phản ứng", "Áp suất chung của hệ", "Chất xúc tác thêm vào hệ", "Nồng độ ban đầu của các chất"],
        answer: 0,
        explanation: "Với một phản ứng xác định, hằng số cân bằng K_C chỉ phụ thuộc vào nhiệt độ, không phụ thuộc nồng độ, áp suất hay chất xúc tác."
    },
    {
        grade: "11", subject: "hoa", term: "GK1",
        question: "Cho cân bằng: CaCO₃(s) ⇌ CaO(s) + CO₂(g). Biểu thức hằng số cân bằng K_C của phản ứng này là:",
        options: ["K_C = [CO₂]", "K_C = ([CaO].[CO₂]) / [CaCO₃]", "K_C = 1 / [CO₂]", "K_C = [CaCO₃] / [CO₂]"],
        answer: 0,
        explanation: "Trong biểu thức K_C của hệ dị thể, không biểu diễn nồng độ của chất rắn nguyên chất (CaCO₃ và CaO), nên K_C = [CO₂]."
    },
    {
        grade: "11", subject: "hoa", term: "GK1",
        question: "Theo nguyên lí chuyển dịch cân bằng Le Chatelier, khi tăng nhiệt độ của một hệ đang ở trạng thái cân bằng thì cân bằng sẽ chuyển dịch theo chiều nào?",
        options: ["Chiều phản ứng thu nhiệt (Δ_r H°₂₉₈ > 0)", "Chiều phản ứng tỏa nhiệt (Δ_r H°₂₉₈ < 0)", "Chiều làm tăng số mol khí", "Không làm chuyển dịch cân bằng"],
        answer: 0,
        explanation: "Khi tăng nhiệt độ, cân bằng chuyển dịch theo chiều chống lại sự tăng nhiệt độ, tức là chiều phản ứng thu nhiệt (ΔH > 0)."
    },
    {
        grade: "11", subject: "hoa", term: "GK1",
        question: "Chất nào sau đây là chất điện li mạnh khi tan trong nước?",
        options: ["NaCl", "CH₃COOH", "HF", "C₂H₅OH"],
        answer: 0,
        explanation: "NaCl là muối tan hầu hết phân li hoàn toàn thành ion trong nước (NaCl → Na⁺ + Cl⁻); CH₃COOH và HF là chất điện li yếu, C₂H₅OH là chất không điện li."
    },
    {
        grade: "11", subject: "hoa", term: "GK1",
        question: "Theo thuyết acid – base của Brønsted – Lowry, định nghĩa nào sau đây là ĐÚNG?",
        options: ["Acid là chất cho proton (H⁺), base là chất nhận proton (H⁺)", "Acid là chất nhận proton (H⁺), base là chất cho proton (H⁺)", "Acid là chất cho cặp electron, base là chất nhận cặp electron", "Base là chất khi tan trong nước chỉ phân li ra ion H⁺"],
        answer: 0,
        explanation: "Theo thuyết Brønsted – Lowry: Acid là phân tử hoặc ion nhường proton (H⁺), còn Base là phân tử hoặc ion nhận proton (H⁺)."
    },
    {
        grade: "11", subject: "hoa", term: "GK1",
        question: "Theo thuyết Brønsted – Lowry, ion hay phân tử nào sau đây có tính chất lưỡng tính (vừa có thể cho H⁺, vừa có thể nhận H⁺)?",
        options: ["Ion HCO₃⁻", "Ion CO₃²⁻", "Ion Cl⁻", "Ion Na⁺"],
        answer: 0,
        explanation: "Ion HCO₃⁻ vừa có khả năng nhường H⁺ tạo CO₃²⁻, vừa có khả năng nhận H⁺ tạo H₂CO₃ (CO₂ + H₂O) nên là phần tử lưỡng tính."
    },
    {
        grade: "11", subject: "hoa", term: "GK1",
        question: "Một dung dịch ở 25 °C có nồng độ ion [H⁺] = 1,0.10⁻³ M. Giá trị pH của dung dịch này là:",
        options: ["pH = 3", "pH = 11", "pH = -3", "pH = 7"],
        answer: 0,
        explanation: "Áp dụng công thức pH = -log[H⁺] = -log(10⁻³) = 3."
    },
    {
        grade: "11", subject: "hoa", term: "GK1",
        question: "Dung dịch NaOH 0,01 M ở 25 °C (biết tích số ion của nước K_w = 10⁻¹⁴) có giá trị pH bằng bao nhiêu?",
        options: ["pH = 12", "pH = 2", "pH = 10", "pH = 13"],
        answer: 0,
        explanation: "NaOH điện li hoàn toàn: [OH⁻] = 0,01 = 10⁻² M ⇒ pOH = 2 ⇒ pH = 14 - 2 = 12."
    },
    {
        grade: "11", subject: "hoa", term: "GK1",
        question: "Khi nhỏ vài giọt chất chỉ thị phenolphthalein vào dung dịch NaOH loãng, dung dịch sẽ chuyển sang màu gì?",
        options: ["Màu hồng", "Màu xanh lam", "Màu đỏ tươi", "Màu vàng"],
        answer: 0,
        explanation: "Trong môi trường kiềm (pH > 8,3) như dung dịch NaOH, phenolphthalein chuyển từ không màu sang màu hồng."
    },
    {
        grade: "11", subject: "hoa", term: "GK1",
        question: "Trong phép chuẩn độ dung dịch HCl chưa biết nồng độ bằng dung dịch chuẩn NaOH 0,1 M (dùng chỉ thị phenolphthalein), thời điểm kết thúc chuẩn độ (điểm tương đương thực nghiệm) được nhận biết khi:",
        options: ["Dung dịch trong bình tam giác vừa chuyển từ không màu sang màu hồng nhạt bền trong khoảng 20–30 giây", "Dung dịch xuất hiện kết tủa trắng dưới đáy bình", "Dung dịch sủi bọt khí mạnh", "Dung dịch chuyển sang màu xanh tím đậm"],
        answer: 0,
        explanation: "Khi lượng NaOH vừa đủ trung hòa hết HCl và dư một giọt nhỏ, phenolphthalein làm dung dịch xuất hiện màu hồng nhạt bền."
    },
    {
        grade: "11", subject: "hoa", term: "GK1",
        question: "Cho cân bằng: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) có Δ_r H°₂₉₈ < 0. Yếu tố nào sau đây KHÔNG làm dịch chuyển cân bằng trên?",
        options: ["Thêm chất xúc tác V₂O₅ vào hệ phản ứng", "Tăng áp suất chung của hệ", "Giảm nhiệt độ của hệ", "Tăng nồng độ khí O₂"],
        answer: 0,
        explanation: "Chất xúc tác làm tăng tốc độ phản ứng thuận và phản ứng nghịch với số lần bằng nhau nên chỉ giúp cân bằng nhanh đạt tới chứ không làm chuyển dịch cân bằng."
    },
    {
        grade: "11", subject: "hoa", term: "GK1",
        question: "Chất nào sau đây là chất điện li yếu trong dung dịch nước?",
        options: ["CH₃COOH (acetic acid)", "HNO₃", "KOH", "BaCl₂"],
        answer: 0,
        explanation: "Acetic acid (CH₃COOH) là acid hữu cơ yếu, trong nước chỉ phân li một phần thành CH₃COO⁻ và H⁺."
    },
    {
        grade: "11", subject: "hoa", term: "GK1",
        question: "Vì sao dung dịch muối Al₂(SO₄)₃ hoặc FeCl₃ trong nước có môi trường acid (pH < 7)?",
        options: ["Do các cation Al³⁺, Fe³⁺ bị thủy phân trong nước tạo ra ion H⁺", "Do ion SO₄²⁻ và Cl⁻ nhường proton H⁺ cho nước", "Do các muối này không tan trong nước", "Do các muối này hấp thụ khí H₂ trong không khí"],
        answer: 0,
        explanation: "Cation kim loại của base yếu như Al³⁺, Fe³⁺ phản ứng thủy phân với nước giải phóng H⁺ (đóng vai trò là acid theo Brønsted – Lowry) làm pH < 7."
    },

    // ===================================================================
    // 9. HÓA HỌC 11 - CUỐI KÌ 1 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "hoa", term: "CK1",
        question: "Vì sao ở điều kiện thường, đơn chất khí nitrogen (N₂) rất trơ về mặt hóa học?",
        options: ["Do phân tử N₂ có liên kết ba bền vững (N≡N) với năng lượng liên kết rất lớn", "Do nguyên tử nitrogen có bán kính nguyên tử rất lớn", "Do phân tử N₂ là phân tử phân cực mạnh", "Do N₂ chỉ tồn tại ở tầng bình lưu"],
        answer: 0,
        explanation: "Phân tử N₂ chứa liên kết ba cộng hóa trị không phân cực N≡N có năng lượng liên kết rất lớn (945 kJ/mol), nên rất khó bị phá vỡ ở nhiệt độ thường."
    },
    {
        grade: "11", subject: "hoa", term: "CK1",
        question: "Phân tử ammonia (NH₃) có tính base và khả năng tạo phức là do trên nguyên tử nitrogen còn:",
        options: ["Một cặp electron hóa trị chưa liên kết", "Một obitan trống chưa có electron", "Ba liên kết pi (π) kém bền", "Điện tích dương tự do"],
        answer: 0,
        explanation: "Nguyên tử N trong NH₃ còn một cặp electron riêng chưa tham gia liên kết nên dễ nhận proton H⁺ (tính base) và tạo liên kết cho nhận."
    },
    {
        grade: "11", subject: "hoa", term: "CK1",
        question: "Để nhận biết sự có mặt của ion ammonium (NH₄⁺) trong dung dịch phân đạm, người ta đun nóng dung dịch đó với thuốc thử nào?",
        options: ["Dung dịch kiềm mạnh (NaOH, KOH) thấy thoát ra khí mùi khai làm xanh giấy quỳ tím ẩm", "Dung dịch HCl loãng", "Dung dịch AgNO₃", "Dung dịch BaCl₂"],
        answer: 0,
        explanation: "Khi đun nóng muối ammonium với dung dịch kiềm: NH₄⁺ + OH⁻ → NH₃↑ + H₂O; khí NH₃ thoát ra có mùi khai và làm giấy quỳ tím ẩm hóa xanh."
    },
    {
        grade: "11", subject: "hoa", term: "CK1",
        question: "Hiện tượng phú dưỡng (eutrophication) ở các ao hồ tù đọng xảy ra do nguyên nhân chính nào?",
        options: ["Dư thừa hàm lượng các chất dinh dưỡng chứa nguyên tố nitrogen (N) và phosphorus (P) trong nước", "Nước hồ bị nhiễm mặn do thủy triều", "Nồng độ khí oxygen hòa tan trong nước quá cao", "Nhiệt độ nước hồ giảm xuống dưới 0 °C"],
        answer: 0,
        explanation: "Nước thải sinh hoạt, nông nghiệp chứa nhiều ion nitrate (NO₃⁻) và phosphate (PO₄³⁻) gây hiện tượng phú dưỡng, làm tảo sinh sôi bùng phát và gây thiếu hụt oxygen cho thủy sinh vật."
    },
    {
        grade: "11", subject: "hoa", term: "CK1",
        question: "Những kim loại nào sau đây bị thụ động hóa (không phản ứng) trong dung dịch HNO₃ đặc, nguội và H₂SO₄ đặc, nguội?",
        options: ["Al, Fe, Cr", "Cu, Ag, Zn", "Mg, Cu, Pb", "Na, K, Ca"],
        answer: 0,
        explanation: "Ba kim loại Al, Fe, Cr bị thụ động hóa trong HNO₃ đặc nguội và H₂SO₄ đặc nguội do tạo màng oxide bền bảo vệ bề mặt."
    },
    {
        grade: "11", subject: "hoa", term: "CK1",
        question: "Khí sulfur dioxide (SO₂) là một trong các tác nhân chính gây ra hiện tượng môi trường nào sau đây?",
        options: ["Mưa acid (Acid rain)", "Thủng tầng ozone", "Băng tan ở hai cực do khí hiếm", "Sương mù quang hóa từ khí helium"],
        answer: 0,
        explanation: "Khí SO₂ và NOₓ phát thải từ đốt nhiên liệu hóa thạch bị oxi hóa trong khí quyển tạo thành H₂SO₄ và HNO₃ hòa tan trong nước mưa gây mưa acid."
    },
    {
        grade: "11", subject: "hoa", term: "CK1",
        question: "Khi pha loãng dung dịch H₂SO₄ đặc trong phòng thí nghiệm, thao tác nào sau đây là ĐÚNG và an toàn?",
        options: ["Rót từ từ acid H₂SO₄ đặc vào cốc nước và khuấy nhẹ bằng đũa thủy tinh (tuyệt đối không làm ngược lại)", "Đổ nhanh nước lạnh vào bình đựng H₂SO₄ đặc", "Đun sôi H₂SO₄ đặc rồi mới đổ nước vào", "Lắc mạnh bình kín chứa H₂SO₄ đặc và nước"],
        answer: 0,
        explanation: "Quá trình hòa tan H₂SO₄ đặc tỏa nhiệt rất lớn; phải rót từ từ acid vào nước và khuấy đều để nhiệt phân tán, tránh bắn acid gây bỏng."
    },
    {
        grade: "11", subject: "hoa", term: "CK1",
        question: "Thuốc thử dùng để nhận biết ion sulfate (SO₄²⁻) trong dung dịch H₂SO₄ hoặc muối sulfate là:",
        options: ["Dung dịch muối barium (BaCl₂, Ba(NO₃)₂) tạo kết tủa trắng BaSO₄ không tan trong acid", "Dung dịch NaOH loãng", "Dung dịch KNO₃", "Quỳ tím khô"],
        answer: 0,
        explanation: "Ion Ba²⁺ kết hợp với SO₄²⁻ tạo kết tủa trắng BaSO₄ bền vững, không tan trong các dung dịch acid mạnh (HCl, HNO₃)."
    },
    {
        grade: "11", subject: "hoa", term: "CK1",
        question: "Hợp chất nào sau đây là hợp chất hữu cơ?",
        options: ["CH₃COOH (acetic acid)", "Na₂CO₃ (sodium carbonate)", "CO₂ (carbon dioxide)", "Al₄C₃ (aluminium carbide)"],
        answer: 0,
        explanation: "Hợp chất hữu cơ là hợp chất của carbon (trừ các oxide của carbon, muối carbonate, cyanide, carbide...). Do đó CH₃COOH là hợp chất hữu cơ."
    },
    {
        grade: "11", subject: "hoa", term: "CK1",
        question: "Phương pháp phổ nào thường được sử dụng để xác định sự có mặt của các nhóm chức đặc trưng (như -OH, C=O, -COOH) trong phân tử hợp chất hữu cơ?",
        options: ["Phổ hồng ngoại (IR – Infrared spectroscopy)", "Phổ khối lượng (MS) chỉ dùng đo nguyên tử khối kim loại", "Chuẩn độ bằng quỳ tím", "Cân khối lượng trên cân điện tử"],
        answer: 0,
        explanation: "Trên phổ hồng ngoại (IR), mỗi liên kết và nhóm chức hữu cơ hấp thụ bức xạ ở số sóng đặc trưng (cm⁻¹), giúp nhận diện nhóm chức."
    },
    {
        grade: "11", subject: "hoa", term: "CK1",
        question: "Phương pháp tách biệt và tinh chế chất dựa trên sự khác nhau về nhiệt độ sôi của các chất lỏng hòa tan vào nhau (ví dụ nấu rượu truyền thống) được gọi là:",
        options: ["Phương pháp chưng cất", "Phương pháp kết tinh", "Phương pháp sắc kí cột", "Phương pháp lọc kết tủa"],
        answer: 0,
        explanation: "Chưng cất là phương pháp tách các chất lỏng có nhiệt độ sôi khác nhau bằng cách chuyển chất lỏng thành hơi rồi ngưng tụ thu lấy phần cất."
    },
    {
        grade: "11", subject: "hoa", term: "CK1",
        question: "Việc ngâm hoa quả, thảo dược vào rượu hoặc dùng dung môi hữu cơ (như hexane) để lấy tinh dầu ra khỏi hỗn hợp nước – tinh dầu là ứng dụng của phương pháp nào?",
        options: ["Phương pháp chiết (chiết lỏng – rắn và chiết lỏng – lỏng)", "Phương pháp chưng cất phân đoạn", "Phương pháp thăng hoa", "Phương pháp cô cạn"],
        answer: 0,
        explanation: "Phương pháp chiết dùng dung môi thích hợp để hòa tan và tách chất cần lấy ra khỏi chất rắn (chiết lỏng – rắn) hoặc dung dịch khác không đồng tan (chiết lỏng – lỏng)."
    },
    {
        grade: "11", subject: "hoa", term: "CK1",
        question: "Các chất hữu cơ có tính chất hóa học tương tự nhau và thành phần phân tử hơn kém nhau một hay nhiều nhóm CH₂ được gọi là:",
        options: ["Các chất đồng đẳng", "Các chất đồng phân", "Các dạng thù hình", "Các đồng vị"],
        answer: 0,
        explanation: "Dãy đồng đẳng gồm các chất có cấu tạo và tính chất hóa học tương tự nhau, phân tử hơn kém nhau k nhóm -CH₂-."
    },
    {
        grade: "11", subject: "hoa", term: "CK1",
        question: "Hai hợp chất ethanol (CH₃-CH₂-OH) và dimethyl ether (CH₃-O-CH₃) có cùng công thức phân tử C₂H₆O nhưng khác nhau về nhóm chức. Chúng là:",
        options: ["Đồng phân nhóm chức của nhau", "Hai chất đồng đẳng kế tiếp", "Đồng phân hình học cis – trans", "Cùng một chất hóa học"],
        answer: 0,
        explanation: "C₂H₅OH (nhóm -OH alcohol) và CH₃OCH₃ (nhóm -O- ether) có cùng CTPT C₂H₆O nhưng khác loại nhóm chức nên là đồng phân nhóm chức."
    },
    {
        grade: "11", subject: "hoa", term: "CK1",
        question: "Trên phổ khối lượng (MS – Mass Spectrum) của hợp chất hữu cơ đơn giản, mảnh ion phân tử [M⁺] (thường có giá trị m/z lớn nhất) cho biết thông tin gì?",
        options: ["Phân tử khối (M) của hợp chất hữu cơ đó", "Nhiệt độ sôi của hợp chất", "Độ pH của dung dịch", "Màu sắc của hợp chất ở trạng thái rắn"],
        answer: 0,
        explanation: "Giá trị m/z của peak ion phân tử [M⁺] trên phổ khối lượng MS chính bằng phân tử khối của hợp chất hữu cơ."
    },

    // ===================================================================
    // 10. HÓA HỌC 11 - GIỮA KÌ 2 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "hoa", term: "GK2",
        question: "Công thức tổng quát của dãy đồng đẳng alkane (hydrocarbon no, mạch hở) là:",
        options: ["CₙH₂ₙ₊₂ (n ≥ 1)", "CₙH₂ₙ (n ≥ 2)", "CₙH₂ₙ₋₂ (n ≥ 2)", "CₙH₂ₙ₋₆ (n ≥ 6)"],
        answer: 0,
        explanation: "Alkane là các hydrocarbon no mạch hở, chỉ chứa liên kết đơn C-C và C-H, có công thức chung CₙH₂ₙ₊₂ (n ≥ 1)."
    },
    {
        grade: "11", subject: "hoa", term: "GK2",
        question: "Theo danh pháp thay thế IUPAC, alkane mạch nhánh CH₃-CH(CH₃)-CH₂-CH₃ có tên gọi là:",
        options: ["2-methylbutane", "3-methylbutane", "isopentane (tên thay thế)", "2-ethylpropane"],
        answer: 0,
        explanation: "Chọn mạch chính dài nhất 4C (butane), đánh số từ đầu gần nhánh nhất để nhánh methyl ở vị trí số 2 → tên IUPAC là 2-methylbutane."
    },
    {
        grade: "11", subject: "hoa", term: "GK2",
        question: "Phản ứng hóa học đặc trưng nhất của các alkane (khi có chiếu sáng hoặc đun nóng với Cl₂, Br₂) là:",
        options: ["Phản ứng thế nguyên tử hydrogen bằng nguyên tử halogen", "Phản ứng cộng vào liên kết bội", "Phản ứng trùng hợp tạo polymer", "Phản ứng tráng bạc"],
        answer: 0,
        explanation: "Do phân tử chỉ có liên kết σ bền vững nên alkane đặc trưng bởi phản ứng thế halogen (ví dụ CH₄ + Cl₂ → CH₃Cl + HCl)."
    },
    {
        grade: "11", subject: "hoa", term: "GK2",
        question: "Trong công nghiệp lọc hóa dầu, quá trình bẻ gãy mạch carbon của các alkane mạch dài thành các alkane mạch ngắn hơn và alkene (để sản xuất xăng) được gọi là:",
        options: ["Phản ứng cracking", "Phản ứng trùng hợp", "Phản ứng thủy phân", "Phản ứng ester hóa"],
        answer: 0,
        explanation: "Cracking là quá trình phân cắt liên kết C-C của alkane mạch dài ở nhiệt độ cao/xúc tác tạo hỗn hợp alkane và alkene mạch ngắn hơn."
    },
    {
        grade: "11", subject: "hoa", term: "GK2",
        question: "Chất nào sau đây có đồng phân hình học (cis – trans)?",
        options: ["CH₃-CH=CH-CH₃ (but-2-ene)", "CH₂=CH-CH₂-CH₃ (but-1-ene)", "CH₂=C(CH₃)₂ (2-methylpropene)", "CH₂=CH₂ (ethene)"],
        answer: 0,
        explanation: "Điều kiện có đồng phân cis – trans là mỗi nguyên tử C ở liên kết đôi C=C phải liên kết với hai nhóm nguyên tử khác nhau (R₁ ≠ R₂ và R₃ ≠ R₄). But-2-ene thỏa mãn điều kiện này."
    },
    {
        grade: "11", subject: "hoa", term: "GK2",
        question: "Theo quy tắc Markovnikov, khi cho propene (CH₂=CH-CH₃) cộng hợp với HBr thì sản phẩm chính thu được là:",
        options: ["CH₃-CHBr-CH₃ (2-bromopropane)", "CH₂Br-CH₂-CH₃ (1-bromopropane)", "CH₃-CH₂-CH₃ (propane)", "CH₂Br-CHBr-CH₃"],
        answer: 0,
        explanation: "Theo quy tắc Markovnikov: nguyên tử H ưu tiên cộng vào nguyên tử C bậc thấp hơn (nhiều H hơn là CH₂), còn Br cộng vào C bậc cao hơn (CH) tạo sản phẩm chính 2-bromopropane."
    },
    {
        grade: "11", subject: "hoa", term: "GK2",
        question: "Để phân biệt khí acetylene (CH≡CH) với khí ethylene (CH₂=CH₂), người ta dẫn từng khí qua dung dịch nào sau đây?",
        options: ["Dung dịch AgNO₃ trong NH₃ (tạo kết tủa vàng nhạt với acetylene)", "Dung dịch nước bromine (cả hai đều làm mất màu)", "Dung dịch KMnO₄ loãng (cả hai đều làm mất màu)", "Dung dịch NaCl bão hòa"],
        answer: 0,
        explanation: "Các alk-1-yne có liên kết ba đầu mạch như acetylene (HC≡CH) phản ứng thế ion kim loại với dung dịch AgNO₃/NH₃ tạo kết tủa vàng nhạt AgC≡CAg↓, còn ethylene không phản ứng."
    },
    {
        grade: "11", subject: "hoa", term: "GK2",
        question: "Trong phòng thí nghiệm và công nghiệp, phản ứng cộng nước (hydrate hóa) vào acetylene (CH≡CH) với xúc tác muối Hg²⁺ trong môi trường H₂SO₄ loãng đun nóng tạo ra sản phẩm chính là:",
        options: ["CH₃-CHO (ethanal / acetaldehyde)", "CH₃-CH₂-OH (ethanol)", "CH₃-COOH (acetic acid)", "CH₃-CO-CH₃ (acetone)"],
        answer: 0,
        explanation: "CH≡CH + H₂O (HgSO₄/H⁺, t°) → [CH₂=CH-OH] (không bền) chuyển vị tạo thành aldehyde CH₃-CHO."
    },
    {
        grade: "11", subject: "hoa", term: "GK2",
        question: "Trùng hợp hoàn toàn monomer ethylene (CH₂=CH₂) ở nhiệt độ, áp suất và xúc tác thích hợp sẽ thu được polymer nào?",
        options: ["Polyethylene (PE)", "Polypropylene (PP)", "Poly(vinyl chloride) (PVC)", "Polystyrene (PS)"],
        answer: 0,
        explanation: "nCH₂=CH₂ → (-CH₂-CH₂-)ₙ là phản ứng trùng hợp tạo nhựa polyethylene (PE)."
    },
    {
        grade: "11", subject: "hoa", term: "GK2",
        question: "Hợp chất thơm toluene (methylbenzene) có công thức phân tử là:",
        options: ["C₇H₈ (C₆H₅-CH₃)", "C₆H₆", "C₈H₈ (C₆H₅-CH=CH₂)", "C₈H₁₀"],
        answer: 0,
        explanation: "Toluene có cấu tạo gồm vòng phenyl (-C₆H₅) gắn với nhóm methyl (-CH₃), công thức phân tử là C₇H₈."
    },
    {
        grade: "11", subject: "hoa", term: "GK2",
        question: "Tính chất hóa học chung thể hiện đặc tính 'thơm' của vòng benzene là:",
        options: ["Dễ tham gia phản ứng thế, khó tham gia phản ứng cộng và bền với các chất oxi hóa thông thường", "Rất dễ làm mất màu dung dịch nước bromine ở điều kiện thường", "Rất dễ bị oxi hóa bởi dung dịch KMnO₄ ở nhiệt độ thường", "Chỉ tham gia phản ứng trùng hợp"],
        answer: 0,
        explanation: "Hệ liên hợp vòng 6 electron π bền vững làm cho benzene có tính thơm: dễ thế (halogen hóa, nitro hóa), khó cộng và bền với tác nhân oxi hóa như KMnO₄."
    },
    {
        grade: "11", subject: "hoa", term: "GK2",
        question: "Khi cho toluene (C₆H₅CH₃) tác dụng với HNO₃ đặc (xúc tác H₂SO₄ đặc, tỉ lệ 1:1), nhóm nitro (-NO₂) ưu tiên thế vào vị trí nào trên vòng benzene?",
        options: ["Vị trí ortho (số 2) và para (số 4)", "Chỉ thế vào vị trí meta (số 3)", "Thế trực tiếp vào nguyên tử C số 1", "Không xảy ra phản ứng thế trên vòng"],
        answer: 0,
        explanation: "Nhóm alkyl (-CH₃) là nhóm đẩy electron làm giàu mật độ e ở vòng benzene và định hướng nhóm thế tiếp theo vào vị trí ortho và para."
    },
    {
        grade: "11", subject: "hoa", term: "GK2",
        question: "Chất nào sau đây vừa làm mất màu dung dịch nước bromine ở điều kiện thường, vừa làm mất màu dung dịch KMnO₄ ở nhiệt độ thường?",
        options: ["Styrene (C₆H₅-CH=CH₂)", "Benzene (C₆H₆)", "Toluene (C₆H₅-CH₃)", "Ethane (C₂H₆)"],
        answer: 0,
        explanation: "Styrene có liên kết đôi C=C ở nhánh ngoài vòng benzene nên phản ứng tương tự alkene: làm mất màu dung dịch Br₂ và KMnO₄ ngay ở nhiệt độ thường."
    },
    {
        grade: "11", subject: "hoa", term: "GK2",
        question: "Khi đun nóng toluene (C₆H₅CH₃) với dung dịch KMnO₄ trong môi trường H₂SO₄ loãng, nhóm -CH₃ bị oxi hóa tạo thành nhóm chức nào gắn trên vòng benzene?",
        options: ["Nhóm -COOH (tạo benzoic acid C₆H₅COOH)", "Nhóm -OH (tạo phenol C₆H₅OH)", "Nhóm -NH₂ (tạo aniline)", "Nhóm -NO₂ (tạo nitrobenzene)"],
        answer: 0,
        explanation: "Nhánh alkyl gắn trực tiếp với vòng benzene bị KMnO₄ đun nóng oxi hóa ở nguyên tử C_α tạo muối potassium benzoate, khi acid hóa thu được benzoic acid (C₆H₅COOH)."
    },
    {
        grade: "11", subject: "hoa", term: "GK2",
        question: "Chỉ số octane (RON 92, RON 95) của xăng đặc trưng cho tính chất nào của nhiên liệu trong động cơ đốt trong?",
        options: ["Khả năng chống kích nổ của xăng khi bị nén", "Hàm lượng lưu huỳnh có trong xăng", "Nhiệt độ đóng băng của xăng vào mùa đông", "Độ nhớt của dầu bôi trơn"],
        answer: 0,
        explanation: "Chỉ số octane càng cao thì khả năng chịu nén mà không tự phát nổ sớm (chống kích nổ) của xăng càng tốt."
    },

    // ===================================================================
    // 11. HÓA HỌC 11 - CUỐI KÌ 2 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "hoa", term: "CK2",
        question: "Khi đun nóng dẫn xuất halogen C₂H₅Br với dung dịch NaOH loãng, xảy ra phản ứng thế nguyên tử Br bằng nhóm -OH tạo thành sản phẩm hữu cơ nào?",
        options: ["C₂H₅OH (ethanol)", "CH₂=CH₂ (ethylene)", "CH₃CHO (ethanal)", "C₂H₆ (ethane)"],
        answer: 0,
        explanation: "Đun dẫn xuất monohalogen no với dung dịch kiềm loãng xảy ra phản ứng thủy phân (thế nhóm -OH): C₂H₅Br + NaOH (loãng, t°) → C₂H₅OH + NaBr."
    },
    {
        grade: "11", subject: "hoa", term: "CK2",
        question: "Theo quy tắc tách Zaitsev (Giai-xép), khi đun nóng 2-bromobutane (CH₃-CHBr-CH₂-CH₃) với KOH trong ethanol (C₂H₅OH), sản phẩm alkene chính thu được là:",
        options: ["CH₃-CH=CH-CH₃ (but-2-ene)", "CH₂=CH-CH₂-CH₃ (but-1-ene)", "CH₂=C(CH₃)₂", "CH₃-CH₂-CH₂-CH₃"],
        answer: 0,
        explanation: "Quy tắc Zaitsev: nguyên tử halogen (-Br) ưu tiên tách ra cùng nguyên tử H ở carbon bậc cao hơn bên cạnh để tạo alkene có nhiều nhóm thế hơn ở nối đôi (but-2-ene)."
    },
    {
        grade: "11", subject: "hoa", term: "CK2",
        question: "Vì sao các alcohol (như ethanol C₂H₅OH) có nhiệt độ sôi cao hơn hẳn các hydrocarbon hoặc dẫn xuất halogen có phân tử khối tương đương?",
        options: ["Do giữa các phân tử alcohol tạo được liên kết hydrogen liên phân tử", "Do phân tử alcohol có liên kết ion bền vững", "Do alcohol không tan trong nước", "Do alcohol có khối lượng riêng lớn hơn kim loại"],
        answer: 0,
        explanation: "Nhóm -OH phân cực mạnh giúp các phân tử alcohol tạo liên kết hydrogen liên phân tử với nhau, làm tăng nhiệt độ sôi và độ tan trong nước."
    },
    {
        grade: "11", subject: "hoa", term: "CK2",
        question: "Khi oxi hóa không hoàn toàn alcohol bậc I (R-CH₂OH) bằng CuO đun nóng, sản phẩm hữu cơ thu được thuộc loại hợp chất nào?",
        options: ["Aldehyde (R-CHO)", "Ketone (R-CO-R')", "Alkane", "Ether"],
        answer: 0,
        explanation: "Alcohol bậc I bị CuO đun nóng oxi hóa thành aldehyde: R-CH₂OH + CuO (t°) → R-CHO + Cu + H₂O (còn alcohol bậc II tạo ketone)."
    },
    {
        grade: "11", subject: "hoa", term: "CK2",
        question: "Thuốc thử dùng để nhận biết các polyalcohol có các nhóm -OH liền kề nhau (như ethylene glycol, glycerol) là gì?",
        options: ["Cu(OH)₂ ở nhiệt độ thường (hòa tan kết tủa tạo dung dịch phức chất màu xanh lam đậm)", "Dung dịch NaCl bão hòa", "Quỳ tím ẩm", "Khí CO₂"],
        answer: 0,
        explanation: "Các alcohol đa chức có ít nhất hai nhóm -OH kề nhau (như glycerol) hòa tan được Cu(OH)₂ ở điều kiện thường tạo dung dịch màu xanh lam đặc trưng."
    },
    {
        grade: "11", subject: "hoa", term: "CK2",
        question: "Khác với ethanol (C₂H₅OH), phenol (C₆H₅OH) phản ứng được với dung dịch nào sau đây để chứng minh tính acid yếu của nhóm -OH gắn trực tiếp vào vòng benzene?",
        options: ["Dung dịch NaOH (tạo C₆H₅ONa và H₂O)", "Kim loại Cu", "Dung dịch NaCl", "Khí H₂"],
        answer: 0,
        explanation: "Do gốc phenyl (-C₆H₅) hút electron làm tăng độ phân cực liên kết O-H, phenol thể hiện tính acid yếu và tác dụng được với dung dịch NaOH (còn alcohol thì không)."
    },
    {
        grade: "11", subject: "hoa", term: "CK2",
        question: "Khi nhỏ nước bromine vào dung dịch phenol (C₆H₅OH), hiện tượng quan sát được là:",
        options: ["Nước bromine mất màu và xuất hiện kết tủa trắng 2,4,6-tribromophenol", "Có khí không màu sủi bọt mạnh", "Xuất hiện kết tủa màu đỏ gạch", "Dung dịch chuyển sang màu xanh tím"],
        answer: 0,
        explanation: "Nhóm -OH hoạt hóa mạnh vòng benzene làm phenol dễ dàng thế 3 nguyên tử Br vào các vị trí 2, 4, 6 tạo kết tủa trắng 2,4,6-tribromophenol."
    },
    {
        grade: "11", subject: "hoa", term: "CK2",
        question: "Hợp chất carbonyl nào sau đây là ketone đơn giản nhất (thường dùng làm dung môi tẩy sơn móng tay)?",
        options: ["CH₃-CO-CH₃ (acetone / propanone)", "HCHO (methanal)", "CH₃-CHO (ethanal)", "HCOOH (formic acid)"],
        answer: 0,
        explanation: "Propanone (tên thông thường là acetone, CH₃-CO-CH₃) là ketone đơn giản nhất, có 3 nguyên tử carbon."
    },
    {
        grade: "11", subject: "hoa", term: "CK2",
        question: "Phản ứng nào sau đây dùng để phân biệt aldehyde (như CH₃CHO) với ketone (như CH₃COCH₃)?",
        options: ["Phản ứng tráng bạc với thuốc thử Tollens [Ag(NH₃)₂]OH đun nóng", "Phản ứng cháy với khí O₂", "Phản ứng cộng H₂ (xúc tác Ni, t°)", "Hòa tan vào nước cất"],
        answer: 0,
        explanation: "Aldehyde có tính khử nên phản ứng với thuốc thử Tollens tạo lớp bạc sáng bóng bám trên thành ống nghiệm (phản ứng tráng bạc), còn ketone không có phản ứng này."
    },
    {
        grade: "11", subject: "hoa", term: "CK2",
        question: "Khi đun nóng dung dịch ethanal (CH₃CHO) với Cu(OH)₂ trong môi trường kiềm (NaOH), hiện tượng thu được là:",
        options: ["Xuất hiện kết tủa màu đỏ gạch của copper(I) oxide (Cu₂O)", "Xuất hiện kết tủa trắng bạc", "Dung dịch không đổi màu", "Xuất hiện kết tủa màu vàng nhạt"],
        answer: 0,
        explanation: "CH₃CHO khử Cu(OH)₂/OH⁻ khi đun nóng tạo kết tủa Cu₂O màu đỏ gạch: CH₃CHO + 2Cu(OH)₂ + NaOH (t°) → CH₃COONa + Cu₂O↓ + 3H₂O."
    },
    {
        grade: "11", subject: "hoa", term: "CK2",
        question: "Hợp chất carbonyl có chứa nhóm methyl ketone (CH₃-CO-) như acetone hoặc ethanal khi tác dụng với I₂ trong dung dịch NaOH sẽ tạo ra kết tủa màu vàng của chất nào?",
        options: ["CHI₃ (iodoform)", "AgI (silver iodide)", "PbI₂ (lead iodide)", "CuI"],
        answer: 0,
        explanation: "Phản ứng iodoform đặc trưng cho các hợp chất có nhóm CH₃-C=O: tác dụng với I₂/NaOH tạo kết tủa vàng nhạt iodoform (CHI₃)."
    },
    {
        grade: "11", subject: "hoa", term: "CK2",
        question: "Nhóm chức đặc trưng của hợp chất carboxylic acid là:",
        options: ["Nhóm carboxyl (-COOH)", "Nhóm carbonyl (>C=O)", "Nhóm hydroxyl (-OH)", "Nhóm amino (-NH₂)"],
        answer: 0,
        explanation: "Carboxylic acid là hợp chất hữu cơ trong phân tử có nhóm carboxyl (-COOH) liên kết trực tiếp với nguyên tử C hoặc H."
    },
    {
        grade: "11", subject: "hoa", term: "CK2",
        question: "Trong giấm ăn thông thường có chứa từ 2% – 5% khối lượng của carboxylic acid nào sau đây?",
        options: ["Acetic acid (CH₃COOH)", "Formic acid (HCOOH)", "Oxalic acid (HOOC-COOH)", "Benzoic acid (C₆H₅COOH)"],
        answer: 0,
        explanation: "Giấm ăn là dung dịch acetic acid (CH₃COOH) có nồng độ khoảng 2% – 5%."
    },
    {
        grade: "11", subject: "hoa", term: "CK2",
        question: "Khi đun nóng hỗn hợp gồm acetic acid (CH₃COOH) và ethanol (C₂H₅OH) có mặt H₂SO₄ đặc làm xúc tác, thu được sản phẩm ester có mùi thơm là:",
        options: ["Ethyl acetate (CH₃COOC₂H₅)", "Methyl acetate (CH₃COOCH₃)", "Ethyl formate (HCOOC₂H₅)", "Diethyl ether (C₂H₅OC₂H₅)"],
        answer: 0,
        explanation: "Phản ứng ester hóa: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ (ethyl acetate) + H₂O (xúc tác H₂SO₄ đặc, t°)."
    },
    {
        grade: "11", subject: "hoa", term: "CK2",
        question: "So sánh nhiệt độ sôi của ba chất có phân tử khối xấp xỉ nhau: propanal (CH₃CH₂CHO), propan-1-ol (CH₃CH₂CH₂OH) và ethanoic acid (CH₃COOH). Thứ tự nhiệt độ sôi tăng dần là:",
        options: ["CH₃CH₂CHO < CH₃CH₂CH₂OH < CH₃COOH", "CH₃COOH < CH₃CH₂CH₂OH < CH₃CH₂CHO", "CH₃CH₂CH₂OH < CH₃CH₂CHO < CH₃COOH", "CH₃CH₂CHO < CH₃COOH < CH₃CH₂CH₂OH"],
        answer: 0,
        explanation: "Aldehyde không có liên kết hydrogen liên phân tử nên nhiệt độ sôi thấp nhất; carboxylic acid tạo liên kết hydrogen bền hơn alcohol (dạng dimer) nên có nhiệt độ sôi cao nhất."
    },

    // ===================================================================
    // 12. SINH HỌC 11 - GIỮA KÌ 1 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "sinh", term: "GK1",
        question: "Ở thực vật trên cạn, bộ phận chủ yếu trực tiếp hấp thụ nước và ion khoáng từ đất là:",
        options: ["Các tế bào lông hút ở miền lông hút của rễ", "Lớp biểu bì của thân cây", "Khí khổng ở mặt dưới của lá", "Chóp rễ ở tận cùng đầu rễ"],
        answer: 0,
        explanation: "Tế bào lông hút ở rễ có thành tế bào mỏng, không thấm cutin và có không bào trung tâm lớn tạo áp suất thẩm thấu cao để hấp thụ nước và muối khoáng."
    },
    {
        grade: "11", subject: "sinh", term: "GK1",
        question: "Cơ chế hấp thụ nước từ đất vào tế bào lông hút của rễ cây là:",
        options: ["Cơ chế thẩm thấu (thụ động) từ nơi có thế nước cao (dịch đất) đến nơi có thế nước thấp (dịch bào lông hút)", "Cơ chế vận chuyển chủ động cần tiêu tốn nhiều năng lượng ATP", "Cơ chế thực bào qua màng sinh chất", "Cơ chế khuếch tán từ nơi ưu trương sang nơi nhược trương"],
        answer: 0,
        explanation: "Nước luôn xâm nhập thụ động theo cơ chế thẩm thấu từ môi trường nhược trương (thế nước cao) vào tế bào lông hút ưu trương (thế nước thấp)."
    },
    {
        grade: "11", subject: "sinh", term: "GK1",
        question: "Trong quá trình vận chuyển nước và chất khoáng từ lông hút vào mạch gỗ của rễ, cấu trúc nào ở lớp nội bì giúp kiểm soát lượng nước và chất khoáng đi theo con đường gian bào?",
        options: ["Đai Caspary", "Mạch rây", "Khí khổng", "Tầng sinh bần"],
        answer: 0,
        explanation: "Đai Caspary ở thành tế bào nội bì không thấm nước và ion khoáng, buộc dòng nước và ion đi theo con đường gian bào phải chuyển sang con đường tế bào chất để được kiểm soát trước khi vào trung trụ."
    },
    {
        grade: "11", subject: "sinh", term: "GK1",
        question: "Dòng mạch gỗ (xylem) trong thân cây vận chuyển chủ yếu các chất nào và theo chiều nào?",
        options: ["Nước và các ion khoáng từ rễ lên thân, lá (vận chuyển một chiều đi lên)", "Chất hữu cơ tổng hợp từ lá xuống rễ", "Khí CO₂ từ lá xuống rễ", "Chỉ vận chuyển đường sucrose theo hai chiều"],
        answer: 0,
        explanation: "Mạch gỗ gồm các tế bào chết (quản bào và mạch ống) nối kế tiếp nhau, vận chuyển nước và ion khoáng từ rễ lên lá nhờ lực đẩy của rễ, lực hút do thoát hơi nước và lực liên kết."
    },
    {
        grade: "11", subject: "sinh", term: "GK1",
        question: "Thành phần chủ yếu của dịch mạch rây (phloem) được vận chuyển từ lá (cơ quan nguồn) đến rễ, quả, hạt (cơ quan chứa) là:",
        options: ["Sucrose, các amino acid, vitamin và một số hormone thực vật", "Chỉ có nước tinh khiết và khí oxygen", "Tinh bột không tan và cellulose", "Chỉ có các ion kim loại nặng"],
        answer: 0,
        explanation: "Dịch mạch rây chứa chủ yếu là đường sucrose (sản phẩm quang hợp ở lá) cùng các amino acid, hormone thực vật và một số ion khoáng tái sử dụng (như K⁺)."
    },
    {
        grade: "11", subject: "sinh", term: "GK1",
        question: "Ở thực vật trưởng thành, quá trình thoát hơi nước qua lá diễn ra chủ yếu qua con đường nào?",
        options: ["Con đường qua khí khổng (chiếm phần lớn lượng nước thoát ra và được điều tiết)", "Con đường qua lớp cutin", "Con đường qua mạch rây", "Con đường qua bì khổng ở rễ"],
        answer: 0,
        explanation: "Thoát hơi nước qua khí khổng là con đường chủ yếu ở cây trưởng thành, có tốc độ lớn và được điều chỉnh thông qua cơ chế đóng mở khí khổng."
    },
    {
        grade: "11", subject: "sinh", term: "GK1",
        question: "Thực vật trên cạn có thể hấp thụ trực tiếp nguyên tố nitrogen (N) từ đất dưới hai dạng ion khoáng nào?",
        options: ["Ion ammonium (NH₄⁺) và ion nitrate (NO₃⁻)", "Khí nitrogen tự do (N₂) và khí NO₂", "Dạng protein nguyên phân tử", "Dạng khí NH₃ trong không khí"],
        answer: 0,
        explanation: "Rễ cây chỉ hấp thụ được nitrogen vô cơ hòa tan trong đất dưới dạng ion NH₄⁺ (dạng khử) và NO₃⁻ (dạng oxi hóa)."
    },
    {
        grade: "11", subject: "sinh", term: "GK1",
        question: "Nguyên tố khoáng thiết yếu nào là thành phần cấu tạo trung tâm của phân tử diệp lục (chlorophyll) ở thực vật?",
        options: ["Magnesium (Mg) và Nitrogen (N)", "Calcium (Ca)", "Potassium (K)", "Chlorine (Cl)"],
        answer: 0,
        explanation: "Phân tử chlorophyll có nhân porphyrin chứa nguyên tử Mg ở trung tâm liên kết với 4 nguyên tử N; thiếu Mg hoặc N lá cây sẽ bị vàng (mất màu lục)."
    },
    {
        grade: "11", subject: "sinh", term: "GK1",
        question: "Trong bộ máy quang hợp của thực vật, sắc tố duy nhất có khả năng trực tiếp chuyển hóa năng lượng ánh sáng thành năng lượng hóa học trong các liên kết ATP và NADPH là:",
        options: ["Diệp lục a (Chlorophyll a) ở trung tâm phản ứng", "Diệp lục b (Chlorophyll b)", "Carotenoid (Carotene và Xanthophyll)", "Anthocyanin"],
        answer: 0,
        explanation: "Các sắc tố phụ (Carotenoid, Diệp lục b) hấp thụ ánh sáng rồi truyền năng lượng về Diệp lục a ở trung tâm phản ứng để trực tiếp thực hiện quang hóa."
    },
    {
        grade: "11", subject: "sinh", term: "GK1",
        question: "Pha sáng của quá trình quang hợp ở thực vật diễn ra tại vị trí nào của lục lạp và tạo ra các sản phẩm gì?",
        options: ["Tại màng thylakoid; tạo ra ATP, NADPH và giải phóng O₂", "Tại chất nền stroma; tạo ra glucose (C₆H₁₂O₆)", "Tại màng ngoài lục lạp; tạo ra CO₂ và H₂O", "Tại ti thể; tạo ra pyruvic acid"],
        answer: 0,
        explanation: "Pha sáng diễn ra trên hệ màng thylakoid (hạt grana), thực hiện quang phân li nước giải phóng O₂ và tổng hợp ATP, NADPH cung cấp cho pha tối."
    },
    {
        grade: "11", subject: "sinh", term: "GK1",
        question: "Khí O₂ giải phóng ra môi trường trong quá trình quang hợp ở cây xanh có nguồn gốc từ phân tử nào?",
        options: ["Từ phân tử nước (H₂O) thông qua quá trình quang phân li nước ở pha sáng", "Từ sự phân giải khí CO₂ ở pha tối", "Từ phân tử glucose", "Từ ion NO₃⁻ hút từ đất"],
        answer: 0,
        explanation: "Ở pha sáng, dưới tác dụng của ánh sáng: 2H₂O → 4H⁺ + 4e⁻ + O₂↑. Do đó toàn bộ O₂ giải phóng có nguồn gốc từ H₂O."
    },
    {
        grade: "11", subject: "sinh", term: "GK1",
        question: "Ở nhóm thực vật C₃ (như lúa, khoai, đậu), chất nhận CO₂ đầu tiên và sản phẩm cố định CO₂ đầu tiên trong chu trình Calvin (pha tối) lần lượt là:",
        options: ["Chất nhận là RuBP (5C) và sản phẩm đầu tiên là PGA (3C)", "Chất nhận là PEP (3C) và sản phẩm đầu tiên là OAA (4C)", "Chất nhận là glucose (6C) và sản phẩm là tinh bột", "Chất nhận là ATP và sản phẩm là pyruvic acid"],
        answer: 0,
        explanation: "Trong chu trình Calvin (C₃), ribulose-1,5-bisphosphate (RuBP – 5C) kết hợp với CO₂ tạo hợp chất 3 carbon đầu tiên là 3-phosphoglyceric acid (PGA – 3C)."
    },
    {
        grade: "11", subject: "sinh", term: "GK1",
        question: "Để thích nghi với điều kiện sống khô hạn ở sa mạc, nhóm thực vật CAM (như xương rồng, dứa, thanh long) có đặc điểm đóng mở khí khổng và cố định CO₂ như thế nào?",
        options: ["Đóng khí khổng vào ban ngày để tiết kiệm nước, mở khí khổng vào ban đêm để nhận CO₂", "Mở khí khổng suốt ban ngày và đóng vào ban đêm", "Không có khí khổng trên bề mặt cơ thể", "Chỉ quang hợp vào mùa mưa, ngừng hoàn toàn vào mùa khô"],
        answer: 0,
        explanation: "Thực vật CAM mở khí khổng ban đêm để thu nhận CO₂ (cố định tạm thời thành malate) và đóng khí khổng ban ngày để tránh mất nước khi thực hiện chu trình Calvin."
    },
    {
        grade: "11", subject: "sinh", term: "GK1",
        question: "Trong quá trình hô hấp hiếu khí ở tế bào thực vật, giai đoạn nào tạo ra nhiều phân tử ATP nhất?",
        options: ["Chuỗi truyền electron hô hấp (ở màng trong ti thể)", "Đường phân (ở tế bào chất)", "Chu trình Krebs (ở chất nền ti thể)", "Lên men rượu"],
        answer: 0,
        explanation: "Đường phân chỉ tạo 2 ATP, chu trình Krebs tạo 2 ATP, trong khi chuỗi truyền electron hô hấp tạo ra khoảng 26 – 28 ATP trên mỗi phân tử glucose."
    },
    {
        grade: "11", subject: "sinh", term: "GK1",
        question: "Vì sao khi bảo quản nông sản (hạt giống, rau quả), người ta cần khống chế cường độ hô hấp của nông sản ở mức tối thiểu?",
        options: ["Để hạn chế sự tiêu hao chất hữu cơ, tránh tăng nhiệt độ và độ ẩm làm nông sản nhanh hỏng nhưng vẫn giữ phôi sống", "Để làm chết hoàn toàn phôi hạt giống", "Để tăng hàm lượng đường trong hạt khô lên gấp đôi", "Để kích thích hạt nảy mầm ngay trong kho"],
        answer: 0,
        explanation: "Hô hấp mạnh làm hao hụt chất khô, tỏa nhiệt và sinh nước gây thối mốc; do đó bảo quản khô, lạnh hoặc nồng độ CO₂ cao giúp giảm hô hấp xuống mức tối thiểu."
    },

    // ===================================================================
    // 13. SINH HỌC 11 - CUỐI KÌ 1 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "sinh", term: "CK1",
        question: "Nhóm động vật nào sau đây chưa có cơ quan tiêu hóa chuyên biệt và chỉ thực hiện tiêu hóa nội bào?",
        options: ["Động vật nguyên sinh (trùng giày, trùng biến hình) và bọt biển (thân lỗ)", "Thủy tức và sứa (ngành Ruột khoang)", "Giun đất và châu chấu", "Cá chép và chim bồ câu"],
        answer: 0,
        explanation: "Động vật chưa có cơ quan tiêu hóa (như bọt biển, trùng biến hình) bắt mồi bằng thực bào và tiêu hóa thức ăn bên trong không bào tiêu hóa (tiêu hóa nội bào)."
    },
    {
        grade: "11", subject: "sinh", term: "CK1",
        question: "Ở các loài thú ăn thực vật nhai lại (như trâu, bò, cừu, dê), dạ dày chia làm 4 ngăn. Ngăn nào được gọi là 'dạ dày chính thức' tiết ra pepsin và HCl để tiêu hóa protein?",
        options: ["Dạ múi khế", "Dạ cỏ", "Dạ tổ ong", "Dạ lá sách"],
        answer: 0,
        explanation: "Dạ dày thú nhai lại gồm 4 ngăn: dạ cỏ (chứa vi sinh vật cộng sinh phân giải cellulose) → dạ tổ ong → ợ lên nhai lại → dạ lá sách (hấp thụ bớt nước) → dạ múi khế (tiết HCl và pepsin tiêu hóa hóa học)."
    },
    {
        grade: "11", subject: "sinh", term: "CK1",
        question: "Các loài côn trùng (như châu chấu, gián, ong) trao đổi khí với môi trường xung quanh thông qua hình thức hô hấp nào?",
        options: ["Hô hấp bằng hệ thống ống khí thông ra ngoài qua các lỗ thở", "Hô hấp qua mang", "Hô hấp bằng phổi và túi khí", "Hô hấp hoàn toàn qua bề mặt da ẩm ướt"],
        answer: 0,
        explanation: "Côn trùng có hệ thống ống khí phân nhánh nhỏ dần tiếp xúc trực tiếp với từng tế bào cơ thể để trao đổi O₂ và CO₂ qua các lỗ thở trên thành bụng."
    },
    {
        grade: "11", subject: "sinh", term: "CK1",
        question: "Loài động vật nào trên cạn có hiệu quả trao đổi khí cao nhất nhờ phổi cấu tạo từ các ống khí và có hệ thống 9 túi khí giúp không khí giàu O₂ luôn lưu thông một chiều qua phổi cả khi hít vào lẫn thở ra?",
        options: ["Các loài chim (như chim bồ câu, đại bàng)", "Các loài lưỡng cư (ếch đồng)", "Các loài bò sát (thằn lằn)", "Các loài thú ăn thịt"],
        answer: 0,
        explanation: "Nhờ sự phối hợp của hệ thống túi khí và phổi ống khí, chim không có khí cặn trong phổi nên hiệu quả trao đổi khí trên cạn đạt mức cao nhất."
    },
    {
        grade: "11", subject: "sinh", term: "CK1",
        question: "Hệ tuần hoàn hở (máu có đoạn thoát khỏi mạch máu tràn vào khoang cơ thể trộn lẫn với dịch mô) có ở những nhóm động vật nào sau đây?",
        options: ["Đa số động vật thân mềm (ốc sên, trai sông) và chân khớp (tôm, côn trùng)", "Cá xương, lưỡng cư và bò sát", "Giun đốt (giun đất), mực ống và bạch tuộc", "Chim và thú (động vật có vú)"],
        answer: 0,
        explanation: "Đa số ngành Thân mềm (trừ mực ống, bạch tuộc) và ngành Chân khớp có hệ tuần hoàn hở với áp lực máu thấp, tốc độ máu chảy chậm."
    },
    {
        grade: "11", subject: "sinh", term: "CK1",
        question: "Khả năng co dãn tự động theo chu kì của tim (ngay cả khi tách rời khỏi cơ thể và được nuôi trong dung dịch sinh lí có đủ O₂) là do cấu trúc nào phát xung điện đầu tiên?",
        options: ["Hệ dẫn truyền tim, đứng đầu là nút xoang nhĩ", "Các van nhĩ – thất và van tổ chim", "Hệ thống mao mạch vành", "Tâm thất trái"],
        answer: 0,
        explanation: "Hệ dẫn truyền tim gồm: nút xoang nhĩ (tự phát xung điện) → nút nhĩ thất → bó His → mạng lưới Purkinje làm tim co bóp tự động theo chu kì."
    },
    {
        grade: "11", subject: "sinh", term: "CK1",
        question: "Ở người trưởng thành bình thường, một chu kì hoạt động của tim kéo dài khoảng 0,8 giây bao gồm 3 pha với thời gian lần lượt là:",
        options: ["Pha co tâm nhĩ (0,1 s) → Pha co tâm thất (0,3 s) → Pha dãn chung (0,4 s)", "Pha co tâm nhĩ (0,4 s) → Pha co tâm thất (0,3 s) → Pha dãn chung (0,1 s)", "Pha co tâm thất (0,5 s) → Pha co tâm nhĩ (0,2 s) → Pha dãn chung (0,1 s)", "Cả ba pha đều kéo dài 0,27 s"],
        answer: 0,
        explanation: "Mỗi chu kì tim 0,8 s gồm: tâm nhĩ co 0,1 s, tâm thất co 0,3 s và pha dãn chung 0,4 s (giúp cơ tim có đủ thời gian nghỉ ngơi phục hồi)."
    },
    {
        grade: "11", subject: "sinh", term: "CK1",
        question: "Trong hệ mạch máu của người, huyết áp (áp lực của máu lên thành mạch) biến đổi như thế nào từ động mạch chủ đến tĩnh mạch chủ?",
        options: ["Giảm dần từ động mạch chủ → tiểu động mạch → mao mạch → tiểu tĩnh mạch → tĩnh mạch chủ", "Tăng dần từ động mạch sang tĩnh mạch", "Đạt giá trị cao nhất tại hệ thống mao mạch", "Không thay đổi trong suốt hệ mạch"],
        answer: 0,
        explanation: "Do ma sát giữa máu với thành mạch và giữa các phần tử máu với nhau, huyết áp giảm dần suốt chiều dài hệ mạch (cao nhất ở động mạch chủ và thấp nhất ở tĩnh mạch chủ)."
    },
    {
        grade: "11", subject: "sinh", term: "CK1",
        question: "Vì sao vận tốc máu chảy trong hệ thống mao mạch lại chậm nhất (chỉ khoảng 0,5 mm/s) so với động mạch và tĩnh mạch?",
        options: ["Vì tổng tiết diện của hệ thống mao mạch là lớn nhất", "Vì tổng tiết diện của mao mạch là nhỏ nhất", "Vì mao mạch nằm gần tim nhất", "Vì máu trong mao mạch không chứa hồng cầu"],
        answer: 0,
        explanation: "Vận tốc máu tỉ lệ nghịch với tổng tiết diện mạch. Hệ mao mạch có số lượng cực lớn nên tổng tiết diện lớn nhất, làm máu chảy chậm nhất giúp trao đổi chất hiệu quả với tế bào."
    },
    {
        grade: "11", subject: "sinh", term: "CK1",
        question: "Hàng rào bảo vệ tự nhiên gồm da, niêm mạc, dịch tiết (nước mắt, dịch vị dạ dày) và phản ứng thực bào, phản ứng sốt/viêm thuộc loại miễn dịch nào?",
        options: ["Miễn dịch không đặc hiệu (miễn dịch bẩm sinh)", "Miễn dịch đặc hiệu thể dịch", "Miễn dịch đặc hiệu tế bào", "Miễn dịch nhân tạo nhờ tiêm kháng huyết thanh"],
        answer: 0,
        explanation: "Miễn dịch không đặc hiệu mang tính bẩm sinh, đáp ứng tức thời với mọi tác nhân gây bệnh mà không cần tiếp xúc trước với kháng nguyên."
    },
    {
        grade: "11", subject: "sinh", term: "CK1",
        question: "Trong đáp ứng miễn dịch đặc hiệu, tế bào lympho B sau khi nhận diện kháng nguyên sẽ biệt hóa thành tương bào (plasma cell) để sản xuất ra chất gì chống lại tác nhân gây bệnh?",
        options: ["Kháng thể (Antibody / Immunoglobulin)", "Histamine gây dị ứng", "Hormone insulin", "Dịch mật"],
        answer: 0,
        explanation: "Miễn dịch thể dịch có sự tham gia của tế bào B biệt hóa thành tương bào sản xuất các kháng thể đặc hiệu để bất hoạt kháng nguyên."
    },
    {
        grade: "11", subject: "sinh", term: "CK1",
        question: "Việc tiêm vaccine phòng bệnh cho trẻ em và người lớn giúp cơ thể chủ động tạo ra:",
        options: ["Kháng thể và các tế bào nhớ miễn dịch (tế bào B nhớ, tế bào T nhớ) đặc hiệu với mầm bệnh", "Hồng cầu vận chuyển nhiều oxygen hơn", "Các enzyme tiêu hóa thức ăn nhanh hơn", "Kháng sinh tiêu diệt mọi vi khuẩn có lợi"],
        answer: 0,
        explanation: "Vaccine chứa kháng nguyên đã làm yếu hoặc bất hoạt, kích thích hệ miễn dịch tạo kháng thể và tế bào nhớ để phản ứng nhanh, mạnh khi gặp mầm bệnh thật."
    },
    {
        grade: "11", subject: "sinh", term: "CK1",
        question: "Một hệ thống điều hòa cân bằng nội môi luôn bao gồm 3 bộ phận chính theo trình tự nào?",
        options: ["Bộ phận tiếp nhận kích thích (thụ thể) → Bộ phận điều khiển (trung ương thần kinh/tuyến nội tiết) → Bộ phận thực hiện", "Bộ phận thực hiện → Bộ phận tiếp nhận → Môi trường ngoài", "Tim → Phổi → Dạ dày", "Tủy xương → Khớp xương → Cơ vân"],
        answer: 0,
        explanation: "Cơ chế duy trì cân bằng nội môi gồm: Bộ phận tiếp nhận kích thích → Bộ phận điều khiển → Bộ phận thực hiện (kèm theo liên hệ ngược âm tính)."
    },
    {
        grade: "11", subject: "sinh", term: "CK1",
        question: "Khi nồng độ glucose trong máu tăng cao sau bữa ăn nhiều tinh bột, tuyến tụy sẽ tiết ra hormone nào để chuyển hóa glucose thành glycogen dự trữ ở gan và cơ?",
        options: ["Insulin", "Glucagon", "Adrenaline", "Thyroxine"],
        answer: 0,
        explanation: "Tế bào β đảo tụy tiết hormone insulin giúp tế bào tăng nhận glucose và chuyển glucose thành glycogen dự trữ, đưa đường huyết về mức ổn định."
    },
    {
        grade: "11", subject: "sinh", term: "CK1",
        question: "Đơn vị chức năng cấu tạo nên thận ở người và thú, nơi diễn ra quá trình lọc máu tạo nước tiểu đầu và tái hấp thụ tạo nước tiểu chính thức, được gọi là gì?",
        options: ["Nephron", "Neuron", "Sarcomere", "Phế nang"],
        answer: 0,
        explanation: "Mỗi quả thận người chứa khoảng 1 triệu đơn vị chức năng gọi là nephron (gồm cầu thận, nang Bowman và hệ thống ống thận)."
    },

    // ===================================================================
    // 14. SINH HỌC 11 - GIỮA KÌ 2 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "sinh", term: "GK2",
        question: "Hình thức vận động sinh trưởng của cơ quan thực vật định hướng theo một phía xác định của tác nhân kích thích từ môi trường (như ánh sáng, trọng lực, nước) được gọi là:",
        options: ["Hướng động (vận động định hướng)", "Ứng động không sinh trưởng", "Ứng động sức trương", "Phản xạ có điều kiện"],
        answer: 0,
        explanation: "Hướng động là hình thức phản ứng của cơ quan thực vật đối với tác nhân kích thích từ một hướng xác định (hướng động dương khi vươn tới, hướng động âm khi tránh xa)."
    },
    {
        grade: "11", subject: "sinh", term: "GK2",
        question: "Khi đặt một chậu cây non nằm ngang, sau một thời gian ngọn cây cong lên phía trên còn rễ cây uốn cong xuống phía dưới đất. Hiện tượng này thể hiện:",
        options: ["Thân (ngọn) có tính hướng trọng lực âm, còn rễ có tính hướng trọng lực dương", "Cả thân và rễ đều hướng trọng lực dương", "Thân hướng hóa dương, rễ hướng sáng dương", "Ứng động không sinh trưởng do va chạm"],
        answer: 0,
        explanation: "Đối với tác nhân trọng lực: đỉnh rễ sinh trưởng hướng về phía trọng lực (hướng trọng lực dương), còn đỉnh thân sinh trưởng ngược chiều trọng lực (hướng trọng lực âm)."
    },
    {
        grade: "11", subject: "sinh", term: "GK2",
        question: "Nguyên nhân tế bào học của hiện tượng ngọn cây uốn cong về phía có ánh sáng (hướng sáng dương) là do:",
        options: ["Hormone auxin di chuyển nhiều về phía khuất sáng, kích thích các tế bào phía tối dãn dài nhanh hơn phía được chiếu sáng", "Các tế bào phía được chiếu sáng phân chia nhanh gấp đôi phía tối", "Ánh sáng mặt trời làm khô héo toàn bộ tế bào phía sáng", "Hormone ethylene tập trung ở đỉnh sinh trưởng"],
        answer: 0,
        explanation: "Ở thân non, auxin phân bố nhiều hơn ở phía không được chiếu sáng, kích thích tế bào phía tối sinh trưởng kéo dài nhanh hơn làm ngọn cây uốn cong về phía nguồn sáng."
    },
    {
        grade: "11", subject: "sinh", term: "GK2",
        question: "Hiện tượng lá cây trinh nữ (cây xấu hổ) cụp xuống nhanh chóng khi bị tay chạm vào là kiểu cảm ứng nào ở thực vật?",
        options: ["Ứng động không sinh trưởng (do sự biến đổi sức trương nước ở thể gối gốc lá)", "Hướng sáng âm", "Hướng tiếp xúc sinh trưởng", "Hướng hóa âm"],
        answer: 0,
        explanation: "Tác nhân cơ học không định hướng làm ion K⁺ và nước thoát khỏi tế bào thể gối ở cuống lá cây trinh nữ, gây giảm sức trương nước làm lá cụp lại (ứng động không sinh trưởng)."
    },
    {
        grade: "11", subject: "sinh", term: "GK2",
        question: "Hiện tượng hoa mười giờ nở vào buổi sáng khi có ánh nắng và nhiệt độ ấm áp, hoặc lá cây họ Đậu xòe ra ban ngày và khép lại ban đêm là ví dụ về:",
        options: ["Ứng động sinh trưởng (vận động theo chu kì đồng hồ sinh học và nhiệt/quang)", "Hướng động tiếp xúc", "Hướng nước dương", "Phản xạ thần kinh"],
        answer: 0,
        explanation: "Ứng động nở hoa và vận động ngủ – thức của lá theo chu kì ngày đêm liên quan đến tốc độ sinh trưởng không đều giữa mặt trên và mặt dưới cánh hoa/cuống lá."
    },
    {
        grade: "11", subject: "sinh", term: "GK2",
        question: "Nhóm động vật đa bào nào có hệ thần kinh dạng lưới (các tế bào thần kinh nằm rải rác khắp cơ thể và nối với nhau qua các sợi thần kinh)?",
        options: ["Ngành Ruột khoang (thủy tức, sứa, san hô)", "Ngành Giun đốt (giun đất)", "Ngành Chân khớp (châu chấu)", "Động vật có xương sống"],
        answer: 0,
        explanation: "Thủy tức và các loài ngành Ruột khoang có hệ thần kinh dạng lưới; khi bị kích thích tại một điểm, toàn thân co lại."
    },
    {
        grade: "11", subject: "sinh", term: "GK2",
        question: "Cấu tạo điển hình của một tế bào thần kinh (neuron) gồm 3 thành phần chính là:",
        options: ["Thân neuron (chứa nhân), các sợi nhánh và một sợi trục (axon)", "Màng trước synapse, khe synapse và màng sau synapse", "Thụ thể cảm giác, cơ vân và tuyến tiết", "Tâm nhĩ, tâm thất và van tim"],
        answer: 0,
        explanation: "Mỗi neuron gồm thân chứa nhân, nhiều sợi nhánh tiếp nhận xung thần kinh và một sợi trục truyền xung đi tới các tế bào khác qua synapse."
    },
    {
        grade: "11", subject: "sinh", term: "GK2",
        question: "Ở trạng thái nghỉ ngơi (không bị kích thích), mặt trong của màng neuron tích điện gì so với mặt ngoài của màng?",
        options: ["Mặt trong tích điện âm (-), mặt ngoài tích điện dương (+)", "Mặt trong tích điện dương (+), mặt ngoài tích điện âm (-)", "Cả hai mặt đều không mang điện (điện thế bằng 0)", "Điện thế đảo chiều liên tục mỗi mili-giây"],
        answer: 0,
        explanation: "Ở trạng thái điện thế nghỉ (khoảng -70 mV), mặt trong màng neuron mang điện tích âm so với mặt ngoài mang điện tích dương do sự phân bố ion K⁺, Na⁺ và bơm Na⁺-K⁺."
    },
    {
        grade: "11", subject: "sinh", term: "GK2",
        question: "Vì sao trên sợi trục thần kinh có bao myelin, xung thần kinh lại lan truyền với tốc độ nhanh hơn nhiều so với sợi trục không có bao myelin?",
        options: ["Vì xung thần kinh lan truyền theo kiểu nhảy cóc từ eo Ranvier này sang eo Ranvier kế tiếp", "Vì bao myelin tự phát ra dòng điện cao thế", "Vì sợi có bao myelin ngắn hơn gấp 100 lần", "Vì không cần sử dụng ion Na⁺ và K⁺"],
        answer: 0,
        explanation: "Bao myelin có bản chất lipid cách điện; sự khử cực và đảo cực chỉ xảy ra tại các eo Ranvier nên xung thần kinh truyền nhảy cóc rất nhanh và tiết kiệm năng lượng."
    },
    {
        grade: "11", subject: "sinh", term: "GK2",
        question: "Trong quá trình truyền tin qua synapse hóa học, chất trung gian hóa học phổ biến nhất ở động vật có vú là:",
        options: ["Acetylcholine và noradrenaline", "Hormone insulin và glucagon", "Enzyme amylase và pepsin", "Diệp lục và carotenoid"],
        answer: 0,
        explanation: "Acetylcholine và noradrenaline (cùng dopamine, serotonin) là các chất trung gian hóa học chứa trong bóng synapse ở chùy synapse."
    },
    {
        grade: "11", subject: "sinh", term: "GK2",
        question: "Vì sao thông tin truyền qua synapse hóa học chỉ đi theo một chiều duy nhất từ màng trước sang màng sau synapse mà không thể truyền ngược lại?",
        options: ["Vì chỉ ở chùy synapse (màng trước) mới có bóng chứa chất trung gian hóa học và chỉ ở màng sau mới có thụ thể tiếp nhận đặc hiệu", "Vì khe synapse có van một chiều cơ học", "Vì màng sau synapse không có màng sinh chất", "Vì xung thần kinh bị tiêu hủy hoàn toàn ở sợi nhánh"],
        answer: 0,
        explanation: "Do cấu tạo bất đối xứng: bóng chứa chất trung gian hóa học chỉ nằm ở chùy synapse (trước), còn thụ thể tiếp nhận chất này chỉ nằm trên màng sau synapse."
    },
    {
        grade: "11", subject: "sinh", term: "GK2",
        question: "Một cung phản xạ hoàn chỉnh ở động vật có hệ thần kinh gồm 5 khâu theo đúng trình tự nào?",
        options: ["Bộ phận tiếp nhận kích thích (thụ thể) → Đường dẫn truyền hướng tâm → Trung ương thần kinh → Đường dẫn truyền li tâm → Bộ phận đáp ứng (cơ, tuyến)", "Trung ương thần kinh → Thụ thể → Cơ vân → Não bộ → Tủy sống", "Đường li tâm → Thụ thể → Đường hướng tâm → Cơ quan trả lời", "Thụ thể → Cơ vân → Tuyến nội tiết"],
        answer: 0,
        explanation: "Cung phản xạ 5 khâu: Thụ thể cảm giác → Neuron cảm giác (hướng tâm) → Trung ương thần kinh xử lí → Neuron vận động (li tâm) → Cơ quan đáp ứng (cơ/tuyến)."
    },
    {
        grade: "11", subject: "sinh", term: "GK2",
        question: "Đặc điểm nào sau đây là của 'phản xạ không điều kiện' (bẩm sinh)?",
        options: ["Sinh ra đã có, mang tính đặc trưng cho loài, rất bền vững và có tính di truyền", "Hình thành trong đời sống cá thể qua học tập và rèn luyện", "Dễ mất đi nếu không được củng cố thường xuyên", "Có số lượng không hạn định và phụ thuộc từng cá thể"],
        answer: 0,
        explanation: "Phản xạ không điều kiện (như rụt tay khi chạm vật nóng, trẻ sơ sinh bú mẹ) là bẩm sinh, di truyền, bền vững suốt đời và đặc trưng cho loài."
    },
    {
        grade: "11", subject: "sinh", term: "GK2",
        question: "Hiện tượng chim non mới nở đi theo vật chuyển động đầu tiên mà chúng nhìn thấy (thường là chim mẹ) thuộc hình thức học tập nào ở động vật?",
        options: ["In vết (Imprinting)", "Quen nhờn (Habituation)", "Học giải quyết vấn đề (Reasoning)", "Điều kiện hóa hành động"],
        answer: 0,
        explanation: "In vết là hình thức học tập nhanh ở giai đoạn nhạy cảm ngay sau khi sinh (đặc biệt ở các loài chim như ngỗng, vịt con), giúp con non nhận biết và bám theo bố mẹ."
    },
    {
        grade: "11", subject: "sinh", term: "GK2",
        question: "Loại chất gây nghiện nào có trong khói thuốc lá và thuốc lá điện tử tác động trực tiếp lên các thụ thể ở synapse thần kinh trung ương, gây lệ thuộc và hại tim mạch, hô hấp?",
        options: ["Nicotine", "Vitamin C", "Glucose", "Cellulose"],
        answer: 0,
        explanation: "Nicotine trong thuốc lá kích thích giải phóng dopamine ở não gây cảm giác hưng phấn tạm thời và gây nghiện mạnh, đồng thời làm tổn thương mạch máu và phổi."
    },

    // ===================================================================
    // 15. SINH HỌC 11 - CUỐI KÌ 2 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "sinh", term: "CK2",
        question: "Ở cây Hai lá mầm, sự sinh trưởng thứ cấp làm tăng đường kính (bề ngang) của thân và rễ là nhờ hoạt động nguyên phân của loại mô phân sinh nào?",
        options: ["Mô phân sinh bên (tầng sinh mạch và tầng sinh bần)", "Mô phân sinh đỉnh ngọn", "Mô phân sinh lóng", "Biểu bì lá"],
        answer: 0,
        explanation: "Sinh trưởng sơ cấp (tăng chiều dài) do mô phân sinh đỉnh và mô phân sinh lóng; còn sinh trưởng thứ cấp (tăng đường kính thân gỗ cây Hai lá mầm) do mô phân sinh bên đảm nhiệm."
    },
    {
        grade: "11", subject: "sinh", term: "CK2",
        question: "Trong các hormone thực vật sau đây, nhóm nào gồm các hormone có vai trò KÍCH THÍCH sinh trưởng?",
        options: ["Auxin, Gibberellin (GA) và Cytokinin", "Ethylene và Abscisic acid (ABA)", "Auxin và Abscisic acid", "Chỉ có Ethylene"],
        answer: 0,
        explanation: "Hormone thực vật chia làm 2 nhóm: nhóm kích thích sinh trưởng (Auxin, Gibberellin, Cytokinin) và nhóm ức chế sinh trưởng / thúc đẩy già hóa (Ethylene, Abscisic acid)."
    },
    {
        grade: "11", subject: "sinh", term: "CK2",
        question: "Hormone thực vật dạng khí nào có vai trò thúc đẩy quả chín nhanh và kích thích sự rụng lá, rụng quả?",
        options: ["Ethylene (C₂H₄)", "Cytokinin", "Gibberellin", "Auxin"],
        answer: 0,
        explanation: "Ethylene là hormone thực vật tồn tại ở thể khí, được tổng hợp mạnh khi quả bước vào giai đoạn chín (nên xếp quả chín cạnh quả xanh giúp quả xanh nhanh chín)."
    },
    {
        grade: "11", subject: "sinh", term: "CK2",
        question: "Loài động vật nào sau đây phát triển qua biến thái hoàn toàn (ấu trùng có hình thái, cấu tạo và sinh lí rất khác với con trưởng thành)?",
        options: ["Bướm, ruồi, muỗi, ong và ếch đồng", "Châu chấu, cào cào, gián (biến thái không hoàn toàn)", "Chó, mèo, thỏ và người (không qua biến thái)", "Cá chép, gà và chim bồ câu"],
        answer: 0,
        explanation: "Bướm (sâu bướm → nhộng → bướm), muỗi (bọ gậy → lăng quăng → muỗi), ếch (nòng nọc có đuôi thở bằng mang → ếch trưởng thành thở bằng phổi) phát triển qua biến thái hoàn toàn."
    },
    {
        grade: "11", subject: "sinh", term: "CK2",
        question: "Ở động vật có xương sống và người, hormone nào do tuyến giáp tiết ra (có thành phần chứa iodine) đóng vai trò thúc đẩy chuyển hóa cơ bản ở tế bào và kích thích biến thái từ nòng nọc thành ếch?",
        options: ["Thyroxine", "Hormone sinh trưởng (GH) của tuyến yên", "Ecdysone", "Juvenile"],
        answer: 0,
        explanation: "Thyroxine do tuyến giáp tiết ra kích thích chuyển hóa ở tế bào và phát triển hệ thần kinh; ở lưỡng cư, thyroxine điều khiển quá trình biến thái nòng nọc thành ếch."
    },
    {
        grade: "11", subject: "sinh", term: "CK2",
        question: "Sự lột xác và biến thái của sâu bướm thành nhộng rồi thành bướm trưởng thành được điều hòa bởi hai loại hormone đối kháng nào ở côn trùng?",
        options: ["Ecdysone và Juvenile", "Testosterone và Estrogen", "Insulin và Glucagon", "Auxin và Cytokinin"],
        answer: 0,
        explanation: "Ở côn trùng, hormone Ecdysone gây lột xác và thúc đẩy biến thái thành nhộng/bướm, còn hormone Juvenile ức chế sự biến thái khi nồng độ còn cao."
    },
    {
        grade: "11", subject: "sinh", term: "CK2",
        question: "Cơ sở tế bào học của hình thức sinh sản vô tính ở sinh vật là quá trình phân bào nào?",
        options: ["Quá trình nguyên phân (giúp cơ thể con có bộ nhiễm sắc thể giống hệt cơ thể mẹ)", "Quá trình giảm phân và thụ tinh", "Sự tiếp hợp trao đổi chéo nhiễm sắc thể", "Sự đột biến đa bội hóa"],
        answer: 0,
        explanation: "Sinh sản vô tính dựa trên cơ sở nguyên phân và biệt hóa tế bào, nên thế hệ con mang bộ gene giống hệt cá thể mẹ ban đầu."
    },
    {
        grade: "11", subject: "sinh", term: "CK2",
        question: "Phương pháp nhân giống vô tính hiện đại nào cho phép tạo ra hàng vạn cây giống đồng nhất về mặt di truyền, sạch bệnh virus từ một mảnh mô nhỏ (đỉnh sinh trưởng) trong môi trường dinh dưỡng vô trùng?",
        options: ["Nuôi cấy mô và tế bào thực vật (vi nhân giống / in vitro)", "Giâm cành truyền thống ngoài ruộng", "Gieo hạt tự nhiên sau thụ phấn chéo", "Chiết cành thủ công"],
        answer: 0,
        explanation: "Nuôi cấy mô tế bào dựa trên tính toàn năng của tế bào thực vật, giúp nhân nhanh giống cây quý hiếm, sạch bệnh với hệ số nhân giống rất cao."
    },
    {
        grade: "11", subject: "sinh", term: "CK2",
        question: "Ở thực vật có hoa (Thực vật Hạt kín), túi phôi (thể giao tử cái trưởng thành) tiêu biểu chứa bao nhiêu tế bào và bao nhiêu nhân?",
        options: ["7 tế bào với 8 nhân (gồm 1 tế bào trứng, 2 tế bào kèm, 3 tế bào đối cực và 1 tế bào trung tâm chứa 2 nhân cực)", "4 tế bào đơn bội giống hệt nhau", "2 tế bào gồm tế bào sinh dưỡng và tế bào sinh sản", "1 tế bào duy nhất mang bộ NST 2n"],
        answer: 0,
        explanation: "Từ 1 đại bào tử (n) nguyên phân 3 lần liên tiếp tạo túi phôi 8 nhân phân bố trong 7 tế bào (riêng tế bào trung tâm chứa 2 nhân cực)."
    },
    {
        grade: "11", subject: "sinh", term: "CK2",
        question: "Hiện tượng 'thụ tinh kép' đặc trưng chỉ có ở Thực vật Hạt kín (thực vật có hoa) diễn ra như thế nào?",
        options: ["Một tinh tử (n) kết hợp với trứng (n) tạo hợp tử (2n), đồng thời tinh tử thứ hai (n) kết hợp với nhân lưỡng bội/2 nhân cực (2n) tạo nhân nội nhũ tam bội (3n)", "Hai tinh tử cùng thụ tinh với một tế bào trứng duy nhất", "Hai hạt phấn cùng nảy mầm trên một đầu nhụy", "Một trứng kết hợp với hai hạt phấn khác loài"],
        answer: 0,
        explanation: "Thụ tinh kép: Giao tử đực 1 (n) + Trứng (n) → Hợp tử (2n, phát triển thành phôi); Giao tử đực 2 (n) + 2 nhân cực (2n) → Nhân tam bội (3n, phát triển thành nội nhũ nuôi phôi)."
    },
    {
        grade: "11", subject: "sinh", term: "CK2",
        question: "Sau khi thụ tinh ở thực vật có hoa, bộ phận nào của hoa sẽ phát triển thành QUẢ và bộ phận nào phát triển thành HẠT?",
        options: ["Bầu nhụy phát triển thành quả; noãn đã thụ tinh phát triển thành hạt", "Đài hoa phát triển thành hạt; cánh hoa phát triển thành quả", "Bao phấn phát triển thành quả; hạt phấn thành hạt", "Cuống hoa phát triển thành hạt"],
        answer: 0,
        explanation: "Sau thụ tinh, noãn chứa hợp tử và nội nhũ biến đổi thành hạt, còn bầu nhụy sinh trưởng dày lên tạo thành quả bảo vệ hạt."
    },
    {
        grade: "11", subject: "sinh", term: "CK2",
        question: "Hình thức sinh sản mà tế bào trứng không qua thụ tinh vẫn nguyên phân phát triển thành cơ thể mới (như sự hình thành ong đực mang bộ NST đơn bội n từ trứng không thụ tinh của ong chúa) được gọi là:",
        options: ["Trinh sinh (trinh sản / parthenogenesis)", "Nảy chồi vô tính", "Phân mảnh cơ thể", "Thụ tinh ngoài"],
        answer: 0,
        explanation: "Trinh sinh là hình thức sinh sản trong đó giao tử cái (trứng) không thụ tinh phát triển thành cá thể mới, thường gặp ở ong, kiến, rệp."
    },
    {
        grade: "11", subject: "sinh", term: "CK2",
        question: "Ở người và thú, quá trình sản sinh tinh trùng và sản sinh trứng chịu sự điều hòa trực tiếp của hai loại hormone hướng sinh dục nào do thùy trước tuyến yên tiết ra?",
        options: ["FSH và LH", "Insulin và Glucagon", "Adrenaline và Thyroxine", "Oxytocin và Calcitonin"],
        answer: 0,
        explanation: "Vùng dưới đồi tiết GnRH kích thích tuyến yên tiết FSH (kích thích ống sinh tinh / nang trứng phát triển) và LH (kích thích tế bào Leydig tiết testosterone / gây rụng trứng và tạo thể vàng)."
    },
    {
        grade: "11", subject: "sinh", term: "CK2",
        question: "Trong chu kì kinh nguyệt của phụ nữ, thể vàng (hoàng thể) tiết ra một lượng lớn hai loại hormone nào để làm dày niêm mạc tử cung chuẩn bị đón hợp tử làm tổ và ức chế ngược tuyến yên tiết FSH, LH?",
        options: ["Progesterone và Estrogen", "Testosterone và GH", "FSH và GnRH", "Thyroxine và Insulin"],
        answer: 0,
        explanation: "Sau khi trứng rụng, phần nang trứng còn lại biến thành thể vàng tiết Progesterone và Estrogen duy trì niêm mạc tử cung và ức chế chín, rụng trứng mới."
    },
    {
        grade: "11", subject: "sinh", term: "CK2",
        question: "Cơ chế tác dụng chủ yếu của viên thuốc tránh thai hàng ngày (chứa progesterone và estrogen tổng hợp) là gì?",
        options: ["Duy trì nồng độ progesterone và estrogen trong máu cao để ức chế vùng dưới đồi và tuyến yên tiết GnRH, FSH, LH, từ đó ngăn cản trứng chín và rụng", "Làm tiêu hủy hoàn toàn buồng trứng vĩnh viễn", "Kích thích nhiều trứng rụng cùng một lúc", "Chỉ có tác dụng tiêu diệt vi khuẩn đường ruột"],
        answer: 0,
        explanation: "Dựa vào cơ chế liên hệ ngược âm tính: uống viên tránh thai hàng ngày giữ nồng độ progesterone + estrogen cao, ức chế tuyến yên tiết FSH và LH nên trứng không chín và không rụng."
    },

    // ===================================================================
    // 16. CÔNG NGHỆ 11 - GIỮA KÌ 1 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "congnghe", term: "GK1",
        question: "Theo tiêu chuẩn Việt Nam (TCVN 7285:2003) về bản vẽ kĩ thuật, khổ giấy A4 có kích thước chuẩn ( tính theo đơn vị mm) là bao nhiêu?",
        options: ["297 × 210 mm", "420 × 297 mm", "594 × 420 mm", "841 × 594 mm"],
        answer: 0,
        explanation: "Các khổ giấy chính theo TCVN: A0 (1189 × 841), A1 (841 × 594), A2 (594 × 420), A3 (420 × 297) và A4 (297 × 210 mm)."
    },
    {
        grade: "11", subject: "congnghe", term: "GK1",
        question: "Trên bản vẽ kĩ thuật, tỉ lệ nào sau đây là 'tỉ lệ thu nhỏ'?",
        options: ["1 : 2", "2 : 1", "5 : 1", "1 : 1"],
        answer: 0,
        explanation: "Tỉ lệ là tỉ số giữa kích thước đo trên hình biểu diễn và kích thước thực của vật thể. Tỉ lệ 1 : 2 là tỉ lệ thu nhỏ; 1 : 1 là nguyên hình; 2 : 1 là phóng to."
    },
    {
        grade: "11", subject: "congnghe", term: "GK1",
        question: "Trong các loại nét vẽ trên bản vẽ kĩ thuật, 'nét liền đậm' được dùng để biểu diễn yếu tố nào?",
        options: ["Đường bao thấy và cạnh thấy của vật thể", "Đường bao khuất và cạnh khuất", "Đường tâm và đường trục đối xứng", "Đường gióng và đường kích thước"],
        answer: 0,
        explanation: "Nét liền đậm biểu diễn đường bao thấy, cạnh thấy; nét đứt mảnh biểu diễn đường khuất; nét gạch chấm mảnh biểu diễn đường tâm/trục đối xứng; nét liền mảnh biểu diễn đường kích thước, đường gióng."
    },
    {
        grade: "11", subject: "congnghe", term: "GK1",
        question: "Nếu trên bản vẽ kĩ thuật không ghi kèm đơn vị đo sau con số kích thước dài thì đơn vị mặc định được quy ước là gì?",
        options: ["Milimét (mm)", "Xentimét (cm)", "Mét (m)", "Inch (in)"],
        answer: 0,
        explanation: "Theo TCVN về bản vẽ kĩ thuật, kích thước độ dài luôn tính bằng milimét (mm) và không cần ghi đơn vị đo trên bản vẽ."
    },
    {
        grade: "11", subject: "congnghe", term: "GK1",
        question: "Trong phương pháp chiếu góc thứ nhất (tiêu chuẩn Việt Nam và châu Âu), vị trí của 'hình chiếu bằng' và 'hình chiếu cạnh' so với 'hình chiếu đứng' được bố trí như thế nào?",
        options: ["Hình chiếu bằng ở dưới hình chiếu đứng; hình chiếu cạnh ở bên phải hình chiếu đứng", "Hình chiếu bằng ở trên hình chiếu đứng; hình chiếu cạnh ở bên trái hình chiếu đứng", "Ba hình chiếu đặt chồng khít lên nhau", "Hình chiếu cạnh ở dưới hình chiếu bằng"],
        answer: 0,
        explanation: "Trong phương pháp chiếu góc thứ nhất: Hình chiếu đứng ở góc trên bên trái, hình chiếu bằng đặt ngay dưới hình chiếu đứng, và hình chiếu cạnh đặt bên phải hình chiếu đứng."
    },
    {
        grade: "11", subject: "congnghe", term: "GK1",
        question: "Điểm khác biệt cơ bản giữa 'Mặt cắt' và 'Hình cắt' trên bản vẽ kĩ thuật là gì?",
        options: ["Mặt cắt chỉ biểu diễn các đường bao nằm ngay trên mặt phẳng cắt, còn hình cắt biểu diễn cả mặt cắt và các đường bao của vật thể nằm sau mặt phẳng cắt", "Mặt cắt vẽ bằng nét đứt, hình cắt vẽ bằng nét chấm gạch", "Mặt cắt chỉ dùng cho chi tiết gỗ, hình cắt chỉ dùng cho kim loại", "Mặt cắt luôn phóng to gấp đôi hình cắt"],
        answer: 0,
        explanation: "Mặt cắt là hình biểu diễn phần vật thể nằm trên mặt phẳng cắt; còn hình cắt là hình biểu diễn mặt cắt cùng với các đường bao của vật thể ở phía sau mặt phẳng cắt."
    },
    {
        grade: "11", subject: "congnghe", term: "GK1",
        question: "Hình chiếu trục đo vuông góc đều có các góc trục đo (X'O'Y', Y'O'Z', X'O'Z') và các hệ số biến dạng (p, q, r) bằng bao nhiêu?",
        options: ["X'O'Y' = Y'O'Z' = X'O'Z' = 120° và p = q = r = 1", "X'O'Z' = 90°, X'O'Y' = Y'O'Z' = 135° và p = r = 1, q = 0,5", "Tất cả các góc bằng 90° và p = q = r = 0,5", "X'O'Y' = 60° và p = 2"],
        answer: 0,
        explanation: "Hình chiếu trục đo vuông góc đều có 3 góc trục đo bằng nhau bằng 120° và hệ số biến dạng quy ước trên cả 3 trục p = q = r = 1."
    },
    {
        grade: "11", subject: "congnghe", term: "GK1",
        question: "Hình chiếu trục đo xiên góc cân có hệ số biến dạng theo trục O'Y' (trục chiều rộng q) bằng bao nhiêu?",
        options: ["q = 0,5 (trong khi p = r = 1)", "q = 1", "q = 2", "q = 0,82"],
        answer: 0,
        explanation: "Hình chiếu trục đo xiên góc cân có góc X'O'Z' = 90°, hai góc còn lại 135°; hệ số biến dạng theo trục O'X' và O'Z' bằng 1 (p = r = 1), còn theo trục O'Y' giảm một nửa (q = 0,5)."
    },
    {
        grade: "11", subject: "congnghe", term: "GK1",
        question: "Nội dung nào sau đây có trong 'Bản vẽ lắp' nhưng KHÔNG có trong 'Bản vẽ chi tiết'?",
        options: ["Bảng kê (liệt kê tên gọi, số lượng, vật liệu của từng chi tiết trong bộ phận lắp)", "Khung tên", "Hình biểu diễn vật thể", "Kích thước chung"],
        answer: 0,
        explanation: "Bản vẽ lắp diễn tả hình dạng và vị trí tương quan của một nhóm chi tiết được lắp với nhau nên có thêm 'Bảng kê' các chi tiết và kích thước lắp."
    },
    {
        grade: "11", subject: "congnghe", term: "GK1",
        question: "Trong cơ khí chế tạo, hai hợp kim chính của sắt với carbon (kim loại đen) là Thép và Gang được phân biệt dựa trên hàm lượng nguyên tố Carbon (C) ở mốc bao nhiêu phần trăm?",
        options: ["2,14% (Thép có C ≤ 2,14%; Gang có C > 2,14% đến 6,67%)", "0,5% (Thép có C > 0,5%)", "10% (Thép có C > 10%)", "50%"],
        answer: 0,
        explanation: "Hợp kim Fe – C có hàm lượng C ≤ 2,14% là Thép (dẻo, dễ gia công biến dạng), còn hàm lượng C > 2,14% là Gang (cứng, giòn, đúc tốt)."
    },
    {
        grade: "11", subject: "congnghe", term: "GK1",
        question: "Tính chất cơ học đặc trưng cho khả năng của vật liệu cơ khí chống lại sự biến dạng dẻo hoặc phá hủy dưới tác dụng của ngoại lực được gọi là:",
        options: ["Độ bền", "Độ dẻo", "Độ dẫn điện", "Tính chịu ăn mòn hóa học"],
        answer: 0,
        explanation: "Các tính chất cơ học cơ bản của vật liệu gồm: độ bền (chống phá hủy), độ dẻo (khả năng biến dạng vĩnh cửu mà không bị phá hủy) và độ cứng (chống biến dạng cục bộ bề mặt)."
    },
    {
        grade: "11", subject: "congnghe", term: "GK1",
        question: "Nhóm vật liệu nào sau đây thuộc nhóm 'kim loại màu và hợp kim kim loại màu' dùng phổ biến trong cơ khí?",
        options: ["Đồng (Cu), Nhôm (Al) và các hợp kim của chúng (đồng thau, đuy-ra)", "Gang xám và gang cầu", "Thép carbon và thép hợp kim", "Cao su và chất dẻo nhiệt rắn"],
        answer: 0,
        explanation: "Kim loại ngoài sắt và hợp kim sắt được gọi là kim loại màu, phổ biến nhất trong cơ khí là nhôm, đồng và hợp kim của chúng (dẫn điện, dẫn nhiệt tốt, chống ăn mòn cao)."
    },
    {
        grade: "11", subject: "congnghe", term: "GK1",
        question: "Vật liệu được tổ hợp từ hai hay nhiều vật liệu khác nhau (gồm vật liệu nền và vật liệu cốt) tạo nên vật liệu mới có tính năng vượt trội hơn hẳn từng vật liệu thành phần được gọi là:",
        options: ["Vật liệu composite", "Gang trắng", "Thép gió", "Gốm sứ truyền thống"],
        answer: 0,
        explanation: "Vật liệu composite (ví dụ composite cốt sợi carbon, sợi thủy tinh) kết hợp vật liệu cốt chịu lực và vật liệu nền liên kết, tạo ra độ bền riêng rất cao và khối lượng nhẹ."
    },
    {
        grade: "11", subject: "congnghe", term: "GK1",
        question: "Trên bản vẽ mặt bằng tổng thể hoặc bản vẽ nhà, kí hiệu mặt cắt của vật liệu 'bê tông cốt thép' hoặc 'gạch xây' thường được thể hiện ở đâu?",
        options: ["Trên các hình cắt mặt bằng và mặt cắt đứng của công trình", "Chỉ ghi bằng chữ ở ngoài lề giấy", "Trên đường kích thước", "Trong khung tên"],
        answer: 0,
        explanation: "Trong bản vẽ xây dựng, hình cắt mặt bằng (cắt ngang qua cửa sổ) và hình cắt đứng dùng các kí hiệu vật liệu quy ước để thể hiện tường gạch, cột bê tông, cửa đi, cửa sổ."
    },
    {
        grade: "11", subject: "congnghe", term: "GK1",
        question: "Phần mềm nào sau đây là phần mềm hỗ trợ thiết kế và lập bản vẽ kĩ thuật trên máy tính (CAD – Computer Aided Design) phổ biến nhất trong ngành cơ khí và xây dựng?",
        options: ["AutoCAD / SolidWorks", "Microsoft Word", "Adobe Audition", "Windows Media Player"],
        answer: 0,
        explanation: "AutoCAD, SolidWorks, Inventor là các phần mềm CAD chuyên dụng để vẽ kĩ thuật 2D và mô hình hóa 3D chi tiết cơ khí, bản vẽ xây dựng."
    },

    // ===================================================================
    // 17. CÔNG NGHỆ 11 - CUỐI KÌ 1 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "congnghe", term: "CK1",
        question: "Phương pháp gia công cơ khí nào sau đây thuộc nhóm 'gia công không phoi' (chế tạo phôi)?",
        options: ["Đúc, gia công áp lực (rèn, dập) và hàn", "Tiện và phay", "Khoan và doa", "Bào và mài"],
        answer: 0,
        explanation: "Đúc, rèn, dập và hàn là các phương pháp gia công không tách phoi kim loại, thường dùng để chế tạo phôi hoặc tạo hình sản phẩm cơ khí."
    },
    {
        grade: "11", subject: "congnghe", term: "CK1",
        question: "Bản chất của phương pháp 'Đúc kim loại trong khuôn cát' là gì?",
        options: ["Nấu chảy kim loại thành trạng thái lỏng rồi rót vào lòng khuôn có hình dạng, kích thước xác định; sau khi kim loại kết tinh và nguội sẽ thu được vật đúc", "Dùng búa đập mạnh vào phôi kim loại ở trạng thái nguội", "Dùng dao cắt bỏ lớp kim loại thừa trên máy tiện", "Nung nóng chảy cục bộ chỗ nối hai chi tiết bằng tia lửa điện"],
        answer: 0,
        explanation: "Đúc là phương pháp rót kim loại lỏng vào khuôn, chờ kim loại đông đặc kết tinh tạo thành vật đúc có hình dạng giống lòng khuôn."
    },
    {
        grade: "11", subject: "congnghe", term: "CK1",
        question: "Phương pháp 'Hàn hồ quang tay' và 'Hàn hơi (hàn khí)' thuộc nhóm công nghệ hàn nào?",
        options: ["Hàn nóng chảy (nung kim loại tại chỗ nối đến trạng thái nóng chảy để liên kết với nhau)", "Hàn áp lực ở trạng thái rắn", "Ghép bằng bu lông – đai ốc", "Ghép bằng đinh tán"],
        answer: 0,
        explanation: "Hàn hồ quang điện và hàn khí dùng nhiệt của ngọn lửa hồ quang hoặc phản ứng cháy khí (acetylene – oxygen) làm nóng chảy kim loại chỗ nối và que hàn."
    },
    {
        grade: "11", subject: "congnghe", term: "CK1",
        question: "Trên máy tiện vạn năng, khi gia công cắt gọt các chi tiết tròn xoay (như trục bậc, trục trơn, côn), chuyển động cắt chính và chuyển động tiến dao diễn ra như thế nào?",
        options: ["Phôi (chi tiết gia công) quay tròn tạo chuyển động cắt chính; dao tiện chuyển động tịnh tiến dọc hoặc ngang tạo chuyển động tiến dao", "Dao tiện quay tròn tốc độ cao; phôi đứng yên hoàn toàn", "Cả phôi và dao đều đứng yên", "Phôi chuyển động tịnh tiến thẳng; dao quay tròn"],
        answer: 0,
        explanation: "Nguyên lí gia công trên máy tiện: phôi kẹp trên mâm cặp quay tròn (chuyển động chính), còn dao tiện gắn trên bàn dao chuyển động tịnh tiến dọc/ngang (chuyển động tiến dao)."
    },
    {
        grade: "11", subject: "congnghe", term: "CK1",
        question: "Ngược lại với máy tiện, khi gia công mặt phẳng hoặc rãnh trên 'Máy phay', chuyển động quay tròn chính thuộc về bộ phận nào?",
        options: ["Dao phay (dụng cụ cắt có nhiều lưỡi cắt) quay tròn tạo chuyển động chính, còn phôi gắn trên bàn máy chuyển động tịnh tiến", "Phôi quay tròn còn dao phay đứng yên", "Chỉ có bàn máy quay tròn", "Dao phay chỉ chuyển động thẳng lên xuống"],
        answer: 0,
        explanation: "Khi phay, dao phay nhiều lưỡi cắt gắn trên trục chính quay tròn (chuyển động cắt chính), còn phôi kẹp trên bàn máy di chuyển tịnh tiến theo các phương X, Y, Z."
    },
    {
        grade: "11", subject: "congnghe", term: "CK1",
        question: "Phương pháp gia công cắt gọt phổ biến nhất dùng để tạo lỗ trụ mới trên phôi đặc hoặc mở rộng lỗ có sẵn là:",
        options: ["Phương pháp Khoan (trên máy khoan hoặc máy tiện)", "Phương pháp Bào", "Phương pháp Chuốt mặt ngoài", "Phương pháp Cán kim loại"],
        answer: 0,
        explanation: "Khoan sử dụng mũi khoan ruột gà vừa quay tròn vừa tịnh tiến dọc trục để gia công lỗ trên vật đặc hoặc mở rộng lỗ."
    },
    {
        grade: "11", subject: "congnghe", term: "CK1",
        question: "Quy trình công nghệ chế tạo một sản phẩm cơ khí thông thường diễn ra theo trình tự các bước chính nào sau đây?",
        options: ["Bản vẽ kĩ thuật → Chế tạo phôi → Gia công tạo hình chi tiết → Xử lí và bảo vệ bề mặt → Lắp ráp và kiểm tra đóng gói", "Lắp ráp → Đúc phôi → Thiết kế bản vẽ → Sơn chống gỉ", "Sơn phủ bề mặt → Tiện phay → Nấu chảy kim loại", "Đóng gói → Chế tạo phôi → Gia công cắt gọt"],
        answer: 0,
        explanation: "Trình tự chuẩn của quá trình sản xuất cơ khí: Thiết kế bản vẽ → Chế tạo phôi (đúc, rèn, dập) → Gia công cắt gọt → Xử lí nhiệt / bảo vệ bề mặt → Lắp ráp & Kiểm tra chất lượng."
    },
    {
        grade: "11", subject: "congnghe", term: "CK1",
        question: "Thuật ngữ 'Máy công cụ CNC' trong sản xuất cơ khí hiện đại là viết tắt của cụm từ tiếng Anh nào?",
        options: ["Computer Numerical Control (Điều khiển số bằng máy tính)", "Central Network Connection", "Chemical Nano Coating", "Carbon Nickel Composite"],
        answer: 0,
        explanation: "CNC (Computer Numerical Control) là các máy gia công cơ khí (máy tiện CNC, máy phay CNC) được điều khiển tự động theo chương trình số lập trình trên máy tính."
    },
    {
        grade: "11", subject: "congnghe", term: "CK1",
        question: "Ưu điểm vượt trội của việc ứng dụng Robot công nghiệp trong dây chuyền hàn, lắp ráp và sơn ô tô là gì?",
        options: ["Năng suất và độ chính xác lặp lại rất cao, làm việc liên tục 24/7 và thay thế con người trong môi trường độc hại, nguy hiểm", "Không cần sử dụng điện năng hay bảo dưỡng định kì", "Chi phí đầu tư ban đầu bằng không", "Chỉ làm việc được vào ban ngày"],
        answer: 0,
        explanation: "Robot công nghiệp tự động hóa các thao tác nặng nhọc, độc hại (hàn, sơn, bốc xếp phôi nóng) với độ chính xác và năng suất ổn định vượt trội."
    },
    {
        grade: "11", subject: "congnghe", term: "CK1",
        question: "Công nghệ sản xuất bồi đắp (tạo ra vật thể 3 chiều bằng cách đắp từng lớp vật liệu chồng lên nhau từ thiết kế số) được gọi phổ biến là gì?",
        options: ["Công nghệ in 3D (3D Printing / Additive Manufacturing)", "Công nghệ tiện thủ công", "Công nghệ rèn tự do", "Công nghệ dập nguội"],
        answer: 0,
        explanation: "Công nghệ in 3D (gia công bồi đắp) đắp từng lớp vật liệu (nhựa, bột kim loại) theo mô hình 3D CAD, giúp chế tạo nhanh các chi tiết có hình dáng phức tạp."
    },
    {
        grade: "11", subject: "congnghe", term: "CK1",
        question: "Trong dây chuyền sản xuất thông minh của cuộc Cách mạng công nghiệp lần thứ tư (Công nghiệp 4.0), công nghệ nào giúp kết nối các máy móc, cảm biến và thiết bị trong nhà máy qua mạng Internet để trao đổi dữ liệu thời gian thực?",
        options: ["Internet vạn vật công nghiệp (IIoT – Industrial Internet of Things)", "Động cơ hơi nước cổ điển", "Băng tải kéo tay", "Khuôn đúc cát thủ công"],
        answer: 0,
        explanation: "IIoT kết hợp với Trí tuệ nhân tạo (AI), Dữ liệu lớn (Big Data) và Điện toán đám mây tạo nên nhà máy thông minh (Smart Factory) trong Công nghiệp 4.0."
    },
    {
        grade: "11", subject: "congnghe", term: "CK1",
        question: "Góc tạo bởi mặt trước và mặt sau của phần lưỡi cắt trên dao tiện được gọi là góc gì?",
        options: ["Góc sắc (β)", "Góc trước (γ)", "Góc sau (α)", "Góc cắt (δ)"],
        answer: 0,
        explanation: "Trên dao tiện: Góc trước (γ) tạo bởi mặt trước và mặt phẳng đáy; Góc sau (α) tạo bởi mặt sau và mặt phẳng cắt; Góc sắc (β) là góc giữa mặt trước và mặt sau của lưỡi cắt (α + β + γ = 90°)."
    },
    {
        grade: "11", subject: "congnghe", term: "CK1",
        question: "Để bảo vệ chi tiết máy bằng thép không bị ăn mòn (gỉ sét) trong môi trường không khí ẩm, người ta thường áp dụng phương pháp bảo vệ bề mặt nào?",
        options: ["Sơn chống gỉ, mạ kẽm, mạ crôm hoặc nhuộm đen hóa học", "Để chi tiết thép ngoài mưa nắng tự nhiên", "Ngâm chi tiết thép trong dung dịch nước muối", "Dùng giấy nhám chà xát hàng ngày"],
        answer: 0,
        explanation: "Phủ lớp bảo vệ (sơn, tráng men, mạ điện kim loại chống ăn mòn như Zn, Ni, Cr) giúp cách li bề mặt chi tiết thép với tác nhân oxi hóa của môi trường."
    },
    {
        grade: "11", subject: "congnghe", term: "CK1",
        question: "Khi vận hành máy tiện, máy phay, máy khoan hoặc hàn hồ quang điện trong xưởng cơ khí, quy tắc an toàn lao động nào sau đây là BẮT BUỘC?",
        options: ["Mặc quần áo bảo hộ gọn gàng, đeo kính bảo hộ / mặt nạ hàn, kiểm tra nối đất an toàn điện và không dùng tay không gạt phoi khi máy đang quay", "Đeo khăn quàng cổ dài và găng tay sợi xù khi điều khiển mâm cặp đang quay tốc độ cao", "Tháo bỏ che chắn an toàn của đá mài và đai truyền", "Dùng tay chạm vào phôi và mũi dao khi trục chính đang quay"],
        answer: 0,
        explanation: "Trang bị bảo hộ lao động đúng chuẩn và tuân thủ quy trình vận hành máy cắt gọt giúp phòng tránh tai nạn cuốn vào trục quay, bắn phoi nóng hoặc điện giật."
    },
    {
        grade: "11", subject: "congnghe", term: "CK1",
        question: "Giải pháp nào sau đây góp phần bảo vệ môi trường và phát triển bền vững trong sản xuất cơ khí?",
        options: ["Thu gom, phân loại phoi kim loại để tái chế và xử lí triệt để dầu mỡ bôi trơn, nước làm mát thải, khí thải trước khi xả ra môi trường", "Đổ trực tiếp dầu trơn nguội đã qua sử dụng xuống cống thoát nước sinh hoạt", "Xả thẳng khói bụi lò đúc ra khu dân cư không qua lọc bụi", "Đốt chất thải nhựa và cao su ngoài trời"],
        answer: 0,
        explanation: "Sản xuất cơ khí xanh đòi hỏi tái chế phế liệu kim loại, lọc bụi khí thải và xử lí hóa – lí nước thải nhiễm dầu cắt gọt đạt chuẩn môi trường."
    },

    // ===================================================================
    // 18. CÔNG NGHỆ 11 - GIỮA KÌ 2 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "congnghe", term: "GK2",
        question: "Một hệ thống cơ khí động lực hoàn chỉnh (như ô tô, tàu thủy, máy kéo) luôn cấu tạo gồm 3 bộ phận chính kết nối theo sơ đồ nào?",
        options: ["Nguồn động lực → Hệ thống truyền lực → Máy công tác", "Máy công tác → Nguồn động lực → Bánh xe", "Bình nhiên liệu → Khung xe → Đèn chiếu sáng", "Hệ thống phanh → Hệ thống lái → Còi điện"],
        answer: 0,
        explanation: "Cấu trúc chung của hệ thống cơ khí động lực: Nguồn động lực (động cơ) sinh ra cơ năng → Hệ thống truyền lực truyền và biến đổi mômen/tốc độ → Máy công tác thực hiện nhiệm vụ."
    },
    {
        grade: "11", subject: "congnghe", term: "GK2",
        question: "Động cơ đốt trong là loại động cơ nhiệt mà quá trình đốt cháy nhiên liệu sinh nhiệt và quá trình biến đổi nhiệt năng thành cơ năng diễn ra ở đâu?",
        options: ["Diễn ra ngay bên trong xi lanh của động cơ", "Diễn ra ở lò hơi đặt bên ngoài động cơ", "Diễn ra trong bình ắc quy điện", "Diễn ra ở bộ tản nhiệt nước làm mát"],
        answer: 0,
        explanation: "Đúng như tên gọi 'động cơ đốt trong', cả quá trình cháy nhiên liệu và dãn nở sinh công đều diễn ra trực tiếp trong buồng cháy (xi lanh) của động cơ."
    },
    {
        grade: "11", subject: "congnghe", term: "GK2",
        question: "Trong động cơ đốt trong, vị trí mà tại đó pít-tông đổi chiều chuyển động và ở gần tâm trục khuỷu nhất được gọi là gì?",
        options: ["Điểm chết dưới (ĐCD)", "Điểm chết trên (ĐCT)", "Hành trình pít-tông (S)", "Thể tích buồng cháy (V_c)"],
        answer: 0,
        explanation: "Điểm chết là vị trí pít-tông đổi chiều chuyển động: vị trí xa tâm trục khuỷu nhất là Điểm chết trên (ĐCT), vị trí gần tâm trục khuỷu nhất là Điểm chết dưới (ĐCD)."
    },
    {
        grade: "11", subject: "congnghe", term: "GK2",
        question: "Khi pít-tông dịch chuyển được một hành trình S (từ ĐCT xuống ĐCD hoặc từ ĐCD lên ĐCT) thì trục khuỷu của động cơ quay được một góc bằng bao nhiêu độ?",
        options: ["180° (nửa vòng quay, với S = 2R)", "360° (một vòng quay)", "720° (hai vòng quay)", "90°"],
        answer: 0,
        explanation: "Mỗi hành trình pít-tông S = 2R (với R là bán kính quay của trục khuỷu) ứng với góc quay trục khuỷu là 180° (nửa vòng)."
    },
    {
        grade: "11", subject: "congnghe", term: "GK2",
        question: "Tỉ số nén (ε) của động cơ đốt trong được tính bằng tỉ số giữa hai đại lượng thể tích nào?",
        options: ["ε = V_a / V_c = (V_c + V_h) / V_c (Tỉ số giữa thể tích toàn phần và thể tích buồng cháy)", "ε = V_c / V_a", "ε = V_h / V_a", "ε = V_a - V_c"],
        answer: 0,
        explanation: "Tỉ số nén ε = V_a / V_c cho biết hòa khí hoặc không khí trong xi lanh bị nén nhỏ đi bao nhiêu lần khi pít-tông đi từ ĐCD lên ĐCT (động cơ xăng ε ≈ 6–12; động cơ diesel ε ≈ 15–21)."
    },
    {
        grade: "11", subject: "congnghe", term: "GK2",
        question: "Trong một chu trình làm việc của động cơ đốt trong 4 kì (Nạp – Nén – Cháy dãn nở – Thải), pít-tông thực hiện bao nhiêu hành trình và trục khuỷu quay bao nhiêu vòng?",
        options: ["Pít-tông thực hiện 4 hành trình; trục khuỷu quay 2 vòng (720°)", "Pít-tông thực hiện 2 hành trình; trục khuỷu quay 1 vòng (360°)", "Pít-tông thực hiện 4 hành trình; trục khuỷu quay 4 vòng", "Pít-tông thực hiện 1 hành trình; trục khuỷu quay nửa vòng"],
        answer: 0,
        explanation: "Ở động cơ 4 kì, chu trình công tác hoàn thành sau 4 hành trình của pít-tông, tương ứng với 2 vòng quay (720°) của trục khuỷu, trong đó chỉ có 1 kì sinh công."
    },
    {
        grade: "11", subject: "congnghe", term: "GK2",
        question: "Trong 4 kì của động cơ đốt trong 4 kì, kì duy nhất trực tiếp sinh công làm quay trục khuỷu là kì nào và trạng thái của hai xu-páp (nạp, thải) ở kì đó ra sao?",
        options: ["Kì 3 (Kì cháy – dãn nở); cả hai xu-páp nạp và xu-páp thải đều đóng kín", "Kì 1 (Kì nạp); xu-páp nạp mở, xu-páp thải đóng", "Kì 2 (Kì nén); cả hai xu-páp đều mở", "Kì 4 (Kì thải); xu-páp thải mở"],
        answer: 0,
        explanation: "Ở kì cháy – dãn nở (kì nổ) và kì nén, cả hai xu-páp nạp và thải đều phải đóng kín hoàn toàn để áp suất khí cháy đẩy pít-tông từ ĐCT xuống ĐCD sinh công."
    },
    {
        grade: "11", subject: "congnghe", term: "GK2",
        question: "Điểm khác biệt cơ bản trong kì nạp và cách đốt cháy nhiên liệu giữa 'Động cơ Diesel 4 kì' và 'Động cơ Xăng 4 kì' là gì?",
        options: ["Động cơ Diesel ở kì nạp chỉ hút không khí sạch và cuối kì nén nhiên liệu diesel phun vào tự bốc cháy do áp suất, nhiệt độ cao (không dùng bugi)", "Động cơ Diesel hút hòa khí xăng – không khí và dùng bugi bật tia lửa điện", "Động cơ xăng có tỉ số nén cao gấp đôi động cơ Diesel", "Động cơ Diesel không có xu-páp nạp và thải"],
        answer: 0,
        explanation: "Động cơ Diesel nạp không khí sạch, nén ở tỉ số nén rất cao (ε = 15 – 21) làm nhiệt độ khí nén vượt nhiệt độ tự bốc cháy của dầu diesel khi vòi phun phun tơi vào cuối kì nén."
    },
    {
        grade: "11", subject: "congnghe", term: "GK2",
        question: "Trong cơ cấu trục khuỷu thanh truyền của động cơ đốt trong, chi tiết nào làm nhiệm vụ truyền lực giữa pít-tông và trục khuỷu, đồng thời biến chuyển động tịnh tiến của pít-tông thành chuyển động quay tròn của trục khuỷu?",
        options: ["Thanh truyền", "Xu-páp", "Bánh đà", "Trục cam"],
        answer: 0,
        explanation: "Thanh truyền có đầu nhỏ lắp với chốt pít-tông và đầu to lắp với chốt khuỷu, giúp truyền lực và biến đổi chuyển động tịnh tiến khứ hồi của pít-tông thành chuyển động quay của trục khuỷu."
    },
    {
        grade: "11", subject: "congnghe", term: "GK2",
        question: "Nhiệm vụ của 'Cơ cấu phân phối khí' trong động cơ đốt trong 4 kì là gì?",
        options: ["Đóng mở các cửa nạp và cửa thải (xu-páp) đúng lúc để động cơ thực hiện quá trình nạp khí mới vào xi lanh và thải khí đã cháy ra ngoài", "Phun nhiên liệu vào buồng cháy", "Bơm dầu bôi trơn lên các bề mặt ma sát", "Làm mát thành xi lanh bằng nước"],
        answer: 0,
        explanation: "Cơ cấu phân phối khí dùng trục cam dẫn động đóng mở các xu-páp nạp và xu-páp thải theo đúng pha phối khí của chu trình."
    },
    {
        grade: "11", subject: "congnghe", term: "GK2",
        question: "Trong hệ thống bôi trơn cưỡng bức của động cơ đốt trong, bộ phận nào có nhiệm vụ giữ lại khi dầu bị quá bẩn hoặc khi bầu lọc tinh bị tắc, van nào sẽ mở để dầu vẫn đi tắt lên bôi trơn các bề mặt ma sát mà không làm cháy ổ trục?",
        options: ["Van an toàn ở bơm dầu và van khống chế (van перепуск / bypass) ở bầu lọc dầu", "Van hằng nhiệt của két nước", "Xu-páp thải", "Vòi phun nhiên liệu"],
        answer: 0,
        explanation: "Khi bầu lọc dầu bị tắc, van khống chế mở ra cho dầu đi tắt thẳng lên đường dầu chính để đảm bảo các cổ trục không bị thiếu dầu bôi trơn."
    },
    {
        grade: "11", subject: "congnghe", term: "GK2",
        question: "Trong hệ thống làm mát bằng nước tuần hoàn cưỡng bức của động cơ ô tô, 'Van hằng nhiệt' có tác dụng gì?",
        options: ["Tự động điều chỉnh lưu lượng nước qua két làm mát theo nhiệt độ động cơ (khi nước còn lạnh thì cho quay về trước bơm để động cơ nhanh đạt nhiệt độ làm việc tối ưu)", "Đun sôi nước làm mát trước khi nổ máy", "Lọc sạch cặn bẩn trong dầu bôi trơn", "Hòa trộn xăng với nước làm mát"],
        answer: 0,
        explanation: "Van hằng nhiệt giúp giữ nhiệt độ nước làm mát luôn ở mức tối ưu (khoảng 80–95 °C): khi máy mới nổ còn nguội thì đóng đường ra két nước, khi máy quá nóng thì mở hoàn toàn cho nước qua két giải nhiệt."
    },
    {
        grade: "11", subject: "congnghe", term: "GK2",
        question: "So với hệ thống nhiên liệu dùng bộ chế hòa khí truyền thống, 'Hệ thống phun xăng điện tử (EFI)' trên ô tô, xe máy hiện đại có ưu điểm nổi bật nào?",
        options: ["Điều chỉnh chính xác tỉ lệ hòa khí theo mọi chế độ làm việc của động cơ nhờ bộ điều khiển điện tử ECU và các cảm biến, giúp tiết kiệm nhiên liệu và giảm khí thải độc hại", "Không cần dùng bơm xăng và vòi phun", "Không cần sử dụng điện từ ắc quy", "Chỉ hoạt động được khi xe chạy ở tốc độ cố định"],
        answer: 0,
        explanation: "Hệ thống phun xăng điện tử dùng các cảm biến gửi tín hiệu về ECU để tính toán lượng xăng phun tối ưu ở từng chu trình, tiết kiệm nhiên liệu và giảm ô nhiễm môi trường."
    },
    {
        grade: "11", subject: "congnghe", term: "GK2",
        question: "Trong hệ thống nhiên liệu động cơ Diesel, hai bộ phận có độ chính xác gia công cơ khí cực cao để tạo áp suất nhiên liệu lớn và phun tơi dầu diesel vào buồng cháy là:",
        options: ["Bơm cao áp và Vòi phun", "Bộ chế hòa khí và Bugi", "Bình ắc quy và Máy phát điện", "Két nước và Quạt gió"],
        answer: 0,
        explanation: "Ở động cơ Diesel, bơm cao áp cung cấp nhiên liệu với áp suất rất lớn (hàng trăm đến hàng nghìn bar) qua vòi phun để phun sương nhiên liệu đúng thời điểm cuối kì nén."
    },
    {
        grade: "11", subject: "congnghe", term: "GK2",
        question: "Trên ô tô và xe máy hiện đại, hệ thống khởi động bằng động cơ điện một chiều sử dụng nguồn năng lượng từ đâu để quay trục khuỷu động cơ lúc mới đề máy?",
        options: ["Từ bình ắc quy (accu) trên xe", "Từ sức tay quay trực tiếp của người lái", "Từ áp lực gió tự nhiên", "Từ nhiệt lượng của ống xả"],
        answer: 0,
        explanation: "Khi bấm nút khởi động (đề), dòng điện một chiều từ bình ắc quy cấp cho động cơ điện khởi động làm quay bánh đà và trục khuỷu để động cơ tự nổ máy."
    },

    // ===================================================================
    // 19. CÔNG NGHỆ 11 - CUỐI KÌ 2 (ĐỦ 15 CÂU)
    // ===================================================================
    {
        grade: "11", subject: "congnghe", term: "CK2",
        question: "Trên hệ thống truyền lực của ô tô (động cơ đặt trước, cầu chủ động phía sau), các cụm chi tiết truyền mômen quay từ động cơ tới bánh xe chủ động được sắp xếp theo thứ tự nào?",
        options: ["Động cơ → Li hợp (côn) → Hộp số → Truyền lực các-đăng → Truyền lực chính và bộ vi sai → Bán trục → Bánh xe chủ động", "Động cơ → Bánh xe → Hộp số → Li hợp", "Động cơ → Bộ vi sai → Li hợp → Hộp số", "Bánh xe → Các-đăng → Li hợp → Động cơ"],
        answer: 0,
        explanation: "Sơ đồ hệ thống truyền lực ô tô: Động cơ → Li hợp → Hộp số → Truyền lực các-đăng → Truyền lực chính & Vi sai → Bán trục → Bánh xe chủ động."
    },
    {
        grade: "11", subject: "congnghe", term: "CK2",
        question: "Trong hệ thống truyền lực trên ô tô, xe máy, bộ phận 'Li hợp (bộ côn)' có nhiệm vụ chính là gì?",
        options: ["Nối hoặc ngắt tạm thời dòng truyền mômen từ động cơ đến hộp số (để sang số êm dịu, dừng xe ngắn hạn và bảo vệ hệ thống truyền lực khi quá tải)", "Thay đổi tỉ số truyền để xe chạy tiến hoặc chạy lùi", "Phân phối mômen cho hai bánh xe quay với tốc độ khác nhau khi vào cua", "Giảm tốc độ góc và tăng mômen ở cầu chủ động"],
        answer: 0,
        explanation: "Li hợp đặt giữa động cơ và hộp số dùng để ngắt tạm thời truyền động khi chuyển số hoặc phanh dừng xe và trượt bảo vệ khi quá tải."
    },
    {
        grade: "11", subject: "congnghe", term: "CK2",
        question: "Bộ phận nào trong cầu chủ động của ô tô giúp hai bánh xe chủ động bên trái và bên phải có thể quay với vận tốc khác nhau khi xe chuyển động vào đường vòng (vào cua) hoặc đi trên đường gồ ghề mà không bị trượt lết bánh xe?",
        options: ["Bộ vi sai", "Trục các-đăng", "Đĩa ma sát của li hợp", "Bánh đà động cơ"],
        answer: 0,
        explanation: "Khi ô tô vào cua, bánh xe phía ngoài đi quãng đường dài hơn bánh phía trong; bộ vi sai tự động phân phối chuyển động để hai bán trục quay với tốc độ khác nhau."
    },
    {
        grade: "11", subject: "congnghe", term: "CK2",
        question: "Trên tàu thủy dùng động cơ đốt trong, bộ phận công tác cuối cùng trực tiếp đẩy nước để tạo lực đẩy cho tàu tiến hoặc lùi là gì?",
        options: ["Chân vịt (Propeller)", "Bánh xe cao su", "Truyền lực các-đăng ô tô", "Xích tải máy kéo"],
        answer: 0,
        explanation: "Hệ thống truyền lực trên tàu thủy gồm: Động cơ → Li hợp → Hộp số (kèm bộ đảo chiều) → Hệ trục tàu → Chân vịt quay đẩy nước."
    },
    {
        grade: "11", subject: "congnghe", term: "CK2",
        question: "Ở máy phát điện dự phòng kéo bởi động cơ đốt trong, vì sao tốc độ quay của trục khuỷu động cơ cần phải được bộ điều tốc giữ ổn định gần như không đổi khi phụ tải thay đổi?",
        options: ["Để giữ cho tần số (f = 50 Hz) và điện áp của dòng điện xoay chiều phát ra luôn ổn định, không làm hỏng thiết bị điện", "Để tiết kiệm nước làm mát", "Để làm giảm khối lượng máy phát", "Để máy phát điện có thể tự di chuyển trên đường"],
        answer: 0,
        explanation: "Tần số dòng điện xoay chiều tỉ lệ thuận với tốc độ quay của rôto máy phát (f = p.n/60), nên động cơ kéo máy phát phải giữ vòng quay ổn định."
    },
    {
        grade: "11", subject: "congnghe", term: "CK2",
        question: "Trong công nghệ chăn nuôi hiện đại, khái niệm 'Giống vật nuôi' được hiểu là:",
        options: ["Quần thể vật nuôi cùng loài, cùng nguồn gốc, có ngoại hình và cấu trúc di truyền tương tự nhau, hình thành do bàn tay con người chọn lọc và có số lượng đủ lớn để nhân giống", "Bất kì tập hợp các con vật khác loài nhốt chung trong một trang trại", "Những động vật hoang dã sống tự nhiên trong rừng nguyên sinh", "Một cá thể vật nuôi đột biến duy nhất"],
        answer: 0,
        explanation: "Giống vật nuôi là sản phẩm lao động sáng tạo của con người: cùng loài, có đặc điểm ngoại hình và năng suất ổn định, di truyền được cho đời sau và đạt số lượng quy định."
    },
    {
        grade: "11", subject: "congnghe", term: "CK2",
        question: "Phương pháp nhân giống cho giao phối giữa các cá thể đực và cái thuộc HAI GIỐNG KHÁC NHAU nhằm tạo ra con lai F1 có ưu thế lai cao (lớn nhanh, tiêu tốn ít thức ăn) để nuôi lấy thịt thương phẩm được gọi là gì?",
        options: ["Lai kinh tế", "Nhân giống thuần chủng", "Giao phối cận huyết", "Chọn lọc hàng loạt"],
        answer: 0,
        explanation: "Lai kinh tế tận dụng ưu thế lai ở thế hệ con lai F1 (toàn bộ con lai F1 được dùng làm thương phẩm lấy thịt, trứng chứ không dùng làm giống tiếp vì đời sau sẽ phân tính giảm ưu thế lai)."
    },
    {
        grade: "11", subject: "congnghe", term: "CK2",
        question: "Kĩ thuật 'Thụ tinh nhân tạo' trong chăn nuôi bò, lợn mang lại lợi ích vượt trội nào so với nhảy trực tiếp tự nhiên?",
        options: ["Khai thác tối đa tiềm năng di truyền của con đực giống tốt (một lần lấy tinh pha loãng phối được cho nhiều con cái), bảo quản tinh đông lạnh lâu dài và hạn chế lây truyền bệnh qua đường sinh dục", "Không cần nuôi bất kì con đực giống nào trên thế giới", "Giúp vật nuôi không cần ăn thức ăn vẫn lớn", "Rút ngắn thời gian mang thai của bò mẹ từ 9 tháng xuống 1 tháng"],
        answer: 0,
        explanation: "Thụ tinh nhân tạo giúp nhân nhanh giống tốt với chi phí thấp, vận chuyển tinh đông lạnh trong nitrogen lỏng (-196 °C) đi xa và phòng ngừa bệnh truyền nhiễm sinh sản."
    },
    {
        grade: "11", subject: "congnghe", term: "CK2",
        question: "Công nghệ sinh học hiện đại nào trong nhân giống bò sữa cho phép lấy nhiều phôi từ một bò mẹ cao sản (nhờ gây rụng trứng hàng loạt) rồi cấy vào tử cung của những bò cái nhận phôi bình thường để mang thai hộ?",
        options: ["Công nghệ cấy truyền phôi (MOET)", "Phương pháp ấp trứng nhân tạo", "Phương pháp thiến vật nuôi đực", "Phương pháp ủ chua thức ăn xanh"],
        answer: 0,
        explanation: "Công nghệ cấy truyền phôi giúp khai thác triệt để tiềm năng di truyền của cả con đực giống và con cái giống cao sản quý hiếm."
    },
    {
        grade: "11", subject: "congnghe", term: "CK2",
        question: "Trong khẩu phần thức ăn chăn nuôi, nhóm chất dinh dưỡng nào đóng vai trò chính là nguyên liệu kiến tạo tế bào cơ thể, tạo cơ bắp, sữa, trứng và các enzyme, kháng thể?",
        options: ["Protein (chất đạm) và các amino acid thiết yếu", "Chỉ có nước uống", "Chất xơ thô không tiêu hóa", "Muối ăn (NaCl)"],
        answer: 0,
        explanation: "Protein cung cấp các amino acid để tổng hợp protein cấu trúc (cơ, trứng, sữa) và protein chức năng (enzyme, hormone, kháng thể) cho vật nuôi."
    },
    {
        grade: "11", subject: "congnghe", term: "CK2",
        question: "Phương pháp chế biến thức ăn thô xanh (cỏ voi, thân cây ngô sau thu hoạch) bằng cách cắt nhỏ, nén chặt trong hố/túi kín yếm khí để vi khuẩn lactic lên men giúp bảo quản thức ăn lâu dài qua mùa đông được gọi là:",
        options: ["Phương pháp ủ chua thức ăn xanh", "Phương pháp rang nổ hạt ngũ cốc", "Phương pháp ép viên nhiệt độ cao", "Phương pháp đốt thành tro"],
        answer: 0,
        explanation: "Ủ chua thức ăn thô xanh trong điều kiện yếm khí tạo môi trường pH thấp (nhờ lactic acid) ức chế vi khuẩn gây thối, giúp thức ăn có mùi thơm chua dịu, giàu dinh dưỡng và bảo quản được nhiều tháng."
    },
    {
        grade: "11", subject: "congnghe", term: "CK2",
        question: "Biện pháp phòng bệnh chủ động, hiệu quả và kinh tế nhất để ngăn chặn các dịch bệnh truyền nhiễm nguy hiểm ở vật nuôi (như dịch tả lợn, lở mồm long móng, cúm gia cầm) là gì?",
        options: ["Tiêm phòng vaccine đầy đủ đúng lịch kết hợp thực hiện nghiêm ngặt an toàn sinh học (vệ sinh, sát trùng chuồng trại, cách li kiểm dịch)", "Trộn thật nhiều thuốc kháng sinh liều cao vào thức ăn hàng ngày cho mọi vật nuôi khỏe mạnh", "Chỉ điều trị khi toàn bộ đàn vật nuôi đã phát bệnh nặng", "Đóng kín hoàn toàn chuồng nuôi không cho thông gió"],
        answer: 0,
        explanation: "Tiêm vaccine tạo miễn dịch chủ động kết hợp chăn nuôi an toàn sinh học là nguyên tắc vàng 'Phòng bệnh hơn chữa bệnh', đồng thời tránh lạm dụng kháng sinh gây tồn dư và kháng thuốc."
    },
    {
        grade: "11", subject: "congnghe", term: "CK2",
        question: "Trong chăn nuôi gà, lợn hiện đại, công nghệ sử dụng 'Đệm lót sinh học' (trấu, mùn cưa trộn chế phẩm vi sinh vật có lợi) trên nền chuồng có tác dụng chính là gì?",
        options: ["Phân hủy tại chỗ phân và nước tiểu vật nuôi, khử mùi hôi khí độc (NH₃, H₂S), giảm ô nhiễm môi trường và giữ ấm nền chuồng", "Làm thức ăn thay thế hoàn toàn cho cám công nghiệp", "Làm tăng độ ẩm nền chuồng lên 100%", "Tiêu diệt hết mọi vi sinh vật phân giải trong tự nhiên"],
        answer: 0,
        explanation: "Hệ vi sinh vật hữu ích trong đệm lót sinh học lên men phân hủy chất thải ngay trên nền chuồng, triệt tiêu mùi hôi, giảm công rửa chuồng và bảo vệ sức khỏe vật nuôi."
    },
    {
        grade: "11", subject: "congnghe", term: "CK2",
        question: "Khi xử lí chất thải chăn nuôi bằng 'Hầm Biogas (công trình khí sinh học)' yếm khí, loại khí đốt chủ yếu được tạo ra dùng để đun nấu hoặc chạy máy phát điện trang trại là khí nào?",
        options: ["Khí Methane (CH₄ – chiếm khoảng 60% – 70% thể tích khí sinh học)", "Khí Oxygen (O₂)", "Khí Chlorine (Cl₂)", "Khí Argon (Ar)"],
        answer: 0,
        explanation: "Vi sinh vật kị khí trong hầm Biogas phân giải chất hữu cơ trong phân vật nuôi tạo thành hỗn hợp khí sinh học mà thành phần cháy chính là khí methane (CH₄)."
    },
    {
        grade: "11", subject: "congnghe", term: "CK2",
        question: "Mô hình 'Chăn nuôi công nghệ cao / Chăn nuôi thông minh' hiện nay ứng dụng các công nghệ nào để nâng cao năng suất và phúc lợi động vật?",
        options: ["Chuồng kín điều khiển vi khí hậu tự động, hệ thống cho ăn – uống tự động, gắn chip/cảm biến IoT theo dõi sức khỏe từng cá thể và robot vệ sinh chuồng trại", "Chăn thả tự do hoàn toàn không kiểm soát dịch bệnh", "Không sử dụng bất kì thiết bị điện hay vaccine nào", "Chỉ ghi chép sổ sách thủ công sau khi xuất bán"],
        answer: 0,
        explanation: "Chăn nuôi thông minh ứng dụng cảm biến IoT, tự động hóa điều hòa nhiệt – ẩm, cho ăn theo khẩu phần chính xác và giám sát sớm dấu hiệu bệnh."
    },

    // ===================================================================
    // KHỐI 10 - ĐỊA LÍ - GIỮA KÌ 1 (GK1 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "10", subject: "dia", term: "GK1",
        question: "Phương pháp kí hiệu trên bản đồ thường được dùng để thể hiện các đối tượng địa lí có đặc điểm nào?",
        options: ["Phân bố theo những điểm cụ thể hoặc tập trung ở một nơi", "Phân bố theo các tuyến hoặc dải hẹp kéo dài", "Phân bố phân tán lẻ tẻ bằng các điểm chấm", "Phân bố theo các diện tích khoanh vùng lớn"],
        answer: 0,
        explanation: "Phương pháp kí hiệu được dùng để biểu hiện các đối tượng địa lí phân bố theo những điểm cụ thể như sân bay, mỏ khoáng sản, trung tâm công nghiệp, đỉnh núi."
    },
    {
        grade: "10", subject: "dia", term: "GK1",
        question: "Để thể hiện hướng di chuyển của bão, dòng biển hoặc các luồng di dân trên bản đồ, người ta sử dụng phương pháp nào?",
        options: ["Phương pháp đường chuyển động", "Phương pháp kí hiệu đường", "Phương pháp khoanh vùng", "Phương pháp chấm điểm"],
        answer: 0,
        explanation: "Phương pháp đường chuyển động dùng các mũi tên để thể hiện hướng di chuyển, tốc độ và khối lượng của các đối tượng địa lí chuyển động."
    },
    {
        grade: "10", subject: "dia", term: "GK1",
        question: "Hệ thống định vị toàn cầu (GPS) có chức năng cơ bản và ứng dụng rộng rãi nhất là:",
        options: ["Xác định chính xác vị trí tọa độ địa lí, độ cao và tốc độ di chuyển của vật thể trên bề mặt Trái Đất", "Dự báo chính xác 100% thời điểm động đất xảy ra", "Điều khiển hoạt động phun trào của núi lửa", "Đo độ sâu tuyệt đối của tâm Trái Đất"],
        answer: 0,
        explanation: "GPS (Global Positioning System) thu tín hiệu từ các vệ tinh nhân tạo để xác định vị trí tọa độ (vĩ độ, kinh độ), độ cao và tốc độ di chuyển của đối tượng trên mặt đất."
    },
    {
        grade: "10", subject: "dia", term: "GK1",
        question: "Hệ quả địa lí quan trọng nhất sinh ra do chuyển động tự quay quanh trục từ tây sang đông của Trái Đất là gì?",
        options: ["Hiện tượng ngày đêm luân phiên và giờ trên Trái Đất", "Các mùa trong năm luân phiên biến đổi", "Hiện tượng ngày đêm dài ngắn theo mùa", "Sự thay đổi nhiệt độ theo vĩ độ địa lí"],
        answer: 0,
        explanation: "Do Trái Đất có hình cầu và tự quay quanh trục theo hướng từ tây sang đông nên mọi nơi trên bề mặt Trái Đất lần lượt được Mặt Trời chiếu sáng, sinh ra hiện tượng ngày đêm luân phiên và giờ địa phương."
    },
    {
        grade: "10", subject: "dia", term: "GK1",
        question: "Bề mặt Trái Đất được chia làm 24 múi giờ, mỗi múi giờ rộng bao nhiêu độ kinh tuyến?",
        options: ["15 độ kinh tuyến", "30 độ kinh tuyến", "10 độ kinh tuyến", "45 độ kinh tuyến"],
        answer: 0,
        explanation: "Trái Đất quay 360° trong 24 giờ, do đó mỗi múi giờ tương ứng với 360° / 24 = 15° kinh tuyến."
    },
    {
        grade: "10", subject: "dia", term: "GK1",
        question: "Đường chuyển ngày quốc tế được quy ước đi qua kinh tuyến nào?",
        options: ["Kinh tuyến 180° giữa Thái Bình Dương", "Kinh tuyến 0° đi qua đài thiên văn Greenwich", "Kinh tuyến 90° Đông", "Xích đạo (Vĩ tuyến 0°)"],
        answer: 0,
        explanation: "Kinh tuyến 180° ở giữa Thái Bình Dương được chọn làm đường chuyển ngày quốc tế: đi từ tây sang đông qua đường này thì lùi lại 1 ngày lịch, đi từ đông sang tây thì cộng thêm 1 ngày lịch."
    },
    {
        grade: "10", subject: "dia", term: "GK1",
        question: "Lực Cô-ri-ô-lit (Coriolis) làm cho các vật thể chuyển động trên bề mặt Trái Đất ở Bán cầu Bắc bị lệch hướng như thế nào so với hướng chuyển động ban đầu?",
        options: ["Lệch về bên phải", "Lệch về bên trái", "Không bị lệch hướng", "Lệch lên phía cực"],
        answer: 0,
        explanation: "Do lực quán tính Cô-ri-ô-lit sinh ra từ chuyển động tự quay của Trái Đất, vật thể chuyển động ở Bán cầu Bắc bị lệch sang bên phải, còn ở Bán cầu Nam bị lệch sang bên trái theo hướng di chuyển."
    },
    {
        grade: "10", subject: "dia", term: "GK1",
        question: "Hiện tượng các mùa trong năm và hiện tượng ngày đêm dài ngắn theo mùa trên Trái Đất là hệ quả của chuyển động nào?",
        options: ["Chuyển động của Trái Đất quanh Mặt Trời với trục nghiêng không đổi phương", "Chuyển động tự quay quanh trục của Trái Đất", "Chuyển động tự quay của Mặt Trăng quanh Trái Đất", "Sự di chuyển của các mảng kiến tạo"],
        answer: 0,
        explanation: "Khi chuyển động tịnh tiến quanh Mặt Trời, trục Trái Đất nghiêng 66°33' so với mặt phẳng quỹ đạo và không đổi phương, khiến hai bán cầu luân phiên ngả về phía Mặt Trời sinh ra mùa và ngày đêm dài ngắn theo mùa."
    },
    {
        grade: "10", subject: "dia", term: "GK1",
        question: "Cấu trúc bên trong của Trái Đất theo thứ tự từ ngoài vào trong gồm có các lớp nào?",
        options: ["Vỏ Trái Đất, lớp Manti (Mantle), nhân Trái Đất (Core)", "Vỏ Trái Đất, thạch quyển, nhân Trái Đất", "Thạch quyển, khí quyển, thủy quyển", "Lớp Manti, vỏ Trái Đất, nhân ngoài"],
        answer: 0,
        explanation: "Từ ngoài vào trong, Trái Đất gồm 3 lớp chính: Vỏ Trái Đất (dày 5-70 km), lớp Manti (từ dưới vỏ đến độ sâu 2900 km) và Nhân Trái Đất (từ 2900 km đến tâm 6370 km)."
    },
    {
        grade: "10", subject: "dia", term: "GK1",
        question: "Thạch quyển (Lithosphere) bao gồm các bộ phận nào của Trái Đất?",
        options: ["Vỏ Trái Đất và phần trên cùng của lớp Manti (đến độ sâu khoảng 100 km)", "Toàn bộ lớp Manti và nhân Trái Đất", "Chỉ riêng phần vỏ lục địa", "Chỉ riêng tầng trầm tích và tầng đá granit"],
        answer: 0,
        explanation: "Thạch quyển là lớp vỏ cứng ngoài cùng của Trái Đất, bao gồm vỏ Trái Đất và phần trên cùng của lớp manti trên (đến độ sâu khoảng 100 km), nằm trên quyển mềm."
    },
    {
        grade: "10", subject: "dia", term: "GK1",
        question: "Thuyết kiến tạo mảng cho rằng thạch quyển được cấu tạo từ bao nhiêu mảng kiến tạo lớn?",
        options: ["7 mảng kiến tạo lớn và một số mảng nhỏ", "3 mảng kiến tạo khổng lồ", "12 mảng kiến tạo hoàn toàn bằng nhau", "5 mảng kiến tạo tương ứng 5 châu lục"],
        answer: 0,
        explanation: "Thuyết kiến tạo mảng khẳng định thạch quyển được chia thành 7 mảng kiến tạo lớn (Thái Bình Dương, Bắc Mỹ, Nam Mỹ, Á - Âu, châu Phi, Ấn Độ - Ô-xtrây-li-a, Nam Cực) và nhiều mảng nhỏ trôi dạt trên quyển mềm."
    },
    {
        grade: "10", subject: "dia", term: "GK1",
        question: "Khi hai mảng kiến tạo xô húc (dồn ép) vào nhau, kết quả địa hình thường hình thành là gì?",
        options: ["Các dãy núi uốn nếp trẻ đồ sộ và các vực biển sâu kèm động đất, núi lửa", "Các sống núi ngầm giữa đại dương", "Các bồn trũng tách giãn lục địa phẳng lặng", "Các đồng bằng châu thổ bồi tụ thấp"],
        answer: 0,
        explanation: "Khi hai mảng kiến tạo xô vào nhau (như mảng Ấn Độ xô vào mảng Á - Âu), lớp trầm tích bị nén ép tạo thành các dãy núi uốn nếp cao đồ sộ (dãy Himalaya) hoặc rãnh vực đại dương sâu kèm động đất, núi lửa."
    },
    {
        grade: "10", subject: "dia", term: "GK1",
        question: "Nội lực là lực sinh ra từ nguồn nào sau đây?",
        options: ["Từ bên trong lòng Trái Đất do năng lượng phân hủy phóng xạ và chuyển dịch vật chất", "Từ năng lượng bức xạ của Mặt Trời", "Từ tác động của gió và dòng nước chảy", "Từ lực hấp dẫn của Mặt Trăng"],
        answer: 0,
        explanation: "Nội lực là lực phát sinh từ bên trong Trái Đất, nguồn năng lượng chủ yếu là do sự phân hủy các chất phóng xạ, sự dịch chuyển của các dòng đối lưu nhiệt và phản ứng hóa học."
    },
    {
        grade: "10", subject: "dia", term: "GK1",
        question: "Hiện tượng uốn nếp xảy ra do tác động của nội lực ở những vùng đá có tính chất như thế nào?",
        options: ["Đá có độ dẻo cao (như đá trầm tích)", "Đá có độ cứng và giòn cao", "Đá magma xâm nhập nguội lạnh sâu", "Chỉ xảy ra ở đáy vực biển sâu"],
        answer: 0,
        explanation: "Khi đá có tính dẻo chịu tác dụng của lực nén ép theo phương nằm ngang, các lớp đá bị uốn cong thành các nếp uốn uốn lượn mà không bị đứt gãy phá vỡ liên tục."
    },
    {
        grade: "10", subject: "dia", term: "GK1",
        question: "Ngoại lực là lực sinh ra từ đâu và có xu hướng tác động lên địa hình bề mặt Trái Đất như thế nào?",
        options: ["Sinh ra ở bên ngoài, trên bề mặt Trái Đất (chủ yếu do Mặt Trời); có xu hướng san bằng, hạ thấp chỗ cao và lấp đầy chỗ trũng", "Sinh ra sâu trong lòng Trái Đất; có xu hướng làm địa hình gồ ghề hơn", "Sinh ra từ ma sát khí quyển; làm gia tăng chiều cao các đỉnh núi", "Sinh ra từ lực hút Mặt Trăng; chỉ tác động vào nước biển"],
        answer: 0,
        explanation: "Ngoại lực sinh ra từ bên ngoài bề mặt Trái Đất (năng lượng bức xạ Mặt Trời, gió, nước, sinh vật), gồm các quá trình phong hóa, bóc mòn, vận chuyển, bồi tụ có xu hướng san phẳng các gồ ghề do nội lực tạo ra."
    },

    // ===================================================================
    // KHỐI 10 - ĐỊA LÍ - CUỐI KÌ 1 (CK1 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "10", subject: "dia", term: "CK1",
        question: "Tầng đối lưu của khí quyển có đặc điểm quan trọng nào sau đây?",
        options: ["Chứa khoảng 80% khối lượng không khí, 3/4 lượng hơi nước và là nơi diễn ra mọi hiện tượng thời tiết (mây, mưa, sấm chớp)", "Nhiệt độ tăng dần theo độ cao và không có gió", "Tập trung phần lớn khí ozone bảo vệ sinh vật", "Nhiệt độ đạt tới hàng nghìn độ C và không khí cực loãng"],
        answer: 0,
        explanation: "Tầng đối lưu là tầng thấp nhất của khí quyển (đến 8-16 km), chứa 80% khối lượng khí quyển và hầu hết hơi nước, nhiệt độ giảm dần theo độ cao (trung bình 0,6 °C/100m) và diễn ra mây, mưa, bão."
    },
    {
        grade: "10", subject: "dia", term: "CK1",
        question: "Nhiệt độ không khí trung bình năm trên bề mặt Trái Đất thay đổi như thế nào theo vĩ độ từ Xích đạo về hai cực?",
        options: ["Giảm dần từ Xích đạo về hai cực", "Tăng dần từ Xích đạo về hai cực", "Cao nhất ở hai cực và thấp nhất ở Xích đạo", "Không thay đổi theo vĩ độ"],
        answer: 0,
        explanation: "Càng về gần cực, góc nhập xạ (góc chiếu của tia sáng Mặt Trời) càng nhỏ nên lượng nhiệt nhận được càng ít, khiến nhiệt độ không khí trung bình năm giảm dần từ Xích đạo về hai cực."
    },
    {
        grade: "10", subject: "dia", term: "CK1",
        question: "Nguyên nhân chủ yếu làm cho khí áp giảm khi độ cao địa hình tăng lên là gì?",
        options: ["Càng lên cao không khí càng loãng, mật độ phân tử khí giảm và sức nén của cột không khí giảm", "Càng lên cao nhiệt độ càng tăng mạnh làm nở không khí", "Càng lên cao lượng hơi nước trong không khí tăng vọt", "Càng lên cao lực hấp dẫn của Trái Đất tăng lên"],
        answer: 0,
        explanation: "Khí áp là sức nén của không khí lên bề mặt Trái Đất; càng lên cao không khí càng loãng, trọng lượng cột không khí phía trên giảm nên khí áp giảm."
    },
    {
        grade: "10", subject: "dia", term: "CK1",
        question: "Gió Mậu dịch (gió Tín phong) thổi quanh năm từ khu vực nào về khu vực nào?",
        options: ["Từ áp cao cận nhiệt đới về áp thấp xích đạo", "Từ áp cao cực về áp thấp ôn đới", "Từ áp cao cận nhiệt đới về áp thấp ôn đới", "Từ lục địa ra đại dương vào mùa đông"],
        answer: 0,
        explanation: "Gió Mậu dịch thổi từ các đai áp cao cận nhiệt đới (vĩ độ khoảng 30° Bắc và Nam) về đai áp thấp xích đạo, hướng đông bắc ở Bán cầu Bắc và hướng đông nam ở Bán cầu Nam."
    },
    {
        grade: "10", subject: "dia", term: "CK1",
        question: "Gió Tây ôn đới hoạt động ở khu vực vĩ độ nào và có tính chất ẩm ướt?",
        options: ["Từ vĩ độ cận nhiệt đới (khoảng 30° - 35°) lên vĩ độ ôn đới (khoảng 60°)", "Từ hai cực về vĩ độ 60°", "Từ xích đạo lên chí tuyến", "Chỉ thổi sâu trong nội địa các hoang mạc"],
        answer: 0,
        explanation: "Gió Tây ôn đới thổi từ các khu áp cao cận nhiệt về các khu áp thấp ôn đới, thổi từ đại dương vào lục địa nên đem lại nhiều mưa và độ ẩm cao."
    },
    {
        grade: "10", subject: "dia", term: "CK1",
        question: "Khu vực nào trên Trái Đất thường có lượng mưa trung bình năm lớn nhất thế giới?",
        options: ["Khu vực Xích đạo do áp thấp, nhiệt độ cao, bốc hơi mạnh và diện tích đại dương lớn", "Khu vực cực do băng tuyết bốc hơi", "Khu vực chí tuyến có áp cao thống trị", "Sâu trong lòng lục địa Á - Âu"],
        answer: 0,
        explanation: "Khu vực Xích đạo có lượng mưa lớn nhất (trên 1500 - 2000 mm/năm) do quanh năm là đai áp thấp, nhiệt độ cao thúc đẩy đối lưu không khí bốc hơi mạnh và có nhiều rừng, biển."
    },
    {
        grade: "10", subject: "dia", term: "CK1",
        question: "Thủy quyển (Hydrosphere) là lớp nước bao quanh Trái Đất, trong đó bộ phận chiếm tỉ lệ thể tích lớn nhất (khoảng 97,5%) là:",
        options: ["Nước mặn trong các biển và đại dương", "Nước ngọt trong các sông, hồ", "Nước ngầm tầng nông", "Băng tuyết ở hai cực và đỉnh núi cao"],
        answer: 0,
        explanation: "Nước mặn ở các biển và đại dương chiếm tới 97,5% tổng khối lượng thủy quyển; nước ngọt chỉ chiếm khoảng 2,5% (phần lớn tồn tại dưới dạng băng tuyết ở hai cực)."
    },
    {
        grade: "10", subject: "dia", term: "CK1",
        question: "Yếu tố tự nhiên nào đóng vai trò quyết định nhất đến chế độ nước (mùa lũ, mùa cạn) của một con sông ở vùng nhiệt đới gió mùa?",
        options: ["Chế độ mưa của lưu vực sông", "Địa thế dốc của lòng sông", "Thảm thực vật ven bờ", "Hồ đầm điều tiết"],
        answer: 0,
        explanation: "Ở vùng khí hậu nhiệt đới gió mùa, nguồn cung cấp nước chủ yếu cho sông là nước mưa; do đó chế độ nước sông nhịp nhàng ăn khớp với chế độ mưa (mùa mưa là mùa lũ, mùa khô là mùa cạn)."
    },
    {
        grade: "10", subject: "dia", term: "CK1",
        question: "Sóng thần (Tsunami) trên đại dương chủ yếu được hình thành do nguyên nhân nào sau đây?",
        options: ["Động đất, núi lửa ngầm dưới đáy biển hoặc lở đất ngầm quy mô lớn", "Gió bão nhiệt đới mạnh cấp 12 trên mặt biển", "Lực hút của Mặt Trăng vào ngày triều cường", "Sự va chạm của các dòng hải lưu nóng và lạnh"],
        answer: 0,
        explanation: "Sóng thần là sóng biển có bước sóng cực dài và năng lượng khổng lồ sinh ra do sự dịch chuyển đột ngột của đáy biển (động đất dưới biển, núi lửa phun ngầm hoặc trượt lở đất ngầm)."
    },
    {
        grade: "10", subject: "dia", term: "CK1",
        question: "Hiện tượng Thủy triều trên Trái Đất có dao động lớn nhất (Triều cường) khi nào?",
        options: ["Mặt Trời, Mặt Trăng và Trái Đất thẳng hàng (vào các ngày Không trăng và Trăng tròn)", "Mặt Trời, Mặt Trăng và Trái Đất vuông góc với nhau (ngày Trăng khuyết)", "Vào ngày hạ chí ở Bán cầu Bắc", "Khi Trái Đất ở vị trí xa Mặt Trời nhất"],
        answer: 0,
        explanation: "Vào ngày Không trăng (đầu tháng âm lịch) và Trăng tròn (rằm), Mặt Trời, Mặt Trăng và Trái Đất thẳng hàng, lực hấp dẫn cộng hưởng cực đại làm dao động thủy triều lớn nhất (triều cường)."
    },
    {
        grade: "10", subject: "dia", term: "CK1",
        question: "Các dòng biển (hải lưu) nóng chảy qua ven bờ lục địa thường gây ảnh hưởng như thế nào đến khí hậu vùng ven bờ?",
        options: ["Làm tăng nhiệt độ và độ ẩm, gây mưa nhiều cho dải ven bờ", "Làm cho khí hậu khô hạn, biến ven bờ thành hoang mạc cát", "Làm nhiệt độ hạ xuống dưới 0 °C quanh năm", "Không gây ảnh hưởng đến thời tiết trên bờ"],
        answer: 0,
        explanation: "Dòng biển nóng làm tăng nhiệt độ không khí bên trên, thúc đẩy hơi nước bốc lên ngưng tụ gây mưa dồi dào cho các vùng duyên hải mà nó chảy qua."
    },
    {
        grade: "10", subject: "dia", term: "CK1",
        question: "Thổ nhưỡng (đất) khác với các vật thể tự nhiên khác ở đặc tính cơ bản duy nhất nào?",
        options: ["Độ phì nhiêu (khả năng cung cấp nước, chất dinh dưỡng cho cây trồng sinh trưởng)", "Khối lượng thể tích và tỉ trọng hạt đất", "Chứa các khoáng vật silicat", "Có màu sắc biến đổi theo độ sâu"],
        answer: 0,
        explanation: "Độ phì nhiêu là đặc tính cơ bản của đất, phản ánh khả năng cung cấp đầy đủ nước, khí, nhiệt và các chất dinh dưỡng cần thiết cho thực vật sinh trưởng và phát triển."
    },
    {
        grade: "10", subject: "dia", term: "CK1",
        question: "Sinh vật đóng vai trò chủ đạo nào trong quá trình hình thành đất (thổ nhưỡng)?",
        options: ["Cung cấp chất hữu cơ, phân giải xác sinh vật thành mùn và phá hủy đá bằng rễ cây", "Quyết định thành phần khoáng vật gốc của đất", "Điều tiết lượng bức xạ Mặt Trời chiếu xuống đất", "Chỉ làm cho đất bị xói mòn rửa trôi"],
        answer: 0,
        explanation: "Sinh vật (thực vật, động vật, vi sinh vật) cung cấp chất hữu cơ cho đất, phân giải chất hữu cơ tổng hợp thành mùn, đồng thời vi sinh vật cố định đạm và rễ cây phá hủy cơ học - hóa học đối với đá mẹ."
    },
    {
        grade: "10", subject: "dia", term: "CK1",
        question: "Sinh quyển (Biosphere) là quyển của Trái Đất bao gồm toàn bộ sinh vật sinh sống, giới hạn của sinh quyển gồm:",
        options: ["Nơi có sự sống: từ phần thấp của khí quyển, toàn bộ thủy quyển đến phần trên của thạch quyển", "Chỉ giới hạn ở bề mặt các lục địa", "Chỉ nằm ở tầng nước nông của các đại dương", "Toàn bộ nhân Trái Đất và tầng đối lưu"],
        answer: 0,
        explanation: "Sinh quyển bao gồm toàn bộ sinh vật cùng môi trường sống của chúng, ranh giới từ đáy tầng đối lưu (khoảng 20 km) xuống tới đáy các rãnh đại dương (khoảng 11 km) và lớp vỏ phong hóa (độ sâu vài trăm mét)."
    },
    {
        grade: "10", subject: "dia", term: "CK1",
        question: "Quy luật địa đới là quy luật phân bố của các thành phần địa lí theo:",
        options: ["Vĩ độ (từ Xích đạo về hai cực do sự thay đổi góc nhập xạ và bức xạ Mặt Trời)", "Độ cao của địa hình núi", "Khoảng cách xa hay gần biển", "Độ sâu dưới lòng đất"],
        answer: 0,
        explanation: "Quy luật địa đới là sự thay đổi có quy luật của các thành phần tự nhiên và cảnh quan địa lí theo vĩ độ (từ Xích đạo về cực), nguyên nhân do dạng hình cầu của Trái Đất và bức xạ Mặt Trời giảm từ Xích đạo về cực."
    },

    // ===================================================================
    // KHỐI 10 - ĐỊA LÍ - GIỮA KÌ 2 (GK2 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "10", subject: "dia", term: "GK2",
        question: "Gia tăng dân số tự nhiên của một quốc gia được xác định dựa trên hiệu số giữa:",
        options: ["Tỉ suất sinh thô và tỉ suất tử thô", "Số người xuất cư và số người nhập cư", "Tỉ suất gia tăng cơ học và gia tăng tự nhiên", "Tỉ lệ sinh của phụ nữ và tỉ lệ tử vong trẻ em"],
        answer: 0,
        explanation: "Tỉ suất gia tăng dân số tự nhiên là hiệu số giữa tỉ suất sinh thô và tỉ suất tử thô (thường biểu thị bằng đơn vị %)."
    },
    {
        grade: "10", subject: "dia", term: "GK2",
        question: "Cơ cấu dân số theo độ tuổi thường được chia thành 3 nhóm tuổi chính là:",
        options: ["Dưới tuổi lao động (0 - 14 tuổi), trong tuổi lao động (15 - 64 tuổi), trên tuổi lao động (từ 65 tuổi trở lên)", "0 - 18 tuổi, 19 - 60 tuổi, trên 60 tuổi", "Trẻ sơ sinh, thanh niên, người cao tuổi", "Dưới 15 tuổi và trên 15 tuổi"],
        answer: 0,
        explanation: "Theo chuẩn quốc tế, cơ cấu dân số theo độ tuổi chia thành 3 nhóm: 0 - 14 tuổi (dưới tuổi lao động), 15 - 64 tuổi (trong tuổi lao động), 65 tuổi trở lên (trên tuổi lao động)."
    },
    {
        grade: "10", subject: "dia", term: "GK2",
        question: "Dân số già (tỉ lệ người từ 65 tuổi trở lên chiếm trên 14% tổng dân số) sẽ gây ra khó khăn kinh tế - xã hội chủ yếu nào?",
        options: ["Thiếu hụt lực lượng lao động trong tương lai và chi phí phúc lợi xã hội, y tế, viện dưỡng lão tăng cao", "Thất nghiệp tràn lan ở lứa tuổi trẻ", "Thiếu trường học cho học sinh tiểu học", "Bùng nổ dân số và áp lực về lương thực"],
        answer: 0,
        explanation: "Cơ cấu dân số già dẫn đến nguy cơ thiếu hụt lao động bổ sung, gánh nặng chi trả lương hưu và chi phí chăm sóc sức khỏe người cao tuổi đè nặng lên ngân sách nhà nước."
    },
    {
        grade: "10", subject: "dia", term: "GK2",
        question: "Nhân tố tự nhiên nào có ảnh hưởng trực tiếp và quan trọng nhất đến sự phân bố dân cư trên thế giới?",
        options: ["Khí hậu và nguồn nước", "Độ phì nhiêu của đất bazan", "Khoáng sản kim loại màu", "Sự xuất hiện của rừng rậm nhiệt đới"],
        answer: 0,
        explanation: "Khí hậu ôn hòa, ấm áp và nguồn nước dồi dào luôn là điều kiện tự nhiên tiên quyết thu hút con người cư trú và lập nghiệp từ thời cổ đại đến nay."
    },
    {
        grade: "10", subject: "dia", term: "GK2",
        question: "Quá trình Đô thị hóa (Urbanization) được hiểu là quá trình:",
        options: ["Kinh tế - xã hội gắn liền với sự mở rộng các đô thị, tăng nhanh số lượng và tỉ lệ dân cư thành thị, phổ biến lối sống thành thị", "Dồn toàn bộ dân cư nông thôn vào thành phố để làm công nghiệp", "Xây dựng các tòa nhà chọc trời tại trung tâm thủ đô", "Chuyển toàn bộ đất lâm nghiệp thành đất dịch vụ du lịch"],
        answer: 0,
        explanation: "Đô thị hóa là quá trình phát triển kinh tế - xã hội, biểu hiện ở sự tăng nhanh số lượng và quy mô các điểm dân cư đô thị, tỉ lệ dân số đô thị và sự lan tỏa lối sống thành thị về nông thôn."
    },
    {
        grade: "10", subject: "dia", term: "GK2",
        question: "Căn cứ vào nguồn gốc phát sinh, các nguồn lực phát triển kinh tế của một quốc gia được phân chia thành:",
        options: ["Vị trí địa lí, nguồn lực tự nhiên, nguồn lực kinh tế - xã hội", "Nguồn lực trong nước và nguồn lực ngoài nước", "Nguồn lực tư nhân và nguồn lực nhà nước", "Nguồn vốn ODA và FDI"],
        answer: 0,
        explanation: "Dựa vào nguồn gốc, nguồn lực được phân thành: vị trí địa lí (tự nhiên, kinh tế, chính trị), nguồn lực tự nhiên (đất, nước, khoáng sản, sinh vật) và nguồn lực kinh tế - xã hội (dân cư, vốn, KH-CN, đường lối chính sách)."
    },
    {
        grade: "10", subject: "dia", term: "GK2",
        question: "Cơ cấu kinh tế của một quốc gia bao gồm 3 bộ phận hợp thành cơ bản là:",
        options: ["Cơ cấu ngành kinh tế, cơ cấu thành phần kinh tế, cơ cấu lãnh thổ", "Kinh tế nhà nước, kinh tế tư nhân, kinh tế có vốn đầu tư nước ngoài", "Khu vực nông nghiệp, khu vực công nghiệp, khu vực dịch vụ", "Kinh tế trung ương và kinh tế địa phương"],
        answer: 0,
        explanation: "Cơ cấu kinh tế là tổng thể các bộ phận hợp thành và mối quan hệ giữa chúng, gồm: cơ cấu theo ngành, cơ cấu theo thành phần kinh tế và cơ cấu theo lãnh thổ."
    },
    {
        grade: "10", subject: "dia", term: "GK2",
        question: "Trong quá trình công nghiệp hóa và hiện đại hóa, xu hướng chuyển dịch cơ cấu ngành kinh tế phổ biến trên thế giới là:",
        options: ["Giảm tỉ trọng khu vực Nông - lâm - thủy sản, tăng nhanh tỉ trọng khu vực Công nghiệp - xây dựng và Dịch vụ", "Tăng mạnh tỉ trọng nông nghiệp và giảm dần dịch vụ", "Chỉ tập trung phát triển công nghiệp nặng và xóa bỏ nông nghiệp", "Giữ nguyên tỉ trọng các ngành qua các thập kỉ"],
        answer: 0,
        explanation: "Xu hướng chuyển dịch cơ cấu ngành tiến bộ trên thế giới là giảm tỉ trọng nông - lâm - thủy sản, tăng tỉ trọng dịch vụ và công nghiệp (đặc biệt là các ngành dịch vụ tri thức chất lượng cao)."
    },
    {
        grade: "10", subject: "dia", term: "GK2",
        question: "Đối tượng lao động và tư liệu sản xuất đặc biệt không thể thay thế trong sản xuất nông nghiệp là gì?",
        options: ["Đất trồng và sinh vật (cây trồng, vật nuôi)", "Máy cày và phân bón hóa học", "Hệ thống kênh mương thủy lợi", "Nhà xưởng chế biến nông sản"],
        answer: 0,
        explanation: "Trong nông nghiệp, đất đai là tư liệu sản xuất không thể thay thế, cây trồng và vật nuôi là đối tượng lao động mang bản chất sinh học tuân theo quy luật tự nhiên."
    },
    {
        grade: "10", subject: "dia", term: "GK2",
        question: "Đặc điểm nào sau đây thể hiện rõ nét tính chất phụ thuộc chặt chẽ vào tự nhiên của sản xuất nông nghiệp?",
        options: ["Sản xuất nông nghiệp mang tính mùa vụ và phân bố có tính địa phương sâu sắc", "Sản xuất nông nghiệp có thể tự động hóa trong phòng thí nghiệm hoàn toàn", "Thời gian sản xuất nông nghiệp luôn ngắn hơn thời gian lao động", "Nông nghiệp không chịu ảnh hưởng của biến đổi khí hậu"],
        answer: 0,
        explanation: "Do sinh vật sinh trưởng theo chu kì sinh học và chịu ảnh hưởng trực tiếp của nhiệt độ, độ ẩm, ánh sáng nên sản xuất nông nghiệp có tính mùa vụ và phân bố mang tính địa phương."
    },
    {
        grade: "10", subject: "dia", term: "GK2",
        question: "Các cây lương thực chính cung cấp nguồn tinh bột nuôi sống phần lớn dân số thế giới gồm:",
        options: ["Lúa gạo, lúa mì, ngô (bắp)", "Cà phê, chè, cao su", "Đậu tương, mía đường, lạc", "Khoai tây, củ cải đường, thuốc lá"],
        answer: 0,
        explanation: "Ba cây lương thực chủ đạo của nhân loại là lúa gạo (chủ yếu ở vùng nhiệt đới ẩm, châu Á), lúa mì (vùng ôn đới) và ngô (phân bố rộng rãi ở nhiều đới khí hậu)."
    },
    {
        grade: "10", subject: "dia", term: "GK2",
        question: "Cây công nghiệp nhiệt đới điển hình như cao su, cà phê, hồ tiêu đòi hỏi điều kiện tự nhiên chủ yếu nào để phát triển tốt?",
        options: ["Nhiệt ẩm dồi dào, đất bazan hoặc đất feralit tầng dày thoát nước tốt", "Khí hậu ôn đới mát mẻ và đất ngập úng", "Địa hình núi băng giá quanh năm", "Đất cát pha khô cằn ven biển"],
        answer: 0,
        explanation: "Cây công nghiệp nhiệt đới ưa nhiệt độ cao (22-27 °C), lượng mưa lớn và phát triển mạnh nhất trên các cao nguyên đất đỏ bazan màu mỡ, thoát nước tốt."
    },
    {
        grade: "10", subject: "dia", term: "GK2",
        question: "Vai trò sinh thái to lớn nhất của ngành Lâm nghiệp đối với Trái Đất là gì?",
        options: ["Bảo vệ môi trường, điều hòa khí hậu, giữ nguồn nước ngầm, chống xói mòn lũ quét và bảo tồn đa dạng sinh học", "Cung cấp toàn bộ củi đốt cho các nhà máy luyện kim", "Biến đất rừng thành các khu đô thị bê tông", "Khai thác tối đa gỗ tự nhiên để xuất khẩu"],
        answer: 0,
        explanation: "Rừng là 'lá phổi xanh' của Trái Đất, có chức năng phòng hộ đầu nguồn, chống xói mòn sạt lở đất, điều hòa nguồn nước ngầm và lưu trữ carbon giảm biến đổi khí hậu."
    },
    {
        grade: "10", subject: "dia", term: "GK2",
        question: "Yếu tố nào đóng vai trò quan trọng nhất giúp ngành thủy sản nuôi trồng vượt lên ngành đánh bắt tự nhiên trong cơ cấu sản lượng thủy sản thế giới hiện nay?",
        options: ["Tiến bộ của khoa học công nghệ nhân giống, kiểm soát dịch bệnh và thức ăn công nghiệp, đáp ứng nhu cầu tăng cao trong khi nguồn lợi tự nhiên suy giảm", "Nước biển bị cạn kiệt hoàn toàn không còn cá", "Tất cả các loài cá tự nhiên đều bị cấm đánh bắt", "Ngành đánh bắt tiêu tốn quá ít nhiên liệu"],
        answer: 0,
        explanation: "Nhờ công nghệ chọn giống, thức ăn công nghiệp và hệ thống lồng bè khép kín, nuôi trồng thủy sản chủ động về sản lượng, chất lượng và bảo vệ được nguồn lợi tự nhiên đang suy giảm do khai thác quá mức."
    },
    {
        grade: "10", subject: "dia", term: "GK2",
        question: "Mô hình Nông nghiệp hữu cơ (Organic Agriculture) và Nông nghiệp công nghệ cao hướng tới mục tiêu cốt lõi nào?",
        options: ["Tạo ra nông sản sạch, an toàn cho sức khỏe, bảo vệ môi trường sinh thái và phát triển bền vững", "Sử dụng tối đa thuốc bảo vệ thực vật hóa học để diệt sạch côn trùng", "Tăng sản lượng bằng mọi giá mà không quan tâm chất lượng đất", "Bỏ hoang đồng ruộng để thiên nhiên tự sinh trưởng"],
        answer: 0,
        explanation: "Nông nghiệp hữu cơ và công nghệ cao không sử dụng phân bón vô cơ, hóa chất độc hại, hướng tới nông sản an toàn, bảo vệ nguồn đất, nước và sức khỏe cộng đồng."
    },

    // ===================================================================
    // KHỐI 10 - ĐỊA LÍ - CUỐI KÌ 2 (CK2 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "10", subject: "dia", term: "CK2",
        question: "Sản xuất công nghiệp có đặc điểm nổi bật nào sau đây khác biệt hoàn toàn với sản xuất nông nghiệp?",
        options: ["Bao gồm hai giai đoạn (khai thác tài nguyên và chế biến), có tính chất tập trung cao độ và tính chuyên môn hóa, hợp tác hóa cao", "Phụ thuộc chặt chẽ vào thời tiết và mùa vụ tự nhiên", "Cần diện tích mặt bằng đất đai cực kì rộng lớn như đồng ruộng", "Chỉ tạo ra các sản phẩm tiêu dùng tươi sống"],
        answer: 0,
        explanation: "Công nghiệp gồm 2 giai đoạn (khai thác nguyên liệu và chế biến), diễn ra trong nhà xưởng tập trung với mức độ chuyên môn hóa, phân công lao động và liên kết hợp tác cao giữa các nhà máy."
    },
    {
        grade: "10", subject: "dia", term: "CK2",
        question: "Các ngành công nghiệp nào sau đây được xếp vào nhóm ngành Công nghiệp nặng?",
        options: ["Khai thác than, dầu khí, luyện kim, chế tạo cơ khí, hóa chất", "Dệt may, sản xuất giày dép, chế biến đồ hộp", "Chế biến chè, cà phê, làm bánh kẹo", "Sản xuất đồ chơi trẻ em và đồ gốm sứ"],
        answer: 0,
        explanation: "Công nghiệp nặng (nhóm A) sản xuất tư liệu sản xuất gồm: khai thác khoáng sản, luyện kim đen và màu, cơ khí chế tạo máy, hóa chất cơ bản, năng lượng điện."
    },
    {
        grade: "10", subject: "dia", term: "CK2",
        question: "Xu hướng chuyển dịch cơ cấu ngành công nghiệp năng lượng toàn cầu hiện nay là:",
        options: ["Giảm tỉ trọng điện than hóa thạch gây ô nhiễm, tăng nhanh tỉ trọng năng lượng tái tạo (điện gió, điện mặt trời, sinh khối)", "Tập trung xây dựng toàn bộ nhà máy nhiệt điện chạy bằng than củi", "Xóa bỏ hoàn toàn mạng lưới truyền tải điện năng", "Chỉ dùng duy nhất dầu mỏ làm nhiên liệu phát điện"],
        answer: 0,
        explanation: "Nhằm giảm phát thải khí nhà kính và ứng phó biến đổi khí hậu (mục tiêu Net Zero), thế giới đang chuyển dịch mạnh mẽ từ nhiên liệu hóa thạch (than đá, dầu khí) sang năng lượng xanh tái tạo (gió, mặt trời, hydro)."
    },
    {
        grade: "10", subject: "dia", term: "CK2",
        question: "Ngành công nghiệp Điện tử - Tin học được coi là ngành công nghiệp mũi nhọn của thế giới vì:",
        options: ["Là thước đo trình độ phát triển KH-KT, sử dụng ít nguyên liệu khoáng sản, hàm lượng chất xám cao và tạo động lực cho các ngành khác số hóa", "Sản xuất ra các thiết bị cồng kềnh tiêu tốn hàng vạn tấn quặng sắt", "Thu hút hàng triệu lao động thủ công không qua đào tạo", "Gây ô nhiễm môi trường đất và nước nặng nhất"],
        answer: 0,
        explanation: "Công nghiệp điện tử - tin học đòi hỏi lực lượng lao động chất xám cao, ít tiêu hao nguyên liệu, giá trị gia tăng khổng lồ và là nền tảng của cuộc Cách mạng công nghiệp 4.0."
    },
    {
        grade: "10", subject: "dia", term: "CK2",
        question: "Khu công nghiệp tập trung (Industrial Park) có đặc điểm nào sau đây?",
        options: ["Có ranh giới địa lí xác định, chuyên sản xuất hàng công nghiệp và thực hiện dịch vụ công nghiệp, không có dân cư sinh sống", "Là một thành phố lớn có cả trường học và khu dân cư hỗn hợp", "Chỉ gồm một xí nghiệp duy nhất nằm cô lập ở nông thôn", "Chuyên khai thác hải sản ngoài khơi"],
        answer: 0,
        explanation: "Khu công nghiệp là khu vực có ranh giới rõ ràng, hạ tầng kĩ thuật đồng bộ do chính phủ hoặc doanh nghiệp hạ tầng thành lập, tập trung các nhà máy sản xuất, không có cư dân sinh sống."
    },
    {
        grade: "10", subject: "dia", term: "CK2",
        question: "Vai trò then chốt của ngành Giao thông vận tải đối với sự phát triển kinh tế là gì?",
        options: ["Vận chuyển hành khách và hàng hóa, tạo mối liên kết kinh tế giữa các vùng, thúc đẩy giao thương và phân công lao động xã hội", "Chỉ phục vụ mục đích du lịch khám phá", "Tự sản xuất ra các sản phẩm vật chất như lương thực", "Làm chậm quá trình đô thị hóa"],
        answer: 0,
        explanation: "Giao thông vận tải như 'mạch máu' của nền kinh tế, nối liền sản xuất với tiêu dùng, gắn kết các vùng kinh tế, mở rộng giao lưu quốc tế và nâng cao đời sống dân cư."
    },
    {
        grade: "10", subject: "dia", term: "CK2",
        question: "Ưu điểm vượt trội nhất của ngành Vận tải đường biển trong thương mại quốc tế là:",
        options: ["Đảm nhận khối lượng luân chuyển hàng hóa khổng lồ, cước phí vận chuyển rẻ trên các tuyến đường viễn dương xa", "Tốc độ di chuyển nhanh nhất trong tất cả các loại hình", "Tiếp cận trực tiếp đến cửa từng gia đình", "Hoàn toàn không chịu ảnh hưởng của bão biển"],
        answer: 0,
        explanation: "Vận tải đường biển đảm nhận tới 80% khối lượng hàng hóa buôn bán quốc tế nhờ tải trọng tàu siêu lớn (tàu container, tàu chở dầu hàng trăm nghìn tấn) với chi phí thấp trên cự li dài."
    },
    {
        grade: "10", subject: "dia", term: "CK2",
        question: "Ngành vận tải hàng không có ưu thế và hạn chế lớn nhất lần lượt là gì?",
        options: ["Ưu thế tốc độ cực nhanh và tính cơ động toàn cầu; hạn chế cước phí cao và tải trọng vận chuyển có giới hạn", "Ưu thế cước rẻ; hạn chế ô nhiễm tiếng ồn", "Ưu thế chở hàng siêu trường siêu trọng; hạn chế phụ thuộc vào thủy triều", "Ưu thế mạng lưới phủ kín vùng cao; hạn chế không an toàn"],
        answer: 0,
        explanation: "Hàng không có vận tốc lớn nhất, rút ngắn thời gian di chuyển giữa các châu lục, nhưng chi phí đầu tư sân bay, máy bay đắt đỏ dẫn tới giá cước rất cao và khối lượng chở hàng bị giới hạn."
    },
    {
        grade: "10", subject: "dia", term: "CK2",
        question: "Sự bùng nổ của mạng Internet và Mạng viễn thông di động 5G đã làm thay đổi ngành Bưu chính viễn thông theo hướng:",
        options: ["Chuyển từ truyền đưa thông tin vật lí sang số hóa dữ liệu tốc độ siêu cao, kết nối vạn vật (IoT) và thương mại điện tử", "Quay trở lại hình thức gửi thư tay bằng ngựa kéo", "Chấm dứt hoàn toàn các giao dịch ngân hàng qua mạng", "Chỉ cung cấp dịch vụ trong phạm vi một thị xã"],
        answer: 0,
        explanation: "Viễn thông hiện đại phát triển theo hướng số hóa, mạng internet băng thông rộng và vệ tinh giúp truyền tải tức thời dữ liệu, hình ảnh, phục vụ họp trực tuyến và kinh tế số."
    },
    {
        grade: "10", subject: "dia", term: "CK2",
        question: "Cán cân thương mại của một quốc gia được coi là 'Xuất siêu (Thặng dư thương mại)' khi nào?",
        options: ["Khi giá trị xuất khẩu lớn hơn giá trị nhập khẩu", "Khi giá trị nhập khẩu lớn hơn giá trị xuất khẩu", "Khi giá trị xuất khẩu bằng chính xác giá trị nhập khẩu", "Khi quốc gia không nhập khẩu bất kì mặt hàng nào"],
        answer: 0,
        explanation: "Cán cân thương mại = Giá trị xuất khẩu - Giá trị nhập khẩu. Khi xuất khẩu > nhập khẩu thì cán cân dương (xuất siêu/thặng dư); ngược lại là nhập siêu (thâm hụt)."
    },
    {
        grade: "10", subject: "dia", term: "CK2",
        question: "Tổ chức Thương mại Thế giới (WTO) hoạt động dựa trên mục tiêu cốt lõi nào?",
        options: ["Thúc đẩy tự do hóa thương mại toàn cầu, dỡ bỏ các rào cản thuế quan và giải quyết tranh chấp thương mại công bằng giữa các thành viên", "Bảo hộ tuyệt đối thị trường nội địa cho các nước lớn", "Cấm buôn bán nông sản giữa các châu lục", "Quy định một mức giá sàn duy nhất cho mọi mặt hàng"],
        answer: 0,
        explanation: "WTO (World Trade Organization) hướng tới tự do hóa thương mại, mở rộng thị trường, giảm thuế nhập khẩu, chống bán phá giá và tạo sân chơi bình đẳng cho thương mại quốc tế."
    },
    {
        grade: "10", subject: "dia", term: "CK2",
        question: "Tài nguyên du lịch tự nhiên bao gồm các yếu tố nào sau đây?",
        options: ["Địa hình (hang động, bãi biển), khí hậu trong lành, nguồn nước khoáng nóng, cảnh quan sinh vật vườn quốc gia", "Các di tích lịch sử, lễ hội văn hóa dân gian", "Làng nghề thủ công truyền thống", "Công trình bảo tàng và ẩm thực địa phương"],
        answer: 0,
        explanation: "Tài nguyên du lịch tự nhiên gồm: địa hình (bãi biển đẹp, núi non, hang động kì vĩ), khí hậu mát mẻ, cảnh quan sông hồ nước khoáng và các hệ sinh thái rừng nguyên sinh."
    },
    {
        grade: "10", subject: "dia", term: "CK2",
        question: "Ngành Tài chính - Ngân hàng đóng vai trò 'bà đỡ' cho nền kinh tế vì:",
        options: ["Cung ứng và điều tiết nguồn vốn cho sản xuất, kinh doanh, dịch vụ và thực hiện các thanh toán tiện ích an toàn", "Trực tiếp chế biến ra nông sản và may mặc", "Chỉ phục vụ nhu cầu gửi tiết kiệm của người cao tuổi", "Thay thế hoàn toàn chức năng của nhà nước trong lập pháp"],
        answer: 0,
        explanation: "Tài chính - ngân hàng là huyết mạch chu chuyển vốn, huy động tiền nhàn rỗi trong xã hội cho các doanh nghiệp vay mở rộng sản xuất và thúc đẩy thanh toán không dùng tiền mặt."
    },
    {
        grade: "10", subject: "dia", term: "CK2",
        question: "Khái niệm 'Phát triển bền vững (Sustainable Development)' được định nghĩa chuẩn xác là:",
        options: ["Sự phát triển đáp ứng nhu cầu của thế hệ hiện tại mà không làm tổn hại đến khả năng đáp ứng nhu cầu đó của các thế hệ tương lai", "Sự phát triển kinh tế thần tốc bằng cách khai thác cạn kiệt mọi nguồn tài nguyên", "Chỉ tập trung bảo tồn thiên nhiên và dừng mọi hoạt động xây dựng công nghiệp", "Sự phát triển chỉ ưu tiên cho các quốc gia phát triển giàu có"],
        answer: 0,
        explanation: "Theo Báo cáo Brundtland của Liên Hợp Quốc, phát triển bền vững là sự phát triển kết hợp chặt chẽ, hài hòa giữa 3 trụ cột: Tăng trưởng kinh tế, Công bằng xã hội và Bảo vệ môi trường sinh thái."
    },
    {
        grade: "10", subject: "dia", term: "CK2",
        question: "Khái niệm 'Tăng trưởng xanh (Green Growth)' nhấn mạnh vào giải pháp phát triển nào sau đây?",
        options: ["Phát triển kinh tế dựa trên sử dụng hiệu quả tài nguyên, giảm phát thải khí nhà kính, phục hồi hệ sinh thái và ứng dụng công nghệ sạch", "Nhuộm màu xanh lá cây cho tất cả các nhà máy", "Chỉ trồng thêm cây cảnh trên vỉa hè các thành phố lớn", "Ngừng toàn bộ hoạt động giao thông vận tải bằng cơ giới"],
        answer: 0,
        explanation: "Tăng trưởng xanh là phương thức phát triển kinh tế bền vững thông qua việc sử dụng tiết kiệm năng lượng, nguyên liệu sạch, giảm thiểu ô nhiễm và ngăn chặn suy giảm đa dạng sinh học."
    },

    // ===================================================================
    // KHỐI 10 - LỊCH SỬ - GIỮA KÌ 1 (GK1 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "10", subject: "su", term: "GK1",
        question: "Khái niệm 'Hiện thực lịch sử' được hiểu chuẩn xác là gì?",
        options: ["Tất cả những gì đã diễn ra trong quá khứ, tồn tại hoàn toàn khách quan, không phụ thuộc vào ý muốn chủ quan của con người", "Những hiểu biết của con người về quá khứ qua ghi chép", "Những câu chuyện truyền thuyết dân gian về thời tiền sử", "Toàn bộ suy đoán của các nhà nghiên cứu lịch sử"],
        answer: 0,
        explanation: "Hiện thực lịch sử là những sự kiện, quá trình đã thực sự diễn ra trong quá khứ một cách khách quan, độc lập với ý thức và nhận thức của con người."
    },
    {
        grade: "10", subject: "su", term: "GK1",
        question: "'Nhận thức lịch sử' có đặc điểm nào sau đây khác biệt với hiện thực lịch sử?",
        options: ["Là hiểu biết của con người về hiện thực lịch sử, mang tính chủ quan và có thể thay đổi theo thời gian, tư liệu và góc nhìn tiếp cận", "Luôn phản ánh chính xác 100% sự thật quá khứ không sai sót", "Tồn tại hoàn toàn độc lập với con người", "Không thể ghi chép thành sách vở tài liệu"],
        answer: 0,
        explanation: "Nhận thức lịch sử là hình ảnh của quá khứ được tái hiện qua tư duy con người, phụ thuộc vào nguồn sử liệu, phương pháp nghiên cứu và thế giới quan của người nghiên cứu nên có tính tương đối, chủ quan."
    },
    {
        grade: "10", subject: "su", term: "GK1",
        question: "Căn cứ vào dạng thức tồn tại, nguồn sử liệu nào sau đây được coi là 'Sử liệu hiện vật'?",
        options: ["Các di tích khảo cổ, công trình kiến trúc, mộ táng, vũ khí, đồ gốm, tiền cổ khai quật được", "Các truyền thuyết và truyện ngụ ngôn lưu truyền miệng", "Sách 'Đại Việt sử ký toàn thư'", "Các bản ghi âm lời nói của nhân vật lịch sử"],
        answer: 0,
        explanation: "Sử liệu hiện vật là những di tích, di vật do con người tạo ra còn lưu giữ lại trong lòng đất hoặc trên mặt đất như thành quách, đền đài, đồ gốm, đồ đồng, xương cốt."
    },
    {
        grade: "10", subject: "su", term: "GK1",
        question: "Chức năng xã hội quan trọng nhất của Sử học đối với cuộc sống hiện tại và tương lai là gì?",
        options: ["Giáo dục lòng yêu nước, đạo đức, bồi dưỡng nhân cách và rút ra bài học kinh nghiệm từ quá khứ để định hướng tương lai", "Chỉ để làm phong phú các buổi nói chuyện phiếm", "Tạo ra các bộ phim hư cấu phục vụ giải trí", "Phán xét đạo đức cá nhân theo góc nhìn hiện đại"],
        answer: 0,
        explanation: "Sử học có chức năng khoa học (khôi phục sự thật) và chức năng xã hội: giáo dục tư tưởng, đạo đức nhân văn, truyền thống yêu nước và đúc kết bài học lịch sử cho công cuộc dựng nước và giữ nước."
    },
    {
        grade: "10", subject: "su", term: "GK1",
        question: "Tri thức lịch sử có vai trò như thế nào đối với ngành công nghiệp Du lịch hiện đại?",
        options: ["Là nguồn tài nguyên di sản vô giá tạo nên sức hút độc đáo của các tour du lịch văn hóa, di tích lịch sử và danh lam thắng cảnh", "Không có bất kì liên hệ nào với việc phát triển du lịch", "Chỉ làm tăng chi phí bảo tồn mà không sinh lợi nhuận", "Làm cản trở việc xây dựng các khu nghỉ dưỡng hiện đại"],
        answer: 0,
        explanation: "Di sản lịch sử - văn hóa là tài nguyên du lịch nhân văn hàng đầu thu hút khách trong và ngoài nước, tạo doanh thu lớn và giải quyết việc làm cho cộng đồng địa phương."
    },
    {
        grade: "10", subject: "su", term: "GK1",
        question: "Khái niệm 'Văn minh' (Civilization) khác với 'Văn hóa' (Culture) ở điểm căn bản nào?",
        options: ["Văn minh là trạng thái tiến hóa đạt trình độ phát triển cao của văn hóa, thường gắn liền với sự xuất hiện của nhà nước và chữ viết", "Văn minh xuất hiện trước văn hóa từ thời nguyên thủy", "Văn hóa chỉ có ở phương Tây, văn minh ở phương Đông", "Văn hóa bao gồm các máy móc hiện đại còn văn minh thì không"],
        answer: 0,
        explanation: "Văn hóa xuất hiện cùng với sự ra đời của loài người; còn văn minh là lát cắt phát triển đỉnh cao của văn hóa khi xã hội loài người thoát khỏi thời kì dã man, có nhà nước, giai cấp, chữ viết và đô thị."
    },
    {
        grade: "10", subject: "su", term: "GK1",
        question: "Bốn nền văn minh phương Đông cổ đại lớn đầu tiên của nhân loại đều hình thành bên lưu vực các con sông lớn nào?",
        options: ["Sông Nin (Ai Cập), sông Ti-grơ và Ơ-phrat (Lưỡng Hà), sông Ấn - Hằng (Ấn Độ), Hoàng Hà - Trường Giang (Trung Hoa)", "Sông Đa-nuýp, sông Vôn-ga, sông Rai-nơ, sông Mê Công", "Sông A-ma-dôn, sông Mi-xi-xi-pi, sông Nin, sông Hằng", "Sông Công-gô, sông Hằng, sông Hồng, sông Lô"],
        answer: 0,
        explanation: "Điều kiện đất phù sa màu mỡ và nguồn nước tưới dồi dào từ các con sông lớn vùng nhiệt đới/cận nhiệt đã giúp cư dân Ai Cập (sông Nin), Lưỡng Hà (Tigris - Euphrates), Ấn Độ (Ấn - Hằng), Trung Hoa (Hoàng Hà) sớm hình thành kinh tế nông nghiệp và nhà nước cổ đại."
    },
    {
        grade: "10", subject: "su", term: "GK1",
        question: "Người Ai Cập cổ đại đã sáng tạo ra hệ thống chữ viết nào đầu tiên?",
        options: ["Chữ tượng hình khắc trên đá hoặc viết trên giấy Pa-pi-rút (Papyrus)", "Chữ hình nêm (tiết hình) khắc trên đất sét", "Chữ Phạn (Sanskrit) trên lá bối", "Chữ cái Hy Lạp và La-tinh"],
        answer: 0,
        explanation: "Khoảng thiên niên kỉ IV TCN, người Ai Cập sáng tạo chữ tượng hình (vẽ hình ảnh mô phỏng vật thể), được viết bằng mực thảo mộc trên giấy chỉ thảo papyrus hoặc chạm khắc trên đá lăng tẩm."
    },
    {
        grade: "10", subject: "su", term: "GK1",
        question: "Kim tự tháp Kê-ốp (Khufu) ở Ai Cập cổ đại là công trình kiến trúc kì vĩ được xây dựng nhằm mục đích chính là gì?",
        options: ["Lăng mộ yên nghỉ của Pha-ra-ông (Pharaoh) thể hiện quyền uy tôn giáo và thần quyền tối thượng", "Đài thiên văn ngắm Mặt Trời hàng ngày", "Kho chứa thóc dự trữ lương thực quốc gia", "Pháo đài phòng thủ quân sự ngăn chặn giặc ngoại xâm"],
        answer: 0,
        explanation: "Kim tự tháp là lăng mộ của các Pharaon - vua Ai Cập cổ đại, thể hiện niềm tin vào sự bất tử của linh hồn và quyền lực tuyệt đối của thần vương."
    },
    {
        grade: "10", subject: "su", term: "GK1",
        question: "Nền văn minh Lưỡng Hà (Mesopotamia) cổ đại đã để lại bộ luật thành văn sớm nhất thế giới còn khá nguyên vẹn là bộ luật nào?",
        options: ["Bộ luật Ham-mu-ra-bi (Hammurabi)", "Bộ luật Manu của Ấn Độ cổ", "Bộ luật La Mã 12 bảng", "Luật Hồng Đức thời Lê sơ"],
        answer: 0,
        explanation: "Bộ luật Hammurabi của vương quốc Babylon cổ đại (thế kỉ XVIII TCN) được khắc trên khối đá bazan đen hình trụ, gồm 282 điều khoản điều chỉnh mọi quan hệ kinh tế - xã hội."
    },
    {
        grade: "10", subject: "su", term: "GK1",
        question: "Hệ thống chữ số tự nhiên từ 0 đến 9 và khái niệm về số '0' được phát minh đầu tiên bởi cư dân của nền văn minh nào?",
        options: ["Cư dân Ấn Độ cổ đại (sau đó được người Ả Rập truyền bá sang phương Tây)", "Người La Mã cổ đại", "Người Trung Hoa thời nhà Tần", "Người Hy Lạp cổ đại"],
        answer: 0,
        explanation: "Người Ấn Độ cổ đại là chủ nhân sáng tạo ra hệ thống 10 chữ số (0 đến 9) có giá trị theo vị trí; người Ả Rập học tập và truyền sang châu Âu nên phương Tây quen gọi nhầm là 'chữ số Ả Rập'."
    },
    {
        grade: "10", subject: "su", term: "GK1",
        question: "Hai tôn giáo lớn trên thế giới ra đời tại Ấn Độ cổ đại và có ảnh hưởng sâu sắc đến văn hóa phương Đông là:",
        options: ["Băn-la-môn giáo (sau này là Ấn Độ giáo/Hindu giáo) và Phật giáo", "Cơ đốc giáo và Hồi giáo", "Đạo Do Thái và Đạo Shinto", "Nho giáo và Đạo giáo"],
        answer: 0,
        explanation: "Ấn Độ là cái nôi sinh ra Hin-đu giáo (tiền thân là Bà-la-môn giáo) và Phật giáo (do Phật Thích Ca Mâu Ni sáng lập thế kỉ VI TCN truyền bá rộng khắp châu Á)."
    },
    {
        grade: "10", subject: "su", term: "GK1",
        question: "Người sáng lập hệ tư tưởng Nho giáo - học thuyết chính trị - đạo đức có ảnh hưởng bao trùm xã hội phong kiến phương Đông là ai?",
        options: ["Khổng Tử", "Lão Tử", "Mạnh Tử", "Hàn Phi Tử"],
        answer: 0,
        explanation: "Khổng Tử (551 - 479 TCN) sống vào thời Xuân Thu ở Trung Quốc là người sáng lập Nho giáo, đề cao chữ Nhân, Lễ, Chính danh và đạo Tam cương - Ngũ thường."
    },
    {
        grade: "10", subject: "su", term: "GK1",
        question: "Bốn phát minh kĩ thuật vĩ đại ('Tứ đại phát minh') của nền văn minh Trung Hoa cổ - trung đại đóng góp cho nhân loại là:",
        options: ["Kĩ thuật làm giấy, kĩ thuật in, la bàn và thuốc súng", "Động cơ hơi nước, máy dệt, máy may và điện thoại", "Bánh xe, ròng rọc, cày sắt và thủy tinh", "Kính thiên văn, đồng hồ nước, tàu ngầm và máy bay"],
        answer: 0,
        explanation: "Bốn phát minh lớn của Trung Hoa (giấy, in, la bàn, thuốc súng) đã làm thay đổi sâu sắc lịch sử nhân loại, thúc đẩy hàng hải phát kiến địa lí và phổ biến tri thức."
    },
    {
        grade: "10", subject: "su", term: "GK1",
        question: "Công trình quân sự phòng thủ vĩ đại dài hàng vạn dặm được khởi công xây dựng từ thời Tần Thủy Hoàng ở Trung Quốc là:",
        options: ["Vạn Lí Trường Thành", "Cố Cung (Tử Cấm Thành)", "Lăng mộ Tần Thủy Hoàng", "Quảng trường Thiên An Môn"],
        answer: 0,
        explanation: "Vạn Lí Trường Thành được Tần Thủy Hoàng nối liền và mở rộng từ thế kỉ III TCN nhằm ngăn chặn các đợt tấn công của các bộ tộc du mục phương Bắc (Hung Nô)."
    },

    // ===================================================================
    // KHỐI 10 - LỊCH SỬ - CUỐI KÌ 1 (CK1 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "10", subject: "su", term: "CK1",
        question: "Địa hình đặc trưng của vùng Địa Trung Hải (Hy Lạp và La Mã cổ đại) với nhiều bờ biển khúc khuỷu, vũng vịnh kín gió đã tạo điều kiện thuận lợi nhất cho ngành kinh tế nào phát triển?",
        options: ["Thương mại đường biển (hàng hải) và thủ công nghiệp", "Trồng trọt lúa nước trên các cánh đồng châu thổ rộng lớn", "Khai thác lâm sản gỗ rừng mưa nhiệt đới", "Chăn nuôi đại gia súc trên các thảo nguyên mênh mông"],
        answer: 0,
        explanation: "Hy Lạp và La Mã có nhiều vũng vịnh sâu kín gió (vịnh Piraeus...), nằm kề Địa Trung Hải nên kinh tế hàng hải, buôn bán biển và thủ công nghiệp (gốm, đúc đồng) phát triển rực rỡ vượt trội so với nông nghiệp."
    },
    {
        grade: "10", subject: "su", term: "CK1",
        question: "Mô hình tổ chức nhà nước điển hình ở Hy Lạp cổ đại (tiêu biểu như thành bang A-ten) là:",
        options: ["Nhà nước dân chủ chủ nô (thành bang/polis)", "Chế độ quân chủ chuyên chế tuyệt đối", "Chế độ phong kiến phân quyền", "Chế độ công xã thị tộc nguyên thủy"],
        answer: 0,
        explanation: "Ở Hy Lạp cổ đại hình thành các thị quốc (thành bang/polis độc lập), tiêu biểu là Aten với nền dân chủ chủ nô: Đại hội công dân có quyền biểu quyết luật pháp và bầu các quan chức nhà nước."
    },
    {
        grade: "10", subject: "su", term: "CK1",
        question: "Bảng chữ cái ghi âm La-tinh (gồm các chữ cái A, B, C...) được cư dân La Mã cổ đại hoàn thiện dựa trên cơ sở bảng chữ cái của:",
        options: ["Người Hy Lạp và người Phê-ni-xi (Phoenicia)", "Người Ai Cập cổ đại", "Người Lưỡng Hà cổ đại", "Người Ấn Độ"],
        answer: 0,
        explanation: "Người La Mã tiếp thu hệ thống chữ cái của người Phoenicia qua trung gian người Hy Lạp, cải biên thành hệ thống chữ cái Latinh gồm 26 chữ cái đơn giản, thông dụng nhất thế giới ngày nay."
    },
    {
        grade: "10", subject: "su", term: "CK1",
        question: "Các nhà khoa học Hy Lạp cổ đại đặt nền móng cho các ngành khoa học tự nhiên chính xác là ai?",
        options: ["Ta-lét (Thales), Pi-ta-go (Pythagoras), Ơ-cơ-lít (Euclid), Ác-si-mét (Archimedes)", "Khổng Tử, Mạnh Tử, Lão Tử", "Ham-mu-ra-bi, Pha-ra-ông Kê-ốp", "Sếch-xpia, Đan-tê, Lê-ô-na đơ Vanh-xi"],
        answer: 0,
        explanation: "Các định lí hình học của Thales, Pythagoras, Euclid và nguyên lí lực đẩy của Archimedes ra đời từ thời Hy Lạp cổ đại đã trở thành nền móng của khoa học tự nhiên thực nghiệm."
    },
    {
        grade: "10", subject: "su", term: "CK1",
        question: "Đại hội thể thao Ô-lim-pích (Olympic) cổ đại có nguồn gốc từ đâu và mang ý nghĩa gì?",
        options: ["Bắt nguồn từ đền thờ thần Dớt ở thung lũng Ô-lim-pi-a (Hy Lạp), thi đấu để tôn vinh vẻ đẹp thể chất con người và duy trì hòa bình giữa các thành bang", "Bắt nguồn từ La Mã để mua vui cho các đấu sĩ giác đấu", "Bắt nguồn từ Ai Cập để kỉ niệm ngày mùa lũ sông Nin", "Bắt nguồn từ Ba Tư để luyện tập kỵ binh viễn chinh"],
        answer: 0,
        explanation: "Từ năm 776 TCN, cứ 4 năm một lần người Hy Lạp tổ chức thế vận hội Olympic tại Olympia; trong thời gian diễn ra đại hội, mọi cuộc chiến tranh giữa các thành bang đều phải tạm dừng (đình chiến Olympic)."
    },
    {
        grade: "10", subject: "su", term: "CK1",
        question: "Công trình đấu trường hình elip khổng lồ bằng đá ở La Mã cổ đại dùng để tổ chức các cuộc thi đấu của đấu sĩ giác đấu là:",
        options: ["Đấu trường Cô-li-dê (Colosseum)", "Đền Pác-tê-nông (Parthenon)", "Lăng mộ Kê-ốp", "Khải Hoàn Môn Pari"],
        answer: 0,
        explanation: "Đấu trường Colosseum tại Rome được xây dựng thế kỉ I SCN, có sức chứa hơn 50.000 khán giả với cấu trúc vòm cuốn bê tông cốt đá kì vĩ của kiến trúc La Mã cổ đại."
    },
    {
        grade: "10", subject: "su", term: "CK1",
        question: "Phong trào Văn hóa Phục hưng (thế kỉ XIV - XVII) bắt đầu bùng nổ đầu tiên tại quốc gia nào ở Tây Âu?",
        options: ["I-ta-li-a (Italy - các thành thị giàu có như Florence, Venice)", "Nước Anh", "Nước Pháp", "Nước Đức"],
        answer: 0,
        explanation: "Văn hóa Phục hưng bùng nổ đầu tiên ở các thành thị miền bắc Italy thế kỉ XIV nhờ kinh tế tư bản phát triển sớm, tích lũy nhiều của cải và bảo lưu được các di sản văn hóa Hy Lạp - La Mã cổ đại."
    },
    {
        grade: "10", subject: "su", term: "CK1",
        question: "Bản chất tiến bộ và nội dung cốt lõi của phong trào Văn hóa Phục hưng là gì?",
        options: ["Đề cao chủ nghĩa nhân văn (Humanism), giải phóng con người, tôn vinh quyền sống và khoa học thực nghiệm, chống lại trật tự phong kiến và giáo lí khắt khe của Giáo hội", "Khôi phục lại chế độ chiếm hữu nô lệ cổ đại", "Ủng hộ quyền lực độc tôn của Giáo hoàng La Mã", "Chống lại mọi cuộc phát kiến địa lí"],
        answer: 0,
        explanation: "Văn hóa Phục hưng (Renaissance) 'phục hưng' lại các giá trị nhân văn cổ đại, lấy con người làm trung tâm (chủ nghĩa nhân văn), coi trọng tự do cá nhân, lí trí và nghiên cứu khoa học chống thần học phong kiến."
    },
    {
        grade: "10", subject: "su", term: "CK1",
        question: "Bức tranh danh họa bất hủ 'Nàng Mô-na Li-sa' (Mona Lisa - La Gioconda) là kiệt tác của vĩ nhân thời Phục hưng nào?",
        options: ["Lê-ô-na đơ Vanh-xi (Leonardo da Vinci)", "Mi-ken-lăng-giơ (Michelangelo)", "Ra-pha-en (Raphael)", "Đan-tê (Dante Alighieri)"],
        answer: 0,
        explanation: "Leonardo da Vinci (1452 - 1519) - thiên tài toàn năng thời Phục hưng, tác giả của các bức tranh nổi tiếng thế giới như 'Nàng Mona Lisa' và 'Bữa tiệc cuối cùng'."
    },
    {
        grade: "10", subject: "su", term: "CK1",
        question: "Nhà thiên văn học người Ba Lan nào thời Phục hưng đã dũng cảm đưa ra 'Thuyết Nhật tâm' khẳng định Trái Đất quay quanh Mặt Trời?",
        options: ["N. Cô-péc-ních (Nicolaus Copernicus)", "G. Ga-li-lê (Galileo Galilei)", "G. Bru-nô (Giordano Bruno)", "I. Niu-tơn (Isaac Newton)"],
        answer: 0,
        explanation: "Copernicus xuất bản tác phẩm 'Về sự chuyển động của các thiên thể' chứng minh Mặt Trời là trung tâm của hệ Mặt Trời (Thuyết Nhật tâm), đập tan thuyết Địa tâm sai lầm của Giáo hội."
    },
    {
        grade: "10", subject: "su", term: "CK1",
        question: "Vị trí địa lí của khu vực Đông Nam Á có đặc điểm chiến lược nổi bật nào sau đây?",
        options: ["Nằm ở 'ngã tư đường' giao thương hàng hải quốc tế kết nối giữa Ấn Độ Dương và Thái Bình Dương, nối liền châu Á với châu Đại Dương", "Nằm cô lập giữa băng tuyết Bắc Cực", "Nằm sâu trong lục địa Trung Á không giáp biển", "Nằm ở điểm cực tây của châu Phi"],
        answer: 0,
        explanation: "Đông Nam Á là cầu nối hàng hải chiến lược giữa hai đại dương lớn (Thái Bình Dương - Ấn Độ Dương) qua eo biển Malacca, nơi giao lưu của các tuyến đường thương mại cổ - trung đại."
    },
    {
        grade: "10", subject: "su", term: "CK1",
        question: "Nền tảng kinh tế cơ bản và lâu đời nhất của cư dân các quốc gia Đông Nam Á từ cổ đại đến nay là:",
        options: ["Nông nghiệp trồng trọt trù phú dựa vào cây lúa nước nhiệt đới", "Công nghiệp đóng tàu ngầm nguyên tử", "Chăn thả tuần lộc trên đài nguyên", "Trồng củ cải đường ôn đới"],
        answer: 0,
        explanation: "Với khí hậu nhiệt đới gió mùa, mạng lưới sông ngòi dày đặc bồi đắp phù sa màu mỡ, nền văn minh nông nghiệp lúa nước là mẫu số chung của các cư dân Đông Nam Á."
    },
    {
        grade: "10", subject: "su", term: "CK1",
        question: "Trong tiến trình lịch sử cổ - trung đại, văn hóa Đông Nam Á đã tiếp thu và chịu ảnh hưởng mạnh mẽ nhất từ hai nền văn minh lớn nào ở châu Á?",
        options: ["Văn minh Ấn Độ và Văn minh Trung Hoa", "Văn minh Ai Cập và Văn minh Lưỡng Hà", "Văn minh Maya và Inca ở châu Mỹ", "Văn minh Hy Lạp và La Mã"],
        answer: 0,
        explanation: "Nằm kề bên hai cái nôi văn minh khổng lồ, các quốc gia Đông Nam Á đã chủ động tiếp thu chữ viết (chữ Phạn, chữ Hán), tôn giáo (Phật giáo, Hin-đu giáo), tư tưởng và kiến trúc Ấn - Trung rồi bản địa hóa độc đáo."
    },
    {
        grade: "10", subject: "su", term: "CK1",
        question: "Quần thể kiến trúc đền tháp bằng đá kì vĩ của đế chế Cam-pu-chia thời trung đại được UNESCO vinh danh là Di sản văn hóa thế giới là:",
        options: ["Ăng-co Vát (Angkor Wat) và Ăng-co Thom (Angkor Thom)", "Tháp Bô-rô-bu-đua (Borobudur)", "Chùa Vàng Thạt Luổng (That Luang)", "Chùa Phật Ngọc Băng Cốc"],
        answer: 0,
        explanation: "Quần thể đền tháp Angkor Wat và Angkor Thom được xây dựng vào thời kì rực rỡ nhất của Vương triều Angkor (thế kỉ XII), biểu tượng đỉnh cao của nghệ thuật điêu khắc và kiến trúc Hin-đu giáo kết hợp Phật giáo."
    },
    {
        grade: "10", subject: "su", term: "CK1",
        question: "Tháp Bô-rô-bu-đua (Borobudur) - một trong những công trình Phật giáo bằng đá lớn nhất thế giới được xây dựng trên hòn đảo nào của đất nước In-đô-nê-xi-a?",
        options: ["Đảo Gia-va (Java)", "Đảo Su-ma-tra (Sumatra)", "Đảo Ba-li (Bali)", "Đảo Bo-nê-ô (Borneo)"],
        answer: 0,
        explanation: "Tháp Borobudur được vương triều Sailendra xây dựng vào thế kỉ VIII - IX trên đảo Java (Indonesia), là ngôi đền Phật giáo Đại thừa đồ sộ với hàng trăm bức phù điêu và tượng Phật khắc trên đá núi lửa."
    },

    // ===================================================================
    // KHỐI 10 - LỊCH SỬ - GIỮA KÌ 2 (GK2 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "10", subject: "su", term: "GK2",
        question: "Văn minh Văn Lang - Âu Lạc (thời đại Hùng Vương - An Dương Vương) gắn liền với nền văn hóa khảo cổ tiêu biểu nào ở lưu vực sông Hồng?",
        options: ["Văn hóa Đông Sơn (kĩ nghệ đúc đồng đạt đỉnh cao)", "Văn hóa Sa Huỳnh", "Văn hóa Óc Eo", "Văn hóa Hòa Bình thời đồ đá"],
        answer: 0,
        explanation: "Văn minh Văn Lang - Âu Lạc dựa trên đỉnh cao văn hóa Đông Sơn (khoảng thế kỉ VII TCN đến thế kỉ I SCN), đặc trưng bằng kĩ nghệ luyện kim đồng thau và rèn sắt điêu luyện."
    },
    {
        grade: "10", subject: "su", term: "GK2",
        question: "Hiện vật bằng đồng thau tinh xảo nhất, là biểu tượng thiêng liêng và đỉnh cao của nền văn minh sông Hồng thời dựng nước là gì?",
        options: ["Trống đồng Đông Sơn (như trống đồng Ngọc Lũ, Hoàng Hạ)", "Kiếm sắt nạm ngọc", "Bình gốm tráng men thời Lý", "Tiền đồng Thái Bình hưng bảo"],
        answer: 0,
        explanation: "Trống đồng Đông Sơn với hoa văn ngôi sao Mặt Trời, đàn chim bay, cảnh giã gạo, múa hát và đua thuyền là hiện vật kết tinh tài hoa kĩ thuật đúc đồng và đời sống tinh thần của người Việt cổ."
    },
    {
        grade: "10", subject: "su", term: "GK2",
        question: "Kinh đô và công trình kiến trúc quân sự phòng thủ kiên cố hình xoáy trôn ốc độc đáo thời nhà nước Âu Lạc là:",
        options: ["Thành Cổ Loa (Đông Anh, Hà Nội ngày nay)", "Kinh đô Phong Châu (Phú Thọ)", "Kinh thành Hoa Lư (Ninh Bình)", "Hoàng thành Thăng Long"],
        answer: 0,
        explanation: "Thành Cổ Loa do An Dương Vương xây dựng có quy mô to lớn gồm 3 vòng thành đất xoắn ốc khép kín, kết hợp lũy cao, hào sâu ngập nước thông với sông Hoàng giúp thủy bộ phòng thủ lợi hại."
    },
    {
        grade: "10", subject: "su", term: "GK2",
        question: "Văn minh Champa cổ đại ở vùng duyên hải miền Trung Việt Nam được hình thành trên cơ sở nền văn hóa khảo cổ nào?",
        options: ["Văn hóa Sa Huỳnh", "Văn hóa Đông Sơn", "Văn hóa Đồng Nai", "Văn hóa Bắc Sơn"],
        answer: 0,
        explanation: "Văn minh Champa cổ đại hình thành từ nền văn hóa Sa Huỳnh (đặc trưng bằng táng thức mộ chum gốm khổng lồ và đồ trang sức bằng đá ngọc, thủy tinh) phát triển từ Quảng Bình đến Bình Thuận."
    },
    {
        grade: "10", subject: "su", term: "GK2",
        question: "Thánh địa tôn giáo quan trọng nhất của vương quốc Champa với quần thể tháp gạch thờ thần Shiva được UNESCO công nhận là Di sản văn hóa thế giới nằm ở đâu?",
        options: ["Thánh địa Mỹ Sơn (Quảng Nam)", "Tháp Bà Ponagar (Nha Trang)", "Tháp Bánh Ít (Bình Định)", "Tháp Po Klong Garai (Ninh Thuận)"],
        answer: 0,
        explanation: "Thánh địa Mỹ Sơn (tỉnh Quảng Nam) là trung tâm cúng tế linh thiêng của các vương triều Champa từ thế kỉ IV đến thế kỉ XIII, thờ các vị thần bảo trợ Hin-đu giáo (thần Shiva) và vua thần hóa."
    },
    {
        grade: "10", subject: "su", term: "GK2",
        question: "Văn minh Phù Nam ở vùng Nam Bộ Việt Nam gắn liền với thương cảng quốc tế sầm uất nổi tiếng nào thuộc nền văn hóa Óc Eo?",
        options: ["Thương cảng Óc Eo (huyện Thoại Sơn, An Giang)", "Cảng Hội An (Quảng Nam)", "Cảng Vân Đồn (Quảng Ninh)", "Cảng Thị Nại (Bình Định)"],
        answer: 0,
        explanation: "Thương cảng Óc Eo thuộc vương quốc Phù Nam (thế kỉ I - VII) là trung tâm hải thương quốc tế nhộn nhịp, tìm thấy nhiều tiền cổ La Mã, gương đồng nhà Hán, đồ trang sức vàng và ngọc của Ấn Độ."
    },
    {
        grade: "10", subject: "su", term: "GK2",
        question: "Khái niệm 'Văn minh Đại Việt' được dùng để chỉ nền văn minh tồn tại và phát triển trong khoảng thời gian nào?",
        options: ["Từ khi Ngô Quyền giành lại độc lập dân tộc (năm 938) đến nửa đầu thế kỉ XIX dưới triều Nguyễn", "Chỉ tính riêng thời đại Hùng Vương dựng nước", "Từ thời kì thuộc Pháp đến Cách mạng tháng Tám 1945", "Từ sau năm 1975 đến nay"],
        answer: 0,
        explanation: "Văn minh Đại Việt phát triển rực rỡ qua gần một thiên niên kỉ độc lập tự chủ trải qua các triều đại Ngô, Đinh, Tiền Lê, Lý, Trần, Hồ, Lê sơ, Mạc, Lê Trung hưng, Tây Sơn và triều Nguyễn."
    },
    {
        grade: "10", subject: "su", term: "GK2",
        question: "Sự kiện lịch sử năm 1010 có ý nghĩa to lớn mở ra kỉ nguyên thăng hoa mới cho nền văn minh Đại Việt là:",
        options: ["Vua Lý Thái Tổ ban 'Chiếu dời đô' chuyển kinh đô từ Hoa Lư về thành Đại La và đổi tên là Thăng Long", "Chiến thắng Bạch Đằng của Ngô Quyền", "Lê Lợi đại phá quân Minh", "Nguyễn Huệ quét sạch 29 vạn quân Thanh"],
        answer: 0,
        explanation: "Mùa thu năm Canh Tuất 1010, Lý Thái Tổ dời đô về Đại La - Thăng Long (nơi rồng cuộn hổ ngồi, địa thế rộng mà bằng, muôn vật tốt tươi) mở ra thời kì định đô lâu dài và phát triển toàn diện của Đại Việt."
    },
    {
        grade: "10", subject: "su", term: "GK2",
        question: "Trường đại học công lập đầu tiên của Việt Nam được xây dựng dưới triều Lý (năm 1076) có tên gọi là gì?",
        options: ["Quốc Tử Giám", "Trường Quốc Học Huế", "Trường Đông Kinh Nghĩa Thục", "Viện Hàn Lâm"],
        answer: 0,
        explanation: "Năm 1070 Lý Thánh Tông cho lập Văn Miếu thờ Khổng Tử; đến năm 1076 Lý Nhân Tông cho dựng Quốc Tử Giám bên cạnh làm nơi học tập cho con em hoàng gia và nhân tài trong nước."
    },
    {
        grade: "10", subject: "su", term: "GK2",
        question: "Bộ luật thành văn hoàn chỉnh nhất dưới chế độ phong kiến Việt Nam do vua Lê Thánh Tông ban hành có tên chính thức là:",
        options: ["Quốc triều hình luật (thường gọi là Luật Hồng Đức)", "Hình thư thời Lý", "Hình luật thời Trần", "Hoàng Việt luật lệ (Luật Gia Long)"],
        answer: 0,
        explanation: "Bộ 'Quốc triều hình luật' thời Lê sơ gồm 722 điều, mang tính nhân văn sâu sắc, bảo vệ quyền lợi phụ nữ, quyền sở hữu ruộng đất hương hỏa và bảo vệ trật tự kỉ cương nhà nước."
    },
    {
        grade: "10", subject: "su", term: "GK2",
        question: "Đặc điểm nổi bật trong đời sống tôn giáo thời Lý - Trần được lịch sử gọi là hiện tượng gì?",
        options: ["Tam giáo đồng nguyên (sự dung hợp hài hòa, hòa đồng giữa Phật giáo, Đạo giáo và Nho giáo)", "Độc tôn duy nhất Nho giáo, cấm triệt để Phật giáo", "Cưỡng ép toàn dân theo Thiên Chúa giáo", "Không cho phép bất kì tôn giáo nào tồn tại"],
        answer: 0,
        explanation: "Thời Lý - Trần, Phật giáo là quốc giáo nhưng triều đình thực hiện chính sách cởi mở, kết hợp hài hòa cả ba tôn giáo: Nho giáo giúp trị nước, Phật giáo an dân tu tâm, Đạo giáo thanh tịnh dưỡng tính."
    },
    {
        grade: "10", subject: "su", term: "GK2",
        question: "Bộ quốc sử chính thống đầu tiên của nước ta do nhà sử học Lê Văn Hưu biên soạn dưới thời Trần là:",
        options: ["Đại Việt sử ký", "Đại Việt sử ký toàn thư của Ngô Sĩ Liên", "Lịch triều hiến chương loại chí của Phan Huy Chú", "Khâm định Việt sử thông giám cương mục"],
        answer: 0,
        explanation: "Năm 1272 dưới thời vua Trần Thánh Tông, Hàn lâm viện Viện sĩ kiêm Quốc sử viện giám tu Lê Văn Hưu đã hoàn thành bộ 'Đại Việt sử ký' gồm 30 quyển, ghi chép từ Triệu Đà đến Lý Chiêu Hoàng."
    },
    {
        grade: "10", subject: "su", term: "GK2",
        question: "Chữ viết riêng do người Việt sáng tạo dựa trên việc cải biên các nét của chữ Hán để ghi lại âm tiếng Việt là:",
        options: ["Chữ Nôm", "Chữ Quốc ngữ phiên âm Latinh", "Chữ Phạn", "Chữ Chăm cổ"],
        answer: 0,
        explanation: "Từ thế kỉ X - XII, cha ông ta đã sáng tạo ra chữ Nôm để ghi âm tiếng mẹ đẻ (tiếng Việt), đỉnh cao là các tác phẩm thi ca của Nguyễn Trãi (Quốc âm thi tập), Nguyễn Bỉnh Khiêm, Hồ Xuân Hương, Nguyễn Du (Truyện Kiều)."
    },
    {
        grade: "10", subject: "su", term: "GK2",
        question: "Vị danh y thời Hậu Lê được tôn xưng là 'Y thánh' của nền y học cổ truyền dân tộc với tác phẩm đồ sộ 'Hải Thượng y tông tâm lĩnh' là ai?",
        options: ["Hải Thượng Lãn Ông Lê Hữu Trác", "Tuệ Tĩnh (Nguyễn Bá Tĩnh)", "Trần Nguyên Đán", "Lương Thế Vinh"],
        answer: 0,
        explanation: "Lê Hữu Trác (1724 - 1791) hiệu là Hải Thượng Lãn Ông, tác giả bộ sách 66 quyển 'Hải Thượng y tông tâm lĩnh', nêu cao y đức 'Lương y như từ mẫu' và sưu tầm hàng nghìn vị thuốc nam trị bệnh."
    },
    {
        grade: "10", subject: "su", term: "GK2",
        question: "Nghi lễ cày ruộng Tịch điền do các vị vua Đại Việt (mở đầu là vua Lê Đại Hành năm 987) đích thân thực hiện nhằm mục đích gì?",
        options: ["Khuyến khích nhân dân chăm lo sản xuất nông nghiệp, thể hiện tinh thần trọng nông của triều đình", "Để tìm kiếm kho báu kim loại chôn trong đất", "Để thi tài giữa các quan võ trong triều", "Để bắt đầu mùa săn bắn hàng năm"],
        answer: 0,
        explanation: "Lễ Tịch điền là nét đẹp truyền thống của văn minh nông nghiệp Đại Việt, đích thân nhà vua xuống đồng cày những luống cày đầu xuân để cầu quốc thái dân an, mùa màng tươi tốt và thúc đẩy tinh thần lao động của bách tính."
    },

    // ===================================================================
    // KHỐI 10 - LỊCH SỬ - CUỐI KÌ 2 (CK2 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "10", subject: "su", term: "CK2",
        question: "Cuộc Cách mạng công nghiệp lần thứ nhất (nửa sau thế kỉ XVIII) bùng nổ đầu tiên tại quốc gia nào và trong ngành kinh tế nào?",
        options: ["Nước Anh - trong ngành công nghiệp dệt may (bông - vải)", "Nước Pháp - trong ngành đúc súng thần công", "Nước Mỹ - trong ngành đóng tàu hơi nước", "Nước Đức - trong ngành hóa chất công nghiệp"],
        answer: 0,
        explanation: "Cách mạng công nghiệp lần thứ nhất khởi đầu ở nước Anh từ những năm 60 của thế kỉ XVIII, mở màn bằng việc phát minh thoi bay John Kay và máy kéo sợi Jenny trong ngành dệt."
    },
    {
        grade: "10", subject: "su", term: "CK2",
        question: "Phát minh kĩ thuật quan trọng nhất của cuộc Cách mạng công nghiệp lần thứ nhất tạo ra bước ngoặt chuyển từ lao động thủ công sang lao động cơ khí máy móc là gì?",
        options: ["Máy hơi nước của Giêm Oát (James Watt - năm 1784)", "Máy phát điện của Faraday", "Đèn sợi đốt của Thomas Edison", "Động cơ đốt trong chạy xăng"],
        answer: 0,
        explanation: "Năm 1784, James Watt hoàn thiện máy hơi nước; nguồn động lực hơi nước vạn năng giúp nhà máy không còn phụ thuộc vào sức nước hay gió, có thể xây dựng ở bất cứ đâu và vận hành máy móc công suất lớn."
    },
    {
        grade: "10", subject: "su", term: "CK2",
        question: "Nguồn năng lượng mới và động lực then chốt của cuộc Cách mạng công nghiệp lần thứ hai (cuối thế kỉ XIX - đầu thế kỉ XX) là:",
        options: ["Điện năng và Động cơ đốt trong (sử dụng xăng dầu)", "Năng lượng hơi nước và than đá", "Năng lượng nguyên tử hạt nhân", "Năng lượng pin mặt trời"],
        answer: 0,
        explanation: "Cách mạng công nghiệp lần 2 đặc trưng bằng việc tìm ra năng lượng điện (máy phát điện, đường dây tải điện, động cơ điện) và động cơ đốt trong, thúc đẩy ngành ô tô, máy bay, luyện thép và hóa chất bùng nổ."
    },
    {
        grade: "10", subject: "su", term: "CK2",
        question: "Hai giai cấp cơ bản đối kháng nhau trong xã hội tư bản hình thành rõ rệt sau hai cuộc cách mạng công nghiệp đầu tiên là:",
        options: ["Giai cấp tư sản và Giai cấp vô sản (công nhân)", "Giai cấp địa chủ và Giai cấp nông dân", "Giai cấp chủ nô và Nô lệ", "Tầng lớp thợ thủ công và Nông nô"],
        answer: 0,
        explanation: "Cách mạng công nghiệp đã làm thay đổi cơ cấu giai cấp xã hội sâu sắc: Tư sản nắm trong tay toàn bộ tư liệu sản xuất và nhà máy; Vô sản chỉ có sức lao động phải bán sức làm thuê."
    },
    {
        grade: "10", subject: "su", term: "CK2",
        question: "Cuộc Cách mạng công nghiệp lần thứ ba (từ giữa thế kỉ XX) gắn liền với những thành tựu đột phá nào sau đây?",
        options: ["Máy tính điện tử (Computer), Mạng Internet, chất bán dẫn, tự động hóa và công nghệ vũ trụ", "Đường sắt đầu máy xe lửa chạy than", "Máy kéo sợi chạy bằng sức nước", "Hệ thống điện tín dùng mã Morse"],
        answer: 0,
        explanation: "Cách mạng công nghiệp lần 3 (Cách mạng số hóa/khoa học - kĩ thuật hiện đại) khởi đầu bằng sự ra đời của máy tính điện tử ENIAC (1946), vi mạch bán dẫn, mạng internet toàn cầu và tự động hóa sản xuất."
    },
    {
        grade: "10", subject: "su", term: "CK2",
        question: "Trụ cột công nghệ cốt lõi tạo nên bản chất của cuộc Cách mạng công nghiệp lần thứ tư (Công nghiệp 4.0) hiện nay là:",
        options: ["Trí tuệ nhân tạo (AI), Vạn vật kết nối Internet (IoT), Dữ liệu lớn (Big Data), Điện toán đám mây và Công nghệ sinh học", "Máy cán thép khổng lồ chạy bằng than bùn", "Bơm thủy lực dùng sức ngựa kéo", "Máy dệt cơ khí thủ công gia đình"],
        answer: 0,
        explanation: "Cách mạng công nghiệp 4.0 xóa nhòa ranh giới giữa thế giới vật lí, kĩ thuật số và sinh học, với các đột phá vượt bậc về AI, robot tự hành, IoT, Big Data, Blockchain và công nghệ in 3D."
    },
    {
        grade: "10", subject: "su", term: "CK2",
        question: "Một trong những tác động tiêu cực đáng lo ngại nhất của các cuộc cách mạng công nghiệp đối với nhân loại là gì?",
        options: ["Ô nhiễm môi trường sinh thái, biến đổi khí hậu toàn cầu và nguy cơ thất nghiệp đối với lao động thiếu kĩ năng", "Làm giảm năng suất lao động xã hội", "Kìm hãm giao lưu văn hóa quốc tế", "Làm cho tuổi thọ trung bình của con người giảm sút"],
        answer: 0,
        explanation: "Bên cạnh việc nâng cao vượt bậc năng suất và đời sống, công nghiệp hóa nhanh chóng đã gây phát thải khí CO₂ làm Trái Đất nóng lên, cạn kiệt tài nguyên và tạo sức ép đào thải việc làm khi máy móc tự động hóa thay thế con người."
    },
    {
        grade: "10", subject: "su", term: "CK2",
        question: "Cộng đồng quốc gia Việt Nam hiện nay bao gồm bao nhiêu dân tộc anh em cùng chung sống hòa thuận?",
        options: ["54 dân tộc", "50 dân tộc", "64 dân tộc", "48 dân tộc"],
        answer: 0,
        explanation: "Đất nước Việt Nam là một khối thống nhất gồm 54 dân tộc anh em, trong đó người Kinh (Việt) chiếm khoảng 85% dân số và 53 dân tộc thiểu số phân bố rộng khắp trên khắp mọi miền Tổ quốc."
    },
    {
        grade: "10", subject: "su", term: "CK2",
        question: "Dân tộc nào chiếm tỉ lệ dân số đông nhất trong cộng đồng 54 dân tộc ở Việt Nam?",
        options: ["Dân tộc Kinh (Việt)", "Dân tộc Tày", "Dân tộc Thái", "Dân tộc Mường"],
        answer: 0,
        explanation: "Dân tộc Kinh chiếm đa số (trên 85% dân số cả nước), cư trú chủ yếu ở các đồng bằng, duyên hải và các đô thị lớn; cùng sát cánh kề vai với các dân tộc anh em trong suốt chiều dài lịch sử dựng nước và giữ nước."
    },
    {
        grade: "10", subject: "su", term: "CK2",
        question: "Các dân tộc ở Việt Nam được phân chia theo 8 nhóm ngôn ngữ thuộc 5 ngữ hệ lớn nào sau đây?",
        options: ["Ngữ hệ Nam Á, Nam Đảo, Hán - Tạng, Hmông - Dao, Thái - Kađai", "Ngữ hệ Ấn - Âu, Xê-mít, Hán - Tạng, Hy Lạp, Latinh", "Ngữ hệ Bantu, Thổ Nhĩ Kỳ, Mông Cổ, Nhật Bản, Hàn Quốc", "Chỉ thuộc duy nhất một ngữ hệ Hán"],
        answer: 0,
        explanation: "Các dân tộc Việt Nam thuộc 5 ngữ hệ đa dạng: Nam Á (Việt, Mường, Khmer, Ba-na...), Nam Đảo (Chăm, Gia-rai, Ê-đê...), Thái - Kađai (Tày, Thái, Nùng...), Hmông - Dao (Mông, Dao...), Hán - Tạng (Hoa, Sán Dìu, Hà Nhì...)."
    },
    {
        grade: "10", subject: "su", term: "CK2",
        question: "Không gian văn hóa Cồng chiêng Tây Nguyên - kiệt tác truyền khẩu và Di sản văn hóa phi vật thể của nhân loại gắn liền với đời sống của các dân tộc nào?",
        options: ["Các dân tộc ngữ hệ Nam Đảo và Nam Á vùng Tây Nguyên (Gia-rai, Ba-na, Ê-đê, Mnông, Xơ-đăng...)", "Các dân tộc vùng núi Tây Bắc (Thái, Tày)", "Dân tộc Kinh ở vùng đồng bằng Bắc Bộ", "Dân tộc Chăm ở ven biển Nam Trung Bộ"],
        answer: 0,
        explanation: "Không gian văn hóa Cồng chiêng Tây Nguyên trải dài trên 5 tỉnh Tây Nguyên, là phương tiện kết nối tâm linh giữa con người với thần linh, gắn liền với các lễ cúng cơm mới, đâm trâu, bỏ mả của đồng bào Tây Nguyên."
    },
    {
        grade: "10", subject: "su", term: "CK2",
        question: "Lễ hội Lồng Tồng (Lễ hội Xuống đồng) là nét sinh hoạt văn hóa dân gian cầu mưa thuận gió hòa đặc sắc đầu xuân của đồng bào dân tộc nào?",
        options: ["Dân tộc Tày, Nùng ở vùng miền núi phía Bắc", "Đồng bào Khmer Nam Bộ", "Đồng bào Chăm Ninh Thuận", "Đồng bào Cơ-ho ở Lâm Đồng"],
        answer: 0,
        explanation: "Lễ hội Lồng Tồng (xuống đồng) là lễ hội lớn nhất trong năm của người Tày, Nùng để tạ ơn thần Nông, cầu cho một năm mùa màng tươi tốt, thóc đầy bồ, lợn gà đầy chuồng."
    },
    {
        grade: "10", subject: "su", term: "CK2",
        question: "Khối đại đoàn kết dân tộc có vai trò quyết định như thế nào trong lịch sử dựng nước và giữ nước của dân tộc Việt Nam?",
        options: ["Là cội nguồn sức mạnh vô địch giúp dân tộc ta vượt qua mọi thiên tai, đánh thắng mọi kẻ thù xâm lược và bảo vệ vững chắc non sông", "Chỉ có tác dụng trong việc tổ chức các lễ hội giao lưu", "Không có ảnh hưởng đáng kể đến các cuộc kháng chiến", "Chỉ quan trọng đối với các dân tộc sinh sống ở miền núi"],
        answer: 0,
        explanation: "Khối đại đoàn kết toàn dân tộc là truyền thống quý báu hàng đầu; như Chủ tịch Hồ Chí Minh đã đúc kết: 'Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công'."
    },
    {
        grade: "10", subject: "su", term: "CK2",
        question: "Nguyên tắc cốt lõi trong chính sách dân tộc nhất quán của Đảng và Nhà nước Việt Nam hiện nay là:",
        options: ["Bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển", "Đồng hóa mọi văn hóa dân tộc thiểu số thành văn hóa người Kinh", "Chia rẽ các dân tộc theo từng vùng địa lí cô lập", "Chỉ ưu tiên đầu tư phát triển kinh tế cho vùng đồng bằng"],
        answer: 0,
        explanation: "Hiến pháp Việt Nam khẳng định: Các dân tộc bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển; nghiêm cấm mọi hành vi kì thị, chia rẽ dân tộc."
    },
    {
        grade: "10", subject: "su", term: "CK2",
        question: "Lễ hội Ok Om Bok (Lễ Cúng trăng) kèm theo hội đua ghe Ngo sôi nổi trên sông là lễ hội truyền thống đặc sắc của dân tộc nào?",
        options: ["Dân tộc Khmer ở vùng Tây Nam Bộ", "Dân tộc Mường ở Hòa Bình", "Dân tộc Hoa ở Thành phố Hồ Chí Minh", "Dân tộc Dao ở Quảng Ninh"],
        answer: 0,
        explanation: "Ok Om Bok là lễ hội tạ ơn thần Mặt Trăng của người Khmer Nam Bộ diễn ra vào rằm tháng 10 âm lịch, nổi bật với nghi lễ đút cốm dẹp cho trẻ em và hội đua ghe Ngo náo nức trên sông Sóc Trăng, Trà Vinh."
    },

    // ===================================================================
    // KHỐI 10 - GDKT&PL - GIỮA KÌ 1 (GK1 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "10", subject: "gdktpl", term: "GK1",
        question: "Hoạt động nào sau đây là hoạt động kinh tế cơ bản nhất, đóng vai trò tạo ra sản phẩm vật chất và tinh thần thỏa mãn nhu cầu của con người?",
        options: ["Hoạt động sản xuất", "Hoạt động phân phối", "Hoạt động trao đổi", "Hoạt động tiêu dùng"],
        answer: 0,
        explanation: "Sản xuất là hoạt động cơ bản nhất của xã hội loài người, sử dụng sức lao động và tư liệu sản xuất để biến đổi tự nhiên tạo ra của cải vật chất và tinh thần nuôi sống xã hội."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK1",
        question: "Hoạt động phân chia các yếu tố sản xuất (nguồn vốn, lao động, tư liệu sản xuất) cho các ngành sản xuất và phân chia sản phẩm làm ra cho các cá nhân tiêu dùng được gọi là:",
        options: ["Hoạt động phân phối", "Hoạt động tiêu dùng", "Hoạt động sản xuất", "Hoạt động quảng cáo"],
        answer: 0,
        explanation: "Phân phối là khâu trung gian kết nối sản xuất với tiêu dùng, bao gồm phân phối các yếu tố sản xuất đầu vào và phân phối kết quả sản phẩm đầu ra cho các thành viên trong xã hội."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK1",
        question: "Mối quan hệ biện chứng giữa hoạt động Sản xuất và hoạt động Tiêu dùng được thể hiện như thế nào?",
        options: ["Sản xuất tạo ra sản phẩm cho tiêu dùng; còn tiêu dùng là mục đích, là động lực thúc đẩy sản xuất phát triển", "Tiêu dùng tạo ra của cải vật chất còn sản xuất chỉ sử dụng", "Sản xuất và tiêu dùng hoàn toàn độc lập, không ảnh hưởng lẫn nhau", "Tiêu dùng luôn kìm hãm quy mô mở rộng của sản xuất"],
        answer: 0,
        explanation: "Sản xuất quyết định tiêu dùng (cung cấp sản phẩm, định hình thị hiếu); ngược lại tiêu dùng là mục đích cuối cùng của sản xuất, sản phẩm chỉ thực sự hoàn thành vòng đời khi được người tiêu dùng chấp nhận."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK1",
        question: "Theo nghĩa rộng trong kinh tế học, 'Thị trường' được hiểu là gì?",
        options: ["Tổng thể các mối quan hệ kinh tế giữa người mua và người bán, xác định giá cả và số lượng hàng hóa, dịch vụ được trao đổi thông qua quy luật cung cầu", "Chỉ là một khu chợ có mái che và các sạp hàng rau cá ở địa phương", "Một siêu thị bán lẻ cố định tại trung tâm thương mại", "Địa điểm diễn ra các phiên đấu giá ô tô"],
        answer: 0,
        explanation: "Theo nghĩa rộng, thị trường là tổng thể các quan hệ kinh tế (mua - bán, cung - cầu, giá cả, cạnh tranh) diễn ra ở bất kì đâu, bao gồm cả thị trường truyền thống và thị trường thương mại điện tử trực tuyến."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK1",
        question: "Khi bạn đặt mua một chiếc áo trên sàn thương mại điện tử Shopee và thanh toán qua ví điện tử, hoạt động này diễn ra trên loại thị trường nào?",
        options: ["Thị trường trực tuyến (thương mại điện tử)", "Thị trường chợ đầu mối truyền thống", "Thị trường yếu tố sản xuất đất đai", "Thị trường chứng khoán phái sinh"],
        answer: 0,
        explanation: "Giao dịch mua bán thông qua Internet, ứng dụng di động mà người mua - bán không cần gặp mặt trực tiếp thuộc phạm trù thị trường trực tuyến (E-commerce)."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK1",
        question: "Chức năng 'Thừa nhận' của thị trường được biểu hiện rõ nhất khi nào?",
        options: ["Khi hàng hóa bán được trên thị trường và người tiêu dùng chấp nhận mua với mức giá đó (chứng tỏ lao động xã hội được thừa nhận)", "Khi nhà sản xuất hoàn thành xong sản phẩm cất trong kho", "Khi cơ quan thuế cấp mã số thuế cho doanh nghiệp", "Khi doanh nghiệp đăng kí bản quyền sáng chế"],
        answer: 0,
        explanation: "Hàng hóa chỉ được thị trường thừa nhận công dụng và giá trị khi người mua đồng ý chi tiền sở hữu nó; nếu không bán được, lao động hao phí của người sản xuất không được xã hội công nhận."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK1",
        question: "Chức năng 'Thông tin' của thị trường cung cấp cho người sản xuất và người tiêu dùng những chỉ báo quan trọng nào?",
        options: ["Biến động của giá cả, tình hình cung - cầu, chất lượng, thị hiếu và xu hướng tiêu dùng của xã hội", "Thông tin bí mật đời tư của giám đốc doanh nghiệp", "Quy trình thiết kế mạch điện tử của đối thủ", "Toàn bộ tài liệu mật của ngân hàng trung ương"],
        answer: 0,
        explanation: "Thông qua giá cả, số lượng hàng hóa bán ra trên thị trường, người sản xuất biết nên thu hẹp hay mở rộng sản xuất mặt hàng nào; còn người tiêu dùng biết điều chỉnh chi tiêu hợp lí."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK1",
        question: "Cơ chế thị trường là hệ thống các quan hệ kinh tế mang tính tự điều chỉnh tuân theo yêu cầu của các quy luật kinh tế nào?",
        options: ["Quy luật giá trị, quy luật cung - cầu, quy luật cạnh tranh, quy luật lưu thông tiền tệ", "Quy luật tự nhiên của thời tiết và khí hậu", "Quy luật di truyền và biến dị sinh học", "Quy luật áp đặt mệnh lệnh chủ quan của cá nhân"],
        answer: 0,
        explanation: "Cơ chế thị trường vận hành khách quan dưới tác động điều tiết của các quy luật kinh tế thị trường cơ bản: quy luật giá trị, cung - cầu, cạnh tranh và lưu thông tiền tệ (bàn tay vô hình)."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK1",
        question: "Ưu điểm nổi bật nhất của cơ chế thị trường đối với nền kinh tế là gì?",
        options: ["Kích thích đổi mới công nghệ, tăng năng suất lao động, phân bổ nguồn lực hiệu quả và thỏa mãn đa dạng nhu cầu của người tiêu dùng", "Xóa bỏ hoàn toàn khoảng cách giàu nghèo trong xã hội", "Loại bỏ hoàn toàn nguy cơ ô nhiễm môi trường", "Đảm bảo mọi doanh nghiệp đều kinh doanh có lãi"],
        answer: 0,
        explanation: "Áp lực cạnh tranh và tìm kiếm lợi nhuận buộc các doanh nghiệp trong cơ chế thị trường phải không ngừng cải tiến kĩ thuật, nâng cao chất lượng sản phẩm, hạ giá thành để tồn tại."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK1",
        question: "Mặt trái (khuyết tật) của cơ chế thị trường đòi hỏi phải có sự quản lí, điều tiết của Nhà nước là gì?",
        options: ["Phân hóa giàu nghèo, ô nhiễm môi trường sinh thái, cạn kiệt tài nguyên, buôn bán hàng giả và khủng hoảng kinh tế chu kì", "Làm cho hàng hóa sản xuất ra quá phong phú", "Làm cho giá cả hàng hóa có xu hướng giảm khi năng suất tăng", "Thúc đẩy các kĩ sư sáng tạo phần mềm mới"],
        answer: 0,
        explanation: "Chạy theo lợi nhuận đơn thuần khiến kinh tế thị trường tự phát dẫn tới khuyết tật: tàn phá môi trường, gian lận thương mại, hàng giả, phân hóa giàu nghèo gay gắt đòi hỏi Nhà nước phải can thiệp điều tiết."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK1",
        question: "Quy luật giá trị yêu cầu việc sản xuất và trao đổi hàng hóa phải dựa trên cơ sở hao phí nào?",
        options: ["Hao phí lao động xã hội cần thiết", "Hao phí lao động cá biệt của người sản xuất lười biếng nhất", "Thời gian làm việc tự do của người bán", "Chi phí quảng cáo trên truyền hình"],
        answer: 0,
        explanation: "Quy luật giá trị đòi hỏi sản xuất và trao đổi hàng hóa phải dựa trên hao phí lao động xã hội cần thiết: giá cả hàng hóa xoay quanh trục giá trị của hàng hóa đó."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK1",
        question: "Một cơ sở may mặc muốn thu được nhiều lợi nhuận trên thị trường thì thời gian lao động cá biệt của họ phải như thế nào so với thời gian lao động xã hội cần thiết?",
        options: ["Phải nhỏ hơn thời gian lao động xã hội cần thiết (nhờ cải tiến máy may, tăng kĩ năng thợ)", "Phải lớn hơn thời gian lao động xã hội cần thiết thật nhiều", "Phải kéo dài thời gian may một chiếc áo gấp ba lần mức bình quân", "Không cần quan tâm đến thời gian lao động"],
        answer: 0,
        explanation: "Khi thời gian lao động cá biệt < thời gian lao động xã hội cần thiết, chi phí sản xuất thấp hơn giá bán thị trường nên người sản xuất sẽ thu được lợi nhuận cao và có ưu thế cạnh tranh."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK1",
        question: "Hành vi nào sau đây của chủ thể kinh tế là biểu hiện của việc chấp hành đúng quy luật kinh tế và đạo đức kinh doanh?",
        options: ["Đầu tư dây chuyền sản xuất tự động, niêm yết giá công khai và xử lí nước thải đạt chuẩn môi trường trước khi xả thải", "Dùng hóa chất cấm tẩm ướp thịt ôi thiu để bán kiếm lời", "Tung tin thất thiệt bôi nhọ đối thủ cạnh tranh trên mạng xã hội", "Trốn thuế và trả lương công nhân dưới mức lương tối thiểu vùng"],
        answer: 0,
        explanation: "Chấp hành pháp luật, đầu tư công nghệ sạch, minh bạch giá cả và bảo vệ môi trường sinh thái là biểu hiện kinh doanh lành mạnh, có trách nhiệm xã hội."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK1",
        question: "Khi cung một loại hàng hóa vượt quá cầu (Cung > Cầu), giá cả thị trường của loại hàng hóa đó thường có xu hướng biến động như thế nào?",
        options: ["Giá cả giảm xuống thấp hơn giá trị hàng hóa", "Giá cả tăng vọt lên gấp đôi", "Giá cả giữ cố định không đổi", "Người bán tăng giá để bù lỗ"],
        answer: 0,
        explanation: "Khi hàng hóa ế ẩm, lượng cung nhiều hơn nhu cầu của người mua, người bán phải cạnh tranh giảm giá để giải phóng hàng tồn kho."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK1",
        question: "Để trở thành người tiêu dùng thông minh và có văn hóa trong nền kinh tế thị trường, học sinh THPT cần rèn luyện thói quen nào?",
        options: ["Lập kế hoạch chi tiêu hợp lí, ưu tiên hàng Việt Nam chất lượng cao, từ chối hàng giả hàng nhái và nói không với lãng phí", "Mua sắm theo trào lưu đua đòi bất chấp điều kiện kinh tế gia đình", "Vay tiền qua app tín dụng đen để mua điện thoại đắt tiền", "Tiêu dùng hoang phí thức ăn và xả rác bừa bãi"],
        answer: 0,
        explanation: "Người tiêu dùng thông minh biết cân đối thu - chi, tìm hiểu kĩ nguồn gốc hàng hóa, tiêu dùng bền vững tiết kiệm và ủng hộ sản phẩm thân thiện với môi trường."
    },

    // ===================================================================
    // KHỐI 10 - GDKT&PL - CUỐI KÌ 1 (CK1 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "10", subject: "gdktpl", term: "CK1",
        question: "Khái niệm 'Giá cả thị trường' được hiểu chuẩn xác là gì?",
        options: ["Số tiền phải trả cho một đơn vị hàng hóa hoặc dịch vụ nhất định trong quan hệ mua bán trên thị trường", "Mức chi phí tối thiểu để sản xuất ra một chiếc máy bay", "Số tiền người bán tự ý viết lên nhãn mà không ai mua", "Mức lương cố định của một nhân viên văn phòng"],
        answer: 0,
        explanation: "Giá cả thị trường là biểu hiện bằng tiền của giá trị hàng hóa, hình thành do sự tương tác thỏa thuận giữa người mua và người bán theo quan hệ cung - cầu."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK1",
        question: "Khi giá cả của một mặt hàng trên thị trường tăng cao đột biến, người tiêu dùng thông minh thường có xu hướng hành động như thế nào?",
        options: ["Giảm lượng mua mặt hàng đó hoặc tìm kiếm sản phẩm thay thế có công dụng tương đương với mức giá hợp lí hơn", "Mua tích trữ gấp mười lần dù không có nhu cầu sử dụng", "Vay nợ để mua bằng được mặt hàng tăng giá", "Ngừng tiêu dùng tất cả mọi thứ hàng hóa khác trên thị trường"],
        answer: 0,
        explanation: "Theo quy luật cầu, khi giá cả hàng hóa tăng lên thì lượng cầu về hàng hóa đó có xu hướng giảm xuống; người tiêu dùng sẽ tìm hàng thay thế (ví dụ giá thịt lợn tăng thì chuyển sang ăn thịt gà, cá)."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK1",
        question: "Ngân sách nhà nước (State Budget) theo Luật Ngân sách nhà nước Việt Nam được định nghĩa là:",
        options: ["Toàn bộ các khoản thu, chi của Nhà nước được dự toán và thực hiện trong một khoảng thời gian nhất định (thường là một năm) do cơ quan nhà nước có thẩm quyền quyết định để bảo đảm thực hiện các chức năng, nhiệm vụ của Nhà nước", "Tổng số tiền gửi tiết kiệm của tất cả công dân trong ngân hàng", "Số tiền quỹ phụ huynh học sinh của một trường học", "Nguồn vốn điều lệ của các doanh nghiệp tư nhân"],
        answer: 0,
        explanation: "Ngân sách nhà nước là kế hoạch tài chính tổng thể hàng năm của quốc gia, do Quốc hội quyết định và giám sát, Chính phủ tổ chức thực hiện để phục vụ phát triển kinh tế, quốc phòng, y tế, giáo dục."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK1",
        question: "Cơ quan quyền lực nhà nước cao nhất có thẩm quyền quyết định dự toán và phê chuẩn quyết toán Ngân sách nhà nước hàng năm ở Việt Nam là:",
        options: ["Quốc hội nước Cộng hòa xã hội chủ nghĩa Việt Nam", "Bộ Tài chính", "Ngân hàng Nhà nước Việt Nam", "Tổng cục Thuế"],
        answer: 0,
        explanation: "Theo Hiến pháp và Luật Ngân sách nhà nước, Quốc hội là cơ quan duy nhất có thẩm quyền làm luật, quyết định phân bổ dự toán ngân sách trung ương và phê chuẩn quyết toán ngân sách nhà nước."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK1",
        question: "Nguồn thu chủ yếu, chiếm tỉ trọng lớn nhất và ổn định nhất trong tổng thu Ngân sách nhà nước ở Việt Nam là:",
        options: ["Các khoản thu từ Thuế, phí và lệ phí", "Các khoản viện trợ không hoàn lại từ nước ngoài", "Tiền vay nợ từ các tổ chức tài chính quốc tế", "Tiền phạt vi phạm giao thông"],
        answer: 0,
        explanation: "Thuế, phí và lệ phí đóng góp từ 80% trở lên vào nguồn thu ngân sách nhà nước, là nguồn lực nội sinh bền vững của quốc gia."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK1",
        question: "Khoản chi nào sau đây thuộc nhóm 'Chi đầu tư phát triển' của Ngân sách nhà nước?",
        options: ["Xây dựng các công trình kết cấu hạ tầng giao thông (đường cao tốc, cầu cống, cảng biển), trường học công lập, bệnh viện lớn", "Chi trả lương hàng tháng cho cán bộ công chức", "Chi mua sắm văn phòng phẩm cho ủy ban xã", "Chi trợ cấp cứu đói khẩn cấp khi có bão lụt"],
        answer: 0,
        explanation: "Chi đầu tư phát triển là các khoản chi ngân sách dành cho đầu tư xây dựng cơ sở hạ tầng kinh tế - xã hội, phát triển sản xuất, gia tăng tài sản cố định cho đất nước."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK1",
        question: "Khái niệm 'Thuế' (Tax) được hiểu chuẩn xác theo pháp luật là:",
        options: ["Khoản nộp ngân sách nhà nước bắt buộc của tổ chức, hộ gia đình, cá nhân theo quy định của các luật thuế mà không mang tính hoàn trả trực tiếp", "Khoản tiền quyên góp tự nguyện ủng hộ người nghèo", "Khoản tiền gửi tiết kiệm có kì hạn tính lãi suất tại ngân hàng", "Khoản tiền trả nợ vay mua xe trả góp"],
        answer: 0,
        explanation: "Thuế là khoản nộp bắt buộc có tính pháp lí cao, nộp vào ngân sách nhà nước mà Nhà nước không bồi hoàn trực tiếp giá trị cụ thể cho người nộp (không mang tính hoàn trả trực tiếp)."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK1",
        question: "Căn cứ vào phương thức thu thuế, hệ thống thuế được chia thành hai nhóm chính là:",
        options: ["Thuế trực thu và Thuế gián thu", "Thuế nội địa và Thuế biên giới", "Thuế tháng và Thuế năm", "Thuế bắt buộc và Thuế tự nguyện"],
        answer: 0,
        explanation: "Thuế trực thu là thuế đánh trực tiếp vào thu nhập hoặc tài sản của người nộp thuế; Thuế gián thu là thuế cấu thành trong giá bán hàng hóa, người tiêu dùng là người chịu thuế thông qua người bán."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK1",
        question: "Loại thuế nào sau đây là 'Thuế trực thu'?",
        options: ["Thuế thu nhập cá nhân (TNCN) và Thuế thu nhập doanh nghiệp (TNDN)", "Thuế giá trị gia tăng (VAT)", "Thuế tiêu thụ đặc biệt (đánh vào rượu, bia, thuốc lá)", "Thuế xuất khẩu, nhập khẩu"],
        answer: 0,
        explanation: "Thuế thu nhập cá nhân và thuế thu nhập doanh nghiệp đánh trực tiếp vào phần thu nhập chịu thuế do cá nhân và tổ chức làm ra, người có nghĩa vụ nộp thuế chính là người gánh chịu thuế."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK1",
        question: "Thuế Giá trị gia tăng (VAT) được cộng vào giá bán của hàng hóa, dịch vụ và do ai thực tế chi trả?",
        options: ["Người tiêu dùng cuối cùng khi mua hàng hóa, dịch vụ đó", "Chủ cửa hàng bán lẻ gánh chịu toàn bộ", "Cơ quan quản lí thị trường chi trả", "Ngân hàng trung ương chi trả"],
        answer: 0,
        explanation: "VAT là thuế gián thu đánh trên giá trị tăng thêm của hàng hóa qua các khâu từ sản xuất đến lưu thông, và người tiêu dùng cuối cùng là người trực tiếp trả khoản thuế này cấu thành trong hóa đơn."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK1",
        question: "Nhà nước đánh Thuế tiêu thụ đặc biệt rất cao đối với các mặt hàng như thuốc lá điếu, rượu mạnh, xì gà, ô tô sang nhằm mục đích chủ yếu gì?",
        options: ["Điều tiết sản xuất và định hướng tiêu dùng, hạn chế các sản phẩm gây hại cho sức khỏe cộng đồng hoặc xa xỉ", "Cấm hoàn toàn việc mua bán các mặt hàng này", "Làm cho người dân nghèo đi", "Phục vụ việc buôn lậu qua biên giới"],
        answer: 0,
        explanation: "Thuế tiêu thụ đặc biệt là công cụ của Nhà nước nhằm hạn chế tiêu dùng các mặt hàng có hại cho sức khỏe (rượu, thuốc lá) hoặc xa xỉ phẩm, đồng thời tăng thu ngân sách cho y tế công cộng."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK1",
        question: "Hiến pháp nước CHXHCN Việt Nam năm 2013 quy định nghĩa vụ của mọi công dân về thuế là:",
        options: ["Mọi công dân có nghĩa vụ nộp thuế theo luật định", "Chỉ người giàu mới phải nộp thuế", "Học sinh và sinh viên không cần biết về nghĩa vụ thuế", "Chỉ doanh nghiệp nhà nước mới phải nộp thuế"],
        answer: 0,
        explanation: "Điều 47 Hiến pháp năm 2013 ghi rõ: 'Mọi người có nghĩa vụ nộp thuế theo luật định'. Nộp thuế đầy đủ là quyền lợi và nghĩa vụ công dân xây dựng đất nước."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK1",
        question: "Hành vi gian lận số liệu kế toán, không xuất hóa đơn bán hàng nhằm làm giảm số tiền thuế phải nộp vào ngân sách bị pháp luật coi là hành vi gì?",
        options: ["Hành vi trốn thuế (vi phạm pháp luật, có thể bị xử phạt hành chính hoặc truy cứu trách nhiệm hình sự)", "Biện pháp tiết kiệm chi phí thông minh của doanh nghiệp", "Quyền tự do quyết định của chủ hộ kinh doanh", "Hành vi được nhà nước khuyến khích"],
        answer: 0,
        explanation: "Trốn thuế là hành vi vi phạm pháp luật nghiêm trọng, xâm phạm quyền thu ngân sách của Nhà nước; tùy tính chất và mức độ vi phạm có thể bị phạt tiền gấp nhiều lần hoặc phạt tù giam."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK1",
        question: "Khi đi ăn uống tại nhà hàng hoặc mua hàng tại siêu thị, việc yêu cầu nhân viên xuất 'Hóa đơn điện tử có mã của cơ quan thuế' mang lại lợi ích gì?",
        options: ["Giúp minh bạch hóa đơn, bảo vệ quyền lợi người tiêu dùng và giám sát doanh nghiệp nộp thuế đầy đủ cho nhà nước", "Làm tốn thêm thời gian không cần thiết", "Làm cho món ăn bị đắt lên 50%", "Chỉ phục vụ cho khách hàng là người nước ngoài"],
        answer: 0,
        explanation: "Lấy hóa đơn điện tử đảm bảo quyền bảo hành, đổi trả hàng, đồng thời giúp Nhà nước chống thất thu thuế, ngăn chặn gian lận hóa đơn của các cơ sở kinh doanh."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK1",
        question: "Chức năng 'Điều tiết kinh tế' của chính sách thuế được Nhà nước thể hiện qua biện pháp nào sau đây?",
        options: ["Miễn, giảm thuế cho các doanh nghiệp đầu tư vào vùng sâu vùng xa, công nghệ cao, nông nghiệp sạch và tăng thuế với ngành gây ô nhiễm", "Áp dụng một mức thuế suất giống hệt nhau cho mọi ngành nghề bất chấp điều kiện", "Bỏ thu thuế toàn bộ các ngành sản xuất trong nước", "Tăng thuế nhập khẩu đối với tất cả các loại sách giáo khoa"],
        answer: 0,
        explanation: "Nhà nước dùng ưu đãi thuế (miễn thuế, thuế suất 0%) để khuyến khích đầu tư vào các lĩnh vực mũi nhọn, địa bàn khó khăn; và dùng thuế suất cao để hạn chế những ngành không khuyến khích."
    },

    // ===================================================================
    // KHỐI 10 - GDKT&PL - GIỮA KÌ 2 (GK2 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "10", subject: "gdktpl", term: "GK2",
        question: "Sản xuất kinh doanh là hoạt động nhằm mục đích gì của các chủ thể kinh tế?",
        options: ["Tạo ra sản phẩm, hàng hóa, dịch vụ đáp ứng nhu cầu thị trường để thu lợi nhuận", "Chỉ để làm từ thiện không thu hồi vốn", "Chỉ nhằm mục đích giải trí cá nhân lúc rảnh rỗi", "Để trưng bày sản phẩm mà không bán ra thị trường"],
        answer: 0,
        explanation: "Sản xuất kinh doanh là hoạt động đầu tư vốn, lao động để sản xuất, mua bán hàng hóa, cung cấp dịch vụ trên thị trường nhằm mục tiêu chính là tìm kiếm lợi nhuận."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK2",
        question: "Mô hình 'Hộ kinh doanh' ở Việt Nam có đặc điểm pháp lí nào sau đây?",
        options: ["Do một cá nhân hoặc các thành viên hộ gia đình đăng kí thành lập và chịu trách nhiệm bằng toàn bộ tài sản của mình đối với hoạt động kinh doanh (trách nhiệm vô hạn)", "Có tư cách pháp nhân riêng biệt với tài sản chủ hộ", "Được phát hành cổ phiếu công khai trên thị trường chứng khoán", "Được thành lập chi nhánh và văn phòng đại diện trên toàn cầu"],
        answer: 0,
        explanation: "Hộ kinh doanh không có tư cách pháp nhân, quy mô nhỏ gọn, thủ tục đăng kí đơn giản và chủ hộ chịu trách nhiệm vô hạn bằng toàn bộ tài sản dân sự của mình."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK2",
        question: "Đặc điểm cơ bản của loại hình 'Doanh nghiệp tư nhân' theo Luật Doanh nghiệp là:",
        options: ["Do một cá nhân làm chủ và tự chịu trách nhiệm bằng toàn bộ tài sản của mình về mọi hoạt động của doanh nghiệp", "Do ít nhất 3 thành viên góp vốn thành lập", "Được phép phát hành bất kì loại chứng khoán nào", "Chủ doanh nghiệp chỉ chịu trách nhiệm trong phạm vi số vốn đăng kí"],
        answer: 0,
        explanation: "Doanh nghiệp tư nhân là doanh nghiệp do 1 cá nhân làm chủ, không có tư cách pháp nhân, chủ doanh nghiệp chịu trách nhiệm vô hạn đối với các khoản nợ của doanh nghiệp."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK2",
        question: "Điểm khác biệt quan trọng nhất của 'Công ty Cổ phần' so với các loại hình doanh nghiệp khác là gì?",
        options: ["Vốn điều lệ được chia thành nhiều phần bằng nhau gọi là cổ phần, có quyền phát hành cổ phiếu ra công chúng để huy động vốn", "Chỉ được phép có tối đa 2 cổ đông", "Cổ đông phải chịu trách nhiệm vô hạn bằng nhà đất của mình", "Không cần đăng kí kinh doanh với cơ quan nhà nước"],
        answer: 0,
        explanation: "Công ty Cổ phần có số lượng cổ đông tối thiểu là 3 (không giới hạn tối đa), vốn chia nhỏ thành cổ phần và là loại hình duy nhất được phát hành cổ phiếu niêm yết trên sàn chứng khoán."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK2",
        question: "Khái niệm 'Tín dụng' (Credit) trong kinh tế phản ánh quan hệ kinh tế giữa:",
        options: ["Người cho vay và người vay, dựa trên sự tin tưởng, có cam kết hoàn trả cả tiền gốc và tiền lãi sau một thời gian xác định", "Người mua và người bán thanh toán tiền ngay tại chỗ", "Người tặng quà và người nhận quà không hoàn lại", "Nhà nước thu tiền phạt vi phạm giao thông"],
        answer: 0,
        explanation: "Tín dụng là quan hệ vay mượn dựa trên chữ tín (niềm tin), có tính hoàn trả (cả gốc và lãi) và có thời hạn xác định giữa bên cho vay và bên đi vay."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK2",
        question: "Hình thức 'Tín dụng ngân hàng' là hình thức tín dụng giữa ai với ai?",
        options: ["Giữa ngân hàng (tổ chức tín dụng) với các cá nhân, doanh nghiệp dưới dạng cho vay tiền mặt hoặc chuyển khoản", "Giữa hai doanh nghiệp mua bán chịu hàng hóa cho nhau", "Giữa các cá nhân chơi họ hụi tự phát", "Giữa chủ nợ 'tín dụng đen' cho vay lãi nặng"],
        answer: 0,
        explanation: "Tín dụng ngân hàng là hình thức tín dụng chuyên nghiệp, trong đó ngân hàng huy động tiền gửi từ người tiết kiệm và cho các chủ thể khác vay lại phục vụ sản xuất tiêu dùng."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK2",
        question: "Hình thức 'Tín dụng thương mại' được thể hiện thông qua hành vi nào sau đây?",
        options: ["Doanh nghiệp bán chịu hàng hóa, vật tư cho khách hàng hoặc cho khách hàng trả chậm tiền hàng", "Ngân hàng mở thẻ tín dụng cho sinh viên", "Khách hàng gửi tiền có kì hạn vào quỹ tín dụng", "Chính phủ phát hành trái phiếu quốc tế"],
        answer: 0,
        explanation: "Tín dụng thương mại là quan hệ tín dụng trực tiếp giữa các doanh nghiệp sản xuất - kinh doanh với nhau, thực hiện dưới hình thức mua bán chịu hàng hóa thông qua thương phiếu."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK2",
        question: "Khi vay tiền mua xe máy trả góp hoặc vay đóng học phí, người đi vay đang tham gia hình thức tín dụng nào?",
        options: ["Tín dụng tiêu dùng", "Tín dụng nhà nước", "Tín dụng thương mại", "Tín dụng quốc tế"],
        answer: 0,
        explanation: "Tín dụng tiêu dùng là hình thức cấp tín dụng cho cá nhân, hộ gia đình vay để đáp ứng nhu cầu tiêu dùng đời sống (mua xe, mua nhà, điện máy, chi phí học tập...)."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK2",
        question: "Hành vi vay mượn tiền từ các tổ chức 'tín dụng đen' với lãi suất 'cắt cổ' từ 100% đến 300%/năm sẽ dẫn tới hậu quả nặng nề nào?",
        options: ["Mất khả năng trả nợ, nợ nần chồng chất, bị đe dọa đòi nợ khủng bố tinh thần và gây mất an ninh trật tự xã hội", "Giúp người vay nhanh chóng làm giàu bền vững", "Được pháp luật và ngân hàng nhà nước bảo vệ tuyệt đối", "Được miễn trừ hoàn toàn nợ gốc sau 1 năm"],
        answer: 0,
        explanation: "'Tín dụng đen' là hành vi cho vay nặng lãi vi phạm pháp luật, dùng các thủ đoạn xiết nợ bạo lực làm tan cửa nát nhà nhiều gia đình, người dân tuyệt đối không nên dính líu."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK2",
        question: "Khái niệm 'Kế hoạch tài chính cá nhân' là bản kế hoạch giúp mỗi người:",
        options: ["Xác định rõ các nguồn thu nhập, dự kiến các khoản chi tiêu và phân bổ tiền hợp lí cho tiết kiệm, đầu tư nhằm đạt mục tiêu tài chính", "Ghi lại những món đồ đã mua trong quá khứ để so sánh", "Lên danh sách vay nợ nhiều nhất có thể", "Từ bỏ mọi nhu cầu ăn uống để tiết kiệm 100% tiền"],
        answer: 0,
        explanation: "Lập kế hoạch tài chính cá nhân là việc theo dõi, cân đối dòng tiền thu vào - chi ra, thiết lập quỹ dự phòng khẩn cấp và phân bổ hợp lí để đạt mục tiêu ngắn hạn cũng như dài hạn."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK2",
        question: "Theo quy tắc phân bổ tài chính cá nhân nổi tiếng 50/30/20, khoản 20% thu nhập hàng tháng nên được dành ưu tiên cho mục đích gì?",
        options: ["Tiết kiệm tích lũy, xây dựng quỹ khẩn cấp và đầu tư tương lai", "Chi trả nhu cầu thiết yếu hàng ngày (ăn uống, tiền nhà)", "Mua sắm quần áo thời trang xa xỉ theo sở thích", "Đi du lịch nghỉ dưỡng nước ngoài"],
        answer: 0,
        explanation: "Quy tắc 50/30/20: 50% cho chi tiêu thiết yếu (Needs), 30% cho mong muốn sở thích cá nhân (Wants), và 20% cho tiết kiệm, trả nợ và đầu tư tạo quỹ an toàn (Savings/Debts)."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK2",
        question: "'Quỹ dự phòng tài chính khẩn cấp' có vai trò quan trọng như thế nào trong đời sống?",
        options: ["Giúp trang trải các chi phí bất ngờ không lường trước (như ốm đau, tai nạn, mất việc làm tạm thời) mà không phải vay nợ lãi cao", "Dùng để đầu tư chứng khoán mạo hiểm", "Dùng để mua vé số cầu may mỗi ngày", "Dùng để tổ chức các bữa tiệc tốn kém"],
        answer: 0,
        explanation: "Quỹ khẩn cấp (tương đương 3 - 6 tháng chi phí sinh hoạt) là tấm đệm an toàn bảo vệ bạn trước những cú sốc cuộc sống như viện phí, hỏng hóc tài sản hoặc gián đoạn thu nhập."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK2",
        question: "Học sinh THPT có thể bắt đầu rèn luyện quản lí tài chính cá nhân thông qua thói quen nào thiết thực nhất?",
        options: ["Ghi chép chi tiêu tiền tiêu vặt hàng ngày, phân biệt rõ nhu cầu thiết yếu và sở thích nhất thời, nuôi heo đất tiết kiệm", "Mua sắm thả ga không cần nhìn giá", "Lấy tiền đóng học phí để chơi game cá cược online", "Giấu bố mẹ đi vay tiền bạn bè để tiêu xài"],
        answer: 0,
        explanation: "Rèn luyện thói quen ghi chép chi tiêu nhỏ hàng ngày, phân biệt 'cần' (needs) và 'muốn' (wants) giúp hình thành tư duy tài chính thông minh, độc lập và tránh lãng phí."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK2",
        question: "Lợi ích của việc mở tài khoản tiết kiệm ngân hàng so với việc cất giữ tiền mặt ở nhà là gì?",
        options: ["An toàn tránh mất mát hỏa hoạn, tiền sinh lời từ lãi suất và kiểm soát thói quen chi tiêu bốc đồng", "Tiền gửi ngân hàng sẽ tự nhân đôi sau mỗi tuần", "Không bao giờ rút ra được khi cần thiết", "Chỉ người trên 60 tuổi mới được mở"],
        answer: 0,
        explanation: "Gửi tiết kiệm ngân hàng vừa an toàn, phòng ngừa rủi ro mất trộm, vừa được hưởng lãi suất theo kì hạn giúp chống lại sự mất giá của đồng tiền do lạm phát."
    },
    {
        grade: "10", subject: "gdktpl", term: "GK2",
        question: "Trước khi quyết định vay tín dụng để mua sắm một món đồ có giá trị, điều quan trọng nhất bạn cần cân nhắc là gì?",
        options: ["Khả năng trả nợ hàng tháng từ thu nhập thực tế, mức lãi suất vay và các điều khoản phạt trả chậm", "Xem món đồ đó có đang 'hot trend' trên TikTok hay không", "Rủ thêm nhiều bạn bè vay cùng cho vui", "Chỉ cần người cho vay không đòi giấy tờ tùy thân"],
        answer: 0,
        explanation: "Vay nợ phải nằm trong khả năng thanh toán (tổng nợ hàng tháng không vượt quá 30 - 40% thu nhập), đọc kĩ hợp đồng về lãi suất thực tế để tránh rơi vào bẫy nợ nần."
    },

    // ===================================================================
    // KHỐI 10 - GDKT&PL - CUỐI KÌ 2 (CK2 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "10", subject: "gdktpl", term: "CK2",
        question: "Hệ thống chính trị nước Cộng hòa xã hội chủ nghĩa Việt Nam hiện nay bao gồm các thành tố cơ bản nào?",
        options: ["Đảng Cộng sản Việt Nam, Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam, Mặt trận Tổ quốc Việt Nam và các tổ chức chính trị - xã hội", "Chỉ bao gồm duy nhất hệ thống Tòa án nhân dân", "Bao gồm các tập đoàn kinh tế đa quốc gia", "Bao gồm các tôn giáo và hội từ thiện"],
        answer: 0,
        explanation: "Hệ thống chính trị Việt Nam vận hành theo cơ chế: 'Đảng lãnh đạo, Nhà nước quản lí, Nhân dân làm chủ', gồm Đảng Cộng sản, Nhà nước CHXHCNVN, Mặt trận Tổ quốc và 5 đoàn thể chính trị - xã hội."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK2",
        question: "Lực lượng nào giữ vai trò lãnh đạo Nhà nước và toàn xã hội Việt Nam được quy định rõ tại Điều 4 Hiến pháp năm 2013?",
        options: ["Đảng Cộng sản Việt Nam (đội tiên phong của giai cấp công nhân và nhân dân lao động)", "Tổng Liên đoàn Lao động Việt Nam", "Hội Doanh nhân trẻ Việt Nam", "Các tổ chức phi chính phủ"],
        answer: 0,
        explanation: "Điều 4 Hiến pháp năm 2013 khẳng định: Đảng Cộng sản Việt Nam là lực lượng lãnh đạo Nhà nước và xã hội, gắn bó mật thiết với nhân dân, phục vụ nhân dân và chịu sự giám sát của nhân dân."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK2",
        question: "Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam mang bản chất của giai cấp nào?",
        options: ["Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân, mang bản chất của giai cấp công nhân", "Bản chất của giai cấp phong kiến", "Bản chất của giai cấp tư sản độc quyền", "Không mang bản chất của bất kì giai cấp nào"],
        answer: 0,
        explanation: "Nhà nước ta là Nhà nước pháp quyền xã hội chủ nghĩa của Nhân dân, do Nhân dân, vì Nhân dân; tính giai cấp công nhân thể hiện ở mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK2",
        question: "Hiến pháp có vị trí và hiệu lực pháp lí như thế nào trong hệ thống pháp luật Việt Nam?",
        options: ["Là luật cơ bản của Nhà nước, có hiệu lực pháp lí cao nhất; mọi văn bản quy phạm pháp luật khác không được trái với Hiến pháp", "Có giá trị ngang bằng với một nghị quyết của ủy ban nhân dân xã", "Chỉ có giá trị áp dụng trong thời kì chiến tranh", "Thấp hơn thông tư của các bộ trưởng"],
        answer: 0,
        explanation: "Hiến pháp là đạo luật mẹ, đạo luật gốc có hiệu lực pháp lí tối cao. Mọi luật, bộ luật, nghị định, thông tư đều phải căn cứ vào Hiến pháp và không được mâu thuẫn với Hiến pháp."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK2",
        question: "Quyền nào sau đây thuộc nhóm 'Quyền con người, quyền cơ bản về chính trị' của công dân được Hiến pháp 2013 bảo hộ?",
        options: ["Quyền bầu cử và quyền ứng cử vào Quốc hội, Hội đồng nhân dân; quyền tham gia quản lí nhà nước", "Quyền tự do kết hôn theo sở thích", "Quyền sở hữu xe máy cá nhân", "Quyền được chữa bệnh tại bệnh viện"],
        answer: 0,
        explanation: "Các quyền chính trị của công dân gồm: quyền bầu cử và ứng cử, quyền tham gia quản lí nhà nước và xã hội, quyền biểu quyết khi Nhà nước trưng cầu ý dân, quyền khiếu nại, tố cáo."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK2",
        question: "Pháp luật là hệ thống các quy tắc xử sự chung do ai ban hành và bảo đảm thực hiện bằng quyền lực nhà nước?",
        options: ["Do Nhà nước ban hành và bảo đảm thực hiện", "Do các dòng họ lớn tự quy ước truyền miệng", "Do các hiệp hội doanh nghiệp tư nhân lập ra", "Do hội phụ huynh học sinh quy định"],
        answer: 0,
        explanation: "Pháp luật là hệ thống các quy tắc xử sự mang tính bắt buộc chung do Nhà nước ban hành hoặc thừa nhận, thể hiện ý chí của giai cấp thống trị và được Nhà nước bảo đảm thực hiện bằng sức mạnh cưỡng chế."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK2",
        question: "Đặc trưng nào sau đây của pháp luật giúp phân biệt rõ ràng giữa quy phạm pháp luật với các chuẩn mực đạo đức, phong tục tập quán?",
        options: ["Tính quy phạm phổ biến và Tính quyền lực, bắt buộc chung được bảo đảm bằng biện pháp cưỡng chế nhà nước", "Tính linh hoạt thích thay đổi lúc nào cũng được", "Chỉ áp dụng cho người nghèo trong xã hội", "Không cần ghi chép thành văn bản"],
        answer: 0,
        explanation: "Pháp luật có 3 đặc trưng cơ bản: Tính quy phạm phổ biến, Tính quyền lực - bắt buộc chung (cưỡng chế) và Tính xác định chặt chẽ về mặt hình thức."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK2",
        question: "Hành vi người tham gia giao thông dừng xe trước vạch sơn khi gặp đèn đỏ là hình thức thực hiện pháp luật nào?",
        options: ["Tuân thủ pháp luật (kiềm chế không làm điều pháp luật cấm)", "Sử dụng pháp luật", "Áp dụng pháp luật", "Lạm quyền pháp luật"],
        answer: 0,
        explanation: "Tuân thủ pháp luật là việc các cá nhân, tổ chức kiềm chế không tiến hành những hành vi mà pháp luật nghiêm cấm (không vượt đèn đỏ, không buôn bán hàng cấm)."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK2",
        question: "Hành vi công dân đủ 18 tuổi chủ động đi đăng kí thành lập doanh nghiệp hoặc viết đơn đăng kí dự thi đại học là hình thức thực hiện pháp luật nào?",
        options: ["Sử dụng pháp luật (thực hiện quyền mà pháp luật cho phép)", "Tuân thủ pháp luật", "Thi hành pháp luật", "Chấp hành hình phạt"],
        answer: 0,
        explanation: "Sử dụng pháp luật là việc các cá nhân, tổ chức sử dụng đúng đắn các quyền của mình, làm những gì mà pháp luật cho phép làm (quyền kinh doanh, quyền học tập, quyền tự do ngôn luận)."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK2",
        question: "Khi Cảnh sát giao thông lập biên bản và ra quyết định xử phạt hành chính một người điều khiển xe máy chạy quá tốc độ, đó là hình thức thực hiện pháp luật nào?",
        options: ["Áp dụng pháp luật (chỉ do cơ quan, người có thẩm quyền của Nhà nước thực hiện theo luật định)", "Sử dụng pháp luật của công dân", "Thi hành pháp luật tự giác", "Tuân thủ pháp luật"],
        answer: 0,
        explanation: "Áp dụng pháp luật là hình thức thực hiện pháp luật có tính chất quyền lực nhà nước, do cơ quan hoặc cán bộ nhà nước có thẩm quyền căn cứ vào pháp luật để ra các quyết định xử lí cụ thể."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK2",
        question: "Vi phạm pháp luật là hành vi có đầy đủ các dấu hiệu cơ bản nào sau đây?",
        options: ["Là hành vi xác định của con người, trái pháp luật, có lỗi của chủ thể và chủ thể có năng lực trách nhiệm pháp lí", "Là ý nghĩ ghen ghét trong đầu chưa biểu hiện ra ngoài", "Là hành vi bị ép buộc bất khả kháng do thiên tai gây ra", "Là hành vi của một đứa trẻ 3 tuổi làm vỡ đồ chơi"],
        answer: 0,
        explanation: "Vi phạm pháp luật phải hội tụ 4 yếu tố: Hành vi xác định (hành động hoặc không hành động), Trái pháp luật, Có lỗi (cố ý hoặc vô ý) và do Người có năng lực trách nhiệm pháp lí thực hiện."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK2",
        question: "Loại vi phạm pháp luật nào sau đây có mức độ nguy hiểm cao nhất cho xã hội, bị coi là tội phạm quy định trong Bộ luật Hình sự?",
        options: ["Vi phạm hình sự (tội phạm)", "Vi phạm hành chính", "Vi phạm dân sự", "Vi phạm kỉ luật trong trường học"],
        answer: 0,
        explanation: "Vi phạm hình sự (tội phạm) là hành vi nguy hiểm nhất cho xã hội, xâm phạm đến tính mạng, sức khỏe, tài sản lớn, trật tự xã hội và chủ quyền quốc gia, bị xử lí bằng hình phạt tù hoặc tử hình."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK2",
        question: "Hành vi buôn bán lấn chiếm lòng lề đường hoặc không đội mũ bảo hiểm khi đi xe máy trên đường là loại vi phạm pháp luật nào?",
        options: ["Vi phạm hành chính", "Vi phạm hình sự", "Vi phạm kỉ luật quân đội", "Vi phạm dân sự"],
        answer: 0,
        explanation: "Vi phạm hành chính là hành vi vi phạm quy tắc quản lí nhà nước nhưng chưa đến mức cấu thành tội phạm hình sự, bị xử phạt vi phạm hành chính (phạt cảnh cáo, phạt tiền, tước giấy phép)."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK2",
        question: "Một học sinh lớp 10 nghỉ học không phép nhiều ngày và thường xuyên gây gổ trong trường sẽ phải chịu trách nhiệm pháp lí nào sau đây?",
        options: ["Trách nhiệm kỉ luật (theo nội quy nhà trường và quy chế của ngành giáo dục)", "Trách nhiệm hình sự ngồi tù", "Trách nhiệm dân sự bồi thường đất đai", "Trách nhiệm bồi thường quốc tế"],
        answer: 0,
        explanation: "Học sinh vi phạm nội quy trường lớp sẽ bị hội đồng kỉ luật xem xét xử lí trách nhiệm kỉ luật (khiển trách, đình chỉ học tập có thời hạn) theo điều lệ trường trung học."
    },
    {
        grade: "10", subject: "gdktpl", term: "CK2",
        question: "Học sinh THPT có thể nâng cao ý thức 'Sống và làm việc theo Hiến pháp và Pháp luật' bằng những hành động cụ thể nào?",
        options: ["Nghiêm túc chấp hành luật giao thông, nói không với bạo lực học đường, bảo vệ của công và chủ động tìm hiểu các quy định pháp luật", "Che giấu hành vi trộm cắp tài sản của bạn cùng lớp", "Đi xe máy trên 50cc khi chưa đủ tuổi và chưa có bằng lái", "Tự ý quay lén và tung thông tin bôi nhọ người khác lên mạng"],
        answer: 0,
        explanation: "Học sinh tôn trọng pháp luật biểu hiện qua lối sống chuẩn mực: tuân thủ an toàn giao thông, ứng xử văn minh trên mạng xã hội, phòng chống bạo lực và tuyên truyền pháp luật cho gia đình, bạn bè."
    },

    // ===================================================================
    // KHỐI 11 - ĐỊA LÍ - GIỮA KÌ 1 (GK1 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "11", subject: "dia", term: "GK1",
        question: "Chỉ tiêu tổng hợp phản ánh toàn diện chất lượng cuộc sống của con người (bao gồm sức khỏe, giáo dục và thu nhập) dùng để phân loại các nhóm nước là:",
        options: ["Chỉ số phát triển con người (HDI - Human Development Index)", "Tổng thu nhập quốc dân (GNI)", "Tổng sản phẩm quốc nội (GDP)", "Tỉ lệ gia tăng dân số tự nhiên"],
        answer: 0,
        explanation: "HDI là chỉ số tổng hợp của Liên Hợp Quốc gồm 3 tiêu chí: Tuổi thọ trung bình (sức khỏe), Số năm đi học kì vọng (giáo dục) và GNI bình quân đầu người (mức sống)."
    },
    {
        grade: "11", subject: "dia", term: "GK1",
        question: "Nhóm các nước phát triển (như Hoa Kỳ, Nhật Bản, Đức, Canada...) có đặc điểm cơ cấu ngành kinh tế nổi bật nào sau đây?",
        options: ["Khu vực Dịch vụ chiếm tỉ trọng rất cao trong GDP (thường trên 70%), nông nghiệp chỉ chiếm tỉ trọng rất nhỏ (dưới 2-3%)", "Khu vực Nông - lâm - thủy sản chiếm trên 50% GDP", "Công nghiệp khai khoáng thô là ngành xuất khẩu chủ lực duy nhất", "Không có hoạt động nghiên cứu khoa học công nghệ"],
        answer: 0,
        explanation: "Các nước phát triển có nền kinh tế tri thức hiện đại, cơ cấu kinh tế nghiêng hẳn về dịch vụ (tài chính, công nghệ cao, logistic) chiếm tỉ trọng áp đảo trong GDP."
    },
    {
        grade: "11", subject: "dia", term: "GK1",
        question: "Biểu hiện rõ nét nhất của xu thế Toàn cầu hóa kinh tế thế giới hiện nay là gì?",
        options: ["Thương mại quốc tế tăng trưởng nhanh, thị trường tài chính quốc tế mở rộng, các công ty xuyên quốc gia (TNCs) giữ vai trò chi phối", "Các quốc gia đóng cửa biên giới không trao đổi hàng hóa", "Xóa bỏ hoàn toàn việc sử dụng mạng Internet xuyên quốc gia", "Mỗi quốc gia chỉ dùng một đồng tiền riêng không quy đổi"],
        answer: 0,
        explanation: "Toàn cầu hóa kinh tế biểu hiện qua sự tự do hóa thương mại, luân chuyển dòng vốn toàn cầu, liên kết sản xuất quốc tế và vai trò thống trị của các tập đoàn xuyên quốc gia."
    },
    {
        grade: "11", subject: "dia", term: "GK1",
        question: "Hệ quả tích cực quan trọng hàng đầu của xu thế Toàn cầu hóa đối với các nước đang phát triển (như Việt Nam) là gì?",
        options: ["Tranh thủ nguồn vốn đầu tư FDI, chuyển giao công nghệ hiện đại và mở rộng thị trường xuất khẩu hàng hóa ra toàn cầu", "Không phải chịu bất kì áp lực cạnh tranh kinh tế nào", "Tự động xóa bỏ hoàn toàn khoảng cách giàu nghèo", "Giúp đất nước không bao giờ bị ô nhiễm môi trường"],
        answer: 0,
        explanation: "Toàn cầu hóa giúp các nước đang phát triển thu hút vốn FDI, học hỏi công nghệ tiên tiến, tiếp cận thị trường rộng lớn và tham gia vào chuỗi giá trị toàn cầu."
    },
    {
        grade: "11", subject: "dia", term: "GK1",
        question: "Tổ chức tài chính quốc tế có vai trò thúc đẩy hợp tác tiền tệ toàn cầu, ổn định tỉ giá hối đoái và cung cấp các khoản vay khẩn cấp khi các nước thành viên gặp khủng hoảng cán cân thanh toán là:",
        options: ["Quỹ Tiền tệ Quốc tế (IMF - International Monetary Fund)", "Ngân hàng Thế giới (WB)", "Tổ chức Y tế Thế giới (WHO)", "Hiệp hội các quốc gia Đông Nam Á (ASEAN)"],
        answer: 0,
        explanation: "IMF giám sát hệ thống tiền tệ quốc tế, duy trì ổn định tài chính và hỗ trợ thanh khoản khẩn cấp cho các quốc gia thành viên khi đối mặt với khủng hoảng ngoại hối."
    },
    {
        grade: "11", subject: "dia", term: "GK1",
        question: "Vấn đề 'An ninh lương thực toàn cầu' đang bị đe dọa nghiêm trọng bởi các nguyên nhân chủ yếu nào sau đây?",
        options: ["Biến đổi khí hậu (hạn hán, ngập lụt), xung đột vũ trang, đứt gãy chuỗi cung ứng và suy thoái diện tích đất canh tác", "Do sản lượng lúa gạo toàn cầu sản xuất ra quá nhiều", "Do các nhà khoa học ngừng nghiên cứu giống cây trồng mới", "Do dân số thế giới đang giảm mạnh liên tục"],
        answer: 0,
        explanation: "An ninh lương thực bị đe dọa khi thời tiết cực đoan làm mất mùa, xung đột địa chính trị làm tắc nghẽn xuất khẩu ngũ cốc và áp lực dân số gia tăng trên diện tích đất nông nghiệp bị thu hẹp."
    },
    {
        grade: "11", subject: "dia", term: "GK1",
        question: "An ninh năng lượng toàn cầu đòi hỏi các quốc gia phải thực hiện giải pháp chiến lược nào sau đây?",
        options: ["Tiết kiệm năng lượng, đa dạng hóa nguồn cung và đẩy mạnh chuyển dịch sang các nguồn năng lượng tái tạo (gió, mặt trời, hydro xanh)", "Tăng cường khai thác triệt để than đá bất chấp ô nhiễm môi trường", "Chỉ sử dụng duy nhất một nguồn cung dầu mỏ từ một quốc gia", "Ngừng phát triển mạng lưới điện thông minh"],
        answer: 0,
        explanation: "Để đảm bảo an ninh năng lượng bền vững, các quốc gia phải giảm phụ thuộc vào nhiên liệu hóa thạch nhập khẩu, tăng tỉ trọng năng lượng xanh tái tạo và sử dụng năng lượng hiệu quả."
    },
    {
        grade: "11", subject: "dia", term: "GK1",
        question: "Vấn đề 'An ninh mạng (Cybersecurity)' trở thành thách thức an ninh phi truyền thống cấp bách vì:",
        options: ["Các cuộc tấn công mạng, đánh cắp dữ liệu, mã độc tống tiền có thể làm tê liệt cơ sở hạ tầng trọng yếu (ngân hàng, điện lực, giao thông) và đe dọa an ninh quốc gia", "Làm cho máy tính cá nhân bị bụi bẩn", "Làm chậm việc gửi thư bưu chính tay", "Làm giảm việc đọc báo giấy in"],
        answer: 0,
        explanation: "Trong kỉ nguyên số hóa, các hệ thống điều hành quốc gia (lưới điện, viễn thông, hàng không, tài chính) đều kết nối mạng; tấn công mạng có thể gây thiệt hại hàng tỉ USD và đe dọa chủ quyền quốc gia."
    },
    {
        grade: "11", subject: "dia", term: "GK1",
        question: "Hiệp ước Paris về Biến đổi khí hậu (năm 2015) đặt ra mục tiêu nỗ lực toàn cầu giữ cho nhiệt độ Trái Đất không tăng quá bao nhiêu độ C so với thời kì tiền công nghiệp?",
        options: ["Dưới 2,0 °C và nỗ lực giới hạn mức tăng ở 1,5 °C", "Dưới 5,0 °C", "Dưới 10,0 °C", "Không đặt ra bất kì con số giới hạn nào"],
        answer: 0,
        explanation: "Thỏa thuận Paris 2015 cam kết giữ nhiệt độ toàn cầu tăng dưới 2 °C và nỗ lực đạt mức 1,5 °C so với thời kì tiền công nghiệp thông qua việc giảm phát thải ròng bằng 0 (Net Zero) vào năm 2050."
    },
    {
        grade: "11", subject: "dia", term: "GK1",
        question: "Các tổ chức liên kết kinh tế khu vực (như EU, ASEAN, NAFTA/USMCA, MERCOSUR) được hình thành chủ yếu do:",
        options: ["Các quốc gia có vị trí địa lí gần gũi, nét tương đồng về văn hóa, lịch sử và nhu cầu liên kết mở rộng thị trường, tăng sức cạnh tranh quốc tế", "Sự bắt buộc áp đặt quân sự của Liên Hợp Quốc", "Ý muốn chủ quan của một tập đoàn tư nhân duy nhất", "Mục tiêu xóa bỏ hoàn toàn ngôn ngữ dân tộc của các nước"],
        answer: 0,
        explanation: "Khu vực hóa kinh tế là xu thế khách quan: các nước gần gũi về địa lí, có chung lợi ích kinh tế bắt tay liên kết thành các khối thương mại tự do nhằm tận dụng lợi thế bổ sung cho nhau."
    },
    {
        grade: "11", subject: "dia", term: "GK1",
        question: "Biểu hiện nào sau đây chứng minh sự chênh lệch lớn về mức sống giữa các nước phát triển và các nước đang phát triển?",
        options: ["GNI bình quân đầu người của nhóm nước phát triển cao gấp nhiều lần nhóm nước đang phát triển (thường trên 13.000 USD/người/năm)", "Tuổi thọ trung bình ở các nước đang phát triển cao hơn nhiều nước phát triển", "Các nước phát triển có tỉ lệ mù chữ cao hơn", "Cơ cấu dân số ở các nước phát triển rất trẻ"],
        answer: 0,
        explanation: "GNI/người ở nhóm nước phát triển thường đạt mức trên 13.000 - 50.000 USD/năm, trong khi ở nhóm nước đang phát triển (đặc biệt các nước kém phát triển) con số này chỉ từ vài trăm đến vài nghìn USD."
    },
    {
        grade: "11", subject: "dia", term: "GK1",
        question: "Tổ chức Thương mại Thế giới (WTO) chính thức thành lập vào năm nào và Việt Nam gia nhập WTO vào năm nào?",
        options: ["WTO thành lập năm 1995; Việt Nam trở thành thành viên thứ 150 vào năm 2007", "WTO thành lập năm 1945; Việt Nam gia nhập năm 1976", "WTO thành lập năm 2010; Việt Nam gia nhập năm 2020", "WTO thành lập năm 1986; Việt Nam gia nhập năm 1995"],
        answer: 0,
        explanation: "WTO ra đời ngày 01/01/1995 thay thế GATT; ngày 11/01/2007, Việt Nam chính thức trở thành thành viên thứ 150 của WTO, đánh dấu bước hội nhập sâu rộng vào nền kinh tế toàn cầu."
    },
    {
        grade: "11", subject: "dia", term: "GK1",
        question: "Thách thức lớn nhất của Việt Nam khi tham gia vào quá trình toàn cầu hóa và các hiệp định thương mại tự do thế hệ mới (CPTPP, EVFTA) là gì?",
        options: ["Sức ép cạnh tranh gay gắt từ hàng hóa nhập khẩu, nguy cơ tụt hậu kinh tế nếu không kịp đổi mới công nghệ và chuyển dịch cơ cấu kịp thời", "Không được xuất khẩu nông sản ra thị trường thế giới", "Bị cấm thu hút vốn đầu tư nước ngoài", "Không được cử sinh viên ra nước ngoài du học"],
        answer: 0,
        explanation: "Mở cửa thị trường buộc doanh nghiệp nội địa phải cạnh tranh sòng phẳng với các tập đoàn đa quốc gia có tiềm lực tài chính và công nghệ vượt trội; hàng rào kĩ thuật và quy chuẩn lao động, môi trường ngày càng khắt khe."
    },
    {
        grade: "11", subject: "dia", term: "GK1",
        question: "Vấn đề 'Ô nhiễm rác thải nhựa đại dương' đe dọa sinh quyển toàn cầu vì lý do nào sau đây?",
        options: ["Hạt vi nhựa (Microplastics) không phân hủy, đầu độc sinh vật biển, xâm nhập vào chuỗi thức ăn và tích tụ gây hại nghiêm trọng cho sức khỏe con người", "Rác thải nhựa làm nước biển ngọt hóa", "Rác thải nhựa làm tăng sóng thần ngoài khơi", "Rác thải nhựa làm biến mất các dòng hải lưu"],
        answer: 0,
        explanation: "Hàng triệu tấn nhựa trôi nổi trên đại dương vỡ vụn thành các hạt vi nhựa cực nhỏ, cá và sinh vật phù du ăn phải; con người tiêu thụ hải sản sẽ tích tụ vi nhựa và độc tố trong nội tạng."
    },
    {
        grade: "11", subject: "dia", term: "GK1",
        question: "Khái niệm 'Kinh tế tri thức (Knowledge Economy)' được hiểu là nền kinh tế mà trong đó:",
        options: ["Sự sản sinh, truyền bá và sử dụng tri thức, thông tin đóng vai trò là động lực chủ yếu nhất cho sự tăng trưởng kinh tế và tạo ra của cải", "Toàn bộ việc làm chỉ dựa vào sức mạnh cơ bắp của công nhân", "Khai thác tối đa tài nguyên rừng và khoáng sản thô", "Kinh tế hoàn toàn không cần vốn tiền tệ"],
        answer: 0,
        explanation: "Theo OECD, kinh tế tri thức là nền kinh tế dựa trực tiếp vào việc tạo ra, phân phối và sử dụng tri thức, công nghệ thông tin và nguồn nhân lực chất lượng cao để tạo ra giá trị gia tăng khổng lồ."
    },

    // ===================================================================
    // KHỐI 11 - ĐỊA LÍ - CUỐI KÌ 1 (CK1 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "11", subject: "dia", term: "CK1",
        question: "Khu vực Mỹ La-tinh (Latin America) bao gồm các bộ phận lãnh thổ nào?",
        options: ["Mê-hi-cô, eo đất Trung Mỹ, các đảo trong vùng biển Ca-ri-bê và toàn bộ lục địa Nam Mỹ", "Chỉ gồm riêng quốc gia Bra-xin và Ác-hen-ti-na", "Bao gồm cả Hoa Kỳ và Ca-na-đa", "Toàn bộ Bắc Mỹ và quần đảo Grơn-len"],
        answer: 0,
        explanation: "Khu vực Mỹ La-tinh trải dài từ sông Rio Grande (biên giới Hoa Kỳ - Mexico) về phía nam đến mũi Horn, gồm Mexico, Trung Mỹ, vùng biển Caribe và Nam Mỹ."
    },
    {
        grade: "11", subject: "dia", term: "CK1",
        question: "Dãy núi uốn nếp trẻ đồ sộ, dài nhất thế giới chạy dọc theo bờ tây của lục địa Nam Mỹ là:",
        options: ["Dãy An-đét (Andes)", "Dãy Rốc-ki (Rocky)", "Dãy Hi-ma-lay-a (Himalaya)", "Dãy An-pơ (Alps)"],
        answer: 0,
        explanation: "Dãy Andes dài gần 9000 km, cao trung bình trên 4000 m chạy dọc bờ tây Nam Mỹ, có nhiều đỉnh núi phủ băng tuyết, núi lửa và thung lũng cao nguyên màu mỡ."
    },
    {
        grade: "11", subject: "dia", term: "CK1",
        question: "Đồng bằng châu thổ lớn nhất thế giới với diện tích hơn 5 triệu km² được bao phủ bởi rừng mưa nhiệt đới ở Nam Mỹ là:",
        options: ["Đồng bằng A-ma-dôn (Amazon)", "Đồng bằng La Pla-ta", "Đồng bằng Pam-pa", "Đồng bằng O-ri-nô-cô"],
        answer: 0,
        explanation: "Đồng bằng Amazon nằm trong lưu vực sông Amazon, có diện tích rừng nhiệt đới xích đạo rộng lớn nhất hành tinh, được coi là 'lá phổi xanh' điều hòa khí hậu toàn cầu."
    },
    {
        grade: "11", subject: "dia", term: "CK1",
        question: "Đặc điểm đô thị hóa nổi bật ở khu vực Mỹ La-tinh được các nhà khoa học gọi là hiện tượng gì?",
        options: ["Đô thị hóa tự phát (tỉ lệ dân thành thị rất cao, trên 80%, nhưng do nông dân mất đất di cư nghèo khó chứ không gắn liền với công nghiệp hóa tương xứng)", "Đô thị hóa có quy hoạch đồng bộ hoàn hảo", "Tỉ lệ dân thành thị thấp nhất thế giới (dưới 20%)", "Không có bất kì siêu đô thị nào trên 10 triệu dân"],
        answer: 0,
        explanation: "Mỹ La-tinh có tỉ lệ đô thị hóa rất cao nhưng là đô thị hóa tự phát: người nghèo từ nông thôn dồn vào rìa các thành phố lớn (Sao Paulo, Mexico City...) tạo thành các khu ổ chuột (favela) khổng lồ."
    },
    {
        grade: "11", subject: "dia", term: "CK1",
        question: "Một trong những nguyên nhân xã hội kìm hãm sự phát triển kinh tế ở nhiều nước Mỹ La-tinh là:",
        options: ["Chênh lệch giàu nghèo gay gắt, đất đai tập trung trong tay số ít đại điền chủ và nợ nước ngoài cao", "Tỉ lệ dân số biết chữ đạt 100%", "Khai thác cạn kiệt tài nguyên dầu mỏ", "Dân số quá ít không có người lao động"],
        answer: 0,
        explanation: "Bất bình đẳng xã hội sâu sắc, chế độ chiếm hữu ruộng đất phong kiến đại điền trang (latifundia), tham nhũng và nợ công cao là những rào cản kinh niên kìm hãm kinh tế Mỹ La-tinh."
    },
    {
        grade: "11", subject: "dia", term: "CK1",
        question: "Tổ chức Liên minh châu Âu (EU) tiền thân ban đầu là tổ chức nào được thành lập năm 1951?",
        options: ["Cộng đồng Than và Thép châu Âu (ECSC)", "Cộng đồng Năng lượng Nguyên tử châu Âu (Euratom)", "Khu vực Mậu dịch Tự do châu Âu (EFTA)", "Khối Hiệp ước Bắc Đại Tây Dương (NATO)"],
        answer: 0,
        explanation: "Năm 1951, 6 nước Tây Âu (Pháp, Đức, Ý, Bỉ, Hà Lan, Luxembourg) kí Hiệp ước Paris thành lập Cộng đồng Than và Thép châu Âu (ECSC), đặt viên gạch đầu tiên cho tiến trình nhất thể hóa châu Âu."
    },
    {
        grade: "11", subject: "dia", term: "CK1",
        question: "Hiệp ước quan trọng nào kí năm 1992 (có hiệu lực từ 1993) chính thức đổi tên Cộng đồng châu Âu (EC) thành Liên minh châu Âu (EU)?",
        options: ["Hiệp ước Mát-xtrích (Maastricht)", "Hiệp ước Rô-ma (Rome)", "Hiệp ước Lít-xbon (Lisbon)", "Hiệp ước Am-xtéc-đam (Amsterdam)"],
        answer: 0,
        explanation: "Hiệp ước Maastricht (Hà Lan) năm 1992 đánh dấu bước ngoặt lịch sử, quyết định thành lập Liên minh châu Âu với ba trụ cột hợp tác: kinh tế - tiền tệ, chính sách đối ngoại - an ninh chung, và tư pháp."
    },
    {
        grade: "11", subject: "dia", term: "CK1",
        question: "Thị trường chung duy nhất của Liên minh châu Âu (EU) bảo đảm quyền tự do lưu thông của 4 yếu tố cốt lõi nào?",
        options: ["Tự do lưu thông hàng hóa, tự do lưu thông dịch vụ, tự do lưu thông con người và tự do lưu thông tiền vốn", "Tự do buôn bán vũ khí, chất nổ, ma túy và động vật hoang dã", "Tự do khai thác tài nguyên của các nước châu Á", "Tự do bãi bỏ toàn bộ hộ chiếu quốc gia"],
        answer: 0,
        explanation: "Thị trường chung EU dựa trên 4 quyền tự do cơ bản: Tự do di chuyển của hàng hóa, dịch vụ, con người và nguồn vốn giữa các nước thành viên mà không bị rào cản biên giới."
    },
    {
        grade: "11", subject: "dia", term: "CK1",
        question: "Đồng tiền chung châu Âu (Euro - €) chính thức được đưa vào giao dịch tiền mặt từ năm nào?",
        options: ["Năm 2002", "Năm 1990", "Năm 2015", "Năm 1980"],
        answer: 0,
        explanation: "Ngày 01/01/1999 đồng Euro ra đời trên sổ sách kế toán, và đến ngày 01/01/2002 tiền giấy và tiền xu Euro chính thức được lưu hành trong khu vực đồng tiền chung Eurozone."
    },
    {
        grade: "11", subject: "dia", term: "CK1",
        question: "Lợi ích kinh tế lớn nhất khi các nước EU sử dụng chung một đồng tiền Euro là gì?",
        options: ["Loại bỏ rủi ro biến động tỉ giá hối đoái, giảm chi phí chuyển đổi tiền tệ và tăng cường minh bạch giá cả trong toàn khối", "Mọi người dân đều được nhận lương bằng nhau", "Xóa bỏ hoàn toàn thuế thu nhập doanh nghiệp", "Các ngân hàng quốc gia không cần hoạt động"],
        answer: 0,
        explanation: "Dùng chung đồng Euro giúp giao thương giữa các nước thành viên diễn ra thuận lợi như trong một quốc gia, triệt tiêu phí đổi ngoại tệ và thúc đẩy thương mại nội khối bùng nổ."
    },
    {
        grade: "11", subject: "dia", term: "CK1",
        question: "Hiệp ước Sengen (Schengen) trong khuôn khổ EU đem lại quyền lợi nào cho công dân các nước tham gia?",
        options: ["Tự do đi lại qua biên giới giữa các nước thành viên mà không cần kiểm soát thị thực (visa) hay hộ chiếu tại trạm kiểm soát nội bộ", "Được miễn thuế mua nhà ở bất kì đâu", "Được quyền bỏ phiếu bầu tổng thống Mỹ", "Được sử dụng miễn phí mọi phương tiện máy bay"],
        answer: 0,
        explanation: "Khu vực Schengen bãi bỏ việc kiểm tra biên giới nội bộ giữa các nước thành viên, cho phép công dân tự do đi lại, sinh sống, học tập và làm việc trong toàn bộ không gian Schengen."
    },
    {
        grade: "11", subject: "dia", term: "CK1",
        question: "Sự kiện một quốc gia thành viên lớn chính thức rời khỏi Liên minh châu Âu (Brexit) vào năm 2020 liên quan đến quốc gia nào?",
        options: ["Vương quốc Anh (United Kingdom)", "Nước Pháp", "Nước Đức", "Nước Ý"],
        answer: 0,
        explanation: "Sau cuộc trưng cầu dân ý năm 2016, Vương quốc Anh chính thức hoàn tất quá trình rời khỏi EU (Brexit) vào ngày 31/01/2020, tạo ra thay đổi lớn trong tương quan chính trị và thương mại châu Âu."
    },
    {
        grade: "11", subject: "dia", term: "CK1",
        question: "Tập đoàn công nghiệp sản xuất máy bay hàng không dân dụng khổng lồ là biểu tượng thành công của sự hợp tác đa quốc gia trong EU là:",
        options: ["E-bớt (Airbus)", "Bô-ing (Boeing)", "Lốc-khiết Mác-tin (Lockheed Martin)", "Bom-ba-đi-ơ (Bombardier)"],
        answer: 0,
        explanation: "Hãng sản xuất máy bay Airbus là dự án liên kết công nghiệp biểu tượng của châu Âu: các bộ phận cánh, thân, đuôi được sản xuất tại Pháp, Đức, Anh, Tây Ban Nha rồi lắp ráp hoàn thiện tại Toulouse (Pháp) và Hamburg (Đức)."
    },
    {
        grade: "11", subject: "dia", term: "CK1",
        question: "Vị thế kinh tế của EU trên trường quốc tế được khẳng định qua đặc điểm nào sau đây?",
        options: ["Là một trong những trung tâm kinh tế, thương mại và viện trợ phát triển (ODA) hàng đầu thế giới, chiếm tỉ trọng lớn trong xuất khẩu toàn cầu", "Chỉ đứng sau châu Phi về quy mô sản xuất nông nghiệp", "Không có mối quan hệ thương mại nào với châu Á", "Nền kinh tế chỉ phụ thuộc vào khai thác than củi"],
        answer: 0,
        explanation: "EU là một trong 3 trung tâm kinh tế lớn nhất thế giới cùng với Hoa Kỳ và Trung Quốc, là thị trường xuất khẩu khổng lồ và nhà tài trợ vốn ODA lớn nhất cho các nước đang phát triển."
    },
    {
        grade: "11", subject: "dia", term: "CK1",
        question: "Mối quan hệ hợp tác kinh tế - thương mại giữa Việt Nam và Liên minh châu Âu (EU) đã được nâng tầm toàn diện qua hiệp định thương mại tự do lịch sử nào có hiệu lực từ năm 2020?",
        options: ["Hiệp định Thương mại tự do Việt Nam - EU (EVFTA)", "Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương (CPTPP)", "Hiệp định Thương mại Tự do Bắc Mỹ (NAFTA)", "Hiệp định Đối tác Kinh tế Toàn diện Khu vực (RCEP)"],
        answer: 0,
        explanation: "Hiệp định EVFTA có hiệu lực từ 01/08/2020 cam kết xóa bỏ gần 99% dòng thuế nhập khẩu giữa hai bên, mở đường cho hàng dệt may, da giày, thủy sản Việt Nam vào thị trường tiêu chuẩn cao EU."
    },

    // ===================================================================
    // KHỐI 11 - ĐỊA LÍ - GIỮA KÌ 2 (GK2 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "11", subject: "dia", term: "GK2",
        question: "Khu vực Đông Nam Á về mặt địa lí tự nhiên được chia thành hai bộ phận rõ rệt là:",
        options: ["Đông Nam Á lục địa (bán đảo Trung Ấn) và Đông Nam Á hải đảo (quần đảo Mã Lai)", "Đông Nam Á nhiệt đới và Đông Nam Á ôn đới", "Đông Nam Á đồi núi và Đông Nam Á sa mạc", "Bắc Đông Nam Á và Nam Đông Nam Á"],
        answer: 0,
        explanation: "Đông Nam Á gồm 2 bộ phận: Đông Nam Á lục địa (Việt Nam, Lào, Campuchia, Thái Lan, Myanmar) và Đông Nam Á hải đảo (Malaysia, Singapore, Indonesia, Philippines, Brunei, Timor-Leste)."
    },
    {
        grade: "11", subject: "dia", term: "GK2",
        question: "Đông Nam Á hải đảo nằm trong 'Vành đai lửa Thái Bình Dương' nên thường xuyên phải hứng chịu các thiên tai tự nhiên nguy hiểm nào?",
        options: ["Động đất, núi lửa phun trào và sóng thần (Tsunami)", "Bão tuyết lạnh giá âm 40 °C", "Lốc xoáy cát sa mạc", "Hạn hán đóng băng mặt đất"],
        answer: 0,
        explanation: "Do là nơi tiếp xúc của các mảng kiến tạo Thái Bình Dương, Ấn - Úc và Á - Âu, khu vực quần đảo Indonesia và Philippines có mật độ núi lửa đang hoạt động cao nhất thế giới và thường xuyên xảy ra động đất mạnh."
    },
    {
        grade: "11", subject: "dia", term: "GK2",
        question: "Eo biển chiến lược nào ở Đông Nam Á là tuyến vận tải biển nhộn nhịp thứ hai thế giới, nối liền Ấn Độ Dương với Biển Đông và Thái Bình Dương?",
        options: ["Eo biển Ma-lắc-ca (Malacca)", "Eo biển Bô-xpho-rút (Bosphorus)", "Eo biển Gi-bran-ta (Gibraltar)", "Eo biển Bê-rinh (Bering)"],
        answer: 0,
        explanation: "Eo biển Malacca nằm giữa Malaysia, Singapore và đảo Sumatra (Indonesia) là yết hầu hàng hải vận chuyển khoảng 1/4 lượng dầu mỏ và hàng hóa giao thương giữa Trung Đông, châu Âu với Đông Á."
    },
    {
        grade: "11", subject: "dia", term: "GK2",
        question: "Khí hậu chủ đạo của phần lớn lãnh thổ khu vực Đông Nam Á là gì?",
        options: ["Khí hậu nhiệt đới gió mùa và khí hậu xích đạo (nóng ẩm quanh năm, mưa nhiều)", "Khí hậu ôn đới hải dương mát lạnh", "Khí hậu cực và cận cực băng giá", "Khí hậu hoang mạc khô cằn nhiệt độ cao"],
        answer: 0,
        explanation: "Phần lớn Đông Nam Á nằm trọn trong vành đai nội chí tuyến, chịu ảnh hưởng sâu sắc của gió mùa châu Á và đại dương nên có nền nhiệt cao, độ ẩm dồi dào và lượng mưa lớn."
    },
    {
        grade: "11", subject: "dia", term: "GK2",
        question: "Hiệp hội các quốc gia Đông Nam Á (ASEAN) được chính thức thành lập vào ngày tháng năm nào tại Băng Cốc (Thái Lan)?",
        options: ["Ngày 08/08/1967", "Ngày 02/09/1945", "Ngày 30/04/1975", "Ngày 28/07/1995"],
        answer: 0,
        explanation: "Ngày 08/08/1967, 5 ngoại trưởng của 5 nước (Indonesia, Malaysia, Philippines, Singapore, Thái Lan) kí Tuyên bố Bangkok thành lập Hiệp hội các quốc gia Đông Nam Á (ASEAN)."
    },
    {
        grade: "11", subject: "dia", term: "GK2",
        question: "Việt Nam chính thức được kết nạp và trở thành thành viên thứ 7 của Hiệp hội các quốc gia Đông Nam Á (ASEAN) vào thời điểm nào?",
        options: ["Ngày 28/07/1995", "Ngày 08/08/1967", "Ngày 11/01/2007", "Ngày 30/04/1999"],
        answer: 0,
        explanation: "Ngày 28/07/1995 tại Hội nghị Bộ trưởng Ngoại giao ASEAN lần thứ 28 tại Brunei, Việt Nam chính thức gia nhập ASEAN, mở ra thời kì hội nhập khu vực và tạo tiền đề kết nạp Lào, Myanmar, Campuchia."
    },
    {
        grade: "11", subject: "dia", term: "GK2",
        question: "Cộng đồng ASEAN (thành lập chính thức ngày 31/12/2015) được xây dựng vững chắc dựa trên bao nhiêu trụ cột cơ bản?",
        options: ["3 trụ cột: Cộng đồng Chính trị - An ninh (APSC), Cộng đồng Kinh tế (AEC) và Cộng đồng Văn hóa - Xã hội (ASCC)", "Chỉ duy nhất một trụ cột kinh tế quân sự", "5 trụ cột tôn giáo riêng biệt", "2 trụ cột tiền tệ và hàng không"],
        answer: 0,
        explanation: "Cộng đồng ASEAN vận hành vững vàng trên 3 trụ cột: Cộng đồng Chính trị - An ninh (APSC), Cộng đồng Kinh tế (AEC) và Cộng đồng Văn hóa - Xã hội (ASCC)."
    },
    {
        grade: "11", subject: "dia", term: "GK2",
        question: "Nguyên tắc cốt lõi trong hoạt động và ra quyết định của tổ chức ASEAN ('Phương cách ASEAN') là gì?",
        options: ["Đồng thuận (Consensus) và Không can thiệp vào công việc nội bộ của nhau", "Bỏ phiếu theo đa số áp đảo", "Quyền phủ quyết tuyệt đối của một nước lớn", "Áp đặt trừng phạt kinh tế quân sự nội khối"],
        answer: 0,
        explanation: "'Phương cách ASEAN' đặc trưng bởi nguyên tắc đồng thuận giữa các nước thành viên, tôn trọng độc lập chủ quyền, không can thiệp nội bộ và giải quyết tranh chấp bằng đối thoại hòa bình."
    },
    {
        grade: "11", subject: "dia", term: "GK2",
        question: "Khu vực Tây Nam Á (Trung Đông) có vị trí địa - chính trị và địa - kinh tế đặc biệt quan trọng vì:",
        options: ["Nằm ở ngã ba tiếp giáp giữa 3 châu lục (Á, Âu, Phi), nắm giữ các eo biển huyết mạch và sở hữu hơn một nửa trữ lượng dầu mỏ đã xác minh của thế giới", "Có diện tích rừng lá kim lớn nhất hành tinh", "Là trung tâm tài chính duy nhất của thế giới", "Có khí hậu mát mẻ và nguồn nước ngọt dồi dào nhất"],
        answer: 0,
        explanation: "Tây Nam Á án ngữ vị trí ngã ba Á - Âu - Phi bên kênh đào Suez và eo biển Hormuz, sở hữu hơn 50% trữ lượng dầu mỏ thế giới quanh vịnh Ba Tư nên luôn là điểm nóng cạnh tranh địa chính trị."
    },
    {
        grade: "11", subject: "dia", term: "GK2",
        question: "Tài nguyên khoáng sản giàu có nhất, tạo nên nguồn của cải khổng lồ và nguồn thu ngoại tệ chủ lực cho các nước vùng Vịnh Tây Nam Á (như Ả Rập Xê Út, UAE, Kuwait, Qatar, Iran) là:",
        options: ["Dầu mỏ và khí tự nhiên", "Than đá và quặng sắt", "Kim cương và vàng sa khoáng", "Quặng uranium và bauxite"],
        answer: 0,
        explanation: "Khu vực bồn trũng Vịnh Ba Tư (Persian Gulf) tập trung các túi dầu mỏ và khí đốt khổng lồ với chi phí khai thác rẻ nhất thế giới, chiếm tỉ trọng áp đảo trong GDP và xuất khẩu của khối OPEC."
    },
    {
        grade: "11", subject: "dia", term: "GK2",
        question: "Nguyên nhân tự nhiên nào làm cho nước ngọt trở thành thứ tài nguyên quý hiếm bậc nhất ở khu vực Tây Nam Á?",
        options: ["Khí hậu nhiệt đới lục địa và cận nhiệt cực kì khô hạn, lượng mưa rất thấp, hoang mạc và bán hoang mạc chiếm phần lớn diện tích", "Do nguồn nước sông ngòi bị nhiễm phèn chua", "Do toàn bộ nước ngầm bị bốc hơi thành mây bay sang châu Âu", "Do nước biển tràn vào làm ngập hết lục địa"],
        answer: 0,
        explanation: "Tây Nam Á có khí hậu hoang mạc khô khan, ít mưa, mạng lưới sông ngòi thưa thớt; các quốc gia vùng Vịnh phải đầu tư hàng tỉ USD xây dựng các nhà máy lọc nước biển thành nước ngọt sinh hoạt."
    },
    {
        grade: "11", subject: "dia", term: "GK2",
        question: "Thành phố Giê-ru-xa-lem (Jerusalem) ở Tây Nam Á là thánh địa tôn giáo linh thiêng chung của ba tôn giáo lớn nào trên thế giới?",
        options: ["Do Thái giáo, Ki-tô giáo (Cơ đốc giáo) và Hồi giáo", "Phật giáo, Hin-đu giáo và Shinto", "Nho giáo, Đạo giáo và Phật giáo", "Hồi giáo, Baha'i và Bột tẩy giáo"],
        answer: 0,
        explanation: "Jerusalem là thánh địa linh thiêng lịch sử của Do Thái giáo (Bức tường Than khóc), Ki-tô giáo (Mộ Chúa Giê-su) và Hồi giáo (Nhà thờ Hồi giáo Al-Aqsa), là tâm điểm tranh chấp phức tạp giữa Israel và Palestine."
    },
    {
        grade: "11", subject: "dia", term: "GK2",
        question: "Tổ chức các nước xuất khẩu dầu mỏ (OPEC) có trụ sở chính tại Vienna (Áo) được thành lập nhằm mục đích cốt lõi là gì?",
        options: ["Phối hợp và thống nhất chính sách sản xuất dầu mỏ giữa các thành viên nhằm giữ giá dầu ổn định trên thị trường thế giới và bảo vệ lợi ích quốc gia", "Cấm xuất khẩu dầu mỏ sang các nước châu Âu", "Thâu tóm toàn bộ ngành sản xuất nông nghiệp toàn cầu", "Xây dựng lực lượng quân sự chung của các nước Hồi giáo"],
        answer: 0,
        explanation: "OPEC (đứng đầu là Ả Rập Xê Út) điều phối hạn ngạch khai thác dầu mỏ của các nước thành viên để điều tiết cung cầu và bình ổn giá dầu thô trên thị trường năng lượng quốc tế."
    },
    {
        grade: "11", subject: "dia", term: "GK2",
        question: "Để giảm phụ thuộc vào nguồn tài nguyên dầu mỏ hóa thạch hữu hạn, các quốc gia Tây Nam Á hiện nay đang tích cực chuyển hướng phát triển kinh tế như thế nào?",
        options: ["Đa dạng hóa nền kinh tế, đầu tư vào tài chính - ngân hàng, trung tâm trung chuyển hàng không quốc tế, du lịch và năng lượng mặt trời", "Đóng cửa tất cả các sân bay và cảng biển", "Chuyển toàn bộ dân cư sang làm nông nghiệp tự cấp tự túc", "Ngừng áp dụng khoa học kĩ thuật"],
        answer: 0,
        explanation: "Các tiểu vương quốc Ả Rập Thống nhất (UAE) và Ả Rập Xê Út đang thực hiện chiến lược 'Tầm nhìn 2030', biến Dubai và Riyadh thành các siêu đô thị tài chính, du lịch, cảng biển và năng lượng xanh."
    },
    {
        grade: "11", subject: "dia", term: "GK2",
        question: "Sự bất ổn chính trị, xung đột sắc tộc và chiến tranh kéo dài ở Tây Nam Á ảnh hưởng trực tiếp đến nền kinh tế toàn cầu chủ yếu qua kênh nào?",
        options: ["Làm gián đoạn nguồn cung năng lượng dầu khí, khiến giá dầu thế giới tăng vọt gây lạm phát và đe dọa các tuyến hàng hải qua biển Đỏ", "Làm mất nguồn cung ứng lúa gạo toàn cầu", "Làm cạn kiệt nguồn quặng bauxite thế giới", "Làm gián đoạn việc cung ứng máy bay dân dụng"],
        answer: 0,
        explanation: "Mỗi khi có xung đột ở Trung Đông (chiến tranh vùng Vịnh, căng thẳng eo biển Hormuz hay biển Đỏ), giá dầu thô thế giới lập tức leo thang, cước phí tàu biển tăng cao kéo theo làn sóng lạm phát chi phí đẩy trên toàn cầu."
    },

    // ===================================================================
    // KHỐI 11 - ĐỊA LÍ - CUỐI KÌ 2 (CK2 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "11", subject: "dia", term: "CK2",
        question: "Lãnh thổ Hợp chúng quốc Hoa Kỳ (United States) bao gồm 3 bộ phận địa lí là:",
        options: ["Phần lãnh thổ trung tâm lục địa Bắc Mỹ (48 bang), bang A-la-xca (Alaska) và quần đảo Ha-oai (Hawaii)", "Toàn bộ Bắc Mỹ và quần đảo Ca-ri-bê", "Chỉ gồm 50 bang liền kề trên lục địa", "Phần đất liền và đảo Grơn-len"],
        answer: 0,
        explanation: "Hoa Kỳ gồm 3 bộ phận: Phần đất rộng lớn ở trung tâm Bắc Mỹ (48 bang liền nhau), bán đảo Alaska ở tây bắc Bắc Mỹ và quần đảo núi lửa Hawaii giữa Thái Bình Dương."
    },
    {
        grade: "11", subject: "dia", term: "CK2",
        question: "Thung lũng Silicon (Silicon Valley) ở bang California của Hoa Kỳ nổi tiếng toàn cầu là trung tâm của ngành công nghiệp nào?",
        options: ["Công nghệ thông tin, vi điện tử, bán dẫn và các công ty khởi nghiệp phần mềm công nghệ cao", "Luyện thép cán nguội và đóng tàu thủy", "Dệt may và da giày thủ công", "Chế biến đồ hộp thịt bò"],
        answer: 0,
        explanation: "Silicon Valley là cái nôi công nghệ cao của thế giới, nơi đặt trụ sở của các tập đoàn khổng lồ như Apple, Google, Meta, Intel, Nvidia và các quỹ đầu tư mạo hiểm hàng đầu."
    },
    {
        grade: "11", subject: "dia", term: "CK2",
        question: "Vùng công nghiệp 'Vành đai Mặt Trời' (Sunbelt) ở phía nam và tây nam Hoa Kỳ phát triển mạnh mẽ từ nửa sau thế kỉ XX nhờ ưu thế nào?",
        options: ["Khí hậu ấm áp, nguồn lao động dồi dào, phát triển các ngành công nghệ cao, hàng không vũ trụ, hóa dầu và công nghiệp quốc phòng", "Có các mỏ than đá khổng lồ lộ thiên dễ đào", "Chỉ tập trung đóng các tàu chạy bằng than", "Chỉ làm nông nghiệp trồng ngô gia đình"],
        answer: 0,
        explanation: "Vùng Vành đai Mặt Trời (các bang California, Texas, Florida...) thu hút vốn và lao động từ vùng 'Vành đai rỉ sét' Đông Bắc nhờ phát triển vũ trụ (NASA), công nghệ thông tin và năng lượng mới."
    },
    {
        grade: "11", subject: "dia", term: "CK2",
        question: "Liên bang Nga là quốc gia có diện tích lớn nhất thế giới (trên 17 triệu km²), trải dài trên hai châu lục nào?",
        options: ["Châu Á và Châu Âu (ngăn cách bởi dãy núi U-ran)", "Châu Âu và Châu Phi", "Châu Á và Châu Mỹ", "Châu Mỹ và Châu Đại Dương"],
        answer: 0,
        explanation: "Liên bang Nga trải rộng qua 11 múi giờ từ biển Baltic ở châu Âu sang Thái Bình Dương ở châu Á, với ranh giới tự nhiên giữa phần châu Âu và châu Á là dãy núi cổ Ural."
    },
    {
        grade: "11", subject: "dia", term: "CK2",
        question: "Rừng Tai-ga (Taiga) - kiểu rừng lá kim rụng lá bạt ngàn bao phủ phần lớn diện tích vùng Xi-bê-ri (Siberia) của Liên bang Nga có giá trị kinh tế lớn nhất về:",
        options: ["Khai thác gỗ tròn, bột giấy và dự trữ nguồn carbon sinh thái khổng lồ cho Trái Đất", "Trồng cây cao su và cà phê xuất khẩu", "Nuôi tằm ăn lá dâu", "Sản xuất mía đường"],
        answer: 0,
        explanation: "Rừng Taiga của Nga là dải rừng lá kim (thông, tùng, linh sam) lớn nhất thế giới, cung cấp khối lượng gỗ và nguyên liệu giấy khổng lồ, đồng thời là bể chứa hấp thụ carbon quan trọng của địa cầu."
    },
    {
        grade: "11", subject: "dia", term: "CK2",
        question: "Hồ nước ngọt sâu nhất, có thể tích nước ngọt lớn nhất hành tinh nằm ở vùng Siberia của Liên bang Nga là:",
        options: ["Hồ Bai-can (Baikal - sâu 1642 m)", "Hồ Vic-to-ri-a (Victoria)", "Hồ Thượng (Lake Superior)", "Biển Hồ Ca-xpi (Caspian)"],
        answer: 0,
        explanation: "Hồ Baikal chứa khoảng 20% tổng lượng nước ngọt bề mặt không đóng băng của thế giới, là hồ kiến tạo cổ xưa và sâu nhất Trái Đất với hệ sinh thái thủy sinh độc nhất vô nhị."
    },
    {
        grade: "11", subject: "dia", term: "CK2",
        question: "Nhật Bản là một quốc gia quần đảo ở Đông Á nghèo nàn về tài nguyên khoáng sản, nhưng đã vươn lên thành cường quốc kinh tế hàng đầu thế giới chủ yếu dựa vào:",
        options: ["Con người được đào tạo trình độ cao, ý chí kỉ luật, tinh thần cần cù và chiến lược phát triển khoa học - công nghệ tiên tiến", "Nguồn dầu mỏ dồi dào tự khai thác trong nước", "Diện tích đất nông nghiệp châu thổ mênh mông", "Vốn viện trợ không hoàn lại của các nước láng giềng"],
        answer: 0,
        explanation: "Nhân tố con người là tài nguyên quý giá nhất của Nhật Bản: đức tính kỉ luật cao, tinh thần trách nhiệm, tiết kiệm và tài năng ứng dụng khoa học kĩ thuật đã tạo nên 'Kì tích kinh tế Nhật Bản'."
    },
    {
        grade: "11", subject: "dia", term: "CK2",
        question: "Bốn đảo lớn chủ yếu hợp thành lãnh thổ đất nước Nhật Bản từ bắc xuống nam theo thứ tự là:",
        options: ["Hô-kai-đô (Hokkaido), Hôn-su (Honshu), Xi-cô-cư (Shikoku), Kiu-xiu (Kyushu)", "O-ki-na-wa, Honshu, Đài Loan, Jeju", "Kyushu, Shikoku, Sakhalin, Kuril", "Honshu, Hokkaido, Luzon, Java"],
        answer: 0,
        explanation: "Lãnh thổ Nhật Bản gồm hàng nghìn đảo nhỏ và 4 đảo chính: Hokkaido (phía bắc), Honshu (đảo lớn nhất, tập trung Tokyo, Osaka), Shikoku và Kyushu (phía nam)."
    },
    {
        grade: "11", subject: "dia", term: "CK2",
        question: "Ngành công nghiệp chế tạo cơ khí nổi tiếng toàn cầu của Nhật Bản với các thương hiệu lừng danh (như Toyota, Honda, Sony, Panasonic, Mitsubishi) thể hiện thế mạnh nào?",
        options: ["Công nghiệp chế tạo ô tô, thiết bị điện tử gia dụng, robot công nghiệp và tàu biển", "Khai thác than bùn và quặng đồng thô", "Sản xuất vũ khí hạt nhân", "Dệt len thủ công truyền thống"],
        answer: 0,
        explanation: "Nhật Bản dẫn đầu thế giới về công nghệ tự động hóa, robot lắp ráp ô tô, công nghệ bán dẫn chính xác và các thiết bị điện tử tiêu dùng có độ bền và tính tiết kiệm năng lượng cao."
    },
    {
        grade: "11", subject: "dia", term: "CK2",
        question: "Chính sách 'Cải cách và Mở cửa' được Trung Quốc thực hiện từ năm 1978 dưới sự khởi xướng của ai đã làm thay đổi căn bản diện mạo kinh tế nước này?",
        options: ["Đặng Tiểu Bình", "Mao Trạch Đông", "Tôn Trung Sơn", "Chu Ân Lai"],
        answer: 0,
        explanation: "Cuối năm 1978, Đặng Tiểu Bình khởi xướng đường lối Cải cách - Mở cửa, chuyển từ kinh tế kế hoạch hóa tập trung sang kinh tế thị trường XHCN, thu hút FDI vào các đặc khu kinh tế ven biển."
    },
    {
        grade: "11", subject: "dia", term: "CK2",
        question: "Các 'Đặc khu kinh tế' ven biển đầu tiên của Trung Quốc (như Thâm Quyến, Chu Hải, Sán Đầu, Hạ Môn) được thành lập nhằm mục tiêu chính là gì?",
        options: ["Áp dụng cơ chế ưu đãi thuế quan để thu hút vốn đầu tư nước ngoài (FDI), tiếp thu công nghệ tiên tiến và thúc đẩy sản xuất hàng xuất khẩu", "Để di dời toàn bộ nông dân miền núi về sinh sống", "Để xây dựng các trại chăn nuôi bò sữa lớn", "Để ngăn chặn giao lưu thương mại quốc tế"],
        answer: 0,
        explanation: "Các đặc khu kinh tế ven biển đóng vai trò là 'cửa sổ' mở ra thế giới, thử nghiệm cơ chế thị trường, thu hút công nghệ và vốn ngoại tệ, đưa Thâm Quyến từ làng chài nghèo thành siêu đô thị công nghệ."
    },
    {
        grade: "11", subject: "dia", term: "CK2",
        question: "Vùng lãnh thổ miền Đông Trung Quốc có nền kinh tế phát triển vượt trội hoàn toàn so với miền Tây là nhờ vào các điều kiện nào?",
        options: ["Đồng bằng châu thổ phù sa màu mỡ (Hoa Bắc, Hoa Trung), nguồn nước dồi dào, giáp biển, giao thông thuận lợi và tập trung đông dân cư", "Khí hậu sa mạc khô hạn ít người", "Địa hình cao nguyên hiểm trở khó đi lại", "Nhiều mỏ dầu khí nhất Trung Quốc"],
        answer: 0,
        explanation: "Miền Đông Trung Quốc có điều kiện tự nhiên trù phú (châu thổ sông Hoàng Hà, Trường Giang), đường bờ biển dài mở ra Thái Bình Dương, mạng lưới đô thị dày đặc và nguồn lao động chất lượng cao."
    },
    {
        grade: "11", subject: "dia", term: "CK2",
        question: "Dự án phát triển hạ tầng và thương mại liên lục địa khổng lồ của Trung Quốc kết nối Á - Âu - Phi bằng đường bộ và đường biển có tên gọi là:",
        options: ["Sáng kiến Vành đai và Con đường (BRI - Belt and Road Initiative)", "Kế hoạch Marshall thế kỉ XXI", "Liên minh Phòng thủ châu Á", "Hiệp ước Thương mại Tự do Thái Bình Dương"],
        answer: 0,
        explanation: "Sáng kiến 'Vành đai và Con đường' (BRI) được Chủ tịch Tập Cận Bình công bố năm 2013 nhằm tái lập Con đường tơ lụa cổ đại qua các dự án đường sắt, cao tốc, cảng biển và năng lượng xuyên quốc gia."
    },
    {
        grade: "11", subject: "dia", term: "CK2",
        question: "Ô-xtrây-li-a (Australia) là một quốc gia độc lập chiếm trọn một lục địa, có thế mạnh xuất khẩu nổi tiếng thế giới về các mặt hàng nông nghiệp nào?",
        options: ["Len cừu, thịt bò, sữa và lúa mì", "Lúa gạo nhiệt đới và cao su", "Cà phê Robusta và chè búp", "Cây cọ dầu và hồ tiêu"],
        answer: 0,
        explanation: "Australia sở hữu các đồng cỏ tự nhiên bạt ngàn ở bồn địa Nghệ thuật lớn, dẫn đầu thế giới về xuất khẩu lông cừu, thịt cừu, thịt bò đông lạnh và các nông trang trồng lúa mì hiện đại."
    },
    {
        grade: "11", subject: "dia", term: "CK2",
        question: "Quần thể rạn san hô ngầm lớn nhất hành tinh được UNESCO công nhận là Di sản thiên nhiên thế giới nằm ở vùng biển đông bắc Australia là:",
        options: ["Rạn san hô Great Barrier (Đại Bảo Tiêu)", "Rạn san hô Biển Đỏ", "Rạn san hô quần đảo Galapagos", "Rạn san hô vịnh Caribbean"],
        answer: 0,
        explanation: "Great Barrier Reef trải dài hơn 2300 km dọc bờ biển bang Queensland (Australia), là cấu trúc sống lớn nhất trên Trái Đất do hàng tỉ sinh vật san hô tạo nên, có giá trị sinh thái và du lịch vô giá."
    },

    // ===================================================================
    // KHỐI 11 - LỊCH SỬ - GIỮA KÌ 1 (GK1 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "11", subject: "su", term: "GK1",
        question: "Tiền đề kinh tế quan trọng nhất dẫn tới sự bùng nổ của các cuộc cách mạng tư sản thời cận đại (thế kỉ XVII - XVIII) là gì?",
        options: ["Sự ra đời và phát triển mạnh mẽ của phương thức sản xuất tư bản chủ nghĩa nhưng bị chế độ phong kiến kìm hãm", "Sự xuất hiện của công cụ bằng đồng thau", "Kinh tế nông nghiệp tự cấp tự túc đạt đỉnh cao", "Sự suy tàn hoàn toàn của ngoại thương đường biển"],
        answer: 0,
        explanation: "Phương thức sản xuất tư bản chủ nghĩa (công trường thủ công, ngân hàng, thương mại) lớn mạnh mâu thuẫn sâu sắc với chế độ phong kiến chuyên chế bảo thủ, đòi hỏi phải lật đổ phong kiến để mở đường cho CNTB phát triển."
    },
    {
        grade: "11", subject: "su", term: "GK1",
        question: "Văn kiện lịch sử bất hủ nào của nước Mỹ do Tô-mát Giép-phơ-sơn (Thomas Jefferson) soạn thảo được công bố ngày 04/07/1776?",
        options: ["Tuyên ngôn Độc lập của Hợp chúng quốc Hoa Kỳ", "Hiến pháp Hoa Kỳ năm 1787", "Tuyên ngôn Nhân quyền và Dân quyền", "Sắc lệnh Bãi bỏ chế độ nô lệ"],
        answer: 0,
        explanation: "Ngày 04/07/1776, Đại hội lục địa thông qua Tuyên ngôn Độc lập, tuyên bố 13 thuộc địa Anh ở Bắc Mỹ độc lập, khẳng định quyền bình đẳng, quyền được sống, quyền tự do và quyền mưu cầu hạnh phúc của con người."
    },
    {
        grade: "11", subject: "su", term: "GK1",
        question: "Sự kiện lịch sử ngày 14/07/1789 mở đầu cho thắng lợi của cuộc Đại cách mạng tư sản Pháp là:",
        options: ["Quần chúng nhân dân Pa-ri tấn công phá ngục Ba-xti (Bastille) - biểu tượng chuyên chế phong kiến", "Vua Lu-i XVI bị đưa lên máy chém", "Rô-be-spie lên nắm quyền chuyên chính Gia-cô-banh", "Đại hội ba đẳng cấp khai mạc ở Véc-xai"],
        answer: 0,
        explanation: "Ngày 14/07/1789, nhân dân Paris cầm vũ khí công phá pháo đài - nhà tù Bastille, đập tan biểu tượng chuyên chế phong kiến, mở màn cuộc cách mạng tư sản Pháp triệt để nhất thời cận đại."
    },
    {
        grade: "11", subject: "su", term: "GK1",
        question: "Tuyên ngôn Nhân quyền và Dân quyền (năm 1789) của Cách mạng tư sản Pháp đã giương cao khẩu hiệu tiến bộ nào?",
        options: ["Tự do - Bình đẳng - Bác ái (Liberté, Égalité, Fraternité)", "Độc lập - Tự do - Hạnh phúc", "Vô sản tất cả các nước đoàn kết lại", "Hòa bình - Ruộng đất - Bánh mì"],
        answer: 0,
        explanation: "Khẩu hiệu 'Tự do - Bình đẳng - Bác ái' trong Tuyên ngôn 1789 của Pháp đã trở thành ngọn cờ cổ vũ cuộc đấu tranh chống áp bức phong kiến và thần quyền trên toàn châu Âu và thế giới."
    },
    {
        grade: "11", subject: "su", term: "GK1",
        question: "Cuộc Duy tân Minh Trị (năm 1868) ở Nhật Bản thực chất mang tính chất của một cuộc cách mạng nào?",
        options: ["Một cuộc cách mạng tư sản chưa triệt để (mở đường cho chủ nghĩa tư bản phát triển và bảo vệ độc lập)", "Một cuộc cách mạng vô sản do công nhân lãnh đạo", "Một cuộc khởi nghĩa nông dân chống sưu cao thuế nặng", "Một cuộc cải cách tôn giáo thuần túy"],
        answer: 0,
        explanation: "Duy tân Minh Trị do Thiên hoàng Meiji thực hiện đã cải cách toàn diện kinh tế, chính trị, giáo dục, quân sự theo kiểu phương Tây, xóa bỏ chế độ Mạc phủ, đưa Nhật Bản thoát khỏi số phận thuộc địa và trở thành đế quốc."
    },
    {
        grade: "11", subject: "su", term: "GK1",
        question: "Vào cuối thế kỉ XIX - đầu thế kỉ XX, chủ nghĩa tư bản chuyển từ giai đoạn tự do cạnh tranh sang giai đoạn nào?",
        options: ["Chủ nghĩa tư bản độc quyền (chủ nghĩa đế quốc)", "Chủ nghĩa tư bản nhà nước hiện đại", "Chủ nghĩa xã hội không tưởng", "Chế độ phong kiến quân phiệt"],
        answer: 0,
        explanation: "Dưới tác động của cách mạng công nghiệp lần 2, quá trình tích tụ và tập trung sản xuất đã dẫn tới sự ra đời của các tổ chức độc quyền (Cartel, Syndicate, Trust, Concern) chi phối toàn bộ đời sống kinh tế - chính trị."
    },
    {
        grade: "11", subject: "su", term: "GK1",
        question: "Đặc điểm bản chất nổi bật nhất của giai đoạn Chủ nghĩa tư bản độc quyền (chủ nghĩa đế quốc) theo V.I. Lê-nin là gì?",
        options: ["Sự hình thành tư bản tài chính và đầu sỏ tài chính, xuất khẩu tư bản và phân chia thị trường thế giới giữa các tập đoàn và cường quốc", "Xóa bỏ các công ty cổ phần", "Kinh tế quay về tự cấp tự túc", "Các nước đế quốc chấm dứt xâm chiếm thuộc địa"],
        answer: 0,
        explanation: "Lênin đúc kết 5 đặc điểm của chủ nghĩa đế quốc: tập trung sản xuất và độc quyền; tư bản tài chính; xuất khẩu tư bản; các liên minh độc quyền phân chia thế giới; các cường quốc phân chia lãnh thổ thuộc địa."
    },
    {
        grade: "11", subject: "su", term: "GK1",
        question: "Chủ nghĩa tư bản hiện đại (từ sau Chiến tranh thế giới thứ hai đến nay) có đặc điểm mới nào sau đây?",
        options: ["Chủ nghĩa tư bản độc quyền nhà nước, sự thích ứng và điều chỉnh chính sách, ứng dụng mạnh mẽ cách mạng KH-CN và mở rộng liên kết toàn cầu", "Không còn giai cấp công nhân làm thuê", "Xóa bỏ hoàn toàn chế độ tư hữu tư nhân", "Các nước tư bản không còn cạnh tranh kinh tế"],
        answer: 0,
        explanation: "CNTB hiện đại kết hợp sức mạnh độc quyền tư nhân với sức mạnh kinh tế của nhà nước tư sản, có khả năng tự điều chỉnh để thích nghi, thúc đẩy toàn cầu hóa và phát triển kinh tế tri thức."
    },
    {
        grade: "11", subject: "su", term: "GK1",
        question: "Mâu thuẫn cơ bản vốn có trong lòng xã hội tư bản chủ nghĩa không thể tự giải quyết triệt để là mâu thuẫn giữa:",
        options: ["Tính chất xã hội hóa cao độ của lực lượng sản xuất với chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất (biểu hiện là mâu thuẫn giữa vô sản và tư sản)", "Mâu thuẫn giữa các nhà khoa học và các kĩ sư", "Mâu thuẫn giữa nông dân và thợ thủ công", "Mâu thuẫn giữa người tiêu dùng và nhân viên bán hàng"],
        answer: 0,
        explanation: "Lực lượng sản xuất ngày càng mang tính xã hội hóa toàn cầu, nhưng của cải và tư liệu sản xuất lại nằm trong tay thiểu số nhà tư bản; mâu thuẫn đối kháng này là nguồn gốc sinh ra khủng hoảng kinh tế chu kì."
    },
    {
        grade: "11", subject: "su", term: "GK1",
        question: "Hiện tượng 'Xuất khẩu tư bản' của các nước đế quốc thời cận - hiện đại khác với xuất khẩu hàng hóa thông thường ở điểm nào?",
        options: ["Đem tiền vốn đầu tư trực tiếp sang các nước khác (mở nhà máy, đồn điền, ngân hàng) để bóc lột sức lao động rẻ mạt và tài nguyên bản địa", "Chỉ chở nông sản tươi sống đi bán", "Tặng tiền không hoàn lại cho người nghèo bản xứ", "Chỉ xuất khẩu sách báo khoa học"],
        answer: 0,
        explanation: "Xuất khẩu tư bản là việc đầu tư vốn ra nước ngoài (FDI hoặc cho vay nặng lãi) nhằm thu siêu lợi nhuận nhờ giá nhân công rẻ mạt và nguồn nguyên liệu dồi dào ở các nước thuộc địa, phụ thuộc."
    },
    {
        grade: "11", subject: "su", term: "GK1",
        question: "Cuộc khủng hoảng kinh tế thừa lớn nhất trong lịch sử chủ nghĩa tư bản nổ ra vào năm 1929 bắt đầu từ đâu?",
        options: ["Sự sụp đổ của thị trường chứng khoán Phố Uôn (Wall Street, New York, Hoa Kỳ)", "Khủng hoảng nợ công ở châu Âu", "Chiến tranh thế giới thứ hai bùng nổ", "Khủng hoảng dầu mỏ ở Trung Đông"],
        answer: 0,
        explanation: "Thứ Năm đen tối (24/10/1929) trên thị trường chứng khoán Phố Wall đã châm ngòi cho cuộc Đại suy thoái (1929 - 1933) tàn phá nặng nề toàn bộ thế giới tư bản chủ nghĩa."
    },
    {
        grade: "11", subject: "su", term: "GK1",
        question: "Để thoát khỏi cuộc Đại khủng hoảng kinh tế 1929 - 1933, Tổng thống Hoa Kỳ Ph. Ru-dơ-ven (F. Roosevelt) đã thực hiện chính sách nào?",
        options: ["Chính sách mới (New Deal - tăng cường sự can thiệp và điều tiết của Nhà nước vào kinh tế)", "Chính sách phát xít hóa bộ máy chính quyền", "Chính sách đóng cửa kinh tế tuyệt đối", "Chính sách tư nhân hóa toàn bộ doanh nghiệp"],
        answer: 0,
        explanation: "Chính sách mới (New Deal) của Roosevelt dùng bàn tay Nhà nước để kiểm soát ngân hàng, hỗ trợ nông dân, tạo công ăn việc làm qua các dự án công cộng khổng lồ, cứu vãn CNTB Mỹ."
    },
    {
        grade: "11", subject: "su", term: "GK1",
        question: "Các công ty độc quyền đa quốc gia (MNCs) và xuyên quốc gia (TNCs) giữ vai trò như thế nào trong nền kinh tế thế giới ngày nay?",
        options: ["Nắm giữ phần lớn dòng vốn FDI, chi phối chuỗi cung ứng toàn cầu, độc quyền phát minh sáng chế và thương mại quốc tế", "Chỉ hoạt động trong phạm vi một tỉnh nhỏ", "Không có ảnh hưởng đáng kể đến tài chính", "Hoàn toàn do các nghiệp đoàn công nhân kiểm soát"],
        answer: 0,
        explanation: "Các tập đoàn xuyên quốc gia (Apple, Microsoft, Toyota, Samsung...) chi phối tới 80% thương mại quốc tế và các hoạt động nghiên cứu phát triển (R&D), là động lực then chốt của toàn cầu hóa."
    },
    {
        grade: "11", subject: "su", term: "GK1",
        question: "Một trong những giới hạn lớn nhất của chủ nghĩa tư bản hiện đại mà nhân loại đang phải đối mặt là gì?",
        options: ["Hố sâu ngăn cách giàu nghèo gia tăng, khủng hoảng tài chính chu kì, khai thác cạn kiệt tài nguyên và chạy đua vũ trang", "Không có khả năng tăng năng suất lao động", "Kìm hãm sự phát triển của mạng máy tính", "Làm giảm trình độ học vấn của người dân"],
        answer: 0,
        explanation: "CNTB hiện đại dù có nhiều thành tựu vượt bậc nhưng bản chất bóc lột giá trị thặng dư vẫn dẫn tới nghịch lí: tài sản tập trung vào 1% giới siêu giàu, trong khi hàng tỉ người nghèo khó và Trái Đất bị hủy hoại môi trường."
    },
    {
        grade: "11", subject: "su", term: "GK1",
        question: "Bài học lịch sử quan trọng nhất từ các cuộc cách mạng tư sản đối với sự phát triển tiến bộ của xã hội là gì?",
        options: ["Xóa bỏ rào cản phong kiến lạc hậu, giải phóng sức sản xuất, đề cao quyền con người và mở đường cho tiến bộ khoa học kĩ thuật", "Bảo lưu vĩnh viễn quyền lực tuyệt đối của vua chúa", "Ngăn chặn tự do buôn bán giữa các dân tộc", "Cấm đoán mọi quyền tự do dân chủ"],
        answer: 0,
        explanation: "Cách mạng tư sản đã xác lập thể chế nhà nước pháp quyền dân chủ, giải phóng sức lao động, khẳng định các quyền tự do công dân cơ bản và đưa nhân loại bước sang kỉ nguyên văn minh công nghiệp."
    },

    // ===================================================================
    // KHỐI 11 - LỊCH SỬ - CUỐI KÌ 1 (CK1 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "11", subject: "su", term: "CK1",
        question: "Sự kiện lịch sử vĩ đại ngày 07/11/1917 (theo lịch Nga cũ là ngày 25/10) làm 'rung chuyển thế giới' là:",
        options: ["Thắng lợi của cuộc Cách mạng xã hội chủ nghĩa tháng Mười Nga do V.I. Lê-nin và Đảng Bôn-sê-vích lãnh đạo", "Cách mạng dân chủ tư sản tháng Hai ở Nga", "Thành lập Liên bang Cộng hòa xã hội chủ nghĩa Xô viết (Liên Xô)", "Chiến tranh thế giới thứ nhất kết thúc"],
        answer: 0,
        explanation: "Cách mạng tháng Mười Nga 1917 lật đổ chính phủ tư sản lâm thời, đập tan ách thống trị của giai cấp bóc lột, đưa giai cấp vô sản lên nắm chính quyền và khai sinh nhà nước XHCN đầu tiên trên thế giới."
    },
    {
        grade: "11", subject: "su", term: "CK1",
        question: "Ý nghĩa quốc tế to lớn nhất của cuộc Cách mạng tháng Mười Nga năm 1917 là gì?",
        options: ["Mở ra thời đại mới trong lịch sử nhân loại - thời đại quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội trên phạm vi toàn cầu", "Giúp nước Nga trở thành nước tư bản độc quyền lớn nhất", "Chấm dứt hoàn toàn chế độ chiếm hữu nô lệ ở châu Phi", "Xóa bỏ biên giới giữa các nước châu Âu"],
        answer: 0,
        explanation: "Cách mạng tháng Mười đã chặt đứt một khâu yếu nhất trong sợi dây chuyền của chủ nghĩa đế quốc, biến lí luận CNXH khoa học của Mác - Ăngghen thành hiện thực sinh động, cổ vũ phong trào giải phóng dân tộc thuộc địa."
    },
    {
        grade: "11", subject: "su", term: "CK1",
        question: "Liên bang Cộng hòa xã hội chủ nghĩa Xô viết (gọi tắt là Liên Xô - CCCP) chính thức được thành lập vào năm nào?",
        options: ["Năm 1922 (gồm 4 nước cộng hòa xô viết đầu tiên)", "Năm 1917", "Năm 1945", "Năm 1936"],
        answer: 0,
        explanation: "Ngày 30/12/1922, Đại hội lần thứ nhất các Xô viết toàn Liên bang đã thông qua Tuyên ngôn và Hiệp ước thành lập Liên bang CHXHCN Xô viết (Liên Xô) trên nguyên tắc tự nguyện và bình đẳng."
    },
    {
        grade: "11", subject: "su", term: "CK1",
        question: "Sau Chiến tranh thế giới thứ hai (năm 1945), Chủ nghĩa xã hội đã có bước phát triển nhảy vọt nào?",
        options: ["Phát triển từ phạm vi một nước (Liên Xô) trở thành một hệ thống thế giới trải dài từ châu Âu, châu Á đến Mỹ La-tinh (Cuba)", "Bị thu hẹp chỉ còn trong phạm vi một thành phố", "Chấm dứt hoàn toàn sự tồn tại", "Hòa tan vào hệ thống tư bản chủ nghĩa"],
        answer: 0,
        explanation: "Thắng lợi của Hồng quân Liên Xô đánh tan phát xít tạo điều kiện cho các nước Đông Âu, Trung Quốc, Triều Tiên, Việt Nam và sau đó là Cuba đi lên CNXH, hình thành hệ thống XHCN thế giới đối trọng với CNTB."
    },
    {
        grade: "11", subject: "su", term: "CK1",
        question: "Sự kiện lịch sử ngày 01/10/1949 có tầm ảnh hưởng to lớn làm nghiêng cán cân lực lượng về phía chủ nghĩa xã hội là:",
        options: ["Nước Cộng hòa Nhân dân Trung Hoa chính thức thành lập do Mao Trạch Đông tuyên bố tại Bắc Kinh", "Chiến thắng Điện Biên Phủ ở Việt Nam", "Cách mạng Cuba thành công", "Liên Xô phóng thành công vệ tinh Sputnik"],
        answer: 0,
        explanation: "Nước CHND Trung Hoa ra đời năm 1949 đã chấm dứt hơn 100 năm nô dịch của thực dân đế quốc, nối liền dải đất XHCN từ biển Ban-tích sang Thái Bình Dương, cổ vũ phong trào giải phóng dân tộc Á - Phi."
    },
    {
        grade: "11", subject: "su", term: "CK1",
        question: "Nguyên nhân sâu xa dẫn đến sự khủng hoảng và sụp đổ của chế độ xã hội chủ nghĩa ở Liên Xô và Đông Âu vào năm 1991 là gì?",
        options: ["Mô hình kinh tế tập trung quan liêu bao cấp chậm đổi mới, xa rời nguyên tắc mác-xít và sai lầm nghiêm trọng trong cải tổ (Perestroika) của Goóc-ba-chốp", "Do thiếu hụt tài nguyên thiên nhiên dầu khí", "Do bị tấn công quân sự trực tiếp từ bên ngoài", "Do nhân dân Liên Xô không ủng hộ việc học tập khoa học"],
        answer: 0,
        explanation: "Mô hình kế hoạch hóa cứng nhắc kéo dài gây trì trệ kinh tế; sự quan liêu, tha hóa của một bộ phận cán bộ và đặc biệt là sai lầm buông lỏng vai trò lãnh đạo của Đảng Cộng sản trong cải tổ đã dẫn tới sự sụp đổ năm 1991."
    },
    {
        grade: "11", subject: "su", term: "CK1",
        question: "Đường lối 'Đổi mới' đất nước được Đảng Cộng sản Việt Nam đề ra tại Đại hội đại biểu toàn quốc lần thứ VI (tháng 12/1986) mang nội dung cốt lõi nào?",
        options: ["Đổi mới toàn diện, trọng tâm là đổi mới kinh tế: chuyển từ kinh tế kế hoạch hóa bao cấp sang kinh tế thị trường định hướng xã hội chủ nghĩa", "Quay lại áp dụng chế độ công xã thời nguyên thủy", "Tư nhân hóa hoàn toàn đất đai quốc gia", "Đóng cửa biên giới không quan hệ ngoại giao"],
        answer: 0,
        explanation: "Đại hội VI (1986) nhìn thẳng vào sự thật, khởi xướng công cuộc Đổi mới: phát triển kinh tế nhiều thành phần, mở cửa hội nhập quốc tế, kiên định mục tiêu độc lập dân tộc gắn liền với CNXH."
    },
    {
        grade: "11", subject: "su", term: "CK1",
        question: "Thành tựu vĩ đại sau gần 40 năm Đổi mới ở Việt Nam được Tổng Bí thư và Đảng ta đúc kết khẳng định là:",
        options: ["'Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay'", "'Nền kinh tế hoàn toàn phụ thuộc vào viện trợ'", "'Việt Nam đã trở thành quốc gia phát triển giàu nhất'", "'Đất nước không còn bất kì khó khăn thách thức nào'"],
        answer: 0,
        explanation: "Từ một nước nghèo nàn, thiếu lương thực trầm trọng sau chiến tranh, Việt Nam đã vươn lên thành nền kinh tế năng động tốp 40 thế giới, xuất khẩu nông sản hàng đầu và có quan hệ ngoại giao rộng khắp với 193 quốc gia."
    },
    {
        grade: "11", subject: "su", term: "CK1",
        question: "Đến cuối thế kỉ XIX, hầu hết các quốc gia ở khu vực Đông Nam Á đều bị biến thành thuộc địa của thực dân phương Tây, NGOẠI TRỪ quốc gia duy nhất nào?",
        options: ["Xiêm (Thái Lan ngày nay)", "Miến Điện (Myanmar)", "Mã Lai (Malaysia)", "Phi-líp-pin (Philippines)"],
        answer: 0,
        explanation: "Xiêm (Thái Lan) là nước duy nhất ở Đông Nam Á giữ được nền độc lập nhờ chính sách ngoại giao khôn khéo 'ngọn tre uốn theo gió', cải cách mở cửa của vua Chulalongkorn (Rama V) và vị trí vùng đệm giữa Anh và Pháp."
    },
    {
        grade: "11", subject: "su", term: "CK1",
        question: "Thực dân Pháp đã tiến hành xâm lược và thiết lập ách thống trị thuộc địa trên bán đảo Đông Dương bao gồm 3 nước nào?",
        options: ["Việt Nam, Lào và Cam-pu-chia", "Việt Nam, Thái Lan và Miến Điện", "In-đô-nê-xi-a, Mã Lai và Bru-nây", "Phi-líp-pin, Đông Ti-mo và Xinh-ga-po"],
        answer: 0,
        explanation: "Thực dân Pháp lập ra 'Liên bang Đông Dương' (Indochina) gồm Việt Nam (chia làm Bắc Kì, Trung Kì, Nam Kì), Campuchia và Lào dưới quyền cai trị của Toàn quyền Pháp."
    },
    {
        grade: "11", subject: "su", term: "CK1",
        question: "Thực dân Anh đã biến những quốc gia nào ở Đông Nam Á thành thuộc địa của mình?",
        options: ["Miến Điện (Myanmar) và Mã Lai (Malaysia, Singapore, Brunei ngày nay)", "Việt Nam và Lào", "In-đô-nê-xi-a", "Phi-líp-pin"],
        answer: 0,
        explanation: "Đế quốc Anh thôn tính Miến Điện sau 3 cuộc chiến tranh và sáp nhập vào Ấn Độ thuộc Anh, đồng thời thiết lập quyền kiểm soát tại bán đảo Malaya, eo biển Malacca và phía bắc đảo Borneo."
    },
    {
        grade: "11", subject: "su", term: "CK1",
        question: "Chính sách cai trị chung của chủ nghĩa thực dân phương Tây ở Đông Nam Á về mặt kinh tế là gì?",
        options: ["Vơ vét tài nguyên khoáng sản, bóc lột sức lao động, độc quyền ngoại thương và biến thuộc địa thành thị trường tiêu thụ hàng hóa chính quốc", "Đầu tư xây dựng nền công nghiệp nặng hiện đại cho thuộc địa", "Chia đều ruộng đất cho tất cả nông dân nghèo", "Chuyển giao toàn bộ công nghệ tiên tiến miễn phí"],
        answer: 0,
        explanation: "Thực dân phương Tây áp đặt chính sách 'bế quan tỏa cảng', cướp đoạt ruộng đất lập đồn điền cao su, chè, cà phê, bóc lột mỏ thiếc, than, dầu mỏ để làm giàu cho chính quốc và kìm hãm công nghiệp bản địa."
    },
    {
        grade: "11", subject: "su", term: "CK1",
        question: "Phong trào Cần Vương (1885 - 1896) ở Việt Nam nổ ra dưới ngọn cờ của ai nhằm mục tiêu gì?",
        options: ["Chiếu Cần Vương của vua Hàm Nghi do Tôn Thất Thuyết phụng mệnh, kêu gọi văn thân, sĩ phu và nhân dân giúp vua đánh giặc cứu nước", "Kêu gọi hợp tác hòa bình với thực dân Pháp", "Đòi vua thoái vị để lập nền cộng hòa", "Chống lại toàn bộ phong trào nông dân"],
        answer: 0,
        explanation: "Đêm mùng 4 rạng sáng 5/7/1885, cuộc phản công kinh thành Huế thất bại, Tôn Thất Thuyết phò vua Hàm Nghi ra Tân Sở ban Chiếu Cần Vương, thổi bùng ngọn lửa kháng Pháp theo hệ tư tưởng phong kiến (Ba Đình, Bãi Sậy, Hương Khê)."
    },
    {
        grade: "11", subject: "su", term: "CK1",
        question: "Đầu thế kỉ XX, hai nhà chí sĩ yêu nước tiêu biểu đại diện cho hai khuynh hướng cứu nước (bạo động và cải cách) ở Việt Nam là:",
        options: ["Phan Bội Châu (khuynh hướng bạo động - phong trào Đông Du) và Phan Châu Trinh (khuynh hướng cải cách ôn hòa)", "Nguyễn Huệ và Nguyễn Trãi", "Lê Lợi và Trần Hưng Đạo", "Hàm Nghi và Tôn Thất Thuyết"],
        answer: 0,
        explanation: "Phan Bội Châu chủ trương bạo động vũ trang, lập Hội Duy tân đưa thanh niên sang Nhật học tập (Đông Du); trong khi Phan Châu Trinh chủ trương 'Khai dân trí, chấn dân khí, hậu dân sinh', cải cách ôn hòa dựa vào Pháp."
    },
    {
        grade: "11", subject: "su", term: "CK1",
        question: "Điểm chung nổi bật trong phong trào giải phóng dân tộc ở các nước Đông Nam Á từ cuối thế kỉ XIX đến đầu thế kỉ XX là gì?",
        options: ["Diễn ra sôi nổi, quyết liệt, thu hút đông đảo quần chúng tham gia, chuyển dịch dần từ khuynh hướng phong kiến sang khuynh hướng dân chủ tư sản và vô sản", "Toàn bộ các cuộc khởi nghĩa đều thắng lợi hoàn toàn ngay lập tức", "Chỉ diễn ra bằng con đường thương lượng ngoại giao êm thấm", "Không có sự tham gia của tầng lớp nông dân"],
        answer: 0,
        explanation: "Giai đoạn này chứng kiến sự thất bại của các phong trào cứu nước mang ý thức hệ phong kiến, mở đường cho giai cấp tư sản và sau đó là giai cấp vô sản vươn lên nắm ngọn cờ lãnh đạo cách mạng giải phóng dân tộc."
    },

    // ===================================================================
    // KHỐI 11 - LỊCH SỬ - GIỮA KÌ 2 (GK2 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "11", subject: "su", term: "GK2",
        question: "Chiến thắng Bạch Đằng lịch sử năm 981 của quân dân Đại Cồ Việt do vị anh hùng dân tộc nào trực tiếp chỉ huy đánh tan quân xâm lược nhà Tống?",
        options: ["Thập đạo Tướng quân Lê Hoàn (Vua Lê Đại Hành)", "Ngô Quyền", "Trần Hưng Đạo", "Lý Thường Kiệt"],
        answer: 0,
        explanation: "Năm 981, trước nguy cơ quân Tống xâm lược, Thái hậu Dương Vân Nga trao áo long bào cho Lê Hoàn lên ngôi vua; Lê Hoàn đã chỉ huy quân dân đánh tan quân Tống trên sông Bạch Đằng và ải Tây Kết, giữ yên bờ cõi."
    },
    {
        grade: "11", subject: "su", term: "GK2",
        question: "Nét độc đáo trong nghệ thuật quân sự của Lý Thường Kiệt trong cuộc kháng chiến chống Tống (1075 - 1077) là chiến lược gì?",
        options: ["'Tiên phát chế nhân' (chủ động tiến công trước để tự vệ, đánh đòn phủ đầu vào bàn đạp tập kết quân của địch) kết hợp lập phòng tuyến sông Như Nguyệt", "Cố thủ hoàn toàn trong thành chờ giặc tới", "Đầu hàng nhượng bộ đất đai", "Chỉ dùng kỵ binh đánh úp ban đêm"],
        answer: 0,
        explanation: "Lý Thường Kiệt nêu tư tưởng: 'Ngồi yên đợi giặc không bằng đem quân đánh trước để chặn mũi nhọn của giặc', chủ động tập kích sang Khâm Châu, Ung Châu phá căn cứ giặc rồi rút về lập phòng tuyến sông Như Nguyệt."
    },
    {
        grade: "11", subject: "su", term: "GK2",
        question: "Bài thơ thần 'Nam quốc sơn hà' vang lên bên bờ sông Như Nguyệt được coi là bản văn kiện lịch sử mang ý nghĩa gì?",
        options: ["Bản Tuyên ngôn Độc lập đầu tiên khẳng định chủ quyền lãnh thổ thiêng liêng bất khả xâm phạm của nước Đại Việt", "Một bài thơ giải trí của binh lính bên bờ sông", "Bản hiệp ước đầu hàng quân Tống", "Lời ca ngợi thiên nhiên mùa xuân tươi đẹp"],
        answer: 0,
        explanation: "'Nam quốc sơn hà Nam đế cư / Tiệt nhiên định phận tại thiên thư / Như hà nghịch lỗ lai xâm phạm / Nhữ đẳng hành khan thủ bại hư' khẳng định đanh thép chân lí chủ quyền lãnh thổ và ý chí quật cường của dân tộc."
    },
    {
        grade: "11", subject: "su", term: "GK2",
        question: "Trong cả 3 lần kháng chiến chống quân xâm lược Mông - Nguyên (1258, 1285, 1287 - 1288), quân dân nhà Trần đều nhất quán thực hiện kế sách độc đáo nào?",
        options: ["Kế sách 'Vườn không nhà trống' kết hợp rút lui chiến lược để bảo toàn lực lượng rồi phản công quyết định", "Dàn quân chủ lực quyết chiến ngay tại vùng biên giới", "Đóng chặt cửa kinh thành Thăng Long để cố thủ", "Dùng voi chiến đánh trực diện kỵ binh Mông Cổ"],
        answer: 0,
        explanation: "Quân dân nhà Trần triệt để thực hiện 'Thanh dã' (Vườn không nhà trống) rút khỏi Thăng Long, khiến đạo quân kỵ binh giặc đông hàng chục vạn rơi vào cảnh thiếu lương thảo, mệt mỏi suy sụp rồi mới tung đòn phản công sấm sét tiêu diệt."
    },
    {
        grade: "11", subject: "su", term: "GK2",
        question: "Hội nghị Diên Hồng (năm 1284) do Thượng hoàng Trần Thánh Tông triệu tập các bô lão trong cả nước thể hiện truyền thống quý báu nào?",
        options: ["Trưng cầu ý dân, đoàn kết toàn dân tộc triệu người như một với tiếng hô vang đồng thanh: 'ĐÁNH!'", "Bàn bạc việc đóng thuế ruộng đất", "Tuyển chọn nhân tài thi trạng nguyên", "Hòa hoãn cầu xin giặc Nguyên tha mạng"],
        answer: 0,
        explanation: "Hội nghị Diên Hồng là biểu tượng sáng ngời của tinh thần đại đoàn kết và ý chí sắt đá của dân tộc: trước câu hỏi nên hòa hay nên đánh, muôn người cùng hô một lời 'Đánh!', biểu thị sức mạnh vô địch của toàn dân."
    },
    {
        grade: "11", subject: "su", term: "GK2",
        question: "Câu nói khẳng khái lưu danh sử sách: 'Nếu bệ hạ muốn hàng, xin hãy chém đầu thần trước đã!' là của vị tướng kiệt xuất nào?",
        options: ["Tiết chế Quốc công Hưng Đạo Đại Vương Trần Quốc Tuấn", "Trần Thủ Độ", "Trần Quang Khải", "Trần Khánh Dư"],
        answer: 0,
        explanation: "Năm 1285 khi thế giặc Thoát Hoan hung hãn, vua Trần lo lắng ướm hỏi, Hưng Đạo Vương Trần Quốc Tuấn đã khẳng khái trả lời câu nói bất hủ, củng cố vững chắc niềm tin thắng lợi cho triều đình và quân sĩ."
    },
    {
        grade: "11", subject: "su", term: "GK2",
        question: "Trận quyết chiến chiến lược trên sông Bạch Đằng năm 1288 đập tan hoàn toàn ý đồ xâm lược của đế chế Mông - Nguyên do ai lãnh đạo?",
        options: ["Trần Hưng Đạo (dùng kế cắm cọc gỗ bịt sắt dưới lòng sông)", "Lê Lợi", "Ngô Quyền", "Lý Thường Kiệt"],
        answer: 0,
        explanation: "Ngày 09/04/1288, tận dụng thủy triều rút trên sông Bạch Đằng, Trần Hưng Đạo đã chỉ huy quân dân tiêu diệt toàn bộ thủy quân đoàn thuyền Ô Mã Nhi, bắt sống tướng giặc, kết thúc oanh liệt 3 lần đại thắng Mông - Nguyên."
    },
    {
        grade: "11", subject: "su", term: "GK2",
        question: "Khởi nghĩa Lam Sơn (1418 - 1427) do Lê Lợi và Nguyễn Trãi lãnh đạo nổ ra nhằm lật đổ ách thống trị tàn bạo của quân xâm lược nào?",
        options: ["Quân xâm lược nhà Minh (Trung Quốc)", "Quân xâm lược nhà Tống", "Quân xâm lược Mông - Nguyên", "Quân xâm lược Mãn Thanh"],
        answer: 0,
        explanation: "Đầu thế kỉ XV, nhà Minh xâm lược nước ta, thi hành chính sách đồng hóa và bóc lột tàn bạo; Lê Lợi dấy binh khởi nghĩa tại Lam Sơn (Thanh Hóa), trải qua 10 năm nếm mật nằm gai giành lại hoàn toàn độc lập dân tộc."
    },
    {
        grade: "11", subject: "su", term: "GK2",
        question: "Trận quyết chiến chiến lược toàn thắng của nghĩa quân Lam Sơn năm 1427 buộc tướng giặc Vương Thông phải mở hội thề Đông Quan rút quân về nước là:",
        options: ["Chiến thắng Chi Lăng - Xương Giang", "Chiến thắng Tốt Động - Chúc Động", "Chiến thắng Rạch Gầm - Xoài Mút", "Chiến thắng Ngọc Hồi - Đống Đa"],
        answer: 0,
        explanation: "Tại Chi Lăng - Xương Giang (cuối năm 1427), nghĩa quân Lam Sơn phục kích chém đầu Liễu Thăng, bắt sống Hoàng Phúc, tiêu diệt 10 vạn viện binh giặc, buộc Vương Thông trong thành Đông Quan phải xin hàng và giảng hòa."
    },
    {
        grade: "11", subject: "su", term: "GK2",
        question: "Tác phẩm văn học chính luận kiệt xuất của Nguyễn Trãi được coi là bản 'Tuyên ngôn Độc lập thứ hai' của dân tộc Việt Nam là:",
        options: ["Bình Ngô đại cáo", "Hịch tướng sĩ của Trần Hưng Đạo", "Chiếu dời đô của Lý Thái Tổ", "Bạch Đằng giang phú của Trương Hán Siêu"],
        answer: 0,
        explanation: "'Bình Ngô đại cáo' (1428) tổng kết 10 năm kháng chiến Lam Sơn oanh liệt, nêu cao chân lí nhân nghĩa: 'Đem đại nghĩa để thắng hung tàn / Lấy chí nhân để thay cường bạo' và khẳng định chủ quyền độc lập thiêng liêng của nước Đại Việt."
    },
    {
        grade: "11", subject: "su", term: "GK2",
        question: "Trận thủy chiến Rạch Gầm - Xoài Mút (năm 1785) của người anh hùng áo vải Nguyễn Huệ đã đập tan 5 vạn quân xâm lược nào?",
        options: ["Quân xâm lược Xiêm (Thái Lan)", "Quân Mãn Thanh", "Quân Pháp", "Quân Mông Cổ"],
        answer: 0,
        explanation: "Tháng 01/1785 trên khúc sông Tiền (đoạn Rạch Gầm - Xoài Mút, Tiền Giang), Nguyễn Huệ mai phục tiêu diệt gọn gần 5 vạn quân Xiêm và liên quân Nguyễn Ánh, khiến người Xiêm 'sợ quân Tây Sơn như sợ cọp'."
    },
    {
        grade: "11", subject: "su", term: "GK2",
        question: "Chiến dịch thần tốc mùa xuân năm Kỷ Dậu (1789) của Hoàng đế Quang Trung đại phá 29 vạn quân Mãn Thanh đỉnh cao là chiến thắng nào?",
        options: ["Chiến thắng Ngọc Hồi - Đống Đa (mùng 5 Tết Kỷ Dậu)", "Chiến thắng Chi Lăng", "Chiến thắng sông Gianh", "Chiến thắng Bạch Đằng"],
        answer: 0,
        explanation: "Đêm mùng 4 rạng sáng mùng 5 Tết Kỷ Dậu 1789, vua Quang Trung chỉ huy đạo quân Tây Sơn công phá đồn Ngọc Hồi và giải phóng đồn Đống Đa, tướng giặc Sầm Nghi Đống thắt cổ tự tử, Tôn Sĩ Nghị hoảng hốt tháo chạy."
    },
    {
        grade: "11", subject: "su", term: "GK2",
        question: "Nguyên nhân quyết định hàng đầu làm nên thắng lợi của tất cả các cuộc chiến tranh giải phóng và bảo vệ Tổ quốc trong lịch sử dân tộc là gì?",
        options: ["Lòng yêu nước nồng nàn và sức mạnh đoàn kết toàn dân tộc triệu người như một", "Nhờ vào vũ khí hiện đại vượt trội kẻ thù", "Do lãnh thổ nước ta có diện tích rộng lớn nhất châu Á", "Nhờ có sự giúp đỡ quân sự trực tiếp của các nước phương Tây"],
        answer: 0,
        explanation: "Truyền thống yêu nước nồng nàn, ý chí quật cường bất khuất 'giặc đến nhà đàn bà cũng đánh' và sức mạnh của khối đại đoàn kết toàn dân là cội nguồn tạo nên sức mạnh vô song đánh thắng mọi đế quốc xâm lược."
    },
    {
        grade: "11", subject: "su", term: "GK2",
        question: "Bài học lịch sử 'Lấy dân làm gốc' (Khoan thư sức dân để làm kế sâu rễ bền gốc) được vị anh hùng nào đúc kết để lại cho hậu thế muôn đời?",
        options: ["Hưng Đạo Đại Vương Trần Quốc Tuấn", "Lê Lợi", "Ngô Quyền", "Hồ Quý Ly"],
        answer: 0,
        explanation: "Trước khi qua đời (năm 1300), Trần Hưng Đạo dặn vua Trần Anh Tông bí quyết giữ nước muôn đời: 'Khoan thư sức dân để làm kế sâu rễ bền gốc, đó là thượng sách giữ nước vậy'."
    },
    {
        grade: "11", subject: "su", term: "GK2",
        question: "Nét đặc sắc xuyên suốt trong truyền thống nghệ thuật quân sự Việt Nam khi đối đầu với các đế chế xâm lược hùng mạnh là gì?",
        options: ["Nghệ thuật chiến tranh nhân dân: 'Lấy nhỏ thắng lớn, lấy ít địch nhiều, lấy đoản binh chế trường trận'", "Luôn luôn dùng quân số đông hơn để đè bẹp kẻ thù", "Chỉ mua vũ khí tối tân từ nước ngoài", "Không bao giờ chủ động hòa hoãn ngoại giao sau khi thắng trận"],
        answer: 0,
        explanation: "Biết mình biết người, tổ chức toàn dân đánh giặc, kết hợp chiến tranh du kích với vận động chiến tiêu hao, tận dụng địa hình hiểm trở và kết thúc chiến tranh bằng nghệ thuật ngoại giao nhân văn."
    },

    // ===================================================================
    // KHỐI 11 - LỊCH SỬ - CUỐI KÌ 2 (CK2 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "11", subject: "su", term: "CK2",
        question: "Cuộc cải cách của Hồ Quý Ly và triều Hồ (cuối thế kỉ XIV - đầu thế kỉ XV) đã ban hành chính sách tiền tệ tiến bộ mang tính đột phá nào?",
        options: ["Phát hành tiền giấy 'Thông bảo hội sao' thay thế tiền đồng (tiền giấy đầu tiên của Việt Nam)", "Chỉ dùng vàng thỏi làm phương tiện thanh toán", "Bãi bỏ hoàn toàn việc dùng tiền trong giao dịch", "Bắt buộc người dân dùng tiền của nhà Minh"],
        answer: 0,
        explanation: "Năm 1396, Hồ Quý Ly ban hành tiền giấy 'Thông bảo hội sao' nhằm thu hồi tiền đồng đúc vũ khí chống giặc và thúc đẩy lưu thông hàng hóa, đưa nước ta thành một trong những quốc gia dùng tiền giấy sớm nhất thế giới."
    },
    {
        grade: "11", subject: "su", term: "CK2",
        question: "Chính sách 'Hạn điền' và 'Hạn nô' trong cải cách của Hồ Quý Ly nhằm mục đích chính là gì?",
        options: ["Hạn chế quyền lực và kinh tế của quý tộc tôn thất nhà Trần, giải phóng sức sản xuất và tập trung quyền lực vào tay triều đình", "Tịch thu toàn bộ ruộng đất của nông dân nghèo", "Tăng thêm số lượng nô tì phục vụ quan lại", "Khuyến khích lập thêm các thái ấp tư nhân khổng lồ"],
        answer: 0,
        explanation: "Chính sách hạn điền (hạn chế diện tích ruộng tư sở hữu) và hạn nô (hạn chế số lượng nô tì) đánh đòn chí mạng vào cơ sở kinh tế của quý tộc nhà Trần, biến nô tì thành nông dân nộp thuế cho triều đình."
    },
    {
        grade: "11", subject: "su", term: "CK2",
        question: "Nguyên nhân căn bản khiến triều Hồ thất bại nhanh chóng khi quân Minh xâm lược (năm 1407) như Hồ Nguyên Trừng đã cay đắng thừa nhận là:",
        options: ["'Thần không sợ đánh, chỉ sợ lòng dân không theo' (không tập hợp được sức mạnh đoàn kết của toàn dân)", "Do vũ khí của triều Hồ quá thô sơ", "Do thành Tây Đô bị sụp đổ tự nhiên", "Do quân Minh không bao giờ dùng súng thần cơ"],
        answer: 0,
        explanation: "Cải cách của Hồ Quý Ly diễn ra quá vội vã, lại phế truất vua Trần khiến lòng dân hoang mang; khi quân Minh xâm lăng, triều Hồ cô độc tác chiến không huy động được sức mạnh toàn dân nên nhanh chóng sụp đổ."
    },
    {
        grade: "11", subject: "su", term: "CK2",
        question: "Cuộc cải cách hành chính toàn diện của vua Lê Thánh Tông (nửa sau thế kỉ XV) đã chia cả nước thành bao nhiêu đơn vị hành chính cấp đạo?",
        options: ["13 đạo thừa tuyên (sau này gọi là xứ)", "50 tỉnh", "3 miền độc lập", "100 huyện"],
        answer: 0,
        explanation: "Năm 1466 - 1471, Lê Thánh Tông bãi bỏ chức tể tướng và các cơ quan trung gian, chia cả nước thành 13 đạo thừa tuyên (mỗi đạo có Đô ti coi quân sự, Thừa ti coi dân chính, Hiến ti coi thanh tra) nhằm tập trung quyền lực tối cao về nhà vua."
    },
    {
        grade: "11", subject: "su", term: "CK2",
        question: "Bản đồ địa lí hành chính hoàn chỉnh đầu tiên của nước Đại Việt được vẽ dưới thời vua Lê Thánh Tông có tên gọi là gì?",
        options: ["Bản đồ Hồng Đức (Hồng Đức bản đồ)", "Đại Nam nhất thống toàn đồ", "Bản đồ An Nam tứ chí", "Bản đồ Giáp Ngọ"],
        answer: 0,
        explanation: "Năm 1490, vua Lê Thánh Tông cho hoàn thành 'Hồng Đức bản đồ', thể hiện chi tiết ranh giới non sông bờ cõi nước Đại Việt gồm 13 đạo thừa tuyên và khẳng định chủ quyền cương vực lãnh thổ."
    },
    {
        grade: "11", subject: "su", term: "CK2",
        question: "Cuộc cải cách hành chính quy mô lớn của vua Minh Mạng (năm 1831 - 1832) dưới triều Nguyễn đã để lại dấu ấn lịch sử nào còn ảnh hưởng đến ngày nay?",
        options: ["Bãi bỏ Bắc Thành và Gia Định Thành, chia cả nước thành 30 tỉnh và 1 phủ Thừa Thiên (khai sinh đơn vị hành chính 'Tỉnh' ở Việt Nam)", "Chia nước ta thành 5 khu tự trị quân sự", "Dời đô từ Huế ra Hà Nội", "Xóa bỏ toàn bộ các cấp chính quyền cơ sở"],
        answer: 0,
        explanation: "Vua Minh Mạng tiến hành cải cách hành chính đỉnh cao: năm 1831 chia các trấn phía Bắc thành 18 tỉnh, năm 1832 chia phía Nam thành 12 tỉnh cùng phủ Thừa Thiên, tạo nên hệ thống quản trị thống nhất từ trung ương đến địa phương."
    },
    {
        grade: "11", subject: "su", term: "CK2",
        question: "Hệ thống cơ quan 'Cơ mật viện' được vua Minh Mạng thành lập năm 1834 đóng vai trò gì trong bộ máy triều đình?",
        options: ["Cơ quan tư vấn tối cao bên cạnh nhà vua, nắm giữ và bàn bạc các việc quân cơ, quốc gia đại sự hệ trọng nhất", "Cơ quan chuyên coi sóc việc thi cử cử nhân", "Cơ quan trông coi kho thóc gạo hoàng gia", "Tổ chức y tế chăm sóc sức khỏe cung đình"],
        answer: 0,
        explanation: "Cơ mật viện gồm 4 đại thần do nhà vua đích thân chỉ định, là 'nội các' tham mưu trực tiếp cho vua xử lí các công việc khẩn cấp về quân sự, an ninh và đối ngoại."
    },
    {
        grade: "11", subject: "su", term: "CK2",
        question: "Biển Đông là vùng biển có vị trí chiến lược địa - chính trị và kinh tế quan trọng hàng đầu thế giới vì:",
        options: ["Là tuyến đường hàng hải huyết mạch nhộn nhịp thứ hai thế giới nối Ấn Độ Dương với Thái Bình Dương, giàu tài nguyên sinh vật và dầu khí", "Là vùng biển không có bão gió quanh năm", "Là vùng biển cạn không tàu thuyền nào qua lại được", "Chỉ thuộc quyền sở hữu riêng của một quốc gia duy nhất"],
        answer: 0,
        explanation: "Biển Đông là tuyến vận tải biển quốc tế huyết mạch (chiếm trên 50% lượng hàng vận tải biển toàn cầu), sở hữu ngư trường dồi dào, trữ lượng dầu mỏ, khí đốt và vị trí an ninh quốc phòng sinh tử của khu vực châu Á - Thái Bình Dương."
    },
    {
        grade: "11", subject: "su", term: "CK2",
        question: "Nhà nước phong kiến Việt Nam đã xác lập và thực thi chủ quyền đối với hai quần đảo Hoàng Sa và Trường Sa một cách hòa bình, liên tục từ thời kì nào?",
        options: ["Ít nhất từ thế kỉ XVII dưới thời các chúa Nguyễn ở Đàng Trong", "Chỉ mới từ sau năm 1975", "Bắt đầu từ thời thuộc Pháp thế kỉ XX", "Từ năm 1945 sau Cách mạng tháng Tám"],
        answer: 0,
        explanation: "Các tư liệu lịch sử của Việt Nam và phương Tây đều chứng minh: từ đầu thế kỉ XVII, nhà nước Đại Việt dưới thời chúa Nguyễn đã thành lập Đội Hoàng Sa và Đội Bắc Hải để quản lí, khai thác và thực thi chủ quyền tại hai quần đảo."
    },
    {
        grade: "11", subject: "su", term: "CK2",
        question: "Tổ chức dân binh được các chúa Nguyễn thành lập ở vùng biển Bình Sơn (Quảng Ngãi) có nhiệm vụ dong thuyền ra đo đạc, thu lượm hải vật và cắm mốc chủ quyền ở Hoàng Sa là:",
        options: ["Đội Hoàng Sa và Đội Bắc Hải", "Đội Cần Vương trên biển", "Thủy quân nghĩa binh Lam Sơn", "Hải quân Tây Sơn"],
        answer: 0,
        explanation: "Đội Hoàng Sa gồm 70 suất dân đinh xã An Vĩnh, hàng năm vào tháng 3 nhận lệnh đi thuyền ra quần đảo Hoàng Sa tìm kiếm hàng hóa tàu đắm, lượm hải vật, đo vẽ thủy trình và tuần tra chủ quyền đến tháng 8 thì về nộp lại triều đình."
    },
    {
        grade: "11", subject: "su", term: "CK2",
        question: "Lễ hội văn hóa tâm linh độc đáo được nhân dân huyện đảo Lý Sơn (Quảng Ngãi) duy trì hàng trăm năm nay để tưởng nhớ những người lính ra đi làm nhiệm vụ bảo vệ Hoàng Sa là:",
        options: ["Lễ khao lề thế lính Hoàng Sa (với hình tượng những chiếc thuyền câu và hình nhân thế mạng bằng bột)", "Lễ hội Đua voi", "Lễ hội Nghinh Ông", "Lễ hội Đâm trâu"],
        answer: 0,
        explanation: "Lễ Khao lề thế lính Hoàng Sa (Di sản văn hóa phi vật thể quốc gia) được tổ chức vào tháng 2 - 3 âm lịch tại Lý Sơn để tế lễ, cúng thế mạng và tri ân các anh hùng dân binh Hoàng Sa năm xưa đã hi sinh thân mình vì chủ quyền biển đảo."
    },
    {
        grade: "11", subject: "su", term: "CK2",
        question: "Bộ quốc sử đồ sộ nào của triều Nguyễn ghi chép đầy đủ các sự kiện vua Gia Long, Minh Mạng cử thủy quân ra Hoàng Sa cắm cọc mốc, dựng bia chủ quyền và trồng cây?",
        options: ["Đại Nam thực lục (do Quốc sử quán triều Nguyễn biên soạn)", "Đại Việt sử kí toàn thư", "Lịch triều hiến chương loại chí", "Gia Định thành thông chí"],
        answer: 0,
        explanation: "'Đại Nam thực lục' ghi chép rõ ràng: năm 1816 vua Gia Long thân hành sai thủy quân ra Hoàng Sa đo đạc thủy trình; năm 1836 vua Minh Mạng phái Chánh đội trưởng thủy quân Phạm Hữu Nhật cắm biển mốc gỗ khẳng định chủ quyền."
    },
    {
        grade: "11", subject: "su", term: "CK2",
        question: "Bản đồ chính thống của triều Nguyễn ban hành năm 1838 có ghi chú rõ ràng hai địa danh 'Hoàng Sa' và 'Vạn lí Trường Sa' thuộc lãnh thổ Việt Nam là:",
        options: ["Đại Nam nhất thống toàn đồ", "An Nam tứ chí đồ", "Bản đồ Hồng Đức", "Bản đồ Đàng Trong thời chúa Sãi"],
        answer: 0,
        explanation: "'Đại Nam nhất thống toàn đồ' vẽ năm 1838 dưới thời Minh Mạng thể hiện Hoàng Sa và Vạn lí Trường Sa là lãnh thổ không thể tách rời của quốc gia Đại Nam, là chứng cứ pháp lí lịch sử vô giá."
    },
    {
        grade: "11", subject: "su", term: "CK2",
        question: "Công ước của Liên Hợp Quốc về Luật Biển năm 1982 (UNCLOS 1982) quy định Vùng đặc quyền kinh tế (EEZ) của một quốc gia ven biển có chiều rộng là bao nhiêu?",
        options: ["200 hải lí tính từ đường cơ sở dùng để tính chiều rộng lãnh hải", "12 hải lí", "50 hải lí", "350 hải lí"],
        answer: 0,
        explanation: "Theo UNCLOS 1982, quốc gia ven biển có vùng lãnh hải rộng 12 hải lí và Vùng đặc quyền kinh tế (EEZ) rộng 200 hải lí (khoảng 370,4 km), nơi quốc gia có chủ quyền kinh tế và quyền tài phán đối với tài nguyên."
    },
    {
        grade: "11", subject: "su", term: "CK2",
        question: "Chủ trương nhất quán của Đảng và Nhà nước Việt Nam trong việc giải quyết các tranh chấp chủ quyền ở Biển Đông hiện nay là gì?",
        options: ["Kiên quyết, kiên trì bảo vệ vững chắc độc lập chủ quyền, giải quyết mọi tranh chấp bằng biện pháp hòa bình trên cơ sở luật pháp quốc tế, đặc biệt là UNCLOS 1982", "Dùng vũ lực quân sự tấn công phủ đầu ngay lập tức", "Nhượng bộ vô điều kiện các đảo cho nước ngoài", "Không tham gia bất kì công ước quốc tế nào"],
        answer: 0,
        explanation: "Việt Nam luôn kiên trì nguyên tắc hòa bình, tuân thủ Hiến chương LHQ và UNCLOS 1982, thực hiện Tuyên bố về ứng xử của các bên ở Biển Đông (DOC) và thúc đẩy sớm đạt được Bộ Quy tắc ứng xử ở Biển Đông (COC) hiệu lực, thực chất."
    },

    // ===================================================================
    // KHỐI 11 - GDKT&PL - GIỮA KÌ 1 (GK1 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "11", subject: "gdktpl", term: "GK1",
        question: "Khái niệm 'Cạnh tranh trong kinh tế thị trường' được hiểu chuẩn xác là:",
        options: ["Sự ganh đua, đấu tranh giữa các chủ thể kinh tế nhằm giành lấy những điều kiện thuận lợi trong sản xuất và tiêu thụ hàng hóa để thu được lợi nhuận cao nhất", "Sự bắt tay câu kết giữa các doanh nghiệp để ép giá người tiêu dùng", "Hoạt động hòa giải mâu thuẫn giữa người lao động và chủ doanh nghiệp", "Sự can thiệp bằng mệnh lệnh hành chính của nhà nước"],
        answer: 0,
        explanation: "Cạnh tranh là sự ganh đua khách quan giữa các chủ thể kinh tế (người bán với người bán, người mua với người mua, người bán với người mua) nhằm giành ưu thế về vốn, nguồn nguyên liệu, thị trường và lợi nhuận."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK1",
        question: "Nguyên nhân kinh tế sâu xa dẫn đến sự xuất hiện tất yếu của Cạnh tranh trong nền kinh tế hàng hóa là gì?",
        options: ["Sự tồn tại của nhiều chủ sở hữu độc lập, có lợi ích kinh tế khác nhau cùng với sự khan hiếm nguồn lực sản xuất", "Do nhà nước ban hành luật bắt buộc các doanh nghiệp phải đấu đá nhau", "Do người tiêu dùng không chịu mua hàng hóa", "Do sản xuất nông nghiệp phụ thuộc vào thời tiết"],
        answer: 0,
        explanation: "Cạnh tranh xuất hiện do sự khác biệt về sở hữu tư liệu sản xuất và điều kiện sản xuất cá biệt; mỗi chủ thể vì lợi ích riêng của mình buộc phải ganh đua để giành giật nguồn lực và khách hàng."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK1",
        question: "Tác động tích cực hàng đầu của cạnh tranh lành mạnh đối với nền kinh tế là gì?",
        options: ["Thúc đẩy tiến bộ khoa học kĩ thuật, nâng cao chất lượng sản phẩm, hạ giá thành và tạo động lực phát triển kinh tế bền vững", "Làm cho tài nguyên thiên nhiên nhanh chóng cạn kiệt", "Xóa bỏ hoàn toàn nguy cơ rủi ro phá sản của các công ty", "Làm cho mọi mặt hàng đều tăng giá vô hạn"],
        answer: 0,
        explanation: "Cạnh tranh lành mạnh là 'đòn bẩy' của nền kinh tế: muốn giành khách hàng, doanh nghiệp buộc phải đầu tư công nghệ mới, nâng cao năng suất, cải tiến chất lượng và phục vụ chu đáo."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK1",
        question: "Hành vi nào sau đây của doanh nghiệp bị pháp luật coi là hành vi 'Cạnh tranh không lành mạnh'?",
        options: ["Tung tin sai sự thật về chất lượng sản phẩm của đối thủ, xâm phạm bí mật kinh doanh và nhái nhãn mác thương hiệu nổi tiếng", "Nghiên cứu hạ giá thành sản phẩm nhờ lắp đặt robot tự động", "Mở rộng hệ thống đại lí chăm sóc khách hàng 24/7", "Đăng kí bảo hộ kiểu dáng công nghiệp hợp pháp"],
        answer: 0,
        explanation: "Luật Cạnh tranh nghiêm cấm các hành vi xâm phạm bí mật kinh doanh, ép buộc khách hàng, gièm pha đối thủ, chỉ dẫn gây nhầm lẫn (nhái thương hiệu) và bán phá giá để triệt hạ đối thủ."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK1",
        question: "Khái niệm 'Cầu' (Demand) trong kinh tế học được định nghĩa là:",
        options: ["Khối lượng hàng hóa, dịch vụ mà người tiêu dùng cần mua và có khả năng thanh toán tại các mức giá khác nhau trong một khoảng thời gian xác định", "Toàn bộ ước muốn mơ ước viển vông của con người không có tiền mua", "Số lượng hàng hóa đang nằm tồn ứ trong kho của nhà máy", "Tổng số tiền tiết kiệm của người dân trong ngân hàng"],
        answer: 0,
        explanation: "Cầu trong kinh tế không phải chỉ là nhu cầu thuần túy, mà là nhu cầu có khả năng thanh toán (người mua có tiền và sẵn sàng chi trả ở các mức giá thị trường nhất định)."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK1",
        question: "Khái niệm 'Cung' (Supply) trong kinh tế học phản ánh điều gì?",
        options: ["Khối lượng hàng hóa, dịch vụ mà các chủ thể kinh tế sẵn sàng cung ứng cho thị trường tương ứng với các mức giá khác nhau trong một khoảng thời gian nhất định", "Toàn bộ tài nguyên khoáng sản còn nằm sâu dưới lòng đất", "Số lượng hàng hóa mà người mua muốn được tặng miễn phí", "Nhu cầu nhập khẩu hàng tiêu dùng xa xỉ của người dân"],
        answer: 0,
        explanation: "Cung là tổng số lượng sản phẩm hàng hóa hoặc dịch vụ mà người sản xuất có khả năng và sẵn sàng đưa ra bán trên thị trường ở các mức giá khác nhau."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK1",
        question: "Theo Quy luật Cung - Cầu, khi các điều kiện khác không đổi, nếu giá cả của một hàng hóa tăng lên thì:",
        options: ["Lượng cung hàng hóa đó có xu hướng tăng lên, còn lượng cầu có xu hướng giảm xuống", "Cả lượng cung và lượng cầu đều tăng mạnh gấp đôi", "Lượng cung giảm xuống còn lượng cầu tăng vọt", "Cả cung và cầu đều không có bất kì biến động nào"],
        answer: 0,
        explanation: "Khi giá tăng, người sản xuất thấy có lãi nhiều nên kích thích tăng sản xuất (lượng cung tăng); ngược lại người tiêu dùng thấy đắt đỏ nên hạn chế mua (lượng cầu giảm)."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK1",
        question: "Giá cả cân bằng thị trường (Market Equilibrium Price) là mức giá mà tại đó:",
        options: ["Lượng cung bằng lượng cầu (thị trường không bị dư thừa và cũng không bị thiếu hụt hàng hóa)", "Người bán thu được lợi nhuận cao nhất bất chấp người mua", "Người mua được mua hàng với giá rẻ nhất gần như cho không", "Nhà nước áp đặt một mức giá cố định không đổi trong 50 năm"],
        answer: 0,
        explanation: "Điểm cân bằng thị trường xuất hiện tại giao điểm của đường cung và đường cầu: mức giá thỏa mãn cả người mua và người bán, tại đó lượng hàng người bán muốn bán đúng bằng lượng hàng người mua muốn mua."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK1",
        question: "Khi thu nhập bình quân của người dân trong xã hội tăng lên, đường cầu đối với các mặt hàng chất lượng cao (như du lịch, sữa hạt, ô tô) thường dịch chuyển như thế nào?",
        options: ["Dịch chuyển sang phải (lượng cầu tăng lên ở mọi mức giá)", "Dịch chuyển sang trái (lượng cầu giảm mạnh)", "Không thay đổi vị trí", "Biến mất hoàn toàn"],
        answer: 0,
        explanation: "Thu nhập là nhân tố quan trọng tác động đến cầu: đối với hàng hóa thông thường và cao cấp, khi thu nhập của người tiêu dùng tăng lên thì sức mua và lượng cầu tăng lên tương ứng."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK1",
        question: "Nhân tố nào sau đây có thể làm cho 'Cung' một loại nông sản trên thị trường sụt giảm nghiêm trọng dù giá bán vẫn đang tăng cao?",
        options: ["Thiên tai bão lụt, hạn hán kéo dài hoặc dịch bệnh trên cây trồng, vật nuôi", "Nông dân áp dụng giống cây trồng năng suất cao mới", "Giá phân bón và xăng dầu đồng loạt giảm 50%", "Chính phủ tăng mức tiền trợ cấp cho nông dân"],
        answer: 0,
        explanation: "Sản xuất nông nghiệp phụ thuộc lớn vào tự nhiên: thời tiết cực đoan (sương muối, bão lũ, dịch tả lợn châu Phi...) làm giảm đột ngột sản lượng thu hoạch, khiến nguồn cung sụt giảm mạnh."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK1",
        question: "Vào dịp trước Tết Nguyên đán, nhu cầu mua sắm bánh kẹo, hoa đào, quất cảnh tăng vọt (Cầu > Cung), điều này dẫn tới xu hướng giá cả thị trường biến động như thế nào?",
        options: ["Giá cả các mặt hàng Tết có xu hướng tăng lên", "Giá cả giảm mạnh để bán xả hàng", "Giá cả bằng 0 đồng", "Thị trường lập tức đóng cửa hoàn toàn"],
        answer: 0,
        explanation: "Khi cầu vượt quá cung (hàng hóa khan hiếm trong khi nhiều người tranh mua), người bán có cơ sở nâng giá để cân bằng thị trường."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK1",
        question: "Khi Nhà nước muốn khuyến khích sản xuất một loại hàng hóa thiết yếu (như thiết bị y tế, năng lượng sạch), Nhà nước thường áp dụng biện pháp kinh tế nào để tác động vào Cung?",
        options: ["Hỗ trợ lãi suất vốn vay, giảm thuế và cấp đất ưu đãi sản xuất để tăng nguồn cung", "Đánh thuế tiêu thụ đặc biệt cực kì cao", "Cấm các kĩ sư sáng chế máy móc mới", "Tịch thu toàn bộ sản phẩm làm ra"],
        answer: 0,
        explanation: "Nhà nước điều tiết cung bằng các công cụ kinh tế: trợ cấp sản xuất, giảm thuế doanh nghiệp, hỗ trợ lãi suất tín dụng giúp giảm chi phí sản xuất, kích thích doanh nghiệp mở rộng quy mô cung ứng."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK1",
        question: "Người sản xuất hàng hóa nên vận dụng mối quan hệ Cung - Cầu như thế nào để kinh doanh đạt hiệu quả cao nhất?",
        options: ["Thu hẹp sản xuất khi Cung vượt quá Cầu (hàng ế ẩm), mở rộng sản xuất khi Cung nhỏ hơn Cầu (hàng khan hiếm giá cao)", "Cố tình sản xuất thật nhiều mặt hàng không ai mua", "Ngừng sản xuất khi thấy khách hàng xếp hàng dài chờ mua", "Chỉ làm theo cảm tính cá nhân không cần khảo sát thị trường"],
        answer: 0,
        explanation: "Nhà sản xuất nhạy bén luôn theo dõi tín hiệu thị trường: khi Cầu > Cung giá cao thì tranh thủ mở rộng sản xuất; khi Cung > Cầu hàng ế thì chủ động chuyển đổi sang mặt hàng mới giàu tiềm năng hơn."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK1",
        question: "Người tiêu dùng thông minh nên vận dụng quan hệ Cung - Cầu khi đi mua sắm bằng cách nào?",
        options: ["Tăng mua sắm khi Cung > Cầu (hàng dồi dào, giá rẻ có nhiều chương trình khuyến mãi) và hạn chế mua lúc Cầu > Cung (giá bị đội lên cao bất hợp lí)", "Luôn mua gom hàng hóa vào những ngày giáp Tết khi giá đắt nhất", "Vay nợ lãi để mua những món đồ đang bị làm giá khan hiếm ảo", "Không bao giờ so sánh giá giữa các cửa hàng"],
        answer: 0,
        explanation: "Người tiêu dùng thông thái biết chọn thời điểm 'mua khi người ta bán rẻ, tích trữ khi cung dồi dào', tránh tâm lí đám đông đổ xô mua hàng lúc sốt giá khan hiếm."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK1",
        question: "Hành vi đầu cơ găm hàng, tạo sự khan hiếm giả tạo trên thị trường để đẩy giá sữa trẻ em hoặc thuốc men lên cao trục lợi là hành vi:",
        options: ["Vi phạm pháp luật và đạo đức kinh doanh, bị cơ quan quản lí thị trường xử phạt nghiêm khắc", "Được pháp luật khuyến khích vì thể hiện sự khôn khéo", "Hành động bình thường không gây ảnh hưởng đến ai", "Quyền tự do định đoạt hàng hóa cá nhân không ai được can thiệp"],
        answer: 0,
        explanation: "Hành vi lợi dụng thiên tai, dịch bệnh đầu cơ găm hàng các mặt hàng thiết yếu nhằm trục lợi là hành vi vi phạm pháp luật hình sự/hành chính, bị xã hội lên án và pháp luật xử lí nghiêm minh."
    },

    // ===================================================================
    // KHỐI 11 - GDKT&PL - CUỐI KÌ 1 (CK1 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "11", subject: "gdktpl", term: "CK1",
        question: "Khái niệm 'Lạm phát' (Inflation) trong kinh tế học được hiểu chuẩn xác là:",
        options: ["Hiện tượng mức giá chung của nền kinh tế tăng lên liên tục trong một khoảng thời gian nhất định và làm giảm sức mua của đồng tiền", "Hiện tượng giá của một quả cam tăng thêm 500 đồng trong chợ", "Hiện tượng người dân gửi nhiều tiền tiết kiệm vào ngân hàng", "Sự gia tăng số lượng các công ty kinh doanh phần mềm"],
        answer: 0,
        explanation: "Lạm phát là sự tăng mức giá chung kéo dài của hầu hết các hàng hóa, dịch vụ trong nền kinh tế, dẫn đến tình trạng cùng một số tiền nhưng mua được ít hàng hóa hơn (đồng tiền mất giá)."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK1",
        question: "Căn cứ vào tỉ lệ lạm phát hàng năm, mức 'Lạm phát vừa phải' (lạm phát một con số) có tỉ lệ biến động là bao nhiêu?",
        options: ["Dưới 10% một năm (thường từ 2% đến dưới 10%)", "Từ 10% đến dưới 1000% một năm", "Từ 1000% một năm trở lên", "Hoàn toàn bằng 0%"],
        answer: 0,
        explanation: "Lạm phát vừa phải (dưới 10%/năm) là mức lạm phát bình thường, an toàn, có tác dụng kích thích tiêu dùng, đầu tư mở rộng sản xuất mà không gây xáo trộn đời sống xã hội."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK1",
        question: "Mức độ lạm phát nào sau đây được gọi là 'Siêu lạm phát' làm cho nền kinh tế bị tê liệt và đồng tiền mất giá hoàn toàn?",
        options: ["Tỉ lệ lạm phát từ 1000% một năm trở lên", "Lạm phát ở mức 5% một năm", "Lạm phát ở mức 9% một năm", "Lạm phát từ 10% đến 50% một năm"],
        answer: 0,
        explanation: "Siêu lạm phát (trên 1000%/năm, như ở Đức năm 1923 hay Zimbabwe, Venezuela) khiến đồng tiền mất giá theo từng giờ, người dân từ chối dùng tiền mặt và chuyển sang trao đổi hàng đổi hàng."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK1",
        question: "Nguyên nhân 'Lạm phát do chi phí đẩy' xuất hiện khi nào trong nền kinh tế?",
        options: ["Khi giá cả các yếu tố đầu vào của sản xuất (như giá xăng dầu, điện năng, nguyên vật liệu, tiền lương) đồng loạt tăng cao làm đội giá thành sản phẩm", "Khi người tiêu dùng đột ngột ngừng chi tiêu mua sắm", "Khi các ngân hàng thương mại giảm mạnh lãi suất", "Khi nguồn cung hàng hóa nông sản quá dồi dào"],
        answer: 0,
        explanation: "Lạm phát chi phí đẩy xuất phát từ việc chi phí sản xuất đầu vào (xăng, điện, nguyên vật liệu nhập khẩu) tăng vọt, buộc các nhà sản xuất phải tăng giá bán đầu ra để bù đắp chi phí."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK1",
        question: "Khi lạm phát phi mã xảy ra, nhóm đối tượng nào trong xã hội phải chịu thiệt hại nặng nề nhất?",
        options: ["Người lao động làm công ăn lương cố định, người nghỉ hưu hưởng lương hưu và người gửi tiền tiết kiệm", "Những người nắm giữ nhiều bất động sản và vàng thỏi", "Các doanh nghiệp có các khoản nợ vay ngân hàng lớn", "Những người đầu cơ tích trữ hàng hóa"],
        answer: 0,
        explanation: "Lạm phát làm xói mòn sức mua của đồng tiền: những người có thu nhập cố định (lương công chức, lương hưu) hoặc người giữ tiền mặt sẽ bị sụt giảm mức sống thực tế nhanh nhất."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK1",
        question: "Để kiểm soát và kiềm chế lạm phát cao, Ngân hàng Trung ương thường áp dụng chính sách tiền tệ thắt chặt nào sau đây?",
        options: ["Tăng lãi suất điều hành, thắt chặt hạn mức tín dụng và giảm lượng cung ứng tiền vào lưu thông", "In thêm thật nhiều tiền giấy phát cho toàn dân", "Hạ lãi suất tiền gửi xuống mức 0%", "Bắt buộc các ngân hàng phải cho vay tràn lan"],
        answer: 0,
        explanation: "Tăng lãi suất kích thích người dân gửi tiền vào ngân hàng và làm giảm nhu cầu vay vốn đầu tư, tiêu dùng, qua đó giảm tổng cầu và hút bớt tiền mặt trong lưu thông về để hạ nhiệt lạm phát."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK1",
        question: "Khái niệm 'Thất nghiệp' (Unemployment) theo chuẩn quốc tế để chỉ những người có đầy đủ các điều kiện nào sau đây?",
        options: ["Trong độ tuổi lao động, có khả năng lao động, đang không có việc làm và đang tích cực tìm kiếm việc làm", "Trẻ em 10 tuổi đang đi học tiểu học", "Người già 80 tuổi đã nghỉ hưu", "Người có việc làm ổn định nhưng muốn nghỉ ngơi ở nhà du lịch"],
        answer: 0,
        explanation: "Người thất nghiệp phải hội tụ 4 yếu tố: trong độ tuổi lao động (từ 15 tuổi trở lên), có khả năng lao động, không có việc làm và đang có nhu cầu tìm kiếm việc làm thực sự."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK1",
        question: "Loại hình 'Thất nghiệp cơ cấu' xảy ra chủ yếu do nguyên nhân nào?",
        options: ["Sự mất cân đối giữa trình độ, kĩ năng của người lao động với yêu cầu công việc mới do sự thay đổi công nghệ hoặc suy tàn của một ngành nghề", "Người lao động tự ý bỏ việc để đi du lịch dưỡng bệnh", "Do thời tiết mùa đông không trồng được trọt", "Do nền kinh tế rơi vào suy thoái chu kì ngắn hạn"],
        answer: 0,
        explanation: "Thất nghiệp cơ cấu phát sinh khi cơ cấu kinh tế hoặc công nghệ thay đổi (ví dụ tự động hóa, chuyển đổi số làm giảm nhu cầu thợ cơ khí thủ công trong khi thiếu kĩ sư lập trình AI)."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK1",
        question: "Loại hình 'Thất nghiệp mùa vụ' thường diễn ra phổ biến nhất trong các ngành kinh tế nào?",
        options: ["Ngành Nông nghiệp trồng trọt và ngành Du lịch - nghỉ mát", "Ngành viễn thông và phần mềm máy tính", "Ngành dược phẩm và y tế bệnh viện", "Ngành ngân hàng và kho bạc nhà nước"],
        answer: 0,
        explanation: "Thất nghiệp mùa vụ gắn liền với tính chất chu kì thời tiết: nông dân rảnh rỗi giữa các vụ cấy - gặt, hoặc nhân viên khách sạn ven biển nghỉ việc vào mùa đông khi vắng khách du lịch."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK1",
        question: "Hậu quả kinh tế - xã hội tiêu cực trực tiếp của tình trạng thất nghiệp gia tăng là gì?",
        options: ["Thu nhập của người lao động bị mất mát, lãng phí nguồn lực xã hội và nguy cơ gia tăng tệ nạn xã hội, trộm cắp", "Làm cho ngân sách nhà nước thu được nhiều thuế hơn", "Làm tăng năng suất lao động của các nhà máy", "Thúc đẩy người dân chi tiêu mua nhà sang"],
        answer: 0,
        explanation: "Thất nghiệp khiến người lao động rơi vào nghèo đói, mất lòng tự trọng, kinh tế suy giảm do lãng phí nhân lực và phát sinh nhiều bất ổn trật tự an ninh xã hội."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK1",
        question: "Thị trường lao động (Labor Market) là nơi diễn ra các quan hệ trao đổi giữa:",
        options: ["Người lao động (người bán sức lao động) và Người sử dụng lao động (người mua sức lao động) về tiền lương, thời gian và điều kiện làm việc", "Học sinh và thầy cô giáo trong lớp học", "Người mua nhà và chủ đầu tư dự án", "Ngân hàng và người gửi tiết kiệm"],
        answer: 0,
        explanation: "Thị trường lao động là tổng thể các quan hệ cung - cầu, mua - bán quyền sử dụng sức lao động, nơi tiền lương là giá cả của sức lao động được hai bên thỏa thuận trên hợp đồng lao động."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK1",
        question: "Trong bối cảnh cuộc Cách mạng công nghiệp 4.0 và chuyển đổi số, 'Cầu lao động' của thị trường đang có xu hướng dịch chuyển mạnh mẽ sang nhóm lao động nào?",
        options: ["Lao động có trình độ chuyên môn kĩ thuật cao, kĩ năng số, tư duy sáng tạo và khả năng ngoại ngữ, làm việc nhóm linh hoạt", "Lao động chỉ thuần túy dùng sức mạnh cơ bắp không cần kĩ năng", "Lao động từ chối sử dụng máy vi tính", "Lao động có thói quen làm việc tùy tiện không kỉ luật"],
        answer: 0,
        explanation: "Tự động hóa và AI đang thay thế các công việc lặp đi lặp lại đơn giản; thị trường khát nguồn nhân lực chất lượng cao: kĩ sư công nghệ, chuyên gia phân tích dữ liệu và lao động tay nghề cao."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK1",
        question: "Chính sách Bảo hiểm thất nghiệp ở Việt Nam mang lại sự hỗ trợ thiết thực nào cho người lao động khi bị mất việc làm?",
        options: ["Trợ cấp thất nghiệp hàng tháng (tối đa bằng 60% mức lương bình quân đóng bảo hiểm), hỗ trợ học nghề miễn phí và tư vấn giới thiệu việc làm mới", "Được cấp ngay một ngôi nhà mới", "Được trả nguyên 100% lương trọn đời mà không cần đi làm nữa", "Được đi du lịch nghỉ dưỡng do nhà nước chi trả"],
        answer: 0,
        explanation: "Bảo hiểm thất nghiệp là 'phao cứu sinh' giúp người lao động duy trì cuộc sống trong thời gian tạm thời mất việc, đồng thời được hỗ trợ đào tạo nghề để sớm quay lại thị trường lao động."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK1",
        question: "Biện pháp căn cơ và lâu dài nhất của Nhà nước nhằm giải quyết việc làm bền vững và giảm tỉ lệ thất nghiệp là gì?",
        options: ["Đẩy mạnh đào tạo nghề theo sát nhu cầu xã hội, khuyến khích khởi nghiệp đổi mới sáng tạo, thu hút đầu tư và phát triển kinh tế số", "Cấm tất cả các công ty sử dụng robot tự động hóa", "Phát tiền trợ cấp hàng tháng cho toàn bộ người thất nghiệp mà không cần họ đi làm", "Bắt buộc các doanh nghiệp không được sa thải bất kì nhân viên nào"],
        answer: 0,
        explanation: "Giải pháp gốc rễ là phát triển kinh tế tạo thêm nhiều việc làm mới, đổi mới giáo dục nghề nghiệp theo hướng thực học thực nghiệp, nâng cao chất lượng nguồn nhân lực đáp ứng đòi hỏi của công nghệ mới."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK1",
        question: "Để tự chuẩn bị hành trang vững vàng trước khi bước vào thị trường lao động hiện đại, học sinh THPT cần chủ động rèn luyện những gì?",
        options: ["Nắm vững kiến thức văn hóa, trau dồi ngoại ngữ (tiếng Anh), thành thạo tin học, rèn luyện kĩ năng mềm (giao tiếp, làm việc nhóm) và tác phong công nghiệp kỉ luật", "Chỉ học thuộc lòng máy móc để lấy điểm số trên lớp", "Ngại tiếp xúc với công nghệ mới", "Ỷ lại hoàn toàn vào sự sắp đặt xin việc của gia đình"],
        answer: 0,
        explanation: "Thị trường lao động hiện đại đòi hỏi kĩ năng toàn diện: nền tảng kiến thức vững chắc, năng lực số, tư duy phản biện, ngoại ngữ và tinh thần học hỏi suốt đời để thích ứng với mọi biến đổi."
    },

    // ===================================================================
    // KHỐI 11 - GDKT&PL - GIỮA KÌ 2 (GK2 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "11", subject: "gdktpl", term: "GK2",
        question: "Một 'Ý tưởng kinh doanh tốt' cần phải đáp ứng được các tiêu chí cốt lõi nào sau đây?",
        options: ["Có tính mới lạ/sáng tạo, giải quyết được nhu cầu thực tế của khách hàng, có tính khả thi và có khả năng mang lại lợi nhuận", "Càng viển vông, phi thực tế càng tốt", "Chỉ nhằm sao chép nguyên xi 100% sản phẩm của đối thủ", "Không cần quan tâm xem thị trường có ai cần hay không"],
        answer: 0,
        explanation: "Ý tưởng kinh doanh là khởi nguồn khởi nghiệp; một ý tưởng tốt phải xuất phát từ 'nỗi đau' hoặc nhu cầu chưa được đáp ứng của thị trường, có tính khả thi về vốn, công nghệ và đem lại hiệu quả tài chính."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK2",
        question: "Khái niệm 'Cơ hội kinh doanh' (Business Opportunity) được hiểu là:",
        options: ["Tập hợp các điều kiện hoàn cảnh thuận lợi tại một thời điểm nhất định giúp chủ thể kinh tế có thể hiện thực hóa ý tưởng để kinh doanh thành công", "Sự may mắn trúng số độc đắc", "Khoản tiền thừa kế từ người thân để lại", "Bất kì công việc nào không cần bỏ vốn"],
        answer: 0,
        explanation: "Cơ hội kinh doanh xuất hiện khi xu hướng thị trường, chính sách pháp luật, công nghệ hoặc sự thay đổi thị hiếu người tiêu dùng mở ra khoảng trống thị trường cho sản phẩm mới ra đời."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK2",
        question: "Khái niệm 'Đạo đức kinh doanh' (Business Ethics) bao gồm các quy tắc chuẩn mực nào?",
        options: ["Các chuẩn mực đạo đức điều chỉnh hành vi của các chủ thể kinh doanh trong quan hệ với khách hàng, người lao động, đối tác, xã hội và môi trường sinh thái", "Các mẹo lừa đảo để giấu thuế nhà nước", "Thủ đoạn ép lương công nhân xuống mức tối đa", "Chiêu trò quảng cáo thổi phồng công dụng sản phẩm"],
        answer: 0,
        explanation: "Đạo đức kinh doanh là hệ thống các giá trị: trung thực, giữ chữ tín, tôn trọng con người, cạnh tranh lành mạnh, bảo vệ môi trường và có trách nhiệm với cộng đồng xã hội."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK2",
        question: "Doanh nghiệp thực hiện tốt đạo đức kinh doanh sẽ nhận được lợi ích lâu dài to lớn nào?",
        options: ["Tạo dựng uy tín thương hiệu vững chắc, giữ chân khách hàng trung thành, thu hút nhân tài và phát triển bền vững", "Lập tức làm cho doanh nghiệp bị đối thủ đè bẹp", "Làm cho sản phẩm không thể bán được", "Làm tăng nguy cơ bị thanh tra phạt tiền"],
        answer: 0,
        explanation: "Uy tín là tài sản vô giá; doanh nghiệp làm ăn chân chính, tôn trọng quyền lợi người tiêu dùng và chăm lo tốt cho nhân viên sẽ xây dựng được niềm tin thương hiệu bền bỉ trước mọi sóng gió thị trường."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK2",
        question: "Hành vi nào sau đây của doanh nghiệp thể hiện sự vi phạm nghiêm trọng đạo đức kinh doanh và pháp luật?",
        options: ["Sản xuất thuốc chữa bệnh giả, xả nước thải độc hại chưa qua xử lí ra sông ngòi và nợ lương công nhân kéo dài", "Minh bạch công khai nguồn gốc nguyên liệu sạch", "Xây dựng nhà trẻ và canteen cho công nhân viên", "Tài trợ học bổng cho học sinh nghèo vượt khó"],
        answer: 0,
        explanation: "Hành vi sản xuất hàng giả, hủy hoại môi trường sống và bóc lột người lao động là biểu hiện suy đồi đạo đức kinh doanh, bị dư luận tẩy chay và pháp luật trừng trị nghiêm khắc."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK2",
        question: "Khái niệm 'Văn hóa tiêu dùng' trong đời sống xã hội phản ánh:",
        options: ["Hệ thống các thói quen, tập quán, chuẩn mực đạo đức và giá trị tinh thần chi phối hành vi lựa chọn, mua sắm và sử dụng sản phẩm của người tiêu dùng", "Việc mua sắm hoang phí khoe mẽ trên mạng xã hội", "Chỉ mua các món hàng hiệu đắt tiền nhất thế giới", "Thói quen tích trữ hàng hóa quá hạn sử dụng"],
        answer: 0,
        explanation: "Văn hóa tiêu dùng là nét đẹp văn hóa trong đời sống kinh tế, thể hiện qua lối sống tiêu dùng văn minh, biết tiết kiệm, có thẩm mĩ, tôn trọng quyền lợi cộng đồng và thân thiện với môi trường."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK2",
        question: "Cuộc vận động 'Người Việt Nam ưu tiên dùng hàng Việt Nam' nhằm mục đích cốt lõi gì?",
        options: ["Khơi dậy tinh thần tự hào dân tộc, xây dựng văn hóa tiêu dùng hàng nội địa chất lượng cao và tiếp sức cho các doanh nghiệp trong nước phát triển", "Cấm hoàn toàn việc nhập khẩu hàng hóa nước ngoài", "Bắt buộc người dân phải mua hàng kém chất lượng", "Xóa bỏ quan hệ thương mại quốc tế"],
        answer: 0,
        explanation: "Cuộc vận động hướng tới xây dựng niềm tin của người tiêu dùng vào hàng Việt Nam chất lượng cao, đồng thời thúc đẩy các doanh nghiệp trong nước đổi mới mẫu mã, nâng cao chất lượng sản phẩm."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK2",
        question: "Quyền bình đẳng của công dân trước pháp luật được Hiến pháp năm 2013 ghi nhận tại Điều 16 có nội dung cơ bản là:",
        options: ["Mọi người đều bình đẳng trước pháp luật; Không ai bị phân biệt đối xử trong đời sống chính trị, dân sự, kinh tế, văn hóa, xã hội", "Người giàu có quyền vi phạm pháp luật mà không bị xử lí", "Chỉ người có chức quyền mới được hưởng quyền bình đẳng", "Học sinh không có bất kì quyền công dân nào"],
        answer: 0,
        explanation: "Điều 16 Hiến pháp năm 2013 khẳng định nguyên tắc bình đẳng tuyệt đối: mọi công dân không phân biệt nam nữ, dân tộc, tín ngưỡng, thành phần xã hội đều bình đẳng về quyền, nghĩa vụ và trách nhiệm pháp lí."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK2",
        question: "Bình đẳng về 'Trách nhiệm pháp lí' có nghĩa là gì?",
        options: ["Bất kì công dân nào vi phạm pháp luật đều phải chịu trách nhiệm pháp lí theo quy định của pháp luật, 'không có vùng cấm, không có ngoại lệ'", "Người giữ chức vụ cao thì không bị phạt", "Người nghèo vi phạm thì bị phạt nặng gấp mười lần người giàu", "Chỉ áp dụng xử phạt đối với người không quen biết"],
        answer: 0,
        explanation: "Mọi hành vi vi phạm pháp luật đều phải bị phát hiện và xử lí công minh, nghiêm minh theo đúng pháp luật; bất kể người đó là ai, ở cương vị nào đều chịu chế tài pháp lí bình đẳng."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK2",
        question: "Bình đẳng giới (Gender Equality) trong lĩnh vực chính trị được thể hiện qua quyền nào sau đây?",
        options: ["Nam và nữ có vị trí, vai trò ngang nhau, được tạo điều kiện bình đẳng trong việc tham gia quản lí nhà nước, ứng cử đại biểu Quốc hội và Hội đồng nhân dân", "Phụ nữ không được phép giữ các chức vụ lãnh đạo", "Chỉ nam giới mới được đi bầu cử", "Nam giới phải làm việc nhiều gấp đôi nữ giới"],
        answer: 0,
        explanation: "Luật Bình đẳng giới quy định nam, nữ bình đẳng trong tham gia quản lí nhà nước, tham gia xây dựng và thực hiện hương ước, quy ước cộng đồng, bình đẳng về tiêu chuẩn chuyên môn và cơ hội thăng tiến."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK2",
        question: "Quy định nào sau đây của pháp luật lao động thể hiện sự ưu tiên, bảo vệ đặc thù cho lao động nữ?",
        options: ["Chế độ nghỉ thai sản 6 tháng khi sinh con và không được sa thải lao động nữ vì lí do kết hôn, mang thai hay nuôi con nhỏ dưới 12 tháng tuổi", "Trả lương cho lao động nữ thấp hơn lao động nam cùng vị trí", "Cấm lao động nữ học đại học", "Bắt buộc lao động nữ phải làm ca đêm"],
        answer: 0,
        explanation: "Bộ luật Lao động bảo vệ thiên chức làm mẹ của phụ nữ: bảo đảm chế độ thai sản, thời gian vắt sữa cho con, cấm người sử dụng lao động đơn phương chấm dứt hợp đồng lao động vì lí do mang thai, sinh con."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK2",
        question: "Quyền bình đẳng giữa các dân tộc trong lĩnh vực văn hóa, giáo dục được thể hiện qua chính sách nào?",
        options: ["Các dân tộc có quyền dùng tiếng nói, chữ viết riêng, giữ gìn và phát huy bản sắc văn hóa tốt đẹp; học sinh dân tộc thiểu số được cộng điểm ưu tiên xét tuyển", "Bắt buộc mọi dân tộc phải bỏ phong tục tập quán truyền thống", "Chỉ dạy học bằng tiếng Kinh ở tất cả mọi vùng sâu", "Cấm các dân tộc thiểu số tổ chức lễ hội cồng chiêng"],
        answer: 0,
        explanation: "Nhà nước bảo tồn di sản văn hóa các dân tộc, hỗ trợ phát sóng truyền hình bằng tiếng dân tộc (Tày, Thái, Mông, Khmer, Ê-đê...), thực hiện chính sách cử tuyển và cộng điểm ưu tiên giáo dục cho con em vùng cao."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK2",
        question: "Quyền tự do tín ngưỡng, tôn giáo của công dân được Hiến pháp năm 2013 bảo đảm như thế nào?",
        options: ["Mọi người có quyền tự do tín ngưỡng, tôn giáo, theo hoặc không theo một tôn giáo nào; các tôn giáo đều bình đẳng trước pháp luật", "Bắt buộc mọi công dân phải theo một tôn giáo nhất định", "Cấm tất cả các hoạt động sinh hoạt tôn giáo", "Các tôn giáo lớn được quyền áp đặt giáo lí lên pháp luật nhà nước"],
        answer: 0,
        explanation: "Điều 24 Hiến pháp năm 2013 khẳng định: Mọi người có quyền tự do tín ngưỡng, tôn giáo; các tôn giáo bình đẳng trước pháp luật; Nhà nước tôn trọng và bảo hộ quyền tự do tín ngưỡng, tôn giáo; không ai được xâm phạm hoặc lợi dụng tôn giáo để vi phạm pháp luật."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK2",
        question: "Hành vi lợi dụng quyền tự do tôn giáo để truyền bá tà đạo, xúi giục người dân chống đối chính quyền hoặc chia rẽ khối đại đoàn kết dân tộc bị coi là hành vi:",
        options: ["Hành vi vi phạm pháp luật nghiêm trọng, bị nghiêm trị theo quy định của pháp luật", "Biểu hiện của việc tự do tín ngưỡng bình thường", "Hành vi được các tổ chức quốc tế khuyến khích", "Quyền tự do ngôn luận không ai được can thiệp"],
        answer: 0,
        explanation: "Hiến pháp và Luật Tín ngưỡng, tôn giáo nghiêm cấm việc lợi dụng tôn giáo để chống phá Nhà nước, gây chia rẽ dân tộc, phá vỡ an ninh trật tự hoặc mê tín dị đoan làm tổn hại sức khỏe, tài sản công dân."
    },
    {
        grade: "11", subject: "gdktpl", term: "GK2",
        question: "Học sinh THPT có thể phát huy tinh thần bình đẳng và đoàn kết trong lớp học thông qua hành động nào?",
        options: ["Tôn trọng sự khác biệt về hoàn cảnh gia đình, vùng miền của các bạn, giúp đỡ bạn bè cùng tiến bộ và không phân biệt đối xử bạn bè", "Lập nhóm tẩy chay cô lập bạn có hoàn cảnh khó khăn", "Châm chọc trang phục truyền thống của bạn người dân tộc thiểu số", "Bắt nạt các bạn học yếu hơn mình"],
        answer: 0,
        explanation: "Thực hiện bình đẳng bắt đầu từ môi trường học đường: tôn trọng nhân phẩm bạn bè, đoàn kết giúp đỡ lẫn nhau, bài trừ thói bắt nạt học đường và kì thị vùng miền."
    },

    // ===================================================================
    // KHỐI 11 - GDKT&PL - CUỐI KÌ 2 (CK2 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "11", subject: "gdktpl", term: "CK2",
        question: "Công dân nước Cộng hòa xã hội chủ nghĩa Việt Nam đủ bao nhiêu tuổi trở lên thì có quyền bầu cử và quyền ứng cử vào Quốc hội, Hội đồng nhân dân?",
        options: ["Đủ 18 tuổi trở lên có quyền bầu cử; đủ 21 tuổi trở lên có quyền ứng cử", "Đủ 16 tuổi có quyền bầu cử; đủ 18 tuổi có quyền ứng cử", "Đủ 20 tuổi có quyền bầu cử; đủ 25 tuổi có quyền ứng cử", "Đủ 15 tuổi có cả hai quyền trên"],
        answer: 0,
        explanation: "Điều 27 Hiến pháp năm 2013 quy định rõ: Công dân đủ 18 tuổi trở lên có quyền bầu cử và đủ 21 tuổi trở lên có quyền ứng cử vào Quốc hội, Hội đồng nhân dân các cấp."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK2",
        question: "Bốn nguyên tắc hiến định trong bầu cử đại biểu Quốc hội và đại biểu Hội đồng nhân dân ở Việt Nam là:",
        options: ["Phổ thông, bình đẳng, trực tiếp và bỏ phiếu kín", "Dân chủ, công khai, giơ tay và tập trung", "Bắt buộc, công khai, thay mặt và đa số", "Tự nguyện, chỉ định, trực tiếp và truyền miệng"],
        answer: 0,
        explanation: "Bầu cử đại biểu Quốc hội và HĐND tiến hành theo 4 nguyên tắc vàng: Phổ thông (mọi công dân đủ tuổi đều có tên trong danh sách cử tri), Bình đẳng (mỗi cử tri 1 lá phiếu giá trị như nhau), Trực tiếp (tự tay bỏ phiếu) và Bỏ phiếu kín."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK2",
        question: "Hành vi một người đi bỏ phiếu bầu cử đại biểu Quốc hội thay cho toàn bộ các thành viên trong gia đình mình là vi phạm nguyên tắc bầu cử nào?",
        options: ["Vi phạm nguyên tắc 'Trực tiếp' trong bầu cử", "Vi phạm nguyên tắc phổ thông", "Vi phạm nguyên tắc bình đẳng", "Không vi phạm nguyên tắc nào"],
        answer: 0,
        explanation: "Nguyên tắc trực tiếp đòi hỏi cử tri phải tự mình đến phòng bỏ phiếu và đích thân bỏ lá phiếu của mình vào hòm phiếu, trừ trường hợp khuyết tật đặc biệt có quy định riêng; không ai được bầu hộ, bầu thay."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK2",
        question: "Quyền 'Khiếu nại' của công dân được sử dụng nhằm mục đích gì?",
        options: ["Đề nghị cơ quan, tổ chức, cá nhân có thẩm quyền xem xét lại quyết định hành chính, hành vi hành chính khi có căn cứ cho rằng quyết định đó trái pháp luật, xâm phạm quyền, lợi ích hợp pháp của mình", "Báo cáo về một vụ trộm cắp tài sản trên phố", "Tố cáo một hành vi buôn bán ma túy", "Đề nghị tăng lương cho toàn bộ công nhân"],
        answer: 0,
        explanation: "Khiếu nại là quyền của cá nhân, tổ chức trực tiếp bị tác động bởi quyết định hành chính/hành vi hành chính trái luật yêu cầu người ban hành hoặc cấp trên xem xét lại để khôi phục quyền lợi chính đáng của mình."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK2",
        question: "Quyền 'Tố cáo' của công dân được hiểu là:",
        options: ["Quyền của công dân báo cho cơ quan, tổ chức, cá nhân có thẩm quyền biết về hành vi vi phạm pháp luật của bất kì cơ quan, tổ chức, cá nhân nào gây thiệt hại hoặc đe dọa gây thiệt hại đến lợi ích của Nhà nước, quyền của tổ chức, cá nhân", "Quyền đòi lại mảnh đất của cha ông để lại", "Quyền xin cấp phép xây dựng nhà ở", "Quyền từ chối nộp thuế"],
        answer: 0,
        explanation: "Tố cáo là hành động công dân phát giác, báo cáo hành vi vi phạm pháp luật (như tham nhũng, buôn lậu, nhận hối lộ...) cho cơ quan chức năng để ngăn chặn tội phạm và bảo vệ lợi ích công cộng."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK2",
        question: "Quyền 'Tham gia quản lí nhà nước và xã hội' của công dân ở cấp cơ sở (xã, phường, thị trấn) được thực hiện theo phương châm dân chủ nào?",
        options: ["'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng'", "'Việc của ai người nấy lo'", "'Cán bộ tự quyết, dân làm theo'", "'Làm theo ý kiến của người giàu nhất thôn'"],
        answer: 0,
        explanation: "Phương châm thực hiện dân chủ ở cơ sở được Đảng và Luật Thực hiện dân chủ ở cơ sở quy định: Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK2",
        question: "Quyền 'Bất khả xâm phạm về thân thể' của công dân có nghĩa là:",
        options: ["Không ai bị bắt nếu không có quyết định của Tòa án nhân dân, quyết định hoặc phê chuẩn của Viện kiểm sát nhân dân, trừ trường hợp phạm tội quả tang", "Không ai được chạm vào người khác khi chơi thể thao", "Chỉ cảnh sát trưởng thôn mới có quyền bắt giữ người tùy ý", "Công dân có thể tự ý bắt nhốt người nợ tiền mình"],
        answer: 0,
        explanation: "Điều 20 Hiến pháp quy định: Công dân có quyền bất khả xâm phạm về thân thể, được pháp luật bảo hộ về tính mạng, sức khỏe, danh dự và nhân phẩm. Bắt người phải tuân thủ nghiêm ngặt trình tự tố tụng hình sự."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK2",
        question: "Trong trường hợp nào sau đây, bất kì người dân nào cũng có quyền bắt giữ ngay người đó và giải ngay đến cơ quan Công an, Viện kiểm sát hoặc Ủy ban nhân dân nơi gần nhất?",
        options: ["Người đang thực hiện hành vi phạm tội quả tang hoặc người đang bị truy nã", "Người có vẻ ngoài trông đáng ngờ đang đi bộ trên đường", "Người đang cãi nhau to tiếng trong nhà riêng", "Người không đồng ý bán chịu hàng hóa cho mình"],
        answer: 0,
        explanation: "Đối với trường hợp phạm tội quả tang (đang thực hiện tội phạm hoặc ngay sau khi phạm tội thì bị phát hiện, đuổi bắt) hoặc đối tượng đang có lệnh truy nã, bất kì công dân nào cũng có quyền bắt giữ lập tức."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK2",
        question: "Hành vi vu khống, bịa đặt thông tin sai sự thật trên mạng xã hội nhằm xúc phạm nghiêm trọng danh dự, nhân phẩm của người khác là hành vi xâm phạm quyền tự do cơ bản nào của công dân?",
        options: ["Quyền được pháp luật bảo hộ về danh dự và nhân phẩm", "Quyền tự do kinh doanh", "Quyền tự do hội họp", "Quyền bất khả xâm phạm về chỗ ở"],
        answer: 0,
        explanation: "Pháp luật bảo hộ tuyệt đối danh dự, uy tín, nhân phẩm công dân. Hành vi làm nhục, vu khống trên không gian mạng là vi phạm pháp luật, bị phạt tiền rất nặng hoặc xử lí hình sự về tội vu khống."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK2",
        question: "Quyền 'Bất khả xâm phạm về chỗ ở' của công dân được pháp luật quy định như thế nào?",
        options: ["Không ai được tự ý vào chỗ ở của người khác nếu không được người đó đồng ý, trừ trường hợp được pháp luật cho phép và phải có lệnh của cơ quan có thẩm quyền", "Công an phường có quyền vào khám nhà bất kì người dân nào vào ban đêm không cần lệnh", "Hàng xóm có quyền trèo vào sân nhà bên cạnh để xem xét", "Chủ nợ có quyền đến chiếm nhà của con nợ"],
        answer: 0,
        explanation: "Chỗ ở của công dân là thiêng liêng, bất khả xâm phạm. Việc khám xét chỗ ở phải có lệnh hợp pháp bằng văn bản, có sự chứng kiến của chính quyền địa phương, người chứng kiến và gia chủ theo đúng Bộ luật Tố tụng hình sự."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK2",
        question: "Hành vi tự ý bóc trộm thư từ, lén đọc tin nhắn Zalo, Facebook hoặc nghe trộm cuộc gọi điện thoại của người khác là hành vi vi phạm quyền nào sau đây?",
        options: ["Quyền được bảo đảm an toàn và bí mật thư tín, điện thoại, điện tín", "Quyền tự do tiếp cận thông tin đại chúng", "Quyền tự do nghiên cứu khoa học", "Quyền bình đẳng trong hôn nhân và gia đình"],
        answer: 0,
        explanation: "Điều 21 Hiến pháp 2013: Mọi người có quyền bí mật thư tín, điện thoại, điện tín và các hình thức trao đổi thông tin riêng tư khác. Hành vi xem trộm, phát tán tin nhắn riêng tư bị pháp luật nghiêm trị."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK2",
        question: "Quyền 'Tự do ngôn luận' của công dân được hiểu chuẩn xác là quyền:",
        options: ["Công dân có quyền tự do phát biểu ý kiến, bày tỏ quan điểm của mình về các vấn đề chính trị, kinh tế, xã hội của đất nước nhưng phải trong khuôn khổ pháp luật quy định", "Được quyền chửi bới, xúc phạm bất kì ai trên mạng mà không chịu trách nhiệm", "Được quyền xuyên tạc lịch sử và chia rẽ khối đoàn kết dân tộc", "Được tự ý công bố các bí mật quân sự quốc gia"],
        answer: 0,
        explanation: "Tự do ngôn luận là quyền tự do dân chủ cơ bản nhưng không đồng nghĩa với tự do vô chính phủ; công dân thực hiện quyền tự do ngôn luận phải tuân thủ pháp luật, không xâm phạm an ninh quốc gia và quyền của người khác."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK2",
        question: "Khi phát hiện một cán bộ địa phương có hành vi nhận hối lộ để làm sai lệch hồ sơ cấp sổ đỏ đất đai, công dân cần thực hiện quyền nào sau đây?",
        options: ["Thực hiện quyền Tố cáo gửi đến cơ quan Thanh tra hoặc Cơ quan Cảnh sát điều tra có thẩm quyền", "Thực hiện quyền khiếu nại quyết định", "Rủ người đến đập phá cơ quan công quyền", "Đăng bài ẩn danh chửi bới trên mạng không có bằng chứng"],
        answer: 0,
        explanation: "Hành vi nhận hối lộ là hành vi tham nhũng, tội phạm hình sự; công dân cần thực hiện quyền tố cáo, cung cấp chứng cứ cho cơ quan chức năng để xử lí kẻ vi phạm theo pháp luật."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK2",
        question: "Tại sao nói việc bảo đảm các quyền dân chủ và tự do cơ bản của công dân là thước đo tiến bộ xã hội của một quốc gia?",
        options: ["Vì nó tôn vinh giá trị con người, phát huy quyền làm chủ của nhân dân và tạo động lực giải phóng mọi tiềm năng sáng tạo của xã hội", "Vì nó giúp nhà nước không cần ban hành luật pháp nữa", "Vì nó làm cho tòa án không cần hoạt động", "Vì nó chỉ phục vụ lợi ích của các nước phát triển"],
        answer: 0,
        explanation: "Quyền con người, quyền công dân là giá trị cao quý của nền văn minh nhân loại; Nhà nước bảo đảm tốt các quyền tự do dân chủ chính là hiện thực hóa mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh."
    },
    {
        grade: "11", subject: "gdktpl", term: "CK2",
        question: "Trách nhiệm của học sinh lớp 11 trong việc tôn trọng và bảo vệ các quyền dân chủ, tự do cơ bản của công dân là gì?",
        options: ["Chấp hành nghiêm chỉnh pháp luật, tôn trọng thân thể, danh dự của bạn bè, không xem trộm đồ riêng tư và tích cực đóng góp ý kiến xây dựng tập thể lớp", "Tự do chia sẻ tin nhắn riêng tư của bạn lên nhóm kín để bêu rếu", "Quay video bạn bị đánh rồi đăng lên TikTok câu like", "Thờ ơ, bao che trước các hành vi vi phạm nội quy trường học"],
        answer: 0,
        explanation: "Học sinh tôn trọng quyền công dân qua các hành vi chuẩn mực: bảo vệ danh dự bạn bè, tôn trọng quyền riêng tư cá nhân, phát huy quyền dân chủ trong sinh hoạt đoàn thể và nói không với bạo lực học đường."
    },

    // ===================================================================
    // KHỐI 12 - ĐỊA LÍ - GIỮA KÌ 1 (GK1 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "12", subject: "dia", term: "GK1",
        question: "Vị trí địa lí của nước ta nằm hoàn toàn trong vùng nội chí tuyến Bán cầu Bắc đã quy định tính chất tự nhiên cơ bản nào của khí hậu Việt Nam?",
        options: ["Khí hậu nhiệt đới ẩm gió mùa, có nền nhiệt độ cao, chan hòa ánh nắng mặt trời quanh năm", "Khí hậu ôn đới lục địa khô lạnh quanh năm", "Khí hậu xích đạo không có mùa đông lạnh", "Khí hậu cận cực băng giá"],
        answer: 0,
        explanation: "Nằm trọn trong vùng nội chí tuyến (khoảng 8°34'B đến 23°23'B), góc nhập xạ lớn và 2 lần Mặt Trời lên thiên đỉnh trong năm đã đem lại cho nước ta nền nhiệt cao (trung bình trên 20 °C) và cán cân bức xạ luôn dương."
    },
    {
        grade: "12", subject: "dia", term: "GK1",
        question: "Ý nghĩa chiến lược quan trọng nhất về mặt kinh tế - xã hội do vị trí địa lí mang lại cho Việt Nam là gì?",
        options: ["Nằm trên ngã tư đường hàng hải và hàng không quốc tế, cửa ngõ ra biển thuận lợi của các nước láng giềng, mở rộng hội nhập kinh tế toàn cầu", "Không chịu bất kì ảnh hưởng nào của bão biển", "Tạo ra một mùa đông tuyết rơi dày trên khắp cả nước", "Làm cho tài nguyên khoáng sản hoàn toàn thuần nhất một loại"],
        answer: 0,
        explanation: "Việt Nam là cầu nối giữa Đông Nam Á lục địa và Đông Nam Á hải đảo, nằm kề tuyến hàng hải quốc tế Biển Đông, là cửa ngõ hướng biển thuận lợi cho Lào, vùng Tây Nam Trung Quốc và các nước trong khu vực."
    },
    {
        grade: "12", subject: "dia", term: "GK1",
        question: "Đặc điểm chung nổi bật nhất của địa hình Việt Nam là gì?",
        options: ["Địa hình nhiều đồi núi nhưng chủ yếu là đồi núi thấp (dưới 1000m chiếm tới 85% diện tích lãnh thổ)", "Toàn bộ là các đồng bằng châu thổ phù sa thấp phẳng", "Chủ yếu là các cao nguyên băng hà cao trên 5000m", "Địa hình nghiêng theo hướng đông bắc - tây nam"],
        answer: 0,
        explanation: "Đồi núi chiếm tới 3/4 diện tích lãnh thổ nhưng chủ yếu là đồi núi thấp (núi thấp dưới 1000 m chiếm 85%, núi cao trên 2000 m chỉ chiếm 1%), đồng bằng chỉ chiếm 1/4 diện tích."
    },
    {
        grade: "12", subject: "dia", term: "GK1",
        question: "Hai hướng địa hình chính, chi phối mạng lưới sông ngòi và các dãy núi của nước ta là:",
        options: ["Hướng tây bắc - đông nam và Hướng vòng cung", "Hướng bắc - nam và Hướng đông - tây", "Hướng đông bắc - tây nam và Hướng kinh tuyến", "Hướng vòng tròn đồng tâm"],
        answer: 0,
        explanation: "Các dãy núi và dòng sông lớn của nước ta chạy theo 2 hướng chính: Hướng tây bắc - đông nam (dãy Hoàng Liên Sơn, Trường Sơn Bắc, sông Hồng, sông Đà, sông Mã) và Hướng vòng cung (vùng núi Đông Bắc: cánh cung Sông Gâm, Ngân Sơn, Bắc Sơn, Đông Triều)."
    },
    {
        grade: "12", subject: "dia", term: "GK1",
        question: "Gió mùa mùa đông (Gió mùa Đông Bắc) hoạt động ở miền Bắc nước ta từ tháng 11 đến tháng 4 năm sau có tính chất thời tiết biến động như thế nào?",
        options: ["Nửa đầu mùa đông lạnh khô (do di chuyển qua lục địa Á - Âu); nửa cuối mùa đông lạnh ẩm, có mưa phùn (do lệch đông qua biển)", "Nóng ẩm, mưa to suốt cả mùa đông", "Mưa rào sấm chớp liên tục vào ban đêm", "Nóng khô bỏng rát như sa mạc"],
        answer: 0,
        explanation: "Khối khí lạnh áp cao Siberia thổi xuống: nửa đầu mùa di chuyển qua lục địa nên lạnh khô hanh; nửa sau mùa dịch chuyển lệch đông qua biển Đông hấp thụ hơi ẩm tạo nên thời tiết lạnh ẩm, mưa phùn đặc trưng ở Bắc Bộ."
    },
    {
        grade: "12", subject: "dia", term: "GK1",
        question: "Nguyên nhân chủ yếu làm cho dải đồng bằng ven biển miền Trung nước ta vào đầu mùa hạ có thời tiết khô nóng đặc biệt gay gắt là gì?",
        options: ["Hiện tượng gió phơn Tây Nam (gió Lào) vượt qua dãy núi Trường Sơn trút mưa bên sườn tây rồi biến tính khô nóng khi xuống sườn đông", "Do dòng biển lạnh chạy sát bờ ngăn cản hơi ẩm", "Do nằm ở vĩ độ cận xích đạo", "Do không có rừng che phủ"],
        answer: 0,
        explanation: "Gió Tây Nam từ vịnh Bengal thổi vào, trút hết mưa ở sườn tây Trường Sơn; khi vượt qua đỉnh núi sang sườn đông (Bắc Trung Bộ và Trung Trung Bộ), không khí bị nén đoạn nhiệt tăng nhiệt độ và giảm độ ẩm, tạo nên gió phơn khô nóng bỏng rát."
    },
    {
        grade: "12", subject: "dia", term: "GK1",
        question: "Biểu hiện rõ rệt nhất của thiên nhiên nhiệt đới ẩm gió mùa trong quá trình hình thành thổ nhưỡng ở nước ta là:",
        options: ["Quá trình feralit diễn ra mạnh mẽ ở vùng đồi núi, tạo nên lớp vỏ phong hóa dày, đất có màu đỏ vàng giàu oxit sắt và nhôm", "Quá trình đầm lầy hóa than bùn băng giá", "Quá trình tích tụ muối mặn sa mạc", "Đất đen thảo nguyên ôn đới"],
        answer: 0,
        explanation: "Nhiệt độ cao và mưa nhiều thúc đẩy phong hóa hóa học diễn ra mãnh liệt; các chất kiềm và silic bị rửa trôi, còn lại hợp chất oxit sắt (Fe₂O₃) và nhôm (Al₂O₃) tích tụ lại tạo nên đất feralit đỏ vàng đặc trưng."
    },
    {
        grade: "12", subject: "dia", term: "GK1",
        question: "Ranh giới tự nhiên phân chia thiên nhiên nước ta thành hai miền khí hậu: 'Phần lãnh thổ phía Bắc' (có mùa đông lạnh) và 'Phần lãnh thổ phía Nam' (nóng quanh năm) là:",
        options: ["Dãy núi Bạch Mã (vĩ độ khoảng 16°B)", "Dãy Hoàng Liên Sơn", "Dãy Hoành Sơn (Đèo Ngang)", "Dãy Tam Điệp"],
        answer: 0,
        explanation: "Dãy Bạch Mã đâm ngang ra biển ở vĩ độ 16°B ngăn chặn các đợt gió mùa Đông Bắc lạnh tràn xuống phía nam, làm cho từ Bạch Mã trở vào có khí hậu cận xích đạo gió mùa, nóng quanh năm không có mùa đông lạnh."
    },
    {
        grade: "12", subject: "dia", term: "GK1",
        question: "Đai cao cận nhiệt đới gió mùa trên núi ở miền Bắc nước ta bắt đầu xuất hiện từ độ cao nào?",
        options: ["Từ độ cao khoảng 600 - 700 m trở lên đến 2600 m", "Từ độ cao 200 m trở lên", "Từ độ cao 3000 m trở lên", "Chỉ xuất hiện ở đỉnh Fansipan"],
        answer: 0,
        explanation: "Ở miền Bắc do nền nhiệt thấp hơn, đai cận nhiệt đới gió mùa trên núi bắt đầu từ 600 - 700 m (ở miền Nam từ 900 - 1000 m), khí hậu mát mẻ quanh năm, hình thành rừng lá kim, dẻ, re và đất feralit có mùn."
    },
    {
        grade: "12", subject: "dia", term: "GK1",
        question: "Tài nguyên sinh vật rừng nước ta đang phải đối mặt với thực trạng đáng báo động nào sau đây?",
        options: ["Diện tích rừng có tăng lên nhờ trồng rừng nhưng chất lượng rừng tự nhiên (rừng nguyên sinh giàu có) vẫn bị suy giảm nghiêm trọng", "Rừng tự nhiên tăng gấp đôi diện tích so với thời kì trước", "Không còn bất kì loài thú quý hiếm nào bị đe dọa tuyệt chủng", "Toàn bộ đất trống đồi trọc đã được phủ kín rừng đặc dụng"],
        answer: 0,
        explanation: "Mặc dù tổng diện tích rừng phục hồi đạt khoảng 14,7 triệu ha nhờ đẩy mạnh trồng rừng kinh tế, nhưng chất lượng rừng tự nhiên bị suy giảm, rừng nghèo và rừng mới trồng chiếm tỉ lệ lớn, đa dạng sinh học bị đe dọa."
    },
    {
        grade: "12", subject: "dia", term: "GK1",
        question: "Biện pháp cấp bách và quan trọng nhất để bảo tồn đa dạng sinh học ở Việt Nam hiện nay là gì?",
        options: ["Xây dựng và mở rộng hệ thống các Vườn quốc gia, Khu bảo tồn thiên nhiên, ban hành Sách Đỏ và nghiêm cấm săn bắt động vật quý hiếm", "Cho phép khai thác tự do gỗ quý trong rừng đặc dụng", "Chuyển toàn bộ rừng đầu nguồn thành đất trồng cà phê", "Bắt hết các loài thú rừng đem về nuôi nhốt ở nhà"],
        answer: 0,
        explanation: "Thiết lập hệ thống 34 vườn quốc gia và các khu dự trữ sinh quyển thế giới, bảo vệ sinh cảnh tự nhiên kết hợp xử lí nghiêm nạn săn bắn, buôn bán động vật hoang dã là giải pháp sống còn để giữ gìn đa dạng sinh học."
    },
    {
        grade: "12", subject: "dia", term: "GK1",
        question: "Thiên tai tự nhiên nguy hiểm, xảy ra thường xuyên nhất gây thiệt hại nặng nề về người và tài sản cho vùng duyên hải miền Trung nước ta là:",
        options: ["Bão biển kèm mưa lớn, ngập lụt, triều cường và sạt lở đất", "Bão tuyết lạnh giá", "Núi lửa phun dung nham", "Lốc cát sa mạc"],
        answer: 0,
        explanation: "Miền Trung là nơi chịu ảnh hưởng nặng nhất của bão (tháng 9, 10, 11). Bão đổ bộ kết hợp triều cường, địa hình hẹp dốc gây lũ quét, sạt lở đất ở miền núi và ngập lụt diện rộng ở vùng trũng đồng bằng."
    },
    {
        grade: "12", subject: "dia", term: "GK1",
        question: "Hiện tượng 'Lũ quét' và 'Sạt lở đất' ở nước ta thường xảy ra tập trung nhất ở khu vực địa hình nào?",
        options: ["Vùng đồi núi dốc, nơi có lớp vỏ phong hóa dày và thảm thực vật rừng bị tàn phá trơ trọi", "Vùng đồng bằng phù sa ven biển", "Vùng bãi bồi ven sông Tiền, sông Hậu", "Trên các đảo đá vôi vịnh Hạ Long"],
        answer: 0,
        explanation: "Lũ quét và sạt lở đất xảy ra tại các sườn núi dốc đứng ở Trung du miền núi phía Bắc và Tây Nguyên khi có mưa lớn kéo dài, đất ngậm no nước trượt lở cuốn trôi làng mạc, đặc biệt nơi mất lớp phủ rừng đầu nguồn."
    },
    {
        grade: "12", subject: "dia", term: "GK1",
        question: "Hiện tượng 'Hạn hán và Xâm nhập mặn' sâu vào nội đồng mùa khô đang trở thành thách thức sống còn đối với sản xuất nông nghiệp của vùng nào?",
        options: ["Đồng bằng sông Cửu Long", "Đồng bằng sông Hồng", "Trung du miền núi Bắc Bộ", "Vùng đồi núi Tây Bắc"],
        answer: 0,
        explanation: "Vào mùa khô, lưu lượng nước sông Mê Công từ thượng nguồn đổ về giảm mạnh, kết hợp triều cường đẩy nước mặn xâm nhập sâu hàng chục km vào sông ngòi ĐBSCL, gây thiếu nước ngọt nghiêm trọng cho lúa và cây ăn trái."
    },
    {
        grade: "12", subject: "dia", term: "GK1",
        question: "Chiến lược quốc gia về phòng chống thiên tai và ứng phó biến đổi khí hậu ở Việt Nam nhấn mạnh vào phương châm hành động nào?",
        options: ["'Chủ động phòng ngừa, ứng phó kịp thời, khắc phục khẩn trương và hiệu quả', thực hiện tốt phương châm 4 tại chỗ", "Chỉ cứu hộ khi thiên tai đã quét sạch toàn bộ", "Trông chờ hoàn toàn vào cứu trợ quốc tế", "Di dời toàn bộ dân cư ven biển lên đỉnh núi cao"],
        answer: 0,
        explanation: "Việt Nam thực hiện phương châm 4 tại chỗ: Chỉ huy tại chỗ, lực lượng tại chỗ, phương tiện vật tư tại chỗ và hậu cần tại chỗ nhằm giảm thiểu tối đa thiệt hại sinh mạng và tài sản của nhân dân."
    },

    // ===================================================================
    // KHỐI 12 - ĐỊA LÍ - CUỐI KÌ 1 (CK1 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "12", subject: "dia", term: "CK1",
        question: "Đặc điểm nổi bật của dân số Việt Nam hiện nay là:",
        options: ["Quy mô dân số đông (đã vượt 100 triệu người, đứng thứ 15 thế giới), có 54 dân tộc cùng chung sống", "Dân số ít và đang suy giảm tự nhiên âm", "Là quốc gia đơn tộc người chỉ có một dân tộc duy nhất", "Tỉ lệ dân thành thị chiếm trên 90% dân số"],
        answer: 0,
        explanation: "Năm 2023, dân số Việt Nam chính thức cán mốc 100 triệu người, là thị trường tiêu dùng nội địa rộng lớn và nguồn lao động dồi dào, là quốc gia đa dân tộc với 54 thành phần dân tộc anh em."
    },
    {
        grade: "12", subject: "dia", term: "CK1",
        question: "Việt Nam đang trải qua thời kì 'Cơ cấu dân số vàng' (tỉ lệ người trong độ tuổi lao động gấp đôi người phụ thuộc), cơ hội lớn nhất của thời kì này là gì?",
        options: ["Cung cấp lực lượng lao động dồi dào, sung sức, là cơ hội 'ngàn năm có một' để tích lũy nguồn lực và bứt phá tăng trưởng kinh tế", "Tự động xóa bỏ hoàn toàn nhu cầu đào tạo nghề", "Làm cho đất nước không bao giờ bị già hóa", "Giúp toàn bộ người dân đều có thu nhập cao mà không cần làm việc"],
        answer: 0,
        explanation: "Cơ cấu dân số vàng mang lại nguồn nhân lực khổng lồ cho công nghiệp hóa; nếu tận dụng tốt bằng cách nâng cao kĩ năng lao động sẽ tạo ra bước nhảy vọt thần kì về kinh tế trước khi bước vào giai đoạn già hóa."
    },
    {
        grade: "12", subject: "dia", term: "CK1",
        question: "Thách thức xã hội lớn nhất đặt ra khi dân số Việt Nam bước vào giai đoạn 'Già hóa dân số' với tốc độ nhanh là gì?",
        options: ["Áp lực nặng nề lên hệ thống an sinh xã hội, quỹ bảo hiểm hưu trí, dịch vụ y tế lão khoa và nguy cơ thiếu hụt lao động tương lai", "Thừa hàng triệu trường mầm non và tiểu học", "Tỉ lệ thất nghiệp ở thanh niên tăng gấp mười lần", "Bùng nổ dân số mất kiểm soát"],
        answer: 0,
        explanation: "Việt Nam là một trong những nước có tốc độ già hóa dân số nhanh nhất thế giới: dân số già đi trong khi mức thu nhập bình quân đầu người chưa cao (nguy cơ 'chưa giàu đã già') đè nặng lên chi phí y tế và bảo hiểm."
    },
    {
        grade: "12", subject: "dia", term: "CK1",
        question: "Mật độ dân số ở nước ta phân bố có sự chênh lệch sâu sắc giữa hai khu vực nào?",
        options: ["Tập trung rất đông đúc ở vùng đồng bằng châu thổ ven biển, nhưng lại thưa thớt ở vùng trung du và miền núi", "Tập trung đông nhất trên đỉnh Hoàng Liên Sơn", "Miền núi có mật độ dân số cao gấp mười lần đồng bằng", "Dân cư phân bố hoàn toàn đồng đều giữa tất cả các tỉnh thành"],
        answer: 0,
        explanation: "Đồng bằng sông Hồng có mật độ dân số cao nhất cả nước (trên 1000 người/km²), trong khi vùng Tây Bắc và Tây Nguyên mật độ thưa thớt (dưới 100 người/km²), gây khó khăn cho việc sử dụng hợp lí tài nguyên và lao động."
    },
    {
        grade: "12", subject: "dia", term: "CK1",
        question: "Ưu thế lớn nhất của nguồn lao động Việt Nam đối với sự nghiệp phát triển kinh tế đất nước là gì?",
        options: ["Nguồn lao động dồi dào, trẻ tuổi, cần cù, khéo tay, có tinh thần hiếu học và khả năng tiếp thu nhanh các kĩ thuật mới", "Tất cả lao động đều là kĩ sư và chuyên gia cao cấp", "Lao động chỉ thích làm việc thủ công truyền thống", "Không đòi hỏi bất kì tiền lương hay bảo hiểm nào"],
        answer: 0,
        explanation: "Lao động Việt Nam được đánh giá cao về sự thông minh, cần cù, nhanh nhạy với công nghệ mới và chi phí nhân công có tính cạnh tranh, là thỏi nam châm thu hút các tập đoàn FDI công nghệ (Samsung, LG, Foxconn...)."
    },
    {
        grade: "12", subject: "dia", term: "CK1",
        question: "Hạn chế lớn nhất của nguồn lao động nước ta hiện nay cần phải tập trung khắc phục là gì?",
        options: ["Tỉ lệ lao động đã qua đào tạo có văn bằng, chứng chỉ còn thấp; thiếu đội ngũ công nhân kĩ thuật bậc cao và tác phong công nghiệp kỉ luật", "Lao động có trình độ tin học quá giỏi", "Số lượng lao động trong xã hội quá ít", "Lao động từ chối làm việc trong các nhà máy có máy móc hiện đại"],
        answer: 0,
        explanation: "Tỉ lệ lao động có chứng chỉ đào tạo mới đạt khoảng 27 - 28%, thiếu hụt trầm trọng kĩ sư công nghệ cao, thợ lành nghề, trình độ ngoại ngữ và kĩ năng mềm còn hạn chế so với yêu cầu quốc tế."
    },
    {
        grade: "12", subject: "dia", term: "CK1",
        question: "Quá trình Đô thị hóa ở Việt Nam hiện nay đang có chuyển biến tích cực nào sau đây?",
        options: ["Tỉ lệ dân số đô thị tăng nhanh (đạt trên 42%), mạng lưới đô thị mở rộng, hạ tầng kĩ thuật đô thị được nâng cấp văn minh, hiện đại", "Xóa bỏ hoàn toàn các điểm dân cư nông thôn", "Tỉ lệ dân đô thị đang giảm dần về mức 10%", "Đô thị hóa không đóng góp gì cho tăng trưởng kinh tế"],
        answer: 0,
        explanation: "Đô thị hóa gắn liền với công nghiệp hóa: tỉ lệ dân thành thị vượt mốc 42%, các đô thị lớn (Hà Nội, TP.HCM, Đà Nẵng, Hải Phòng, Cần Thơ) đóng vai trò là đầu tàu động lực đóng góp trên 70% GDP cả nước."
    },
    {
        grade: "12", subject: "dia", term: "CK1",
        question: "Hai đô thị đặc biệt của nước ta giữ vai trò là trung tâm kinh tế, chính trị, văn hóa, khoa học - công nghệ hàng đầu cả nước là:",
        options: ["Thủ đô Hà Nội và Thành phố Hồ Chí Minh", "Hải Phòng và Đà Nẵng", "Cần Thơ và Huế", "Nha Trang và Vũng Tàu"],
        answer: 0,
        explanation: "Hà Nội (Thủ đô ngàn năm văn hiến, trung tâm đầu não chính trị quốc gia) và TP. Hồ Chí Minh (đầu tàu kinh tế, thương mại, tài chính năng động nhất) là hai đô thị loại đặc biệt của Việt Nam."
    },
    {
        grade: "12", subject: "dia", term: "CK1",
        question: "Chuyển dịch cơ cấu ngành kinh tế của nước ta theo hướng công nghiệp hóa, hiện đại hóa thể hiện ở xu hướng nào?",
        options: ["Giảm tỉ trọng khu vực Nông - lâm - thủy sản, tăng tỉ trọng khu vực Công nghiệp - xây dựng và Dịch vụ (đặc biệt dịch vụ giá trị cao)", "Tăng mạnh tỉ trọng nông nghiệp và giảm dịch vụ", "Chỉ tập trung phát triển duy nhất ngành khai thác than đá", "Giữ nguyên cơ cấu ngành của thời kì bao cấp"],
        answer: 0,
        explanation: "Cơ cấu GDP chuyển dịch tích cực: nông nghiệp giảm dần tỉ trọng nhưng nâng cao giá trị chất lượng hàng hóa; công nghiệp chế biến chế tạo và các ngành dịch vụ (du lịch, logistics, tài chính) chiếm tỉ trọng áp đảo."
    },
    {
        grade: "12", subject: "dia", term: "CK1",
        question: "Trong nội bộ khu vực Nông nghiệp, xu hướng chuyển dịch cơ cấu cây trồng tiến bộ hiện nay là gì?",
        options: ["Giảm diện tích cây lương thực kém hiệu quả, tăng diện tích cây công nghiệp, cây ăn quả giá trị cao và rau hoa xuất khẩu", "Chặt phá toàn bộ vườn cây ăn trái để trồng sắn", "Chỉ trồng độc canh cây lúa nước trên mọi loại đất", "Bỏ hoang đồng ruộng không sản xuất"],
        answer: 0,
        explanation: "Chuyển dịch từ tư duy sản xuất nông nghiệp thuần túy sang kinh tế nông nghiệp: giảm lúa ở vùng trũng phèn để chuyển sang nuôi tôm, trồng sầu riêng, bưởi, xoài, rau củ hữu cơ cho giá trị kinh tế gấp nhiều lần."
    },
    {
        grade: "12", subject: "dia", term: "CK1",
        question: "Trong cơ cấu các thành phần kinh tế ở nước ta, thành phần kinh tế nào giữ vai trò chủ đạo, nắm giữ các ngành then chốt của nền kinh tế?",
        options: ["Kinh tế Nhà nước", "Kinh tế tư nhân", "Kinh tế tập thể", "Kinh tế có vốn đầu tư nước ngoài (FDI)"],
        answer: 0,
        explanation: "Hiến pháp và đường lối của Đảng khẳng định: Kinh tế Nhà nước giữ vai trò chủ đạo, là công cụ định hướng và điều tiết vĩ mô; Kinh tế tư nhân là một động lực quan trọng của nền kinh tế."
    },
    {
        grade: "12", subject: "dia", term: "CK1",
        question: "Khu vực 'Kinh tế có vốn đầu tư nước ngoài (FDI)' đóng góp vai trò to lớn nào cho sự phát triển của Việt Nam?",
        options: ["Bổ sung nguồn vốn đầu tư lớn, chuyển giao công nghệ, mở rộng thị trường xuất khẩu và tạo việc làm cho hàng triệu lao động", "Làm cho doanh nghiệp nội địa tự động biến mất", "Chỉ phục vụ lợi ích riêng của người nước ngoài", "Không đóng góp bất kì đồng thuế nào cho ngân sách"],
        answer: 0,
        explanation: "Khu vực FDI đóng góp hơn 70% tổng kim ngạch xuất khẩu của cả nước, thúc đẩy công nghiệp điện tử viễn thông, chuyển giao công nghệ quản trị và liên kết chuỗi cung ứng với doanh nghiệp Việt Nam."
    },
    {
        grade: "12", subject: "dia", term: "CK1",
        question: "Chuyển dịch cơ cấu kinh tế theo lãnh thổ ở nước ta thể hiện rõ rệt qua việc hình thành:",
        options: ["Các vùng chuyên canh nông nghiệp quy mô lớn, các khu công nghiệp, khu chế xuất, khu kinh tế ven biển và các vùng kinh tế trọng điểm", "Việc chia cắt nền kinh tế thành các tỉnh cô lập", "Việc cấm giao thương hàng hóa giữa các miền", "Việc tập trung mọi nhà máy vào duy nhất một huyện"],
        answer: 0,
        explanation: "Chuyển dịch lãnh thổ hình thành các vùng chuyên canh cây công nghiệp (Tây Nguyên, Đông Nam Bộ), vùng lúa (ĐBSCL), các hành lang kinh tế, khu kinh tế ven biển (Vũng Áng, Chu Lai, Dung Quất, Đình Vũ...)."
    },
    {
        grade: "12", subject: "dia", term: "CK1",
        question: "Vùng kinh tế nào sau đây có tỉ trọng đóng góp công nghiệp và GDP lớn nhất trong cả 7 vùng kinh tế của nước ta?",
        options: ["Vùng Đông Nam Bộ", "Vùng Trung du và miền núi Bắc Bộ", "Vùng Tây Nguyên", "Vùng Bắc Trung Bộ"],
        answer: 0,
        explanation: "Đông Nam Bộ (gồm TP.HCM, Bình Dương, Đồng Nai, Bà Rịa - Vũng Tàu, Tây Ninh, Bình Phước) là đầu tàu kinh tế dẫn đầu cả nước về quy mô công nghiệp, thu hút FDI, thu ngân sách và giá trị xuất khẩu."
    },
    {
        grade: "12", subject: "dia", term: "CK1",
        question: "Vấn đề việc làm ở nước ta hiện nay vẫn là bài toán kinh tế - xã hội gay gắt do nguyên nhân chủ yếu nào?",
        options: ["Quy mô dân số lớn, mỗi năm có hơn 1 triệu lao động mới bổ sung, trong khi chất lượng lao động chưa đáp ứng yêu cầu chuyển đổi số", "Nước ta hoàn toàn không có doanh nghiệp nào hoạt động", "Mọi lao động đều từ chối nhận việc làm", "Nhà nước cấm người dân đi làm việc ở nước ngoài"],
        answer: 0,
        explanation: "Sức ép tạo việc làm mới hàng năm rất lớn trong khi tình trạng thất nghiệp ở thành thị và thiếu việc làm ở nông thôn vẫn tồn tại do cơ cấu đào tạo chưa sát với nhu cầu thực tế của thị trường lao động 4.0."
    },

    // ===================================================================
    // KHỐI 12 - ĐỊA LÍ - GIỮA KÌ 2 (GK2 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "12", subject: "dia", term: "GK2",
        question: "Hai vùng sản xuất lương thực (lúa gạo) lớn nhất, giữ vai trò quyết định an ninh lương thực quốc gia và xuất khẩu gạo của Việt Nam là:",
        options: ["Đồng bằng sông Cửu Long (ĐBSCL) và Đồng bằng sông Hồng (ĐBSH)", "Tây Nguyên và Đông Nam Bộ", "Trung du miền núi Bắc Bộ và Bắc Trung Bộ", "Duyên hải Nam Trung Bộ và Tây Bắc"],
        answer: 0,
        explanation: "ĐBSCL là vựa lúa lớn nhất cả nước (đóng góp trên 50% sản lượng lúa và 90% lượng gạo xuất khẩu); ĐBSH là vựa lúa lớn thứ hai với trình độ thâm canh và năng suất lúa dẫn đầu cả nước."
    },
    {
        grade: "12", subject: "dia", term: "GK2",
        question: "Vùng có quy mô chuyên canh cây công nghiệp lâu năm (cà phê, cao su, hồ tiêu, điều) lớn nhất cả nước là hai vùng nào?",
        options: ["Tây Nguyên và Đông Nam Bộ", "Đồng bằng sông Hồng và Bắc Trung Bộ", "Đồng bằng sông Cửu Long và Duyên hải Nam Trung Bộ", "Trung du và miền núi Bắc Bộ và Tây Bắc"],
        answer: 0,
        explanation: "Tây Nguyên (thủ phủ cà phê, hồ tiêu trên đất đỏ bazan) và Đông Nam Bộ (thủ phủ cây cao su, điều, hồ tiêu) là hai vùng chuyên canh cây công nghiệp lâu năm lớn nhất, mang lại kim ngạch xuất khẩu hàng tỉ USD."
    },
    {
        grade: "12", subject: "dia", term: "GK2",
        question: "Cây chè búp (chè xanh, chè ô long) được trồng nhiều nhất ở vùng nào của nước ta nhờ điều kiện khí hậu cận nhiệt đới mát mẻ trên núi?",
        options: ["Vùng Trung du và miền núi Bắc Bộ (Thái Nguyên, Phú Thọ, Yên Bái, Hà Giang...)", "Đồng bằng sông Cửu Long", "Vùng duyên hải cực Nam Trung Bộ", "Vùng rừng ngập mặn Cà Mau"],
        answer: 0,
        explanation: "Trung du và miền núi Bắc Bộ là vùng chè lớn nhất cả nước nhờ khí hậu mùa đông lạnh và địa hình đồi trung du lượn sóng, đất feralit chua; vùng chè lớn thứ hai là cao nguyên Lâm Đồng (Tây Nguyên)."
    },
    {
        grade: "12", subject: "dia", term: "GK2",
        question: "Ngành Thủy sản nước ta có bước phát triển đột phá trong những năm gần đây, trong đó sản lượng nuôi trồng đã vượt sản lượng khai thác nhờ mặt hàng chủ lực nào?",
        options: ["Tôm nước lợ (tôm sú, tôm thẻ chân trắng) và Cá tra, cá ba sa xuất khẩu", "Cá voi và hải cẩu", "Cá tuyết Bắc Cực", "Tảo bẹ ôn đới"],
        answer: 0,
        explanation: "Tôm nước lợ (tại ĐBSCL, duyên hải miền Trung) và cá tra công nghiệp (ĐBSCL) là hai mặt hàng xuất khẩu chủ lực tỉ đô của thủy sản Việt Nam, có mặt tại hơn 160 quốc gia trên thế giới."
    },
    {
        grade: "12", subject: "dia", term: "GK2",
        question: "Biện pháp cấp thiết nhất để bảo vệ và phát triển bền vững nguồn lợi hải sản ven bờ ở nước ta hiện nay là gì?",
        options: ["Nghiêm cấm đánh bắt bằng xung điện, chất độc, lưới mắt nhỏ; chuyển mạnh sang đánh bắt xa bờ gắn với bảo vệ chủ quyền biển đảo", "Đẩy mạnh đánh bắt ven bờ bằng mọi hình thức tận diệt", "Xả thẳng nước thải công nghiệp ra biển", "Cấm tất cả ngư dân không được ra khơi"],
        answer: 0,
        explanation: "Nguồn lợi hải sản ven bờ đang suy giảm nghiêm trọng do khai thác quá mức; cần cấm các ngư cụ tận diệt, hiện đại hóa đội tàu đánh bắt xa bờ (hỗ trợ đóng tàu vỏ thép, định vị vệ tinh) để vươn khơi bám biển."
    },
    {
        grade: "12", subject: "dia", term: "GK2",
        question: "Ngành Công nghiệp năng lượng của nước ta bao gồm hai phân ngành chính là:",
        options: ["Khai thác nhiên liệu (than đá, dầu thô, khí tự nhiên) và Sản xuất điện lực (thủy điện, nhiệt điện, năng lượng tái tạo)", "Chế biến chè và dệt may", "Sản xuất phân bón và thuốc sâu", "Đóng tàu và luyện kim đen"],
        answer: 0,
        explanation: "Công nghiệp năng lượng là ngành then chốt cơ sở: khai thác than (Quảng Ninh), dầu khí (thềm lục địa phía Nam) và mạng lưới phát điện (thủy điện, nhiệt điện khí, nhiệt điện than, điện gió, điện mặt trời)."
    },
    {
        grade: "12", subject: "dia", term: "GK2",
        question: "Bể than đá antraxit có trữ lượng lớn nhất và chất lượng tốt nhất nước ta phân bố tập trung ở tỉnh nào?",
        options: ["Tỉnh Quảng Ninh", "Tỉnh Thái Nguyên", "Tỉnh Lạng Sơn", "Tỉnh Nghệ An"],
        answer: 0,
        explanation: "Bể than Quảng Ninh có trữ lượng hàng tỉ tấn than antraxit nhiệt lượng cao, phục vụ cho các nhà máy nhiệt điện than (Uông Bí, Phả Lại, Cẩm Phả...) và ngành luyện kim, xuất khẩu."
    },
    {
        grade: "12", subject: "dia", term: "GK2",
        question: "Các mỏ dầu khí lớn đang được khai thác ở thềm lục địa phía Nam nước ta (như Bạch Hổ, Rồng, Đại Hùng, Rạng Đông, Lan Tây...) thuộc các bể trầm tích nào?",
        options: ["Bể trầm tích Cửu Long và Bể trầm tích Nam Côn Sơn", "Bể trầm tích sông Hồng", "Bể trầm tích An Châu", "Bể trầm tích Hoàng Sa"],
        answer: 0,
        explanation: "Thềm lục địa Nam Trung Bộ và Nam Bộ chứa các bể trầm tích dầu khí Cửu Long, Nam Côn Sơn, Thổ Chu - Mã Lai; cung cấp dầu thô xuất khẩu và khí đốt cho các cụm nhiệt điện khí Phú Mỹ, Cà Mau."
    },
    {
        grade: "12", subject: "dia", term: "GK2",
        question: "Nhà máy thủy điện có công suất lớn nhất Việt Nam và khu vực Đông Nam Á hiện nay được xây dựng trên dòng sông nào?",
        options: ["Nhà máy Thủy điện Sơn La (công suất 2400 MW) trên sông Đà", "Thủy điện Hòa Bình trên sông Hồng", "Thủy điện Yaly trên sông Sê San", "Thủy điện Trị An trên sông Đồng Nai"],
        answer: 0,
        explanation: "Thủy điện Sơn La (2400 MW) khánh thành năm 2012 trên sông Đà là công trình thế kỉ lớn nhất Đông Nam Á, giữ vai trò cung cấp điện năng khổng lồ và cắt lũ an toàn cho đồng bằng Bắc Bộ."
    },
    {
        grade: "12", subject: "dia", term: "GK2",
        question: "Xu hướng phát triển nguồn điện mới của Việt Nam theo Quy hoạch Điện VIII để thực hiện cam kết Net Zero vào năm 2050 là gì?",
        options: ["Ưu tiên phát triển mạnh mẽ điện gió (đặc biệt điện gió ngoài khơi), điện mặt trời, sinh khối và từng bước thay thế điện than bằng điện khí LNG", "Xây dựng thêm 100 nhà máy nhiệt điện chạy bằng than củi", "Dừng toàn bộ các dự án năng lượng sạch", "Chỉ nhập khẩu điện năng từ nước ngoài"],
        answer: 0,
        explanation: "Quy hoạch Điện VIII giảm dần điện than, đẩy mạnh phát triển năng lượng tái tạo (gió, mặt trời) tại vùng Nam Trung Bộ và Tây Nguyên, kết hợp phát triển nguồn điện khí LNG linh hoạt."
    },
    {
        grade: "12", subject: "dia", term: "GK2",
        question: "Ngành Công nghiệp chế biến lương thực, thực phẩm chiếm tỉ trọng lớn nhất trong giá trị sản xuất công nghiệp nước ta chủ yếu nhờ vào:",
        options: ["Nguồn nguyên liệu nông - lâm - thủy sản tại chỗ dồi dào, thị trường tiêu thụ rộng lớn trong và ngoài nước", "Có nguồn vốn hỗ trợ 100% từ Liên Hợp Quốc", "Không đòi hỏi bất kì lao động nào", "Hoàn toàn miễn thuế kinh doanh"],
        answer: 0,
        explanation: "Đây là ngành công nghiệp trọng điểm phát triển trên nền tảng nguồn nguyên liệu trù phú của nền nông nghiệp nhiệt đới (gạo, cà phê, thủy sản, hoa quả) và nhu cầu thiết yếu hàng ngày của hơn 100 triệu dân."
    },
    {
        grade: "12", subject: "dia", term: "GK2",
        question: "Ngành Công nghiệp Dệt may và Da giày của Việt Nam giữ vị trí tốp đầu thế giới về xuất khẩu dựa trên thế mạnh chủ yếu nào?",
        options: ["Nguồn lao động dồi dào, tay nghề khéo léo, chi phí cạnh tranh và tận dụng tốt các ưu đãi thuế quan từ các hiệp định thương mại tự do", "Tự túc được 100% bông sợi tự nhiên trong nước", "Công nghệ may mặc tự động hóa hoàn toàn không cần thợ", "Không phải cạnh tranh với bất kì quốc gia nào"],
        answer: 0,
        explanation: "Việt Nam là một trong 3 nước xuất khẩu dệt may lớn nhất thế giới (cùng với Trung Quốc, Bangladesh) nhờ đội ngũ công nhân may lành nghề và các hiệp định CPTPP, EVFTA mang lại thuế quan ưu đãi."
    },
    {
        grade: "12", subject: "dia", term: "GK2",
        question: "Các trung tâm công nghiệp quy mô rất lớn (giá trị sản xuất trên 120 nghìn tỉ đồng) ở nước ta tập trung ở hai vùng kinh tế nào?",
        options: ["Vùng Đồng bằng sông Hồng (Hà Nội, Hải Phòng) và Vùng Đông Nam Bộ (TP. Hồ Chí Minh, Biên Hòa, Thủ Dầu Một)", "Vùng Tây Bắc và Tây Nguyên", "Vùng Bắc Trung Bộ và Duyên hải miền Trung", "Vùng Cà Mau và Đồng Tháp"],
        answer: 0,
        explanation: "Hai dải tập trung công nghiệp lớn nhất cả nước là vùng đồng bằng Bắc Bộ (trung tâm hạt nhân Hà Nội - Hải Phòng) và vùng Đông Nam Bộ (hạt nhân TP.HCM - Bình Dương - Đồng Nai - Vũng Tàu)."
    },
    {
        grade: "12", subject: "dia", term: "GK2",
        question: "Khu công nghệ cao Hòa Lạc (Hà Nội) và Khu công nghệ cao TP. Hồ Chí Minh được thành lập nhằm mục tiêu mũi nhọn gì?",
        options: ["Nghiên cứu, phát triển công nghệ cao (vi mạch bán dẫn, trí tuệ nhân tạo, công nghệ sinh học) và ươm tạo doanh nghiệp khởi nghiệp đổi mới sáng tạo", "Chuyên chăn nuôi lợn nái quy mô công nghiệp", "Xây dựng các kho chứa than đá dự trữ", "Bãi tập kết rác thải sinh hoạt đô thị"],
        answer: 0,
        explanation: "Các khu công nghệ cao quốc gia thu hút các tập đoàn công nghệ hàng đầu thế giới (Intel, Samsung R&D, Nidec...), đào tạo nguồn nhân lực chất lượng cao và chuyển giao công nghệ lõi cho Việt Nam."
    },
    {
        grade: "12", subject: "dia", term: "GK2",
        question: "Mục đích quan trọng nhất của việc hình thành các Khu kinh tế ven biển (như Chu Lai, Dung Quất, Nhơn Hội, Vũng Áng, Phú Quốc) là gì?",
        options: ["Khai thác tối đa tiềm năng kinh tế biển, thu hút đầu tư quốc tế, tạo đột phá phát triển công nghiệp - dịch vụ và củng cố an ninh quốc phòng", "Làm nơi di dân cách li xã hội", "Chỉ để làm bãi tắm du lịch mùa hè", "Trồng cây cao su ven biển"],
        answer: 0,
        explanation: "Khu kinh tế ven biển là khu vực kinh tế mở với hạ tầng cảng biển nước sâu đồng bộ, cơ chế ưu đãi vượt trội nhằm thu hút các tổ hợp lọc hóa dầu, luyện thép, logistic và đô thị biển hiện đại."
    },

    // ===================================================================
    // KHỐI 12 - ĐỊA LÍ - CUỐI KÌ 2 (CK2 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "12", subject: "dia", term: "CK2",
        question: "Tuyến đường bộ xương sống huyết mạch chạy suốt chiều dài đất nước từ cửa khẩu Hữu Nghị (Lạng Sơn) đến đất mũi Cà Mau là tuyến đường nào?",
        options: ["Quốc lộ 1A (và tuyến đường bộ Cao tốc Bắc - Nam phía Đông)", "Đường Hồ Chí Minh", "Quốc lộ 14 chạy qua Tây Nguyên", "Quốc lộ 5 nối Hà Nội - Hải Phòng"],
        answer: 0,
        explanation: "Quốc lộ 1A dài hơn 2300 km là trục giao thông xuyên Việt quan trọng nhất nối liền 6/7 vùng kinh tế, kết nối các trung tâm kinh tế và đô thị lớn nhất từ Bắc vào Nam."
    },
    {
        grade: "12", subject: "dia", term: "CK2",
        question: "Tuyến đường sắt Thống Nhất (Hà Nội - TP. Hồ Chí Minh) có chiều dài bao nhiêu km và giữ vai trò gì?",
        options: ["Dài 1726 km, là trục giao thông đường sắt xương sống vận chuyển hành khách và hàng hóa an toàn, liên tục giữa hai miền Nam - Bắc", "Dài 500 km", "Dài 3000 km", "Chỉ phục vụ mục đích quân sự"],
        answer: 0,
        explanation: "Đường sắt Bắc - Nam (Thống Nhất) chạy song song với Quốc lộ 1A, đảm nhận vận chuyển khối lượng lớn hàng hóa đường dài và du khách xuyên qua nhiều danh lam thắng cảnh kì vĩ (đèo Hải Vân...)."
    },
    {
        grade: "12", subject: "dia", term: "CK2",
        question: "Cụm cảng biển nước sâu cửa ngõ quốc tế lớn nhất miền Nam có khả năng đón các tàu container siêu lớn đi thẳng sang châu Âu và châu Mỹ không cần trung chuyển là:",
        options: ["Cụm cảng Cái Mép - Thị Vải (tỉnh Bà Rịa - Vũng Tàu)", "Cảng Cần Thơ", "Cảng Bến Thủy", "Cảng Cửa Lò"],
        answer: 0,
        explanation: "Cái Mép - Thị Vải là cụm cảng nước sâu hiện đại bậc nhất thế giới, đón được tàu mẹ tải trọng trên 200.000 DWT, đưa hàng xuất khẩu Việt Nam đi thẳng sang bờ Tây nước Mỹ trong 16 ngày."
    },
    {
        grade: "12", subject: "dia", term: "CK2",
        question: "Dự án Cảng hàng không quốc tế Long Thành (Đồng Nai) được xây dựng với mục tiêu chiến lược trở thành:",
        options: ["Cảng hàng không quốc tế trung chuyển hiện đại tầm cỡ khu vực Đông Nam Á, giảm tải cho sân bay Tân Sơn Nhất", "Sân bay chỉ phục vụ máy bay trực thăng cứu hộ", "Căn cứ huấn luyện dù lượn thể thao", "Chợ đầu mối bán buôn hoa quả"],
        answer: 0,
        explanation: "Sân bay Long Thành đạt cấp 4F quốc tế công suất thiết kế 100 triệu hành khách/năm, định hướng trở thành 'hub' trung chuyển hàng không lớn của châu Á, tạo động lực bứt phá cho toàn bộ Vùng kinh tế trọng điểm phía Nam."
    },
    {
        grade: "12", subject: "dia", term: "CK2",
        question: "Cơ cấu hàng xuất khẩu của Việt Nam trong những năm gần đây có sự chuyển biến chất lượng rõ nét theo hướng nào?",
        options: ["Giảm tỉ trọng khoáng sản thô và nông sản thô, tăng nhanh tỉ trọng hàng công nghiệp chế biến chế tạo (điện tử, máy tính, dệt may, da giày)", "Chỉ xuất khẩu duy nhất gạo và cà phê", "Không còn xuất khẩu bất kì mặt hàng công nghiệp nào", "Quay trở lại xuất khẩu than bùn thô"],
        answer: 0,
        explanation: "Hàng công nghiệp chế biến - chế tạo hiện chiếm gần 90% tổng kim ngạch xuất khẩu cả nước, đưa Việt Nam vào tốp 20 quốc gia có quy mô ngoại thương lớn nhất thế giới."
    },
    {
        grade: "12", subject: "dia", term: "CK2",
        question: "Ba thị trường xuất khẩu hàng hóa lớn nhất của Việt Nam hiện nay lần lượt là:",
        options: ["Hoa Kỳ, Trung Quốc và Liên minh châu Âu (EU)", "Lào, Campuchia và Cu-ba", "Nga, Ấn Độ và Bra-xin", "Nam Phi, Ai Cập và Mê-hi-cô"],
        answer: 0,
        explanation: "Hoa Kỳ là thị trường xuất khẩu lớn nhất của Việt Nam (vượt mốc 100 tỉ USD), tiếp theo là Trung Quốc và EU; trong khi Trung Quốc là thị trường nhập khẩu lớn nhất (nhập máy móc, nguyên phụ liệu)."
    },
    {
        grade: "12", subject: "dia", term: "CK2",
        question: "Di sản thiên nhiên thế giới ở nước ta nổi tiếng với cảnh quan karst ngập nước kì vĩ và hàng nghìn hòn đảo đá vôi là:",
        options: ["Vịnh Hạ Long (Quảng Ninh) và Quần đảo Cát Bà (Hải Phòng)", "Bán đảo Sơn Trà", "Mũi Né (Phan Thiết)", "Bãi biển Sầm Sơn"],
        answer: 0,
        explanation: "Vịnh Hạ Long - Quần đảo Cát Bà được UNESCO vinh danh Di sản thiên nhiên thế giới nhờ giá trị ngoại hạng toàn cầu về địa chất địa mạo karst biển nhiệt đới và đa dạng sinh học rừng - biển nguyên sơ."
    },
    {
        grade: "12", subject: "dia", term: "CK2",
        question: "Thế mạnh kinh tế nổi bật hàng đầu của Vùng Trung du và miền núi Bắc Bộ là:",
        options: ["Khai thác khoáng sản kim loại và nhiên liệu, phát triển thủy điện lớn, cây công nghiệp cận nhiệt (chè) và kinh tế cửa khẩu", "Phát triển nuôi tôm xuất khẩu lớn nhất nước", "Trồng cây cao su và cà phê Robusta bạt ngàn", "Nuôi cá tra công nghiệp xuất khẩu"],
        answer: 0,
        explanation: "Trung du miền núi Bắc Bộ giàu khoáng sản nhất nước (than đá, sắt, thiếc, apatit, đồng), tiềm năng thủy điện sông Đà, sông Lô khổng lồ, khí hậu mát thích hợp trồng chè, rau hoa ôn đới và giao thương với Trung Quốc."
    },
    {
        grade: "12", subject: "dia", term: "CK2",
        question: "Hạn chế lớn nhất đối với phát triển kinh tế nông nghiệp của Vùng Đồng bằng sông Hồng là gì?",
        options: ["Bình quân đất canh tác trên đầu người rất thấp, đất bị suy thoái do thâm canh quá mức và thiên tai thời tiết thất thường", "Thiếu hoàn toàn nguồn nước tưới", "Đất đai toàn bộ là cát trắng hoang mạc", "Không có lực lượng lao động nông nghiệp"],
        answer: 0,
        explanation: "ĐBSH có mật độ dân số quá đông dẫn tới đất nông nghiệp bình quân đầu người thấp nhất nước (khoảng 0,04 ha/người), đất trong đê không được bồi phù sa hàng năm nên dễ bạc màu."
    },
    {
        grade: "12", subject: "dia", term: "CK2",
        question: "Thế mạnh kinh tế đặc trưng mang tính đột phá của Vùng Bắc Trung Bộ và Duyên hải miền Trung là:",
        options: ["Kinh tế biển toàn diện: đánh bắt nuôi trồng thủy sản, hệ thống cảng biển nước sâu, du lịch biển đảo và các khu kinh tế ven biển", "Khai thác than antraxit quy mô lớn", "Phát triển công nghiệp phần mềm lớn nhất nước", "Trồng lúa mì ôn đới"],
        answer: 0,
        explanation: "Toàn bộ các tỉnh miền Trung đều giáp biển, có nhiều vũng vịnh nước sâu xây cụng cảng (Nghi Sơn, Vũng Áng, Chân Mây, Tiên Sa, Dung Quất, Cam Ranh), bãi biển đẹp nổi tiếng và ngư trường rộng lớn."
    },
    {
        grade: "12", subject: "dia", term: "CK2",
        question: "Biện pháp thủy lợi có ý nghĩa sống còn đối với sản xuất nông nghiệp và sinh hoạt của nhân dân Vùng Tây Nguyên là:",
        options: ["Xây dựng các hồ chứa nước thủy lợi, bảo vệ rừng đầu nguồn để giữ nước ngầm trong mùa khô hạn kéo dài", "Xây dựng hệ thống đê biển chống bão", "Đắp đê ngăn lũ sông Hồng", "Bơm nước mặn vào tưới cho cà phê"],
        answer: 0,
        explanation: "Mùa khô Tây Nguyên kéo dài 4 - 5 tháng khiến mực nước ngầm hạ sâu, thiếu nước tưới trầm trọng cho hàng trăm nghìn hecta cà phê; việc giữ rừng đầu nguồn và xây hồ thủy lợi điều tiết nước là sống còn."
    },
    {
        grade: "12", subject: "dia", term: "CK2",
        question: "Vấn đề 'Sử dụng hợp lí và cải tạo tự nhiên' ở Đồng bằng sông Cửu Long đòi hỏi giải pháp thích ứng chiến lược nào?",
        options: ["Chuyển từ tư duy 'chống lũ' sang 'sống chung với lũ', tôn trọng quy luật tự nhiên, chuyển đổi cơ cấu kinh tế theo 3 vùng (ngọt, lợ, mặn)", "Đắp đê bao khép kín toàn bộ đồng bằng để ngăn mọi giọt nước lũ", "Đào bỏ hết toàn bộ đất phèn đất mặn đổ ra biển", "Chặn đứng mọi dòng sông không cho chảy ra biển"],
        answer: 0,
        explanation: "Nghị quyết 120 của Chính phủ về phát triển bền vững ĐBSCL xác định phương châm 'thuận thiên': lấy tài nguyên nước làm cốt lõi, thích ứng linh hoạt với hạn mặn, coi nước mặn nước lợ là tài nguyên để nuôi trồng thủy sản."
    },
    {
        grade: "12", subject: "dia", term: "CK2",
        question: "Hai quần đảo xa bờ có ý nghĩa chiến lược thiêng liêng về an ninh quốc phòng và chủ quyền biển đảo của Tổ quốc là:",
        options: ["Quần đảo Hoàng Sa (thuộc TP. Đà Nẵng) và Quần đảo Trường Sa (thuộc tỉnh Khánh Hòa)", "Quần đảo Cô Tô và Cát Bà", "Quần đảo Thổ Chu và Côn Đảo", "Quần đảo Nam Du và Phú Quốc"],
        answer: 0,
        explanation: "Hoàng Sa và Trường Sa là tiền tiêu bảo vệ sườn phía đông của đất nước, kiểm soát các tuyến hàng hải quốc tế trên Biển Đông và khẳng định chủ quyền lãnh thổ biển đảo thiêng liêng của Việt Nam."
    },
    {
        grade: "12", subject: "dia", term: "CK2",
        question: "Huyện đảo Phú Quốc (tỉnh Kiên Giang) đã được công nhận là Thành phố đảo đầu tiên của Việt Nam với thế mạnh nổi bật là gì?",
        options: ["Trung tâm du lịch sinh thái nghỉ dưỡng biển đảo tầm cỡ quốc tế và trung tâm thương mại dịch vụ chất lượng cao", "Khai thác quặng bauxite lớn nhất thế giới", "Trung tâm luyện gang thép lớn nhất nước", "Trồng cây lúa nước lớn nhất Đông Nam Á"],
        answer: 0,
        explanation: "Phú Quốc (Đảo Ngọc) có sân bay quốc tế, cảng biển đón tàu du lịch 5 sao, nhiều bãi biển đẹp nguyên sơ và các tổ hợp du lịch nghỉ dưỡng vui chơi giải trí hàng đầu thế giới."
    },
    {
        grade: "12", subject: "dia", term: "CK2",
        question: "Mục tiêu bao trùm trong chiến lược phát triển bền vững kinh tế biển Việt Nam đến năm 2030, tầm nhìn đến năm 2045 là gì?",
        options: ["Đưa Việt Nam trở thành quốc gia biển mạnh, phát triển bền vững, thịnh vượng, an ninh, an toàn; kinh tế biển đóng góp chủ lực vào GDP", "Xóa bỏ việc bảo tồn các vườn quốc gia trên biển", "Khai thác cạn kiệt toàn bộ rạn san hô", "Đóng cửa tất cả các tuyến vận tải biển"],
        answer: 0,
        explanation: "Nghị quyết số 36-NQ/TW của Ban Chấp hành Trung ương Đảng xác định mục tiêu đưa nước ta trở thành quốc gia 'mạnh về biển, làm giàu từ biển', kết hợp chặt chẽ giữa phát triển kinh tế biển với bảo vệ vững chắc chủ quyền biển đảo Tổ quốc."
    },

    // ===================================================================
    // KHỐI 12 - LỊCH SỬ - GIỮA KÌ 1 (GK1 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "12", subject: "su", term: "GK1",
        question: "Hội nghị I-an-ta (tháng 02/1945) được triệu tập tại Liên Xô với sự tham dự của nguyên thủ ba cường quốc trụ cột chống phát xít là:",
        options: ["Liên Xô (Xta-lin), Hoa Kỳ (Ru-dơ-ven) và Vương quốc Anh (Sơ-csin)", "Liên Xô, Hoa Kỳ và Pháp", "Hoa Kỳ, Anh và Trung Quốc", "Liên Xô, Đức và Nhật Bản"],
        answer: 0,
        explanation: "Hội nghị Ianta diễn ra từ ngày 4 đến 11/02/1945 tại Crưm (Liên Xô) với sự tham dự của 'Ba ông lớn' (Big Three): Stalin, Roosevelt và Churchill để bàn về việc tiêu diệt phát xít và phân chia phạm vi ảnh hưởng sau chiến tranh."
    },
    {
        grade: "12", subject: "su", term: "GK1",
        question: "Quyết định quan trọng nào của Hội nghị I-an-ta (1945) đã đặt nền tảng cho việc thành lập một tổ chức quốc tế lớn nhất hành tinh nhằm duy trì hòa bình thế giới?",
        options: ["Thống nhất thành lập tổ chức Liên Hợp Quốc (United Nations)", "Thành lập Liên minh châu Âu (EU)", "Thành lập Khối Hiệp ước Bắc Đại Tây Dương (NATO)", "Thành lập Hội Quốc Liên"],
        answer: 0,
        explanation: "Hội nghị Ianta đã nhất trí thành lập Liên Hợp Quốc nhằm gìn giữ hòa bình và an ninh quốc tế; đến tháng 10/1945, Hiến chương Liên Hợp Quốc chính thức có hiệu lực sau khi được các nước phê chuẩn."
    },
    {
        grade: "12", subject: "su", term: "GK1",
        question: "Trật tự thế giới hai cực I-an-ta (1945 - 1991) được đặc trưng bởi sự đối đầu căng thẳng trên mọi phương diện giữa hai siêu cường đứng đầu hai khối là:",
        options: ["Hoa Kỳ (đứng đầu phe tư bản chủ nghĩa) và Liên Xô (đứng đầu phe xã hội chủ nghĩa)", "Vương quốc Anh và Cộng hòa Pháp", "Đức và Nhật Bản", "Trung Quốc và Ấn Độ"],
        answer: 0,
        explanation: "Trật tự hai cực Ianta chia thế giới làm hai phe đối đầu gay gắt: Khối TBCN do Mỹ cầm đầu và Khối XHCN do Liên Xô lãnh đạo, chi phối toàn bộ quan hệ quốc tế suốt gần nửa thế kỉ."
    },
    {
        grade: "12", subject: "su", term: "GK1",
        question: "Cơ quan giữ vai trò trọng yếu nhất của Liên Hợp Quốc trong việc duy trì hòa bình và an ninh quốc tế là:",
        options: ["Hội đồng Bảo an Liên Hợp Quốc (UN Security Council)", "Đại hội đồng Liên Hợp Quốc", "Ban Thư kí Liên Hợp Quốc", "Tòa án Công lí Quốc tế"],
        answer: 0,
        explanation: "Hội đồng Bảo an gồm 5 ủy viên thường trực (Nga, Mỹ, Anh, Pháp, Trung Quốc có quyền phủ quyết) và 10 ủy viên không thường trực, là cơ quan duy nhất của LHQ có quyền áp đặt lệnh trừng phạt hoặc triển khai lực lượng gìn giữ hòa bình."
    },
    {
        grade: "12", subject: "su", term: "GK1",
        question: "Nguyên tắc hoạt động quan trọng nhất của Hội đồng Bảo an Liên Hợp Quốc nhằm đảm bảo hòa bình giữa các nước lớn là:",
        options: ["Nguyên tắc nhất trí (đồng thuận) tuyệt đối giữa 5 nước ủy viên thường trực (quyền phủ quyết - Veto)", "Bỏ phiếu theo đa số 50% thông thường", "Ủy viên nào đóng nhiều tiền hơn thì có quyền quyết định", "Chủ tịch luân phiên tự ý quyết định mà không cần họp"],
        answer: 0,
        explanation: "Mọi quyết định quan trọng của Hội đồng Bảo an chỉ có hiệu lực khi được ít nhất 9/15 thành viên tán thành và không có phiếu chống (phủ quyết) nào của bất kì ai trong 5 ủy viên thường trực."
    },
    {
        grade: "12", subject: "su", term: "GK1",
        question: "Việt Nam chính thức trở thành thành viên thứ 149 của tổ chức Liên Hợp Quốc vào thời điểm lịch sử nào?",
        options: ["Ngày 20/09/1977", "Ngày 02/09/1945", "Ngày 30/04/1975", "Ngày 28/07/1995"],
        answer: 0,
        explanation: "Ngày 20/09/1977, tại khóa họp thứ 32 của Đại hội đồng Liên Hợp Quốc ở New York, lá cờ đỏ sao vàng của nước CHXHCN Việt Nam đã chính thức tung bay tại trụ sở Liên Hợp Quốc."
    },
    {
        grade: "12", subject: "su", term: "GK1",
        question: "Khái niệm 'Chiến tranh lạnh' (Cold War, 1947 - 1989) được định nghĩa chuẩn xác là:",
        options: ["Tình trạng đối đầu căng thẳng quyết liệt về chính trị, quân sự, kinh tế và tư tưởng giữa hai phe do Mỹ và Liên Xô đứng đầu, không nổ ra xung đột vũ trang trực tiếp giữa hai siêu cường", "Một cuộc chiến tranh diễn ra ở vùng băng tuyết Bắc Cực", "Cuộc chiến tranh chỉ sử dụng vũ khí lạnh gươm giáo", "Cuộc chiến tranh vũ trụ viễn tưởng"],
        answer: 0,
        explanation: "Chiến tranh lạnh là trạng thái 'không hòa bình cũng không chiến tranh trực tiếp' giữa Mỹ và Liên Xô: chạy đua vũ trang hạt nhân, chiến tranh tâm lí, cấm vận kinh tế và đối đầu qua các cuộc chiến tranh cục bộ (Triều Tiên, Việt Nam)."
    },
    {
        grade: "12", subject: "su", term: "GK1",
        question: "Sự kiện được coi là điểm khởi đầu chính thức phát động cuộc Chiến tranh lạnh của đế quốc Mỹ chống Liên Xô là:",
        options: ["Thông điệp của Tổng thống Tru-man (Truman) trước Quốc hội Mỹ ngày 12/03/1947", "Kế hoạch Mác-san (Marshall) phục hưng châu Âu", "Mỹ thả bom nguyên tử xuống Hi-rô-si-ma", "Thành lập khối quân sự NATO"],
        answer: 0,
        explanation: "Ngày 12/03/1947, Tổng thống Truman đọc thông điệp tuyên bố sứ mệnh của Mỹ là 'ngăn chặn sự bành trướng của chủ nghĩa cộng sản', viện trợ khẩn cấp cho Hy Lạp và Thổ Nhĩ Kỳ, chính thức phát động Chiến tranh lạnh."
    },
    {
        grade: "12", subject: "su", term: "GK1",
        question: "Liên minh quân sự lớn nhất của các nước phương Tây do Mỹ cầm đầu thành lập năm 1949 để đối phó với Liên Xô là:",
        options: ["Khối Hiệp ước Bắc Đại Tây Dương (NATO)", "Khối Hiệp ước Vác-sa-va (Warsaw)", "Khối SEATO ở Đông Nam Á", "Khối CENTO ở Trung Đông"],
        answer: 0,
        explanation: "Tháng 4/1949, Mỹ cùng 11 nước phương Tây kí Hiệp ước Washington thành lập khối quân sự NATO (Bắc Đại Tây Dương) với điều khoản cốt lõi: một cuộc tấn công vào một thành viên bị coi là tấn công vào toàn bộ khối."
    },
    {
        grade: "12", subject: "su", term: "GK1",
        question: "Để đối trọng lại với khối quân sự NATO của phương Tây, Liên Xô và các nước XHCN Đông Âu đã thành lập tổ chức phòng thủ nào vào năm 1955?",
        options: ["Tổ chức Hiệp ước Vác-sa-va (Warsaw Pact)", "Hội đồng Tương trợ Kinh tế (SEV)", "Khối Liên minh Quốc tế vô sản", "Tổ chức Không liên kết"],
        answer: 0,
        explanation: "Tháng 5/1955 tại Warsaw (Ba Lan), Liên Xô và 7 nước XHCN Đông Âu kí Hiệp ước Vác-sa-va thành lập liên minh quân sự - chính trị phòng thủ chung, đánh dấu sự xác lập hoàn chỉnh cục diện đối đầu hai cực hai phe."
    },
    {
        grade: "12", subject: "su", term: "GK1",
        question: "Biểu tượng sụp đổ của Chiến tranh lạnh ở châu Âu gắn liền với sự kiện lịch sử nào vào tháng 11/1989?",
        options: ["Bức tường Béc-lin (Berlin Wall) ngăn cách Đông và Tây Đức bị phá bỏ, mở đường cho nước Đức thống nhất", "Chiến tranh Triều Tiên kết thúc", "Hiệp định Pari về Việt Nam được kí kết", "Liên Xô phóng trạm vũ trụ Hòa Bình"],
        answer: 0,
        explanation: "Đêm ngày 09/11/1989, bức tường Berlin - biểu tượng chia cắt châu Âu trong Chiến tranh lạnh sụp đổ trong sự vỡ òa của hàng vạn người dân Đức; đến tháng 10/1990, nước Đức chính thức tái thống nhất."
    },
    {
        grade: "12", subject: "su", term: "GK1",
        question: "Tháng 12/1989, cuộc gặp gỡ lịch sử tại đảo Man-ta (Malta) giữa hai nhà lãnh đạo M. Goóc-ba-chốp (Liên Xô) và G. Bu-sơ (Mỹ) đã đi đến tuyên bố chung quan trọng nào?",
        options: ["Chính thức tuyên bố chấm dứt cuộc 'Chiến tranh lạnh' kéo dài hơn 40 năm", "Thỏa thuận cùng chia đôi châu Á", "Tuyên chiến với chủ nghĩa phát xít mới", "Thành lập liên quân Mỹ - Xô"],
        answer: 0,
        explanation: "Tại hội đàm Malta (Địa Trung Hải) tháng 12/1989, Gorbachev và George H.W. Bush đã tuyên bố chấm dứt Chiến tranh lạnh vì cuộc chạy đua vũ trang tốn kém hàng nghìn tỉ USD đã làm suy kiệt cả hai siêu cường."
    },
    {
        grade: "12", subject: "su", term: "GK1",
        question: "Sau khi Chiến tranh lạnh kết thúc và Trật tự hai cực I-an-ta sụp đổ (1991), thế giới đang chuyển dịch mạnh mẽ theo xu thế trật tự nào?",
        options: ["Xu thế 'Đa cực' (Multipolar) với sự vươn lên của nhiều trung tâm quyền lực lớn (Mỹ, Trung Quốc, EU, Nga, Ấn Độ...)", "Trật tự 'Đơn cực' vĩnh viễn tuyệt đối do một nước lãnh đạo", "Trật tự phong kiến cát cứ toàn cầu", "Xóa bỏ hoàn toàn các quốc gia độc lập"],
        answer: 0,
        explanation: "Sau thời gian ngắn Mỹ theo đuổi trật tự 'đơn cực', thế giới hiện nay đang định hình trật tự thế giới đa cực, nhiều trung tâm, trong đó các cường quốc cùng tham gia định hình luật chơi quốc tế."
    },
    {
        grade: "12", subject: "su", term: "GK1",
        question: "Xu thế bao trùm trong quan hệ quốc tế của thế giới ngày nay sau Chiến tranh lạnh là gì?",
        options: ["Hòa bình, hữu nghị, hợp tác cùng phát triển và lấy phát triển kinh tế làm trọng tâm", "Chạy đua vũ trang chuẩn bị Chiến tranh thế giới thứ ba", "Cắt đứt toàn bộ quan hệ thương mại đường biển", "Thành lập các liên minh xâm chiếm thuộc địa mới"],
        answer: 0,
        explanation: "Hầu hết các quốc gia đều điều chỉnh chiến lược: đặt lợi ích quốc gia - dân tộc lên trên hết, coi phát triển kinh tế và khoa học công nghệ là thước đo sức mạnh, giải quyết tranh chấp bằng đàm phán hòa bình."
    },
    {
        grade: "12", subject: "su", term: "GK1",
        question: "Trước xu thế toàn cầu hóa và đa cực hóa hiện nay, đường lối đối ngoại nhất quán của Đảng và Nhà nước Việt Nam là:",
        options: ["Độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển; đa phương hóa, đa dạng hóa quan hệ đối ngoại; là bạn, là đối tác tin cậy của cộng đồng quốc tế", "Đóng cửa biên giới 'bế quan tỏa cảng'", "Liên minh quân sự với một nước lớn để chống lại nước khác", "Không tham gia vào bất kì tổ chức quốc tế nào"],
        answer: 0,
        explanation: "Việt Nam thực hiện trường phái ngoại giao 'Cây tre Việt Nam': gốc vững, thân chắc, cành uyển chuyển, kiên định độc lập dân tộc và chủ nghĩa xã hội, chủ động hội nhập quốc tế sâu rộng và có trách nhiệm."
    },

    // ===================================================================
    // KHỐI 12 - LỊCH SỬ - CUỐI KÌ 1 (CK1 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "12", subject: "su", term: "CK1",
        question: "Hiệp ước Ba-li (Bali) được các nước ASEAN kí kết vào năm 1976 tại In-đô-nê-xi-a xác định các nguyên tắc cơ bản nào trong quan hệ giữa các nước?",
        options: ["Tôn trọng chủ quyền toàn vẹn lãnh thổ, không can thiệp vào công việc nội bộ, giải quyết tranh chấp bằng biện pháp hòa bình và hợp tác hiệu quả", "Xây dựng lực lượng quân đội chung viễn chinh", "Thống nhất sử dụng chung một ngôn ngữ duy nhất", "Bãi bỏ toàn bộ quốc kì của các nước"],
        answer: 0,
        explanation: "Hiệp ước Thân thiện và Hợp tác ở Đông Nam Á (Hiệp ước Bali 1976) là văn kiện nền tảng pháp lí của ASEAN, xác lập các nguyên tắc vàng điều chỉnh quan hệ hữu nghị và ứng xử hòa bình giữa các nước thành viên."
    },
    {
        grade: "12", subject: "su", term: "CK1",
        question: "Cột mốc lịch sử hoàn thành ý tưởng về một 'Đại gia đình ASEAN gồm đầy đủ 10 quốc gia Đông Nam Á' gắn liền với sự kiện kết nạp quốc gia nào vào năm 1999?",
        options: ["Vương quốc Cam-pu-chia (ngày 30/04/1999 tại Hà Nội)", "Việt Nam", "Lào và Mi-an-ma", "Bru-nây"],
        answer: 0,
        explanation: "Ngày 30/04/1999 tại Hà Nội, Campuchia chính thức trở thành thành viên thứ 10 của ASEAN, hiện thực hóa giấc mơ liên kết toàn bộ 10 quốc gia Đông Nam Á thành một khối thống nhất hòa bình và thịnh vượng."
    },
    {
        grade: "12", subject: "su", term: "CK1",
        question: "Hội nghị thành lập Đảng Cộng sản Việt Nam (mùa xuân năm 1930) do đồng chí Nguyễn Ái Quốc chủ trì diễn ra tại địa điểm lịch sử nào?",
        options: ["Bán đảo Cửu Long (Hương Cảng / Hồng Kông, Trung Quốc)", "Quảng Châu (Trung Quốc)", "Pác Bó (Cao Bằng)", "Kinh đô Paris (Pháp)"],
        answer: 0,
        explanation: "Từ ngày 06/01 đến 07/02/1930 tại Hương Cảng, Nguyễn Ái Quốc với tư cách phái viên Quốc tế Cộng sản đã chủ trì hợp nhất 3 tổ chức cộng sản (Đông Dương CSĐ, An Nam CSĐ, Đông Dương CSLĐ) thành Đảng Cộng sản Việt Nam."
    },
    {
        grade: "12", subject: "su", term: "CK1",
        question: "Cương lĩnh chính trị đầu tiên của Đảng (năm 1930) do Nguyễn Ái Quốc khởi thảo đã xác định đường lối chiến lược cơ bản của cách mạng Việt Nam là:",
        options: ["'Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản'", "Chỉ đánh đổ địa chủ phong kiến để chia ruộng đất trước", "Chỉ làm cách mạng văn hóa ôn hòa", "Xây dựng ngay chủ nghĩa xã hội mà không cần độc lập"],
        answer: 0,
        explanation: "Cương lĩnh đầu tiên vạch rõ 2 giai đoạn cách mạng: làm cách mạng tư sản dân quyền và thổ địa cách mạng (đánh đổ đế quốc và phong kiến giành độc lập và ruộng đất), sau đó bỏ qua giai đoạn TBCN tiến thẳng lên CNXH."
    },
    {
        grade: "12", subject: "su", term: "CK1",
        question: "Đỉnh cao của phong trào cách mạng 1930 - 1931 ở Việt Nam gắn liền với sự ra đời của hình thức chính quyền nhân dân kiểu mới nào?",
        options: ["Các Xô viết Nghệ - Tĩnh (chính quyền công - nông binh đầu tiên)", "Ủy ban khởi nghĩa Nam Kì", "Mặt trận Việt Minh", "Chính phủ lâm thời Cộng hòa"],
        answer: 0,
        explanation: "Dưới sự lãnh đạo của Đảng, quần chúng công - nông vùng Nghệ An - Hà Tĩnh đã nổi dậy đập tan chính quyền tay sai thực dân, lập nên các chính quyền Xô viết tự quản, thực hiện quyền làm chủ và chia lại công điền."
    },
    {
        grade: "12", subject: "su", term: "CK1",
        question: "Hình thức đấu tranh chủ yếu của quần chúng nhân dân trong phong trào Dân chủ 1936 - 1939 ở Việt Nam là gì?",
        options: ["Đấu tranh công khai, nửa công khai, hợp pháp và nửa hợp pháp đòi tự do, dân sinh, dân chủ, cơm áo và hòa bình", "Khởi nghĩa vũ trang cướp chính quyền trong thành phố", "Chiến tranh du kích bí mật trên rừng núi", "Ám sát cá nhân các quan chức thực dân"],
        answer: 0,
        explanation: "Tận dụng việc Mặt trận Nhân dân Pháp lên nắm quyền, Đảng ta đã khéo léo kết hợp hình thức bí mật với công khai (phong trào Đông Dương Đại hội, báo chí tiến bộ, bãi công, mít tinh đòi dân sinh dân chủ)."
    },
    {
        grade: "12", subject: "su", term: "CK1",
        question: "Sự kiện lịch sử ngày 28/01/1941 có ý nghĩa bước ngoặt to lớn đối với cách mạng Việt Nam là:",
        options: ["Lãnh tụ Nguyễn Ái Quốc sau 30 năm bôn ba tìm đường cứu nước đã bí mật trở về Tổ quốc qua cột mốc 108 tại Pác Bó (Cao Bằng)", "Đảng Cộng sản Đông Dương đổi tên thành Đảng Lao động", "Đội Việt Nam Tuyên truyền Giải phóng quân thành lập", "Hội nghị Trung ương Đảng lần thứ 6"],
        answer: 0,
        explanation: "Mùa xuân năm 1941, Người trở về Pác Bó (Cao Bằng) trực tiếp lãnh đạo cách mạng Việt Nam, mở ra giai đoạn chuẩn bị gấp rút mọi mặt tiến tới Tổng khởi nghĩa tháng Tám năm 1945."
    },
    {
        grade: "12", subject: "su", term: "CK1",
        question: "Hội nghị Ban Chấp hành Trung ương Đảng lần thứ 8 (tháng 05/1941) do Nguyễn Ái Quốc chủ trì tại Pác Bó đã đưa ra quyết sách chiến lược nào?",
        options: ["Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, quyết định thành lập 'Mặt trận Việt Minh' và chuẩn bị khởi nghĩa vũ trang", "Đình chỉ hoàn toàn mọi hoạt động cách mạng", "Tập trung giải quyết vấn đề ruộng đất trước", "Chỉ làm nhiệm vụ bảo vệ biên giới"],
        answer: 0,
        explanation: "Hội nghị khẳng định: quyền lợi của bộ phận, của giai cấp phải đặt dưới sự sinh tử, tồn vong của quốc gia dân tộc; thành lập Mặt trận Việt Nam Độc lập Đồng minh (Việt Minh) để đoàn kết toàn dân tộc đánh Pháp đuổi Nhật."
    },
    {
        grade: "12", subject: "su", term: "CK1",
        question: "Đội Việt Nam Tuyên truyền Giải phóng quân (tiền thân anh hùng của Quân đội nhân dân Việt Nam) được thành lập vào ngày tháng năm nào theo chỉ thị của Bác Hồ?",
        options: ["Ngày 22/12/1944 (gồm 34 chiến sĩ do đồng chí Võ Nguyên Giáp chỉ huy)", "Ngày 19/08/1945", "Ngày 02/09/1945", "Ngày 15/05/1945"],
        answer: 0,
        explanation: "Ngày 22/12/1944 tại khu rừng Trần Hưng Đạo (Nguyên Bình, Cao Bằng), Đội Việt Nam Tuyên truyền Giải phóng quân ra đời gồm 34 chiến sĩ, mở màn bằng hai chiến thắng giòn giã Phai Khắt và Nà Ngần."
    },
    {
        grade: "12", subject: "su", term: "CK1",
        question: "Bản Chỉ thị lịch sử 'Nhật - Pháp bắn nhau và hành động của chúng ta' (ngày 12/03/1945) của Ban Thường vụ Trung ương Đảng đã xác định kẻ thù cụ thể trước mắt là:",
        options: ["Phát xít Nhật (sau khi Nhật đảo chính lật đổ Pháp độc chiếm Đông Dương ngày 09/03/1945)", "Thực dân Pháp", "Đế quốc Mỹ", "Quân đội Tưởng Giới Thạch"],
        answer: 0,
        explanation: "Đêm 09/03/1945 Nhật nổ súng đảo chính Pháp; Hội nghị mở rộng tại Đình Bảng (Bắc Ninh) lập tức ra chỉ thị nhận định thời cơ khởi nghĩa đang đến gần và phát động cao trào 'Kháng Nhật cứu nước' làm tiền đề."
    },
    {
        grade: "12", subject: "su", term: "CK1",
        question: "Khẩu hiệu hành động nào của Mặt trận Việt Minh trong cao trào kháng Nhật cứu nước (năm 1945) đã dấy lên phong trào cách mạng sôi sục của hàng triệu quần chúng?",
        options: ["'Phá kho thóc Nhật, giải quyết nạn đói!'", "'Tất cả cho tiền tuyến!'", "'Ruộng đất về tay dân cày!'", "'Không một tấc đất bỏ hoang!'"],
        answer: 0,
        explanation: "Trước thảm họa hơn 2 triệu đồng bào chết đói do chính sách thu gom lúa gạo tàn bạo của Nhật - Pháp, khẩu hiệu 'Phá kho thóc Nhật' đã đáp ứng nguyện vọng cháy bỏng sinh tử của dân nghèo, thổi bùng ngọn lửa nổi dậy."
    },
    {
        grade: "12", subject: "su", term: "CK1",
        question: "Đại hội Quốc dân Tân Trào (ngày 16 - 17/08/1945) được coi như một 'Quốc hội lâm thời' của nước ta đã thông qua quyết sách lịch sử nào?",
        options: ["Tán thành lệnh Tổng khởi nghĩa giành chính quyền, thông qua 10 chính sách lớn của Việt Minh và cử ra Ủy ban Dân tộc Giải phóng Việt Nam do Hồ Chí Minh làm Chủ tịch", "Quyết định hòa hoãn với quân đồng minh", "Bầu cử Hội đồng nhân dân các cấp", "Thông qua bản Hiến pháp đầu tiên"],
        answer: 0,
        explanation: "Đại hội Quốc dân Tân Trào triệu tập đại biểu các đảng phái, đoàn thể, dân tộc, tôn giáo biểu thị ý chí sắt đá của toàn dân tộc: 'Dù phải hi sinh tới đâu, dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập'."
    },
    {
        grade: "12", subject: "su", term: "CK1",
        question: "Bốn tỉnh đầu tiên trong cả nước giành được chính quyền thắng lợi sớm nhất trong Cách mạng tháng Tám năm 1945 (ngày 18/08/1945) là:",
        options: ["Bắc Giang, Hải Dương, Hà Tĩnh và Quảng Nam", "Hà Nội, Huế, Sài Gòn và Đà Nẵng", "Cao Bằng, Lạng Sơn, Thái Nguyên và Bắc Kạn", "Cần Thơ, Tiền Giang, Bến Tre và Mỹ Tho"],
        answer: 0,
        explanation: "Ngày 18/08/1945, chớp thời cơ Nhật đầu hàng, nhân dân 4 tỉnh Bắc Giang, Hải Dương, Hà Tĩnh, Quảng Nam đã dũng cảm nổi dậy khởi nghĩa giành chính quyền cấp tỉnh thắng lợi sớm nhất cả nước."
    },
    {
        grade: "12", subject: "su", term: "CK1",
        question: "Khởi nghĩa giành chính quyền thắng lợi vang dội tại Thủ đô Hà Nội vào ngày tháng năm nào có ý nghĩa quyết định cổ vũ toàn quốc tổng khởi nghĩa?",
        options: ["Ngày 19/08/1945", "Ngày 23/08/1945", "Ngày 25/08/1945", "Ngày 02/09/1945"],
        answer: 0,
        explanation: "Ngày 19/08/1945, cuộc mít tinh khổng lồ tại Nhà hát Lớn Hà Nội nhanh chóng biến thành cuộc biểu tình vũ trang chiếm Phủ Khâm sai, Tòa Thị chính, Trại Bảo an binh, giành thắng lợi trọn vẹn ở Hà Nội."
    },
    {
        grade: "12", subject: "su", term: "CK1",
        question: "Sự kiện lịch sử vĩ đại ngày 02/09/1945 tại Quảng trường Ba Đình lịch sử (Hà Nội) là:",
        options: ["Chủ tịch Hồ Chí Minh đọc bản 'Tuyên ngôn Độc lập' khai sinh nước Việt Nam Dân chủ Cộng hòa", "Quân Pháp chính thức nổ súng đánh úp Sài Gòn", "Toàn quốc bước vào cuộc kháng chiến chống Pháp", "Chính phủ lâm thời tuyên bố thoái vị"],
        answer: 0,
        explanation: "Ngày 02/09/1945, trước hàng vạn đồng bào, Bác Hồ đọc Tuyên ngôn Độc lập khẳng định quyền tự do độc lập thiêng liêng: 'Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do, độc lập'."
    },

    // ===================================================================
    // KHỐI 12 - LỊCH SỬ - GIỮA KÌ 2 (GK2 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "12", subject: "su", term: "GK2",
        question: "Tình thế hiểm nghèo của nước Việt Nam Dân chủ Cộng hòa non trẻ trong năm đầu tiên sau Cách mạng tháng Tám (1945 - 1946) được lịch sử ví như:",
        options: ["'Ngàn cân treo sợi tóc' (phải đối mặt cùng lúc với nạn đói, nạn dốt, khó khăn tài chính và thù trong giặc ngoài)", "Thời kì hòa bình phát triển thịnh vượng nhất", "Thời kì hoàn toàn không có quân ngoại quốc xâm lược", "Thời kì dư thừa ngân sách nhà nước"],
        answer: 0,
        explanation: "Nước ta lúc này đứng trước muôn vàn thử thách hiểm nghèo: hơn 20 vạn quân Tưởng ở miền Bắc, quân Anh - Pháp ở miền Nam, nạn đói năm Ất Dậu cướp đi 2 triệu sinh mạng, hơn 90% dân mù chữ và kho bạc trống rỗng."
    },
    {
        grade: "12", subject: "su", term: "GK2",
        question: "Phong trào do Chủ tịch Hồ Chí Minh phát động để nhân dân tự nguyện quyên góp tiền, vàng cứu vãn ngân khố quốc gia đang trống rỗng năm 1945 có tên là:",
        options: ["'Tuần lễ Vàng' và xây dựng 'Quỹ Độc lập'", "Phong trào 'Hũ gạo cứu đói'", "Phong trào 'Bình dân học vụ'", "Phong trào 'Đời sống mới'"],
        answer: 0,
        explanation: "Hưởng ứng lời kêu gọi của Bác Hồ trong 'Tuần lễ Vàng' (tháng 9/1945), nhân dân cả nước từ nhà giàu đến người nghèo đã tự nguyện ủng hộ cho Nhà nước hơn 370 kg vàng và 20 triệu đồng tiền Đông Dương."
    },
    {
        grade: "12", subject: "su", term: "GK2",
        question: "Biện pháp căn cơ và nhanh nhất được Chính phủ đề ra để xóa nạn mù chữ (diệt 'giặc dốt') cho đồng bào cả nước sau năm 1945 là thành lập phong trào:",
        options: ["Phong trào 'Bình dân học vụ' (dạy học chữ Quốc ngữ cấp tốc vào ban đêm)", "Phong trào cử người đi du học phương Tây", "Bắt buộc học sinh thi cử chữ Nho", "Xây dựng các trường đại học quốc tế"],
        answer: 0,
        explanation: "Phong trào Bình dân học vụ diễn ra khắp thôn làng ngõ xóm: người biết chữ dạy người chưa biết, con dạy cha mẹ, với bảng chữ cái gắn khắp nơi, chỉ sau 1 năm đã giúp hơn 2,5 triệu người thoát nạn mù chữ."
    },
    {
        grade: "12", subject: "su", term: "GK2",
        question: "Hiệp định Sơ bộ (ngày 06/03/1946) do Chủ tịch Hồ Chí Minh kí với đại diện Chính phủ Pháp là một chủ trương ngoại giao tài tình nhằm mục đích gì?",
        options: ["Hòa hoãn tạm thời với Pháp để nhanh chóng đuổi 20 vạn quân Tưởng Giới Thạch về nước, tránh đối đầu cùng lúc với nhiều kẻ thù", "Đầu hàng nhượng bộ hoàn toàn cho thực dân Pháp", "Chấp nhận trở lại thân phận nô lệ", "Mời quân Pháp ra thay thế quân đội nhân dân"],
        answer: 0,
        explanation: "Thực hiện phương châm 'Dĩ bất biến, ứng vạn biến', ta kí Hiệp định Sơ bộ 6/3 để mượn tay Pháp đuổi 20 vạn quân Tưởng và tay sai về nước, tranh thủ thời gian quý báu chuẩn bị lực lượng cho cuộc kháng chiến lâu dài."
    },
    {
        grade: "12", subject: "su", term: "GK2",
        question: "Lời kêu gọi Toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh phát đi vào đêm ngày 19/12/1946 chứa đựng mệnh lệnh thiêng liêng nào?",
        options: ["'Chúng ta thà hi sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ!'", "'Chúng ta hãy buông súng đầu hàng'", "'Hãy rút toàn bộ quân đội sang nước ngoài lánh nạn'", "'Chỉ người có súng mới cần tham gia đánh giặc'"],
        answer: 0,
        explanation: "Khi thực dân Pháp bội ước gửi tối hậu thư đòi tước vũ khí của ta ở Hà Nội, Bác Hồ ra Lời kêu gọi Toàn quốc kháng chiến bất hủ: 'Ai có súng dùng súng. Ai có gươm dùng gươm... Hễ là người Việt Nam thì phải đứng lên đánh thực dân Pháp'."
    },
    {
        grade: "12", subject: "su", term: "GK2",
        question: "Cuộc chiến đấu anh dũng kiên cường suốt 60 ngày đêm (từ 19/12/1946 đến 17/02/1947) của Trung đoàn Thủ đô tại Hà Nội nhằm thực hiện nhiệm vụ chiến lược gì?",
        options: ["Giam chân quân địch trong thành phố để Trung ương Đảng, Chính phủ và các cơ quan đầu não rút lên chiến khu an toàn", "Tiêu diệt hoàn toàn toàn bộ quân đội Pháp tại Đông Dương", "Giữ vững thành phố mãi mãi không rút lui", "Bắt sống tướng giặc Pháp tại sân bay Gia Lâm"],
        answer: 0,
        explanation: "Với tinh thần 'Quyết tử để Tổ quốc quyết sinh', các chiến sĩ Vệ quốc đoàn và Tự vệ Thủ đô đã biến từng căn nhà thành pháo đài giam chân địch 60 ngày đêm, tạo thời gian cho hậu phương kịp tản cư và chuyển sang thời chiến."
    },
    {
        grade: "12", subject: "su", term: "GK2",
        question: "Chiến dịch Việt Bắc thu - đông năm 1947 của quân dân ta đã đập tan hoàn toàn âm mưu chiến lược nào của thực dân Pháp?",
        options: ["Kế hoạch 'Đánh nhanh thắng nhanh' nhằm tiêu diệt đầu não kháng chiến của Pháp, buộc Pháp phải chuyển sang 'Đánh lâu dài'", "Kế hoạch lập phòng tuyến boong-ke quân sự", "Kế hoạch phong tỏa biên giới phía Bắc", "Kế hoạch dùng bom nguyên tử"],
        answer: 0,
        explanation: "Quân dân ta bẻ gãy hai gọng kìm đường bộ (đèo Bông Lau) và đường sông (sông Lô, Đoan Hùng) của giặc Pháp, bảo vệ an toàn tuyệt đối Trung ương Đảng và căn cứ địa Việt Bắc, bảo toàn lực lượng chủ lực."
    },
    {
        grade: "12", subject: "su", term: "GK2",
        question: "Ý nghĩa chiến lược quan trọng nhất của Chiến dịch Biên Giới thu - đông năm 1950 là gì?",
        options: ["Khai thông con đường liên lạc quốc tế nối liền kháng chiến Việt Nam với các nước XHCN (Trung Quốc, Liên Xô), ta giành quyền chủ động chiến lược trên chiến trường chính Bắc Bộ", "Kết thúc hoàn toàn cuộc kháng chiến chống Pháp", "Buộc Pháp phải kí Hiệp định Giơ-ne-vơ", "Giải phóng toàn bộ miền Nam"],
        answer: 0,
        explanation: "Sau chiến thắng Biên Giới (đánh tan cụm cứ điểm Đông Khê, Thất Khê), ta khai thông tuyến biên giới dài 750 km, phá vỡ thế bao vây cô lập của địch, đánh dấu bước chuyển từ đánh du kích sang đánh vận động chiến công kiên."
    },
    {
        grade: "12", subject: "su", term: "GK2",
        question: "Tấm gương anh hùng lấy thân mình lấp lỗ châu mai để đồng đội xông lên tiêu diệt cứ điểm Đông Khê trong Chiến dịch Biên Giới 1950 là ai?",
        options: ["Anh hùng Phan Đình Giót", "Anh hùng La Văn Cầu", "Anh hùng Bế Văn Đàn", "Anh hùng Tô Vĩnh Diện"],
        answer: 0,
        explanation: "Trong trận đánh đồn Đông Khê mở màn chiến dịch Biên Giới (1950), La Văn Cầu nhờ đồng đội chặt đứt cánh tay bị thương tiếp tục ôm bộc phá; còn anh hùng Phan Đình Giót lấy thân mình chèn lỗ châu mai tại đồi Him Lam (Điện Biên Phủ 1954)."
    },
    {
        grade: "12", subject: "su", term: "GK2",
        question: "Đại hội đại biểu toàn quốc lần thứ II của Đảng (tháng 02/1951) tại Chiêm Hóa (Tuyên Quang) đã quyết định đổi tên Đảng thành:",
        options: ["Đảng Lao động Việt Nam", "Đảng Cộng sản Đông Dương", "Đảng Dân chủ Việt Nam", "Đảng Xã hội Việt Nam"],
        answer: 0,
        explanation: "Đại hội II (được gọi là Đại hội Kháng chiến thắng lợi) đưa Đảng ra hoạt động công khai với tên gọi Đảng Lao động Việt Nam, bầu Hồ Chí Minh làm Chủ tịch Đảng và Trường Chinh làm Tổng Bí thư."
    },
    {
        grade: "12", subject: "su", term: "GK2",
        question: "Kế hoạch Na-va (Navas) do Pháp và Mỹ vạch ra năm 1953 nhằm mục tiêu tối cao là gì?",
        options: ["Xoay chuyển cục diện chiến tranh Đông Dương, trong vòng 18 tháng giành một thắng lợi quân sự quyết định để 'kết thúc chiến tranh trong danh dự'", "Rút toàn bộ quân Pháp về nước ngay lập tức", "Xâm chiếm toàn bộ các nước Đông Nam Á", "Bảo vệ hòa bình cho nhân dân ba nước Đông Dương"],
        answer: 0,
        explanation: "Tướng Nava được Mỹ viện trợ tối đa tiền bạc và vũ khí lập kế hoạch tập trung quân cơ động, xây dựng Điện Biên Phủ thành 'pháo đài bất khả xâm phạm' để thách thức và nghiền nát quân chủ lực Việt Minh."
    },
    {
        grade: "12", subject: "su", term: "GK2",
        question: "Quyết định thay đổi phương châm tác chiến lịch sử của Đại tướng Tổng Tư lệnh Võ Nguyên Giáp tại mặt trận Điện Biên Phủ (ngày 26/01/1954) là gì?",
        options: ["Chuyển từ phương châm 'Đánh nhanh, thắng nhanh' sang 'ĐÁNH CHẮC, TIẾN CHẮC'", "Chuyển từ đánh đêm sang chỉ đánh ban ngày", "Rút toàn bộ đại bác về hậu phương không bắn", "Đầu hàng nhượng bộ trận địa cho địch"],
        answer: 0,
        explanation: "Nhận thấy địch tăng cường phòng ngự kiên cố thành tập đoàn cứ điểm liên hoàn, Đại tướng Võ Nguyên Giáp đã có 'quyết định khó khăn nhất trong cuộc đời chỉ huy': hoãn nổ súng, kéo pháo ra, chuyển sang 'Đánh chắc, tiến chắc'."
    },
    {
        grade: "12", subject: "su", term: "GK2",
        question: "Thời khắc lịch sử 17 giờ 30 phút ngày 07/05/1954 tại lòng chảo Điện Biên Phủ đánh dấu sự kiện chấn động địa cầu nào?",
        options: ["Lá cờ 'Quyết chiến Quyết thắng' tung bay trên nóc hầm tướng Đờ Cát (De Castries), toàn bộ tập đoàn cứ điểm Điện Biên Phủ bị tiêu diệt hoàn toàn", "Mỹ thả bom nguyên tử xuống Điện Biên Phủ", "Tướng Nava kí giấy bàn giao Đông Dương", "Quân Pháp rút chạy an toàn sang Lào"],
        answer: 0,
        explanation: "Sau 56 ngày đêm khoét núi ngủ hầm, mưa dầm cơm vắt, chiều 07/05/1954 quân ta công phá hầm chỉ huy, bắt sống tướng De Castries và toàn bộ ban tham mưu, kết thúc toàn thắng chiến dịch Điện Biên Phủ."
    },
    {
        grade: "12", subject: "su", term: "GK2",
        question: "Ý nghĩa lịch sử vĩ đại của Chiến thắng Điện Biên Phủ năm 1954 được nhà thơ Tố Hữu ca ngợi là:",
        options: ["'Lừng lẫy năm châu, chấn động địa cầu', đập tan chủ nghĩa thực dân cũ trên thế giới", "'Chiến dịch giải phóng hoàn toàn miền Nam'", "'Chiến dịch bảo vệ vững chắc biên giới Tây Nam'", "'Bước ngoặt đưa nước ta vào thế kỉ công nghiệp'"],
        answer: 0,
        explanation: "Chiến thắng Điện Biên Phủ đập tan ý chí xâm lược của thực dân Pháp và can thiệp Mỹ, buộc Pháp phải kí Hiệp định Giơnevơ công nhận độc lập của 3 nước Đông Dương, mở đầu cho sự sụp đổ của hệ thống thuộc địa trên toàn thế giới."
    },
    {
        grade: "12", subject: "su", term: "GK2",
        question: "Hiệp định Giơ-ne-vơ năm 1954 về chấm dứt chiến tranh ở Đông Dương quy định ranh giới quân sự tạm thời giữa hai miền Nam - Bắc Việt Nam tại:",
        options: ["Vĩ tuyến 17 (sông Bến Hải, tỉnh Quảng Trị)", "Vĩ tuyến 16 (dãy núi Bạch Mã)", "Vĩ tuyến 13 (đèo Cù Mông)", "Sông Gianh (Quảng Bình)"],
        answer: 0,
        explanation: "Hiệp định Giơnevơ quy định lấy vĩ tuyến 17 làm giới tuyến quân sự tạm thời để hai bên tập kết quân đội (quân Pháp rút về phía Nam, quân ta tập kết ra Bắc) và dự kiến tổng tuyển cử thống nhất sau 2 năm (tháng 7/1956)."
    },

    // ===================================================================
    // KHỐI 12 - LỊCH SỬ - CUỐI KÌ 2 (CK2 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "12", subject: "su", term: "CK2",
        question: "Phong trào 'Đồng khởi' (1959 - 1960) bùng nổ tiêu biểu nhất tại tỉnh nào ở miền Nam, tạo nên bước ngoặt chuyển cách mạng miền Nam từ thế giữ gìn lực lượng sang thế tiến công?",
        options: ["Tỉnh Bến Tre (gắn liền với đội quân tóc dài của nữ tướng Nguyễn Thị Định)", "Tỉnh Cà Mau", "Tỉnh Tây Ninh", "Tỉnh Quảng Nam"],
        answer: 0,
        explanation: "Từ phong trào Đồng khởi ở Mỏ Cày (Bến Tre) dưới ánh sáng Nghị quyết 15 của Đảng, làn sóng nổi dậy của quần chúng đã quét sạch bộ máy kìm kẹp tay sai Ngô Đình Diệm ở nông thôn, lập ra Mặt trận Dân tộc Giải phóng miền Nam."
    },
    {
        grade: "12", subject: "su", term: "CK2",
        question: "Chiến lược 'Chiến tranh đặc biệt' (1961 - 1965) của đế quốc Mỹ ở miền Nam Việt Nam được thực hiện bằng công thức cơ bản nào?",
        options: ["Quân đội tay sai Sài Gòn làm nòng cốt + Vũ khí, trang bị, cố vấn chỉ huy của Mỹ + Quốc sách 'Ấp chiến lược'", "Quân viễn chinh Mỹ trực tiếp tham chiến quy mô lớn", "Chỉ dùng bom rải thảm bằng máy bay B-52", "Dùng lính đánh thuê của các nước châu Phi"],
        answer: 0,
        explanation: "Chiến tranh đặc biệt dùng xương máu của người Việt đánh người Việt: quân đội Sài Gòn dưới sự chỉ huy của cố vấn Mỹ, sử dụng chiến thuật 'trực thăng vận', 'thiết xa vận' và gom dân lập ấp chiến lược nhằm 'tát nước bắt cá'."
    },
    {
        grade: "12", subject: "su", term: "CK2",
        question: "Chiến thắng quân sự nào của quân và dân miền Nam (ngày 02/01/1963) đã chứng minh khả năng quân ta hoàn toàn có thể đánh bại chiến thuật 'trực thăng vận' và 'thiết xa vận' của Mỹ?",
        options: ["Chiến thắng Ấp Bắc (tỉnh Mỹ Tho, nay thuộc Tiền Giang)", "Chiến thắng Bình Giã", "Chiến thắng Đồng Xoài", "Chiến thắng Vạn Tường"],
        answer: 0,
        explanation: "Trận Ấp Bắc là mốc son chói lọi, mở ra cao trào thi đua 'Thi đua Ấp Bắc, giết giặc lập công' trên khắp miền Nam, báo hiệu sự phá sản không thể tránh khỏi của chiến lược Chiến tranh đặc biệt."
    },
    {
        grade: "12", subject: "su", term: "CK2",
        question: "Chiến lược 'Chiến tranh cục bộ' (1965 - 1968) của Mỹ ở miền Nam khác với 'Chiến tranh đặc biệt' ở điểm cốt lõi nào?",
        options: ["Có sự tham gia tác chiến trực tiếp ồ ạt của Quân đội viễn chinh Mỹ và quân các nước đồng minh của Mỹ giữ vai trò chủ lực", "Mỹ rút hết toàn bộ cố vấn về nước", "Chỉ sử dụng máy bay không người lái", "Mỹ chuyển quyền chỉ huy hoàn toàn cho tướng Sài Gòn"],
        answer: 0,
        explanation: "Chiến tranh cục bộ là nấc thang chiến tranh cao nhất của Mỹ: ồ ạt đổ hơn nửa triệu lính viễn chinh Mỹ và chư hầu (Hàn Quốc, Úc, Thái Lan...) trực tiếp tham chiến, thực hiện các cuộc hành quân 'Tìm và diệt', 'Bình định'."
    },
    {
        grade: "12", subject: "su", term: "CK2",
        question: "Trận đánh phủ đầu quân viễn chinh Mỹ tại thôn Vạn Tường (Quảng Ngãi) tháng 08/1965 đã khẳng định chân lí lịch sử nào?",
        options: ["Quân và dân ta hoàn toàn có khả năng đánh bại quân viễn chinh Mỹ trên chiến trường, mở ra phong trào 'Tìm Mỹ mà đánh, lùng ngụy mà diệt'", "Quân Mỹ là lực lượng bất khả chiến bại", "Ta phải rút lui hoàn toàn sang Campuchia", "Mỹ lập tức tuyên bố đầu hàng"],
        answer: 0,
        explanation: "Trận Vạn Tường được ví như 'Ấp Bắc đối với quân Mỹ': một trung đoàn chủ lực ta đã đẩy lùi cuộc hành quân 'Ánh sáng sao' của gần 1 vạn lính thủy quân lục chiến Mỹ có xe tăng, máy bay yểm trợ, cổ vũ toàn miền Nam quyết tâm đánh Mỹ."
    },
    {
        grade: "12", subject: "su", term: "CK2",
        question: "Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân năm 1968 của quân và dân ta đã tạo ra bước ngoặt chiến lược quyết định nào?",
        options: ["Làm lung lay tận gốc rễ ý chí xâm lược của giới cầm quyền Mỹ, buộc Mỹ phải tuyên bố 'phi Mỹ hóa' chiến tranh, ngừng ném bom miền Bắc và chấp nhận ngồi vào bàn đàm phán tại Pari", "Giải phóng hoàn toàn miền Nam ngay trong đêm giao thừa", "Buộc Mỹ phải rút toàn bộ quân về nước trong vòng 24 giờ", "Kết thúc toàn bộ cuộc kháng chiến"],
        answer: 0,
        explanation: "Đòn tập kích đồng loạt vào các sào huyệt đầu não (Tòa Đại sứ Mỹ, Dinh Độc Lập, Bộ Tổng tham mưu Sài Gòn) đêm Giao thừa Tết Mậu Thân 1968 gây chấn động nước Mỹ, làm sụp đổ chiến lược Chiến tranh cục bộ."
    },
    {
        grade: "12", subject: "su", term: "CK2",
        question: "Chiến thắng vang dội 12 ngày đêm cuối tháng 12/1972 của quân dân miền Bắc bắn rơi hàng chục siêu pháo đài bay B-52 của giặc Mỹ được vinh danh là:",
        options: ["Chiến thắng 'Điện Biên Phủ trên không' trên bầu trời Hà Nội - Hải Phòng", "Chiến thắng đường 9 Nam Lào", "Chiến dịch Tây Nguyên", "Chiến thắng Quảng Trị"],
        answer: 0,
        explanation: "Cuộc tập kích chiến lược bằng B-52 của Nixon nhằm 'đưa miền Bắc về thời kì đồ đá' đã bị lưới lửa phòng không nhân dân ta bẻ gãy, bắn rơi 81 máy bay (trong đó có 34 chiếc B-52), buộc Mỹ phải kí Hiệp định Pari."
    },
    {
        grade: "12", subject: "su", term: "CK2",
        question: "Hiệp định Pa-ri (Paris) về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam chính thức được kí kết vào ngày tháng năm nào?",
        options: ["Ngày 27/01/1973", "Ngày 20/07/1954", "Ngày 30/04/1975", "Ngày 02/09/1969"],
        answer: 0,
        explanation: "Ngày 27/01/1973 tại Paris, 4 bên tham chiến đã kí Hiệp định Paris: Mỹ cam kết tôn trọng độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam, rút hết toàn bộ quân viễn chinh Mỹ về nước (thực hiện 'Đánh cho Mỹ cút')."
    },
    {
        grade: "12", subject: "su", term: "CK2",
        question: "Chiến dịch mở màn cho cuộc Tổng tiến công và nổi dậy mùa Xuân năm 1975 giải phóng hoàn toàn miền Nam là chiến dịch nào?",
        options: ["Chiến dịch Tây Nguyên (bắt đầu bằng đòn điểm huyệt Buôn Ma Thuột ngày 10/03/1975)", "Chiến dịch Huế - Đà Nẵng", "Chiến dịch Hồ Chí Minh", "Chiến dịch Đường 14 - Phước Long"],
        answer: 0,
        explanation: "Chiến dịch Tây Nguyên mở màn bằng đòn sấm sét đánh trúng yết hầu Buôn Ma Thuột khiến địch hoảng loạn rút chạy tan tác khỏi Tây Nguyên, chuyển cuộc tiến công chiến lược thành cuộc Tổng tiến công trên toàn miền Nam."
    },
    {
        grade: "12", subject: "su", term: "CK2",
        question: "Chiến dịch giải phóng Sài Gòn - Gia Định trong cuộc Tổng tiến công mùa Xuân 1975 đã được Bộ Chính trị quyết định mang tên vĩ đại nào?",
        options: ["Chiến dịch Hồ Chí Minh (bắt đầu từ ngày 26/04 đến 30/04/1975)", "Chiến dịch Quang Trung", "Chiến dịch Lam Sơn 719", "Chiến dịch Giải phóng miền Nam"],
        answer: 0,
        explanation: "Ngày 14/04/1975, Bộ Chính trị phê chuẩn đổi tên chiến dịch giải phóng Sài Gòn thành 'Chiến dịch Hồ Chí Minh'. Với 5 cánh quân thần tốc, chiến dịch toàn thắng lúc 11h30 ngày 30/04/1975 cắm cờ trên Dinh Độc Lập."
    },
    {
        grade: "12", subject: "su", term: "CK2",
        question: "Thời khắc lịch sử 11 giờ 30 phút ngày 30/04/1975 đánh dấu mốc son chói lọi nào của dân tộc Việt Nam?",
        options: ["Xe tăng ta húc đổ cổng Dinh Độc Lập, Tổng thống Dương Văn Minh tuyên bố đầu hàng không điều kiện, miền Nam hoàn toàn giải phóng, non sông thu về một mối", "Mỹ bắt đầu rút quân", "Bắt đầu cuộc tổng tuyển cử bầu Quốc hội", "Hiệp định Pari có hiệu lực"],
        answer: 0,
        explanation: "Lá cờ Mặt trận Dân tộc Giải phóng tung bay trên nóc Dinh Độc Lập trưa 30/04/1975 đánh dấu sự toàn thắng của cuộc kháng chiến chống Mỹ cứu nước, non sông thống nhất, giang sơn thu về một mối sau 21 năm chia cắt."
    },
    {
        grade: "12", subject: "su", term: "CK2",
        question: "Cuộc chiến đấu anh dũng bảo vệ biên giới Tây Nam (năm 1978 - 1979) của quân đội và nhân dân ta nhằm đập tan cuộc xâm lấn của tập đoàn phản động nào?",
        options: ["Tập đoàn phản động Pôn Pốt - Iêng Xa-ri (Khmer Đỏ) và giúp nhân dân Campuchia thoát khỏi thảm họa diệt chủng", "Quân đội thực dân Pháp trở lại", "Quân đội can thiệp Mỹ", "Lính thủy đánh bộ Philippines"],
        answer: 0,
        explanation: "Quân dân ta đã kiên quyết đánh trả các cuộc thảm sát tàn bạo của tập đoàn Pol Pot dọc biên giới Tây Nam, đồng thời thực hiện nghĩa vụ quốc tế cao cả giúp đất nước chùa tháp Campuchia hồi sinh từ chế độ diệt chủng."
    },
    {
        grade: "12", subject: "su", term: "CK2",
        question: "Cuộc chiến đấu bảo vệ biên giới phía Bắc của Tổ quốc bắt đầu bùng nổ vào ngày tháng năm nào trên toàn tuyến 6 tỉnh biên giới phía Bắc?",
        options: ["Ngày 17/02/1979", "Ngày 30/04/1975", "Ngày 19/12/1946", "Ngày 22/12/1944"],
        answer: 0,
        explanation: "Sáng ngày 17/02/1979, quân và dân 6 tỉnh biên giới phía Bắc (Quảng Ninh, Lạng Sơn, Cao Bằng, Hà Tuyên, Hoàng Liên Sơn, Lai Châu) đã anh dũng đứng lên chiến đấu bảo vệ từng tấc đất thiêng liêng của Tổ quốc."
    },
    {
        grade: "12", subject: "su", term: "CK2",
        question: "Sự kiện lịch sử ngày 14/03/1988 tại bãi đá Gạc Ma (quần đảo Trường Sa) mãi mãi khắc ghi bản anh hùng ca bất tử về tinh thần nào của người lính Hải quân Việt Nam?",
        options: ["'Vòng tròn bất tử' - những người lính công binh và hải quân nắm chặt tay nhau quyết tử giữ cờ Tổ quốc trên đảo đá", "Cuộc tập trận bắn đạn thật quốc tế", "Lễ khánh thành ngọn hải đăng mới", "Cuộc đón tiếp đoàn thuyền đánh cá"],
        answer: 0,
        explanation: "64 cán bộ, chiến sĩ Hải quân nhân dân Việt Nam đã anh dũng hi sinh tại bãi đá Gạc Ma ngày 14/03/1988; các anh đã kết thành 'Vòng tròn bất tử' bảo vệ lá cờ đỏ sao vàng, khẳng định chủ quyền thiêng liêng của Tổ quốc."
    },
    {
        grade: "12", subject: "su", term: "CK2",
        question: "Bài học lịch sử lớn nhất rút ra từ toàn bộ tiến trình lịch sử kháng chiến và xây dựng đất nước của dân tộc Việt Nam là gì?",
        options: ["Kiên định mục tiêu Độc lập dân tộc gắn liền với Chủ nghĩa xã hội; dựa vào sức mạnh của toàn dân; kết hợp sức mạnh dân tộc với sức mạnh thời đại", "Chỉ trông chờ ỷ lại vào sự bảo hộ của các cường quốc", "Đóng cửa khép kín không giao lưu quốc tế", "Hy sinh quyền lợi dân tộc vì lợi ích ngoại bang"],
        answer: 0,
        explanation: "Bài học xuyên suốt lịch sử dân tộc là bài học về lòng yêu nước, tinh thần tự lực tự cường, bài học 'Ý Đảng - Lòng dân', phát huy sức mạnh khối đại đoàn kết toàn dân tộc kết hợp với xu thế thời đại để xây dựng và bảo vệ vững chắc Tổ quốc."
    },

    // ===================================================================
    // KHỐI 12 - GDKT&PL - GIỮA KÌ 1 (GK1 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "12", subject: "gdktpl", term: "GK1",
        question: "Khái niệm 'Tăng trưởng kinh tế' (Economic Growth) được hiểu chuẩn xác là gì?",
        options: ["Sự gia tăng về quy mô sản lượng hàng hóa và dịch vụ được tạo ra trong một nền kinh tế trong một khoảng thời gian nhất định (thường đo bằng tốc độ tăng GDP hoặc GNI)", "Sự gia tăng số lượng dân số của một quốc gia", "Việc tăng mức thuế giá trị gia tăng của nhà nước", "Sự mở rộng diện tích lãnh thổ của một nước"],
        answer: 0,
        explanation: "Tăng trưởng kinh tế phản ánh sự gia tăng thuần túy về mặt lượng của nền kinh tế, biểu thị bằng sự tăng lên của Tổng sản phẩm quốc nội (GDP) hoặc Tổng thu nhập quốc dân (GNI) qua các năm."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK1",
        question: "Điểm khác biệt căn bản giữa 'Phát triển kinh tế' (Economic Development) so với 'Tăng trưởng kinh tế' là gì?",
        options: ["Phát triển kinh tế là quá trình biến đổi toàn diện, bao gồm tăng trưởng kinh tế gắn liền với sự chuyển dịch cơ cấu kinh tế tiến bộ và tiến bộ, công bằng xã hội", "Phát triển kinh tế chỉ tính riêng số lượng nhà máy mới xây dựng", "Tăng trưởng kinh tế bao quát hơn phát triển kinh tế", "Hai khái niệm này hoàn toàn đồng nghĩa và thay thế nhau trong mọi trường hợp"],
        answer: 0,
        explanation: "Tăng trưởng chỉ là sự gia tăng về quy mô sản lượng; còn phát triển kinh tế bao hàm cả chất lượng: tăng trưởng đi đôi với cơ cấu kinh tế hợp lí, nâng cao chất lượng cuộc sống, giảm nghèo và bảo vệ môi trường."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK1",
        question: "Chỉ tiêu 'GDP bình quân đầu người' được tính toán bằng cách nào và phản ánh điều gì?",
        options: ["Lấy tổng GDP của quốc gia chia cho tổng dân số tại một thời điểm nhất định; phản ánh mức thu nhập và năng suất lao động trung bình của mỗi người dân", "Lấy tổng GDP nhân với số người cao tuổi", "Lấy tổng tiền ngân sách chia cho số học sinh", "Lấy giá trị xuất khẩu chia cho giá trị nhập khẩu"],
        answer: 0,
        explanation: "GDP/người là thước đo tương đối phản ánh mức sống, năng suất lao động và tiềm lực kinh tế bình quân của người dân một quốc gia, là căn cứ quan trọng để so sánh trình độ phát triển giữa các nước."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK1",
        question: "Mối quan hệ biện chứng giữa 'Tăng trưởng kinh tế' và 'Tiến bộ, công bằng xã hội' trong định hướng XHCN ở Việt Nam được xác định là:",
        options: ["Không chờ kinh tế đạt tới trình độ phát triển cao rồi mới thực hiện tiến bộ và công bằng xã hội, mà thực hiện tiến bộ và công bằng xã hội trong từng bước, từng chính sách phát triển", "Hy sinh công bằng xã hội để đổi lấy tăng trưởng kinh tế bằng mọi giá", "Chỉ chăm lo chia đều của cải mà không cần tăng trưởng kinh tế", "Coi hai mục tiêu này hoàn toàn triệt tiêu lẫn nhau"],
        answer: 0,
        explanation: "Đảng ta nhất quán quan điểm: Thực hiện tiến bộ và công bằng xã hội ngay trong từng bước và từng chính sách phát triển; không đánh đổi môi trường, an sinh xã hội để chạy theo tăng trưởng kinh tế đơn thuần."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK1",
        question: "Khái niệm 'Hội nhập kinh tế quốc tế' được định nghĩa là:",
        options: ["Quá trình một quốc gia gắn kết nền kinh tế của mình với nền kinh tế khu vực và thế giới thông qua các nỗ lực tự do hóa và mở cửa thị trường trên các cấp độ", "Sự lệ thuộc hoàn toàn vào một cường quốc tư bản lớn", "Việc từ bỏ chủ quyền biên giới quốc gia", "Chỉ xuất khẩu hàng hóa mà không cho phép nhập khẩu hàng nước ngoài"],
        answer: 0,
        explanation: "Hội nhập kinh tế quốc tế là sự chủ động tham gia vào phân công lao động quốc tế, dỡ bỏ rào cản thương mại, áp dụng các chuẩn mực kinh tế chung để tối ưu hóa nguồn lực phát triển quốc gia."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK1",
        question: "Căn cứ vào phạm vi và số lượng chủ thể tham gia, các cấp độ hội nhập kinh tế quốc tế gồm có:",
        options: ["Hội nhập kinh tế song phương (giữa 2 nước), Hội nhập kinh tế khu vực (như ASEAN, EU) và Hội nhập kinh tế toàn cầu (như WTO)", "Hội nhập cấp tỉnh, cấp huyện và cấp xã", "Hội nhập gia đình và hội nhập bạn bè", "Hội nhập trong nước và ngoài nước"],
        answer: 0,
        explanation: "Hội nhập diễn ra theo các nấc thang từ hẹp đến rộng: Song phương (Hiệp định thương mại Việt - Mỹ BTA), Khu vực (Cộng đồng kinh tế ASEAN, CPTPP, EVFTA) và Toàn cầu (Tổ chức Thương mại Thế giới WTO)."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK1",
        question: "Cơ hội to lớn nhất mà hội nhập kinh tế quốc tế mang lại cho nền kinh tế Việt Nam là gì?",
        options: ["Mở rộng thị trường xuất khẩu, thu hút nguồn vốn FDI, tiếp thu khoa học công nghệ hiện đại và tạo việc làm nâng cao thu nhập cho nhân dân", "Không cần phải cải cách thủ tục hành chính", "Tự động triệt tiêu mọi áp lực cạnh tranh của doanh nghiệp", "Nhà nước không cần chi tiền cho giáo dục"],
        answer: 0,
        explanation: "Hội nhập giúp hàng hóa Việt Nam vươn ra biển lớn toàn cầu, tiếp cận các thị trường khó tính (Mỹ, EU, Nhật Bản), thu hút công nghệ bán dẫn, trí tuệ nhân tạo và tạo ra hàng triệu việc làm thu nhập tốt."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK1",
        question: "Thách thức gay gắt nhất mà các doanh nghiệp Việt Nam phải đối mặt khi mở cửa hội nhập kinh tế sâu rộng là gì?",
        options: ["Sức ép cạnh tranh khốc liệt từ các tập đoàn đa quốc gia có tiềm lực tài chính hùng hậu, công nghệ tiên tiến và thương hiệu toàn cầu", "Không được bán hàng cho người tiêu dùng trong nước", "Bị cấm tuyển dụng lao động có tay nghề cao", "Không được sử dụng mạng Internet quốc tế"],
        answer: 0,
        explanation: "Các doanh nghiệp trong nước (chủ yếu quy mô vừa và nhỏ) phải cạnh tranh trực tiếp với hàng ngoại giá rẻ, chất lượng cao; nếu không đổi mới công nghệ và quản trị sẽ đối mặt với nguy cơ bị thâu tóm hoặc phá sản."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK1",
        question: "Nguyên tắc cốt lõi hàng đầu của Việt Nam khi tham gia hội nhập kinh tế quốc tế là gì?",
        options: ["Tôn trọng độc lập, chủ quyền và toàn vẹn lãnh thổ; bình đẳng, cùng có lợi; bảo đảm giữ vững an ninh quốc gia và bản sắc văn hóa dân tộc", "Nhượng bộ chủ quyền lãnh thổ để đổi lấy viện trợ kinh tế", "Chỉ làm theo mọi mệnh lệnh đơn phương của các nước giàu", "Từ bỏ mục tiêu chủ nghĩa xã hội"],
        answer: 0,
        explanation: "Đảng và Nhà nước ta luôn xác định: Hội nhập nhưng không hòa tan, giữ vững độc lập tự chủ về đường lối chính trị - kinh tế, kết hợp hài hòa lợi ích quốc gia với nghĩa vụ quốc tế."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK1",
        question: "Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương (CPTPP) mà Việt Nam là thành viên sáng lập được gọi là hiệp định thương mại tự do kiểu mới vì:",
        options: ["Không chỉ cắt giảm thuế quan tới 99% mà còn đặt ra các tiêu chuẩn rất cao về lao động, môi trường, sở hữu trí tuệ và minh bạch mua sắm công", "Chỉ bàn về việc mua bán lúa gạo", "Chỉ có các nước châu Âu tham gia", "Không đòi hỏi bất kì quy tắc xuất xứ nào"],
        answer: 0,
        explanation: "CPTPP là FTA thế hệ mới tiêu chuẩn cao: xóa bỏ gần như toàn bộ thuế quan, cam kết bảo vệ môi trường, không trợ cấp bất bình đẳng cho doanh nghiệp nhà nước và tôn trọng tiêu chuẩn lao động của ILO."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK1",
        question: "Để vượt qua các 'Hàng rào kĩ thuật trong thương mại' (TBT) và 'Tiêu chuẩn xanh' của các thị trường khó tính (như EU, Mỹ), các doanh nghiệp xuất khẩu Việt Nam cần làm gì?",
        options: ["Chuyển đổi sản xuất xanh, giảm phát thải carbon, đạt chứng nhận quốc tế về an toàn vệ sinh thực phẩm (HACCP, GlobalGAP) và trách nhiệm xã hội", "Chỉ dán nhãn mác giả để đánh lừa hải quan", "Chuyển sang dùng các hóa chất bảo quản bị quốc tế cấm", "Ngừng xuất khẩu và chỉ bán hàng tồn trong nước"],
        answer: 0,
        explanation: "Các thị trường phát triển đang áp dụng cơ chế điều chỉnh biên giới carbon (CBAM) và quy định chống phá rừng (EUDR); doanh nghiệp Việt Nam buộc phải xanh hóa chuỗi cung ứng, minh bạch nguồn gốc xuất xứ mới có thể xuất khẩu."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK1",
        question: "Hiện tượng 'Chảy máu chất xám' trong quá trình toàn cầu hóa và hội nhập quốc tế là hiện tượng:",
        options: ["Sự dịch chuyển của nguồn nhân lực có trình độ cao, các nhà khoa học, chuyên gia giỏi từ các nước đang phát triển sang định cư và làm việc lâu dài tại các nước phát triển", "Bệnh lí suy giảm trí nhớ của người cao tuổi", "Sự xuất khẩu các phần mềm máy vi tính", "Việc các trường đại học đóng cửa"],
        answer: 0,
        explanation: "Chảy máu chất xám xảy ra khi nhân tài di cư sang các nước phát triển do chế độ đãi ngộ, môi trường nghiên cứu tốt hơn; đặt ra thách thức cho các nước đang phát triển trong việc trọng dụng và giữ chân nhân tài."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK1",
        question: "Thanh niên, học sinh Việt Nam cần chuẩn bị những phẩm chất và năng lực gì để trở thành 'Công dân toàn cầu' trong kỉ nguyên hội nhập?",
        options: ["Nắm vững kiến thức chuyên môn, thành thạo ngoại ngữ và công nghệ số, có tư duy phản biện, tôn trọng sự đa dạng văn hóa nhưng luôn giữ gìn lòng tự hào dân tộc", "Bắt chước mù quáng lối sống xa hoa thực dụng của nước ngoài", "Quên đi tiếng mẹ đẻ và truyền thống gia đình Việt Nam", "Chỉ quan tâm đến lợi ích cá nhân ích kỉ"],
        answer: 0,
        explanation: "Công dân toàn cầu thời đại mới là người có năng lực làm việc trong môi trường đa văn hóa, có trách nhiệm với các vấn đề toàn cầu (môi trường, hòa bình) và mang trong mình bản lĩnh, tâm hồn Việt Nam."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK1",
        question: "Hiệp định Đối tác Kinh tế Toàn diện Khu vực (RCEP) có hiệu lực từ năm 2022 tạo nên điều gì trên bản đồ kinh tế thế giới?",
        options: ["Khu vực thương mại tự do lớn nhất thế giới bao gồm 10 nước ASEAN và 5 nước đối tác (Trung Quốc, Nhật Bản, Hàn Quốc, Australia, New Zealand)", "Khối quân sự mới ở châu Á", "Liên minh tiền tệ sử dụng đồng tiền chung châu Á", "Tổ chức thay thế hoàn toàn Liên Hợp Quốc"],
        answer: 0,
        explanation: "RCEP bao gồm 15 quốc gia thành viên chiếm khoảng 30% dân số và 30% GDP toàn cầu, tạo ra thị trường khổng lồ thúc đẩy chuỗi cung ứng sản xuất và thương mại liên kết chặt chẽ ở khu vực châu Á - Thái Bình Dương."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK1",
        question: "Quan điểm 'Việt Nam là bạn, là đối tác tin cậy và là thành viên tích cực, có trách nhiệm trong cộng đồng quốc tế' thể hiện đường lối nào?",
        options: ["Đường lối đối ngoại độc lập, tự chủ, đa phương hóa, đa dạng hóa vì lợi ích quốc gia - dân tộc và vì hòa bình, hợp tác trên thế giới", "Chính sách đối ngoại đóng cửa cô lập", "Chính sách chỉ liên kết với một cường quốc quân sự", "Đường lối phó mặc vận mệnh cho các tổ chức quốc tế"],
        answer: 0,
        explanation: "Đường lối đối ngoại của Đại hội XIII của Đảng khẳng định vị thế và uy tín ngày càng cao của Việt Nam, chủ động đóng góp vào việc gìn giữ hòa bình LHQ và tham gia giải quyết các vấn đề chung của nhân loại."
    },

    // ===================================================================
    // KHỐI 12 - GDKT&PL - CUỐI KÌ 1 (CK1 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "12", subject: "gdktpl", term: "CK1",
        question: "Khái niệm 'Bảo hiểm' (Insurance) trong đời sống kinh tế - xã hội được hiểu chuẩn xác là:",
        options: ["Phương thức chuyển giao rủi ro tài chính, trong đó bên mua bảo hiểm đóng phí bảo hiểm để được bồi thường hoặc chi trả khi xảy ra sự kiện bảo hiểm đã thỏa thuận", "Một trò chơi cá cược đỏ đen may rủi", "Khoản tiền quyên góp từ thiện không hợp đồng", "Khoản vay tiền mặt bắt buộc phải trả lãi cao"],
        answer: 0,
        explanation: "Bảo hiểm là cơ chế chia sẻ rủi ro giữa số đông người tham gia; quỹ bảo hiểm hình thành từ phí bảo hiểm của các bên tham gia để bồi thường thiệt hại cho số ít người không may gặp rủi ro."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK1",
        question: "Chính sách 'Bảo hiểm xã hội' (Social Insurance) ở Việt Nam bao gồm hai loại hình cơ bản là:",
        options: ["Bảo hiểm xã hội bắt buộc và Bảo hiểm xã hội tự nguyện", "Bảo hiểm thân vỏ ô tô và bảo hiểm hàng hải", "Bảo hiểm cháy nổ nhà xưởng và bảo hiểm nhân thọ", "Bảo hiểm du lịch quốc tế và bảo hiểm tai nạn"],
        answer: 0,
        explanation: "Bảo hiểm xã hội là trụ cột an sinh do Nhà nước tổ chức: BHXH bắt buộc (áp dụng cho người lao động có hợp đồng lao động) và BHXH tự nguyện (cho phép lao động tự do tự lựa chọn mức đóng và phương thức đóng)."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK1",
        question: "Người tham gia Bảo hiểm y tế (Health Insurance) khi đi khám chữa bệnh đúng tuyến sẽ nhận được quyền lợi cốt lõi nào?",
        options: ["Được quỹ bảo hiểm y tế chi trả phần lớn hoặc toàn bộ chi phí khám chữa bệnh, tiền thuốc và phẫu thuật theo danh mục quy định", "Được cấp miễn phí một chiếc xe cứu thương riêng", "Được nhận toàn bộ tiền mặt chi tiêu cá nhân", "Được miễn trừ mọi nghĩa vụ công dân"],
        answer: 0,
        explanation: "Bảo hiểm y tế mang tính nhân văn sâu sắc, san sẻ gánh nặng tài chính viện phí khổng lồ cho người dân khi ốm đau bệnh tật, ngăn ngừa nguy cơ 'bẫy nghèo' do chi phí y tế gây ra."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK1",
        question: "Loại hình 'Bảo hiểm thương mại' (như bảo hiểm nhân thọ, bảo hiểm tài sản, bảo hiểm xe cơ giới) do các doanh nghiệp bảo hiểm hoạt động nhằm mục đích gì?",
        options: ["Bảo vệ tài chính trước rủi ro cho khách hàng và tìm kiếm lợi nhuận kinh doanh theo quy định của Luật Kinh doanh bảo hiểm", "Thực hiện chức năng thay thế kho bạc nhà nước", "Chỉ làm nhiệm vụ tài trợ xã hội phi lợi nhuận", "Chuyên thu hồi nợ xấu cho các ngân hàng"],
        answer: 0,
        explanation: "Bảo hiểm thương mại là dịch vụ tài chính hoạt động trên nguyên tắc thị trường, do các công ty bảo hiểm cung cấp trên cơ sở hợp đồng bảo hiểm tự nguyện nhằm tìm kiếm lợi nhuận và bù đắp rủi ro cho khách hàng."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK1",
        question: "Hệ thống 'An sinh xã hội' (Social Security) của một quốc gia có vai trò như thế nào đối với người dân?",
        options: ["Là 'lưới an toàn xã hội' bảo đảm mức sống tối thiểu, trợ giúp người dân vượt qua các biến cố rủi ro cuộc sống (ốm đau, già yếu, tai nạn, mất việc) và giảm nghèo bền vững", "Chỉ phục vụ riêng cho các tỉ phú giàu có", "Làm cho người lao động ỷ lại lười biếng hoàn toàn", "Chỉ có tác dụng trong thời kì bão lụt thiên tai lớn"],
        answer: 0,
        explanation: "An sinh xã hội là hệ thống các chính sách giúp bảo đảm cho mọi thành viên trong xã hội được an sinh, giảm thiểu rủi ro kinh tế - xã hội, thực hiện tiến bộ và công bằng xã hội."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK1",
        question: "Bốn trụ cột cơ bản của hệ thống An sinh xã hội ở Việt Nam hiện nay bao gồm:",
        options: ["Chính sách việc làm và thu nhập; Chính sách bảo hiểm xã hội và y tế; Chính sách trợ giúp xã hội; Chính sách giảm nghèo và dịch vụ xã hội cơ bản", "Chính sách nhà tù, trại giam, tòa án và công an", "Chính sách thuế xuất khẩu, nhập khẩu, thuế đất và thuế VAT", "Chính sách mua bán cổ phiếu, trái phiếu và tiền ảo"],
        answer: 0,
        explanation: "Bốn trụ cột an sinh vững chắc: 1. Phòng ngừa rủi ro (việc làm, giảm nghèo); 2. Giảm thiểu rủi ro (BHXH, BHYT, BHTN); 3. Khắc phục rủi ro (trợ giúp xã hội người tàn tật, neo đơn); 4. Tiếp cận dịch vụ cơ bản (giáo dục, y tế, nước sạch)."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK1",
        question: "Đối tượng nào sau đây thuộc diện được hưởng 'Trợ giúp xã hội thường xuyên' hàng tháng từ ngân sách nhà nước?",
        options: ["Trẻ em mồ côi cả cha lẫn mẹ không người nuôi dưỡng, người cao tuổi cô đơn nghèo khó và người khuyết tật đặc biệt nặng", "Sinh viên đại học có sức khỏe tốt đang tìm việc làm", "Người lao động vừa nhận tiền thưởng Tết", "Chủ doanh nghiệp đang kinh doanh có lãi"],
        answer: 0,
        explanation: "Trợ giúp xã hội là chính sách cứu trợ nhân đạo của Nhà nước dành cho những đối tượng yếu thế, không còn khả năng tự lao động nuôi sống bản thân (người tàn tật nặng, người già neo đơn, trẻ mồ côi)."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK1",
        question: "Khái niệm 'Kế hoạch kinh doanh' (Business Plan) là văn bản tổng thể trình bày:",
        options: ["Mục tiêu kinh doanh, chiến lược tiếp thị, kế hoạch sản xuất, cơ cấu tổ chức nhân sự và dự toán tài chính chi tiết của một dự án kinh doanh", "Danh sách các món ăn yêu thích của giám đốc công ty", "Biên bản họp phụ huynh học sinh cuối kì", "Nội quy kỉ luật trường học"],
        answer: 0,
        explanation: "Kế hoạch kinh doanh là 'tấm bản đồ chỉ đường' của doanh nghiệp, giúp người khởi nghiệp dự tính rõ ràng thị trường mục tiêu, chi phí vốn, doanh thu kì vọng, rủi ro và các bước hành động cụ thể để gọi vốn và thực thi."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK1",
        question: "Bước đầu tiên và quan trọng nhất khi bắt tay xây dựng một Kế hoạch kinh doanh là gì?",
        options: ["Xác định ý tưởng kinh doanh và phân tích nhu cầu của thị trường mục tiêu (khách hàng là ai, họ cần gì, đối thủ cạnh tranh là ai)", "Đi thuê ngay một mặt bằng đắt tiền nhất thành phố", "Mua sắm bàn ghế văn phòng thật sang trọng", "Vay ngân hàng số tiền tối đa có thể"],
        answer: 0,
        explanation: "Nghiên cứu thị trường và định hình rõ giá trị cốt lõi của sản phẩm là bước số 1; nếu không hiểu khách hàng và không biết đối thủ là ai thì mọi kế hoạch tài chính hay sản xuất sau đó đều sẽ thất bại."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK1",
        question: "Mô hình phân tích SWOT kinh điển trong quản trị kinh doanh giúp doanh nghiệp đánh giá 4 yếu tố nào?",
        options: ["Điểm mạnh (Strengths), Điểm yếu (Weaknesses), Cơ hội (Opportunities) và Thách thức (Threats)", "Số tiền vốn, Số nhân viên, Số máy tính và Số sản phẩm", "Tốc độ bán hàng, Giá thành sản xuất, Chi phí kho bãi và Lợi nhuận gộp", "Tên công ty, Logo, Khẩu hiệu và Địa chỉ email"],
        answer: 0,
        explanation: "SWOT là công cụ chiến lược: phân tích nội bộ doanh nghiệp (Điểm mạnh S, Điểm yếu W) kết hợp với phân tích môi trường bên ngoài (Cơ hội O, Thách thức T) để đề ra chiến lược kinh doanh tối ưu."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK1",
        question: "Trong phần 'Kế hoạch tài chính' của bản kế hoạch kinh doanh, chỉ số 'Điểm hòa vốn' (Break-even Point) cho biết điều gì?",
        options: ["Mức doanh thu hoặc số lượng sản phẩm bán ra mà tại đó tổng doanh thu vừa đủ bù đắp toàn bộ tổng chi phí bỏ ra (lợi nhuận bằng 0)", "Thời điểm doanh nghiệp thu được số tiền lãi 1 tỉ đồng", "Mức giá đắt nhất mà khách hàng có thể mua", "Số tiền nợ ngân hàng cần phải vay thêm"],
        answer: 0,
        explanation: "Điểm hòa vốn là cột mốc sống còn: dưới điểm này doanh nghiệp bị lỗ vốn, vượt qua điểm này doanh nghiệp bắt đầu có lãi thực sự; giúp chủ kinh doanh biết cần bán tối thiểu bao nhiêu đơn hàng mỗi tháng."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK1",
        question: "Chiến lược 'Marketing 4P' truyền thống trong kế hoạch tiếp thị sản phẩm bao gồm 4 yếu tố phối thức nào?",
        options: ["Sản phẩm (Product), Giá cả (Price), Kênh phân phối (Place) và Xúc tiến thương mại/Quảng bá (Promotion)", "Con người, Tiền bạc, Máy móc và Phương pháp", "Kế hoạch, Thực hiện, Kiểm tra và Điều chỉnh", "Chất lượng, Tốc độ, Uy tín và Thái độ"],
        answer: 0,
        explanation: "4P Marketing phối hợp nhịp nhàng: Product (sản phẩm đáp ứng nhu cầu), Price (giá cả cạnh tranh), Place (kênh phân phối thuận tiện) và Promotion (truyền thông, quảng bá hấp dẫn đến khách hàng)."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK1",
        question: "Rủi ro phổ biến nhất khiến nhiều dự án khởi nghiệp (Startup) của người trẻ bị thất bại trong năm đầu tiên là gì?",
        options: ["Sản phẩm không có nhu cầu thực tế trên thị trường, cạn kiệt dòng tiền dự phòng do quản lí tài chính kém và mâu thuẫn nội bộ đội ngũ", "Do nhà nước ban hành quá nhiều luật lệ bảo vệ người tiêu dùng", "Do khách hàng có quá nhiều tiền mua sắm", "Do ngân hàng cho vay vốn quá dễ dàng"],
        answer: 0,
        explanation: "Hơn 80% startup thất bại do làm ra sản phẩm không ai cần (No Market Need), đốt tiền quảng cáo vô tội vạ dẫn đến đứt gãy dòng tiền mặt trước khi kịp hòa vốn."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK1",
        question: "Học sinh THPT có thể áp dụng kĩ năng lập kế hoạch kinh doanh vào các hoạt động thực tế nào tại trường học?",
        options: ["Lập kế hoạch tổ chức gian hàng hội chợ xuân, kinh doanh đồ handmade gây quỹ từ thiện hoặc dự án câu lạc bộ khởi nghiệp học sinh", "Lập dự án chơi game ăn tiền trực tuyến", "Tổ chức cho vay tiền lấy lãi trong lớp", "Bán bài giải đề thi kiểm tra"],
        answer: 0,
        explanation: "Thực hành lập kế hoạch từ các dự án nhỏ (bán trà sữa hội trại, làm đồ thủ công tái chế) giúp học sinh trải nghiệm quản lí chi phí, phân công công việc, giao tiếp khách hàng và tư duy khởi nghiệp."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK1",
        question: "Phẩm chất quan trọng hàng đầu của một nhà khởi nghiệp kinh doanh thành công trong thế giới hiện đại là:",
        options: ["Tinh thần dám nghĩ dám làm, đam mê, kiên trì vượt khó, không ngại thất bại, có tầm nhìn đổi mới sáng tạo và đạo đức kinh doanh liêm chính", "Thói quen lươn lẹo trốn tránh trách nhiệm", "Chỉ thích làm giàu nhanh chóng bằng mọi thủ đoạn", "Sợ hãi trước mọi khó khăn rủi ro"],
        answer: 0,
        explanation: "Khởi nghiệp đòi hỏi bản lĩnh kiên cường trước nghịch cảnh, tinh thần học hỏi từ sai lầm, tư duy sáng tạo giải quyết vấn đề và cái tâm chân chính phụng sự khách hàng và xã hội."
    },

    // ===================================================================
    // KHỐI 12 - GDKT&PL - GIỮA KÌ 2 (GK2 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "12", subject: "gdktpl", term: "GK2",
        question: "Quyền 'Tự do kinh doanh' của công dân được Hiến pháp năm 2013 ghi nhận tại Điều 33 có nội dung cơ bản là:",
        options: ["Mọi người có quyền tự do kinh doanh trong những ngành nghề mà luật không cấm", "Mọi người có quyền buôn bán bất kì thứ gì kể cả ma túy và vũ khí", "Chỉ những người có bằng đại học mới được kinh doanh", "Công dân chỉ được kinh doanh khi có sự cho phép của chủ tịch xã"],
        answer: 0,
        explanation: "Điều 33 Hiến pháp 2013 khẳng định nguyên tắc tự do kinh doanh: công dân được tự do lựa chọn ngành nghề, hình thức tổ chức kinh tế, quy mô kinh doanh trong những ngành, nghề mà pháp luật không nghiêm cấm."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK2",
        question: "Nghĩa vụ pháp lí bắt buộc của mọi cá nhân, tổ chức khi tiến hành hoạt động sản xuất, kinh doanh là:",
        options: ["Đăng kí kinh doanh, nộp thuế đầy đủ theo quy định của pháp luật, bảo đảm quyền lợi người lao động và bảo vệ môi trường", "Chỉ cần nộp tiền cho công an phường", "Tự do xả nước thải ra sông suối mà không cần xử lí", "Được quyền ép buộc người lao động làm việc 24/24 giờ"],
        answer: 0,
        explanation: "Kinh doanh gắn liền với trách nhiệm xã hội: tuân thủ đăng kí kinh doanh, kê khai nộp thuế đúng hạn, bảo đảm an toàn vệ sinh lao động, bảo vệ quyền lợi người tiêu dùng và giữ gìn môi trường sống."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK2",
        question: "Theo Luật Bảo vệ quyền lợi người tiêu dùng, người tiêu dùng có các quyền cơ bản nào sau đây?",
        options: ["Được bảo đảm an toàn tính mạng, sức khỏe; được cung cấp thông tin chính xác về hàng hóa; được quyền khiếu nại, bồi thường thiệt hại khi hàng hóa có khuyết tật", "Được quyền vào cửa hàng lấy hàng hóa mà không trả tiền", "Được quyền đập phá tài sản của người bán nếu không thích", "Không có bất kì quyền lợi nào sau khi đã thanh toán"],
        answer: 0,
        explanation: "Người tiêu dùng được pháp luật bảo vệ nghiêm ngặt: quyền được an toàn, quyền được thông tin trung thực, quyền được lựa chọn, quyền được bồi thường thiệt hại và quyền yêu cầu giải quyết tranh chấp."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK2",
        question: "Hành vi kinh doanh nào sau đây xâm phạm nghiêm trọng quyền lợi người tiêu dùng và bị pháp luật nghiêm cấm?",
        options: ["Bán hàng hết hạn sử dụng, tẩm ướp hóa chất độc hại vào thực phẩm và quảng cáo gian dối sai lệch tính năng công dụng của thuốc chữa bệnh", "Công khai bảng giá niêm yết tại quầy thanh toán", "Hướng dẫn khách hàng cách kiểm tra mã vạch xuất xứ", "Thực hiện chính sách 1 đổi 1 trong vòng 7 ngày"],
        answer: 0,
        explanation: "Gian lận thương mại, bán thực phẩm bẩn, hàng giả, hàng nhái và lừa dối người tiêu dùng qua quảng cáo sai sự thật là các hành vi vi phạm pháp luật hình sự/hành chính bị xử lí nghiêm."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK2",
        question: "Quyền 'Học tập không hạn chế' của công dân có nghĩa là gì?",
        options: ["Công dân có quyền học từ bậc mầm non, tiểu học, trung học đến đại học, thạc sĩ, tiến sĩ theo quy định tuyển sinh của pháp luật", "Mọi người đều phải học cùng một ngành nghề giống nhau", "Nhà nước bắt buộc mọi công dân phải học đến bậc tiến sĩ", "Công dân có thể tự ý vào bất kì lớp học nào mà không cần thi tuyển"],
        answer: 0,
        explanation: "Quyền học tập không hạn chế thể hiện ở việc công dân có thể học từ thấp đến cao, không bị phân biệt đối xử bởi thành phần xuất thân, dân tộc, tôn giáo hay điều kiện kinh tế gia đình."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK2",
        question: "Quyền 'Học bất kì ngành nghề nào' của công dân được thực hiện dựa trên cơ sở nào?",
        options: ["Căn cứ vào năng khiếu, sở thích, nguyện vọng cá nhân và khả năng đáp ứng điều kiện tuyển sinh của cơ sở đào tạo", "Chỉ theo sự chỉ định áp đặt tuyệt đối của chính quyền địa phương", "Bốc thăm ngẫu nhiên không cần chọn lựa", "Theo lệnh bắt buộc của trường phổ thông"],
        answer: 0,
        explanation: "Công dân có quyền tự do lựa chọn ngành nghề mình yêu thích (y khoa, kĩ thuật, sư phạm, nghệ thuật, kinh tế...) phù hợp với năng lực bản thân và điều kiện gia đình."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK2",
        question: "Quyền 'Học thường xuyên, học suốt đời' (Lifelong Learning) nhằm mục đích cao đẹp gì?",
        options: ["Giúp mỗi người liên tục cập nhật tri thức mới, nâng cao trình độ chuyên môn, thích ứng với sự thay đổi của công nghệ và hoàn thiện bản thân", "Để tích lũy thật nhiều bằng cấp treo tường khoe mẽ", "Chỉ dành riêng cho những người chưa từng đi học phổ thông", "Chỉ áp dụng cho người làm việc trong cơ quan nhà nước"],
        answer: 0,
        explanation: "Học tập suốt đời qua sách báo, internet, các khóa đào tạo trực tuyến là chìa khóa để con người không bị tụt hậu trong kỉ nguyên bùng nổ tri thức và kinh tế số."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK2",
        question: "Quyền 'Sáng tạo' của công dân được pháp luật bảo hộ bao gồm các quyền cơ bản nào?",
        options: ["Quyền tác giả đối với tác phẩm văn học, nghệ thuật, âm nhạc; quyền sở hữu công nghiệp đối với sáng chế, kiểu dáng công nghiệp, nhãn hiệu", "Quyền tự ý sao chép truyện tranh của người khác đem bán kiếm tiền", "Quyền hack tài khoản ngân hàng để lấy mật khẩu", "Quyền tung tin đồn bịa đặt lên mạng xã hội"],
        answer: 0,
        explanation: "Quyền sáng tạo của công dân được bảo hộ qua Luật Sở hữu trí tuệ: quyền tác giả và quyền liên quan, quyền đối với sáng chế kĩ thuật, giải pháp hữu ích, nhãn hiệu thương mại và kiểu dáng công nghiệp."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK2",
        question: "Hành vi nào sau đây là hành vi xâm phạm nghiêm trọng 'Quyền tác giả' được bảo hộ theo luật định?",
        options: ["Sao chép lậu sách giáo khoa, in ấn xuất bản không xin phép tác giả hoặc đạo văn bài nghiên cứu khoa học của người khác nhận là của mình", "Trích dẫn một đoạn thơ ngắn trong bài thi có ghi rõ tên tác giả và nguồn", "Mua sách có bản quyền tại nhà sách", "Đọc sách tại thư viện công cộng"],
        answer: 0,
        explanation: "Đạo văn, sao chép lậu tác phẩm âm nhạc, phần mềm máy tính, sách báo mà không được sự đồng ý của tác giả là hành vi xâm phạm quyền tác giả, bị phạt tiền rất nặng và buộc tiêu hủy tang vật."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK2",
        question: "Quyền 'Được bảo vệ, chăm sóc sức khỏe' của công dân được Nhà nước bảo đảm thông qua chính sách nào?",
        options: ["Xây dựng mạng lưới y tế từ trung ương đến cơ sở, tiêm chủng mở rộng miễn phí cho trẻ em và mở rộng bao phủ bảo hiểm y tế toàn dân", "Chỉ cấp thuốc chữa bệnh miễn phí cho người giàu", "Cấm các phòng khám tư nhân hoạt động", "Chỉ chữa bệnh cho người sinh sống ở thành phố lớn"],
        answer: 0,
        explanation: "Hiến pháp khẳng định mọi người có quyền được bảo vệ, chăm sóc sức khỏe. Nhà nước ưu tiên đầu tư phát triển y tế cơ sở, y tế dự phòng, khám chữa bệnh cho đồng bào dân tộc thiểu số và trẻ dưới 6 tuổi."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK2",
        question: "Nghĩa vụ của công dân đối với việc bảo vệ các Di sản văn hóa dân tộc (di tích lịch sử, danh lam thắng cảnh) là gì?",
        options: ["Tôn trọng, bảo vệ, giữ gìn vệ sinh, không xâm hại di tích, cổ vật và kịp thời thông báo cho cơ quan chức năng khi phát hiện cổ vật bị xâm hại", "Tự ý khắc tên, vẽ bậy lên bia đá, vách tường di tích", "Đào bới cổ vật trong khu khảo cổ đem bán lấy tiền", "Tự ý đập phá các pho tượng cổ trong chùa"],
        answer: 0,
        explanation: "Luật Di sản văn hóa quy định bảo vệ di sản văn hóa là trách nhiệm của toàn dân; mọi hành vi chiếm đoạt, hủy hoại hoặc đào bới buôn bán trái phép cổ vật đều bị truy cứu trách nhiệm hình sự."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK2",
        question: "Hành vi người dân khi đào đất làm nhà phát hiện được một chiếc trống đồng cổ dưới lòng đất thì theo luật định phải xử lí như thế nào?",
        options: ["Thông báo và giao nộp ngay cho cơ quan chính quyền hoặc Bảo tàng địa phương (và được Nhà nước khen thưởng, bồi dưỡng theo quy định)", "Giấu kín đem bán cho người buôn lậu đồ cổ nước ngoài", "Tự ý đập nát đem nấu đúc thành dao kéo", "Chôn sâu hơn xuống đất để không ai biết"],
        answer: 0,
        explanation: "Mọi di vật, cổ vật, bảo vật quốc gia tìm thấy trong lòng đất đều thuộc sở hữu toàn dân do Nhà nước thống nhất quản lí; người phát hiện có nghĩa vụ giao nộp và được nhận khoản tiền thưởng xứng đáng."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK2",
        question: "Trách nhiệm của học sinh THPT trong việc thực hiện quyền học tập và phát triển bản thân là gì?",
        options: ["Xác định động cơ học tập đúng đắn, nỗ lực rèn luyện phẩm chất và năng lực, tích cực nghiên cứu khoa học và chuẩn bị định hướng nghề nghiệp tương lai", "Học đối phó chỉ để lấy điểm cao giả tạo bằng gian lận thi cử", "Lười nhác, ỷ lại vào bài làm của bạn", "Bỏ học đi chơi game thâu đêm suốt sáng"],
        answer: 0,
        explanation: "Học tập để lập thân, lập nghiệp, trở thành công dân có ích cho gia đình và Tổ quốc là trách nhiệm vẻ vang hàng đầu của mỗi học sinh khi ngồi trên ghế nhà trường phổ thông."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK2",
        question: "Nhà nước thực hiện chính sách 'Cộng điểm ưu tiên và cấp học bổng' cho học sinh vùng sâu, vùng xa, học sinh nghèo vượt khó nhằm mục đích gì?",
        options: ["Bảo đảm sự công bằng xã hội trong tiếp cận giáo dục, tạo điều kiện cho mọi tài năng đều có cơ hội phát triển cống hiến", "Thiên vị không có căn cứ pháp lí", "Làm cho kì thi không còn tính cạnh tranh", "Chỉ để làm hài lòng các tổ chức quốc tế"],
        answer: 0,
        explanation: "Chính sách ưu tiên giáo dục nhằm bù đắp những thiệt thòi về điều kiện kinh tế - xã hội, bảo đảm quyền bình đẳng thực chất về cơ hội học tập cho mọi trẻ em trên mọi miền đất nước."
    },
    {
        grade: "12", subject: "gdktpl", term: "GK2",
        question: "Học sinh THPT có thể phát huy Quyền sáng tạo của mình thông qua sân chơi trí tuệ nào sau đây?",
        options: ["Tham gia Cuộc thi Khoa học kĩ thuật dành cho học sinh trung học (KHKT), thi Tin học trẻ, sáng tạo robot và viết văn, sáng tác nghệ thuật", "Thi xem ai ngủ nướng được nhiều giờ nhất", "Tham gia các trò chơi cá cược trên mạng", "Chế tạo chất nổ tự phát gây nguy hiểm"],
        answer: 0,
        explanation: "Cuộc thi Sáng tạo KHKT học sinh trung học là vườn ươm tài năng, khuyến khích học sinh vận dụng kiến thức STEM vào giải quyết các bài toán thực tiễn cuộc sống (bảo vệ môi trường, thiết bị hỗ trợ người tàn tật...)."
    },

    // ===================================================================
    // KHỐI 12 - GDKT&PL - CUỐI KÌ 2 (CK2 - 15 CÂU) - CHƯƠNG TRÌNH GDPT 2018
    // ===================================================================
    {
        grade: "12", subject: "gdktpl", term: "CK2",
        question: "Theo Luật Bảo vệ môi trường của Việt Nam, nguyên tắc cốt lõi hàng đầu trong việc bảo vệ môi trường là:",
        options: ["Bảo vệ môi trường là quyền lợi, nghĩa vụ và trách nhiệm của mọi cơ quan, tổ chức, cộng đồng dân cư, hộ gia đình và cá nhân; lấy phòng ngừa là chính", "Chỉ riêng Bộ Tài nguyên và Môi trường mới phải bảo vệ môi trường", "Cứ xả thải thoải mái rồi nộp tiền phạt sau", "Môi trường tự làm sạch nên con người không cần quan tâm"],
        answer: 0,
        explanation: "Bảo vệ môi trường là sự nghiệp của toàn dân, phải hài hòa với phát triển kinh tế, thực hiện nguyên tắc 'Người gây ô nhiễm phải trả tiền', 'Người hưởng lợi từ môi trường phải chi trả' và ưu tiên phòng ngừa ô nhiễm."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK2",
        question: "Hành vi nào sau đây bị Luật Bảo vệ môi trường nghiêm cấm tuyệt đối?",
        options: ["Xả nước thải, khí thải chưa qua xử lí đạt quy chuẩn kĩ thuật ra môi trường; chôn lấp chất thải nguy hại trái phép", "Phân loại rác thải tại nguồn thành rác tái chế và rác hữu cơ", "Tham gia ngày Chủ nhật xanh dọn vệ sinh bờ biển", "Trồng thêm cây xanh trong khuôn viên trường học"],
        answer: 0,
        explanation: "Hành vi xả lén chất thải độc hại ra sông biển, chôn lấp chất thải nguy hại trái phép gây hủy hoại môi trường sống là tội ác môi trường, bị xử phạt hàng tỉ đồng hoặc xử lí hình sự về tội gây ô nhiễm môi trường."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK2",
        question: "Khái niệm 'Kinh tế tuần hoàn' (Circular Economy) trong chiến lược bảo vệ môi trường và tài nguyên nhấn mạnh vào chu trình nào?",
        options: ["Thiết kế sản phẩm để giảm thiểu phát thải, tái sử dụng, sửa chữa, tái chế và thu hồi nguyên vật liệu tối đa (biến rác thải thành tài nguyên)", "Khai thác tài nguyên thô rồi vứt bỏ ngay sau 1 lần dùng", "Chôn lấp toàn bộ rác thải xuống đáy đại dương", "Đốt sạch tất cả rác thải bằng lò thủ công"],
        answer: 0,
        explanation: "Kinh tế tuần hoàn thay thế mô hình kinh tế tuyến tính (khai thác - sản xuất - vứt bỏ) bằng chu trình khép kín: giảm thiểu (Reduce) - tái sử dụng (Reuse) - tái chế (Recycle), tiết kiệm tài nguyên và bảo vệ hệ sinh thái."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK2",
        question: "Nghĩa vụ thiêng liêng và quyền cao quý nhất của mọi công dân Việt Nam được khẳng định trang trọng tại Điều 45 Hiến pháp năm 2013 là:",
        options: ["Bảo vệ Tổ quốc là nghĩa vụ thiêng liêng và quyền cao quý của công dân; Công dân phải làm nghĩa vụ quân sự và tham gia xây dựng nền quốc phòng toàn dân", "Đi du lịch vòng quanh thế giới", "Kiếm thật nhiều tiền bằng mọi giá", "Chỉ tham gia bảo vệ quê hương khi có chiến tranh nổ ra"],
        answer: 0,
        explanation: "Điều 45 Hiến pháp năm 2013: Bảo vệ Tổ quốc Việt Nam XHCN là nghĩa vụ thiêng liêng và quyền cao quý của mỗi công dân; mọi hành vi phản bội Tổ quốc đều bị trừng trị nghiêm khắc nhất."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK2",
        question: "Theo Luật Nghĩa vụ quân sự hiện hành, độ tuổi gọi công dân nam nhập ngũ trong thời bình là bao nhiêu?",
        options: ["Từ đủ 18 tuổi đến hết 25 tuổi (công dân học đại học, cao đẳng được tạm hoãn thì gọi nhập ngũ đến hết 27 tuổi)", "Từ 15 tuổi đến 20 tuổi", "Từ đủ 20 tuổi đến 35 tuổi", "Từ 30 tuổi đến 45 tuổi"],
        answer: 0,
        explanation: "Luật Nghĩa vụ quân sự quy định: Công dân nam đủ 18 tuổi đến hết 25 tuổi gọi nhập ngũ; trường hợp được tạm hoãn để học đại học, cao đẳng chính quy thì độ tuổi gọi nhập ngũ kéo dài đến hết 27 tuổi."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK2",
        question: "Hành vi trốn tránh lệnh gọi nhập ngũ hoặc cản trở việc thực hiện nghĩa vụ quân sự sẽ bị xử lí như thế nào theo pháp luật?",
        options: ["Bị xử phạt vi phạm hành chính rất nặng hoặc bị truy cứu trách nhiệm hình sự về 'Tội trốn tránh nghĩa vụ quân sự'", "Chỉ bị nhắc nhở nhẹ nhàng", "Được miễn trừ nghĩa vụ mãi mãi", "Được khen thưởng bằng tiền mặt"],
        answer: 0,
        explanation: "Trốn tránh nghĩa vụ quân sự là hành vi vi phạm pháp luật nghiêm trọng: bị phạt tiền theo Nghị định 120/NĐ-CP và nếu tái phạm sẽ bị xử lí theo Điều 332 Bộ luật Hình sự với mức án đến 5 năm tù."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK2",
        question: "Nền quốc phòng của nước Cộng hòa xã hội chủ nghĩa Việt Nam được xác định mang tính chất gì?",
        options: ["Nền quốc phòng toàn dân, mang tính chất hòa bình, tự vệ và tự lực tự cường", "Nền quốc phòng quân phiệt xâm lược", "Liên minh quân sự tấn công phủ đầu các nước khác", "Hoàn toàn phụ thuộc vào vũ khí viện trợ nước ngoài"],
        answer: 0,
        explanation: "Chính sách quốc phòng của Việt Nam mang tính chất hòa bình, tự vệ: chủ trương 'Bốn không' (không liên minh quân sự; không cho nước ngoài đặt căn cứ; không liên kết chống nước thứ ba; không sử dụng vũ lực đe dọa vũ lực)."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK2",
        question: "Tuyên ngôn Quốc tế về Nhân quyền (UDHR) được Đại hội đồng Liên Hợp Quốc long trọng thông qua vào năm 1948 đã khẳng định chân lí mở đầu nào?",
        options: ["Tất cả mọi người sinh ra đều tự do và bình đẳng về nhân phẩm và các quyền", "Chỉ người giàu ở các nước phát triển mới có nhân quyền", "Nhân quyền do các nước lớn đơn phương ban phát", "Trẻ em không có bất kì quyền con người nào"],
        answer: 0,
        explanation: "Điều 1 Tuyên ngôn Quốc tế Nhân quyền (1948): 'Tất cả mọi người sinh ra đều được tự do và bình đẳng về nhân phẩm và các quyền. Họ được phú cho lí trí và lương tâm và cần phải đối xử với nhau trong tình huynh đệ'."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK2",
        question: "Công ước của Liên Hợp Quốc về Quyền trẻ em (CRC) năm 1989 mà Việt Nam là quốc gia đầu tiên ở châu Á phê chuẩn quy định 4 nhóm quyền cơ bản của trẻ em gồm:",
        options: ["Nhóm quyền Sống còn; Nhóm quyền Bảo vệ; Nhóm quyền Phát triển; Nhóm quyền Tham gia", "Nhóm quyền đi làm kiếm tiền; Quyền lái xe; Quyền bỏ phiếu; Quyền kết hôn", "Quyền tự do tiêu tiền; Quyền không cần học; Quyền chơi game; Quyền xem ti vi", "Chỉ có duy nhất một nhóm quyền được ăn uống"],
        answer: 0,
        explanation: "Việt Nam tự hào là nước đầu tiên ở châu Á và thứ 2 trên thế giới kí phê chuẩn Công ước CRC: bảo đảm cho trẻ em dưới 16 tuổi quyền được sống còn, quyền được bảo vệ khỏi bạo lực xâm hại, quyền phát triển học tập và quyền tham gia bày tỏ ý kiến."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK2",
        question: "Hành vi bạo hành, ngược đãi trẻ em hoặc bóc lột sức lao động của trẻ vị thành niên bị pháp luật Việt Nam và công ước quốc tế xử lí như thế nào?",
        options: ["Là hành vi vi phạm pháp luật đặc biệt nghiêm trọng, bị pháp luật nghiêm trị và xã hội lên án gay gắt", "Là việc dạy dỗ nội bộ gia đình không ai có quyền can thiệp", "Được coi là bình thường để rèn luyện ý chí", "Chỉ cần xin lỗi đứa trẻ là xong"],
        answer: 0,
        explanation: "Luật Trẻ em nghiêm cấm mọi hành vi bạo lực, bóc lột, xâm hại thể xác và tinh thần trẻ em. Kẻ bạo hành trẻ em sẽ bị xử lí nghiêm minh bằng các khung hình phạt tù thích đáng."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK2",
        question: "Một trong những nguyên tắc cơ bản hàng đầu của Hiến chương Liên Hợp Quốc điều chỉnh quan hệ giữa các quốc gia là:",
        options: ["Bình đẳng về chủ quyền giữa các quốc gia; Từ bỏ đe dọa bằng vũ lực hoặc sử dụng vũ lực trong quan hệ quốc tế", "Các nước lớn có quyền can thiệp vũ trang vào nước nhỏ", "Giải quyết mọi bất đồng bằng sức mạnh hạt nhân", "Các nước giàu có quyền định đoạt biên giới của nước nghèo"],
        answer: 0,
        explanation: "Hiến chương LHQ đặt ra các nguyên tắc vàng: Bình đẳng chủ quyền quốc gia; Tôn trọng toàn vẹn lãnh thổ và độc lập chính trị; Giải quyết tranh chấp quốc tế bằng biện pháp hòa bình; Không can thiệp vào công việc nội bộ."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK2",
        question: "Việc Việt Nam cử lực lượng Quân đội và Công an tham gia Phái bộ gìn giữ hòa bình Liên Hợp Quốc (tại Nam Xu-đăng, Cộng hòa Trung Phi) thể hiện điều gì?",
        options: ["Trách nhiệm cao cả và đóng góp tích cực của Việt Nam vào sứ mệnh bảo vệ hòa bình, an ninh quốc tế và nhân đạo toàn cầu", "Việt Nam đưa quân đội đi xâm chiếm lãnh thổ nước khác", "Việt Nam chuẩn bị gây chiến tranh khu vực", "Chỉ là hoạt động du lịch tham quan thuần túy"],
        answer: 0,
        explanation: "Các bệnh viện dã chiến cấp 2 và đội công binh Việt Nam tại các điểm nóng châu Phi được LHQ và người dân bản địa ca ngợi về tính chuyên nghiệp, y đức và tinh thần nhân ái cao cả, tỏa sáng hình ảnh 'Bộ đội Cụ Hồ'."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK2",
        question: "Tòa án Công lí Quốc tế (ICJ - trụ sở tại La Hay, Hà Lan) là cơ quan tư pháp chính của Liên Hợp Quốc có chức năng gì?",
        options: ["Giải quyết các tranh chấp pháp lí giữa các quốc gia theo luật pháp quốc tế và đưa ra các kết luận tư vấn về các vấn đề pháp lí quốc tế", "Xét xử các vụ trộm cắp xe đạp cá nhân", "Thu thuế thu nhập của công dân toàn cầu", "Cấp giấy phép lái xe quốc tế"],
        answer: 0,
        explanation: "ICJ là tòa án quốc tế giải quyết các vụ tranh chấp chủ quyền lãnh thổ, phân định ranh giới biển và các nghĩa vụ điều ước quốc tế giữa các quốc gia trên nền tảng luật pháp quốc tế."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK2",
        question: "Trước các luồng thông tin xấu độc, xuyên tạc chủ quyền biển đảo hoặc bôi nhọ đất nước trên không gian mạng, học sinh THPT cần thể hiện trách nhiệm công dân như thế nào?",
        options: ["Tỉnh táo nhận diện thông tin sai sự thật, không chia sẻ lan truyền, kiên quyết phản bác luận điệu xuyên tạc và tích cực lan tỏa thông điệp chính thống, tích cực", "Hùa theo chia sẻ câu like bất chấp hậu quả", "Tin tưởng tuyệt đối mọi bài viết giật gân trên TikTok", "Bình luận xúc phạm chửi bới vô căn cứ"],
        answer: 0,
        explanation: "Bảo vệ Tổ quốc trên không gian mạng là trách nhiệm của thế hệ trẻ: trang bị 'bộ lọc' tư duy phản biện, cảnh giác trước các thủ đoạn diễn biến hòa bình và thực hiện nghiêm túc Luật An ninh mạng."
    },
    {
        grade: "12", subject: "gdktpl", term: "CK2",
        question: "Hành động thiết thực và ý nghĩa nhất của thế hệ học sinh lớp 12 chuẩn bị tốt nghiệp để cống hiến cho sự nghiệp bảo vệ và xây dựng Tổ quốc là gì?",
        options: ["Nỗ lực học tập rèn luyện tốt, trung thực, sống có lí tưởng hoài bão, sẵn sàng thực hiện nghĩa vụ quân sự và cống hiến tài năng trí tuệ dựng xây quê hương giàu mạnh", "Chỉ mong muốn kiếm tiền nhanh chóng bằng mọi giá", "Sống ích kỉ, thờ ơ trước vận mệnh của đất nước", "Ỷ lại hoàn toàn vào sự bảo bọc của cha mẹ"],
        answer: 0,
        explanation: "'Đâu cần thanh niên có, đâu khó có thanh niên': thế hệ trẻ hôm nay tiếp bước cha anh, rèn đức luyện tài, nuôi dưỡng khát vọng cống hiến vì một Việt Nam hùng cường, phồn vinh và hạnh phúc."
    }
];
