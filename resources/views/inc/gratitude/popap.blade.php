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
<div id="personal-area-tell" class="popap _fast-order _personal-area-tell">
    <div class="popap__body">
        <div class="popap__content">
            <a href="#" class="popap__close close-popup">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
            </a>
            <div class="popap__title">
                Вход в личный кабинет
            </div>
            <div class="popap__subtitle">
                Введи номер и получи SMS с кодом для входа
            </div>
            <iframe style="display: none;" name="frame"></iframe>
            <form action="#" target="frame">
                <div class="_labal-container">
                    <input v-model="userData.phone" type="tel" class="fast-order__input"
                           :class="{'padding-30-desktop':userData.phone.length}"
                           v-mask="'+7 (###) ### ## ##'"
                           placeholder="+7 (___) ___-__-__">
                    <label for="entrance">Телефон</label>
                </div>
                <button v-if="userData.phone.length != 18" disabled class="fast-order__btn popap-submit">Продолжить
                </button>
                <button v-else href="#" type="button"
                        @click="getCodeSmsMethod('personal-area-sms','personal-area-tell')"
                        class="fast-order__btn popap-submit">Продолжить
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
<div id="personal-area-sms" class="popap _popap-sms _personal-area-sms">
    <div class="popap__body">
        <div class="popap__content">
            <a href="#" class="popap__close close-popup">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.48" d="M1 1L15 15M15 1L1 15" stroke="black" stroke-width="2"
                          stroke-linecap="round"/>
                </svg>
            </a>
            <div class="popap__title">
                Код из SMS
            </div>
            <div class="popap__subtitle">
                Мы отправили его на номер <span id="number">@{{ userData.phone }}</span>,
                <a href="#" @click="modalAction('personal-area-tell', 'personal-area-sms')" class="popap-link">изменить
                    номер</a>
            </div>
            <iframe style="display: none;" name="frame"></iframe>
            <form action="#" target="frame">
                <div class="popap-sms__inputs" style="display: block">
                    <input :class="{'validation-error':wrongSmsCode}" maxlength="4" @keyup="checkSmsCodeLength(true)"
                           type="tel" v-model="userData.smsCode" placeholder="____">
                    <br v-if="wrongSmsCode">
                    <label class="wrong-sms-error" v-if="wrongSmsCode">@{{ wrongCodeErrorMessage }}</label>
                </div>
                <button v-if="this.userData.smsCode.length !== 4" disabled class="fast-order__btn">Отправить</button>
                <button v-else @click="codeTryInput(true)" href="#" type="button" class="fast-order__btn">Отправить
                </button>
            </form>
            <div class="popap-sms__subtitle" v-if="sendCodeAgainTimer">
                Выслать код повторно, через <span id="timer">@{{ sendCodeAgainTimer }}</span>
            </div>
            <div @click="sendCodeAgain" class="popap-sms__subtitle" v-else>
                Отправить повторно
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
