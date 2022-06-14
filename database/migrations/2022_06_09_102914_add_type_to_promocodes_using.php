<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTypeToPromocodesUsing extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('promocodes_using', function (Blueprint $table) {
            $table->enum('type', ['Реферал', 'Специальный'])->default('Специальный');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('promocodes_using', function (Blueprint $table) {
            $table->dropColumn('type');
        });
    }
}
