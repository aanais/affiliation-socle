<?php

namespace app\Patafix;

use Phalcon\Mvc\View as PhalconView;


class View extends PhalconView
{
    protected $pickView;

    public function pick($renderView)
    {
        $action = explode('/', $renderView);
        //copy the path part from the array
        $dir = array_slice($action, 0, -1);
        $action = end($action);
        $dir = implode("/", $dir);

        // Render normal view path if no FIN or COM or whatelse found
        return parent::pick($dir . '/' . $action);
    }

    public function getPickView()
    {
        return $this->pickView;
    }
}
