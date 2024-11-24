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

    public function create($product_type, $tax_percentage) {
        $conn = new Database();
        $conn->connect();

        $query = "INSERT INTO public.product_type (product_type, tax_percentage) VALUES ('$product_type', $tax_percentage)";
        error_log("Insert query: " . $query);

        return $conn->insert($query);
    }

    public function update($id, $product_type, $tax_percentage) {
        $conn = new Database();
        $conn->connect();

        $query = "UPDATE public.product_type SET product_type = :product_type, tax_percentage = :tax_percentage WHERE id = :id";

        return $conn->update($query, ['id' => $id, 'product_type' => $product_type, 'tax_percentage' => $tax_percentage]);
    }

    public function delete($id) {
        $conn = new Database();
        $conn->connect();

        $query = "DELETE FROM public.product_type WHERE id = :id";
        error_log("Delete query: " . $query);

        return $conn->delete($query, ['id' => $id]);
    }
}