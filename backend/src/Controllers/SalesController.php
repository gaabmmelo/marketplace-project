<?php

namespace App\Controllers;

use App\Models\Sale;

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

        if (isset($data['product_id'])  
        && isset($data['product_quantity']) 
        && isset($data['total_purchase']) 
        && isset($data['total_tax_purchase'])) 
        {
            $product_id = $data['product_id'];
            $product_quantity = $data['product_quantity'];
            $total_purchase = $data['total_purchase'];
            $total_purchase_tax = $data['total_purchase_tax'];

            $productModel = new Product();
            $result = $productModel->create($product_id, $product_type_id, $product_quantity, $total_purchase, $total_purchase_tax);

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