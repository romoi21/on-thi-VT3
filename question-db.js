// =========================================================================
// NGÂN HÀNG CÂU HỎI KHỐI 11 - 4 KÌ (ĐỦ 15 CÂU/KÌ: TOÁN, LÝ, ANH, VĂN, HÓA, SINH) - NHÓM K71
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
    }
];