<?php
/**
 * Created by PhpStorm.
 * User: karim
 * Date: 03.10.2019
 * Time: 21:32
 */

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Traits\GoogleDriveApiTrait;
use Illuminate\Http\Request;
use App\Models\Menu;
use App\Models\User;
use Illuminate\View\View;

class AdminController extends Controller
{
    use GoogleDriveApiTrait;

    public function google($week)
    {
        $result = $this->saveFromGoogleDrive($week);
        if ($result == null) {
            return "Данной папки нет на google диске!";
        }
        return "Данные успешно загружены!";
    }

    public function index()
    {
        return view("admin.index", ['kassa' => 1000]);
    }

    public function menuIndex()
    {
        $products = Menu::all();
        return view("admin.menu.index", ['products' => $products]);
    }

    public function menuAdd()
    {
        $products = Menu::all();
        return view("admin.menu.add", ['products' => $products]);
    }

    public function postMenuAdd(Request $request)
    {
        $myModel = new Menu();

        $myModel->name = $request->name;
        $myModel->kcal = $request->kcal;
        $myModel->proteins = $request->proteins;
        $myModel->fats = $request->fats;
        $myModel->carbs = $request->carbohydrates;

        $path = $this->uploadFile($request, "image");
        $myModel->url = $path;
        $saved = $myModel->save();

        if (!$saved) {
            return view('admin.menu.add', ['error' => "Не удалось добавить новое блюдо. Пожайлуйста, попробуйте еще раз!"]);
        }
        return view('admin.menu.add', ['success' => "Блюдо успешно добавлено"]);
    }

    public function importExcel(Request $request)
    {
        $startDate = $this->getInputDate($request->week);
        $mondays = $this->calcMondays();
        $type = "excel";

        if ($startDate == 0)
            return view('admin.menu.import', ['error' => "Пожайлуйста, выберете начальную дату!", 'mondays' => $mondays]);

        $excelPath = $this->uploadFile($request, "excel");

        if ($excelPath == null)
            return view('admin.menu.import', ['error' => "Не удалось импортировать excel файл. Пожайлуйста, попробуйте еще раз!", 'mondays' => $mondays]);

        $phpexcel_array = $this->convertExcelToArray($excelPath);
        $insertData = $this->normalizeArray($phpexcel_array, $startDate);

        Menu::insert($insertData);

        return view('admin.menu.import', ['success' => "Excel файл успешно импортирован!", 'mondays' => $mondays]);
    }

    public function import()
    {
        $mondays = $this->calcMondays();

        return view('admin.menu.import', ['mondays' => $mondays]);
    }

    public function promocodeIndex()
    {
        return view("admin.promocodes.index");
    }

    public function promocodeAdd()
    {
        return view("admin.promocodes.add");
    }

    public function testimonialsIndex()
    {
        return view("admin.testimonials.index");
    }

    private function uploadFile($request, $type)
    {
        if ($request->has($type)) {
            $file = $request->file($type);
            $name = str_slug($request->name) . '_' . time() . '.' . $file->getClientOriginalExtension();
            $folder = public_path('images/uploaded/');
            $filePath = $folder . $name;
            $file->move($folder, $name);
            return $filePath;
        }
        return null;
    }

    private function convertExcelToArray($path)
    {
        $phpexcel_filename = $path;
        $phpexcel_filetype = \PHPExcel_IOFactory::identify($phpexcel_filename);
        $phpexcel_objReader = \PHPExcel_IOFactory::createReader($phpexcel_filetype);
        $phpexcel_objPHPExcel = $phpexcel_objReader->load($phpexcel_filename);

        $phpexcel_sheet = $phpexcel_objPHPExcel->getSheet(0);
        $phpexcel_highestRow = $phpexcel_sheet->getHighestRow();
        $phpexcel_highestColumn = $phpexcel_sheet->getHighestColumn();

        return $phpexcel_sheet->toArray();
    }

    private function normalizeArray($phpexcel_array, $startDate)
    {
        define("DISHKEYS", array("name", "priority", "weekDay", "kcal", "proteins", "fats", "carbs"));
        static $url_position = 7;
        static $google_drive_url = "http://drive.google.com/uc?export=view&id=";
        $date = new \DateTime($startDate);
        $weekNumber = $date->format("W");
        $folder_url = "/images/menu/" . $weekNumber;

        $insertData = [];
        for ($i = 1; $i < count($phpexcel_array); $i++) {
            if ($phpexcel_array[$i][0] == "")
                break;
            for ($j = 0; $j < count(DISHKEYS); $j++) {
                $insertData[$i - 1][DISHKEYS[$j]] = $phpexcel_array[$i][$j];
                $insertData[$i - 1]["startDate"] = $startDate;

                $str = $phpexcel_array[$i][$url_position];
                $sub = explode("id=", $str);
//                $insertData[$i - 1]["url"] = $google_drive_url . $sub[1];
                $insertData[$i - 1]["url"] = $folder_url . "/" . $phpexcel_array[$i][2] . "/" . $phpexcel_array[$i][1] . ".jpg";
            }
        }

        return $insertData;
    }

    private function getInputDate($strDate)
    {
        $arr = explode(" ", $strDate);
        return $arr[0];
    }

    private function calcMondays()
    {
        $mondays = [];
        $time = strtotime('monday this week');

        $date = new \DateTime(date('Y-m-d', $time));
        $week = $date->format("W");

        $lastMonday = date('Y-m-d', $time);
        $mondays[0] = $lastMonday . " (" . $week . " неделя)";

        for ($i = 1; $i < 5; $i++) {
            $week++;
            $lastMonday = date('Y-m-d', strtotime($lastMonday . ' + 7 days'));
            $mondays[$i] = date('Y-m-d', strtotime($lastMonday)) . " (" . $week . " неделя)";
        }
        return $mondays;
    }
}
