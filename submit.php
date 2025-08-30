<?php
// 入力値を取得
$name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');

// バリデーション（簡易例）
if (empty($name) || empty($email) || empty($message)) {
    echo "すべての項目を入力してください。";
    exit;
}

// メール送信（例）
$to = ""; // 管理者のメールアドレス
$subject = "お問い合わせがありました";
$body = "名前: $name\nメール: $email\n内容:\n$message";
$headers = "From: $email";

// メール送信処理
if (mail($to, $subject, $body, $headers)) {
    echo "お問い合わせありがとうございます。送信が完了しました。";
} else {
    echo "送信に失敗しました。もう一度お試しください。";
}
?>
