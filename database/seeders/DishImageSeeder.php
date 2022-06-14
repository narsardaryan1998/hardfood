<?php

namespace Database\Seeders;

use App\Models\DishImage;
use App\Models\Menu;
use Illuminate\Database\Seeder;

class DishImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $response = DishImage::select('name', 'image')->get();
//        $image = Menu::where('url', 'like', '%.selcdn.ru%')->groupBy('url')->get();
//        dd($image);
        foreach ($response as $value) {
            $image = Menu::where('name', mb_strtolower(trim(preg_replace('/\s+/', ' ', $value->name))))
                ->first();
            if (!empty($image)) {
                Menu::where('name', mb_strtolower(trim(preg_replace('/\s+/', ' ', $value->name))))
                    ->whereRaw("(racion IS NULL OR racion ='')")
                    ->update([
                        'url' => $value->image
                    ]);
                if (!empty($image->url)) {
                    Menu::where('url', $image->url)
                        ->whereRaw("(racion IS NULL OR racion ='')")
                        ->update([
                            'url' => $value->image
                        ]);
                }
            } else {
                dump($value->name);
            }
        }
    }
}
