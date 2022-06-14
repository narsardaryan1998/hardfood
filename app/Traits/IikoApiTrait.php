<?php


namespace App\Traits;

use App\Models\DishImage;
use App\Models\Menu;
use App\Services\iikoapi\Api;
use App\Services\iikoapi\Organization;

trait IikoApiTrait
{
    public function getProducts()
    {
        $iiko = new Api([
            'login' => 'grisha.90@mail.ru',
            'password' => '12345'
        ]);
        $orgList = $iiko->getOrganizationList();
        $organization = new Organization($orgList[0]);
        $iiko->setOrganization($organization);
        $menu = $iiko->getGroupsWithNomenclature();

        $result = [];
        $count = 0;
        foreach ($menu->products as $product) {
            $result[$count]["id"] = $product->id;
            $result[$count]["name"] = $product->name;
            $result[$count]["proteins"] = round($product->fiberFullAmount);//белки
            $result[$count]["fats"] = round($product->fatFullAmount);//жиры
            $result[$count]["carbs"] = round($product->carbohydrateFullAmount);//углеводы
            $result[$count]["kcal"] = round($product->energyFullAmount);
            $result[$count]["weight"] = $product->weight * 1000;
            $result[$count]["url"] = "";
            if ($value = reset($product->images)) {
                $result[$count]["url"] = $value->imageUrl;
            }
            $result[$count]["categoryID"] = "";
            if ($product->productCategoryId) {
                $result[$count]["categoryID"] = $product->productCategoryId;
            }
            $count++;
        }
        return $result;
    }

    public function getCategories()
    {
        $iiko = new Api([
            'login' => 'grisha.90@mail.ru',
            'password' => '12345'
        ]);
        $orgList = $iiko->getOrganizationList();
        $organization = new Organization($orgList[0]);
        $iiko->setOrganization($organization);
        $menu = $iiko->getGroupsWithNomenclature();

        return $menu->productCategories;
    }

    public function getMenu()
    {
        $iiko = new Api([
            'login' => 'grisha.90@mail.ru',
            'password' => '12345'
        ]);
        $orgList = $iiko->getOrganizationList();
        $organization = new Organization($orgList[0]);
        $iiko->setOrganization($organization);
        $menu = $iiko->getGroupsWithNomenclature();
        $result = [];
        $count = 0;
        foreach ($menu->products as $product) {
            dd($product);
            if ($product->productCategoryId) {
                $name = $this->getCategoryNameById($menu->productCategories, $product->productCategoryId);
                $weekRacion = explode("-", $name);
                $result[$count]["weekDay"] = $weekRacion[0];
                $result[$count]["priority"] = $weekRacion[1];
                $result[$count]["id"] = $product->id;
                $result[$count]["name"] = $product->name;
                $result[$count]["description"] = $product->description;
                $result[$count]["proteins"] = round($product->fiberFullAmount);//белки
                $result[$count]["fats"] = round($product->fatFullAmount);//жиры
                $result[$count]["carbs"] = round($product->carbohydrateFullAmount);//углеводы
                $result[$count]["kcal"] = round($product->energyFullAmount);
                $result[$count]["weight"] = $product->weight * 1000;
                $result[$count]["url"] = "";
                if ($value = reset($product->images)) {
                    $result[$count]["url"] = $value->imageUrl;
                } else {
                    $image = DishImage::where('name', mb_strtolower(trim(preg_replace('/\s+/', ' ', $product->name))))
                        ->value('image');
                    if (empty($image)) {
                        $image = Menu::where('name', $product->name)
                            ->where('url', 'like', '%.selcdn.ru%')
                            ->orderBy('dishId', 'desc')
                            ->value('url');
                        if (empty($image)) {
                            $image = Menu::where('name', $product->name)
                                ->whereRaw("(url IS NOT NULL AND url !='')")
                                ->orderBy('dishId', 'desc')
                                ->value('url');
                        }
                    }

                    if (!empty($image)) {
                        $result[$count]["url"] = $image;
                    }
                }

                $result[$count]["categoryID"] = "";
                if ($product->productCategoryId) {
                    $result[$count]["categoryID"] = $product->productCategoryId;
                }
                $count++;
            }
        }
        return $result;
    }

    private function getCategoryNameById($categories, $id)
    {
        foreach ($categories as $category) {
            if ($category->id == $id)
                return $category->name;
        }
        return null;
    }
}
