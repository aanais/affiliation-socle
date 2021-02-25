<?php

namespace SquelAffiliationSource\Controllers;

use Squel\Modules\Dictionary\Models\Dictionary;
use Squel\Modules\Dictionary\Models\Term;

class PagesController extends BaseCommonController
{
    public function showAction($isLanding, $slug = null)
    {
        $page = $this->callApi('pages?slug=' . $slug);
        if (count($page) == 0) {
            $this->notFound();
        }

        $this->view->setVars([
            'page' => $page[0]
        ]);
    }
}
