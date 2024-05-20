<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

require "vendor/autoload.php";

$router = new \Bramus\Router\Router();

/* PRODUTO */
$router->get('/products', '\App\Controllers\ProductController@index');
$router->get('/product/{id}', '\App\Controllers\ProductController@show');
$router->post('/product', '\App\Controllers\ProductController@create');
$router->options('/product', function() { /* ... */ });

/*TIPO DE PRODUTO*/
$router->get('/product_type', '\App\Controllers\ProductTypeController@index');
$router->get('/product_type/{id}', '\App\Controllers\ProductTypeController@show');
$router->post('/product_type', '\App\Controllers\ProductTypeController@create');
$router->put('/product_type/{id}', 'ProductTypeController@update');
$router->delete('/product_type/{id}', 'ProductTypeController@delete');
$router->options('/product_type', function() { /* ... */ });

/*VENDAS*/
$router->get('/sales', '\App\Controllers\SalesController@index');
$router->get('/sales/{id}', '\App\Controllers\SalesController@show');
$router->post('/sales', '\App\Controllers\SalesController@createSales');
$router->put('/sales/{id}', 'SalesController@update');
$router->delete('/sales/{id}', 'SalesController@delete');
$router->options('/sales', function() { /* ... */ });

/*PRODUTO VENDAS*/
/*$router->get('/sales_product', '\App\Controllers\SalesController@index');
$router->get('/sales_procut/{id}', '\App\Controllers\SalesController@show');*/
$router->post('/sales_product', '\App\Controllers\SalesController@createSalesProduct');
//$router->put('/sales_product/{id}', 'SalesController@update');
//$router->delete('/sales_product/{id}', 'SalesController@delete');
$router->options('/sales_product', function() { /* ... */ });

$router->run();