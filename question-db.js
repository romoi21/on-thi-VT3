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
    }
];