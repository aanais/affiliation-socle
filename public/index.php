<?php

// use App\Bootstrap;
use Phalcon\Mvc\Application as PhalconApp;
use Phalcon\Di\FactoryDefault;

require_once(__DIR__ . '/../vendor/autoload.php');

$di = new FactoryDefault;

include(__DIR__ . '/../config/services.php');
include(__DIR__ . '/../config/routes.php');

$app = new PhalconApp($di);

$di['app'] = $app;

$app = $app;
$di  = $di;

echo $app->handle()->getContent();