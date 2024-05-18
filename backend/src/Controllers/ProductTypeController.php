<?php

namespace App\Controllers;

use App\Models\ProductType;

class ProductTypeController {
    public function index() {
        $productTypeModel = new ProductType();
        echo json_encode($productTypeModel->all());
    }

    public function show($product_type_id) {
        print_r($product_type_id);
    }

    public function create() {
        $data = json_decode(file_get_contents('php://input'), true);
        error_log("Received data: " . json_encode($data));

        if (isset($data['product_type']) && isset($data['tax_percentage'])) {
            $product_type = $data['product_type'];
            $tax_percentage = $data['tax_percentage'];

            $productTypeModel = new ProductType();
            $result = $productTypeModel->create($product_type, $tax_percentage);

            if ($result) {
                echo json_encode(['success' => true, 'id' => $result]);
            } else {
                echo json_encode(['success'  => false, 'message' => 'Failed to insert product']);
            }
        } else {
            echo json_encode(['success' => false, 'message' => 'Invalid input']);
        }
    }
}