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
        print_r($_POST);
        exit;
        $productModel = new Product();
        $productModel->create($id, $name, $type_id);
    }
}