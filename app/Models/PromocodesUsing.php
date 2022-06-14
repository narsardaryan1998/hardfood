<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PromocodesUsing extends Model
{
    public $timestamps = false;

    protected $table = 'promocodes_using';

    protected $fillable = [
        'phone', 'promocodeId', 'price', 'type', 'description'
    ];
}
