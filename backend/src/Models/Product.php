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

    public function create($product_name, $product_type_id, $product_value) {
        $conn = new Database();
        $conn->connect();

        $query = "INSERT INTO public.products (product_name, product_type_id, product_value) VALUES ('$product_name', $product_type_id, $product_value)";
        error_log("Insert query: " . $query);

        return $conn->insert($query);
    }
}