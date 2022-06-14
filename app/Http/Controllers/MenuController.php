<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Traits\IikoApiTrait;

class MenuController extends Controller
{
    use IikoApiTrait;

    /**
     * @return array
     */
    public function getSimpleMenu()
    {
        $query = "SELECT * FROM menus WHERE racion IN ('s', 'm', 'l') ORDER BY racion, WEEKDAY, priority";
        return DB::select($query);
    }

    /**
     * @return string
     */
    public function getActualMenu()
    {
        $timeThisWeek = strtotime('monday this week');
        $timeNextWeek = strtotime('monday next week');

        return DB::table('menus')
            ->where(function ($query) use ($timeThisWeek) {
                $query->where('startDate', date('Y-m-d', $timeThisWeek))
                    ->where('weekDay', '>=', date('N', strtotime("now")));
            })->orWhere(function ($query) use ($timeNextWeek) {
                $query->where('startDate', date('Y-m-d', $timeNextWeek))
                    ->where('weekDay', '<', date('N', strtotime("now")));
            })->orderBy("weekDay")
            ->get()
            ->toJson();
    }

    public function menuIndex()
    {
        $products = $this->getProducts();
        $categories = $this->getCategories();
        //$products = Menu::all();
        return view("admin.menu.index", ['products' => $products, 'categories' => $categories]);
    }

    public function menuIIKO()
    {
        $menu = $this->getMenu();
        return view("admin.menu.iiko", ['menu' => $menu]);
    }

    public function menuHistory()
    {
        $timeThisWeek = strtotime('monday this week');
        $timeNextWeek = strtotime('monday next week');
        $showMenus = DB::table('menus')->where('startDate', '=', date('Y-m-d', $timeThisWeek))
            ->orWhere('startDate', '=', date('Y-m-d', $timeNextWeek))->orderBy("startDate")->get()->toJson();
        return view("admin.menu.history", ['menu' => $showMenus]);
    }

    public function getMenuByDate($startDate)
    {
        $menu = Menu::where('startDate', '=', $startDate)->get();

        return response()->json(['menu' => $menu], 200);
    }

    public function getMenuForWeek()
    {
        $products = $this->getProducts();
        $categories = $this->getCategories();
        //$products = Menu::all();
        return view("admin.menu.index", ['products' => $products, 'categories' => $categories]);
    }

    public function addMenuScheduleFromIiko(Request $request)
    {
        $startDate = $request->startDate;
        $menu = $request->menu;
        if (!$startDate)
            return response()->json(['message' => 'Пожалуйста укажите дату для меню!'], 200);

        if (Menu::where('startDate', $startDate)->first()) {
            Menu::where('startDate', $startDate)->delete();
        }

        $normalizeMenu = [];
        for ($i = 0; $i < count($menu); $i++) {
            foreach ($menu[$i] as $key => $value) {
                if ($key == "id" || $key == "categoryID")
                    continue;
                $normalizeMenu[$i][$key] = $value;
            }
            $normalizeMenu[$i]["startDate"] = $startDate;
            $normalizeMenu[$i]["url"] = $normalizeMenu[$i]["url"] ?? '';
        }

        if (count($normalizeMenu) > 0) {
            Menu::insert($normalizeMenu);
        }

        return response()->json(['message' => 'Данные добавлены!'], 200);
    }
}
