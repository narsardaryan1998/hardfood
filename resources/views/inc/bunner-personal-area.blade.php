<div class="main_title_slider">
    <div class="main_title bunner-1 referrals_bunner">
        <div class="main_title_cotent">
            <div class="main_title_icon">
            </div>
            <div class="main_title_content_text">
                <span class="forDesktop"><span class="_orange">Приглашайте</span> друзей и получайте <span class="_orange">бонусы</span> себе и другу</span>
                <p class="forDesktop">
                    <a href="javascript:void(0)"
                       @click="cart[0].choosedRation = 's', cart[0].chosenWeek = 4, choosedRation = 's', checkValues(0, cart[0].choosedRation, cart[0].timeToEat, cart[0].chosenWeek);">
                        <span style="position: absolute;right: -108px;top: -31px;" class="_orangeBtn forDesktop">+1000₽  за друга</span>
                    </a>
                </p>
                <span class="forMobile"><span class="_orange">Приглашайте</span> друзей и получайте <span class="_orange">бонусы</span></span>
                <p class="forMobile">
                    себе и другу
                    <a href="javascript:void(0)"
                       @click="cart[0].choosedRation = 's', cart[0].chosenWeek = 4, choosedRation = 's', checkValues(0, cart[0].choosedRation, cart[0].timeToEat, cart[0].chosenWeek);">
                        <span class="_orangeBtn forDesktop">+1000₽  за друга</span>
                    </a>
                </p>
                <p class="forMobile">
                    <a href="javascript:void(0)"
                       @click="cart[0].choosedRation = 's', cart[0].chosenWeek = 4, choosedRation = 's', checkValues(0, cart[0].choosedRation, cart[0].timeToEat, cart[0].chosenWeek);">
                        <span class="_orangeBtn" style="display: inline-block">+1000₽  за друга</span>
                    </a>
                </p>
                <div class="refferals_bunner_emojies">
                    <img data-src="/img/emojies.png" alt="Emojies">
                </div>
                <div class="bunner-1__arrow _bunner-arrow">
                    <svg width="77" height="71" viewBox="0 0 77 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.19039 63.413C-0.133784 63.8602 -0.034103 64.4854 0.413032 64.8096L7.69953 70.0923C8.14666 70.4165 8.77193 70.3168 9.0961 69.8697C9.42028 69.4225 9.3206 68.7973 8.87346 68.4731L2.39658 63.7774L7.09232 57.3005C7.41649 56.8533 7.31681 56.2281 6.86968 55.9039C6.42254 55.5797 5.79727 55.6794 5.4731 56.1265L0.19039 63.413ZM74.0054 1.10419C75.3655 14.0862 73.5952 24.0414 69.7157 31.7701C65.8377 39.4955 59.8093 45.0822 52.5039 49.2568C37.8252 57.6446 18.171 60.25 0.842568 63.0125L1.15743 64.9875C18.329 62.25 38.4248 59.6054 53.4961 50.9932C61.0657 46.6678 67.4123 40.817 71.5031 32.6674C75.5923 24.5211 77.3845 14.1638 75.9946 0.895808L74.0054 1.10419Z"
                            fill="#EB6300"/>
                    </svg>
                </div>
                <div class="bunner-1__arrow _bunner-arrow-mobile">
                    <svg width="58" height="55" viewBox="0 0 58 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.191125 47.412C-0.133608 47.8587 -0.0347098 48.4841 0.41202 48.8089L7.6919 54.1007C8.13863 54.4254 8.76402 54.3265 9.08875 53.8798C9.41348 53.4331 9.31459 52.8077 8.86786 52.4829L2.39686 47.7791L7.1007 41.3081C7.42543 40.8614 7.32653 40.236 6.8798 39.9113C6.43308 39.5865 5.80768 39.6854 5.48295 40.1321L0.191125 47.412ZM55.6599 1.10503C56.6787 10.7524 55.3504 18.1268 52.4599 23.8387C49.5709 29.5477 45.0774 33.6828 39.6153 36.7789C28.6236 43.0093 13.8954 44.9483 0.843804 47.0123L1.1562 48.9877C14.0515 46.9485 29.2188 44.9709 40.6016 38.5188C46.3267 35.2736 51.1403 30.8759 54.2445 24.7417C57.3472 18.6103 58.6982 10.8309 57.6488 0.894972L55.6599 1.10503Z"
                            fill="#EB6300"/>
                    </svg>
                </div>
            </div>
            <div>
                <a href="/personal-area/referrals" v-if="userData.loggedIn">
                    <button class="btn1">Подробнее</button>
                </a>
                <a href="javascript:void(0)" v-else>
                    <button class="btn1" @click="userData.loginForReferrals = true, modalAction('personal-area-tell', false)">Подробнее</button>
                </a>
            </div>
        </div>
    </div>
{{--    <div class="main_title bunner-2 _bunner-3">--}}
{{--        <div class="main_title_cotent">--}}
{{--            <div class="main_title_icon">--}}
{{--            </div>--}}
{{--            <div class="main_title_content_text">--}}
{{--                <div class="bunner-2__bonus _bonus">--}}
{{--                    <img data-src="/img/bunner/bunner3/01.png" alt="no image">--}}
{{--                    <img data-src="/img/bunner/bunner3/02.png" alt="no image">--}}
{{--                    <img data-src="/img/bunner/bunner3/03.png" alt="no image">--}}
{{--                    <img data-src="/img/bunner/bunner3/04.png" alt="no image">--}}
{{--                    <img data-src="/img/bunner/bunner3/05.png" alt="no image">--}}
{{--                    <img data-src="/img/bunner/bunner3/06.png" alt="no image">--}}
{{--                    <img data-src="/img/bunner/bunner3/07.png" alt="no image">--}}
{{--                </div>--}}
{{--                <a href="#orderingSection"--}}
{{--                   @click="cart[0].choosedRation = 's', choosedRation = 's', cart[0].chosenWeek = 4, cart[0].timeToEat = 5, checkValues(0, cart[0].choosedRation, cart[0].timeToEat, cart[0].chosenWeek);">--}}
{{--                    <span class="_orange">Неделя в подарок</span>--}}
{{--                </a>--}}
{{--                <br>--}}
{{--                <span class="_whiteSpace">при заказе рациона на--}}
{{--                                    <a href="#orderingSection"--}}
{{--                                       @click="cart[0].choosedRation = 's', choosedRation = 's', cart[0].chosenWeek = 4, cart[0].timeToEat = 5, checkValues(0, cart[0].choosedRation, cart[0].timeToEat, cart[0].chosenWeek);">--}}
{{--                    4 <span class="bunner-2__btn" style="width: auto">недели</span>--}}
{{--                                    </a>--}}
{{--                </span>--}}
{{--                <div class="bunner-3__arrow _bunner-arrow">--}}
{{--                    <svg width="51" height="71" viewBox="0 0 51 71" fill="none" xmlns="http://www.w3.org/2000/svg">--}}
{{--                        <path--}}
{{--                            d="M0.19039 63.413C-0.133784 63.8602 -0.034103 64.4854 0.413032 64.8096L7.69953 70.0923C8.14666 70.4165 8.77193 70.3168 9.0961 69.8697C9.42028 69.4225 9.3206 68.7973 8.87346 68.4731L2.39658 63.7774L7.09232 57.3005C7.41649 56.8533 7.31681 56.2281 6.86968 55.9039C6.42254 55.5797 5.79727 55.6794 5.4731 56.1265L0.19039 63.413ZM46.0406 1.28217C50.9615 18.0132 48.1139 32.0453 39.8991 42.5723C31.6597 53.131 17.9203 60.2899 0.842568 63.0125L1.15743 64.9875C18.5797 62.2101 32.8403 54.869 41.4759 43.8027C50.1361 32.7047 53.0385 17.9868 47.9594 0.717834L46.0406 1.28217Z"--}}
{{--                            fill="#EB6300"/>--}}
{{--                    </svg>--}}
{{--                </div>--}}
{{--                <div class="bunner-3__arrow _bunner-arrow-mobile">--}}
{{--                    <svg width="63" height="67" viewBox="0 0 63 67" fill="none" xmlns="http://www.w3.org/2000/svg">--}}
{{--                        <path--}}
{{--                            d="M0.191125 59.412C-0.133608 59.8587 -0.0347098 60.4841 0.41202 60.8089L7.6919 66.1007C8.13863 66.4254 8.76402 66.3265 9.08875 65.8798C9.41348 65.4331 9.31459 64.8077 8.86786 64.4829L2.39686 59.7791L7.1007 53.3081C7.42543 52.8614 7.32653 52.236 6.8798 51.9112C6.43307 51.5865 5.80768 51.6854 5.48295 52.1321L0.191125 59.412ZM51.2664 1.67962C59.006 10.0334 61.1867 17.4075 59.9863 23.801C58.7757 30.2485 54.0784 35.9818 47.4463 40.9086C34.1812 50.7626 13.7324 56.9741 0.843804 59.0123L1.1562 60.9877C14.2145 58.9227 35.0157 52.6342 48.6389 42.5141C55.4509 37.4537 60.6073 31.3314 61.9519 24.17C63.3067 16.9546 60.744 8.96656 52.7336 0.320377L51.2664 1.67962Z"--}}
{{--                            fill="#EB6300"/>--}}
{{--                    </svg>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--            <div class="bunner-2__btn1">--}}
{{--                <a href="#block1_chooseDiet">--}}
{{--                    <button class="btn1"> Смотреть меню</button>--}}
{{--                </a>--}}
{{--                <span> <span class="_orange2">До 1180 ₽</span> вернём бонусами</span>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </div>--}}
</div>
