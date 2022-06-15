<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,700;1,500;1,700&display=swap"
          rel="stylesheet">
    <link id="cssFile" rel="stylesheet" href="/css/blog.css">
    <link rel="stylesheet" href="/css/light-mode.css" id="theme">
    <link rel="icon" href="/images/logo_hf.ico" sizes="32x32"/>
    <link rel="icon" href="/images/logo_hf.ico" sizes="192x192"/>
    <link rel="apple-touch-icon-precomposed" href="/images/logo_hf.ico"/>
    <link rel="canonical" href="@yield('url')"/>
    <meta property="og:title" content="@yield('title')"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="hardfood.ru"/>
    <meta property="og:url" content="@yield('url')"/>
    <meta property="og:image" content="@yield('image')"/>
    <meta property="og:image:width" content="400"/>
    <meta property="og:image:height" content="300"/>
    <meta property="og:image:type" content="image/png"/>
    <title>@yield('title')</title>
    <meta name="description" content="@yield('description')">
</head>

<body>
@include('inc.preloader')
<div class="wrapper main-app blog-wrapper">
    <div class="conteiner">
        <div class="header">
            <div class="header__menu">
                <div class="header__wrapper">
                    <div class="header__container">
                        <div class="menu">
                            <div class="menu__burger burger-menu">
                                <div class="checkbox switchMode">
                                    <input type="checkbox" name="ckeckbox_1">
                                </div>
                                <a href="/" id="_road-link" class="burger-menu__item">Главная</a>
                                <a href="/personal-area" v-if="userData.name && userData.loggedIn"
                                   class="default-text-color">@{{ userData.name }}</a>
                                <a href="/personal-area" v-else-if="userData.phone && userData.loggedIn"
                                   class="default-text-color">@{{ userData.phone }}</a>
                                <div href="#" v-else @click="modalAction('personal-area-tell', false)"
                                   class="burger-menu__enter popap-link default-text-color">Войти</div>
                            </div>
                            <a href="/" class="default-text-color">
                                <div>
                                    <div class="sub_title">HardFood</div>
                                    <div class="comment">= вкусно + полезно</div>
                                </div>
                            </a>
                            <div>
                                <a href="#">
                                    <img class="town_icon" src="/img/Ellipse1.svg">
                                    <div class="town_name">Москва</div>
                                </a>
                            </div>
                            <div>
                                <a class="tell" href="tel:+74993227216">+7(499)-322-72-16</a>
                            </div>
                            <div>
                                <button @click="modalAction('ringMe', false)" class="ring_me popap-link">Перезвоните
                                    мне
                                </button>
                            </div>
                            <div class="about-fixed">
                                <div class="about-fixed__btn">
                                </div>
                            </div>
                            <div class="about_us">
                            </div>
                            <div class="checkbox switchMode">
                                <input type="checkbox" name="ckeckbox_1">
                            </div>
                            <a href="/personal-area" v-if="userData.name && userData.loggedIn"
                               class="enter default-text-color">@{{ userData.name }}</a>
                            <a href="/personal-area" v-else-if="userData.phone && userData.loggedIn"
                               class="enter default-text-color">@{{ userData.phone }}</a>
                            <div v-else @click="modalAction('personal-area-tell', false)"
                                 class="enter popap-link default-text-color">Войти
                            </div>
                            <button class="_burger-btn">
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @yield('content')
        @include('inc.footer')
        @include('inc.rules.popap')
        @include('inc.scroll-to-top')
    </div>
</div>
<script src="//code.jivosite.com/widget/aDazpY2IZq" async></script>
<script src="https://cdn.jsdelivr.net/npm/v-mask/dist/v-mask.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"
        integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.2/locale/ru.min.js"
        integrity="sha512-yzBnBA7a6znHOpUmxRjpnoFnYo7/3H1zo+HjIhq4JyePDV/SRheOKxmrYM2Tvq4P/+CU25jV5zpQWdstjnLkvw=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://widget.cloudpayments.ru/bundles/cloudpayments"></script>
<script src="/js/main-script-dist.js"></script>
<script src="/js/preloader.js"></script>
</body>
</html>
