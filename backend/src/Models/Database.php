<?php

namespace App\Models;

class Database {
	var $host   = "localhost";
	var $user     = "postgres"; //database login name
	var $pass     = "123456"; //database login password
	var $database = "projeto-vendas-softexpert"; //database name

	public $link = null;

	public function connect()
    {
        $this->link = pg_connect("host=" . $this->host . " dbname=" . $this->database . " user=" . $this->user . " password=" . $this->pass);

        if (!$this->link)
        {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
            exit();
        }
        else
            return $this->link;
        }

        public function fetchAll($query) {
            $result = pg_query($this->link, $query);
            return pg_fetch_all($result);
        }

        public function insert($query) {
            $result = pg_query($this->link, $query);
            return pg_last_oid($result);
        }
    }
?>