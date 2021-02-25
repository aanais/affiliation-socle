<?php
use app\Patafix\View;
use app\Patafix\Twig;
/**
 * View
 */
$di->setShared('view', function () {
    $view = new View;

    $viewDirs[] = $_SERVER["DOCUMENT_ROOT"] . '/../app/Common/Views/';
    $viewDirs[] = __DIR__ . '/../app/Common/Views/';

    $view->setViewsDir($viewDirs);

    $view->registerEngines([
        '.twig' => function ($view, $di) {
            $twig = new Twig($view, $di);
            return $twig;
        }
    ]);
    return $view;
});


$di->setShared('urlApi', function () use ($di) {
    return $di->getShared('strapi')->production['url'];
});

//Set Client Guzzle
$di->setShared('client', function () use ($di) {
    return new \GuzzleHttp\Client([
        'base_uri' => $di->getShared('urlApi'),
        'exceptions' => false
    ]);
});

//Get Menu
$res = $di->getShared('client')->request('GET', '/menu');
$menu = json_decode($res->getBody(), true);
foreach ($menu['categories'] as $key => $category) {
    $res = $di->getShared('client')->request('GET', '/categories/' . $category['id']);
    $menu['categories'][$key] = json_decode($res->getBody(), true);
}

//Get Custom Fields
$res = $di->getShared('client')->request('GET', '/personnalisation');
$customization = json_decode($res->getBody(), true);

//Filter after getTerms used for get static array
$di->getShared('view')->setVars([
    'urlApi' => $di->getShared('urlApi'),
    'menu' => $menu,
    'customization' => $customization,
]);
