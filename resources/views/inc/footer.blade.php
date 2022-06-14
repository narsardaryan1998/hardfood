<footer class="footer">
    <div class="menu">
        <a href="/" class="default-text-color">
            <div>
                <div class="sub_title"><span class="from">от</span> бабули</div>
                <div class="comment">= вкусно + полезно</div>
            </div>
        </a>
        <div>
            <a href="/#map">
                <img class="town_icon" src="/img/1x1.jpg" data-src="/img/Ellipse1.svg">
                <div class="town_name">Москва</div>
            </a>
        </div>
        <div class="tell">+7(499)-322-72-16</div>
        <div class="about_us">
            <div class="about1"><a href="/#prepair" class="default-text-color" id="_road-link">О нас</a></div>
            <div class="about2"><a id="_road-link" class="default-text-color" href="/#block1_chooseDiet">Меню и
                    тарифы</a></div>
            <div class="about3"><a id="_road-link" class="default-text-color" href="/#instagram">Отзывы</a></div>
        </div>
        <div class="checkbox switchMode">
            <input type="checkbox" name="ckeckbox_1">
        </div>
        <a href="/personal-area" class="enter default-text-color" v-if="userData.name && userData.loggedIn">@{{ userData.name }}</a>
        <a href="/personal-area" class="enter default-text-color" v-else-if="userData.phone && userData.loggedIn">@{{ userData.phone }}</a>
        <div href="#" @click="modalAction('personal-area-tell', false)" v-else class="enter popap-link default-text-color">Войти
        </div>
    </div>
    <div class="sub_menu">
        <div id="year" class="forDesktop">
            <?php echo '©' . ' ' . date('Y');?>
        </div>
        <div id="year" class="forMobile">
            <div style="display: flex; justify-content: space-between">
                <div>
                    <?php echo '©' . ' ' . date('Y');?>
                </div>
                <div class="bot_bonuses">
                    Получи 150 бонусов за подписку!
                </div>
            </div>
        </div>
        <div class="policy">
            <a href="/rules" class="default-text-color">Политика конфиденциальности</a>
        </div>
        <div class="social">
            <a target="blank" href="https://www.instagram.com/otbabuli">
                <div class="instagram_link"></div>
            </a>
            <a target="blank" href="https://www.facebook.com/otbabuli">
                <div class="facebook"></div>
            </a>
        </div>
        <div class="blog">
            <a href="/blog" class="default-text-color">Блог от бабули</a>
        </div>
        <div style="margin: -4px 0 0 0">
            <div class="visa"></div>
            <img src="/img/1x1.jpg" data-src="/img/Mastercard.svg">
        </div>
    </div>
    <div class="bots">
        <div class="bot_bonuses forDesktop">
            Получи 150 бонусов за подписку!
        </div>
        <div class="socials">
            <div class="arrow_left">
            </div>
            <div
                id="bh-widget-button-root"
                data-bh-widget-id="2"
                data-bh-customer-id="244491">
            </div>
            <div class="arrow_right">
            </div>
        </div>
    </div>
</footer>
