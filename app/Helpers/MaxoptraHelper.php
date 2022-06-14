<?php


namespace App\Helpers;

class MaxoptraHelper
{
    const STATUS_ARRAY = [
      'NEW' => 'Обрабатывается',
      'ALLOCATED' => 'Обрабатывается',
      'COMMITTING' => 'Обрабатывается',
      'DETAILS_SENDING' => 'Обрабатывается',
      'DETAILS_SENT' => 'Обрабатывается',
      'COMMITTED' => 'Обрабатывается',
      'PICKUP_ON_MOVE' => 'Начался сбор заказа',
      'PICKUP _ARRIVED' => 'Начался сбор заказа',
      'PICKUP _STARTED' => 'Начался сбор заказа',
      'PICKUP _FINISHED' => 'Начался сбор заказа',
      'PICKUP _DEPARTED' => 'Начался сбор заказа',
      'PICKUP_ARRIVED' => 'Начался сбор заказа',
      'PICKUP_STARTED' => 'Начался сбор заказа',
      'PICKUP_FINISHED' => 'Начался сбор заказа',
      'PICKUP_DEPARTED' => 'Начался сбор заказа',
      'DELIVERY_ON_MOVE' => 'Началась доставка заказа',
      'DELIVERY_ARRIVED' => 'Началась доставка заказа',
      'DELIVERY_STARTED' => 'Началась доставка заказа',
      'DELIVERY_FINISHED' => 'Началась доставка заказа',
      'DELIVERY_DEPARTED' => 'Началась доставка заказа',
      'CLOSED' => 'Доставлено',
      'FAILED' => 'Заказ не выполнен',
      'SUSPENDED' => 'Заказ приостановлен',
    ];
}
