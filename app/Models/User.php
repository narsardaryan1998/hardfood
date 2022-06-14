<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Questocat\Referral\Traits\UserReferral;

class User extends Authenticatable
{
    use HasFactory, Notifiable, UserReferral;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'referred_by', 'affiliate_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    const CHOSEN_RATION_S = 's';
    const CHOSEN_RATION_M = 'm';
    const CHOSEN_RATION_L = 'l';

    /**
     * @return int
     */
    public function getCountLinked()
    {
        return count(self::where('referred_by', $this->affiliate_id)->get());
    }
}
