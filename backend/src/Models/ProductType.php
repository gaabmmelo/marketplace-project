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

    public function update($id, $name, $type_id) {
        $conn = new Database();
        $conn->connect();

        $query = "UPDATE public.product_type SET product_type = :name, tax_percentage = :type_id WHERE id = :id";
        error_log("Update query: " . $query);

        return $conn->update($query, ['id' => $id, 'name' => $name, 'type_id' => $type_id]);
    }

    public function delete($id) {
        $conn = new Database();
        $conn->connect();

        $query = "DELETE FROM public.product_type WHERE id = :id";
        error_log("Delete query: " . $query);

        return $conn->delete($query, ['id' => $id]);
    }
}