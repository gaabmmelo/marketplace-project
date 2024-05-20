<?php

namespace App\Models;

use App\Models\Database;

class Sale {
    public function all() {
        $conn = new Database();
        $conn->connect();

        $query = "SELECT * FROM sales";

        return $conn->fetchAll($query);
    }

    public function createSales($total_purchase, $total_tax) {
        $conn = new Database();
        $conn->connect();

        $query = "INSERT INTO public.sales (total_purchase, total_tax) VALUES ($total_purchase, $total_tax)";

        error_log("Insert query: " . $query);

        return $conn->insert($query);
    }

    public function createSalesProducts($product_id, $id_sale, $product_quantity, $product_value, $tax_percentage) {
        $conn = new Database();
        $conn->connect();

        $query = "INSERT INTO public.sales_products (product_id, id_sale, product_quantity, product_value, tax_percentage) VALUES ($product_id, $id_sale, $product_quantity, $product_value, $tax_percentage)";

        error_log("Insert query: " . $query);

        return $conn->insert($query);
    }
}