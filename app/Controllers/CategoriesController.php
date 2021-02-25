<?php

namespace SquelAffiliationSource\Controllers;

class CategoriesController extends BaseCommonController
{
    public function showAction($isLanding, $slug = null, $page = 1)
    {
        $perPage = 6;

        $start = ($page == 1) ? 0 : ($page - 1) * $perPage;

        $request = $this->callApi('categories?slug=' . $slug);
        if (count($request) == 0) {
            $this->notFound();
        }

        $this->checkLandingActivation($request[0]['landing']);

        $this->view->setVars([
            'categorie' => $request[0],
            'totalPage' => ceil($this->callApi('posts/count?categories.slug='.$slug)/$perPage),
            'articles' => $this->callApi('posts/?categories.slug='.$slug.'&_limit='.$perPage.'&_start='.$start),
            'page' => $page
        ]);
    }

}
