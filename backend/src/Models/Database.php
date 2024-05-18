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
            error_log("Executing query: " . $query);
            $result = pg_query($this->link, $query);

            if ($result) {
                return true;
            } else {
                error_log("Query failed: " . pg_last_error($this->link));
                return false;
            }
        }

        public function update($query, $params) {
            $result = pg_query_params($this->link, $query, $params);
            if ($result) {
                return pg_affected_rows($result);
            } else {
                error_log("Query failed: " . pg_last_error($this->link));
                return false;
            }
        }
    
        public function delete($query, $params) {
            $result = pg_query_params($this->link, $query, $params);
            if ($result) {
                return pg_affected_rows($result);
            } else {
                error_log("Query failed: " . pg_last_error($this->link));
                return false;
            }
        }
    }
?>