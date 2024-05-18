<?php

namespace App\Models;

use App\Models\Database;

class ProductType {
    public function all() {
        $conn = new Database();
        $conn->connect();

        $query = "SELECT * FROM product_type";

        return $conn->fetchAll($query);
    }

    public function create($name, $type_id) {
        $conn = new Database();
        $conn->connect();

        $query = "INSERT INTO public.product_type (product_type, tax_percentage) VALUES ('$product_type', $tax_percentage)";
        error_log("Insert query: " . $query);

        return $conn->insert($query);
    }
}