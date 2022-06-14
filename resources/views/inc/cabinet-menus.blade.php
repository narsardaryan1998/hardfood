<main class="content personal-area-cabinet-menus">
    @include('inc.bunner-personal-area')
    <div class="content__container">
        <div class="content__body">
            @include('inc.personal-area-cabinet.left-menu')
            <div class="content__data data-content">
                <div class="data-content__profile profile">
                    <div class="profile__main-data">
                        <div class="profile__title">Основные данные
                        </div>
                        <form action="#" class="profile__forn">
                            <input type="text" v-model="userNameOld" placeholder="Ваше имя" class="profile__input default-text-color">
                            <input type="email" v-model="emailOld" placeholder="E-mail" class="profile__input default-text-color">
                            <div class="profile__birthday_description">
                                Укажите дату рождения, чтобы получить от нас подарок:
                            </div>
                            <div class="_labal-container">
                                <input v-model="dateOfBirthdayOld" type="date" id="dateOfBirthday" class="profile__input default-text-color">
                                <label for="dateOfBirthday">Дата рождения</label>
                            </div>
                            <button type="button" disabled
                                    v-if="(userData.email === emailOld && userData.name === userNameOld && userData.dateOfBirthday === dateOfBirthdayOld) || loadingForUpdateUserDetail"
                                    class="profile__button">Сохранить
                            </button>
                            <button type="button" @click="updateUserDetails" v-else class="profile__button">Сохранить
                            </button>
                            {{--                            <button type="button" class="add-addres__btn close-popap" v-else @click="addNewAddress">Сохранить</button>--}}
                            {{--                            <input type="date" class="profile__input">--}}
                            {{--                            <div class="profile__radion-btn">--}}
                            {{--                                <p>--}}
                            {{--                                    <input checked type="radio" name="ginger" id="male">--}}
                            {{--                                    <label for="male">Мужчина</label>--}}
                            {{--                                </p>--}}
                            {{--                                <p>--}}
                            {{--                                    <input type="radio" name="ginger" id="female">--}}
                            {{--                                    <label for="female">Женщина</label>--}}
                            {{--                                </p>--}}
                            {{--                            </div>--}}
                        </form>
                    </div>

                    <div class="profile__adresses adresses">
                        <div class="adresses__title-container">
                            <div class="profile__title">Мои адреса</div>
                            <a href="#" @click="modalAction('add-addres', false)" class="adresses__add-btn popap-link"
                               v-if="!userData.addressStreet || !userData.addressStreet2">добавить
                                адрес</a>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
