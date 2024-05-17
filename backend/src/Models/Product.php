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

    public function create($id, $name, $type_id) {
        $conn = new Database();
        $conn->connect();

        $query = 'INSERT INTO public.products(id, product_name, product_type_id) VALUES (". $id .",". $name .", ". $type_id .")';

        return $conn->insert($query);
    }
}