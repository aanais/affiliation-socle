<?php

namespace app\Patafix;

class TwigLoaderFilesystem extends \Twig_Loader_Filesystem
{
  public function __construct($paths = array(), $rootPath = null)
  {
    parent::__construct($paths, $rootPath);
  }
}
