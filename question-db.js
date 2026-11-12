// =========================================================================
// NGÂN HÀNG CÂU HỎI KHỐI 11 (TOÁN, LÝ, ANH) - ĐÃ KIỂM CHỨNG - NHÓM K71
// =========================================================================

const QUESTION_BANK = [

    // ===================================================================
    // 1. MÔN TOÁN - KHỐI 11
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
        question: "Tập xác định của hàm số y = tan(x) là:",
        options: ["ℝ \\ {π/2 + kπ, k ∈ ℤ}", "ℝ \\ {kπ, k ∈ ℤ}", "ℝ \\ {π/2 + k2π, k ∈ ℤ}", "ℝ"],
        answer: 0,
        explanation: "tan(x) xác định khi cos(x) ≠ 0 ⇔ x ≠ π/2 + kπ (k ∈ ℤ)."
    },
    {
        grade: "11", subject: "toan", term: "CK1",
        question: "Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Giao tuyến của hai mặt phẳng (SAB) và (SCD) là:",
        options: [
            "Đường thẳng qua S và song song với AB, CD",
            "Đường thẳng qua S và cắt đường thẳng AB",
            "Đường chéo AC",
            "Đường chéo BD"
        ],
        answer: 0,
        explanation: "Theo tính chất hình học không gian, giao tuyến của hai mặt phẳng chứa hai đường thẳng song song là đường thẳng đi qua điểm chung và song song với các đường thẳng đó."
    },
    {
        grade: "11", subject: "toan", term: "CK1",
        question: "Đạo hàm của hàm số y = sin(x) là:",
        options: ["y' = cos(x)", "y' = -cos(x)", "y' = -sin(x)", "y' = 1/cos²(x)"],
        answer: 0,
        explanation: "Theo bảng đạo hàm các hàm số lượng giác cơ bản: (sin x)' = cos x."
    },
    {
        grade: "11", subject: "toan", term: "GK2",
        question: "Cho cấp số cộng (uₙ) có u₁ = 3 và công sai d = 2. Số hạng thứ 5 của cấp số cộng là:",
        options: ["11", "13", "9", "15"],
        answer: 0,
        explanation: "Công thức số hạng tổng quát: uₙ = u₁ + (n - 1)d ⇒ u₅ = 3 + 4×2 = 11."
    },
    {
        grade: "11", subject: "toan", term: "CK2",
        question: "Cho hàm số y = f(x) có đạo hàm liên tục trên ℝ. Khẳng định nào sau đây là đúng về tiếp tuyến tại điểm có hoành độ x₀?",
        options: [
            "Hệ số góc của tiếp tuyến là k = f'(x₀)",
            "Hệ số góc của tiếp tuyến là k = f(x₀)",
            "Phương trình tiếp tuyến là y = f(x₀)(x - x₀)",
            "Hệ số góc k = 1 / f'(x₀)"
        ],
        answer: 0,
        explanation: "Ý nghĩa hình học của đạo hàm: Hệ số góc của tiếp tuyến của đồ thị hàm số tại điểm M(x₀, f(x₀)) là k = f'(x₀)."
    },

    // ===================================================================
    // 2. MÔN VẬT LÍ - KHỐI 11
    // ===================================================================
    {
        grade: "11", subject: "ly", term: "GK1",
        question: "Trong dao động điều hòa, đại lượng nào sau đây luôn dương?",
        options: ["Biên độ dao động A", "Li độ x", "Vận tốc v", "Gia tốc a"],
        answer: 0,
        explanation: "Biên độ A là độ lệch cực đại so với vị trí cân bằng nên luôn mang giá trị dương (A > 0)."
    },
    {
        grade: "11", subject: "ly", term: "GK1",
        question: "Gia tốc trong dao động điều hòa biến đổi điều hòa:",
        options: ["Ngược pha với li độ", "Cùng pha với li độ", "Sớm pha π/2 so với li độ", "Trễ pha π/2 so với li độ"],
        answer: 0,
        explanation: "Vì phương trình gia tốc a = -ω²x nên gia tốc luôn ngược pha với li độ x."
    },
    {
        grade: "11", subject: "ly", term: "CK1",
        question: "Sóng cơ truyền trong một môi trường thì tốc độ truyền sóng phụ thuộc vào yếu tố nào?",
        options: ["Bản chất của môi trường truyền sóng", "Tần số của sóng", "Biên độ của sóng", "Năng lượng sóng"],
        answer: 0,
        explanation: "Tốc độ truyền sóng (vận tốc truyền âm/sóng) chỉ phụ thuộc vào bản chất của môi trường (độ đàn hồi, mật độ môi trường)."
    },
    {
        grade: "11", subject: "ly", term: "GK2",
        question: "Cường độ dòng điện chạy qua một đoạn mạch điện xoay chiều có biểu thức i = 2cos(100πt) (A). Giá trị hiệu dụng của dòng điện này là:",
        options: ["√2 A", "2 A", "2√2 A", "1 A"],
        answer: 0,
        explanation: "Cường độ dòng điện cực đại I₀ = 2 A. Cường độ hiệu dụng I = I₀ / √2 = 2 / √2 = √2 (A)."
    },
    {
        grade: "11", subject: "ly", term: "CK2",
        question: "Hiện tượng khúc xạ ánh sáng là hiện tượng ánh sáng khi truyền qua mặt phân cách giữa hai môi trường trong suốt khác nhau bị:",
        options: [
            "Đổi hướng truyền (lệch phương)",
            "Phản xạ hoàn toàn trở lại môi trường cũ",
            "Bị hấp thụ hoàn toàn",
            "Tăng tốc độ truyền"
        ],
        answer: 0,
        explanation: "Khúc xạ ánh sáng là hiện tượng đổi hướng truyền khi đi qua mặt phân cách giữa hai môi trường trong suốt có chiết suất khác nhau."
    },

    // ===================================================================
    // 3. MÔN TIẾNG ANH - KHỐI 11
    // ===================================================================
    {
        grade: "11", subject: "anh", term: "GK1",
        question: "Choose the correct word: Regular exercise helps increase your life _______.",
        options: ["expectancy", "expectation", "expectant", "expecting"],
        answer: 0,
        explanation: "Cụm danh từ cố định 'life expectancy' mang ý nghĩa là tuổi thọ trung bình."
    },
    {
        grade: "11", subject: "anh", term: "CK1",
        question: "Choose the correct preposition: She is keen _______ learning foreign languages.",
        options: ["on", "in", "at", "with"],
        answer: 0,
        explanation: "Tính từ 'keen' đi kèm với giới từ 'on' (keen on = thích thú, say mê cái gì)."
    },
    {
        grade: "11", subject: "anh", term: "GK2",
        question: "Choose the correct tense: By the time we arrived at the cinema, the film _______.",
        options: ["had started", "started", "has started", "was starting"],
        answer: 0,
        explanation: "Hành động phim bắt đầu xảy ra trước một hành động trong quá khứ (arrived) nên ta dùng thì Quá khứ hoàn thành (had started)."
    },
    {
        grade: "11", subject: "anh", term: "CK2",
        question: "Choose the correct form of the conditional sentence: If I ______ the test yesterday, I would have passed.",
        options: ["had studied", "studied", "would study", "have studied"],
        answer: 0,
        explanation: "Đây là câu điều kiện loại 3 diễn tả giả thiết trái ngược trong quá khứ: If + S + had V3/ed, S + would/could have V3/ed."
    }
];