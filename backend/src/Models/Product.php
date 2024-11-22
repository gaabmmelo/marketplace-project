<?php

namespace App\Models;

use App\Models\Database;

class Product {
    public function all() {
        $conn = new Database();
        $conn->connect();

        $query = "SELECT
            products.id,
            products.product_name,
            products.product_type_id,
            products.product_value,
            product_type.product_type,
            product_type.tax_percentage
        FROM products
            INNER JOIN product_type
            ON products.product_type_id = product_type.id
        ";

        return $conn->fetchAll($query);
    }

    public function create($product_name, $product_type_id, $product_value) {
        $conn = new Database();
        $conn->connect();

        $query = "INSERT INTO public.products (product_name, product_type_id, product_value) VALUES ('$product_name', $product_type_id, $product_value)";
        error_log("Insert query: " . $query);

        return $conn->insert($query);
    }

    public function delete($id) {
        $conn = new Database();
        $conn->connect();

        $query = "DELETE FROM public.products WHERE id = $id";
        error_log("Delete query: " . $query);

        return $conn->delete($query, ['id' => $id]);
    }
}