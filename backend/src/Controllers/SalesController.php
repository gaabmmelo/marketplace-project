<?php

namespace App\Controllers;

use App\Models\Sale;

class SalesController {
    public function index() {
        $productModel = new Product();
        echo json_encode($productModel->all());
    }

    public function show($product_id) {
        print_r($product_id);
    }

    public function createSales() {
        $data = json_decode(file_get_contents('php://input'), true);
        error_log("Received data: " . json_encode($data));

        if (isset($data['total_purchase']) && isset($data['total_tax'])) {
            $total_purchase = $data['total_purchase'];
            $total_tax = $data['total_tax'];

            $saleModel = new Sale();
            $result = $saleModel->create($total_purchase, $total_tax);

            if ($result) {
                echo json_encode(['success' => true, 'id' => $result]);
            } else {
                echo json_encode(['success'  => false, 'message' => 'Failed to insert product']);
            }
        } else {
            echo json_encode(['success' => false, 'message' => 'Invalid input']);
        }
    }

    public function createSalesProduct() {
        $data = json_decode(file_get_contents('php://input'), true);
        error_log("Received data: " . json_encode($data));

        if (isset($data['product_id']) 
        && isset($data['id_sale'])
        && isset($data['product_quantity'])
        && isset($data['product_value'])
        && isset($data['tax_percentage'])
        ) {
            $total_purchase = $data['total_purchase'];
            $total_tax = $data['total_tax'];

            $saleModel = new Sale();
            $result = $saleModel->create($total_purchase, $total_tax);

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