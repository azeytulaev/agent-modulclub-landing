<?php
if (isset($_POST['type'])) {
	/*Адрес отправки */
	$emailTo = 'info@modulkassa.pro';
	
	if($_POST['type'] == "call"){
		/*Тема письма*/
    	$subject = 'Заказ на обратный звонок';
		/*Переменные из формы*/
		$name = $_POST['name'];
		$tel = $_POST['tel'];
		/*формирование сообщения*/
		$message = '<html>
			<head>
				<title>'.$subject.'</title>
			</head>
			<body>
				<p>Пользователь: '.$name.'</p> 
				<p>Номер телефна: '.$tel.'</p>                 
	      	</body>
	    </html>';
	}else if($_POST['type'] == "web"){
		/*Тема письма*/
    	$subject = 'Запись на вебинар';
		/*Переменные из формы*/
		$email = $_POST['email'];
		$tel = $_POST['tel'];
		/*формирование сообщения*/
		$message = '<html>
			<head>
				<title>'.$subject.'</title>
			</head>
			<body>
				<p>Email: '.$email.'</p> 
				<p>Номер телефна: '.$tel.'</p>                 
	      	</body>
	    </html>';
	}else if($_POST['type'] == "faq"){
		/*Тема письма*/
    	$subject = 'Вопрос от пользователя';
		/*Переменные из формы*/
		$msg = $_POST['msg'];
		$tel = $_POST['tel'];
		/*формирование сообщения*/
		$message = '<html>
			<head>
				<title>'.$subject.'</title>
			</head>
			<body>
				<p>Номер телефна: '.$tel.'</p>
				<p>Вопрос: '.$msg.'</p>                  
	      	</body>
	    </html>';
	}else if($_POST['type'] == "reg"){
		/*Тема письма*/
    	$subject = 'Регистрация пользователя';
		/*Переменные из формы*/
		$f_name = $_POST['f_name'];
		$s_name = $_POST['s_name'];
		$tel = $_POST['tel'];
		$email = $_POST['email'];
		$code = $_POST['code'];
		/*формирование сообщения*/
		$message = '<html>
			<head>
				<title>'.$subject.'</title>
			</head>
			<body>
				<p>Пользователь: '.$f_name.' '.$s_name.'</p> 
				<p>Номер телефна: '.$tel.'</p> 
				<p>Email: '.$email.'</p> 
				<p>Kод партнера: '.$code.'</p>                
	      	</body>
	    </html>';
	}
	   
    /*Шапка письма*/
	$header = "Content-type: text/html; charset=\"utf-8\"\r\n";
	$header .= "From: Лендинг МодульКлуб <landing@modulclub.ru>\r\n";
	mail($emailTo, $subject, $message, $header);
}

?>
