<main class="content personal-area-cabinet-menus">
    @include('inc.bunner-personal-area')
    <div class="content__container">
        <div class="content__body">
            @include('inc.personal-area-cabinet.left-menu')
            <div class="content__data data-content">
                <div class="bonuses_content">
                    <div class="bonuses_content__header">
                        На счету <span>@{{ userData.balance }} бонусов</span>
                    </div>
                    <div class="bonuses_content__description">
                        Накапливай от 3% бонусами со всех заказов, кроме некоторых (обычно тех, что с промокодами), и
                        трать их на оплату до 50% от суммы заказа. Не забудь, что они действительны в течение
                        90 дней, потом сгорают. <span class="_orange2">1 бонус = 1 ₽.</span>
                    </div>
                    <div class="bonuses_content__new_order">
                        <a href="/#block1_chooseDiet" target="_blank">
                            <button>Сделать новый заказ</button>
                        </a>
                    </div>
                    <div class="bonuses_content__subheader" v-if="Object.keys(userBonuses).length">
                        Детализация
                    </div>
                    <div class="bonuses_content__bonuses">
                        <div class="bonuses_content__bonuses__single" v-for="(bonuses, date) in userBonuses">
                            <div class="bonuses_content__bonuses__single__date">
                                @{{ moment(date).format("D MMMM Y") }}
                            </div>
                            <div class="bonuses_content__bonuses__single__date_active_until">
                                Активен до: @{{ moment(date).add(90, 'days').format("D MMMM Y") }}
                            </div>
                            <div class="bonuses_content__bonuses__single__bonus_single"
                                 v-for="(bonus, date) in bonuses">
                                <div class="bonuses_content__bonuses__single__bonus_single__icon">
                                    <button>
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.2997 9.5V18H2.69971V9.5" stroke="white" stroke-width="1.5"
                                                  stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M18 5.25H1V9.5H18V5.25Z" stroke="white" stroke-width="1.5"
                                                  stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.5 18V5.25" stroke="white" stroke-width="1.5"
                                                  stroke-linecap="round" stroke-linejoin="round"/>
                                            <path
                                                d="M9.50029 5.25H5.67529C5.11171 5.25 4.57121 5.02612 4.17269 4.6276C3.77418 4.22909 3.55029 3.68859 3.55029 3.125C3.55029 2.56141 3.77418 2.02091 4.17269 1.6224C4.57121 1.22388 5.11171 1 5.67529 1C8.65029 1 9.50029 5.25 9.50029 5.25Z"
                                                stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                            <path
                                                d="M9.5 5.25H13.325C13.8886 5.25 14.4291 5.02612 14.8276 4.6276C15.2261 4.22909 15.45 3.68859 15.45 3.125C15.45 2.56141 15.2261 2.02091 14.8276 1.6224C14.4291 1.22388 13.8886 1 13.325 1C10.35 1 9.5 5.25 9.5 5.25Z"
                                                stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                                <div class="bonuses_content__bonuses__single__bonus_single__key">
                                    @{{ bonus.key }}
                                </div>
                                <div class="bonuses_content__bonuses__single__bonus_single__value">
                                    <span class="increment" v-if="bonus.key === 'Начисление бонусов'">+@{{ bonus.value }}</span>
                                    <span class="decrease" v-else>-@{{ bonus.value }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
