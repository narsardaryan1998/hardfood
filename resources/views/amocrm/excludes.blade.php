<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Список исключении</title>
    <meta name="description" content="@yield('description')">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="icon" href="/images/favicon.png" sizes="32x32" />
    <link rel="icon" href="/images/favicon.png" sizes="192x192" />
    <link rel="apple-touch-icon-precomposed" href="/images/favicon.png" />
    <meta name="msapplication-TileImage" content="/images/favicon.png" />
    <link href="{{ mix('css/app.css') }}?ver=10000018" rel="stylesheet">
</head>
<body>
<div id="app">
    <exclude-list-component></exclude-list-component>
</div>
</body>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&amp;subset=cyrillic">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/suggestions-jquery@18.11.1/dist/css/suggestions.min.css">
<script src='/js/pdfmake2.min.js'></script>
<script src='/js/vfs_fonts.js'></script>
<script src="{{ mix('js/app.js')}}?ver=10000018" defer></script>
