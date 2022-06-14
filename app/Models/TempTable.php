<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TempTable extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'phone', 'email', 'total_amount_vendor', 'total_amount_client', 'order_date', 'city',
    ];
}
