<?php

namespace app\Patafix;

use Phalcon\Mvc\View\Engine;
use Phalcon\Mvc\View\EngineInterface;

use app\Patafix\TwigEnvironment;
use app\Patafix\TwigLoaderFilesystem;

class Twig extends Engine implements EngineInterface
{
    protected $twig;

    public function __construct($view, $di = null, $options = [])
    {
        $loader     = new TwigLoaderFilesystem($di->getView()->getViewsDir());
        $this->twig = new TwigEnvironment($di, $loader, [
            'debug' => $di->getEnv()->development,
            'cache' => false
        ]);
        $this->di = $di;

        $this->twig->addExtension(new \Twig_Extension_Debug());
        $this->twig->addExtension(new \Twig_Extensions_Extension_Intl());
        $this->twig->addExtension(new \Twig_Extensions_Extension_Text());
        $this->twig->addExtension(new \Twig_Extensions_Extension_Array());
        $this->twig->addExtension(new TwigCustomFilters());

        $this->twig->addFunction(new \Twig_Function("rawurlencode", "rawurlencode"));
        $this->twig->addFunction(new \Twig_Function("t", function ($res, $expr = []) {
            return $this->translate->_($res, $expr);
        }));

        $services = ['squel', 'houston', 'env', 'isSatellite', 'config', 'request', 'breadcrumbs'];

        foreach ($services as $name) {
            $this->twig->addGlobal($name, $di->get($name));
        }

        $viewPickView = $view->getPickView();
        $view->setMainView($viewPickView);

        parent::__construct($view, $di);
    }

    public function render($path, $params, $mustClean = false)
    {

        if (!$params) {
            $params = [];
        }

        $file = str_replace($this->getView()->getViewsDir(), '', $path);

        $template = $this->twig->load($file);
        $content = $template->render($params);

        if ($mustClean) {
            $this->getView()->setContent($content);
            return;
        }

        echo $content;
    }
}
