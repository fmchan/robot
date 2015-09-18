<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');

date_default_timezone_set("Asia/Hong_Kong"); 

// http://www.apple.com/hk/shop/buy-iphone/iphone6s/5.5-inch-display-128gb-rose-gold
// http://localhost/robot/cert/test.php

$file = 'log-ir.txt';

$prevLen = 0;
$milliseconds = 5000;
$seconds = (int)$milliseconds / 1000;
while(true) {
	$len = strlen(file_get_contents("https://reserve.cdn-apple.com/HK/en_HK/reserve/iPhone/availability"));
	if ($len != $prevLen) {
		$message = date("Y-m-d H:i:s")." changed length:".$len;
		$prevLen = $len;
		$current = file_get_contents($file);
		$xml = file_get_contents("http://119.9.91.62/robot/cert/push.php?message=".urlencode($message));
		$current .= $message."\n".$xml;
		file_put_contents($file, $current);
	}
	sleep($seconds);
}