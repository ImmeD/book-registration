<?php
array_pop($_POST);

function getContent ($array) {
	$name = $array['book-name'];
	$author = $array['book-author'];
	$arr["error"] = array("message" => "Book Was Not Registered");
	if (!empty($name) && !empty($author)) {
		http_response_code(201);
		header('Content-type: application/json');
		return (getJson($_POST));
	} else {
		http_response_code(400);
		header('Content-type: application/json');
		return(getJson($arr));
	}
}

print_r(getContent($_POST));

function getJson($array){
    $json_struct = json_encode($array, JSON_PRETTY_PRINT);
    return $json_struct;
 }