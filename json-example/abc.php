<?php


	//$person  = $_GET['data'];
	//$obj = json_decode($person);
	//echo $obj->email;

	/*$data = '{
		"name"		: "alamin",
		"dept"		: "cs",
		"email"		: "alamin@aiub.edu",
		"id"		: 12
	}';*/

	$data = [
		"name"	=> "alamin",
		"dept"	=> "cs",
		"email"	=> "alamin@aiub.edu",
		"id"	=> 12
	];

	$json = json_encode($data);
	echo $json;

?>