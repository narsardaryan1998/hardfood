<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Производство</title>

    <meta name="description" content="@yield('description')">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="icon" href="/images/favicon.png" sizes="32x32"/>
    <link rel="icon" href="/images/favicon.png" sizes="192x192"/>
    <link rel="apple-touch-icon-precomposed" href="/images/favicon.png"/>
    <meta name="msapplication-TileImage" content="/images/favicon.png"/>
    <link href="{{ mix('css/app.css') }}?ver=10000018" rel="stylesheet">
</head>

<body>
<div class="row mt-2 ml-1">
    <div class="col-md-1">
        <button class="btn btn-dark" onclick="history.back()">Назад</button>
    </div>
</div>

<form action="/maxoptralistdateprod">
    <div class="row mt-3">
        <div class="col-md-3 col-6 pl-4"><input class="form-control" type="date" name="datelist"></div>
        <div class="col-md-3 col-6 pr-4">
            <button class="btn btn-success w-100" type="submit">Отправить</button>
        </div>
    </div>
</form>
<div class="data row">

</div>

<div class="dataNotGrouped row">

</div>

<table class="table table-striped table-hover">
    <thead>
    <th>Lead</th>
    <th>S</th>
    <th>M</th>
    <th>L</th>
    <th>P</th>
    </thead>
    <tbody>
    @foreach ($items as $item)
        <tr>
            <td>{{$item->maxoptra_id}}</td>
            <td>
                @if ($item->s5 != '0' || $item->s7 != '0')
                    {{((int)$item->s5+(int)$item->s7)}}
                @endif
            </td>
            <td>
                @if ($item->m5 != '0' || $item->m7 != '0')
                    {{((int)$item->m5+(int)$item->m7)}}
                @endif
            </td>
            <td>
                @if ($item->l5 != '0' || $item->l7 != '0')
                    {{((int)$item->l5+(int)$item->l7)}}
                @endif
            </td>
            <td>
                @if (($item->p5 != '0' && $item->p5 != null)
                 ||  ($item->p7 != '0' && $item->p7 != null))
                    {{((int)$item->p5+(int)$item->p7)}}
                @endif
            </td>
        </tr>
    @endforeach
    </tbody>
</table>
<style>
    .data, .dataNotGrouped {
        display: flex;
        justify-content: center;
    }

    .data div {
        font-size: 50px;
    }

    .dataNotGrouped div {
        font-size: 40px;
    }

    .data span {
        font-size: 70px;
        font-weight: bold;
        color: #959595;
    }

    .dataNotGrouped span {
        font-size: 58px;
        font-weight: bold;
        color: #959595;
    }

    @media (max-width: 556px) {
        .data, .dataNotGrouped {
            text-align: center;
        }

        .data div {
            font-size: 30px;
        }

        .dataNotGrouped div {
            font-size: 25px;
        }

        .data span {
            font-size: 40px;
        }

        .dataNotGrouped span {
            font-size: 33px;
        }
    }
</style>
</body>

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&amp;subset=cyrillic">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/suggestions-jquery@18.11.1/dist/css/suggestions.min.css">

<script src="{{ mix('js/app.js') }}?ver=10000018" defer></script>
