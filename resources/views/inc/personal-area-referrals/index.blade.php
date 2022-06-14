<main class="content personal-area-cabinet-menus">
    @include('inc.bunner-personal-area')
    <div class="content__container">
        <div class="content__body">
            @include('inc.personal-area-cabinet.left-menu')
            <div class="content__data data-content">
                <span id="userReferralLinkValue" style="display: none">{{$user->getReferralLink()}}</span>
                <div class="referrals_content">
{{--                    <div class="referrals_content__types">--}}
{{--                        <div>--}}
{{--                            <a @click="referralTypeIsWeek = false" href=javascript:void(0)--}}
{{--                               :class="{'_active' : !referralTypeIsWeek}">+ 500 бонусов</a>--}}
{{--                        </div>--}}
{{--                        <div>--}}
{{--                            <a @click="referralTypeIsWeek = true" href="javascript:void(0)"--}}
{{--                               :class="{'_active' : referralTypeIsWeek}">+ неделя в подарок</a>--}}
{{--                        </div>--}}
{{--                    </div>--}}
                    <div class="referrals_content__promocode">
                        <div class="referrals_content__promocode__header">
                            Пригласить друга
                        </div>
                        <div class="referrals_content__promocode__description" v-if="!referralTypeIsWeek">
                            Подари другу дополнительные 300 бонусов к первому заказу. А мы тебе начислим 500 бонусов, когда он оплатит заказ.
                        </div>
{{--                        <div class="referrals_content__promocode__description" v-else>--}}
{{--                            За каждого третьего получай неделю питания в подарок!--}}
{{--                        </div>--}}
                        <div class="referrals_content__promocode__article">
                            <div class="referrals_content__promocode__article__description">
                                <span>Ты можешь поделиться промокодом:</span>
                            </div>
                            <div class="referrals_content__promocode__article__code">
                                <span id="promoCodeValue">{{$user->affiliate_id}}</span>
                            </div>
                            <div class="referrals_content__promocode__article__copy">
                                <a href="javascript:void(0)" @click="copyClipboardPromoCode">
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.8427 4.31592H6.4743C5.29009 4.31592 4.31641 5.2896 4.31641 6.47381V20.8423C4.31641 22.0265 5.29009 23.0001 6.4743 23.0001H20.8427C22.027 23.0001 23.0006 22.0265 23.0006 20.8423V6.47381C22.9743 5.2896 22.027 4.31592 20.8427 4.31592ZM21.5533 20.8423C21.5533 21.237 21.2375 21.5528 20.8427 21.5528H6.4743C6.07957 21.5528 5.76378 21.237 5.76378 20.8423V6.47381C5.76378 6.07908 6.07957 5.76329 6.4743 5.76329H20.8427C21.2375 5.76329 21.5533 6.07908 21.5533 6.47381V20.8423Z"
                                            fill="#EB6300"/>
                                        <path
                                            d="M1.44737 16.5263V2.1579C1.44737 1.76316 1.76316 1.44737 2.1579 1.44737H16.5263C16.9211 1.44737 17.2369 1.76316 17.2369 2.1579V2.86842H18.6842V2.1579C18.6842 0.973685 17.7105 0 16.5263 0H2.1579C0.973685 0 0 0.973685 0 2.1579V16.5263C0 17.7105 0.973685 18.6842 2.1579 18.6842H2.86842V17.2369H2.1579C1.76316 17.2369 1.44737 16.9211 1.44737 16.5263Z"
                                            fill="#EB6300"/>
                                        <path
                                            d="M14.3685 10.0527H12.9475V12.9475H10.0527V14.3685H12.9475V17.237H14.3685V14.3685H17.237V12.9475H14.3685V10.0527Z"
                                            fill="#EB6300"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="referrals_content__promocode__description">
                            или можешь отправить ему эту ссылку:
                        </div>
                        <div class="referrals_content__promocode__copy_link">
                            <button @click="copyReferralLink" title="{{$user->getReferralLink()}}">Скопировать ссылку
                                для друга
                            </button>
                        </div>
                    </div>
                    <div class="referrals_content__more_week">
                        <div class="referrals_content__more_week__registered_friends">
                            <div>
                                <div class="referrals_content__more_week__registered_friends__header">
                                    Зарегистрировались
                                </div>
                                <div class="referrals_content__more_week__registered_friends__count">
                                    {{ \App\Models\User::where('referred_by', $user->affiliate_id)->count() }}
                                </div>
                            </div>
                            <div>
                                <div class="referrals_content__more_week__registered_friends__header">
                                    Воспользовались
                                </div>
                                <div class="referrals_content__more_week__registered_friends__count">
                                    @{{ userData.userActiveReferralsCount }}
                                </div>
                            </div>
                        </div>
                        <div class="referrals_content__more_week__submit_gift_a_week"
                             v-if="userData.userActiveReferralsCount >= ((userData.quantityOfGiftAWeek + 1) * 3)">
                            <button @click="submitGiftAWeekOrder">
                                <span>
                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.4 4.23853H12.684C13.1809 3.77696 13.4977 3.15394 13.578 2.48053C13.6324 1.91968 13.4709 1.35918 13.1264 0.913251C12.782 0.467323 12.2804 0.169522 11.724 0.080531C11.3558 -0.0160007 10.9695 -0.0205214 10.5991 0.0673663C10.2287 0.155254 9.8856 0.332854 9.6 0.584531C9.34577 0.830813 9.14197 1.12428 9 1.44853C8.85804 1.12428 8.65424 0.830813 8.4 0.584531C8.11496 0.331818 7.77212 0.153114 7.40172 0.0641745C7.03131 -0.0247651 6.64471 -0.0212081 6.276 0.0745314C5.71958 0.163522 5.21804 0.461323 4.87356 0.907251C4.52908 1.35318 4.36759 1.91368 4.422 2.47453C4.50093 3.15008 4.81786 3.77544 5.316 4.23853H0.6C0.44087 4.23853 0.288258 4.30174 0.175736 4.41427C0.0632142 4.52679 0 4.6794 0 4.83853V9.03853C0 9.19766 0.0632142 9.35027 0.175736 9.4628C0.288258 9.57532 0.44087 9.63853 0.6 9.63853H1.8V16.2385C1.8 16.7159 1.98964 17.1738 2.32721 17.5113C2.66477 17.8489 3.12261 18.0385 3.6 18.0385H14.4C14.8774 18.0385 15.3352 17.8489 15.6728 17.5113C16.0104 17.1738 16.2 16.7159 16.2 16.2385V9.63853H17.4C17.5591 9.63853 17.7117 9.57532 17.8243 9.4628C17.9368 9.35027 18 9.19766 18 9.03853V4.83853C18 4.6794 17.9368 4.52679 17.8243 4.41427C17.7117 4.30174 17.5591 4.23853 17.4 4.23853ZM10.422 1.46653C10.5158 1.38416 10.6253 1.32152 10.7438 1.28235C10.8624 1.24318 10.9876 1.22827 11.112 1.23853C11.2388 1.24027 11.3652 1.25231 11.49 1.27453C11.6235 1.28939 11.7528 1.33063 11.8702 1.39587C11.9877 1.4611 12.091 1.54903 12.1742 1.65454C12.2574 1.76005 12.3188 1.88104 12.3548 2.01048C12.3908 2.13992 12.4007 2.27522 12.384 2.40853C12.306 3.22453 11.448 4.10653 9.762 4.26253C9.738 3.38053 9.828 2.01853 10.422 1.46653ZM6.51 1.23853C6.63482 1.21631 6.76123 1.20427 6.888 1.20253C7.0141 1.19548 7.14031 1.21419 7.25893 1.25752C7.37756 1.30084 7.48612 1.36788 7.578 1.45453C8.178 2.00653 8.262 3.36853 8.238 4.22653C6.552 4.07053 5.694 3.18853 5.616 2.37253C5.59928 2.23922 5.60921 2.10392 5.64523 1.97448C5.68125 1.84504 5.74263 1.72405 5.82581 1.61854C5.90899 1.51303 6.01231 1.4251 6.12977 1.35987C6.24722 1.29463 6.37647 1.25339 6.51 1.23853ZM1.2 5.43853H8.4V8.43853H1.2V5.43853ZM3 16.2385V9.63853H8.4V16.8385H3.6C3.44087 16.8385 3.28826 16.7753 3.17574 16.6628C3.06321 16.5503 3 16.3977 3 16.2385ZM15 16.2385C15 16.3977 14.9368 16.5503 14.8243 16.6628C14.7117 16.7753 14.5591 16.8385 14.4 16.8385H9.6V9.63853H15V16.2385ZM16.8 8.43853H9.6V5.43853H16.8V8.43853Z"
                                        fill="#FFFFFF"/>
                                </svg>
                                </span>
                                <span>Оформить подарочную неделю</span>
                            </button>
                        </div>
                        <div class="referrals_content__more_week__info">
                            <div class="referrals_content__more_week__info__header">
                                Как получить 500 бонусов за каждого приглашенного друга?
                            </div>
                            <div class="referrals_content__more_week__info__description">
                                <div class="referrals_content__more_week__info__description__single">
                                    <div
                                        class="referrals_content__more_week__info__description__single__number">
                                        01.
                                    </div>
                                    <div
                                        class="referrals_content__more_week__info__description__single__text">
                                        Поделись кодом <span
                                            class="referrals_content__more_week__info__description__single__text__code"> {{ $user->affiliate_id }} </span>
                                        или ссылкой с друзьями, которые еще не делали заказ.
                                    </div>
                                </div>
                                <div class="referrals_content__more_week__info__description__single">
                                    <div
                                        class="referrals_content__more_week__info__description__single__number">
                                        02.
                                    </div>
                                    <div
                                        class="referrals_content__more_week__info__description__single__text">
                                        Использовав кодовое слово в поле для промокода, каждый <span>друг получит</span> дополнительные <span>300 бонусов</span>
                                        на счет.
                                    </div>
                                </div>
{{--                                <div class="referrals_content__more_week__info__description__single">--}}
{{--                                    <div--}}
{{--                                        class="referrals_content__more_week__info__description__single__number">--}}
{{--                                        03.--}}
{{--                                    </div>--}}
{{--                                    <div--}}
{{--                                        class="referrals_content__more_week__info__description__single__text">--}}
{{--                                        Как только 3 друга совершат покупку с кодовым словом, у вас появится возможность--}}
{{--                                        для оформления бесплатного рациона.--}}
{{--                                    </div>--}}
{{--                                </div>--}}
                            </div>
                            <div class="referrals_content__more_week__info__description_second">
                                Больше друзей - больше выгоды!
                            </div>
                        </div>
                    </div>
                </div>
                {{--                <h1>Test Referrals {{ \App\Models\User::where('referred_by', $user->affiliate_id)->count() }}</h1>--}}
                {{--                <h1>Test Referrals Active {{ count(\App\Helpers\AmoCrmHelper::getUserReferrals($user)) }}</h1>--}}
            </div>
        </div>
    </div>
</main>
