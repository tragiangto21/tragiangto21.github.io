<?php
// Kiểm tra dữ liệu có được gửi hay không
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Lấy dữ liệu từ form (nếu không có thì gán rỗng)
    $name = $_POST["name"] ?? "";
    $email = $_POST["email"] ?? "";
    $message = $_POST["message"] ?? "";

    // Mảng chứa lỗi
    $errors = [];

    // Validate cơ bản
    if (empty($name)) {
        $errors[] = "Vui lòng nhập họ tên.";
    }

    if (empty($email)) {
        $errors[] = "Vui lòng nhập email.";
    }

    if (empty($message)) {
        $errors[] = "Vui lòng nhập nội dung.";
    }

    // Nếu có lỗi
    if (!empty($errors)) {
        echo "<h3>Có lỗi xảy ra:</h3>";
        foreach ($errors as $error) {
            echo "<p>- $error</p>";
        }
    } else {
        echo "<h3>Gửi liên hệ thành công!</h3>";
        echo "<p><strong>Tên:</strong> $name</p>";
        echo "<p><strong>Email:</strong> $email</p>";
        echo "<p><strong>Nội dung:</strong> $message</p>";
    }
}
?>
