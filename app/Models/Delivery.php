<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Delivery extends Model
{
    protected $table = 'deliverys';

    public static function getNormFulladress($address) {

        if (strpos($address, 'Подьезд')) {
            $norm_address = strstr($address, 'Подьезд');

            return $norm_address;
        }
        return $address;

    }

    public static function getNormAddress($address) {

        if (strpos($address, 'Подьезд')) {
            $norm_address = strstr($address, 'Подьезд', true);
        return $norm_address;
        }
        return $address;
    }

    public static function getPhone($id) {
//        $client = AmoCrm::getClient();
//
//        $lead = $client->lead->apiList([
//            'id' => $id,
//        ]);
//
//
//        if ($lead) {
//            $contact = $client->contact->apiList([
//                'id' => $lead[0]['main_contact_id']
//            ]);
//
//            $fields = $contact[0]['custom_fields'];
//
//            foreach ($fields as $key => $value) {
//                if ($value['id'] == config('amocrm.contactFields.phone')) {
//                    return $value['values'][0]['value'];
//                }
//            }
//        } else {
//            return '';
//        }
    }
}
