<?php
	
	//echo "done";

	/*$data = '{
		"name" : "alamin",
		"age"  : 12
	}';*/

	$data = [
		"name" => "alamin",
		"age" => 12
	];

	$json = json_encode($data);
	echo $json;	
?>
