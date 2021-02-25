<?php

namespace SquelAffiliationSource;

class Module
{
    public function __construct()
    {
        $this->di = $di = new FactoryDefault;

        include(__DIR__ . '/../config/services.php');
        include(__DIR__ . '/../config/routes.php');

        $this->app = new PhalconApp($this->di);

        $this->setRegisterModules();

        $this->di['app'] = $this->app;
    }

    public function run()
    {
        echo $this->app->handle()->getContent();
    }

    public static function init($di)
    {
        // Load routes
        require __DIR__ . '/../config/routes.php';

        // Load views path
        $viewsDir = $di->getView()->getViewsDir();

        //Theme website
        $theme = $di->getShared('config')->base->inteTheme;

        // Add views in 2nd position
        array_splice($viewsDir, 1, 0, (__DIR__ . "/SubModules/{$theme}/Views/"));

        $di->getView()->setViewsDir($viewsDir);

        // Load services
        require __DIR__ . '/../config/services.php';
    }
}
