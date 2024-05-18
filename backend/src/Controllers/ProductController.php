<?php

namespace App\Controllers;

use App\Models\Product;

class ProductController {
    public function index() {
        $productModel = new Product();
        echo json_encode($productModel->all());
    }

    public function show($product_id) {
        print_r($product_id);
    }

    public function create() {
        $data = json_decode(file_get_contents('php://input'), true);
        error_log("Received data: " . json_encode($data));

        if (isset($data['name']) && isset($data['type_id'])) {
            $name = $data['name'];
            $type_id = $data['type_id'];

            $productModel = new Product();
            $result = $productModel->create($name, $type_id);

            if ($result) {
                echo json_encode(['success' => true]);
            } else {
                echo json_encode(['success'  => false, 'message' => 'Failed to insert product']);
            }
        } else {
            echo json_encode(['success' => false, 'message' => 'Invalid input']);
        }
    }
}