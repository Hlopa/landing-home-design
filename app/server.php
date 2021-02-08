<?php

//Если надо, чтобы данные отправлялись в формате json
$_POST = json_decode( file_get_contents("php://input"), true );

//чтобы получить ответ от сервера о полученных данных
echo var_dump($_POST);