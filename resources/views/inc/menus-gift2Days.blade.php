<div id="menu_section" class="content_block1">
    <div class="block1_title">Выбери рацион</div>
    <div class="block1_title_comment">Пройди все шаги и получи персональный рацион</div>
    <div id="block1_chooseDiet" class="block1_chooseDiet">
        <button class="btn4">Хит</button>
        <div class="diet_block_container">
            <div class="diet_block" v-bind:class="{diet_block_chosen: choosedRation == 's'}"
                 @click="cart[0].choosedRation = 's', choosedRation = 's', dishesCount(0), checkValues(0, cart[0].choosedRation, cart[0].timeToEat, cart[0].chosenWeek);">
                <span class="diet_kind">S</span>
                <button class="btn3">4 блюда</button>
                <div class="diet_kind_kkal">1200 ккал</div>
                <button class="choose">Выбрать</button>
                <button class="choose choosen"><span class="pseudoElement_of_chosen">Выбран</span></button>
                <svg width="158" height="165" viewBox="0 0 158 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="1" fill-rule="evenodd" clip-rule="evenodd"
                          d="M237.768 114.139C242.622 130.999 243.659 147.495 244.725 165.002C246.1 187.574 254.775 210.862 244.895 231.176C233.453 254.7 213.435 287.219 187.78 282.082C158.314 276.183 163.627 224.813 137.629 209.699C115.489 196.827 82.944 225.18 62.7639 209.401C43.3594 194.23 37.136 161.451 47.2063 139C57.3326 116.425 94.5376 122.606 110.259 103.517C128.196 81.7377 114.727 39.057 139.937 26.4059C163.378 14.6429 192.722 34.7734 212.285 52.3178C229.292 67.5689 231.448 92.1845 237.768 114.139Z"
                          fill="#EB6300"/>
                </svg>
            </div>
            <div class="diet_kind_comment">
                Бабуль, <br> я худею
            </div>
        </div>

        <div class="diet_block_container">
            <div class="diet_block" v-bind:class="{diet_block_chosen: choosedRation == 'm'}"
                 @click="cart[0].choosedRation = 'm', choosedRation = 'm', dishesCount(0), checkValues(0, cart[0].choosedRation, cart[0].timeToEat, cart[0].chosenWeek);">
                <span class="diet_kind">M</span>
                <button class="btn3">5 блюд</button>
                <div class="diet_kind_kkal">1600 ккал</div>
                <button class="choose">Выбрать</button>
                <button class="choose choosen"><span class="pseudoElement_of_chosen">Выбран</span></button>
                <svg width="97" height="125" viewBox="0 0 97 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M119.794 -52.4804C139.703 -49.0371 161.769 -68.4249 178.715 -57.4319C195.484 -46.5532 193.816 -21.7082 197.486 -2.07916C201.019 16.8178 209.851 37.8869 199.576 54.1395C189.384 70.2631 164.258 65.7328 148.147 75.9672C131.043 86.8331 123.857 116.112 103.607 115.105C83.6033 114.11 79.6423 84.4935 64.167 71.7922C47.6936 58.2717 19.6297 58.6041 11.0278 39.1204C2.32532 19.409 14.5058 -2.83323 22.3653 -22.8903C30.5343 -43.7372 35.6571 -71.9506 57.1043 -78.4644C79.2896 -85.2023 96.9426 -56.4325 119.794 -52.4804Z"
                          fill="#EB6300"/>
                </svg>
            </div>
            <div class="diet_kind_comment">
                Бабуль, мне как обычно
            </div>
        </div>

        <div class="diet_block_container">
            <div class="diet_block" v-bind:class="{diet_block_chosen: choosedRation == 'l'}"
                 @click="cart[0].choosedRation = 'l', choosedRation = 'l', dishesCount(0), checkValues(0, cart[0].choosedRation, cart[0].timeToEat, cart[0].chosenWeek);">
                <span class="diet_kind">L</span>
                <button class="btn3">6 блюд</button>
                <div class="diet_kind_kkal">2000 ккал</div>
                <button class="choose choosen"><span class="pseudoElement_of_chosen">Выбран</span></button>
                <button class="choose">Выбрать</button>
                <svg width="124" height="166" viewBox="0 0 124 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="1" fill-rule="evenodd" clip-rule="evenodd"
                          d="M220.235 112.717C226.992 135.759 208.306 158.507 194.344 178.048C179.536 198.775 163.772 229.364 138.366 227.305C110.741 225.066 107.6 179.751 82.0788 168.949C58.0583 158.782 18.8967 193.706 5.76873 171.183C-7.66369 148.138 35.9497 128.449 43.578 102.895C48.4447 86.5923 33.9143 68.6423 40.9971 53.1714C48.8226 36.0784 66.6347 27.01 82.7555 17.3206C105.334 3.74942 131.128 -28.7314 153.115 -14.2172C177.324 1.76493 149.129 44.4512 162.684 70.0849C174.119 91.7107 213.352 89.2453 220.235 112.717Z"
                          fill="#EB6300"/>
                </svg>
            </div>
            <div class="diet_kind_comment">
                Бабуль, мне побольше
            </div>
        </div>
    </div>
    <div class="content_chenge">
        <div class="chenge_text">
            <button class="btn2">Удобно</button>
        </div>
        <div>
            <div class="change_text_title">
                Не нравится конкретный ингредиент?
            </div>
            <div class="change_text_title_comment">
                Выберите нежелательные ингредиенты,
                и мы исключим блюда с ними из меню
            </div>
            <div class="change_plaates">
                <div class="chenge_plate1"><img src="/img/plate222.png" alt=""></div>
                <div class="chenge_plate2"><img src="/img/plate2.jpg" alt=""></div>
                <div class="round"></div>
                <div class="for_heals"><img src="/img/1x1.jpg" data-src="/img/checked_white.svg"></div>
                <div class="for_death"><img src="/img/1x1.jpg" data-src="/img/X.svg"></div>
            </div>
        </div>
    </div>
    <div class="customize_menu">
        <div class="customize_menu__button">
            <button @click="modalAction('customize-menu', false)">
                <div>
                    <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.13901 9.58996V1.14285C9.13901 0.913112 9.01414 0.700892 8.81147 0.586097C8.6088 0.471301 8.35905 0.471301 8.15639 0.586097C7.95372 0.700892 7.82885 0.913119 7.82885 1.14285V9.58996C7.08355 9.7887 6.46545 10.3001 6.13997 10.9875C5.81433 11.6748 5.81433 12.468 6.13997 13.1554C6.46546 13.8427 7.08355 14.3541 7.82885 14.5529V17.8571C7.82885 18.0869 7.95372 18.2991 8.15639 18.4139C8.35906 18.5287 8.60881 18.5287 8.81147 18.4139C9.01413 18.2991 9.13901 18.0868 9.13901 17.8571V14.5529C9.88431 14.3541 10.5024 13.8427 10.8279 13.1554C11.1535 12.468 11.1535 11.6748 10.8279 10.9875C10.5024 10.3001 9.88431 9.7887 9.13901 9.58996ZM8.48393 13.3571C8.1365 13.3571 7.80324 13.2216 7.55746 12.9806C7.3118 12.7394 7.17377 12.4123 7.17377 12.0714C7.17377 11.7305 7.3118 11.4034 7.55746 11.1622C7.80326 10.9211 8.13651 10.7857 8.48393 10.7857C8.83135 10.7857 9.16462 10.9211 9.4104 11.1622C9.65606 11.4034 9.7941 11.7305 9.7941 12.0714C9.7941 12.4123 9.65606 12.7394 9.4104 12.9806C9.1646 13.2216 8.83135 13.3571 8.48393 13.3571ZM17 5.64283C16.9981 5.07418 16.8042 4.52213 16.4486 4.07316C16.093 3.6243 15.5958 3.30361 15.0348 3.16141V1.14288C15.0348 0.913148 14.9099 0.700929 14.7072 0.586133C14.5045 0.471338 14.2548 0.471338 14.0521 0.586133C13.8495 0.700929 13.7246 0.913156 13.7246 1.14288V3.16141C12.9793 3.36015 12.3612 3.87156 12.0357 4.5589C11.7101 5.24625 11.7101 6.03949 12.0357 6.72683C12.3612 7.41417 12.9793 7.92559 13.7246 8.12433V17.8572C13.7246 18.0869 13.8495 18.2991 14.0521 18.4139C14.2548 18.5287 14.5045 18.5287 14.7072 18.4139C14.9099 18.2991 15.0348 18.0869 15.0348 17.8572V8.12433C15.5958 7.98212 16.093 7.6614 16.4486 7.21257C16.8042 6.76357 16.9981 6.21156 17 5.64291V5.64283ZM14.3797 6.92854C14.0322 6.92854 13.699 6.79308 13.4532 6.55201C13.2075 6.3108 13.0695 5.98377 13.0695 5.64283C13.0695 5.3019 13.2075 4.97485 13.4532 4.73365C13.699 4.49258 14.0323 4.35712 14.3797 4.35712C14.7271 4.35712 15.0604 4.49258 15.3061 4.73365C15.5518 4.97486 15.6898 5.3019 15.6898 5.64283C15.6898 5.98377 15.5518 6.31081 15.3061 6.55201C15.0603 6.79308 14.7271 6.92854 14.3797 6.92854ZM3.24327 3.16141V1.14288C3.24327 0.913148 3.1184 0.700929 2.91573 0.586133C2.71306 0.471338 2.46331 0.471338 2.26065 0.586133C2.05798 0.700929 1.93311 0.913156 1.93311 1.14288V3.16141C1.18781 3.36015 0.569712 3.87156 0.24423 4.5589C-0.0814099 5.24625 -0.0814099 6.03949 0.24423 6.72683C0.569723 7.41417 1.18781 7.92559 1.93311 8.12433V17.8572C1.93311 18.0869 2.05798 18.2991 2.26065 18.4139C2.46332 18.5287 2.71307 18.5287 2.91573 18.4139C3.11839 18.2991 3.24327 18.0869 3.24327 17.8572V8.12433C3.98857 7.92559 4.60667 7.41417 4.93215 6.72683C5.25779 6.03949 5.25779 5.24625 4.93215 4.5589C4.60666 3.87156 3.98857 3.36015 3.24327 3.16141ZM2.58819 6.92854C2.24076 6.92854 1.9075 6.79308 1.66172 6.55201C1.41606 6.3108 1.27802 5.98377 1.27802 5.64283C1.27802 5.3019 1.41606 4.97485 1.66172 4.73365C1.90752 4.49258 2.24077 4.35712 2.58819 4.35712C2.93561 4.35712 3.26888 4.49258 3.51466 4.73365C3.76032 4.97486 3.89835 5.3019 3.89835 5.64283C3.89835 5.98377 3.76032 6.31081 3.51466 6.55201C3.26886 6.79308 2.93561 6.92854 2.58819 6.92854Z" fill="#3AAE11"/>
                </svg>
                </div>
                <div>Исключить из меню</div>
            </button>
        </div>
        <div class="customize_menu__description" v-if="excludesInfo.count">
            Настроено @{{ excludesInfo.count }} <span v-if="excludesInfo.count === 1">ингридиент</span> <span v-else-if="excludesInfo.count >= 2 && excludesInfo.count <= 4">ингридиента</span> <span v-else>ингридиентов</span> в @{{ excludesInfo.inDishes }} блюдах (+@{{ excludesInfo.price }}₽) <a href="javascript:void(0)" @click="excludes = {meatAndFish: [],dish: [],vegetables: [],garnishes: [],allergy: []}">Сбросить</a>
        </div>
    </div>

    <div class="menu_sample menuL" id="menuL">
        <div class="menu_title">
            <div class="menu_title_for-main"><span>Примерное</span> меню</div>
            <div class="menu_title_personal-area">Актуальное меню</div>
            <div class="menu-sample__text">Это меню составлено максимально близко к тому, что приезжает ежедневно. Оно примерное, потому что блюда не повторяются в течение месяца и постоянно обновляются.</div>
        </div>
        <div class="sample_menu_date">
            <div v-for="currentWeekDate in currentWeekDays" @click="currentDay = currentWeekDate.currentWeekDayNumber" :class="{active_date:currentDay == currentWeekDate.currentWeekDayNumber}" class="date_conteiner"><span
                    class="name_date_week_fl">@{{ daysArray[currentWeekDate.currentWeekDayNumber] }}</span><span class="name_date_week_nfl">@{{ daysArrayMobile[currentWeekDate.currentWeekDayNumber] }}</span>
                <span class="date">@{{ currentWeekDate.currentWeekDateNumber }}</span>
            </div>
        </div>
        <div class="sample_menu_menu">
        </div>
    </div>
</div>
