<?php

namespace App\Controllers;

use App\Models\Product;
use App\Models\ProductType;

class ProductController {
    public function index() {
        $productModel = new Product();
        $products = $productModel->all();
    
        echo json_encode($products);
    }

    public function show($id) {
        print_r($id);
    }

    public function create() {
        $data = json_decode(file_get_contents('php://input'), true);
        error_log("Received data: " . json_encode($data));

        if (isset($data['product_name']) && isset($data['product_type_id']) && isset($data['product_value'])) {
            $product_name = $data['product_name'];
            $product_type_id = $data['product_type_id'];
            $product_value = str_replace(',', '.', $data['product_value']);

            $productModel = new Product();
            $result = $productModel->create($product_name, $product_type_id, $product_value);

            if ($result) {
                echo json_encode(['success' => true]);
            } else {
                echo json_encode(['success'  => false, 'message' => 'Failed to insert product']);
            }
        } else {
            echo json_encode(['success' => false, 'message' => 'Invalid input']);
        }
    }

    public function delete($id) {
        $product = new Product();
        $result = $product->delete($id);

        if ($result) {
            echo json_encode(['status' => 'success', 'message' => 'Product deleted successfully.']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete product.']);
        }
    }
}