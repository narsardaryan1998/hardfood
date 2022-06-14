<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Управление доставкой</title>

    <meta name="description" content="@yield('description')">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="icon" href="/images/favicon.png" sizes="32x32"/>
    <link rel="icon" href="/images/favicon.png" sizes="192x192"/>
    <link rel="apple-touch-icon-precomposed" href="/images/favicon.png"/>
    <meta name="msapplication-TileImage" content="/images/favicon.png"/>
    <link href="{{ mix('css/app.css') }}?ver=10000018" rel="stylesheet">

    <style type="text/css">
        .red {
            background-color: red !important;
            font-weight: bold;
            color: white;
        }
    </style>
</head>
<body>
<div class="row mt-2 ml-1">
    <div class="col-md-1">
        <button class="btn btn-dark" onclick="history.back()">Назад</button>
    </div>
</div>
<div class="row" style="margin-top:40px !important; margin-left: 0px; margin-right: 0px">
    <div class="col-md-3 col-12">
        <form action="/maxoptralistdate">
            <div class="row">
                <div class="col-6"><input class="form-control w-100" type="date" name="datelist"></div>
                <div class="col-6">
                    <button class="btn btn-success w-100" type="submit">Отправить</button>
                </div>
            </div>
        </form>
    </div>
    <div class="col-md-2 col-6 mt-2"><a href="#" class="btn btn-warning w-100" id="export">скачать эксель</a></div>
    <div class="col-md-2 col-6 mt-2"><a href="#" class="btn btn-danger w-100" id="sendSMS">Отправить смс</a></div>
    <div class="col-md-5 col-12 mt-2">
        <div id="duplAddress"></div>
        <div id="duplPhone"></div>
        <div>{{$all}}</div>
        <div>{{$today}}</div>
        <div>{{$tomorrow}}</div>
    </div>
</div>
<div class="row" style="overflow-x: scroll">
    <div class="col-12">
        <table id="dateDelivery" class="table mt-5 table-striped table-hover" style="overflow-x: scroll">
            <thead>
            <th>Дата доставки</th>
            <th>Время доставки с</th>
            <th>Время доставки по</th>
            <th>Номер заказа</th>
            <th>Адрес получателя</th>
            <th>Компания получателя</th>
            <th>Контактное лицо получателя</th>
            <th>Телефон получателя</th>
            <th>Вес</th>
            <th>Количество</th>
            <th>Сумма</th>
            <th>Поручение</th>
            <th>Фасовка</th>
            </thead>
            <tbody>
            @foreach ($items as $item)
                <tr>
                    <td>{{date('d.m.Y', strtotime($item->delivery_date))}}</td>
                    <td>{{$item->from}}</td>
                    <td>{{$item->to}}</td>
                    <td>{{$item->maxoptra_id}}</td>
                    <td>{{$item->getNormAddress($item->address)}}</td>
                    <td>{{$item->client}}</td>
                    <td>{{$item->client}}</td>
                    <td>{{$item->phone}}</td>
                    <td>
                        @if ($item->s5 != '0' || $item->s7 != '0' || $item->m5 != '0' || $item->m7 != '0' || $item->l5 != '0'
                         || $item->l7 != '0' || ($item->p5 != '0' && $item->p5 != null) || ($item->p7 != '0' && $item->p7 != null))
                            {{((int)$item->s5+(int)$item->s7+(int)$item->m5+(int)$item->m7+(int)$item->l5+(int)$item->l7 + (int)$item->p5 + (int)$item->p7)}}
                        @endif
                    </td>
                    <td>
                        {{$item->quantity}}
                    </td>
                    <td>
                        @if ($item->pay)
                            {{$item->pay}}
                        @else
                            0
                        @endif
                    </td>
                    <td>{{$item->instruction}}</td>
                    <td>{{$item->client_exclude}}</td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
</div>
</body>


<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&amp;subset=cyrillic">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/suggestions-jquery@18.11.1/dist/css/suggestions.min.css">
<script type="text/javascript" src="//unpkg.com/xlsx/dist/shim.min.js"></script>
<script type="text/javascript" src="//unpkg.com/xlsx/dist/xlsx.full.min.js"></script>
<script type="text/javascript" src="//unpkg.com/blob.js@1.0.1/Blob.js"></script>
<script type="text/javascript" src="//unpkg.com/file-saver@1.3.3/FileSaver.js"></script>
<script src="{{ mix('js/app.js') }}?ver=10000018" defer></script>
