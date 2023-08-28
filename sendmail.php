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
	$message = $_POST['message'];
	
    
    
    // Формирование самого письма
    $title = "Запись на мини-сессию";
    $body = "
    <h2>Новый запрос на консультацию</h2>
    <b>Имя:</b> $name<br>
    <b>Почта:</b> $email<br>
	<b>Почта:</b> $whatsApp<br>
	<b>Почта:</b> $telegram<br><br>
    <b>Сообщение:</b><br>$message 
    ";
    
    // Настройки PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['data']['debug'][] = $str;};
    
    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = '_solar_'; // Логин на почте
    $mail->Password   = 'sVkBnepUzF3f7DEq8Mcz'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('_solar_@list.ru', 'Вета'); // Адрес самой почты и имя отправителя
    
    // Получатель письма
    $mail->addAddress('sssheina@gmsil.com');  
    // $mail->addAddress('poluchatel2@gmail.com'); // Ещё один, если нужен
    
    // Прикрипление файлов к письму
    // if (!empty($file['name'][0])) {
    //     for ($i = 0; $i < count($file['tmp_name']); $i++) {
    //         if ($file['error'][$i] === 0) 
    //             $mail->addAttachment($file['tmp_name'][$i], $file['name'][$i]);
    //     }
    // }
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







// ______________________________________________________


	// use PHPMailer\PHPMailer\PHPMailer;
	// use PHPMailer\PHPMailer\Exception;

	// require 'phpmailer/src/Exception.php';
	// require 'phpmailer/src/PHPMailer.php';

	// $mail = new PHPMailer(true);
	// $mail->CharSet = 'UTF-8';
	// $mail->setLanguage('ru', 'phpmailer/language/');
	// $mail->IsHTML(true);

	// //От кого письмо
	// $mail->setFrom('_solar_@list.ru', 'Фрилансер по жизни');
	// //Кому отправить
	// $mail->addAddress('sssheina@gmail.com');
	// //Тема письма
	// $mail->Subject = 'Привет! Это "Фрилансер по жизни"';

	
	// //Тело письма
	// $body = '<h1>Встречайте супер письмо!</h1>';
	
	// if(trim(!empty($_POST['name']))){
	// 	$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	// }
	// if(trim(!empty($_POST['email']))){
	// 	$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	// }
	// if(trim(!empty($_POST['whatsApp']))){
	// 	$body.='<p><strong>WhatsApp:</strong> '.$_POST['whatsApp'].'</p>';
	// }
	// if(trim(!empty($_POST['telegram']))){
	// 	$body.='<p><strong>Telegram:</strong> '.$_POST['telegram'].'</p>';
	// }
	
	// if(trim(!empty($_POST['message']))){
	// 	$body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
	// }
	
	
	// $mail->Body = $body;

	// //Отправляем
	// if (!$mail->send()) {
	// 	$message = 'Ошибка';
	// } else {
	// 	$message = 'Данные отправлены!';
	// }

	// $response = ['message' => $message];

	// header('Content-type: application/json');
	// echo json_encode($response);
?> 