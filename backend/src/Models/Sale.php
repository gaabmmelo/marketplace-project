<?php

namespace App\Models;

use App\Models\Database;

class Sale {
    public function all() {
        $conn = new Database();
        $conn->connect();

        $query = "SELECT * FROM sales_products";

        return $conn->fetchAll($query);
    }

    public function create($product_id, $product_type_id, $product_quantity, $total_purchase) {
        $conn = new Database();
        $conn->connect();

        $query = "INSERT INTO public.sales_products 
        (product_id, product_type_id, product_quantity, total_purchase) 
        VALUES ('$product_id', $product_type_id, $product_quantity, $total_purchase)";

        error_log("Insert query: " . $query);

        return $conn->insert($query);
    }
}