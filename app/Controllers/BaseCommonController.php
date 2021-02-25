<?php

namespace SquelAffiliationSource\Controllers;

use Squel\Common\Controllers\BaseController;

class BaseCommonController extends BaseController
{
    public $client;
    public $urlApi;

    public function initialize()
    {
        $this->urlApi = $this->di->getShared('urlApi');
        $this->client = $this->di->getShared('client');

        $articles = $this->callApi('posts?_limit=6&published=1&_sort=created_at:desc');
        $pages = $this->callApi('pages?_limit=6&published=1&_sort=created_at:desc');

        $this->view->setVars([
            'articles' => $articles,
            'pages'    => $pages
        ]);
    }

    public function callApi($endpoint)
    {
        $res = $this->client->request('GET', '/' . $endpoint);
        return json_decode($res->getBody(), true);
    }

    public function notFound()
    {
        return $this->dispatcher->forward(
            [
                'namespace' => 'Squel\Common\Controllers',
                'controller' => 'error',
                'action' => 'show404',
            ]
        );
    }

    public function checkLandingActivation($landingBool)
    {
        if (!$landingBool) {
            $this->squel->version->pref = 'COM';
        }
    }
}
