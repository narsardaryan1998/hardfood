<?php


namespace App\Traits;


use Gumlet\ImageResize;
use Illuminate\Support\Facades\Storage;

trait GoogleDriveApiTrait
{
    private $rootPath = "";
    private $listOfBigImages = [];

    /**
     * Загружает все элементы меню на указанную неделю
     * @param $week
     */
    public function saveFromGoogleDrive($week)
    {
        $this->rootPath = "images" . DIRECTORY_SEPARATOR . "menu" . DIRECTORY_SEPARATOR . $week;

        $path = $this->getPathOfDirByName($week);
        if($path=="")
        {
            return null;
        }
        $dirs = $this->getListOfDir($path);

        foreach ($dirs as $dir) {
            $this->scaleAndSave($dir);
        }

        $this->removeBigImages();
        return true;
    }

    /**
     * возвращает список всех папок для указанной директории
     * @param string $dir
     * @return \Illuminate\Support\Collection
     */
    function getListOfDir($dir = '/')
    {
        $recursive = false; // Get subdirectories also?
        $contents = collect(Storage::cloud()->listContents($dir, $recursive));

        return $contents->where('type', '=', 'dir');
    }

    /**
     * Ищет директорию по указанному имени и возвращает путь до неё
     * @param $dirname
     * @return mixed
     */
    function getPathOfDirByName($dirname)
    {
        $contents = $this->getListOfDir();
        $dir = $contents
            ->where('type', '=', 'dir')
            ->where('filename', '=', pathinfo($dirname, PATHINFO_FILENAME))
            ->first();

        return $dir["path"];
    }

    /**
     * Сжимает и сохраняет все изображения указанной директории
     * @param $dir
     */
    function scaleAndSave($dir)
    {
        $filesDir = DIRECTORY_SEPARATOR . $dir['path'];
        $recursive = false;
        $contents = collect(Storage::cloud()->listContents($filesDir, $recursive));

        foreach ($contents as $content) {
            $rawData = Storage::cloud()->get($content['path']);
            $saveDir = $this->rootPath . DIRECTORY_SEPARATOR . $dir['filename'];
            $filename = $content['filename'] . "." . $content['extension'];

            $location = $this->saveFile($saveDir, $filename, $rawData);
            array_push($this->listOfBigImages, $location);

            $this->scaleImage($location);
        }
    }

    /**
     * Сжимает изображение
     * @param $location - путь до изображения
     * @throws \Gumlet\ImageResizeException
     */
    function scaleImage($location)
    {
        $normalizeLocation = $this->normalizeLocation($location);
        $temp = new ImageResize($location);
        $temp->scale(50);
        $temp->save($normalizeLocation);
    }

    /**
     * Сохраняет файл
     * @param $folderPath - директорию в которую нужно сохранить
     * @param $filename - имя файла
     * @param $filecontent - данные для сохранения
     * @return int|string возвращает путь до файла при успешном сохранении
     */
    function saveFile($folderPath, $filename, $filecontent)
    {
        if (strlen($filename) > 0) {
            if (!file_exists($folderPath)) {
                mkdir($folderPath, 0777, true);
            }
            $file = @fopen($folderPath . DIRECTORY_SEPARATOR . $filename, "w");
            if ($file != false) {
                fwrite($file, $filecontent);
                fclose($file);
                return $folderPath . DIRECTORY_SEPARATOR . $filename;
            }
            return -2;
        }
        return -1;
    }

    /**
     * Возвращает путь для сохранения в формате {weekNumber}/{dayNumber}/{dishNumber}
     * @param $location - начальный путь
     * @return string
     */
    function normalizeLocation($location)
    {
        $dirs = explode(DIRECTORY_SEPARATOR, $location);
        return $dirs[0] ."/". $dirs[1] . "/" . $dirs[2] . "/" . $dirs[3] . "/" . $dirs[4][0] . ".jpg";
    }

    /**
     * Удаляет изображения полученные из google диска, после их сжатия
     */
    function removeBigImages()
    {
        foreach ($this->listOfBigImages as $file) {
            unlink($file);
        }
    }
}
