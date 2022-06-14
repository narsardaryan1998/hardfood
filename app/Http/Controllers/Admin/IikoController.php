<?php


namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\iikoapi\Api;
use App\Services\iikoapi\Organization;

class IikoController extends Controller
{
    public function getMenu()
    {
        $iiko = new Api([
            'login' => 'grisha.90@mail.ru',
            'password' => '12345'
        ]);

        echo $iiko->accessToken;

        $orgList = $iiko->getOrganizationList();
        $organization = new Organization($orgList[0]);
        echo "<br>";
        echo $organization->id;
        //echo $organization->name;
        echo "<br>";

        $organization = new Organization($orgList[0]);

        $iiko->setOrganization($organization);
        $menu = $iiko->getGroupsWithNomenclature(); //Вернет массив обьектов класса Product

        echo "<pre>";
        print_r($menu);
        echo "</pre>";

        $result = [];
        foreach ($menu->products as $product) {
            $result["name"] = $product->name;
            $result["proteins"] = $product->fatFullAmount;//белки
            $result["fats"] = $product->fiberFullAmount;//жиры
            $result["carbs"] = $product->carbohydrateFullAmount;//углеводы
            $result["kcal"] = $product->energyFullAmount;
            $result["weight"] = $product->weight;
            if($value = reset($product->images))
            {
                $result["url"] =$value->imageUrl;
            }
            if($product->productCategoryId){
                $result["category"] = $this->getProductNameById($menu->productCategories,$product->productCategoryId);
            }
        }
    }

    private function getProductNameById($productCategoryArray,$productCategoryId){
        foreach ($productCategoryArray as $item){
            if($item->id == $productCategoryId)
                return $item->name;
        }
    }

    public function getCategoryNameById($categories,$id){
        foreach ($categories as $category){
            if($category->id == $id)
                return $category->name;
        }
        return null;
    }
}
