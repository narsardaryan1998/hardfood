<main class="content personal-area-cabinet-menus">
    @include('inc.bunner-personal-area')
    <div class="content__container">
        <div class="content__body">
            @include('inc.personal-area-cabinet.left-menu')
            <div class="content__data data-content">
                <div class="my-preferences">
                    <div class="my-preferences__types">
                        <div>
                            <div class="my-preferences__types__header">
                                <a href="javascript:void(0)" class="_active">Настроить меню</a>
                            </div>
                        </div>
                    </div>
                    <div class="my-preferences__customize_menu">
                        <div class="my-preferences__types__description">
                            Выберите нежелательные ингредиенты, и мы исключим блюда с ними из меню
                        </div>
                        <div class="excludes_content">
                            <div class="excludes_content__single">
                                <div class="excludes_content__single__header_and_count">
                                    <div class="excludes_content__single__header">
                                        Блюда
                                    </div>
                                    <div class="excludes_content__single__count" v-if="excludes.dish && excludes.dish.length">
                                        Исключено @{{ excludes.meatAndFish.length }}
                                        <a href="javascript:void(0)" @click="excludes.dish = []">
                                            <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.96175 0.375L5 3.33675L2.03825 0.375L0.875 1.53825L3.83675 4.5L0.875 7.46175L2.03825 8.625L5 5.66325L7.96175 8.625L9.125 7.46175L6.16325 4.5L9.125 1.53825L7.96175 0.375Z" fill="#A9A9A9"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="excludes_content__single__excludes">
                                    <div class="excludes_content__single__excludes__label_and_checkbox" v-for="exclude in excludesParams.dish">
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
                                        Исключено @{{ excludes.dish.length }}
                                        <a href="javascript:void(0)" @click="excludes.meatAndFish = []">
                                            <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.96175 0.375L5 3.33675L2.03825 0.375L0.875 1.53825L3.83675 4.5L0.875 7.46175L2.03825 8.625L5 5.66325L7.96175 8.625L9.125 7.46175L6.16325 4.5L9.125 1.53825L7.96175 0.375Z" fill="#A9A9A9"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="excludes_content__single__excludes">
                                    <div class="excludes_content__single__excludes__label_and_checkbox" v-for="exclude in excludesParams.meatAndFish">
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
                                    <div class="excludes_content__single__count" v-if="excludes.vegetables && excludes.vegetables.length">
                                        Исключено @{{ excludes.vegetables.length }}
                                        <a href="javascript:void(0)" @click="excludes.vegetables = []">
                                            <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.96175 0.375L5 3.33675L2.03825 0.375L0.875 1.53825L3.83675 4.5L0.875 7.46175L2.03825 8.625L5 5.66325L7.96175 8.625L9.125 7.46175L6.16325 4.5L9.125 1.53825L7.96175 0.375Z" fill="#A9A9A9"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="excludes_content__single__excludes">
                                    <div class="excludes_content__single__excludes__label_and_checkbox" v-for="exclude in excludesParams.vegetables">
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
                                            <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.96175 0.375L5 3.33675L2.03825 0.375L0.875 1.53825L3.83675 4.5L0.875 7.46175L2.03825 8.625L5 5.66325L7.96175 8.625L9.125 7.46175L6.16325 4.5L9.125 1.53825L7.96175 0.375Z" fill="#A9A9A9"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="excludes_content__single__excludes">
                                    <div class="excludes_content__single__excludes__label_and_checkbox" v-for="exclude in excludesParams.garnishes">
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
                                            <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.96175 0.375L5 3.33675L2.03825 0.375L0.875 1.53825L3.83675 4.5L0.875 7.46175L2.03825 8.625L5 5.66325L7.96175 8.625L9.125 7.46175L6.16325 4.5L9.125 1.53825L7.96175 0.375Z" fill="#A9A9A9"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="excludes_content__single__excludes">
                                    <div class="excludes_content__single__excludes__label_and_checkbox" v-for="exclude in excludesParams.allergy">
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
                    </div>
                    <div class="customize_menu__description" v-if="excludesInfo.count">
                        Настроено @{{ excludesInfo.count }} <span v-if="excludesInfo.count === 1">ингридиент</span> <span v-else-if="excludesInfo.count >= 2 && excludesInfo.count <= 4">ингридиента</span> <span v-else>ингридиентов</span> в @{{ excludesInfo.inDishes }} блюдах (+@{{ excludesInfo.price }}₽) <a href="javascript:void(0)" @click="excludes = {meatAndFish: [],dish: [],vegetables: [],garnishes: [],allergy: []}">Сбросить</a>
                    </div>
                    <div class="save_button">
                        <button class="close-popup" @click="modalAction('success-updated', false)">Применить настройки</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
