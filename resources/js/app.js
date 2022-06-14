/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');
window.Vue = require('vue').default;
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import $ from 'jquery';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('exclude-list-component', require('./components/ExcludeListComponent.vue').default);
Vue.component('amocrm-list-component', require('./components/amocrmListComponent.vue').default);
Vue.component('maxoptra-list-component', require('./components/maxoptraListComponent.vue').default);
Vue.component('admin-order-component', require('./components/AdminOrderComponent.vue').default);
Vue.component('history-order-component', require('./components/HistoryOrderComponent.vue').default);
Vue.component('analytics-order-component', require('./components/analytics/orders.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});

require('table2csv');

$(document).ready(function() {
    var trsDup = document.querySelectorAll('#dateDelivery tr'),
        preResult = [],
        results = [],
        tempAddress = {},
        tempPhone = {};

    trsDup.forEach(function(element) {
        preResult.push(element);
    });

    tempAddress = preResult.filter(function(a) {
        return (tempAddress[a.cells[4].innerHTML] || !(tempAddress[a.cells[4].innerHTML] = !0));
    });
    tempPhone = preResult.filter(function(a) {
        return (tempPhone[a.cells[7].innerHTML] || !(tempPhone[a.cells[7].innerHTML] = !0));
    });
    tempAddress.forEach((tempAddress) => {
        tempAddress.classList.add('red');
    });
    tempPhone.forEach((tempPhone) => {
        tempPhone.classList.add('red');
    });

    var boxDupAddress = document.getElementById('duplAddress');

    if (boxDupAddress) {
        boxDupAddress.innerHTML = 'Дублей адресов: ' + tempAddress.length;
    }

    var boxDupPhone = document.getElementById('duplPhone');

    if (boxDupPhone) {
        boxDupPhone.innerHTML = 'Дублей номеров телефона: ' + tempPhone.length;
    }

    function formatDate(date) {
        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        var yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        return dd + '.' + mm + '.' + yy;
    }

    $('#sendSMS').click(function(event) {
        let items = [];

        let trs = document.querySelectorAll('#dateDelivery tr');

        trs.forEach((element, index) => {
            let phone = element.cells[7].innerHTML;

            // phone = phone.replace(/[^.\d]+/g, '').replace(/^([^\.]*\.)|\./g, '$1');

            if (phone.indexOf('||') + 1 != 0) {
                let arrPhone = phone.split('||');
                phone = parseInt(arrPhone[0].replace(/\D+/g, ''));
            } else {
                phone = parseInt(phone.replace(/\D+/g, ''));
            }

            if (index > 0) {
                items.push({
                    clientPhone: phone,
                    date: element.cells[0].innerHTML,
                    from: element.cells[1].innerHTML,
                    to: element.cells[2].innerHTML
                });
            }
        });

        $('.preloader').css('display', 'flex');
        axios({
            method: 'post',
            url: '/maxoptralistsms',
            data: {
                items: items
            }
        }).then((response) => {
            $('.preloader').css('display', 'none');
        });
    });

    $('#export').click(function(event) {
        var d = new Date();
        let options = {
            separator: ';',
            newline: '\n',
            quoteFields: true,
            excludeColumns: '',
            excludeRows: '',
            trimContent: true,
            filename: 'Доставки - ' + formatDate(d) + '.csv',
            appendTo: '#output'
        };

        $('#dateDelivery').table2csv('download', options);
    });

    [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function() {
            img.removeAttribute('data-src');
        };
    });

    const alertRow = document.querySelector('.alert-danger-row');

    if (alertRow) {
        function funcAlertRow() {
            $(alertRow).fadeOut('slow');
        }
        setTimeout(funcAlertRow, 1500);
    }

    /*var element = $('.newOrder');
    var element2 = $('.map_inner');
    if (element.length != 0) {
        var offset = element.offset().top - element.height() / 2 + 100;
        var offset2 = element2.offset().top - 200;
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset && $(this).scrollTop() < offset2) {
                $('.top_change_racion').addClass('fixed');
            } else {
                $('.top_change_racion').removeClass('fixed');
            }
        });
    }*/

    // $(window).scroll(function() {
    // 	if ($(this).scrollTop() > 50) {
    // 		$('.main_top_nav').addClass('scrolled');
    // 	} else {
    // 		$('.main_top_nav').removeClass('scrolled');
    // 	}
    // });

    if (document.querySelector('div.main_top_nav__menu a')) {
        let btnMenu = document.querySelector('div.main_top_nav__menu a i');
        let wrapperMenu = document.querySelector('div.main_top_nav__wrapper');
        btnMenu.onclick = (e) => {
            e.preventDefault();
            if (!wrapperMenu.classList.contains('active')) {
                wrapperMenu.classList.toggle('active');
                btnMenu.classList = 'fas fa-times';
            }
            else {
                wrapperMenu.classList.remove('active');
                btnMenu.classList = 'fas fa-bars';
            }
        };
    }

    var data = {
        all: 0,
        s: 0,
        m: 0,
        l: 0,
        p: 0
    };

    var tr = document.querySelectorAll('table tr');

    var box = document.querySelector('.data');
    var boxDataNotGrouped = document.querySelector('.dataNotGrouped');

    tr.forEach((element, index) => {
        if (index != 0) {
            if (parseInt(element.cells['1'].innerHTML)) {
                data.s = data.s + parseInt(element.cells['1'].innerHTML);
            } else {
                data.s = data.s + 0;
            }

            if (parseInt(element.cells['2'].innerHTML)) {
                data.m = data.m + parseInt(element.cells['2'].innerHTML);
            } else {
                data.m = data.m + 0;
            }
            if (parseInt(element.cells['3'].innerHTML)) {
                data.l = data.l + parseInt(element.cells['3'].innerHTML);
            } else {
                data.l = data.l + 0;
            }
            if (parseInt(element.cells['4'].innerHTML)) {
                data.p = data.p + parseInt(element.cells['4'].innerHTML);
            } else {
                data.p = data.p + 0;
            }
        }
    });
    if (box) {
        box.innerHTML = `<div class="col-md-3 col-6"><span>S</span> = ${data.s + data.m + data.l}</div>
<div class="col-md-3 col-6"><span>M</span> = ${data.m + data.l}</div>
<div class="col-md-3 col-6"><span>L</span> = ${data.l}</div>
<div class="col-md-3 col-6"><span>P</span> = ${data.p}</div>`;
    }
    if (boxDataNotGrouped) {
        boxDataNotGrouped.innerHTML = `<div class="col-md-3 col-6"><span>S</span> = ${data.s}</div>
<div class="col-md-3 col-6"><span>M</span> = ${data.m}</div>
<div class="col-md-3 col-6"><span>L</span> = ${data.l}</div>
<div class="col-md-3 col-6"><span>P</span> = ${data.p}</div>`;
    }
});
(function($)
{
    let ViewMobileWidth = 768;

    $(document).ready(function()
    {
        if (window.matchMedia('(max-width: ' + ViewMobileWidth + 'px)'))
        {
            let w = $('.racion-tabs').width();
            let view = $('.justify-content-around').width();

            $('.justify-content-around').scrollLeft((w - view) / 2 + 15);
        }

        $('.smallMenu').on('click', function()
        {
            $(this).toggleClass('active');
        });

        $('.button-to-menu').on('click', function()
        {
            $(window).scrollTo('#otbabuliMenu', 500, {offset: {top: -100}});
        });

        $('.questionLeft .partitionButton').on('click', function()
        {
            $('.questionLeft .partitionButton.active').removeClass('active');
            $(this).addClass('active');
        });

        $('.racion-tabs .rationButton').on('click', function()
        {
            $('.racion-tab.active').removeClass('active');
            $(this).parents('.racion-tab').addClass('active');
        });

        $('.new_change_racion.top_change_racion .rationButton').on('click', function()
        {
            $('.addcart_items__item.active').removeClass('active').find('rationButtonText').text('Выбрать');
            $(this).parents('.addcart_items__item').addClass('active').find('rationButtonText').text('Выбрано');;
        });

        $('.day').on('click', function()
        {
            $('.day.active_day').removeClass('active_day');
            $(this).addClass('active_day');

            let dayNum = $(this).data('day');
            $('.dishes.active').removeClass('active');
            $('#dishes' + dayNum).addClass('active');
        });

        $('.dish').on('click', function()
        {
            $('.dish.active').removeClass('active');
            $(this).addClass('active');
        });

        $(window).on('scroll', function()
        {
            let d = $(document).scrollTop() - $('.racion-tabs').offset().top;

            if (d > 120)
            {
                $('.new_change_racion.top_change_racion').addClass('fixed');
            }
            else
            {
                $('.new_change_racion.top_change_racion').removeClass('fixed');
            }
        });

        $('#orderForm .bar').on('mouseenter', function()
        {
            $('#orderForm .bar.hovered').removeClass('hovered');
            $(this).addClass('hovered');
        });

        $('#orderForm .payment .tab').on('click', function()
        {
            $('#orderForm .payment .tab.active').removeClass('active');
            $(this).addClass('active');

            if ($(this).attr('id') == 'payment-card')
            {
                $('#orderForm #payment-card-params').removeClass('hidden');
            }
            else
            {
                $('#orderForm #payment-card-params').addClass('hidden');
            }
        });
    });
})(jQuery);
