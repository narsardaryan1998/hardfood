<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Управление доставкой</title>
    <meta name="description" content="@yield('description')">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="icon" href="/images/logo_hf.ico" sizes="32x32"/>
    <link rel="icon" href="/images/logo_hf.ico" sizes="192x192"/>
    <link rel="apple-touch-icon-precomposed" href="/images/logo_hf.ico"/>
    <meta name="msapplication-TileImage" content="/images/logo_hf.ico"/>
    <link href="{{ mix('css/app.css') }}?ver=10000018" rel="stylesheet">
</head>
<body class="position-relative">
<div id="app">
    <amocrm-list-component
        v-bind:amocrm-data="{{$amocrm_data}}"
        v-bind:saved-deliverys="{{$saved_deliverys}}"
    >
    </amocrm-list-component>
</div>
</body>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&amp;subset=cyrillic">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/suggestions-jquery@18.11.1/dist/css/suggestions.min.css">

<script src="{{ mix('js/app.js') }}?ver=10000018" defer></script>
