<div class="order">
    @include('inc.menus-sale900')
    <div class="ordering" id="orderingSection">
        <div class="ordering_title_and_rations">
            <div class="ordering_title">
                Оформить заказ
            </div>
            <div class="ordering__rations">
                <button class="hit">Хит</button>
                <div class="ordering__rations_single">
                    <button class="ordering__rations_single_block"
                            v-bind:class="{diet_block_chosen: choosedRation == 's'}"
                            @click="cart[0].choosedRation = 's', choosedRation = 's', dishesCount(0), checkValues(0, cart[0].choosedRation, cart[0].timeToEat, cart[0].chosenWeek);">
                        <span class="ordering__rations_single_block_kind default-text-color">S</span>
                    </button>
                    <div class="ordering__rations_single_block_comment default-text-color">
                        <div>4 блюда</div>
                        <div>1200 ккал</div>
                    </div>
                </div>

                <div class="ordering__rations_single">
                    <button class="ordering__rations_single_block"
                            v-bind:class="{diet_block_chosen: choosedRation == 'm'}"
                            @click="cart[0].choosedRation = 'm', choosedRation = 'm', dishesCount(0), checkValues(0, cart[0].choosedRation, cart[0].timeToEat, cart[0].chosenWeek);">
                        <span class="ordering__rations_single_block_kind default-text-color">M</span>
                    </button>
                    <div class="ordering__rations_single_block_comment default-text-color">
                        <div>5 блюд</div>
                        <div>1600 ккал</div>
                    </div>
                </div>

                <div class="ordering__rations_single">
                    <button class="ordering__rations_single_block"
                            v-bind:class="{diet_block_chosen: choosedRation == 'l'}"
                            @click="cart[0].choosedRation = 'l', choosedRation = 'l', dishesCount(0), checkValues(0, cart[0].choosedRation, cart[0].timeToEat, cart[0].chosenWeek);">
                        <span class="ordering__rations_single_block_kind default-text-color">L</span>
                    </button>
                    <div class="ordering__rations_single_block_comment default-text-color">
                        <div>6 блюд</div>
                        <div>2000 ккал</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ordering_subtitle">
            <div class="lineup_title">Когда будешь есть?</div>
            <div class="count-weeks_title"> Выбери сколько дней:</div>
        </div>
        <div class="choos_elineup">
            <div class="tarrif_lineup">
                <div>
                    <button class="time-to-eat" :class="{_active:cart[0].timeToEat == 5}"
                            @click="cart[0].timeToEat = 5, checkValues(0, cart[0].choosedRation, cart[0].timeToEat, cart[0].chosenWeek);">
                        По будням
                    </button>
                </div>
                <div>
                    <button class="time-to-eat" :class="{_active:cart[0].timeToEat == 7}"
                            @click="cart[0].timeToEat = 7, checkValues(0, cart[0].choosedRation, cart[0].timeToEat, cart[0].chosenWeek);">
                        Каждый день
                    </button>
                </div>
            </div>
            <div class="tarrif_count-weeks">
                <div class="count_of_week"
                     @click="cart[0].chosenWeek = 22, checkValues(0, cart[0].choosedRation, cart[0].timeToEat, cart[0].chosenWeek);"
                     :class="{count_of_week_active:cart[0].chosenWeek == 22}">
                    <button class="sale" v-if="cart[0].choosedRation == 's' && cart[0].timeToEat == 5">
                        <span class="forDesktop">+79 бонусов</span>
                        <span class="forMobile">+79 б.</span>
                    </button>
                    <button class="sale" v-else-if="cart[0].choosedRation == 's' && cart[0].timeToEat == 7">
                        <span class="forDesktop">+79 бонусов</span>
                        <span class="forMobile">+79 б.</span>
                    </button>
                    <button class="sale" v-else-if="cart[0].choosedRation == 'm' && cart[0].timeToEat == 5">
                        <span class="forDesktop">+87 бонусов</span>
                        <span class="forMobile">+87 б.</span>
                    </button>
                    <button class="sale" v-else-if="cart[0].choosedRation == 'm' && cart[0].timeToEat == 7">
                        <span class="forDesktop">+87 бонусов</span>
                        <span class="forMobile">+87 б.</span>
                    </button>
                    <button class="sale" v-else-if="cart[0].choosedRation == 'l' && cart[0].timeToEat == 5">
                        <span class="forDesktop">+95 бонусов</span>
                        <span class="forMobile">+95 б.</span>
                    </button>
                    <button class="sale" v-else-if="cart[0].choosedRation == 'l' && cart[0].timeToEat == 7">
                        <span class="forDesktop">+95 бонусов</span>
                        <span class="forMobile">+95 б.</span>
                    </button>
                    <div class="count_week">2 <span>дня</span></div>
                    <div class="dishes_per_day" v-if="cart[0].choosedRation == 's'">990 ₽ <span>в день</span></div>
                    <div class="dishes_per_day" v-else-if="cart[0].choosedRation == 'm'">1090 ₽ <span>в день</span>
                    </div>
                    <div class="dishes_per_day" v-else>1190 ₽ <span>в день</span></div>
                </div>
                <div class="count_of_week"
                     @click="cart[0].chosenWeek = 1, checkValues(0, cart[0].choosedRation, cart[0].timeToEat, cart[0].chosenWeek);"
                     :class="{count_of_week_active:cart[0].chosenWeek == 1}">
                    <button class="sale" v-if="cart[0].choosedRation == 's' && cart[0].timeToEat == 5">
                        <span class="forDesktop">Скидка 900 ₽</span>
                        <span class="forMobile">Скидка <br> 900 ₽</span>
                    </button>
                    <button class="sale" v-else-if="cart[0].choosedRation == 's' && cart[0].timeToEat == 7">
                        <span class="forDesktop">Скидка 900 ₽</span>
                        <span class="forMobile">Скидка <br> 900 ₽</span>
                    </button>
                    <button class="sale" v-else-if="cart[0].choosedRation == 'm' && cart[0].timeToEat == 5">
                        <span class="forDesktop">Скидка 900 ₽</span>
                        <span class="forMobile">Скидка <br> 900 ₽</span>
                    </button>
                    <button class="sale" v-else-if="cart[0].choosedRation == 'm' && cart[0].timeToEat == 7">
                        <span class="forDesktop">Скидка 900 ₽</span>
                        <span class="forMobile">Скидка <br> 900 ₽</span>
                    </button>
                    <button class="sale" v-else-if="cart[0].choosedRation == 'l' && cart[0].timeToEat == 5">
                        <span class="forDesktop">Скидка 900 ₽</span>
                        <span class="forMobile">Скидка <br> 900 ₽</span>
                    </button>
                    <button class="sale" v-else-if="cart[0].choosedRation == 'l' && cart[0].timeToEat == 7">
                        <span class="forDesktop">Скидка 900 ₽</span>
                        <span class="forMobile">Скидка <br> 900 ₽</span>
                    </button>
                    <div class="count_week" v-if="cart[0].timeToEat == 5">5 <span>дней</span></div>
                    <div class="count_week" v-else-if="cart[0].timeToEat == 7">7 <span>дней</span></div>
                    <div class="dishes_per_day" v-if="cart[0].choosedRation == 's'">900 ₽ <span>в день</span></div>
                    <div class="dishes_per_day" v-else-if="cart[0].choosedRation == 'm'">950 ₽ <span>в день</span></div>
                    <div class="dishes_per_day" v-else>990 ₽ <span>в день</span></div>
                </div>
                <div class="count_of_week"
                     @click="cart[0].chosenWeek = 2, checkValues(0, cart[0].choosedRation, cart[0].timeToEat, cart[0].chosenWeek);"
                     :class="{count_of_week_active:cart[0].chosenWeek == 2}">
                    <button class="sale" v-if="cart[0].choosedRation == 's' && cart[0].timeToEat == 5">
                        <span class="forDesktop">Скидка 900 ₽</span>
                        <span class="forMobile">Скидка <br> 900 ₽</span>
                    </button>
                    <button class="sale" v-else-if="cart[0].choosedRation == 's' && cart[0].timeToEat == 7">
                        <span class="forDesktop">Скидка 900 ₽</span>
                        <span class="forMobile">Скидка <br> 900 ₽</span>
                    </button>
                    <button class="sale" v-else-if="cart[0].choosedRation == 'm' && cart[0].timeToEat == 5">
                        <span class="forDesktop">Скидка 900 ₽</span>
                        <span class="forMobile">Скидка <br> 900 ₽</span>
                    </button>
                    <button class="sale" v-else-if="cart[0].choosedRation == 'm' && cart[0].timeToEat == 7">
                        <span class="forDesktop">Скидка 900 ₽</span>
                        <span class="forMobile">Скидка <br> 900 ₽</span>
                    </button>
                    <button class="sale" v-else-if="cart[0].choosedRation == 'l' && cart[0].timeToEat == 5">
                        <span class="forDesktop">Скидка 900 ₽</span>
                        <span class="forMobile">Скидка <br> 900 ₽</span>
                    </button>
                    <button class="sale" v-else-if="cart[0].choosedRation == 'l' && cart[0].timeToEat == 7">
                        <span class="forDesktop">Скидка 900 ₽</span>
                        <span class="forMobile">Скидка <br> 900 ₽</span>
                    </button>
                    <div class="count_week" v-if="cart[0].timeToEat == 5">10 <span>дней</span></div>
                    <div class="count_week" v-else-if="cart[0].timeToEat == 7">14 <span>дней</span></div>
                    <div class="dishes_per_day" v-if="cart[0].choosedRation == 's'">865 ₽ <span>в день</span></div>
                    <div class="dishes_per_day" v-else-if="cart[0].choosedRation == 'm'">905 ₽ <span>в день</span></div>
                    <div class="dishes_per_day" v-else>946 ₽ <span>в день</span></div>
                </div>
                <div class="count_of_week"
                     @click="cart[0].chosenWeek = 4, checkValues(0, cart[0].choosedRation, cart[0].timeToEat, cart[0].chosenWeek);"
                     :class="{count_of_week_active:cart[0].chosenWeek == 4}">
                    <button class="hit"> &nbsp&nbspХит
                        <button v-if="cart[0].choosedRation == 's' && cart[0].timeToEat == 5" class="sale btn7">
                            <span class="forDesktop">+5 дней</span>
                            <span class="forMobile">+5 дней</span>
                        </button>
                        <button v-else-if="cart[0].choosedRation == 's' && cart[0].timeToEat == 7" class="sale btn7">
                            <span class="forDesktop">+7 дней</span>
                            <span class="forMobile">+7 дней</span>
                        </button>
                        <button v-else-if="cart[0].choosedRation == 'm' && cart[0].timeToEat == 5" class="sale btn7">
                            <span class="forDesktop">+5 дней</span>
                            <span class="forMobile">+5 дней</span>
                        </button>
                        <button v-else-if="cart[0].choosedRation == 'm' && cart[0].timeToEat == 7" class="sale btn7">
                            <span class="forDesktop">+7 дней</span>
                            <span class="forMobile">+7 дней</span>
                        </button>
                        <button v-else-if="cart[0].choosedRation == 'l' && cart[0].timeToEat == 5" class="sale btn7">
                            <span class="forDesktop">+5 дней</span>
                            <span class="forMobile">+5 дней</span>
                        </button>
                        <button v-else-if="cart[0].choosedRation == 'l' && cart[0].timeToEat == 7" class="sale btn7">
                            <span class="forDesktop">+7 дней</span>
                            <span class="forMobile">+7 дней</span>
                        </button>
                    </button>
                    <div class="count_week" v-if="cart[0].timeToEat == 5">20 <span>дней</span></div>
                    <div class="count_week" v-else-if="cart[0].timeToEat == 7">28 <span>дней</span></div>
                    <div class="dishes_per_day" v-if="cart[0].choosedRation == 's'">720 ₽ <span>в день</span></div>
                    <div class="dishes_per_day" v-else-if="cart[0].choosedRation == 'm'">760 ₽ <span>в день</span></div>
                    <div class="dishes_per_day" v-else>799 ₽ <span>в день</span></div>
                </div>
            </div>
        </div>
        <div class="block_2_order">
            <div class="count_dish">
                <div class="dishes_5">
                    <b v-if="cart[0].choosedRation == 's'">4 блюда </b>
                    <b v-else-if="cart[0].choosedRation == 'm'">5 блюд </b>
                    <b v-else="cart[0].choosedRation == 'l'">6 блюд </b>в день
                    <br><span>= @{{ cart[0].dishesPrise }} ₽</span>
                    {{--                    <span class="old_price">@{{ cart[0].dishesPriseNotSale }} ₽</span>--}}
                </div>
                <ul>
                    <li class="first_list">@{{ cart[0].deliveryText }}</li>
                    <li class="second_list sale-900-text" v-if="cart[0].chosenWeek == 1 || cart[0].chosenWeek == 2">
                        Скидка 900 ₽ для новых клиентов!
                    </li>
                </ul>
            </div>

            <div class="sum_dish">
                <div class="sum_dish_total">
                    <span class="total">Итого</span>
                    <span>
            <button v-if="cart[0].chosenWeek == 4" class="sale sale_-5">
                <span v-if="cart[0].timeToEat == 5">+5 дней</span>
                <span v-if="cart[0].timeToEat == 7">+7 дней</span>
            </button>
          </span>
                    <div href="#" @click="modalAction('popap-bonus', false)" class="total_prise popap-link"
                         v-if="cart[0].chosenWeek == 1 || cart[0].chosenWeek == 2">
                        @{{ cart[0].totalPriseFirst + excludesInfo.price - 900 }} ₽
                        &nbsp&nbsp<span
                            class="apsty_lineSrue ">@{{ cart[0].totalPriseFirst + excludesInfo.price }} ₽</span>
                        <div v-if="excludesInfo.count" style="line-height: 24px;font-size: 14px;font-weight: 500;">
                            (включая настройку меню в <br> @{{ excludesInfo.inDishes }} блюдах: @{{
                            excludesInfo.price }}₽  <a style="color: #EB6300;text-decoration: underline;" href="javascript:void(0)" @click="excludes = {meatAndFish: [],dish: [],vegetables: [],garnishes: [],allergy: []}">Сбросить</a>)
                        </div>
                        <div class="bonus">+ <b>@{{ cart[0].bonus }}</b>
                            ₽ вернём бонусами
                        </div>
                    </div>
                    <div href="#" @click="modalAction('popap-bonus', false)" class="total_prise popap-link" v-else>
                        @{{ cart[0].totalPriseFirst + excludesInfo.price }} ₽
                        <div v-if="excludesInfo.count" style="line-height: 24px;font-size: 14px;font-weight: 500;">
                            (включая настройку меню в <br> @{{ excludesInfo.inDishes }} блюдах: @{{
                            excludesInfo.price }}₽  <a style="color: #EB6300;text-decoration: underline;" href="javascript:void(0)" @click="excludes = {meatAndFish: [],dish: [],vegetables: [],garnishes: [],allergy: []}">Сбросить</a>)
                        </div>
                        <div class="bonus">+ <b>@{{ cart[0].bonus }}</b>
                            ₽ вернём бонусами
                        </div>
                    </div>
                </div>
                <div class="sum_dish_btn">
                    <!-- <div class="callcenter">
                              По всем вопросам — <span class="callcenter no_opsty">+7(499)-322-72-16</span>
                            </div> -->
                    <button href="#"
                            @click="modalAction('checkout', false), ym(44931988,'reachGoal','clickorder'), gtag('event', 'Нажатие на кнопку `Заказать`', {'event_category': 'button_order', 'event_action': 'click'})"
                            class="btn8 popap-link">Заказать
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
