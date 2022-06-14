<main class="content personal-area-cabinet-menus">
    @include('inc.bunner-personal-area')
    <div class="content__container">
        <div class="content__body">
            @include('inc.personal-area-cabinet.left-menu')
            <div class="content__data data-content">
                <div class="orders__main-data">
                    <div class="orders__title">
                        <div @click="isCurrentOrders = true" class="first-tab__title"
                             :class="{'_active': isCurrentOrders}">
                            Текущие
                        </div>
                        <div @click="isCurrentOrders = false" class="second-tab__title"
                             :class="{'_active': !isCurrentOrders}">
                            Прошлые
                        </div>
                    </div>
                    <div class="orders__info">
                        <span>Посмотреть меню, дату, адрес и интервал доставки можно внутри карточки заказа по кнопке «подробнее», если ваш заказ уже подтвержден.</span>
                    </div>
                    <div class="current" v-if="isCurrentOrders">
                        <div class="orders__not_found" v-if="!userOrdersCurrent.length">
                            <div class="orders__not_found__text">
                                Сейчас нет активных заказов. Может поедим?
                                <a href="/" class="forMobile" target="_blank">
                                    <button class="orangeBtn">Ага, давай</button>
                                </a>
                            </div>
                            <div class="orders__not_found__button forDesktop">
                                <a href="/" target="_blank">
                                    <button class="orangeBtn">Ага, давай</button>
                                </a>
                            </div>
                            <div class="orders__not_found__food_image">
                            </div>
                        </div>
                        <div class="orders__articles" v-else>
                            <div class="single" v-for="(order, index) in userOrdersCurrent">
                                <div class="single__content">
                                    <div class="location">
                                        <svg width="10" height="15" viewBox="0 0 10 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3"
                                                  d="M10 5.92664C10 9.07815 6.97653 12.4027 5.63182 13.7254C5.27689 14.0745 4.72311 14.0745 4.36818 13.7254C3.02347 12.4027 0 9.07815 0 5.92664C0 3.03004 2.23858 0.681885 5 0.681885C7.76142 0.681885 10 3.03004 10 5.92664Z"
                                                  fill="#151721"/>
                                            <circle cx="5.00002" cy="5.68191" r="2.27273" fill="#F1F1F1"/>
                                        </svg>
                                        @{{ order.address }}
                                    </div>
                                    <div class="info">
                                        <div class="first_part">
                                            <div class="date_box_border">
                                                <div class="date_box_border__content">
                                                    <div class="day_name">
                                                        @{{ moment(order.createdAt).format("ddd") }}
                                                    </div>
                                                    <div class="date">
                                                        @{{ moment(order.createdAt).format("D MMM") }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="delivery_info">
                                                <div class="order_number">
                                                    Заказ №@{{ index + 1 }}
                                                </div>
                                                <div class="count" v-if="order.orderStatusKey != 'processing' && order.orderStatusKey != 'newOrder'">
                                                    Доставлено: <span class="done">@{{ order.already_delivered_count }}</span> <span>из @{{ order.deliveries_count }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="second_part">
                                            <div class="order_info">
                                                <div>
                                                    <div class="order_info__header">
                                                        @{{ order.rations }}
                                                    </div>
                                                    <div class="order_info__subheader">
                                                        Заказ №@{{ order.orderNumber }}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="order_info__header">
                                                        @{{ order.totalPrice }} ₽
                                                    </div>
                                                    <div class="order_info__subheader">
                                                        @{{ order.paymentMethod }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="forMobile status_buttons_div">
                                                <button class="status_button _in_process" v-if="order.orderStatusKey == 'processing' || order.orderStatusKey == 'newOrder'">@{{ order.orderStatusByName }}</button>
                                                <button class="status_button _success" v-else-if="order.orderStatusKey == 'confirmed'|| order.orderStatusKey == 'inWork'">@{{ order.orderStatusByName }}</button>
                                                <button class="status_button _not_paid" v-if="order.isPayed == 0">Не оплачен</button>
                                                <button class="status_button _success" v-else>Оплачен</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="actions">
                                        <div class="first_part">
                                            <div class="first_part__detail">
                                                <button @click="modalAction('personal-area-order', false), openedOrderIndex = index" v-if="order.orderStatusKey != 'processing' && order.orderStatusKey != 'newOrder' && order.deliveries.length">Подробнее</button>
                                            </div>
                                        </div>
                                        <div class="second_part forDesktop">
                                            <button class="status_button _in_process" v-if="order.orderStatusKey == 'processing' || order.orderStatusKey == 'newOrder'">@{{ order.orderStatusByName }}</button>
                                            <button class="status_button _success" v-else-if="order.orderStatusKey == 'confirmed'|| order.orderStatusKey == 'inWork'">@{{ order.orderStatusByName }}</button>
                                            <button class="status_button _not_paid" v-if="order.isPayed == 0">Не оплачен</button>
                                            <button class="status_button _success" v-else>Оплачен</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="past" v-if="!isCurrentOrders">
                        <div class="orders__not_found" v-if="!userOrdersOld.length">
                            <div class="orders__not_found__text">
                                Сейчас нет активных заказов. Может поедим?
                                <a href="/" class="forMobile" target="_blank">
                                    <button class="orangeBtn">Ага, давай</button>
                                </a>
                            </div>
                            <div class="orders__not_found__button forDesktop">
                                <a href="/" target="_blank">
                                    <button class="orangeBtn">Ага, давай</button>
                                </a>
                            </div>
                            <div class="orders__not_found__food_image">
                            </div>
                        </div>
                        <div class="orders__articles" v-else>
                            <div class="single" v-for="(order, index) in userOrdersOld">
                                <div class="single__content">
                                    <div class="location">
                                        <svg width="10" height="15" viewBox="0 0 10 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3"
                                                  d="M10 5.92664C10 9.07815 6.97653 12.4027 5.63182 13.7254C5.27689 14.0745 4.72311 14.0745 4.36818 13.7254C3.02347 12.4027 0 9.07815 0 5.92664C0 3.03004 2.23858 0.681885 5 0.681885C7.76142 0.681885 10 3.03004 10 5.92664Z"
                                                  fill="#151721"/>
                                            <circle cx="5.00002" cy="5.68191" r="2.27273" fill="#F1F1F1"/>
                                        </svg>
                                        @{{ order.address }}
                                    </div>
                                    <div class="info">
                                        <div class="first_part">
                                            <div class="date_box_border">
                                                <div class="date_box_border__content">
                                                    <div class="day_name">
                                                        @{{ moment(order.createdAt).format("ddd") }}
                                                    </div>
                                                    <div class="date">
                                                        @{{ moment(order.createdAt).format("D MMM") }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="delivery_info">
                                                <div class="order_number">
                                                    Заказ №@{{ index + 1 }}
                                                </div>
                                                <div class="count" v-if="order.orderStatusKey == 'successfullyRealized'">
                                                    Доставлено: <span class="done">10</span> <span>из 10</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="second_part">
                                            <div class="order_info">
                                                <div>
                                                    <div class="order_info__header">
                                                        @{{ order.rations }}
                                                    </div>
                                                    <div class="order_info__subheader">
                                                        Заказ №@{{ order.orderNumber }}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="order_info__header">
                                                        @{{ order.totalPrice }} ₽
                                                    </div>
                                                    <div class="order_info__subheader">
                                                        @{{ order.paymentMethod }}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="forMobile status_buttons_div">
                                                <button class="status_button _not_paid">@{{ order.orderStatusByName }}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="actions">
                                        <div class="first_part">
{{--                                            <div class="first_part__reply_order">--}}
{{--                                                <button>Повторить заказ</button>--}}
{{--                                            </div>--}}
                                        </div>
                                        <div class="second_part forDesktop">
                                            <button class="status_button _not_paid">@{{ order.orderStatusByName }}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
