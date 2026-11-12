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
    }
];