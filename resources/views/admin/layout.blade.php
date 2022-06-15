<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Администраторская панель - hardfood.ru</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="/plugins/font-awesome/css/font-awesome.min.css">
    <!-- IonIcons -->
    <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="/dist/css/adminlte.min.css">
    <!-- Google Font: Source Sans Pro -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}?ver=10000018" defer></script>
    <script src="{{ asset('js/somon.js') }}?ver=10000018" defer></script>
    <script src="{{ asset('js/bootstrap-input-spinner.js') }}?ver=10000018" defer></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}?ver=10000018" rel="stylesheet">
    <link href="{{ asset('css/somon.css') }}?ver=10000018" rel="stylesheet">
    <link href="{{ asset('css/pace.css') }}?ver=10000018" rel="stylesheet">

</head>
<!--
BODY TAG OPTIONS:
=================
Apply one or more of the following classes to to the body tag
to get the desired effect
|---------------------------------------------------------|
|LAYOUT OPTIONS | sidebar-collapse                        |
|               | sidebar-mini                            |
|---------------------------------------------------------|
-->
<body class="hold-transition sidebar-mini">
<div id="app">
    <div class="wrapper">
        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand bg-white navbar-light border-bottom">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#"><i class="fa fa-bars"></i></a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <a href="/admin" class="nav-link">Главная</a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <a href="#" class="nav-link">Настройки</a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <a href="{{ route('employee.logout') }}" class="nav-link">Выход</a>
                </li>
            </ul>


        </nav>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="/admin" class="mt-3" style="display: block; text-align: center; padding: 0 10px;">
                <img style="width: 100%; max-width: 100px;" src="/images/logo_white.svg" alt="">
            </a>

            <!-- Sidebar -->
            <div class="sidebar">

                <!-- Sidebar Menu -->
                <hr>
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                        data-accordion="false">
                        <li class="nav-item has-treeview">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fa fa-table"></i>
                                <p>
                                    Меню
                                    <i class="fa fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="/admin/menu/iiko" class="nav-link">
                                        <p>Сформировать из IIKO</p>
                                    </a>
                                </li>
                                <hr>
                                <li class="nav-item">
                                    <a href="{{ route('menuHistory') }}" class="nav-link">
                                        <p>Посмотреть меню по неделям</p>
                                    </a>
                                </li>
                                <hr>
                                <li class="nav-item">
                                    <a href="{{ route('menuIndex') }}" class="nav-link">
                                        <p>Сформировать вручную</p>
                                    </a>
                                </li>
                                <hr>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="/admin/promocodes" class="nav-link">
                                <i class="nav-icon fa fa-calendar"></i>
                                <p>
                                    Промокоды
                                </p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fa fa-book"></i>
                                <p>
                                    Страницы
                                </p>
                            </a>
                        </li>
                        <li class="nav-item has-treeview">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fa fa-plus-square-o"></i>
                                <p>
                                    Блог
                                    <i class="fa fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="pages/examples/404.html" class="nav-link">
                                        <p>Список постов</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="pages/examples/500.html" class="nav-link">
                                        <p>Добавить пост</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="pages/examples/blank.html" class="nav-link">
                                        <p>Категории</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="starter.html" class="nav-link">
                                        <p>Тэги</p>
                                    </a>
                                </li>
                                <hr>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="/admin/testimonials" class="nav-link">
                                <i class="nav-icon fa fa-quote-right"></i>
                                <p>
                                    Отзывы
                                </p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fa fa-question"></i>
                                <p>
                                    Вопрос-ответ
                                </p>
                            </a>
                        </li>
                        <li class="nav-item has-treeview">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fa fa-plus-square-o"></i>
                                <p>
                                    Администратор
                                    <i class="fa fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="{{ route('addEmployeeView') }}" class="nav-link">
                                        <p>Добавить сотрудника</p>
                                    </a>
                                </li>
                                <hr>
                            </ul>
                        </li>
                        <li class="nav-item has-treeview">
                            <a href="#" class="nav-link">
                                <i class="nav-icon ion ion-pie-graph"></i>
                                <p>
                                    Аналитика
                                    <i class="fa fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="{{ route('orderAnalytics') }}" class="nav-link">
                                        <p>Заказы</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="{{ route('promocodeAnalytics') }}" class="nav-link">
                                        <p>Промокоды</p>
                                    </a>
                                </li>
                                <hr>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="container">
                <div class="row mb-4"></div>
            </div>
            <!-- Main content -->
            <div class="content">
                @if ($errors->any())
                    <div class="alert alert-danger">
                        @foreach ($errors->all() as $error)
                            {{ $error }}<br>
                        @endforeach
                    </div>
            @endif
            @yield('content')
            <!-- /.container-fluid -->
            </div>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->

        <!-- Main Footer -->
    </div>
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->

<!-- jQuery -->
<script src="/plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap -->
<script src="/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- AdminLTE -->
<script src="/dist/js/adminlte.js"></script>

<!-- OPTIONAL SCRIPTS -->
<script src="/plugins/chart.js/Chart.min.js"></script>
<script src="/dist/js/demo.js"></script>
<script src="/dist/js/pages/dashboard3.js"></script>
</body>
</html>
