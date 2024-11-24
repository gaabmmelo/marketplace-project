<?php

namespace App\Models;

class Database {
	var $user     = "postgres";
	var $pass     = "123456";
    var $dsn = "pgsql:host=localhost;port=5432;dbname=project-sales-softexpert;";

	public $link = null;

	public function connect()
    {
        try {
            $this->link = new \PDO($this->dsn, $this->user, $this->pass, [\PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION]);
        } catch (\PDOException $e) {
            die($e->getMessage());
        }
    }

    public function fetchAll($query) {
        $stmt = $this->link->query($query);
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    public function fetch($query) {
        $stmt = $this->link->query($query);
        return $stmt->fetch();
    }

    public function insert($query) {
        $result = $this->link->exec($query);

        if ($result) {
            return $this->link->lastInsertId();
        } else {
            return false;
        }
    }

    public function update($query, $params = []) {
        $result = $this->link->prepare($query);

        foreach($params as $key => $value) {
            $result->bindValue(":" . $key, $value);
        }

        $result->execute();

        if ($result) {
            return $result;
        } else {
            return false;
        }
    }

    public function delete($query, $params) {
        $result = $this->link->exec($query);
        if ($result) {
            return $result;
        } else {
            return false;
        }
    }
}
?>