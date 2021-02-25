<?php

$router = $di->getShared("router");

$router->add('/', [
    'namespace'  => 'SquelAffiliationSource\Controllers',
    'controller' => 'index',
    'action'     => 'index',
    'eligibleInstall'  => true
]);

// Category
$router->add('/category/{slug}/{page}', [
    'namespace'  => 'SquelAffiliationSource\Controllers',
    'controller' => 'categories',
    'action'     => 'show',
    'eligibleInstall'  => true
]);
$router->add('/category/{slug}', [
    'namespace'  => 'SquelAffiliationSource\Controllers',
    'controller' => 'categories',
    'action'     => 'show',
    'eligibleInstall'  => true
]);

// Single page
$router->add('/article/{slug}', [
    'namespace'  => 'SquelAffiliationSource\Controllers',
    'controller' => 'articles',
    'action'     => 'show',
    'eligibleInstall'  => true,
]);


// Single page
$router->add('/page/{slug}', [
    'namespace'  => 'SquelAffiliationSource\Controllers',
    'controller' => 'pages',
    'action'     => 'show',
    'eligibleInstall'  => true,
]);

