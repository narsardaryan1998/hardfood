<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use App\Traits\IikoApiTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MenuController extends Controller
{
    use IikoApiTrait;

    public function addMenuSchedule(Request $request)
    {
        $startDate = $request->startDate;
        $menu = $request->menu;
        $weekDay = $request->weekDay;

        if(Menu::where('startDate', $startDate)->first() && $weekDay == 1)
        {
            Menu::where('startDate', $startDate)->delete();
        }
        if(!$startDate)
            return response()->json(['message' => 'Пожалуйста укажите дату для меню!'], 200);


        for ($i = 0; $i < count($menu); $i++) {
            $menu[$i] = json_decode($menu[$i]);
        }

        $normalizeMenu = [];
        for ($i = 0; $i < count($menu); $i++) {
            foreach ($menu[$i] as $key => $value) {
                if ($key == "id" || $key == "categoryID")
                    continue;
                $normalizeMenu[$i][$key] = $value;
            }
            $normalizeMenu[$i]["weekDay"] = $weekDay;
            $normalizeMenu[$i]["priority"] = $i + 1;
            $normalizeMenu[$i]["startDate"] = $startDate;
        }
        if (count($normalizeMenu) > 0) {
            Menu::insert($normalizeMenu);
        }

        return response()->json(['message' => 'Данные добавлены!'], 200);
    }
    public function addMenuScheduleFromIiko2(Request $request)
    {
        $startDate = $request->startDate;
        $menu = $request->menu;
        $order = $request->order;

        if(!$startDate)
            return response()->json(['message' => 'Пожалуйста укажите дату для меню!'], 200);

        if(Menu::where('startDate', $startDate)->first() && $order == 1)
        {
            Menu::where('startDate', $startDate)->delete();
        }

        for ($i = 0; $i < count($menu); $i++) {
            $menu[$i] = json_decode($menu[$i]);
        }

        $normalizeMenu = [];
        for ($i = 0; $i < count($menu); $i++) {
            foreach ($menu[$i] as $key => $value) {
                if ($key == "id" || $key == "categoryID")
                    continue;
                $normalizeMenu[$i][$key] = $value;
            }
            $normalizeMenu[$i]["startDate"] = $startDate;
        }
        if (count($normalizeMenu) > 0) {
            Menu::insert($normalizeMenu);
        }

        return response()->json(['message' => 'Данные добавлены!'], 200);
    }
    public function addMenuScheduleFromIiko(Request $request)
    {
        $startDate = $request->startDate;
        $menu = $request->menu;
        $order = $request->order;

        if(!$startDate)
            return response()->json(['message' => 'Пожалуйста укажите дату для меню!'], 200);

        if(Menu::where('startDate', $startDate)->first() && $order == 1)
        {
            Menu::where('startDate', $startDate)->delete();
        }

        for ($i = 0; $i < count($menu); $i++) {
            $menu[$i] = json_decode($menu[$i]);
        }

        $normalizeMenu = [];
        for ($i = 0; $i < count($menu); $i++) {
            foreach ($menu[$i] as $key => $value) {
                if ($key == "id" || $key == "categoryID")
                    continue;
                $normalizeMenu[$i][$key] = $value;
            }
            $normalizeMenu[$i]["startDate"] = $startDate;
        }
        if (count($normalizeMenu) > 0) {
            Menu::insert($normalizeMenu);
        }

        return response()->json(['message' => 'Данные добавлены!'], 200);
    }

    public function menuIndex()
    {
        $products = $this->getProducts();
        $categories = $this->getCategories();
        //$products = Menu::all();
        return view("admin.menu.index", ['products' => $products, 'categories' => $categories]);
    }

    public function menuIIKO(){
        $menu = $this->getMenu();
        return view("admin.menu.iiko",['menu' => $menu]);
    }
    public function menuHistory(){
        $timeThisWeek = strtotime('monday this week');
        $timeNextWeek = strtotime('monday next week');
        $showMenus = DB::table('menus')->where('startDate', '=', date('Y-m-d', $timeThisWeek))
            ->orWhere('startDate', '=', date('Y-m-d', $timeNextWeek))->orderBy("startDate")->get()->toJson();
        return view("admin.menu.history",['menu' => $showMenus]);
    }

    public function getMenuForWeek(){
        $products = $this->getProducts();
        $categories = $this->getCategories();
        //$products = Menu::all();
        return view("admin.menu.index", ['products' => $products, 'categories' => $categories]);
    }
    public function getMenuByDate($startDate){
        $menu = Menu::where('startDate','=',$startDate)->get();

        return response()->json(['menu'=>$menu],200);
    }
}
