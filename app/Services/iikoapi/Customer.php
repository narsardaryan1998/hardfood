<?php
/**
 * Created by PhpStorm.
 * User: Stanislav
 * Date: 02.09.2018
 * Time: 22:06
 */

namespace App\Services\iikoapi;


class Customer
{
    public $id;
    public $name;
    public $phone;

    public function __construct($id)
    {
        $this->id = $id;
    }
}
