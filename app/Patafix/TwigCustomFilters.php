<?php
/**
 * User: Anaïs
 * Date: 08/01/2020
 */

namespace app\Patafix;

use \Twig\Extension\AbstractExtension;
use \Twig\TwigFilter;


class TwigCustomFilters extends AbstractExtension
{
    /**
     * Pour ajouter des nouveaux filtres, créer un nouvel objet Twig filter et sa fonction associée
     * @return array|\Twig_Filter[]
     */
    public function getFilters()
    {
        return [
            new TwigFilter('object_to_array', [$this, 'castObjectToArray']),
        ];
    }

    /**
     * Cast un objet en array : fonction associée au filtre object_to_array
     * @param $object
     * @return array
     */
    public function castObjectToArray($object)
    {
        return (array)$object;
    }
}
