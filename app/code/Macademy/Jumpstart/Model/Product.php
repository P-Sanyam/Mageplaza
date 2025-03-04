<?php

declare(strict_types=1);

namespace Macademy\Jumpstart\Model;

class Product
{
    function __construct(
        private Category $category,
    ) {}

    function getCategoryName() {
        return $this->category->getName();
    }
}
