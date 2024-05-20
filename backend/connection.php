<?php

function create() {
    $db_handle = pg_connect("host=localhost dbname=projeto-vendas-softexpert user=postgres password=123456");

    if (!$db_handle) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit();
    }
}

create();