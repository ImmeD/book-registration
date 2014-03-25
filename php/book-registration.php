<?php
array_pop($_POST);

function getContent ($array) {
	$name = $array['book_name'];
	$author = $array['book_author'];
	$arr["error"] = array("message" => "Book Was Not Registered");
	if (!empty($name) && !empty($author)) {
		header("HTTP/1.1 201 Created");
		header('Content-type: application/json');
		return (getJson($_POST));
	} else {
		header("HTTP/1.1 400 Bad Request");
		header('Content-type: application/json');
		return(getJson($arr));
	}
}

print_r(getContent($_POST));

function getJson($array){
    $json_struct = json_encode($array, JSON_PRETTY_PRINT);
    return $json_struct;
 }