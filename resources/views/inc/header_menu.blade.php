<div class="header__menu _scroll">
    <div class="header__wrapper">
        <div class="header__container">
            <div class="menu">
                <div class="menu__burger burger-menu">
                    <div class="checkbox switchMode">
                        <input type="checkbox" name="ckeckbox_1">
                    </div>
                    <a href="/#prepair" id="_road-link" class="burger-menu__item default-text-color">О нас</a>
                    <a id="_road-link" href="/#block1_chooseDiet" class="burger-menu__item default-text-color">Меню и тарифы</a>
                    <a id="_road-link" href="/#instagram" class="burger-menu__item default-text-color">Отзывы</a>
                    <a href="/personal-area" v-if="userData.name && userData.loggedIn" class="default-text-color">@{{ userData.name }}</a>
                    <a href="/personal-area" v-else-if="userData.phone && userData.loggedIn" class="default-text-color">@{{ userData.phone | VMask('+7 (###) ### ## ##') }}</a>
                    <a href="/personal-area" v-if="userData.balance && userData.loggedIn" class="default-text-color"><span class="_orange2">@{{ userData.balance }}</span>
                        <span v-if="userData.balance.charAt(userData.balance.length - 1) == 1">бонус</span>
                        <span v-else-if="userData.balance.charAt(userData.balance.length - 1) == 2 || userData.balance.charAt(userData.balance.length - 1) == 3 ||userData.balance.charAt(userData.balance.length - 1) == 4">бонуса</span>
                        <span v-else>бонусов</span>
                    </a>
                    <div href="#" v-if="!userData.loggedIn" @click="modalAction('personal-area-tell', false)"
                         class="burger-menu__enter popap-link default-text-color">Войти</div>
                </div>
                <a href="/" class="default-text-color">
                    <div>
                        <div class="sub_title"><span class="from">от</span> бабули</div>
                        <div class="comment">= вкусно + полезно</div>
                    </div>
                </a>
                <div>
                    <a href="/#map">
                        <img class="town_icon" src="/img/Ellipse1.svg">
                        <div class="town_name">Москва</div>
                    </a>
                </div>
                <div>
                    <a class="tell" href="tel:+74993227216">+7(499)-322-72-16</a>
                </div>
                <div>
                    <button href="#" @click="modalAction('ringMe', false)" class="ring_me popap-link">Перезвоните
                        мне
                    </button>
                </div>
                <div class="about-fixed">
                    <div class="about-fixed__btn">
                        <div class="_burger">
                            <span></span>
                            <span></span>
                        </div>
                        <div>
                            Меню
                        </div>
                        <div class="about-fixed__menu">
                            <div class="about-fixed__item"><a href="/#prepair" class="default-text-color" id="_road-link">О нас</a></div>
                            <div class="about-fixed__item"><a id="_road-link" class="default-text-color" href="/#block1_chooseDiet">Меню и
                                    тарифы</a></div>
                            <div class="about-fixed__item"><a id="_road-link" class="default-text-color" href="/#instagram">Отзывы</a></div>
                        </div>
                    </div>

                </div>
                <div class="about_us">
                    <div class="about1"><a href="/#prepair" id="_road-link" class="default-text-color">О нас</a></div>
                    <div class="about2"><a id="_road-link" href="/#block1_chooseDiet" class="default-text-color">Меню и тарифы</a></div>
                    <div class="about3"><a id="_road-link" href="/#instagram" class="default-text-color">Отзывы</a></div>
                </div>
                <div class="checkbox switchMode">
                    <input type="checkbox" name="ckeckbox_1">
                </div>
                <div class="forDesktop">
                    <a href="/personal-area" v-if="userData.name && userData.loggedIn" class="default-text-color">@{{ userData.name }}</a>
                    <a href="/personal-area" v-else-if="userData.phone && userData.loggedIn" class="default-text-color">@{{ userData.phone | VMask('+7 (###) ### ## ##') }}</a>
                    <br>
                    <a href="/personal-area" v-if="userData.balance && userData.loggedIn" class="default-text-color"><span class="_orange2">@{{ userData.balance }}</span>
                        <span v-if="userData.balance.charAt(userData.balance.length - 1) == 1">бонус</span>
                        <span v-else-if="userData.balance.charAt(userData.balance.length - 1) == 2 || userData.balance.charAt(userData.balance.length - 1) == 3 ||userData.balance.charAt(userData.balance.length - 1) == 4">бонуса</span>
                        <span v-else>бонусов</span>
                    </a>
                </div>
                <div href="#" v-if="!userData.loggedIn" @click="modalAction('personal-area-tell', false)"
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
