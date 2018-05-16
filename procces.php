<?php

header('Content-Type: application/json');

if ($_POST["tildaspec-formid"]) {

	$to      = "al.builov@ya.ru, info@modul.club, partners@modulkassa.ru";
	$subject = "Прямая продажа";
	$message = 
		"Заполнена форма прямой продажи на сайте https://modul.club/\n\n\n" .
		"id партнера: " . $_POST["a_aid"] . "\n" .
		"Контактное лицо: " . $_POST["name"] . "\n" .
		"E-mail " . $_POST["email"] . "\n" .
		"Телефон: " . $_POST["phone"] . "\n" .
		"ИП/ООО: " . $_POST["company"] . "\n" .
		"Юр.Адрес: " . $_POST["address"] . "\n" .
		"ИНН: " . $_POST["inn"] . "\n" .
		"ОГРН: " . $_POST["ogrn"] . "\n" .
		"Расч.Счет: " . $_POST["rs"] . "\n" .
		"БИК банка: " . $_POST["bik_bank"] . "\n" .
		"Адрес доставки: " . $_POST["address_order"] . "\n" .
		"Комментарий: \n>\t" . $_POST["comment"] . "\n";
	$headers = 
		"From: info@modul.club" . "\r\n" .
	    "X-Mailer: PHP/" . phpversion();

	mail($to, $subject, $message, $headers);


	// Отправка даных в CRM
	if ($curl = curl_init('https://api.amocore.in/modulkassa/integration/modulkassa/ouvyse51de1vrzvzchnrnnhvqtheqt09')) {
		$_props = array(
			"utmCampaign" 	=> "",
			"utmMedium" 	=> "",
			"utmTerm" 		=>  "",
			"utmSource" 	=> "pap",
			"city" 			=> "Москва",
			"productCode" 	=> "21",
			"actionType" 	=> "PosBuyOnCreditCashbox",

			"firstName"		=> $_POST["name"],
			"email" 		=> $_POST["email"],
			"phone" 		=> $_POST["phone"],
			"company" 		=> $_POST["company"],
			"address" 		=> $_POST["address"],
			"inn" 			=> $_POST["inn"],
			"ogrn" 			=> $_POST["ogrn"],
			"rs" 			=> $_POST["rs"],
			"bik_bank" 		=> $_POST["bik_bank"],
			"address_delivery" => $_POST["address_order"],
			"comment" 		=> $_POST["comment"],

			"a_aid" => $_POST["a_aid"]
		);

    	$data_string = json_encode($_props);

		curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
		curl_setopt($curl, CURLOPT_POSTFIELDS, $data_string);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($curl, CURLOPT_HTTPHEADER, array(
        	'Content-Type: application/json',
        	'Content-Length: ' . strlen($data_string))
		);

    	$rs = curl_exec($curl);
    	curl_close($curl);

    	// echo $rs;
    	// echo $data_string;
  	}
}

echo '{"message":"OK","results":["530393:8036394"]}';

?>
