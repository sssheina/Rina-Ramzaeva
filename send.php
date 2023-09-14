<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

# проверка, что ошибки нет
if (!error_get_last()) {

    // Переменные, которые отправляет пользователь
    $name = $_POST['name'] ;
    $email = $_POST['email'];
    $whatsApp = $_POST['whatsApp'];
    $telegram = $_POST['telegram'];
    $text = $_POST['text'];
    //$file = $_FILES['myfile'];
    
    
    // Формирование самого письма
   // $title = "Заголовок письма";
    //$body = "111";
    //$body = "
    //<h2>Новое письмо</h2>
    //<b>Имя:</b> $name<br>
    //<b>Почта:</b> $email<br>
    //<b>WhatsApp:</b> $whatsApp<br>
    //<b>Telegram:</b> $telegram<br><br>
    //<b>Сообщение:</b><br>$text
    //";
    
    // Формирование самого письма
    $title = "Заголовок письма";

    // Load HTML template
    $html = file_get_contents("template.html");

    // Replace placeholders with actual data
    $html = str_replace("{NAME}", $name, $html);
    $html = str_replace("{EMAIL}", $email, $html);
    $html = str_replace("{WHATSAPP}", $whatsApp, $html);
    $html = str_replace("{TELEGRAM}", $telegram, $html);
    $html = str_replace("{TEXT}", $text, $html);

    // Set the email body
    $body = $html;
    
    // Настройки PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['data']['debug'][] = $str;};
    
    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'sssheina'; // Логин на почте
    $mail->Password   = 'qzozzpgwpbpnezvx'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('sssheina@gmail.com', 'Veta'); // Адрес самой почты и имя отправителя
    
    // Получатель письма
    //$mail->addAddress('sssheina@gmail.com');
    $mail->addAddress('sviatlana@mail.ru'); // Ещё один, если нужен
    
    // Прикрипление файлов к письму
    /*if (!empty($file['name'][0])) {
        for ($i = 0; $i < count($file['tmp_name']); $i++) {
            if ($file['error'][$i] === 0) 
                $mail->addAttachment($file['tmp_name'][$i], $file['name'][$i]);
        }
    }*/
    
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;
    
  // Проверяем отправленность сообщения
  if ($mail->send()) {
      $data['result'] = "success";
      $data['info'] = "Сообщение успешно отправлено!";
  } else {
      $data['result'] = "error";
      $data['info'] = "Сообщение не было отправлено. Ошибка при отправке письма";
      $data['desc'] = "Причина ошибки: {$mail->ErrorInfo}";
  }
    
} else {
    $data['result'] = "error";
    $data['info'] = "В коде присутствует ошибка";
    $data['desc'] = error_get_last();
}

// Отправка результата
header('Content-Type: application/json');
echo json_encode($data);

?>