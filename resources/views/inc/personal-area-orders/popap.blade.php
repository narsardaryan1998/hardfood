<div id="actual-menu" class="popap _actual-menu">
    <div class="popap__body">
        <div class="popap__content">
            <a href="#" class="popap__close close-popup">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
            </a>
            <div class="popap__big-title">
                Актуальное меню
            </div>
            @include('inc.ordering')
        </div>
    </div>
</div>
<div id="popap-bonus" class="popap popap-bonus">
    <div class="popap__body">
        <div class="popap__content">
            <a href="#" class="popap__close close-popup">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
            </a>
            <div class="popap__title">
                Бонусная система
            </div>
            <div class="popap__puncts puncts">
                <div class="puncts__item">
                    <div class="puncts__icon"></div>
                    <div class="puncts__text">
                        <span>Оплачивай заказы</span>
                        1 бонус = 1 ₽
                    </div>
                </div>
                <div class="puncts__item">
                    <div class="puncts__icon"></div>
                    <div class="puncts__text">
                        <span>Получай 3% с каждого заказа</span>
                        В виде бонусов <span>в личном кабинете</span>
                    </div>
                </div>
                <div class="puncts__item">
                    <div class="puncts__icon"></div>
                    <div class="puncts__text">
                        <span>Оплачивай бонусами до 50%</span>
                        От стоимости каждого заказа
                    </div>
                </div>
            </div>
            <svg class="wawe" width="566" height="49" viewBox="0 0 566 49" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.08"
                      d="M27.1881 14.3747L2.32465 27.4607C-6.48463 32.0972 -12 41.2326 -12 51.1875C-12 65.9957 0.00432968 78 14.8124 78H542.478C562.925 78 579.5 61.2025 579.5 40.7558C579.5 9.65325 543.234 -7.81702 519.327 12.0792C508.698 20.9252 493.999 23.0451 481.304 17.5631L451.987 4.90359C441.634 0.432892 430.074 -0.40657 419.183 2.52153L338.969 24.0884C333.041 25.6825 326.869 26.171 320.763 25.5296L208.2 13.7038C203.753 13.2367 199.264 13.3681 194.853 14.0943L130.639 24.6661C123.305 25.8735 115.795 25.4306 108.653 23.3697L64.3391 10.5811C51.9303 7.00001 38.617 8.35946 27.1881 14.3747Z"
                      fill="#EB6300"/>
            </svg>
        </div>
    </div>
</div>
<div id="checkout" class="popap _checkout-popap">
    <div class="popap__body">
        <div class="popap__content">
            <a href="#" class="popap__close close-popup">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
            </a>
            <div class="popap__title">
                Оформление заказа
            </div>
            <div class="popap__subtitle">
                <span v-if="cart[0].chosenWeek != 22">Выбери удобный способ</span>
            </div>
            <div class="popap__text content-checkout">
                <div v-if="cart[0].chosenWeek != 22">
                    <div class="content-checkout__subtitle">Заполнить всё самостоятельно</div>
                    <button href="#" @click="modalAction('ordering-popap', 'checkout')"
                            class="content-checkout__btn popap-link">Оформить на сайте
                    </button>
                </div>
                <button href="#" @click="modalAction('fast-order', 'checkout')"
                        class="content-checkout__btn _fast popap-link">Быстрый заказ
                </button>
                <div class="content-checkout__subtitle">Быстро оформить с менеджером</div>
            </div>
            <svg class="wawe" width="566" height="49" viewBox="0 0 566 49" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.08"
                      d="M27.1881 14.3747L2.32465 27.4607C-6.48463 32.0972 -12 41.2326 -12 51.1875C-12 65.9957 0.00432968 78 14.8124 78H542.478C562.925 78 579.5 61.2025 579.5 40.7558C579.5 9.65325 543.234 -7.81702 519.327 12.0792C508.698 20.9252 493.999 23.0451 481.304 17.5631L451.987 4.90359C441.634 0.432892 430.074 -0.40657 419.183 2.52153L338.969 24.0884C333.041 25.6825 326.869 26.171 320.763 25.5296L208.2 13.7038C203.753 13.2367 199.264 13.3681 194.853 14.0943L130.639 24.6661C123.305 25.8735 115.795 25.4306 108.653 23.3697L64.3391 10.5811C51.9303 7.00001 38.617 8.35946 27.1881 14.3747Z"
                      fill="#EB6300"/>
            </svg>
        </div>
    </div>
</div>
<div id="fast-order" class="popap _fast-order">
    <div class="popap__body">
        <div class="popap__content">
            <a href="#" class="popap__close close-popup">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
            </a>
            <div class="popap__title">
                Быстрый заказ
            </div>
            <div class="popap__subtitle">
                Введи номер телефона, мы перезвоним и оформим всё за 5 минут
            </div>
            <iframe style="display: none;" name="frame"></iframe>
            <form action="#" target="frame">
                <input v-model="userData.phone" type="tel" class="fast-order__input" v-mask="'+7 (###) ### ## ##'"
                       :class="{'padding-30-desktop':userData.phone.length}"
                       placeholder="+7 (___) ___-__-__">
                <button v-if="userData.phone.length != 18" disabled class="fast-order__btn popap-submit close-popup">
                    Заказать
                </button>
                <button v-else @click="fastOrder" type="button" class="fast-order__btn popap-submit close-popup">
                    Заказать
                </button>
            </form>
            <div class="fast-order__subtitle">
                <span>Нажимая кнопку «Заказать», ты соглашаешься с</span> условиями оферты <span>и нашей</span>
                политикой конфиденциальности.
            </div>
            <svg class="wawe" width="566" height="78" viewBox="0 0 566 78" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.08"
                      d="M27.1881 14.3747L2.32465 27.4607C-6.48463 32.0972 -12 41.2326 -12 51.1875C-12 65.9957 0.00432968 78 14.8124 78H542.478C562.925 78 579.5 61.2025 579.5 40.7558C579.5 9.65325 543.234 -7.81702 519.327 12.0792C508.698 20.9252 493.999 23.0451 481.304 17.5631L451.987 4.90359C441.634 0.432892 430.074 -0.40657 419.183 2.52153L338.969 24.0884C333.041 25.6825 326.869 26.171 320.763 25.5296L208.2 13.7038C203.753 13.2367 199.264 13.3681 194.853 14.0943L130.639 24.6661C123.305 25.8735 115.795 25.4306 108.653 23.3697L64.3391 10.5811C51.9303 7.00001 38.617 8.35946 27.1881 14.3747Z"
                      fill="#EB6300"/>
            </svg>
        </div>
    </div>
</div>
<div id="ringMe" class="popap _fast-order">
    <div class="popap__body">
        <div class="popap__content">
            <a href="#" class="popap__close close-popup">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
            </a>
            <div class="popap__title">
                Заказ <span>обратного</span> звонка
            </div>
            <div class="popap__subtitle">
                Введи номер телефона, мы перезвоним и всё расскажем
            </div>
            <iframe style="display: none;" name="frame"></iframe>
            <form action="#" target="frame">
                <input v-model="userData.phone" type="tel" class="fast-order__input" v-mask="'+7 (###) ### ## ##'"
                       :class="{'padding-30-desktop':userData.phone.length}"
                       placeholder="+7 (___) ___-__-__">
                <button v-if="userData.phone.length != 18" disabled class="fast-order__btn">Перезвоните
                    мне
                </button>
                <button v-else @click="callBack" type="button" class="fast-order__btn">Перезвоните мне
                </button>
            </form>
            <div class="fast-order__subtitle">
                <span>Нажимая кнопку «Перезвоните мне», ты соглашаешься с</span> условиями оферты <span>и нашей</span>
                политикой конфиденциальности.
            </div>
            <svg class="wawe" width="566" height="78" viewBox="0 0 566 78" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.08"
                      d="M27.1881 14.3747L2.32465 27.4607C-6.48463 32.0972 -12 41.2326 -12 51.1875C-12 65.9957 0.00432968 78 14.8124 78H542.478C562.925 78 579.5 61.2025 579.5 40.7558C579.5 9.65325 543.234 -7.81702 519.327 12.0792C508.698 20.9252 493.999 23.0451 481.304 17.5631L451.987 4.90359C441.634 0.432892 430.074 -0.40657 419.183 2.52153L338.969 24.0884C333.041 25.6825 326.869 26.171 320.763 25.5296L208.2 13.7038C203.753 13.2367 199.264 13.3681 194.853 14.0943L130.639 24.6661C123.305 25.8735 115.795 25.4306 108.653 23.3697L64.3391 10.5811C51.9303 7.00001 38.617 8.35946 27.1881 14.3747Z"
                      fill="#EB6300"/>
            </svg>
        </div>
    </div>
</div>
<div id="sucess-popap" class="popap _sucess-popap">
    <div class="popap__body">
        <div class="popap__content">
            <a href="#" class="popap__close close-popup">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
            </a>
            <div class="sucess-popap__icon">
                <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12L8 18L24 2" stroke="#3AAE11" stroke-width="4" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="sucess-popap__title">
                <span>Заявка успешно</span>
                отправлена
            </div>
            <div class="sucess-popap__text default-text-color">В ближайшее время с вами свяжется наш менеджер</div>
            <svg class="wawe" width="566" height="49" viewBox="0 0 566 49" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.08"
                      d="M27.1881 14.3747L2.32465 27.4607C-6.48463 32.0972 -12 41.2326 -12 51.1875C-12 65.9957 0.00432968 78 14.8124 78H542.478C562.925 78 579.5 61.2025 579.5 40.7558C579.5 9.65325 543.234 -7.81702 519.327 12.0792C508.698 20.9252 493.999 23.0451 481.304 17.5631L451.987 4.90359C441.634 0.432892 430.074 -0.40657 419.183 2.52153L338.969 24.0884C333.041 25.6825 326.869 26.171 320.763 25.5296L208.2 13.7038C203.753 13.2367 199.264 13.3681 194.853 14.0943L130.639 24.6661C123.305 25.8735 115.795 25.4306 108.653 23.3697L64.3391 10.5811C51.9303 7.00001 38.617 8.35946 27.1881 14.3747Z"
                      fill="#3AAE11"/>
            </svg>
        </div>
    </div>
</div>
<div id="ordering-popap" class="popap _ordering-popap">
    <div class="popap__body" :class="{'_main-blured': orderLoading}">
        <div class="popap__content">
            <div class="conteiner">
                <a href="#" class="popap__close close-popup">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black" stroke-width="2"
                              stroke-linecap="round"/>
                    </svg>
                </a>
                <div class="ordering-popap__title">Оформление заказа</div>
                <div class="ordering-popap__content">
                    <div class="ordering-popap__main main-ordering">
                        <div class="main-ordering__order-block order-block" v-for="(cartItem, index) in cart">
                            <svg width="76" height="119" viewBox="0 0 76 119" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M111.794 -49.4804C131.703 -46.0371 153.769 -65.4249 170.715 -54.4319C187.484 -43.5532 185.816 -18.7082 189.486 0.92084C193.02 19.8178 201.851 40.8869 191.577 57.1395C181.384 73.2631 156.258 68.7328 140.148 78.9672C123.043 89.8331 115.857 119.112 95.6076 118.105C75.6036 117.11 71.6425 87.4935 56.1672 74.7922C39.6939 61.2717 11.6299 61.6041 3.02801 42.1204C-5.67444 22.409 6.50601 0.166768 14.3655 -19.8903C22.5346 -40.7372 27.6574 -68.9506 49.1046 -75.4644C71.2898 -82.2023 88.9429 -53.4325 111.794 -49.4804Z"
                                      fill="#EB6300"/>
                            </svg>
                            <div class="_hit">
                                Хит
                            </div>
                            <div class="order-block__title">
                                Пакет<span><span class="to-uppercase"> @{{ cartItem.choosedRation }}</span> на @{{ cartItem.chosenWeek * cartItem.timeToEat }} дней</span>
                            </div>
                            <div class="order-block__dishes-count" v-if="cartItem.choosedRation == 's'">
                                <span class="_dishes-count"><b>4</b> блюда</span> в день, 1200 ккал
                            </div>
                            <div class="order-block__dishes-count" v-else-if="cartItem.choosedRation == 'm'">
                                <span class="_dishes-count"><b>5</b> блюд</span> в день, 1600 ккал
                            </div>
                            <div class="order-block__dishes-count" v-else>
                                <span class="_dishes-count"><b>6</b> блюд</span> в день, 2000 ккал
                            </div>
                            <button @click="changeOrder(index)" href="#"
                                    class="order-block__btn-chnge popap-link">
                                Изменить заказ
                            </button>
                        </div>
                        <button href="#" @click="modalAction('add-order', false)"
                                class="main-ordering__add-btn popap-link">
                            Добавить ещё заказ
                        </button>
                        <div class="main-ordering__form form-ordering">
                            <form name="orderingForm" action="#" id="checkoutForm">
                                <div class="form-ordering__addres ordering-addres">
                                    <div class="ordering-addres__title">
                                        Адрес доставки
                                    </div>
                                    <div class="form-ordering__payment payment-method"
                                         v-if="userData.addressStreet && userData.addressStreet2">
                                        <div class="payment-method__inputs">
                                            <p>
                                                <input type="radio" checked name="select-address"
                                                       id="selected-address-1"
                                                       v-model="userData.selectedAddress"
                                                       value="1"
                                                       class="peyment">
                                                <label for="selected-address-1">@{{ userData.addressStreet }}</label>
                                            </p>
                                            <p>
                                                <input type="radio" name="select-address" id="selected-address-2"
                                                       v-model="userData.selectedAddress"
                                                       value="2"
                                                       class="peyment">
                                                <label for="selected-address-2">@{{ userData.addressStreet2 }}</label>
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="auto-search-wrapper" v-if="userData.selectedAddress == '1'">
                                            <input
                                                type="text"
                                                autocomplete="new-password"
                                                id="search"
                                                v-model="userData.addressStreet"
                                                :class="{'validation-error':submitFormRequiredFields.addressStreet}"
                                                class="default-text-color"
                                                placeholder="Введи улицу и дом *"/>
                                        </div>
                                        <div class="auto-search-wrapper" v-else>
                                            <input
                                                type="text"
                                                autocomplete="new-password"
                                                id="search"
                                                :class="{'validation-error':submitFormRequiredFields.addressStreet}"
                                                v-model="userData.addressStreet2"
                                                class="default-text-color"
                                                placeholder="Введи улицу и дом *"/>
                                        </div>
                                        <div class="ordering-addres__home-info">
                                            <div class="_labal-container">
                                                <input type="text" id="entrance" name="entrance"
                                                       class="default-text-color"
                                                       placeholder="Подъезд"
                                                       v-if="userData.selectedAddress == '1'"
                                                       v-model="userData.addressPorch">
                                                <input type="text" id="entrance" name="entrance"
                                                       class="default-text-color"
                                                       v-else
                                                       placeholder="Подъезд"
                                                       v-model="userData.addressPorch2">
                                            </div>
                                            <div class="_labal-container">
                                                <input type="text" name="floor" id="floor"
                                                       class="default-text-color"
                                                       placeholder="Этаж"
                                                       v-if="userData.selectedAddress == '1'"
                                                       v-model="userData.addressFloor">
                                                <input type="text" name="floor" id="floor"
                                                       class="default-text-color"
                                                       v-else
                                                       placeholder="Этаж"
                                                       v-model="userData.addressFloor2">
                                            </div>
                                            <div class="_labal-container">
                                                <input type="text" name="apartment" id="apartment"
                                                       class="default-text-color"
                                                       placeholder="Квартира"
                                                       v-if="userData.selectedAddress == '1'"
                                                       v-model="userData.addressFlat">
                                                <input type="text" name="apartment" id="apartment"
                                                       class="default-text-color"
                                                       v-else
                                                       placeholder="Квартира"
                                                       v-model="userData.addressFlat2">
                                            </div>
                                            <div class="_labal-container">
                                                <input type="text" name="intercom" id="intercom"
                                                       class="default-text-color"
                                                       placeholder="Домофон"
                                                       v-if="userData.selectedAddress == '1'"
                                                       v-model="userData.addressIntercom">
                                                <input type="text" name="intercom" id="intercom"
                                                       class="default-text-color"
                                                       v-else
                                                       placeholder="Домофон"
                                                       v-model="userData.addressIntercom2">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-ordering__contact ordering-contct">
                                    <div class="ordering-contct__title">Контактные данные</div>
                                    <div class="ordering-contct__inputs">
                                        <div class="_labal-container">
                                            <input type="text" class="ordering-contct__name default-text-color"
                                                   name="name" id="name"
                                                   placeholder="Имя *"
                                                   :class="{'validation-error':submitFormRequiredFields.name, '_filled':userData.name.length > 0}"
                                                   v-model="userData.name">
                                            <label for="name">Имя *</label>
                                        </div>
                                        <div class="_labal-container">
                                            <input type="email" class="ordering-contct__email default-text-color"
                                                   name="email" id="email"
                                                   placeholder="Email"
                                                   :class="{'_filled':userData.email.length > 0}"
                                                   v-model="userData.email">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-ordering__payment payment-method">
                                    <div class="payment-method__title">Способ оплаты заказа</div>
                                    <div class="payment-method__inputs">
                                        <p>
                                            <input type="radio" checked name="payment-method" id="online-payment"
                                                   v-model="userData.paymentMethod"
                                                   value="onlinePayment"
                                                   class="peyment">
                                            <label for="online-payment">Оплата онлайн</label>
                                        </p>
                                        <p>
                                            <input type="radio" name="payment-method" id="cash-payment"
                                                   v-model="userData.paymentMethod"
                                                   value="cashPayment"
                                                   class="peyment">
                                            <label for="cash-payment">Оплата наличными</label>
                                        </p>
                                    </div>
                                </div>
                                <div class="form-ordering__comment ordering-comment">
                                    <div class="ordering-comment__title">Комментарий к доставке</div>
                                    <div class="ordering-comment__input">
                                        <textarea name="comment" class="textarea default-text-color"
                                                  v-model="userData.commentForOrder"
                                                  placeholder="Например, «Не звонить в дверь»"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="ordering-popap__info info">
                        <div id="scrolling-section">
                            <div class="info__bonus bonuses">
                                <div class="bonuses__types">
                                    <button :class="{'_active':userData.bonusTypeIsBalance}"
                                            @click="userData.bonusTypeIsBalance = true, userData.usePromoCode = false"
                                            class="bonuses__type">Бонусный
                                        счёт
                                    </button>
                                    <button :class="{'_active':!userData.bonusTypeIsBalance}"
                                            @click="userData.bonusTypeIsBalance = false, userData.useBalance = false, userData.usePromoCode = true"
                                            class="bonuses__type">Промокод
                                    </button>
                                </div>
                                <div class="promo-code__part" v-if="!userData.bonusTypeIsBalance">
                                    <div class="label-container">
                                        <input v-model="userData.promoCode"
                                               placeholder="Введите промокод">
                                        <label for="entrance">Введите промокод</label>
                                    </div>
                                    <div class="promo-code__response"
                                         :class="{'successfully-response-text':userData.promoCodeState, 'error-response-text':!userData.promoCodeState}"
                                         v-if="userData.promoCodeUsingText">
                                        <span>@{{ userData.promoCodeUsingText }}</span>
                                    </div>
                                    <div class="promo-code__checking__button">
                                        <button class="info__btn" @click="checkPromoCode" v-if="!orderLoading">
                                            Активировать
                                        </button>
                                        <button class="info__btn" disabled v-else>
                                            Активировать
                                        </button>
                                    </div>
                                </div>
                                <div class="bonuses__balance balance" v-if="userData.bonusTypeIsBalance">
                                    <div class="balance__value">Баланс: <span>@{{ userData.balance }} баллов</span>
                                    </div>
                                    <div class="balance__subtitle">Оплатить баллами можно до 50% от стоимости</div>
                                    <div class="balance__subtitle">1 бонус = 1 ₽</div>
                                </div>
                                <div class="bonuses__action action-bonus"
                                     v-if="userData.balance && userData.bonusTypeIsBalance">
                                    <div :class="{'_active':!userData.useBalance}" @click="userData.useBalance = false"
                                         class="action-bonus__item cursor-pointer">Не списывать
                                    </div>
                                    <div :class="{'_active':userData.useBalance}" @click="userData.useBalance = true"
                                         class="action-bonus__item cursor-pointer">Списать <span></span> @{{
                                        userData.balance }}
                                    </div>
                                </div>
                            </div>
                            <div class="info__info ordering-info">
                                <div class="ordering-info__title" v-for="(cartItem, index) in cart">
                                    <div>
                                        Пакет <span><span class="to-uppercase"> @{{ cartItem.choosedRation }}</span> на
                                  <span v-if="cartItem.chosenWeek == 1">@{{ cartItem.chosenWeek * cartItem.timeToEat }} дней</span>
                                  <span v-else-if="cartItem.chosenWeek == 2">@{{ cartItem.chosenWeek * cartItem.timeToEat }} дней</span>
{{--                                  <span v-else-if="cartItem.chosenWeek == 3">3 дней</span>--}}
                                  <span v-else>@{{ cartItem.chosenWeek * cartItem.timeToEat }} дней</span>
                                 </span>
                                    </div>
                                    <div>
                                        <a href="#" class="remove_item" @click="deleteFromCart(index)">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black"
                                                      stroke-width="2" stroke-linecap="round"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="ordering-info__subtitle" v-if="cart.length == 1">
                                    @{{ cart[0].deliveryText }}
                                </div>
                                <div class="ordering-info__subtitle"
                                     v-if="excludesInfo.count">
                                    (включая настройку меню: @{{ excludesInfo.price }}₽)
                                </div>
                                <div class="ordering-info__total total-info">
                                    <div class="total-info__price">
                                        <div class="total-info__title">
                                            Итого
                                        </div>
                                        <div class="total-info__price-nb price-nb"
                                             v-if="userData.balance && userData.useBalance && (orderTotalPrice / 2) > userData.balance">
                                            <div class="price-nb__number">
                                                @{{ orderTotalPrice - userData.balance + excludesInfo.price }} ₽
                                            </div>
                                            <div class="price-nb__bns">
                                                <del>@{{ orderTotalPrice + excludesInfo.price }}</del>
                                                <div>@{{ - userData.balance }} бонуса</div>
                                            </div>
                                        </div>
                                        <div class="total-info__price-nb price-nb"
                                             v-else-if="userData.balance && userData.useBalance && (orderTotalPrice / 2) <= userData.balance">
                                            <div class="price-nb__number">
                                                @{{ orderTotalPrice - (orderTotalPrice / 2) + excludesInfo.price}} ₽
                                            </div>
                                            <div class="price-nb__bns">
                                                <del>@{{ orderTotalPrice + excludesInfo.price }}</del>
                                                <div>@{{ - (orderTotalPrice / 2 )}} бонуса</div>
                                            </div>
                                        </div>
                                        <div class="total-info__price-nb price-nb"
                                             v-else-if="userData.promoCodeState && userData.usePromoCode && userData.promoCodeSaleCost">
                                            <div class="price-nb__number">
                                                @{{ orderTotalPrice - userData.promoCodeSaleCost + excludesInfo.price }}
                                                ₽
                                            </div>
                                            <div class="price-nb__bns">
                                                <del>@{{ orderTotalPrice + excludesInfo.price }}</del>
                                                <div>@{{ - userData.promoCodeSaleCost }} ₽</div>
                                            </div>
                                        </div>
                                        <div class="total-info__price-nb price-nb" v-else>
                                            <div class="price-nb__number">
                                                @{{ orderTotalPrice + excludesInfo.price}} ₽
                                            </div>
                                        </div>
                                    </div>
                                    <div class="total-info__bonus">
                                        <div class="total-info__title">
                                            Бонусы
                                        </div>
                                        <div class="total-info__bonus-nb" v-if="userData.promoCodeMoreBonusesCost">
                                            +@{{ userData.promoCodeMoreBonusesCost + orderTotalBonus }}
                                        </div>
                                        <div class="total-info__bonus-nb" v-else-if="userData.promoCodeMoreBonusesPercent">
                                            +@{{ ((orderTotalPrice + excludesInfo.price) * userData.promoCodeMoreBonusesPercent / 100 )  + orderTotalBonus }}
                                        </div>
                                        <div class="total-info__bonus-nb" v-else>
                                            +@{{  orderTotalBonus }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a @click="submitOrder" v-if="!orderLoading">
                                <button class="info__btn">
                                    Оформить заказ
                                </button>
                            </a>
                            <a v-else>
                                <button class="info__btn" disabled>
                                    Оформить заказ
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="chenge-order" class="popap chenge-order">
    <div class="popap__body">
        <div class="popap__content">
            <a href="#" class="popap__close close-popup">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
            </a>
            <div class="popap__title">
                Изменить заказ
            </div>
            <div class="popap__subtitle">
                Меняй свой заказ в любое время
            </div>
            <iframe style="display: none;" name="frame"></iframe>
            <div v-if="cart[changingOrderIndex] !== false" class="chenge-order__form">
                <form action="#" target="frame">
                    <div class="_labal-container">
                        <svg class="_select-arrow" width="10" height="7" viewBox="0 0 10 7" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.24" d="M1 1L5 5L9 1" stroke="#EB6300" stroke-width="2"/>
                        </svg>
                        <select id="chenge-rasion" v-model="cart[changingOrderIndex].choosedRation"
                                @change="dishesCount(changingOrderIndex), checkValues(changingOrderIndex, cart[changingOrderIndex].choosedRation, cart[changingOrderIndex].timeToEat, cart[changingOrderIndex].chosenWeek)"
                                class="chenge-order__select default-text-color">
                            <option value="s" class="default-text-color">
                                <span class="_rasion default-text-color">S</span> — <span class="_dishes-perday">4 блюда в день,</span>
                                1200
                                ккал
                            </option>
                            <option value="m" selected class="default-text-color">
                                <span class="_rasion default-text-color">M</span> — <span class="_dishes-perday">5 блюд в день,</span>
                                1600
                                ккал
                            </option>
                            <option value="l" class="default-text-color">
                                <span class="_rasion default-text-color">L</span> — <span class="_dishes-perday">6 блюд в день,</span>
                                2000
                                ккал
                            </option>
                        </select>
                        <label for="chenge-rasion">Пакет</label>
                    </div>
                    <div class="_labal-container">
                        <svg class="_select-arrow" width="10" height="7" viewBox="0 0 10 7" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.24" d="M1 1L5 5L9 1" stroke="#EB6300" stroke-width="2"/>
                        </svg>
                        <select id="chenge-timeToEat" class="chenge-order__select default-text-color"
                                v-model="cart[changingOrderIndex].timeToEat"
                                @change="checkValues(changingOrderIndex, cart[changingOrderIndex].choosedRation, cart[changingOrderIndex].timeToEat, cart[changingOrderIndex].chosenWeek)">
                            <option value="5" class="default-text-color">По будням</option>
                            <option value="7" class="default-text-color">Каждый день</option>
                        </select>
                        <label for="chenge-timeToEat">Когда будешь есть?</label>
                    </div>
                    <div class="_labal-container">
                        <select id="chenge-weekCount" v-model="cart[changingOrderIndex].chosenWeek"
                                @change="checkValues(changingOrderIndex, cart[changingOrderIndex].choosedRation, cart[changingOrderIndex].timeToEat, cart[changingOrderIndex].chosenWeek)"
                                class="chenge-order__select default-text-color">
                            <option class="default-text-color" value="1"
                                    v-if="cart[changingOrderIndex].choosedRation == 's'">@{{
                                cart[changingOrderIndex].timeToEat }} дней — 900 ₽
                                в день
                            </option>
                            <option class="default-text-color" value="1"
                                    v-else-if="cart[changingOrderIndex].choosedRation == 'm'">@{{
                                cart[changingOrderIndex].timeToEat }} дней — 950 ₽
                                в день
                            </option>
                            <option class="default-text-color" value="1" v-else>@{{ cart[changingOrderIndex].timeToEat
                                }} дней — 990 ₽ в день
                            </option>
                            <option class="default-text-color" value="2"
                                    v-if="cart[changingOrderIndex].choosedRation == 's'">@{{
                                cart[changingOrderIndex].timeToEat * 2 }} дней — 865 ₽ в день
                            </option>
                            <option class="default-text-color" value="2"
                                    v-else-if="cart[changingOrderIndex].choosedRation == 'm'">@{{
                                cart[changingOrderIndex].timeToEat * 2 }} дней — 905 ₽ в день
                            </option>
                            <option class="default-text-color" value="2" v-else>@{{ cart[changingOrderIndex].timeToEat *
                                2 }} — 946 ₽ в день
                            </option>
                            {{--                            <option class="default-text-color" value="3" v-if="cart[changingOrderIndex].choosedRation == 's'">3 неделя — 844 ₽ в день</option>--}}
                            {{--                            <option class="default-text-color" value="3" v-else-if="cart[changingOrderIndex].choosedRation == 'm'">3 неделя — 864 ₽ в день</option>--}}
                            {{--                            <option class="default-text-color" value="3" v-else>3 неделя — 911 ₽ в день</option>--}}
                            <option class="default-text-color" value="4"
                                    v-if="cart[changingOrderIndex].choosedRation == 's'">@{{
                                cart[changingOrderIndex].timeToEat *4 }} дней — 720 ₽ в день
                            </option>
                            <option class="default-text-color" value="4"
                                    v-else-if="cart[changingOrderIndex].choosedRation == 'm'">@{{
                                cart[changingOrderIndex].timeToEat * 4 }} дней — 760 ₽ в день
                            </option>
                            <option class="default-text-color" value="4" v-else>@{{ cart[changingOrderIndex].timeToEat *
                                4 }} дней — 799 ₽ в день
                            </option>
                        </select>
                        <label for="chenge-weekCount">Сколько дней?</label>
                    </div>
                    <div class="chenge-order__prices prices-chenge">
                        <div class="prices-chenge__item">
                            <div class="prices-chenge__number">@{{ cart[changingOrderIndex].totalPriseFirst }} ₽</div>
                            <div class="prices-chenge__bonus">+@{{ cart[changingOrderIndex].bonus }} бонусов</div>
                            <div class="prices-chenge__final">
                                @{{ cart[changingOrderIndex].deshesPerDay == 4 ? cart[changingOrderIndex].deshesPerDay+
                                ' блюда ' : cart[changingOrderIndex].deshesPerDay + ' блюд ' }}в день = @{{
                                cart[changingOrderIndex].dishesPrise }} ₽, <span>бесплатная доставка</span>
                            </div>
                        </div>
                    </div>
                    <button class="chenge-order__btn close-popup">
                        Сохранить
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
<div id="add-order" class="popap chenge-order _add-order">
    <div class="popap__body">
        <div class="popap__content">
            <a href="#" class="popap__close close-popup">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
            </a>
            <div class="popap__title">
                Добавить заказ
            </div>
            <div class="popap__subtitle">
                Заказ объединится с текущим
            </div>
            <iframe style="display: none;" name="frame"></iframe>
            <div class="chenge-order__form">
                <form action="#" target="frame">
                    <div class="_labal-container">
                        <svg class="_select-arrow" width="10" height="7" viewBox="0 0 10 7" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.24" d="M1 1L5 5L9 1" stroke="#EB6300" stroke-width="2"/>
                        </svg>
                        <select id="chenge-rasion" v-model="addAnotherOrderValues.choosedRation"
                                @change="dishesCountAnotherOrder(), checkValues(0, addAnotherOrderValues.choosedRation, addAnotherOrderValues.timeToEat, addAnotherOrderValues.chosenWeek, false)"
                                class="chenge-order__select default-text-color">
                            <option value="s" class="default-text-color">
                                <span class="_rasion default-text-color">S</span> — <span class="_dishes-perday">4 блюда в день,</span>
                                1200
                                ккал
                            </option>
                            <option value="m" class="default-text-color" selected>
                                <span class="_rasion default-text-color">M</span> — <span class="_dishes-perday">5 блюд в день,</span>
                                1600
                                ккал
                            </option>
                            <option value="l" class="default-text-color">
                                <span class="_rasion default-text-color">L</span> — <span class="_dishes-perday">6 блюд в день,</span>
                                2000
                                ккал
                            </option>
                        </select>
                        <label for="chenge-rasion">Пакет</label>
                    </div>
                    <div class="_labal-container">
                        <svg class="_select-arrow" width="10" height="7" viewBox="0 0 10 7" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.24" d="M1 1L5 5L9 1" stroke="#EB6300" stroke-width="2"/>
                        </svg>
                        <select id="chenge-timeToEat" class="chenge-order__select default-text-color"
                                @change="checkValues(0, addAnotherOrderValues.choosedRation, addAnotherOrderValues.timeToEat, addAnotherOrderValues.chosenWeek, false)"
                                v-model="addAnotherOrderValues.timeToEat">
                            <option class="default-text-color" value="5">По будням</option>
                            <option class="default-text-color" value="7">Каждый день</option>
                        </select>
                        <label for="chenge-timeToEat">Когда будешь есть?</label>
                    </div>
                    <div class="_labal-container">
                        <select id="chenge-weekCount" v-model="addAnotherOrderValues.chosenWeek"
                                @change="checkValues(0, addAnotherOrderValues.choosedRation, addAnotherOrderValues.timeToEat, addAnotherOrderValues.chosenWeek, false)"
                                class="chenge-order__select default-text-color">
                            <option class="default-text-color" value="1"
                                    v-if="addAnotherOrderValues.choosedRation == 's'">@{{
                                addAnotherOrderValues.timeToEat * 1}} дней — 900 ₽ в день
                            </option>
                            <option class="default-text-color" value="1"
                                    v-else-if="addAnotherOrderValues.choosedRation == 'm'">@{{
                                addAnotherOrderValues.timeToEat * 1 }} — 950 ₽ в день
                            </option>
                            <option class="default-text-color" value="1" v-else>@{{ addAnotherOrderValues.timeToEat *
                                1}} — 990 ₽ в день
                            </option>
                            <option class="default-text-color" value="2"
                                    v-if="addAnotherOrderValues.choosedRation == 's'">@{{
                                addAnotherOrderValues.timeToEat * 2 }} — 865 ₽ в день
                            </option>
                            <option class="default-text-color" value="2"
                                    v-else-if="addAnotherOrderValues.choosedRation == 'm'">@{{
                                addAnotherOrderValues.timeToEat * 2 }} — 905 ₽ в день
                            </option>
                            <option class="default-text-color" value="2" v-else>@{{ addAnotherOrderValues.timeToEat * 2
                                }} — 946 ₽ в день
                            </option>
                            {{--                            <option class="default-text-color" value="3" v-if="addAnotherOrderValues.choosedRation == 's'">3 неделя — 844 ₽ в день</option>--}}
                            {{--                            <option class="default-text-color" value="3" v-else-if="addAnotherOrderValues.choosedRation == 'm'">3 неделя — 864 ₽ в день</option>--}}
                            {{--                            <option class="default-text-color" value="3" v-else>3 неделя — 911 ₽ в день</option>--}}
                            <option class="default-text-color" value="4"
                                    v-if="addAnotherOrderValues.choosedRation == 's'">@{{
                                addAnotherOrderValues.timeToEat * 4 }} — 720 ₽ в день
                            </option>
                            <option class="default-text-color" value="4"
                                    v-else-if="addAnotherOrderValues.choosedRation == 'm'">@{{
                                addAnotherOrderValues.timeToEat * 4 }} — 760 ₽ в день
                            </option>
                            <option class="default-text-color" value="4" v-else>@{{ addAnotherOrderValues.timeToEat * 4
                                }} — 799 ₽ в день
                            </option>
                        </select>
                        <label for="chenge-weekCount">Сколько дней?</label>
                    </div>
                    <div class="add-order__price price-add">
                        <div class="price-add__item">
                            <div class="price-add__title">Итого</div>
                            <div class="price-add__price">@{{ addAnotherOrderValues.totalPriseFirst }} ₽</div>
                        </div>
                        <div class="price-add__item _add-bonus">
                            <div class="price-add__title">Бонусы</div>
                            <div class="price-add__price">+@{{ addAnotherOrderValues.bonus }}</div>
                        </div>
                    </div>
                    <div class="add-order__comment">
                        @{{ addAnotherOrderValues.deshesPerDay == 4 ? addAnotherOrderValues.deshesPerDay + ' блюда ' :
                        addAnotherOrderValues.deshesPerDay + ' блюд ' }}в день = @{{ addAnotherOrderValues.dishesPrise
                        }}
                        ₽,
                        <span>бесплатная доставка</span>
                    </div>
                    <button @click="addAnotherOrder" class="chenge-order__btn close-popup">
                        Добавить заказ
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
<div id="personal-area-order" class="popap _personal-area-order">
    <div class="popap__body">
        <div class="popap__content" v-show="userOrdersCurrent[openedOrderIndex]">
            <a href="#" class="popap__close close-popup"
               @click="modalAction('personal-area-order', 'personal-area-order', false)">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
            </a>
            <div class="popap__big-title">
                Заказ №1
            </div>
            <div class="popap__title">
                Календарь доставок
            </div>
            <div class="popap__subtitle">
                Изменить даты и адреса для каждого дня доставки возможно не позднее 12:00 за день до
                доставки.
            </div>
            <div class="forDesktop">
                <div class="popap__table">
                    <table>
                        <thead>
                        <tr>
                            <th style="width: 12%">№ заказа</th>
                            <th style="width: 15%">Дата доставки</th>
                            <th>Адрес доставки</th>
                            <th style="width: 18%">Интервал доставки</th>
                            <th style="width: 17%">Статус доставки</th>
                            <th style="width: 6%"></th>
                        </tr>
                        </thead>
                        <tbody v-if="userOrdersCurrent[openedOrderIndex]">
                        <tr v-for="(delivery, index) in userOrdersCurrent[openedOrderIndex].deliveries"
                            @click="changeableDeliveryId = 1, updatedDeliveryIndex = index, scrollToById('deliveryActionsForDesktop')"
                            :class="{'_active': index === updatedDeliveryIndex}">
                            <td>@{{ delivery.maxoptra_id }}</td>
                            <td>@{{ delivery.delivery_date }}</td>
                            <td>@{{ delivery.address }}</td>
                            <td>@{{ delivery.from }}:00 - @{{ delivery.to }}:00</td>
                            <td>
                                <span v-if="!delivery.status_code">Обрабатывается</span>
                                <span class="_delivered" v-if="delivery.status_code === 'CLOSED'">@{{ delivery.status_name }}</span>
                                <span class="_failed"
                                      v-if="delivery.status_code === 'SUSPENDED' || delivery.status_code === 'FAILED'">@{{ delivery.status_name }}</span>
                            </td>
                            <td>
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.3623 0.00209528C16.0031 0.00598515 15.6457 0.129142 15.3651 0.409675L7.32228 8.45201L7.30044 8.47384C7.07674 8.68699 7.0347 8.84186 6.94379 9.0561C6.84919 9.27904 6.76198 9.54821 6.68904 9.84941C6.54316 10.4519 6.45657 11.1907 6.58714 11.9455C6.63634 12.2263 6.87405 12.464 7.15487 12.5132C7.90979 12.6438 8.64865 12.5572 9.25111 12.4113C9.55234 12.3384 9.81424 12.2512 10.0372 12.1566C10.2513 12.0657 10.4065 12.0161 10.6195 11.7927C10.6283 11.7834 10.6323 11.7808 10.6413 11.7708L18.6915 3.7285C19.3327 3.0873 19.1657 2.07024 18.5604 1.465C18.2499 1.15446 17.9393 0.843936 17.6288 0.533403C17.3261 0.230773 16.9249 0.0379357 16.5152 0.00209528C16.4639 -0.00237692 16.4136 0.00162942 16.3623 0.00209528H16.3623ZM16.355 1.3995C16.3501 1.40444 16.469 1.35332 16.6389 1.52323C16.9492 1.83643 17.2636 2.1455 17.5778 2.45482C17.7478 2.62479 17.6966 2.74362 17.7016 2.73867L17.2357 3.20447L15.8965 1.85802L16.355 1.3995ZM14.9066 2.84784L16.2458 4.1943L9.66599 10.7737C9.68084 10.7514 9.5953 10.8243 9.4913 10.8684C9.35263 10.9272 9.15512 10.9942 8.92357 11.0503C8.62279 11.1231 8.27578 11.1565 7.93368 11.1595C7.93711 10.8191 7.97041 10.4761 8.04286 10.1769C8.09893 9.94539 8.17326 9.74064 8.2321 9.60196C8.2655 9.52325 8.29504 9.47538 8.29761 9.46368L14.9066 2.84784ZM2.32915 3.2627C1.05089 3.2627 0 4.31352 0 5.5917V16.3051C0 17.5833 1.05089 18.6341 2.32915 18.6341H13.0433C14.3215 18.6341 15.3724 17.5833 15.3724 16.3051V9.551C15.3776 9.18188 15.0429 8.84236 14.6737 8.84236C14.3045 8.84236 13.9697 9.18188 13.9749 9.551V16.3051C13.9749 16.8333 13.5715 17.2367 13.0433 17.2367H2.32915C1.80093 17.2367 1.39749 16.8333 1.39749 16.3051V5.5917C1.39749 5.06351 1.80093 4.66011 2.32915 4.66011H10.0154C10.3845 4.66532 10.7241 4.33057 10.7241 3.9614C10.7241 3.59223 10.3845 3.25748 10.0154 3.2627H2.32915Z"
                                        fill="#EB6300"/>
                                </svg>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div id="deliveryActionsForDesktop" class="popap__table__actions" v-if="changeableDeliveryId">
                    <div @click="changeableDeliveryAction = 'changeAddress'" class="single"
                         v-if="userOrdersCurrent[openedOrderIndex].deliveries[updatedDeliveryIndex].status_code !== 'CLOSED'
                         && userOrdersCurrent[openedOrderIndex].deliveries[updatedDeliveryIndex].status_code !== 'FAILED'
                         && userOrdersCurrent[openedOrderIndex].deliveries[updatedDeliveryIndex].status_code !== 'SUSPENDED'"
                         :class="{'_active': changeableDeliveryAction === 'changeAddress'}">
                        <div class="popap__table__actions__icon">
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                                    stroke="#EB6300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path
                                    d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
                                    stroke="#EB6300" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="popap__table__actions__text">
                            Изменить адрес доставки
                        </div>
                    </div>
                    <div @click="changeableDeliveryAction = 'seeMenu'" class="single"
                         :class="{'_active': changeableDeliveryAction === 'seeMenu'}">
                        <div class="popap__table__actions__icon">
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7H19" stroke="#EB6300" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M1 1H19" stroke="#EB6300" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M1 13H19" stroke="#EB6300" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="popap__table__actions__text">
                            Посмотреть
                            <br>
                            меню
                        </div>
                    </div>
                </div>
                <div class="popap__table__action__change_address"
                     v-show="changeableDeliveryId && changeableDeliveryAction === 'changeAddress' && updatedDeliveryIndex !== false">
                    <div class="popap__table__action__change_address__select_adress">
                        <div class="popap__table__action__change_address__header">
                            Выберите адрес
                        </div>
                        <div class="adresses__info info-adress" v-if="userData.addressStreet">
                            <div class="info-adress__item">
                                <svg width="172" height="215" viewBox="0 0 172 215" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.08" fill-rule="evenodd" clip-rule="evenodd"
                                          d="M189.775 114.054C195.666 134.142 179.376 153.972 167.205 171.007C154.296 189.076 140.553 215.742 118.406 213.947C94.3233 211.995 91.585 172.492 69.337 163.075C48.3971 154.212 14.258 184.657 2.81365 165.023C-8.89607 144.933 29.124 127.769 35.7739 105.493C40.0165 91.2806 27.3496 75.6327 33.5241 62.1458C40.3459 47.245 55.8737 39.3396 69.9269 30.8929C89.6101 19.0622 112.096 -9.253 131.262 3.39978C152.368 17.3322 127.788 54.544 139.604 76.8902C149.573 95.7425 183.775 93.5933 189.775 114.054Z"
                                          fill="#EB6300"/>
                                </svg>
                                <div class="info-adress__title">@{{
                                    userData.addressStreet }}
                                </div>
                                <div class="info-adress__actions actions">
                                    <a href="#" @click="modalAction('chenge-addres', false), openUpdateAddressModal(1)"
                                       class="actions__chenge popap-link">Изменить</a>
                                    <div @click="modalAction('delete-question-popap', false), idOfDeletableAddress = 1"
                                         class="actions__delete">Удалить
                                    </div>
                                </div>
                            </div>
                            <div class="info-adress__checkbox"
                                 @click="updateDeliveryAddress(1, userOrdersCurrent[openedOrderIndex].deliveries[updatedDeliveryIndex].id)">
                                <div class="info-adress__checkbox__not_selected"
                                     :class="{'_selected': updatedDeliveryIndex !== false && userOrdersCurrent[openedOrderIndex].deliveries[updatedDeliveryIndex].address.split(', Подьезд')[0] == userData.addressStreet}">
                                    <svg width="0" height="0" viewBox="0 0 13 10" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 5L4.75 8.75L12.25 1.25" stroke="white" stroke-width="2"
                                              stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="adresses__info info-adress" v-if="userData.addressStreet2">
                            <div class="info-adress__item">
                                <svg width="172" height="215" viewBox="0 0 172 215" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.08" fill-rule="evenodd" clip-rule="evenodd"
                                          d="M189.775 114.054C195.666 134.142 179.376 153.972 167.205 171.007C154.296 189.076 140.553 215.742 118.406 213.947C94.3233 211.995 91.585 172.492 69.337 163.075C48.3971 154.212 14.258 184.657 2.81365 165.023C-8.89607 144.933 29.124 127.769 35.7739 105.493C40.0165 91.2806 27.3496 75.6327 33.5241 62.1458C40.3459 47.245 55.8737 39.3396 69.9269 30.8929C89.6101 19.0622 112.096 -9.253 131.262 3.39978C152.368 17.3322 127.788 54.544 139.604 76.8902C149.573 95.7425 183.775 93.5933 189.775 114.054Z"
                                          fill="#EB6300"/>
                                </svg>
                                <div class="info-adress__title">@{{
                                    userData.addressStreet2 }}
                                </div>
                                <div class="info-adress__actions actions">
                                    <a href="#" @click="modalAction('chenge-addres', false), openUpdateAddressModal(2)"
                                       class="actions__chenge popap-link">Изменить</a>
                                    <div class="actions__delete"
                                         @click="modalAction('delete-question-popap', false), idOfDeletableAddress = 2">
                                        Удалить
                                    </div>
                                </div>
                            </div>
                            <div class="info-adress__checkbox"
                                 @click="updateDeliveryAddress(2, userOrdersCurrent[openedOrderIndex].deliveries[updatedDeliveryIndex].id)">
                                <div class="info-adress__checkbox__not_selected"
                                     :class="{'_selected': updatedDeliveryIndex !== false && userOrdersCurrent[openedOrderIndex].deliveries[updatedDeliveryIndex].address.split(', Подьезд')[0] == userData.addressStreet2}">
                                    <svg width="0" height="0" viewBox="0 0 13 10" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 5L4.75 8.75L12.25 1.25" stroke="white" stroke-width="2"
                                              stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="popap__table__action__change_address__comment">
                            Максимум 2 адрес.
                        </div>
                    </div>
                    <div class="popap__table__action__change_address__add_adress">
                        <div class="popap__table__action__change_address__header">
                            или добавьте новый
                        </div>
                        <div class="popap__table__action__change_address__subtitle"
                             v-if="userData.addressStreet2 && userData.addressStreet">
                            У вас уже есть 2 адреса!
                        </div>
                        <div class="popap__table__action__change_address__add_adress__street_and_floor">
                            <div class="popap__table__action__change_address__add_adress__street">
                                       <textarea class="default-text-color"
                                                 name="address"
                                                 v-if="userData.addressStreet2 && userData.addressStreet"
                                                 disabled="true"
                                                 :class="{'validation-error':addressFormRequiredFields.addressStreet}">
                                       </textarea>
                                <textarea class="default-text-color"
                                          name="address"
                                          v-else
                                          v-model="newAddress.addressStreet"
                                          :class="{'validation-error':addressFormRequiredFields.addressStreet}">
                                       </textarea>
                                <label>Введи улицу и дом</label>
                            </div>
                            <div class="popap__table__action__change_address__add_adress__floor_and_porch">
                                <div class="popap__table__action__change_address__add_adress__floor">
                                    <input type="text"
                                           class="default-text-color"
                                           v-if="userData.addressStreet2 && userData.addressStreet"
                                           disabled="true">
                                    <input type="text"
                                           class="default-text-color"
                                           name="porch"
                                           v-else
                                           v-model="newAddress.addressPorch">
                                    <label> Подъезд </label>
                                </div>
                                <div class="popap__table__action__change_address__add_adress__porch">
                                    <input type="text"
                                           class="default-text-color"
                                           name="floor"
                                           v-if="userData.addressStreet2 && userData.addressStreet"
                                           disabled="true">
                                    <input type="text"
                                           class="default-text-color"
                                           name="floor"
                                           v-else
                                           v-model="newAddress.addressFloor">
                                    <label> Этаж </label>
                                </div>
                            </div>
                        </div>
                        <div class="popap__table__action__change_address__add_adress__name_address_and_flat">
                            <div class="popap__table__action__change_address__add_adress__name_address_and_intercom">
                                <div class="popap__table__action__change_address__add_adress__intercom">
                                    <input type="text" class="default-text-color" name="intercom"
                                           v-if="userData.addressStreet2 && userData.addressStreet"
                                           disabled="true">
                                    <input type="text" class="default-text-color" name="intercom"
                                           v-else
                                           v-model="newAddress.addressIntercom">
                                    <label> Домофон </label>
                                </div>
                            </div>
                            <div class="popap__table__action__change_address__add_adress__flat">
                                <input type="text" class="default-text-color" name="flat"
                                       v-if="userData.addressStreet2 && userData.addressStreet"
                                       disabled="true">
                                <input type="text" class="default-text-color" name="flat"
                                       v-else
                                       v-model="newAddress.addressFlat">
                                <label> Квартира </label>
                            </div>
                        </div>
                        <div class="popap__table__action__change_address__add_adress__comment_and_save_button">
                            <div class="popap__table__action__change_address__add_adress__comment">
                                <input type="text" class="default-text-color" name="comment"
                                       v-if="userData.addressStreet2 && userData.addressStreet"
                                       disabled="true">
                                <input type="text" class="default-text-color" name="comment"
                                       v-else
                                       v-model="newAddress.commentForOrder">
                                <label> Комментарий к доставке </label>
                            </div>
                            <div class="popap__table__action__change_address__add_adress__save">
                                <button disabled v-if="userData.addressStreet2 && userData.addressStreet">
                                    Сохранить
                                </button>
                                <button
                                    v-else
                                    @click="addAddressForDelivery(userOrdersCurrent[openedOrderIndex].deliveries[updatedDeliveryIndex].id)">
                                    Сохранить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="popap__table__action__menu" v-show="changeableDeliveryAction === 'seeMenu'">
                    <div class="menu_sample menuL" id="menuL">
                        <div class="sample_menu_date">
                            <div v-for="currentWeekDate in deliveryDateArray"
                                 @click="deliveryCurrentDay = currentWeekDate.currentWeekDayNumber, getDeliveryDays()"
                                 :class="{active_date:deliveryCurrentDay == currentWeekDate.currentWeekDayNumber}"
                                 class="date_conteiner"><span
                                    class="name_date_week_fl">@{{ daysArray[currentWeekDate.currentWeekDayNumber] }}</span><span
                                    class="name_date_week_nfl">@{{ daysArrayMobile[currentWeekDate.currentWeekDayNumber] }}</span>
                                <span class="date">@{{ currentWeekDate.currentWeekDateNumber }}</span>
                            </div>
                        </div>
                        <div class="delivery_menu_menu">

                        </div>
                        <div class="_not_available_yet" v-if="!menuForDelivery.length">
                            К сожалению, меню на этот день ещё не доступно :(
                        </div>
                    </div>
                </div>
            </div>
            <div class="forMobile">
                <div class="popap__delivery_articles" v-show="userOrdersCurrent[openedOrderIndex]">
                    <div v-if="userOrdersCurrent[openedOrderIndex]">
                        <div v-for="(delivery, index) in userOrdersCurrent[openedOrderIndex].deliveries">
                            <div class="single">
                                <div class="location">
                                    <svg width="10" height="15" viewBox="0 0 10 15" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.3"
                                              d="M10 5.92664C10 9.07815 6.97653 12.4027 5.63182 13.7254C5.27689 14.0745 4.72311 14.0745 4.36818 13.7254C3.02347 12.4027 0 9.07815 0 5.92664C0 3.03004 2.23858 0.681885 5 0.681885C7.76142 0.681885 10 3.03004 10 5.92664Z"
                                              fill="#151721"/>
                                        <circle cx="5.00002" cy="5.68191" r="2.27273" fill="#F1F1F1"/>
                                    </svg>
                                    @{{ delivery.address.split(', Подьезд')[0] }}
                                </div>
                                <div class="date_box_and_order">
                                    <div class="date_box_border">
                                        <div class="date_box_border__content">
                                            <div class="day_name">
                                                @{{ moment(delivery.delivery_date).format("ddd") }}
                                            </div>
                                            <div class="date">
                                                @{{ moment(delivery.delivery_date).format("D MMM") }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="delivery_info">
                                        <div class="delivery_number">
                                            Доставка №@{{ index + 1 }}
                                        </div>
                                        <div class="order_number">
                                            № заказа: <span>@{{ delivery.maxoptra_id }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="delivery_interval_and_status">
                                    <div class="delivery_interval">
                                        <div class="delivery_interval__key">
                                            Интервал доставки:
                                        </div>
                                        <div class="delivery_interval__value">
                                            @{{ delivery.from }}:00 - @{{ delivery.to }}:00
                                        </div>
                                    </div>
                                    <div class="delivery_status">
                                        <div class="delivery_status__key">
                                            Статус доставки:
                                        </div>
                                        <div class="delivery_status__button">
                                            <button class="status_button _in_process" v-if="!delivery.status_code">
                                                Обрабатывается
                                            </button>
                                            <button class="status_button _not_paid"
                                                    v-if="delivery.status_code === 'SUSPENDED' || delivery.status_code === 'FAILED'">
                                                @{{ delivery.status_name }}
                                            </button>
                                            <button class="status_button _success"
                                                    v-else-if="delivery.status_code === 'CLOSED'">@{{
                                                delivery.status_name
                                                }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="actions_menu_button" @click="openDeliveryAction(index)"
                                     :class="{'_actions_menu_button_open': index === openedDeliveryActionIndex}">
                                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.88916 1.33301L6.00027 5.2219L2.11138 1.33301" stroke="#EB6300"
                                              stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="delivery_actions"
                                     :class="{'_open_delivery_actions': index === openedDeliveryActionIndex}">
                                    <div @click="changeableDeliveryAction = 'changeAddress'" class="singleAction"
                                         v-if="userOrdersCurrent[openedOrderIndex].deliveries[index].status_code !== 'CLOSED'
                                             && userOrdersCurrent[openedOrderIndex].deliveries[index].status_code !== 'FAILED'
                                             && userOrdersCurrent[openedOrderIndex].deliveries[index].status_code !== 'SUSPENDED'"
                                         :class="{'_active': changeableDeliveryAction === 'changeAddress'}">
                                        <div class="delivery_actions__icon">
                                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                                                    stroke="#EB6300" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round"/>
                                                <path
                                                    d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
                                                    stroke="#EB6300" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <div class="delivery_actions__text">
                                            Изменить адрес доставки
                                        </div>
                                    </div>
                                    <div @click="changeableDeliveryAction = 'seeMenu'" class="singleAction"
                                         :class="{'_active': changeableDeliveryAction === 'seeMenu'}">
                                        <div class="delivery_actions__icon">
                                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 7H19" stroke="#EB6300" stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                                <path d="M1 1H19" stroke="#EB6300" stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                                <path d="M1 13H19" stroke="#EB6300" stroke-width="2"
                                                      stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <div class="delivery_actions__text">
                                            Посмотреть
                                            <br>
                                            меню
                                        </div>
                                    </div>
                                </div>
                                <div class="delivery_action__change_address"
                                     :class="{'_open_delivery_action': changeableDeliveryAction === 'changeAddress' && openedDeliveryActionIndex !== false  && openedDeliveryActionIndex === index}">
                                    <div class="delivery_action__change_address__select_adress">
                                        <div class="delivery_action__change_address__header">
                                            Выберите адрес
                                        </div>
                                        <div class="adresses__info info-adress" v-if="userData.addressStreet">
                                            <div class="info-adress__item">
                                                <svg width="172" height="215" viewBox="0 0 172 215" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.08" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M189.775 114.054C195.666 134.142 179.376 153.972 167.205 171.007C154.296 189.076 140.553 215.742 118.406 213.947C94.3233 211.995 91.585 172.492 69.337 163.075C48.3971 154.212 14.258 184.657 2.81365 165.023C-8.89607 144.933 29.124 127.769 35.7739 105.493C40.0165 91.2806 27.3496 75.6327 33.5241 62.1458C40.3459 47.245 55.8737 39.3396 69.9269 30.8929C89.6101 19.0622 112.096 -9.253 131.262 3.39978C152.368 17.3322 127.788 54.544 139.604 76.8902C149.573 95.7425 183.775 93.5933 189.775 114.054Z"
                                                          fill="#EB6300"/>
                                                </svg>
                                                <div class="info-adress__title">@{{
                                                    userData.addressStreet }}
                                                </div>
                                                <div class="info-adress__actions actions">
                                                    <a href="#"
                                                       @click="modalAction('chenge-addres', false), openUpdateAddressModal(1)"
                                                       class="actions__chenge popap-link">Изменить</a>
                                                    <div
                                                        @click="modalAction('delete-question-popap', false), idOfDeletableAddress = 1"
                                                        class="actions__delete">Удалить
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="info-adress__checkbox"
                                                 @click="updateDeliveryAddress(1, userOrdersCurrent[openedOrderIndex].deliveries[updatedDeliveryIndex].id)">
                                                <div class="info-adress__checkbox__not_selected"
                                                     :class="{'_selected': updatedDeliveryIndex !== false && userOrdersCurrent[openedOrderIndex].deliveries[updatedDeliveryIndex].address.split(', Подьезд')[0] == userData.addressStreet}">
                                                    <svg width="0" height="0" viewBox="0 0 13 10" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 5L4.75 8.75L12.25 1.25" stroke="white"
                                                              stroke-width="2"
                                                              stroke-linejoin="round"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="adresses__info info-adress" v-if="userData.addressStreet2">
                                            <div class="info-adress__item">
                                                <svg width="172" height="215" viewBox="0 0 172 215" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.08" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M189.775 114.054C195.666 134.142 179.376 153.972 167.205 171.007C154.296 189.076 140.553 215.742 118.406 213.947C94.3233 211.995 91.585 172.492 69.337 163.075C48.3971 154.212 14.258 184.657 2.81365 165.023C-8.89607 144.933 29.124 127.769 35.7739 105.493C40.0165 91.2806 27.3496 75.6327 33.5241 62.1458C40.3459 47.245 55.8737 39.3396 69.9269 30.8929C89.6101 19.0622 112.096 -9.253 131.262 3.39978C152.368 17.3322 127.788 54.544 139.604 76.8902C149.573 95.7425 183.775 93.5933 189.775 114.054Z"
                                                          fill="#EB6300"/>
                                                </svg>
                                                <div class="info-adress__title">@{{
                                                    userData.addressStreet2 }}
                                                </div>
                                                <div class="info-adress__actions actions">
                                                    <a href="#"
                                                       @click="modalAction('chenge-addres', false), openUpdateAddressModal(2)"
                                                       class="actions__chenge popap-link">Изменить</a>
                                                    <div class="actions__delete"
                                                         @click="modalAction('delete-question-popap', false), idOfDeletableAddress = 2">
                                                        Удалить
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="info-adress__checkbox"
                                                 @click="updateDeliveryAddress(2, userOrdersCurrent[openedOrderIndex].deliveries[updatedDeliveryIndex].id)">
                                                <div class="info-adress__checkbox__not_selected"
                                                     :class="{'_selected':  updatedDeliveryIndex !== false && userOrdersCurrent[openedOrderIndex].deliveries[updatedDeliveryIndex].address.split(', Подьезд')[0] == userData.addressStreet2}">
                                                    <svg width="0" height="0" viewBox="0 0 13 10" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 5L4.75 8.75L12.25 1.25" stroke="white"
                                                              stroke-width="2"
                                                              stroke-linejoin="round"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="delivery_action__change_address__comment">
                                            Максимум 2 адрес.
                                        </div>
                                    </div>
                                    <div class="delivery_action__change_address__add_adress">
                                        <div class="delivery_action__change_address__header">
                                            или добавьте новый
                                        </div>
                                        <div class="delivery_action__change_address__subtitle"
                                             v-if="userData.addressStreet2 && userData.addressStreet">
                                            У вас уже есть 2 адреса!
                                        </div>
                                        <div class="delivery_action__change_address__add_adress__street_and_floor">
                                            <div class="delivery_action__change_address__add_adress__street">
                                       <textarea class="default-text-color"
                                                 name="address"
                                                 v-if="userData.addressStreet2 && userData.addressStreet"
                                                 disabled="true"
                                                 :class="{'validation-error':addressFormRequiredFields.addressStreet}">
                                       </textarea>
                                                <textarea class="default-text-color"
                                                          name="address"
                                                          v-else
                                                          v-model="newAddress.addressStreet"
                                                          :class="{'validation-error':addressFormRequiredFields.addressStreet}">
                                       </textarea>
                                                <label>Введи улицу и дом</label>
                                            </div>
                                            <div class="delivery_action__change_address__add_adress__floor_and_porch">
                                                <div class="delivery_action__change_address__add_adress__floor">
                                                    <input type="text"
                                                           class="default-text-color"
                                                           v-if="userData.addressStreet2 && userData.addressStreet"
                                                           disabled="true">
                                                    <input type="text"
                                                           class="default-text-color"
                                                           name="porch"
                                                           v-else
                                                           v-model="newAddress.addressPorch">
                                                    <label> Подъезд </label>
                                                </div>
                                                <div class="delivery_action__change_address__add_adress__porch">
                                                    <input type="text"
                                                           class="default-text-color"
                                                           name="floor"
                                                           v-if="userData.addressStreet2 && userData.addressStreet"
                                                           disabled="true">
                                                    <input type="text"
                                                           class="default-text-color"
                                                           name="floor"
                                                           v-else
                                                           v-model="newAddress.addressFloor">
                                                    <label> Этаж </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="delivery_action__change_address__add_adress__name_address_and_flat">
                                            <div class="delivery_action__change_address__add_adress__flat_and_intercom">
                                                <div class="delivery_action__change_address__add_adress__flat">
                                                    <input type="text" class="default-text-color" name="flat"
                                                           v-if="userData.addressStreet2 && userData.addressStreet"
                                                           disabled="true">
                                                    <input type="text" class="default-text-color" name="flat"
                                                           v-else
                                                           v-model="newAddress.addressFlat">
                                                    <label> Квартира </label>
                                                </div>
                                                <div class="delivery_action__change_address__add_adress__intercom">
                                                    <input type="text" class="default-text-color" name="intercom"
                                                           v-if="userData.addressStreet2 && userData.addressStreet"
                                                           disabled="true">
                                                    <input type="text" class="default-text-color" name="intercom"
                                                           v-else
                                                           v-model="newAddress.addressIntercom">
                                                    <label> Домофон </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="delivery_action__change_address__add_adress__comment_and_save_button">
                                            <div class="delivery_action__change_address__add_adress__comment">
                                                <input type="text" class="default-text-color" name="comment"
                                                       v-if="userData.addressStreet2 && userData.addressStreet"
                                                       disabled="true">
                                                <input type="text" class="default-text-color" name="comment"
                                                       v-else
                                                       v-model="newAddress.commentForOrder">
                                                <label> Комментарий к доставке </label>
                                            </div>
                                            <div class="delivery_action__change_address__add_adress__save">
                                                <button disabled
                                                        v-if="userData.addressStreet2 && userData.addressStreet">
                                                    Сохранить
                                                </button>
                                                <button
                                                    v-else
                                                    @click="addAddressForDelivery(userOrdersCurrent[openedOrderIndex].deliveries[updatedDeliveryIndex].id)">
                                                    Сохранить
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="delivery_action__menu"
                                     :class="{'_open_menu_action': changeableDeliveryAction === 'seeMenu' && openedDeliveryActionIndex !== false && openedDeliveryActionIndex === index}">
                                    <div class="menu_sample menuL" id="menuL">
                                        <div class="sample_menu_date">
                                            <div v-for="currentWeekDate in deliveryDateArray"
                                                 @click="deliveryCurrentDay = currentWeekDate.currentWeekDayNumber, getDeliveryDays()"
                                                 :class="{'active_date':deliveryCurrentDay == currentWeekDate.currentWeekDayNumber}"
                                                 class="date_conteiner"><span
                                                    class="name_date_week_fl">@{{ daysArray[currentWeekDate.currentWeekDayNumber] }}</span><span
                                                    class="name_date_week_nfl">@{{ daysArrayMobile[currentWeekDate.currentWeekDayNumber] }}</span>
                                                <span class="date">@{{ currentWeekDate.currentWeekDateNumber }}</span>
                                            </div>
                                        </div>
                                        <div class="delivery_menu_menu_mobile"
                                             :class="'delivery_menu_menu_mobile_' + openedOrderIndex + '_' + index ">

                                        </div>
                                        <div class="_not_available_yet" v-if="!menuForDelivery.length">
                                            К сожалению, меню на этот день ещё не доступно :(
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
</div>
<div id="chenge-addres" class="popap _add-addres _chenge-addres">
    <div class="popap__body">
        <div class="popap__content">
            <a href="#" class="popap__close close-popup">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
            </a>
            <div class="popap__title">
                Редактировать адрес
            </div>
            <iframe style="display: none;" name="frame"></iframe>
            <form action="#" target="frame">
                <div class="_labal-container">
                    <textarea class="add-addres__textarea" name="house"
                              v-model="updatedAddress.addressStreet"></textarea>
                    <label>Введи улицу и дом</label>
                </div>
                <div class="add-addres__inputs">
                    <div class="_labal-container">
                        <input type="text" class="add-addres__input" name="porch"
                               v-model="updatedAddress.addressPorch">
                        <label> Подъезд </label>
                    </div>
                    <div class="_labal-container">
                        <input type="text" class="add-addres__input" name="floor"
                               v-model="updatedAddress.addressFloor">
                        <label> Этаж </label>
                    </div>
                    <div class="_labal-container">
                        <input type="text" class="add-addres__input" name="flat"
                               v-model="updatedAddress.addressFlat">
                        <label> Квартира </label>
                    </div>
                    <div class="_labal-container">
                        <input type="text" class="add-addres__input" name="intercom"
                               v-model="updatedAddress.addressIntercom">
                        <label> Домофон </label>
                    </div>
                </div>
                <button @click="updateAddress" type="button" class="add-addres__btn close-popap">Сохранить</button>
            </form>
        </div>
    </div>
</div>
<div id="success-updated" class="popap _sucess-popap">
    <div class="popap__body">
        <div class="popap__content">
            <a href="#" class="popap__close close-popup">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
            </a>
            <div class="sucess-popap__icon">
                <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12L8 18L24 2" stroke="#3AAE11" stroke-width="4" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="sucess-popap__title">
                <span>Успешно обновлено</span>
            </div>
            <div class="sucess-popap__text default-text-color">Успешно обновлено!</div>
            <svg class="wawe" width="566" height="49" viewBox="0 0 566 49" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.08"
                      d="M27.1881 14.3747L2.32465 27.4607C-6.48463 32.0972 -12 41.2326 -12 51.1875C-12 65.9957 0.00432968 78 14.8124 78H542.478C562.925 78 579.5 61.2025 579.5 40.7558C579.5 9.65325 543.234 -7.81702 519.327 12.0792C508.698 20.9252 493.999 23.0451 481.304 17.5631L451.987 4.90359C441.634 0.432892 430.074 -0.40657 419.183 2.52153L338.969 24.0884C333.041 25.6825 326.869 26.171 320.763 25.5296L208.2 13.7038C203.753 13.2367 199.264 13.3681 194.853 14.0943L130.639 24.6661C123.305 25.8735 115.795 25.4306 108.653 23.3697L64.3391 10.5811C51.9303 7.00001 38.617 8.35946 27.1881 14.3747Z"
                      fill="#3AAE11"/>
            </svg>
        </div>
    </div>
</div>
<div id="sucess-popap" class="popap _delete-question-popap">
    <div class="popap__body">
        <div class="popap__content">
            <a href="#" class="popap__close close-popup">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
            </a>
            <div class="sucess-popap__icon">
                <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12L8 18L24 2" stroke="#3AAE11" stroke-width="4" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="sucess-popap__title">
                <span>Заявка успешно</span>
                отправлена
            </div>
            <div class="sucess-popap__text default-text-color">В ближайшее время с вами свяжется наш менеджер</div>
            <svg class="wawe" width="566" height="49" viewBox="0 0 566 49" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.08"
                      d="M27.1881 14.3747L2.32465 27.4607C-6.48463 32.0972 -12 41.2326 -12 51.1875C-12 65.9957 0.00432968 78 14.8124 78H542.478C562.925 78 579.5 61.2025 579.5 40.7558C579.5 9.65325 543.234 -7.81702 519.327 12.0792C508.698 20.9252 493.999 23.0451 481.304 17.5631L451.987 4.90359C441.634 0.432892 430.074 -0.40657 419.183 2.52153L338.969 24.0884C333.041 25.6825 326.869 26.171 320.763 25.5296L208.2 13.7038C203.753 13.2367 199.264 13.3681 194.853 14.0943L130.639 24.6661C123.305 25.8735 115.795 25.4306 108.653 23.3697L64.3391 10.5811C51.9303 7.00001 38.617 8.35946 27.1881 14.3747Z"
                      fill="#3AAE11"/>
            </svg>
        </div>
    </div>
</div>
<div id="delete-question-popap" class="popap _delete-question-popap">
    <div class="popap__body">
        <div class="popap__content">
            <a href="#" class="popap__close close-popup">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
            </a>
            <div class="delete-question-popap__title">
                Вы уверены?
            </div>
            <div class="delete-question-popap__text default-text-color">После нажатия <span>"Удалить"</span>, вы не
                сможете
                восстановить ваш адрес!
                <button href="#" @click="deleteAddress"
                        class="delete-question-popap__btn popap-link delete_address_button">Удалить
                </button>
                <button href="#" class="delete-question-popap__btn _fast close-popup">Отменить
                </button>
            </div>
            <svg class="wawe" width="566" height="78" viewBox="0 0 566 78" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.08"
                      d="M27.1881 14.3747L2.32465 27.4607C-6.48463 32.0972 -12 41.2326 -12 51.1875C-12 65.9957 0.00432968 78 14.8124 78H542.478C562.925 78 579.5 61.2025 579.5 40.7558C579.5 9.65325 543.234 -7.81702 519.327 12.0792C508.698 20.9252 493.999 23.0451 481.304 17.5631L451.987 4.90359C441.634 0.432892 430.074 -0.40657 419.183 2.52153L338.969 24.0884C333.041 25.6825 326.869 26.171 320.763 25.5296L208.2 13.7038C203.753 13.2367 199.264 13.3681 194.853 14.0943L130.639 24.6661C123.305 25.8735 115.795 25.4306 108.653 23.3697L64.3391 10.5811C51.9303 7.00001 38.617 8.35946 27.1881 14.3747Z"
                      fill="#EB6300"/>
            </svg>
        </div>
    </div>
</div>
<div id="address-success-added" class="popap _sucess-popap">
    <div class="popap__body">
        <div class="popap__content">
            <a href="#" class="popap__close close-popup">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
            </a>
            <div class="sucess-popap__icon">
                <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12L8 18L24 2" stroke="#3AAE11" stroke-width="4" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="sucess-popap__title">
                <span>Успешно добавлено</span>
            </div>
            <div class="sucess-popap__text default-text-color">Ваш адрес успешно добавлено!</div>
            <svg class="wawe" width="566" height="49" viewBox="0 0 566 49" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.08"
                      d="M27.1881 14.3747L2.32465 27.4607C-6.48463 32.0972 -12 41.2326 -12 51.1875C-12 65.9957 0.00432968 78 14.8124 78H542.478C562.925 78 579.5 61.2025 579.5 40.7558C579.5 9.65325 543.234 -7.81702 519.327 12.0792C508.698 20.9252 493.999 23.0451 481.304 17.5631L451.987 4.90359C441.634 0.432892 430.074 -0.40657 419.183 2.52153L338.969 24.0884C333.041 25.6825 326.869 26.171 320.763 25.5296L208.2 13.7038C203.753 13.2367 199.264 13.3681 194.853 14.0943L130.639 24.6661C123.305 25.8735 115.795 25.4306 108.653 23.3697L64.3391 10.5811C51.9303 7.00001 38.617 8.35946 27.1881 14.3747Z"
                      fill="#3AAE11"/>
            </svg>
        </div>
    </div>
</div>
<div id="address-success-deleted" class="popap _sucess-popap">
    <div class="popap__body">
        <div class="popap__content">
            <a href="#" class="popap__close close-popup">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
            </a>
            <div class="sucess-popap__icon">
                <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12L8 18L24 2" stroke="#3AAE11" stroke-width="4" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="sucess-popap__title">
                <span>Успешно удалено</span>
            </div>
            <div class="sucess-popap__text default-text-color">Ваш адрес успешно удалено!</div>
            <svg class="wawe" width="566" height="49" viewBox="0 0 566 49" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.08"
                      d="M27.1881 14.3747L2.32465 27.4607C-6.48463 32.0972 -12 41.2326 -12 51.1875C-12 65.9957 0.00432968 78 14.8124 78H542.478C562.925 78 579.5 61.2025 579.5 40.7558C579.5 9.65325 543.234 -7.81702 519.327 12.0792C508.698 20.9252 493.999 23.0451 481.304 17.5631L451.987 4.90359C441.634 0.432892 430.074 -0.40657 419.183 2.52153L338.969 24.0884C333.041 25.6825 326.869 26.171 320.763 25.5296L208.2 13.7038C203.753 13.2367 199.264 13.3681 194.853 14.0943L130.639 24.6661C123.305 25.8735 115.795 25.4306 108.653 23.3697L64.3391 10.5811C51.9303 7.00001 38.617 8.35946 27.1881 14.3747Z"
                      fill="#3AAE11"/>
            </svg>
        </div>
    </div>
</div>
<div id="cant-do-changes" class="popap _delete-question-popap">
    <div class="popap__body">
        <div class="popap__content">
            <a href="#" class="popap__close close-popup">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
            </a>
            <div class="delete-question-popap__title">
                Невозможно!!!
            </div>
            <div class="delete-question-popap__text default-text-color"><span>Самостоятельно</span> вы можете изменить
                дату заказа или адрес доставки, накануне заказа до
                <span>12.00. </span>После 12.00 изменение возможно только через менеджера по тел. <a class="tell"
                                                                                                     href="tel:+74993227216">+7(499)-322-72-16</a>
                <button href="#" class="delete-question-popap__btn _fast close-popup" style="margin-top: 30px">Понятно
                </button>
            </div>
            <svg class="wawe" width="566" height="78" viewBox="0 0 566 78" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.08"
                      d="M27.1881 14.3747L2.32465 27.4607C-6.48463 32.0972 -12 41.2326 -12 51.1875C-12 65.9957 0.00432968 78 14.8124 78H542.478C562.925 78 579.5 61.2025 579.5 40.7558C579.5 9.65325 543.234 -7.81702 519.327 12.0792C508.698 20.9252 493.999 23.0451 481.304 17.5631L451.987 4.90359C441.634 0.432892 430.074 -0.40657 419.183 2.52153L338.969 24.0884C333.041 25.6825 326.869 26.171 320.763 25.5296L208.2 13.7038C203.753 13.2367 199.264 13.3681 194.853 14.0943L130.639 24.6661C123.305 25.8735 115.795 25.4306 108.653 23.3697L64.3391 10.5811C51.9303 7.00001 38.617 8.35946 27.1881 14.3747Z"
                      fill="#EB6300"/>
            </svg>
        </div>
    </div>
</div>
<div id="customize-menu" class="popap _customize-menu">
    <div class="popap__body">
        <div class="popap__content">
            <div class="popap__content_sticky_header">
                <a href="#" class="popap__close close-popup">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black" stroke-width="2"
                              stroke-linecap="round"/>
                    </svg>
                </a>
                <div class="popap__title">
                    Настройки меню
                </div>
            </div>
            <div class="popap__text">Выберите нежелательные ингредиенты, и мы исключим блюда с ними из меню</div>
            <div class="excludes_content">
                <div class="excludes_content__single">
                    <div class="excludes_content__single__header_and_count">
                        <div class="excludes_content__single__header">
                            Блюда
                        </div>
                        <div class="excludes_content__single__count" v-if="excludes.dish && excludes.dish.length">
                            Исключено @{{ excludes.dish.length }}
                            <a href="javascript:void(0)" @click="excludes.dish = []">
                                <svg width="10" height="9" viewBox="0 0 10 9" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.96175 0.375L5 3.33675L2.03825 0.375L0.875 1.53825L3.83675 4.5L0.875 7.46175L2.03825 8.625L5 5.66325L7.96175 8.625L9.125 7.46175L6.16325 4.5L9.125 1.53825L7.96175 0.375Z"
                                        fill="#A9A9A9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="excludes_content__single__excludes">
                        <div class="excludes_content__single__excludes__label_and_checkbox"
                             v-for="exclude in excludesParams.dish">
                            <div class="excludes_content__single__excludes__label">
                                @{{ exclude }}
                            </div>
                            <div class="excludes_content__single__excludes__checkbox">
                                <input type="checkbox" :value="exclude" v-model="excludes.dish">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="excludes_content__single">
                    <div class="excludes_content__single__header_and_count">
                        <div class="excludes_content__single__header">
                            Мясо / Рыба
                        </div>
                        <div class="excludes_content__single__count" v-if="excludes.meatAndFish && excludes.meatAndFish.length">
                            Исключено @{{ excludes.meatAndFish.length }}
                            <a href="javascript:void(0)" @click="excludes.meatAndFish = []">
                                <svg width="10" height="9" viewBox="0 0 10 9" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.96175 0.375L5 3.33675L2.03825 0.375L0.875 1.53825L3.83675 4.5L0.875 7.46175L2.03825 8.625L5 5.66325L7.96175 8.625L9.125 7.46175L6.16325 4.5L9.125 1.53825L7.96175 0.375Z"
                                        fill="#A9A9A9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="excludes_content__single__excludes">
                        <div class="excludes_content__single__excludes__label_and_checkbox"
                             v-for="exclude in excludesParams.meatAndFish">
                            <div class="excludes_content__single__excludes__label">
                                @{{ exclude }}
                            </div>
                            <div class="excludes_content__single__excludes__checkbox">
                                <input type="checkbox" :value="exclude" v-model="excludes.meatAndFish">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="excludes_content__single">
                    <div class="excludes_content__single__header_and_count">
                        <div class="excludes_content__single__header">
                            Овощи
                        </div>
                        <div class="excludes_content__single__count"
                             v-if="excludes.vegetables && excludes.vegetables.length">
                            Исключено @{{ excludes.vegetables.length }}
                            <a href="javascript:void(0)" @click="excludes.vegetables = []">
                                <svg width="10" height="9" viewBox="0 0 10 9" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.96175 0.375L5 3.33675L2.03825 0.375L0.875 1.53825L3.83675 4.5L0.875 7.46175L2.03825 8.625L5 5.66325L7.96175 8.625L9.125 7.46175L6.16325 4.5L9.125 1.53825L7.96175 0.375Z"
                                        fill="#A9A9A9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="excludes_content__single__excludes">
                        <div class="excludes_content__single__excludes__label_and_checkbox"
                             v-for="exclude in excludesParams.vegetables">
                            <div class="excludes_content__single__excludes__label">
                                @{{ exclude }}
                            </div>
                            <div class="excludes_content__single__excludes__checkbox">
                                <input type="checkbox" :value="exclude" v-model="excludes.vegetables">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="excludes_content__single">
                    <div class="excludes_content__single__header_and_count">
                        <div class="excludes_content__single__header">
                            Гарниры
                        </div>
                        <div class="excludes_content__single__count" v-if="excludes.garnishes && excludes.garnishes.length">
                            Исключено @{{ excludes.garnishes.length }}
                            <a href="javascript:void(0)" @click="excludes.garnishes = []">
                                <svg width="10" height="9" viewBox="0 0 10 9" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.96175 0.375L5 3.33675L2.03825 0.375L0.875 1.53825L3.83675 4.5L0.875 7.46175L2.03825 8.625L5 5.66325L7.96175 8.625L9.125 7.46175L6.16325 4.5L9.125 1.53825L7.96175 0.375Z"
                                        fill="#A9A9A9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="excludes_content__single__excludes">
                        <div class="excludes_content__single__excludes__label_and_checkbox"
                             v-for="exclude in excludesParams.garnishes">
                            <div class="excludes_content__single__excludes__label">
                                @{{ exclude }}
                            </div>
                            <div class="excludes_content__single__excludes__checkbox">
                                <input type="checkbox" :value="exclude" v-model="excludes.garnishes">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="excludes_content__single">
                    <div class="excludes_content__single__header_and_count">
                        <div class="excludes_content__single__header">
                            Аллергия
                        </div>
                        <div class="excludes_content__single__count" v-if="excludes.allergy && excludes.allergy.length">
                            Исключено @{{ excludes.allergy.length }}
                            <a href="javascript:void(0)" @click="excludes.allergy = []">
                                <svg width="10" height="9" viewBox="0 0 10 9" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.96175 0.375L5 3.33675L2.03825 0.375L0.875 1.53825L3.83675 4.5L0.875 7.46175L2.03825 8.625L5 5.66325L7.96175 8.625L9.125 7.46175L6.16325 4.5L9.125 1.53825L7.96175 0.375Z"
                                        fill="#A9A9A9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="excludes_content__single__excludes">
                        <div class="excludes_content__single__excludes__label_and_checkbox"
                             v-for="exclude in excludesParams.allergy">
                            <div class="excludes_content__single__excludes__label">
                                @{{ exclude }}
                            </div>
                            <div class="excludes_content__single__excludes__checkbox">
                                <input type="checkbox" :value="exclude" v-model="excludes.allergy">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="save_button">
                <button class="close-popup">Применить настройки</button>
            </div>
        </div>
    </div>
</div>
