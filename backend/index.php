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
$router->get('/sale', '\App\Controllers\SalesController@index');
$router->get('/sale/{id}', '\App\Controllers\SalesController@show');
$router->post('/sale', '\App\Controllers\SalesController@create');
$router->put('/sale/{id}', 'SalesController@update');
$router->delete('/sale/{id}', 'SalesController@delete');
$router->options('/sale', function() { /* ... */ });

$router->run();