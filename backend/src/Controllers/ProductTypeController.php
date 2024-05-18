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

    public function update($id) {
        $data = json_decode(file_get_contents("php://input"), true);

        $name = $data['name'];
        $type_id = $data['type_id'];

        $productType = new ProductType();
        $result = $productType->update($id, $name, $type_id);

        if ($result) {
            echo json_encode(['status' => 'success', 'message' => 'Product type updated successfully.']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to update product type.']);
        }
    }

    public function delete($id) {
        $productType = new ProductType();
        $result = $productType->delete($id);

        if ($result) {
            echo json_encode(['status' => 'success', 'message' => 'Product type deleted successfully.']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to delete product type.']);
        }
    }
}