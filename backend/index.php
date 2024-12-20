<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

require "vendor/autoload.php";

$router = new \Bramus\Router\Router();
$router->options('/.*', function() { /* ... */ });

/* PRODUTO */
$router->get('/products', '\App\Controllers\ProductController@index');
$router->get('/product/{id}', '\App\Controllers\ProductController@show');
$router->post('/product', '\App\Controllers\ProductController@create');
$router->delete('/product/{id}', 'App\Controllers\ProductController@delete');

/*TIPO DE PRODUTO*/
$router->get('/products_type', '\App\Controllers\ProductTypeController@index');
$router->get('/products_type/{id}', '\App\Controllers\ProductTypeController@show');
$router->post('/products_type', '\App\Controllers\ProductTypeController@create');
$router->put('/products_type/{id}', '\App\Controllers\ProductTypeController@update');
$router->delete('/products_type/{id}', '\App\Controllers\ProductTypeController@delete');

/*VENDAS*/
$router->get('/sales', '\App\Controllers\SalesController@index');
$router->get('/sales/{id}', '\App\Controllers\SalesController@show');
$router->post('/sales', '\App\Controllers\SalesController@createSales');
$router->put('/sales/{id}', 'SalesController@update');
$router->delete('/sales/{id}', 'SalesController@delete');

/*PRODUTO VENDAS*/
/*$router->get('/sales_product', '\App\Controllers\SalesController@index');
$router->get('/sales_procut/{id}', '\App\Controllers\SalesController@show');*/
$router->post('/sales_product', '\App\Controllers\SalesController@createSalesProduct');
//$router->put('/sales_product/{id}', 'SalesController@update');
//$router->delete('/sales_product/{id}', 'SalesController@delete');

$router->run();