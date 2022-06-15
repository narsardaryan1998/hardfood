<div class="header">
    <div class="header__menu">
        <div class="header__wrapper">
            <div class="header__container">
                <div class="menu">
                    <div class="menu__burger burger-menu">
                        <div class="checkbox switchMode">
                            <input type="checkbox" name="ckeckbox_1">
                        </div>
                        <a href="/" id="_road-link" class="burger-menu__item default-text-color">Главная</a>
                        <a href="/personal-area" class="default-text-color" v-if="userData.name && userData.loggedIn">@{{ userData.name
                            }}</a>
                        <a href="/personal-area" class="default-text-color" v-else-if="userData.phone && userData.loggedIn">@{{ userData.phone | VMask('+7 (###) ### ## ##') }}</a>
                        <div href="#" v-else @click="modalAction('personal-area-tell', false)"
                           class="burger-menu__enter popap-link default-text-color">Войти</div>
                    </div>
                    <a href="/" class="default-text-color">
                        <div>
                            <div class="sub_title"><span class="from">hard</span> food</div>
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
                                <div class="about-fixed__item"><a href="/" id="_road-link">Главная</a></div>
                            </div>
                        </div>

                    </div>
                    <div class="about_us">
                        <div class="about1"><a href="/" id="_road-link">Главная</a></div>
                    </div>
                    <div class="checkbox switchMode">
                        <input type="checkbox" name="ckeckbox_1">
                    </div>
                    <a href="/personal-area" class="enter default-text-color" v-if="userData.name && userData.loggedIn">@{{ userData.name
                        }}</a>
                    <a href="/personal-area" class="enter default-text-color" v-else-if="userData.phone && userData.loggedIn">@{{ userData.phone | VMask('+7 (###) ### ## ##') }}</a>
                    <div v-else href="#" @click="modalAction('personal-area-tell', false)"
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
