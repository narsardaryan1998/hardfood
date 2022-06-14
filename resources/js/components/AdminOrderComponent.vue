<template>
    <div class="newOrder_wrapper" id="order">
        <div class="row new_change_racion top_change_racion">
            <div class="col-md-12 d-flex">
                <div class="col-12 col-md-3 addcart_items__item">
                    <input v-model="gender" type="radio" checked id="sm" name="gender1" value="s"/>
                    <label for="sm" class="s">
                        <p>
                            <b>
                                <span>S</span> / Худею
                            </b>
                        </p>
                    </label>
                </div>
                <div class="col-12 col-md-3 addcart_items__item">
                    <input v-model="gender" type="radio" id="m" name="gender1" value="m"/>
                    <label for="m" class="m">
                        <p>
                            <b>
                                <span>M</span> / Не готовлю
                            </b>
                        </p>
                    </label>
                </div>
                <div class="col-12 col-md-3 addcart_items__item">
                    <input v-model="gender" type="radio" id="l" name="gender1" value="l"/>
                    <label for="l" class="l">
                        <p>
                            <b>
                                <span>L</span> / Занимаюсь
                            </b>
                        </p>
                    </label>
                </div>
                <div class="col-12 col-md-3 racion">
                    <b>
                        кКал
                        <span>{{ totalInfoPreDay.totalInfoPerCalories }}</span>
                    </b>
                    <p>Б: {{ totalInfoPreDay.totalInfoPerProteins }} / Ж: {{ totalInfoPreDay.totalInfoPerFats }} / У:
                        {{ totalInfoPreDay.totalInfoPerCarbs }}</p>
                </div>
            </div>
        </div>
        <div class="row new_change_racion">
            <div class="col-md-12 d-flex">
                <div class="col-12 col-md-3 addcart_items__item">
                    <input v-model="gender" type="radio" checked id="s" name="gender" value="s"/>
                    <label for="s" class="s">
                        <p>
                            <b>
                                <span>S</span> / Худею
                            </b> Для тех, кто хочет
                            <br/>похудеть
                            <br/>
                            <strong>≈ 1200 кК</strong>
                        </p>
                    </label>
                </div>
                <div class="col-12 col-md-3 addcart_items__item">
                    <input v-model="gender" type="radio" id="m" name="gender" value="m"/>
                    <label for="m" class="m">
                        <p>
                            <b>
                                <span>M</span> / Не готовлю
                            </b> Для тех, кто не хочет
                            <br/>тратить время
                            <br/>
                            <strong>≈ 1600 кК</strong>
                        </p>
                    </label>
                </div>
                <div class="col-12 col-md-3 addcart_items__item">
                    <input v-model="gender" type="radio" id="l" name="gender" value="l"/>
                    <label for="l" class="l">
                        <p>
                            <b>
                                <span>L</span> / Занимаюсь
                            </b> Для тех, кто занимается
                            <br/>спортом
                            <br/>
                            <strong>≈ 2000 кК</strong>
                        </p>
                    </label>
                </div>
                <div class="col-12 col-md-3 racion">
                    <!-- <div class="racion_day">{{dayName(productsDaySelect)}}</div> -->
                    <div class="racion_day" v-if="productsDaySelect == 1">В понедельник</div>
                    <div class="racion_day" v-if="productsDaySelect == 2">Во вторник</div>
                    <div class="racion_day" v-if="productsDaySelect == 3">В среду</div>
                    <div class="racion_day" v-if="productsDaySelect == 4">В четверг</div>
                    <div class="racion_day" v-if="productsDaySelect == 5">В пятницу</div>
                    <div class="racion_day" v-if="productsDaySelect == 6">В субботу</div>
                    <div class="racion_day" v-if="productsDaySelect == 7">В воскресенье</div>
                    <div v-if="gender == 's'" class>4 приема</div>
                    <div v-if="gender == 'm'" class>5 приемов</div>
                    <div v-if="gender == 'l'" class>6 приемов</div>
                    <b>
                        кКал
                        <span>{{ totalInfoPreDay.totalInfoPerCalories }}</span>
                    </b>
                    <p>Б: {{ totalInfoPreDay.totalInfoPerProteins }} / Ж: {{ totalInfoPreDay.totalInfoPerFats }} / У:
                        {{ totalInfoPreDay.totalInfoPerCarbs }}</p>
                </div>
            </div>
        </div>

        <div class="row mt-6 newOrder">
            <div class="col-12">
                <div class="changeWeeks">
                    <p>Рацион на неделю:</p>
                    <select v-model="selectedDate" id="inputGroupSelect02">
                        <option value="0" selected>Выберете неделю...</option>
                        <option v-for="day in weekDay" :value="day.date">{{ day.showDate }}</option>
                    </select>
                </div>
            </div>

            <div class="col-md-9 changeWeeks_wrapper">
                <nav class="noMobile">
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a
                            class="nav-item racion tabs_navs"
                            id="nav-pn-tab"
                            data-toggle="tab"
                            href="#nav-pn"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected="true"
                            @click="productsPerDay(1)"
                        >Понедельник</a>
                        <a
                            class="nav-item racion tabs_navs"
                            id="nav-vt-tab"
                            data-toggle="tab"
                            href="#nav-vt"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                            @click="productsPerDay(2)"
                        >Вторник</a>
                        <a
                            class="nav-item racion tabs_navs"
                            id="nav-sr-tab"
                            data-toggle="tab"
                            href="#nav-sr"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                            @click="productsPerDay(3)"
                        >Среда</a>
                        <a
                            class="nav-item racion tabs_navs"
                            id="nav-che-tab"
                            data-toggle="tab"
                            href="#nav-che"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                            @click="productsPerDay(4)"
                        >Четверг</a>
                        <a
                            class="nav-item racion tabs_navs"
                            id="nav-pt-tab"
                            data-toggle="tab"
                            href="#nav-pt"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                            @click="productsPerDay(5)"
                        >Пятница</a>
                        <a
                            class="nav-item racion tabs_navs"
                            id="nav-sub-tab"
                            data-toggle="tab"
                            href="#nav-sub"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                            @click="productsPerDay(6)"
                        >Суббота</a>
                        <a
                            class="nav-item racion tabs_navs"
                            id="nav-vs-tab"
                            data-toggle="tab"
                            href="#nav-vs"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                            @click="productsPerDay(7)"
                        >Воскресенье</a>
                    </div>
                </nav>
                <!-- Мобильная новигация рациона -->
                <nav class="yesMobile">
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a
                            class="nav-item active racion tabs_navs"
                            id="nav-pn-tab"
                            data-toggle="tab"
                            href="#nav-pn"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected="true"
                            @click="productsPerDay(1)"
                        >Пн</a>
                        <a
                            class="nav-item racion tabs_navs"
                            id="nav-vt-tab"
                            data-toggle="tab"
                            href="#nav-vt"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                            @click="productsPerDay(2)"
                        >Вт</a>
                        <a
                            class="nav-item racion tabs_navs"
                            id="nav-sr-tab"
                            data-toggle="tab"
                            href="#nav-sr"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                            @click="productsPerDay(3)"
                        >Ср</a>
                        <a
                            class="nav-item racion tabs_navs"
                            id="nav-che-tab"
                            data-toggle="tab"
                            href="#nav-che"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                            @click="productsPerDay(4)"
                        >Чт</a>
                        <a
                            class="nav-item racion tabs_navs"
                            id="nav-pt-tab"
                            data-toggle="tab"
                            href="#nav-pt"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                            @click="productsPerDay(5)"
                        >Пт</a>
                        <a
                            class="nav-item racion tabs_navs"
                            id="nav-sub-tab"
                            data-toggle="tab"
                            href="#nav-sub"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                            @click="productsPerDay(6)"
                        >Сб</a>
                        <a
                            class="nav-item racion tabs_navs"
                            id="nav-vs-tab"
                            data-toggle="tab"
                            href="#nav-vs"
                            role="tab"
                            aria-controls="nav-profile"
                            aria-selected="false"
                            @click="productsPerDay(7)"
                        >Вс</a>
                    </div>
                </nav>
                <!-- Мобильная новигация рациона -->
                <transition name="fade">
                    <div :key="weekCount" class="tab-content" id="nav-tabContent">
                        <div
                            class="tab-pane show active"
                            id="nav-pn"
                            role="tabpanel"
                            aria-labelledby="nav-pn-tab"
                        >
                            <div class="row food">
                                <div
                                    class="col-12 col-md-4 food_item"
                                    v-for="(prod, index) in productsPerDayArray"
                                    :key="prod.dishID"
                                >
                                    <b>
                                        {{ prod.priority }}-й прием
                                        <div
                                            class="main_info"
                                        >/ {{ prod.kcal }} кКал
                                        </div>
                                    </b>
                                    <img :src="prod.url" onerror="this.src='/images/food_bg.jpg';" alt/>
                                    <span>{{ prod.name }}</span>
                                    <div class="food_item__info">
                                        <p>Б / {{ prod.proteins }}</p>
                                        <p>Ж / {{ prod.fats }}</p>
                                        <p>У / {{ prod.carbs }}</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 racion racion_mobile">
                                    <!-- <div class="racion_day">{{dayName(productsDaySelect)}}</div> -->
                                    <div class="racion_day" v-if="productsDaySelect == 1">В понедельник</div>
                                    <div class="racion_day" v-if="productsDaySelect == 2">Во вторник</div>
                                    <div class="racion_day" v-if="productsDaySelect == 3">В среду</div>
                                    <div class="racion_day" v-if="productsDaySelect == 4">В четверг</div>
                                    <div class="racion_day" v-if="productsDaySelect == 5">В пятницу</div>
                                    <div class="racion_day" v-if="productsDaySelect == 6">В субботу</div>
                                    <div class="racion_day" v-if="productsDaySelect == 7">В воскресенье</div>
                                    <div v-if="gender == 's'" class>4 приема</div>
                                    <div v-if="gender == 'm'" class>5 приемов</div>
                                    <div v-if="gender == 'l'" class>6 приемов</div>
                                    <b>
                                        кКал
                                        <span>{{ totalInfoPreDay.totalInfoPerCalories }}</span>
                                    </b>
                                    <p>Б: {{ totalInfoPreDay.totalInfoPerProteins }} / Ж:
                                        {{ totalInfoPreDay.totalInfoPerFats }} / У:
                                        {{ totalInfoPreDay.totalInfoPerCarbs }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="nav-vt" role="tabpanel" aria-labelledby="nav-vt-tab">
                            <div class="row food">
                                <div
                                    class="col-12 col-md-4 food_item"
                                    v-for="(prod, index) in productsPerDayArray"
                                    :key="prod.dishID"
                                >
                                    <b>
                                        {{ prod.priority }}-й прием
                                        <div
                                            class="main_info"
                                        >/ {{ prod.kcal }} кКал
                                        </div>
                                    </b>
                                    <img :src="prod.url" onerror="this.src='/images/food_bg.jpg';" alt/>
                                    <span>{{ prod.name }}</span>
                                    <div class="food_item__info">
                                        <p>Б / {{ prod.proteins }}</p>
                                        <p>Ж / {{ prod.fats }}</p>
                                        <p>У / {{ prod.carbs }}</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 racion racion_mobile">
                                    <!-- <div class="racion_day">{{dayName(productsDaySelect)}}</div> -->
                                    <div class="racion_day" v-if="productsDaySelect == 1">В понедельник</div>
                                    <div class="racion_day" v-if="productsDaySelect == 2">Во вторник</div>
                                    <div class="racion_day" v-if="productsDaySelect == 3">В среду</div>
                                    <div class="racion_day" v-if="productsDaySelect == 4">В четверг</div>
                                    <div class="racion_day" v-if="productsDaySelect == 5">В пятницу</div>
                                    <div class="racion_day" v-if="productsDaySelect == 6">В субботу</div>
                                    <div class="racion_day" v-if="productsDaySelect == 7">В воскресенье</div>
                                    <div v-if="gender == 's'" class>4 приема</div>
                                    <div v-if="gender == 'm'" class>5 приемов</div>
                                    <div v-if="gender == 'l'" class>6 приемов</div>
                                    <b>
                                        кКал
                                        <span>{{ totalInfoPreDay.totalInfoPerCalories }}</span>
                                    </b>
                                    <p>Б: {{ totalInfoPreDay.totalInfoPerProteins }} / Ж:
                                        {{ totalInfoPreDay.totalInfoPerFats }} / У:
                                        {{ totalInfoPreDay.totalInfoPerCarbs }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="nav-sr" role="tabpanel" aria-labelledby="nav-sr-tab">
                            <div class="row food">
                                <div
                                    class="col-12 col-md-4 food_item"
                                    v-for="(prod, index) in productsPerDayArray"
                                    :key="prod.dishID"
                                >
                                    <b>
                                        {{ prod.priority }}-й прием
                                        <div
                                            class="main_info"
                                        >/ {{ prod.kcal }} кКал
                                        </div>
                                    </b>
                                    <img :src="prod.url" onerror="this.src='/images/food_bg.jpg';" alt/>
                                    <span>{{ prod.name }}</span>
                                    <div class="food_item__info">
                                        <p>Б / {{ prod.proteins }}</p>
                                        <p>Ж / {{ prod.fats }}</p>
                                        <p>У / {{ prod.carbs }}</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 racion racion_mobile">
                                    <!-- <div class="racion_day">{{dayName(productsDaySelect)}}</div> -->
                                    <div class="racion_day" v-if="productsDaySelect == 1">В понедельник</div>
                                    <div class="racion_day" v-if="productsDaySelect == 2">Во вторник</div>
                                    <div class="racion_day" v-if="productsDaySelect == 3">В среду</div>
                                    <div class="racion_day" v-if="productsDaySelect == 4">В четверг</div>
                                    <div class="racion_day" v-if="productsDaySelect == 5">В пятницу</div>
                                    <div class="racion_day" v-if="productsDaySelect == 6">В субботу</div>
                                    <div class="racion_day" v-if="productsDaySelect == 7">В воскресенье</div>
                                    <div v-if="gender == 's'" class>4 приема</div>
                                    <div v-if="gender == 'm'" class>5 приемов</div>
                                    <div v-if="gender == 'l'" class>6 приемов</div>
                                    <b>
                                        кКал
                                        <span>{{ totalInfoPreDay.totalInfoPerCalories }}</span>
                                    </b>
                                    <p>Б: {{ totalInfoPreDay.totalInfoPerProteins }} / Ж:
                                        {{ totalInfoPreDay.totalInfoPerFats }} / У:
                                        {{ totalInfoPreDay.totalInfoPerCarbs }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="nav-che" role="tabpanel" aria-labelledby="nav-che-tab">
                            <div class="row food">
                                <div
                                    class="col-12 col-md-4 food_item"
                                    v-for="(prod, index) in productsPerDayArray"
                                    :key="prod.dishID"
                                >
                                    <b>
                                        {{ prod.priority }}-й прием
                                        <div
                                            class="main_info"
                                        >/ {{ prod.kcal }} кКал
                                        </div>
                                    </b>
                                    <img :src="prod.url" onerror="this.src='/images/food_bg.jpg';" alt/>
                                    <span>{{ prod.name }}</span>
                                    <div class="food_item__info">
                                        <p>Б / {{ prod.proteins }}</p>
                                        <p>Ж / {{ prod.fats }}</p>
                                        <p>У / {{ prod.carbs }}</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 racion racion_mobile">
                                    <!-- <div class="racion_day">{{dayName(productsDaySelect)}}</div> -->
                                    <div class="racion_day" v-if="productsDaySelect == 1">В понедельник</div>
                                    <div class="racion_day" v-if="productsDaySelect == 2">Во вторник</div>
                                    <div class="racion_day" v-if="productsDaySelect == 3">В среду</div>
                                    <div class="racion_day" v-if="productsDaySelect == 4">В четверг</div>
                                    <div class="racion_day" v-if="productsDaySelect == 5">В пятницу</div>
                                    <div class="racion_day" v-if="productsDaySelect == 6">В субботу</div>
                                    <div class="racion_day" v-if="productsDaySelect == 7">В воскресенье</div>
                                    <div v-if="gender == 's'" class>4 приема</div>
                                    <div v-if="gender == 'm'" class>5 приемов</div>
                                    <div v-if="gender == 'l'" class>6 приемов</div>
                                    <b>
                                        кКал
                                        <span>{{ totalInfoPreDay.totalInfoPerCalories }}</span>
                                    </b>
                                    <p>Б: {{ totalInfoPreDay.totalInfoPerProteins }} / Ж:
                                        {{ totalInfoPreDay.totalInfoPerFats }} / У:
                                        {{ totalInfoPreDay.totalInfoPerCarbs }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="nav-pt" role="tabpanel" aria-labelledby="nav-pt-tab">
                            <div class="row food">
                                <div
                                    class="col-12 col-md-4 food_item"
                                    v-for="(prod, index) in productsPerDayArray"
                                    :key="prod.dishID"
                                >
                                    <b>
                                        {{ prod.priority }}-й прием
                                        <div
                                            class="main_info"
                                        >/ {{ prod.kcal }} кКал
                                        </div>
                                    </b>
                                    <img :src="prod.url" onerror="this.src='/images/food_bg.jpg';" alt/>
                                    <span>{{ prod.name }}</span>
                                    <div class="food_item__info">
                                        <p>Б / {{ prod.proteins }}</p>
                                        <p>Ж / {{ prod.fats }}</p>
                                        <p>У / {{ prod.carbs }}</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 racion racion_mobile">
                                    <!-- <div class="racion_day">{{dayName(productsDaySelect)}}</div> -->
                                    <div class="racion_day" v-if="productsDaySelect == 1">В понедельник</div>
                                    <div class="racion_day" v-if="productsDaySelect == 2">Во вторник</div>
                                    <div class="racion_day" v-if="productsDaySelect == 3">В среду</div>
                                    <div class="racion_day" v-if="productsDaySelect == 4">В четверг</div>
                                    <div class="racion_day" v-if="productsDaySelect == 5">В пятницу</div>
                                    <div class="racion_day" v-if="productsDaySelect == 6">В субботу</div>
                                    <div class="racion_day" v-if="productsDaySelect == 7">В воскресенье</div>
                                    <div v-if="gender == 's'" class>4 приема</div>
                                    <div v-if="gender == 'm'" class>5 приемов</div>
                                    <div v-if="gender == 'l'" class>6 приемов</div>
                                    <b>
                                        кКал
                                        <span>{{ totalInfoPreDay.totalInfoPerCalories }}</span>
                                    </b>
                                    <p>Б: {{ totalInfoPreDay.totalInfoPerProteins }} / Ж:
                                        {{ totalInfoPreDay.totalInfoPerFats }} / У:
                                        {{ totalInfoPreDay.totalInfoPerCarbs }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="nav-sub" role="tabpanel" aria-labelledby="nav-sub-tab">
                            <div v-if="activeComputed" class="if7">
                                <span>Доставка в этот день доступна только</span> при заказе рациона на 7 дней!
                                <a href="#" @click.prevent="days = 7">Выбрать 7 дней</a>
                            </div>
                            <div class="row food" :class="{if7blur: activeComputed}">
                                <div
                                    class="col-12 col-md-4 food_item"
                                    v-for="(prod, index) in productsPerDayArray"
                                    :key="prod.dishID"
                                >
                                    <b>
                                        {{ prod.priority }}-й прием
                                        <div
                                            class="main_info"
                                        >/ {{ prod.kcal }} кКал
                                        </div>
                                    </b>
                                    <img :src="prod.url" onerror="this.src='/images/food_bg.jpg';" alt/>
                                    <span>{{ prod.name }}</span>
                                    <div class="food_item__info">
                                        <p>Б / {{ prod.proteins }}</p>
                                        <p>Ж / {{ prod.fats }}</p>
                                        <p>У / {{ prod.carbs }}</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 racion racion_mobile">
                                    <!-- <div class="racion_day">{{dayName(productsDaySelect)}}</div> -->
                                    <div class="racion_day" v-if="productsDaySelect == 1">В понедельник</div>
                                    <div class="racion_day" v-if="productsDaySelect == 2">Во вторник</div>
                                    <div class="racion_day" v-if="productsDaySelect == 3">В среду</div>
                                    <div class="racion_day" v-if="productsDaySelect == 4">В четверг</div>
                                    <div class="racion_day" v-if="productsDaySelect == 5">В пятницу</div>
                                    <div class="racion_day" v-if="productsDaySelect == 6">В субботу</div>
                                    <div class="racion_day" v-if="productsDaySelect == 7">В воскресенье</div>
                                    <div v-if="gender == 's'" class>4 приема</div>
                                    <div v-if="gender == 'm'" class>5 приемов</div>
                                    <div v-if="gender == 'l'" class>6 приемов</div>
                                    <b>
                                        кКал
                                        <span>{{ totalInfoPreDay.totalInfoPerCalories }}</span>
                                    </b>
                                    <p>Б: {{ totalInfoPreDay.totalInfoPerProteins }} / Ж:
                                        {{ totalInfoPreDay.totalInfoPerFats }} / У:
                                        {{ totalInfoPreDay.totalInfoPerCarbs }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane" id="nav-vs" role="tabpanel" aria-labelledby="nav-vs-tab">
                            <div v-if="activeComputed" class="if7">
                                <span>Доставка в этот день доступна только</span> при заказе рациона на 7 дней!
                                <a href="#" @click.prevent="days = 7">Выбрать 7 дней</a>
                            </div>
                            <div class="row food" :class="{if7blur: activeComputed}">
                                <div
                                    class="col-12 col-md-4 food_item"
                                    v-for="(prod, index) in this.productsPerDayArray"
                                    :key="prod.dishID"
                                >
                                    <b>
                                        {{ prod.priority }}-й прием
                                        <div
                                            class="main_info"
                                        >/ {{ prod.kcal }} кКал
                                        </div>
                                    </b>
                                    <img :src="prod.url" onerror="this.src='/images/food_bg.jpg';" alt/>
                                    <span>{{ prod.name }}</span>
                                    <div class="food_item__info">
                                        <p>Б / {{ prod.proteins }}</p>
                                        <p>Ж / {{ prod.fats }}</p>
                                        <p>У / {{ prod.carbs }}</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-3 racion racion_mobile">
                                    <!-- <div class="racion_day">{{dayName(productsDaySelect)}}</div> -->
                                    <div class="racion_day" v-if="productsDaySelect == 1">В понедельник</div>
                                    <div class="racion_day" v-if="productsDaySelect == 2">Во вторник</div>
                                    <div class="racion_day" v-if="productsDaySelect == 3">В среду</div>
                                    <div class="racion_day" v-if="productsDaySelect == 4">В четверг</div>
                                    <div class="racion_day" v-if="productsDaySelect == 5">В пятницу</div>
                                    <div class="racion_day" v-if="productsDaySelect == 6">В субботу</div>
                                    <div class="racion_day" v-if="productsDaySelect == 7">В воскресенье</div>
                                    <div v-if="gender == 's'" class>4 приема</div>
                                    <div v-if="gender == 'm'" class>5 приемов</div>
                                    <div v-if="gender == 'l'" class>6 приемов</div>
                                    <b>
                                        кКал
                                        <span>{{ totalInfoPreDay.totalInfoPerCalories }}</span>
                                    </b>
                                    <p>Б: {{ totalInfoPreDay.totalInfoPerProteins }} / Ж:
                                        {{ totalInfoPreDay.totalInfoPerFats }} / У:
                                        {{ totalInfoPreDay.totalInfoPerCarbs }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
                <p class="otdel">* Отдел контроля качества оставляет за собой право замены блюд</p>
            </div>

            <div class="col-md-3">
                <div class="addCart">
                    <h3>Формирование меню</h3>
                    <form @submit.prevent="submitMenu">
                        <div class="row addcart_items">
                            <div class="col-6 addcart_items__item">
                                <input v-model="days" type="radio" checked id="day5" name="days" value="5"/>
                                <label for="day5">5 дней</label>
                            </div>
                            <div class="col-6 addcart_items__item">
                                <input v-model="days" type="radio" id="day7" name="days" value="7"/>
                                <label for="day7">7 дней</label>
                            </div>
                        </div>
                        <div class="row addcart_items weeks">
                            <div class="col-3 addcart_items__item">
                                <input v-model="weeks" type="radio" checked id="week1" name="weeks" value="1"/>
                                <label for="week1">1</label>
                            </div>
                            <div class="col-3 addcart_items__item">
                                <input v-model="weeks" type="radio" id="week2" name="weeks" value="2"/>
                                <label for="week2">2</label>
                            </div>
                            <div class="col-3 addcart_items__item">
                                <input v-model="weeks" type="radio" id="week3" name="weeks" value="3"/>
                                <label for="week3">3</label>
                            </div>
                            <div class="col-3 addcart_items__item">
                                <input v-model="weeks" type="radio" id="week4" name="weeks" value="4"/>
                                <label for="week4">4</label>
                            </div>
                            <div class="col-md-12">
                                <span>Количество недель</span>
                            </div>
                        </div>
                        <div class="price" id="toOrder">
                            <p
                                class="price_old"
                            >{{
                                    priceSumMethod.oldPrice | currency('₽', 0, {
                                        symbolOnLeft: false,
                                        thousandsSeparator: ' ',
                                        spaceBetweenAmountAndSymbol: true
                                    })
                                }}</p>
                            {{
                                priceSumMethod.price | currency('₽', 0, {
                                    symbolOnLeft: false,
                                    thousandsSeparator: ' ',
                                    spaceBetweenAmountAndSymbol: true
                                })
                            }}
                            <p
                                v-if="priceSumMethod.sale"
                                class="price_sale"
                            >Ваша выгода: {{
                                    priceSumMethod.sale | currency('₽', 0, {
                                        symbolOnLeft: false,
                                        thousandsSeparator: ' ',
                                        spaceBetweenAmountAndSymbol: true
                                    })
                                }}</p>
                            <div class="price_detail">
                                ≈ {{
                                    priceSumMethod.inDay | currency('₽', 0, {
                                        symbolOnLeft: false,
                                        thousandsSeparator: ' ',
                                        spaceBetweenAmountAndSymbol: true
                                    })
                                }} в день
                                <br/>
                                ≈ {{
                                    priceSumMethod.bludo | currency('₽', 0, {
                                        symbolOnLeft: false,
                                        thousandsSeparator: ' ',
                                        spaceBetweenAmountAndSymbol: true
                                    })
                                }} за блюдо
                                <br/>
                                <span>
                  <i class="fas fa-truck"></i> Бесплатная доставка в любой день
                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            class="addToCart"
                        >Подтвердить меню
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div class="row" style="display: none;">
            <div class="col-md-6 offset-md-3 cart_wrapper">
                <div class="row">
                    <div class="col-md-12 text-center" v-if="orderDataWrapperN">
                        <h3>
                            Ваш заказ на сумму:
                            <b>{{
                                    totalSumMethod | currency('₽', 0, {
                                        symbolOnLeft: false,
                                        thousandsSeparator: ' ',
                                        spaceBetweenAmountAndSymbol: true
                                    })
                                }}</b>
                        </h3>
                    </div>
                    <div class="col-md-7" v-if="!orderDataWrapperN">
                        <h3>
                            Ваш заказ на сумму:
                            <b>{{
                                    totalSumMethod | currency('₽', 0, {
                                        symbolOnLeft: false,
                                        thousandsSeparator: ' ',
                                        spaceBetweenAmountAndSymbol: true
                                    })
                                }}</b>
                        </h3>
                    </div>
                    <div class="col-md-5" v-if="!orderDataWrapperN">
                        <a class="goToOrder" @click.prevent="orderDataWrapperNMethod" href="#">
                            Оформить заказ
                            <i class="fas fa-arrow-alt-circle-right"></i>
                        </a>
                    </div>
                </div>

                <table class="cart_table">
                    <thead>
                    <tr>
                        <th>Рацион</th>
                        <th>Дней</th>
                        <th>Недель</th>
                        <th>Стоимость</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(c, index) in cart" :key="index">
                        <td>
                            <span v-if="c.gender == 's'">S ~ 1200 кКал/день</span>
                            <span v-if="c.gender == 'm'">M ~ 1500 кКал/день</span>
                            <span v-if="c.gender == 'l'">L ~ 2000 кКал/день</span>
                        </td>
                        <td>
                            <span>{{ c.days }}</span>
                        </td>
                        <td>
                            <span>{{ c.weeks }}</span>
                        </td>
                        <td>{{
                                c.price | currency('₽', 0, {
                                    symbolOnLeft: false,
                                    thousandsSeparator: ' ',
                                    spaceBetweenAmountAndSymbol: true
                                })
                            }}
                        </td>
                        <td>
                            <a class="removeItem" href="#" @click.prevent="removeItem(index)">
                                <i class="fas fa-trash-alt"></i>
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="modal" v-bind:class="{modalShow:modalShow}" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Внимание!</h4>
                        <button @click="modalShow = false" type="button" class="close" data-dismiss="modal"
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div style="font-size: 18px" role="alert">
                            {{ message }}
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" @click="modalShow = false" class="btn importLink" data-dismiss="modal">
                            Ок
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-bind:class="{over:modalShow}">
        </div>
    </div>
</template>

<script>
const moment = require("moment");
require("moment/locale/ru");

export default {
    props: ["menu"],
    data: function () {
        return {
            days: 7,
            gender: "l",
            weeks: 1,
            allprod: ["1", "2", "3"],
            products: [],
            priceSum: "3850",
            active: true,
            cart: [],
            totalPrice: 0,
            beznalActive: false,
            orderDataWrapperN: false,
            iikoMenu: this.menu,
            newPrice: 0,
            productsDaySelect: 1,
            productsPerDayArray: [],
            forSlider: this.productsPerDayArray,
            weekCount: this.getWeekNumber(),
            menuShow: false,
            isCurrentWeek: true,
            thisWeekProducts: [],
            nextWeekProducts: [],
            selectedDayOfWeek: 1,
            weekDay: [],
            selectedDate: 0,
            modalShow: false,
            message: "",
            counter: new Set()
        };
    },
    created() {
    },
    mounted() {
        //adminordercomponent
        let startDate = this.getPreviousMonday();
        for (let i = 0; i < 5; i++) {
            let date = {
                showDate: this.getDateString(startDate),
                date: this.formatDate(startDate)
            }
            this.weekDay.push(date)
            startDate = this.addDays(startDate, 7);
        }
        let racionScrolls = document.querySelector(".new_change_racion");

        //отображает рационы при прокрутке вниз
        if (racionScrolls) {
            racionScrolls.addEventListener("scroll", event => {
                let chunk = racionScrolls.scrollLeftMax / 2;

                if (racionScrolls.scrollLeft < chunk) {
                    this.gender = "s";
                }

                if (
                    racionScrolls.scrollLeft > chunk &&
                    racionScrolls.scrollLeft !== racionScrolls.scrollLeftMax
                ) {
                    this.gender = "m";
                }

                if (racionScrolls.scrollLeft == racionScrolls.scrollLeftMax) {
                    this.gender = "l";
                }
            });
        }

        if (localStorage.getItem("cart")) {
            try {
                this.cart = JSON.parse(localStorage.getItem("cart"));
            } catch (e) {
                localStorage.removeItem("cart");
            }
        }
    },
    watch: {
        priceSumMethod() {
            this.productsPerDay(this.productsDaySelect);
        },
        days() {
            //   this.productsPerDay(moment().weekday() + 1);

            let tabs = document.querySelectorAll("a.racion");
            tabs.forEach((element, index) => {
                element.classList.remove("active");
                if (index == this.productsDaySelect - 1) {
                    element.classList.add("active");
                }
                if (index == this.productsDaySelect + 6) {
                    element.classList.add("active");
                }
            });
        }
    },
    methods: {
        submitMenu() {
            if (this.selectedDate == 0) {
                this.message = "Пожалуйста выберете дату загрузки!";
                this.modalShow = true;
                return;
            }
            if (this.counter.size < 7) {
                this.message = "Пожалуйста просмотрите все дни и после этого нажмите кнопку 'Подтвердить меню'!";
                this.modalShow = true;
                return;
            }

            //this.isLoading = true;
            let statusCode = 200;
            axios.post('/admin/menu/addMenuScheduleFromIiko', {
                menu: this.iikoMenu,
                startDate: this.selectedDate,
            }, {
                header: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                },
            }).then(response => {
                this.message = response.data.message;
                this.modalShow = true;
                this.isLoading = false;
            }).catch(err => {
                console.log("catch you!");
                console.log(err)
            })
        },
        getWeekNumber() {
            return Number(moment().format("W"));
        },
        onClose(data) {
            this.orderDataWrapperN = data.close;
        },
        dayName(day) {
            return moment()
                .day(day)
                .format("dddd");
        },
        dateWeekRacionStart(week) {
            return moment()
                .startOf("week")
                .weeks(week)
                .format("DD.MM");
        },
        dateWeekRacionEnd(week) {
            return moment()
                .endOf("week")
                .weeks(week)
                .format("DD.MM");
        },
        dateWeekRacion(day) {
            console.log(
                moment()
                    .startOf("week")
                    .weeks(30)
            );

            return moment()
                .day(day)
                .format("DD.MM");
        },
        startDateFormat() {
            return moment().startOf('week').add('days', 1).format("DD.MM");
        },
        endDateFormat() {
            return moment().endOf('week').add('days', 2).format("DD.MM");
        },
        urlPhoto(index) {
            index = index + 1;

            let url =
                "/images/menu/" +
                this.weekCount +
                "/" +
                this.productsDaySelect +
                "/" +
                index +
                ".jpg";

            return url;
        },
        getMenu() {
            let btnWeek = document.querySelectorAll(".changeWeeks p");
            axios({
                method: "post",
                url: "/admin/menu/getMenuForWeek/",
                params: {
                    selectedDate: this.selectedDate
                }
            }).then(response => {
                if (response.data) {
                    this.products = response.data;
                    let list = response.data;
                    let thisMonday = this.getCurrentMonday();

                    for (let i = 0; i < list.length; i++) {
                        if (list[i].startDate == thisMonday) {
                            this.thisWeekProducts.push(list[i])
                        } else {
                            this.nextWeekProducts.push(list[i]);
                        }
                    }
                    this.productsPerDay(1);

                    let tabs = document.querySelectorAll("a.racion");
                    tabs.forEach((element, index) => {
                        element.classList.remove("active");
                        // if (index == moment().weekday()) {
                        //   element.classList.add("active");
                        // }
                        // if (index == moment().weekday() + 7) {
                        //   element.classList.add("active");
                        // }
                        if (index == 0) {
                            element.classList.add("active");
                        }
                        if (index == 7) {
                            element.classList.add("active");
                        }
                        this.menuShow = true;
                    });
                } else {
                    console.log("error load menu");
                }
            });
        },
        getMenuFor(startDate) {
            let val = this.getCurrentMonday();
            //alert(val);
            // alert(startDate);
            let startVal = startDate();
            let btnWeek = document.querySelectorAll(".changeWeeks p");
            if (val == startVal) {
                console.log("week loaded");
                this.isCurrentWeek = true;
                this.productsPerDay(this.productsDaySelect);
                //calc calories

            } else {
                this.isCurrentWeek = false;
                this.currentWeek = startDate;
                this.productsPerDay(this.productsDaySelect);
                //calc calories

                // btnWeek.forEach(elem => {
                //   elem.classList.remove("weekActive");
                // });
                // this.weekCount = startDate;
                // event.target.classList.add("weekActive");
            }

            let img_url = document.querySelectorAll(".food_item img");
        },
        productsPerDay(day) {
            this.counter.add(day);
            this.selectedDayOfWeek = day;
            this.productsDaySelect = day;
            this.productsPerDayArray = [];

            let currentWeekProducts = [];

            currentWeekProducts = this.iikoMenu;
            this.productsPerDayArray = currentWeekProducts.filter(function (el) {
                return el.weekDay == day;
            });

            this.productsPerDayArray.sort((a, b) => (a.priority > b.priority) ? 1 : ((b.priority > a.priority) ? -1 : 0));

            if (this.priceSumMethod.id == 1 || this.priceSumMethod.id == 2) {
                this.productsPerDayArray.splice(-2);
            }
            if (this.priceSumMethod.id == 3 || this.priceSumMethod.id == 4) {
                this.productsPerDayArray.splice(-1);
            }

            console.log(this.productsPerDayArray);
        },
        orderDataWrapperNMethod() {
            this.orderDataWrapperN = !this.orderDataWrapperN;
            this.newPrice = this.totalSumMethod;
        },
        removeItem(x) {
            this.cart.splice(x, 1);
            localStorage.setItem("cart", JSON.stringify(this.cart));
        },
        addToCartMethod() {
            let inCart = {
                days: this.days,
                gender: this.gender,
                weeks: this.weeks,
                price: this.priceSumMethod.price,
                id: this.priceSumMethod.id
            };
            this.cart.push(inCart);
            const parsed = JSON.stringify(this.cart);
            localStorage.setItem("cart", parsed);

            this.orderDataWrapperNMethod();

            this.days = 5;
            this.gender = "s";
            this.weeks = 1;
            this.priceSum = "3300";
        },
        getCurrentMonday() {
            return moment().startOf('week').format('YYYY-MM-DD');
        },
        getNextMonday() {
            return moment().endOf('week').add('days', 1).format('YYYY-MM-DD');
        },
        addDays(date, days) {
            var result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        },
        getPreviousMonday() {
            let date = new Date();
            let day = date.getDay();
            let prevMonday;
            if (date.getDay() == 0) {
                prevMonday = new Date().setDate(date.getDate() - 7);
            } else {
                prevMonday = new Date().setDate(date.getDate() - day);
            }

            return prevMonday;
        },
        getDateString(startDate) {
            startDate = this.addDays(startDate, 1);
            let strStart = moment(startDate).format('Do MMMM')
            let endDate = this.addDays(startDate, 7);
            let strEnd = moment(endDate).format('Do MMMM')

            let strdate = 'От ' + strStart + ' До ' + strEnd;
            return strdate;
        },
        formatDate(date) {
            date = this.addDays(date, 1);
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;

            return [year, month, day].join('-');
        }
    },
    computed: {
        totalInfoPreDay() {
            let totalInfoPer = {
                totalInfoPerCalories: 0,
                totalInfoPerProteins: 0,
                totalInfoPerFats: 0,
                totalInfoPerCarbs: 0
            };

            this.productsPerDayArray.forEach(elem => {
                totalInfoPer.totalInfoPerCalories += Number(elem.kcal);
            });
            this.productsPerDayArray.forEach(elem => {
                totalInfoPer.totalInfoPerProteins += Number(elem.proteins);
            });
            this.productsPerDayArray.forEach(elem => {
                totalInfoPer.totalInfoPerFats += Number(elem.fats);
            });
            this.productsPerDayArray.forEach(elem => {
                totalInfoPer.totalInfoPerCarbs += Number(elem.carbs);
            });

            return totalInfoPer;
        },
        totalSumMethod() {
            let totalCartPrice = this.totalPrice;
            this.cart.forEach(function (cartItem) {
                totalCartPrice += cartItem.price;
            });
            return totalCartPrice;
        },
        activeComputed() {
            this.active = true;
            if (this.days == 7) {
                this.active = false;
            }

            return this.active;
        },
        priceSumMethod() {
            var totalPrice;
            if (this.days == 5 && this.gender == "s") {
                totalPrice = {
                    price: 3850,
                    inDay: 770,
                    bludo: 192,
                    id: 1
                };
            }
            if (this.days == 7 && this.gender == "s") {
                totalPrice = {
                    price: 5290,
                    inDay: 755,
                    bludo: 188,
                    id: 2
                };
            }
            if (this.days == 5 && this.gender == "m") {
                totalPrice = {
                    price: 3990,
                    inDay: 798,
                    bludo: 159,
                    id: 3
                };
            }
            if (this.days == 7 && this.gender == "m") {
                totalPrice = {
                    price: 5400,
                    inDay: 771,
                    bludo: 154,
                    id: 4
                };
            }
            if (this.days == 5 && this.gender == "l") {
                totalPrice = {
                    price: 4150,
                    inDay: 830,
                    bludo: 138,
                    id: 5
                };
            }
            if (this.days == 7 && this.gender == "l") {
                totalPrice = {
                    price: 5750,
                    inDay: 821,
                    bludo: 136,
                    id: 6
                };
            }
            if (this.weeks == "1") {
                return totalPrice;
            }

            if (this.weeks == "2") {
                totalPrice.price = totalPrice.price * 2;
                return totalPrice;
            }

            if (this.weeks == "3") {
                totalPrice.inDay = (totalPrice.inDay / 100) * 95;
                totalPrice.bludo = (totalPrice.bludo / 100) * 95;
                totalPrice.price = totalPrice.price * 3;
                return totalPrice;
            }

            if (this.weeks == "4") {
                totalPrice.price = totalPrice.price * 4;
                return totalPrice;
            }
        }
    }
};
</script>
<style type="text/css">
.modalShow {
    display: block !important;
}

.over {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.6;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

.top_change_racion {
    position: fixed;
    left: 0;
    top: -100%;
    width: 100%;
    z-index: 9999999;
    transition: 0.5s;
    background: #fff !important;
    margin: 0;
    padding: 0 !important;
    padding-top: 10px;
}

.top_change_racion > .col-md-12 {
    max-width: 1200px;
    margin: 0 auto;
}

.top_change_racion.fixed {
    transition: 0.5s;
    top: 0;
}

.top_change_racion.fixed label {
    background-position: right -1px;
}

.top_change_racion.fixed label p {
    padding: 0 !important;
}

.top_change_racion.fixed .racion {
    margin-bottom: 0;
}

.top_change_racion.fixed .racion p {
    font-size: 12px;
}

.if7blur {
    -webkit-filter: blur(3px);
    filter: blur(3px);
}

.if7 {
    position: absolute;
    z-index: 9994;
    left: 0;
    top: 44px;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    font-size: 23px;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.65);
}

.if7 span {
    font-size: 30px;
    font-weight: bold;
    display: block;
}

.food_item {
    text-align: center;
    position: relative;
    overflow: hidden;
    border: 1px solid transparent;
    transition: 0.5s;
    border-radius: 5px;
}

.food_item img {
    width: 100%;
    border-radius: 7px;
    background-color: #fff;
    padding-top: 20px;
}

.food_item span {
    padding: 15px;
    color: #272727;
    text-align: left;
    width: 250px;
    display: block;
}

.food_item b {
    text-align: center;
    position: absolute;
    display: inline-block;
    background: #fff;
    color: #2A9055;
    padding: 3px 10px;
    border-radius: 0 0 5px 0;
    font-size: 13px;
    width: 250px;
}

.food_item b .main_info {
    display: inline-block;
    font-weight: 200;
    color: #000;
    font-size: 15px;
    margin-left: 5px;
}

.food_item__info {
    margin: 0;
    padding: 0;
    text-align: left;
    position: absolute;
    transition: 0.5s;
    opacity: 0;
    top: 40%;
    left: 15px;
    color: #000;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    background: #fff;
    padding: 5px;
    border-radius: 0 5px 5px 0;
}

.food_item__info p {
    margin: 0;
    font-size: 13px;
}

.food_item:hover .food_item__info {
    opacity: 1;
}

.orderData {
    position: fixed;
    right: 0;
    top: 0;
    float: right;
    height: 100%;
    width: 376px;
    overflow-y: scroll;
    margin-right: -400px;
    background-color: #fff;
    transition: all 0.5s;
    z-index: 99958778876876;
}

.orderData_inner {
    padding: 30px 15px;
}

.orderData_inner h4 {
    text-align: center;
    margin-bottom: 20px;
    font-weight: 200;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    padding-bottom: 15px;
}

.orderData_close {
    float: right;
    margin-right: 10px;
    margin-left: 10px;
    display: block;
}

.orderData_close a {
    color: #000;
    padding: 5px 10px;
    margin-top: -7px;
    border-radius: 3px;
    transition: 0.25s;
    display: block;
}

.orderData_close a:hover {
    background-color: #000;
    color: #fff;
    text-decoration: none;
}

.orderDataactive {
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
    margin-right: 0px;
}

.otdel {
    color: rgba(39, 39, 39, 0.5);
    font-size: 14px;
    padding: 10px 0 0 15px;
    margin-bottom: 0;
}

.goToOrder {
    display: block;
    text-align: center;
    background-color: #ed9e12;
    color: #fff;
    padding: 5px 5px;
    border-radius: 7px;
    transition: 0.25s;
    font-weight: 200;
    border: 1px solid #ed9e12;
}

.goToOrder i {
    margin-left: 10px;
}

.goToOrder:hover {
    background-color: #fff;
    color: #ed9e12;
    text-decoration: none;
}

.cart_table {
    width: 100%;
}

.cart_table thead {
    margin-bottom: 20px;
}

.cart_table thead tr {
    background: #ddd;
}

.cart_table tbody tr {
    margin: 5px;
}

.cart_table tbody tr:nth-child(even) {
    background: rgba(221, 221, 221, 0.5);
}

.cart_table td, .cart_table th {
    padding: 5px 10px;
}

.cart_table .removeItem {
    display: block;
    text-align: center;
    color: #761b18;
    transition: 0.25s;
}

.cart_table .removeItem:hover {
    color: red;
}

.cart_wrapper {
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.cart_wrapper h3 {
    color: #ed9e12;
    font-size: 18px;
    font-weight: 200;
    border-bottom: 1px solid #ed9e12;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.cart_wrapper h3 b {
    font-weight: bold;
    font-size: 20px;
}

.changeWeeks {
    float: right;
    font-size: 13px;
    background-color: #FAF5F2;
    display: flex;
    border-radius: 5px;
    margin-right: 15px;
    margin-bottom: 10px;
}

.changeWeeks p {
    padding: 5px 10px;
    margin: 0;
    cursor: pointer;
}

.changeWeeks p:last-child {
    color: rgba(0, 0, 0, 0.3);
}

.weekActive {
    font-weight: bold;
    background: green;
    color: #fff !important;
}

.newOrder {
    background-color: #fff;
    padding: 20px 10px;
    border-radius: 10px;
    margin-top: 50px;
}

.newOrder_wrapper {
    margin-top: 50px;
}

.newOrder .nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: none;
}

.newOrder .nav a {
    display: block;
    text-transform: capitalize;
    font-weight: 500;
    color: #000;
    padding: 5px 15px;
    transition: 0.25s;
    border-radius: 5px 5px 0 0;
    position: relative;
}

.newOrder .nav a:hover {
    text-decoration: none;
    background-color: #ddd;
}

.newOrder .nav a i {
    font-size: 12px;
    margin-right: 5px;
    color: #EE7D11;
    transition: 0.25s;
    position: absolute;
    left: 50%;
    top: -12px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}

.newOrder .nav .active {
    background-color: #f2225a;
    color: #fff;
    border-radius: 5px;
}

.newOrder .nav .disabled {
    color: #ddd;
}

.newOrder .nav .disabled:hover {
    background-color: transparent;
    cursor: not-allowed;
}

.addToCart {
    background-color: #1ccc50;
    color: #fff;
    padding: 10px 20px;
    display: block;
    border-radius: 0 0 10px 10px;
    border: 0;
    width: 100%;
    margin: 0 auto;
    transition: 0.25s;
    font-size: 22px;
    margin-top: 20px;
}

.addToCart:hover {
    background-color: #E14363;
    color: #fff;
    cursor: pointer;
}

.price {
    text-align: center;
    color: #5EC45B;
    font-weight: bold;
    padding: 10px 0 15px 0;
}

.price_old {
    color: #989898;
    text-decoration: line-through;
    text-align: center;
    margin: 0;
    margin-bottom: -10px;
    font-size: 30px;
}

.price_sale {
    font-size: 15px;
    color: #f2225a;
    padding-bottom: 0;
    margin: 0;
    margin-top: -10px;
}

.price_detail {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
}

.price_detail span {
    display: block;
    margin-top: 5px;
    padding-top: 5px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 10px;
}

.addCart {
    background: #05445c;
    border-radius: 10px;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.addCart h3 {
    color: #fff;
    margin-bottom: 20px;
    border-bottom: 1px solid rgb(42, 144, 85);
    padding-bottom: 10px;
    font-size: 20px;
    padding: 10px;
}

.addcart_items {
    padding: 0 15px;
}

.addcart_items button {
    margin: 0 auto;
    padding: 10px;
}

.addcart_items span {
    display: inline-block;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    padding: 0px 19px;
    border-radius: 3px;
    margin-top: 10px;
}

.addcart_items__item {
    position: relative;
    height: 100%;
    max-height: 177.3px;
}

.addcart_items__item span {
    font-size: 13px;
}

.addcart_items__item label {
    background-repeat: no-repeat;
    background-size: 90px;
    background-position: 100% 100%;
    transition: 0.5s;
}

.addcart_items__item label.s {
    background-image: url("/images/s.png");
    border: 1px solid #ddd;
}

.addcart_items__item label.m {
    background-image: url("/images/m.png");
    border: 1px solid #ddd;
}

.addcart_items__item label.l {
    background-image: url("/images/l.png");
    border: 1px solid #ddd;
}

.addcart_items__item label span {
    font-size: 40px;
    font-weight: bold;
}

.addcart_items__item p {
    font-size: 13px;
    margin: 0;
    text-align: left;
    transition: 0.5s;
    padding: 15px;
}

.addcart_items__item p b {
    font-size: 16px;
    display: block;
    line-height: 42px;
}

.addcart_items__item input {
    display: none;
}

.addcart_items__item input:checked ~ label {
    background-color: transparent;
    border: 2px solid orange !important;
    color: #fff;
}

.addcart_items__item input:checked ~ label.s {
    background-size: 85px;
}

.addcart_items__item input:checked ~ label.m {
    background-size: 85px;
}

.addcart_items__item input:checked ~ label.l {
    background-size: 85px;
}

.addcart_items__item input:checked ~ label p {
    color: #fff;
    border-bottom: 2px solid #fff;
}

.addcart_items__item label {
    padding: 10px;
    text-align: center;
    display: block;
    border-radius: 5px;
    transition: 0.25s;
    position: relative;
}

.addcart_items__item label:hover {
    cursor: pointer;
    background-color: rgb(42, 144, 85) !important;
}

.addcart_items__item label i {
    margin-right: 10px;
}

.addcart_items__item label small {
    position: absolute;
    top: -27px;
    background: #fff;
    width: 50px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    color: #085978;
    padding: 3px;
    border-radius: 5px;
}

.weeks {
    margin-top: 20px;
    margin-bottom: 20px;
    border-bottom: none;
    padding: 15px 0;
    border-radius: 7px;
    background: #085978;
}

.weeks label {
    height: 44px;
    width: 44px;
    border-radius: 50%;
    margin: 0 auto;
    border: 2px solid transparent;
}

.new_change_racion {
    background: rgba(221, 221, 221, 0.2);
    padding: 30px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.new_change_racion .racion {
    background: #fff;
    height: 100%;
    max-height: 163.9px;
    border-radius: 10px;
}

.new_change_racion .addcart_items__item {
    max-width: 70%;
}

.racion {
    display: block;
    text-align: center;
    margin-bottom: 20px;
    font-weight: 200;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.racion b {
    text-transform: uppercase;
    font-weight: bold;
}

.racion b span {
    display: inline-block;
    font-size: 27px;
    color: #2A9055;
    padding: 0 0 0 5px;
}

.racion p {
    text-transform: capitalize;
    margin: 0;
}

.racion_day {
    text-transform: uppercase;
    font-weight: bold;
}

.noMobile {
    display: block;
}

.yesMobile {
    display: none;
}

.racion_mobile {
    display: none;
}

@media (max-width: 575.98px) {
    .top_change_racion {
        display: none;
    }

    .racion {
        display: none;
    }

    .racion_mobile {
        display: block;
        margin-top: 50px;
    }

    .changeWeeks p:first-child {
        display: none;
    }

    .new_change_racion {
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
    }

    .goToOrder {
        margin-bottom: 15px;
        font-size: 30px;
    }

    .orderData {
        width: 363px;
        margin-right: -400px;
    }

    .orderData.orderDataactive {
        width: 100%;
        box-shadow: none;
        margin-right: 0px !important;
    }

    .newOrder .nav a {
        padding: 5px 10px;
    }

    .noMobile {
        display: none;
    }

    .yesMobile {
        display: block;
    }

    .changeWeeks p:first:child {
        display: none;
    }

    .food {
        flex-wrap: nowrap;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
    }

    .food__item__info {
        opacity: 1;
    }
}
</style>
