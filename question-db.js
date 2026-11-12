// =========================================================================
// NGÂN HÀNG CÂU HỎI KHỐI 11 - GK1 (ĐỦ 15 CÂU/MÔN: TOÁN, LÝ, ANH) - NHÓM K71
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
    }
];