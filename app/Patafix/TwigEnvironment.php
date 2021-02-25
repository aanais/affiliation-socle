<?php
namespace app\Patafix;

use Phalcon\DiInterface;

class TwigEnvironment extends \Twig_Environment
{
  protected $di = null;

  public function __construct(DiInterface $di, \Twig_LoaderInterface $loader = null, $options = [])
  {
      parent::__construct($loader, $options);
  }

}
