<?php

namespace App;

use Phalcon\Mvc\Application as PhalconApp;
use Phalcon\Di\FactoryDefault;

class Bootstrap
{
    public $di;
    public $app;

    public function __construct()
    {
        $this->di = $di = new FactoryDefault;

        include(__DIR__ . '/../config/services.php');
        include(__DIR__ . '/../config/routes.php');

        $this->app = new PhalconApp($this->di);

        $this->di['app'] = $this->app;
    }

    public function run()
    {
        echo $this->app->handle()->getContent();
    }

    public function enableBugsnag()
    {
        $appId = $this->di->getConfig()->base->bugsnag->php->appId;
        if ($appId) {
            $bugsnag = \Bugsnag\Client::make($appId);
            \Bugsnag\Handler::register($bugsnag);
        }

    }

    public function startDebugbar()
    {
        $dbgConfig = __DIR__ . '/../config/debugbar.php';

        $debugbar = new \Snowair\Debugbar\ServiceProvider($dbgConfig);
        $debugbar->start();

        $this->di["debugbar"]->addCollector(new Common\Library\SquelCollector());
    }

}
