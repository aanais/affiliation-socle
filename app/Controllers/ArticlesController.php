<?php

namespace SquelAffiliationSource\Controllers;

use Squel\Modules\Dictionary\Models\Dictionary;
use Squel\Modules\Dictionary\Models\Term;

class ArticlesController extends BaseCommonController
{
    public function showAction($isLanding, $slug = null)
    {
        $article = $this->callApi('posts?slug=' . $slug);
        if (count($article) == 0) {
            $this->notFound();
        }

        $similarArticles = [];
        if (count($article[0]['categories']) > 0) {
            $similarArticles = $this->callApi('posts?_limit=2&published=1&id_ne='.$article[0]['id'].'&categories.id='.$article[0]['categories'][0]['id']);
        }

        $this->checkLandingActivation($article[0]['landing']);

        $this->view->setVars([
            'article' => $article[0],
            'similars' => $similarArticles
        ]);
    }
}
