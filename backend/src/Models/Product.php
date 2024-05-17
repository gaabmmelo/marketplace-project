<?php

namespace App\Models;

use App\Models\Database;

class Product {
    public function all() {
        $conn = new Database();
        $conn->connect();

        $query = "SELECT * FROM products";

        return $conn->fetchAll($query);
    }

    public function create($name, $type_id) {
        $conn = new Database();
        $conn->connect();

        $query = "INSERT INTO public.products (product_name, product_type_id) VALUES ('$name', $type_id)";
        error_log("Insert query: " . $query);

        return $conn->insert($query);
    }
}