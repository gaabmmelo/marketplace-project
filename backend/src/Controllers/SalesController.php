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
            $result = $saleModel->createSales($total_purchase, $total_tax);

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
            $product_id = $data['product_id'];
            $id_sale = $data['id_sale'];
            $product_quantity = $data['product_quantity'];
            $product_value = $data['product_value'];
            $total_percentage = $data['tax_percentage'];

            $saleModel = new Sale();
            $result = $saleModel->createSaleProduct($product_id, $id_sale, $product_quantity, $product_value, $tax_percentage);

            if ($result) {
                echo json_encode(['success' => true, 'id' => $result]);
            } else {
                echo json_encode(['success'  => false, 'message' => 'Failed to insert products of sale!']);
            }
        } else {
            echo json_encode(['success' => false, 'message' => 'Invalid input']);
        }
    }
}