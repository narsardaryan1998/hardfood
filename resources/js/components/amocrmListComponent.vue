<template>
    <div id="app">
        <div v-if="preloader" class="preloader">
            <clip-loader :loading="true" color="#000000" size="80px"></clip-loader>
        </div>
        <div class="row">
            <div class="col-1">
                <button class="btn btn-dark" onclick="history.back()">Назад</button>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-md-2 col-6">
                <a href="/maxoptralistdate" class="btn btn-warning w-100">Все доставки</a>
            </div>
            <div class="col-md-2 col-6">
                <a href="/amocrm/delivery/maxoptra?token=90fasdf67asdfhjajktnw234pon423j4po24342n432ln432"
                   class="btn btn-danger w-100">Наклейки</a>
            </div>
            <div class="col-md-2 col-6 mt-2 mt-md-0">
                <a href="/maxoptralistdateprod" class="btn btn-success w-100">Производство</a>
            </div>
            <div class="col-md-2 col-6 mt-2 mt-md-0">
                <a href="/maxoptralistdateexcludes" class="btn btn-dark w-100">Исключения</a>
            </div>
        </div>
        <div class="deliverys_table_amo">
            <div class="client_info">
                <div class="row">
                    <div class="col-md-2 col-12 mt-2 mt-md-0">
                      <span>
                          <b>Имя клиента:</b>
                          {{ clientName }}
                        </span>
                    </div>
                    <div class="col-md-2 col-12 mt-2 mt-md-0">
                        <span>
                          <b>Телефон:</b>
                          {{ clientPhone }} {{ clientPhoneAdditional ? ' | ' + clientPhoneAdditional : '' }}
                        </span>
                    </div>
                    <div class="col-md-8 col-12 d-flex flex-column mt-2 mt-md-0">
                        <div>
                        <span>
                            <b>Адрес доставки и комментарий:</b>
                            {{ selectedAddress === 2 ? clientAddressSecond : clientAddress }}
                        </span>
                        </div>
                        <div>
                        <span>
                            <b>Фасовка:</b>
                            {{ clientExclude }}
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" style="overflow-x: scroll">
                <div class="col-12">
                    <table class="table table-striped table-hover" width="100%">
                        <thead class="thead-dark">
                        <tr>
                            <th scope="col">maxoptra ID</th>
                            <th scope="col">Производство</th>
                            <th scope="col">Дата доставки</th>
                            <th scope="col"></th>
                            <th scope="col">Часы доставки</th>
                            <th scope="col">Адрес доставки</th>
                            <th scope="col">Выбрать адрес</th>
                            <th scope="col">Оплата</th>
                            <th scope="col">Интервал с/до</th>
                            <th scope="col">Пакеты</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in clearDeliverys" :key="index">
                            <td class="maxoptraid_td">{{ item.maxoptraId = leadid + '-' + (index + 1) }}</td>
                            <td class="date_control_button">
                                <div class="d-flex justify-content-between">
                                    <div style="width: 75%">
                                        <input
                                            class="form-control"
                                            type="date"
                                            :class="{inputDateError: inputDateError(item.deliveryDate)}"
                                            v-model="item.deliveryDate"
                                        />
                                    </div>
                                    <div style="width: 20%">
                                        <button @click="freez(index)">
                                            <i class="fas fa-history"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <input class="form-control" disabled type="date" v-model="item.deliveryDayData"/>
                            </td>
                            <td>{{ nameOfday(item.deliveryDayData) }}</td>
                            <td class="change_interval">
                                <div class="row">
                                    <div class="col-md-6">
                                        <input
                                            type="radio"
                                            v-model="item.deliveryClientInterval"
                                            :name="'interval'+index"
                                            :id="'pm'+index"
                                            value="pm"
                                            @change="changeInterval(item)"
                                        />
                                        <label :for="'pm'+index">Вечер</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input
                                            type="radio"
                                            v-model="item.deliveryClientInterval"
                                            :name="'interval'+index"
                                            :id="'am'+index"
                                            value="am"
                                            @change="changeInterval(item)"
                                        />
                                        <label :for="'am'+index">Утро</label>
                                    </div>
                                </div>
                            </td>
                            <td>
                        <textarea class="form-control" type="text"
                                  v-model="item.selectedAddress == 2 ? item.clientAddressSecond : item.clientAddress"/>
                            </td>
                            <td>
                                <select
                                    v-model="item.selectedAddress"
                                    class="form-control"
                                    name="select_address"
                                    id="select_address">
                                    <option value="1">{{ 'Адрес 1' }}</option>
                                    <option value="2">{{ 'Адрес 2' }}</option>
                                </select>
                            </td>
                            <td>
                                <input class="form-control" style="width: 100px;" type="text" v-model="item.pay"/>
                            </td>
                            <td>
                                <div class="row" v-if="item.deliveryClientInterval == 'pm'">
                                    <div class="col-md-5">
                                        <select
                                            class="form-control change_time"
                                            name="hours_delivery_from"
                                            v-model="item.hours_delivery_from"
                                            id="hours_delivery_from"
                                            required>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                        </select>
                                    </div>
                                    <div class="col-md-5">
                                        <select
                                            class="form-control change_time"
                                            v-if="item.deliveryClientInterval == 'pm'"
                                            name="hours_delivery_to"
                                            v-model="item.hours_delivery_to"
                                            id="hours_delivery_to"
                                            required
                                        >
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-5">
                                        <select
                                            class="form-control change_time"
                                            v-if="item.deliveryClientInterval == 'am'"
                                            name="hours_delivery_from"
                                            v-model="item.hours_delivery_from"
                                            id="hours_delivery_from"
                                            required
                                        >
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                    </div>
                                    <div class="col-md-5">
                                        <select
                                            class="form-control change_time"
                                            v-if="item.deliveryClientInterval == 'am'"
                                            name="hours_delivery_to"
                                            v-model="item.hours_delivery_to"
                                            id="hours_delivery_to"
                                            required
                                        >
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                        </select>
                                    </div>
                                </div>
                            </td>
                            <td>{{ item.items }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button class="btn btn-danger" @click="delLead()">Удалить</button>
            <button class="btn btn-warning" @click="retry()">Распределить</button>
            <button class="btn btn-success" @click="save()">Сохранить</button>
        </div>
    </div>
</template>

<script>
const moment = require("moment");
require("moment/locale/ru");
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
    props: ["amocrmData", "savedDeliverys"],
    data() {
        return {
            isShortDay: true,
            deliverys: [],
            leadid: "",
            firstDate: "",
            paymentMethod: "",
            isPayed: "",
            cart: {},
            deliveryClientInterval: "",
            clientAddress: "",
            selectedAddress: "",
            clientAddressSecond: "",
            clientName: "",
            clientPhone: "",
            clientPhoneAdditional: "",
            clientExclude: "",
            preloader: false
        };
    },
    components: {
        ClipLoader
    },
    watch: {},
    computed: {
        clearDeliverys() {
            return this.deliverys.filter(element => {
                if (
                    element.s5 ||
                    element.m5 ||
                    element.l5 ||
                    element.s7 ||
                    element.m7 ||
                    element.l7 ||
                    element.p5 ||
                    element.p7
                ) {
                    return true;
                }
            });
        }
    },
    mounted() {
        if (this.amocrmData) {
            this.preloader = true;
            this.leadid = this.amocrmData.leadid;
            this.firstDate = this.amocrmData.firstdate;
            this.cart = this.amocrmData.cart;
            this.deliveryClientInterval = this.amocrmData.deliveryclientinterval;
            this.clientAddress = this.amocrmData.clientaddress;
            this.paymentMethod = this.amocrmData.paymentMethod;
            this.isPayed = this.amocrmData.isPayed;
            this.clientAddressSecond = this.amocrmData.clientAddressSecond;
            this.selectedAddress = this.amocrmData.selectedAddress;
            this.clientName = this.amocrmData.clientname;
            this.clientPhone = this.amocrmData.clientphone;
            this.clientPhoneAdditional = this.amocrmData.clientPhoneAdditional;
            this.clientExclude = this.amocrmData.clientExclude;
            this.preloader = false;
        }
        var deliveryDate = this.firstDate;

        if (this.savedDeliverys != 0) {
            this.preloader = true;
            this.savedDeliverys.forEach(element => {
                this.deliverys.push({
                    amocrmId: element.amocrm_id,
                    deliveryDate: element.delivery_prod_date,
                    s5: element.s5,
                    m5: element.m5,
                    l5: element.l5,
                    s7: element.s7,
                    m7: element.m7,
                    l7: element.l7,
                    p5: element.p5,
                    p7: element.p7,
                    items: element.items,
                    deliveryClientInterval: element.deliveryClientInterval,
                    clientPhone: this.clientPhone,
                    clientPhoneAdditional: this.clientPhoneAdditional,
                    clientName: element.client,
                    clientAddress: this.clientAddress,
                    clientAddressSecond: this.clientAddressSecond,
                    clientExclude: this.clientExclude,
                    selectedAddress: element.selected_address,
                    clientAddressWithExclusion: this.selectedAddress === 2 ? this.clientAddressSecond : this.clientAddress,
                    pay: element.pay,
                    deliveryDayData: element.delivery_date,
                    maxoptraId: element.maxoptra_id,
                    hours_delivery_from: element.from,
                    hours_delivery_to: element.to
                });
            });
            this.preloader = false;
        }

        for (let index = 0; index < 112; index++) {
            let currentDay = moment(deliveryDate).day();
            let loopDay = currentDay + index;
            if (
                moment(moment(deliveryDate).day(loopDay)).day() == 3 ||
                moment(moment(deliveryDate).day(loopDay)).day() == 5 ||
                moment(moment(deliveryDate).day(loopDay)).day() == 0
            ) {
                this.deliverys.push({
                    amocrmId: this.leadid,
                    deliveryDate: moment(deliveryDate)
                        .day(loopDay)
                        .format("YYYY-MM-DD"),
                    s5: 0,
                    m5: 0,
                    l5: 0,
                    s7: 0,
                    m7: 0,
                    l7: 0,
                    p5: 0,
                    p7: 0,
                    deliveryClientInterval: this.deliveryClientInterval,
                    clientPhone: this.clientPhone,
                    clientPhoneAdditional: this.clientPhoneAdditional,
                    clientName: this.clientName,
                    clientAddress: this.clientAddress,
                    clientAddressSecond: this.clientAddressSecond,
                    clientExclude: this.clientExclude,
                    selectedAddress: this.selectedAddress,
                    clientAddressWithExclusion: this.selectedAddress === 2 ? this.clientAddressSecond : this.clientAddress,
                    pay: this.pay ? this.pay : "",
                    deliveryDayData:
                        this.deliveryClientInterval == "am"
                            ? moment(deliveryDate)
                                .day(loopDay + 1)
                                .format("YYYY-MM-DD")
                            : moment(deliveryDate)
                                .day(loopDay)
                                .format("YYYY-MM-DD"),
                    hours_delivery_from: this.deliveryClientInterval == "am" ? "9" : "18",
                    hours_delivery_to: this.deliveryClientInterval == "am" ? "13" : "23"
                });
            }
        }
    },
    methods: {
        inputDateError(date) {
            if (
                moment(date).day() == 3 ||
                moment(date).day() == 5 ||
                moment(date).day() == 0
            ) {
                return false;
            } else {
                return true;
            }
        },
        nameOfday(item) {
            return moment(item).format("dd");
        },
        delLead() {
            this.preloader = true;
            axios({
                method: "POST",
                url: "/deliverysdelete",
                header: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                },
                params: {
                    lead_id: this.leadid
                }
            }).then(response => {
                this.preloader = false;
            });
        },
        save() {
            this.preloader = true;
            axios({
                method: "POST",
                url: "/deliverys",
                header: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                },
                data: {
                    deliverys: this.clearDeliverys,
                    isPayed: this.isPayed,
                    paymentMethod: this.paymentMethod,
                }
            }).then(response => {
                this.preloader = false;
            });
        },
        changeInterval(index) {
            index.deliveryClientInterval == "am"
                ? (index.deliveryDayData = moment(index.deliveryDate, "YYYY-MM-DD").add(1, 'days').format("YYYY-MM-DD"))
                : (index.deliveryDayData = index.deliveryDate);
        },
        retry() {
            this.deliverys.forEach(item => {
                item.s5 = 0;
                item.m5 = 0;
                item.l5 = 0;
                item.s7 = 0;
                item.m7 = 0;
                item.l7 = 0;
                item.p5 = 0;
                item.p7 = 0;
            });

            let s5parse = this.cart.s5.split("/");
            let m5parse = this.cart.m5.split("/");
            let l5parse = this.cart.l5.split("/");
            let s7parse = this.cart.s7.split("/");
            let m7parse = this.cart.m7.split("/");
            let l7parse = this.cart.l7.split("/");
            let p5parse = this.cart.p5.split("/");
            let p7parse = this.cart.p7.split("/");

            s5parse.forEach(element => {
                element = element * 2;
                for (let index = 0; element != 0; index++) {
                    if (
                        moment(this.deliverys[index].deliveryDate).day() == 0 ||
                        moment(this.deliverys[index].deliveryDate).day() == 3
                    ) {
                        this.isShortDay = true;
                        this.deliverys[index].s5++;
                        element = element - 1;
                    }
                }
            });
            m5parse.forEach(element => {
                element = element * 2;
                for (let index = 0; element != 0; index++) {
                    if (
                        moment(this.deliverys[index].deliveryDate).day() == 0 ||
                        moment(this.deliverys[index].deliveryDate).day() == 3
                    ) {
                        this.isShortDay = true;
                        this.deliverys[index].m5++;
                        element = element - 1;
                    }
                }
            });
            l5parse.forEach(element => {
                element = element * 2;
                for (let index = 0; element != 0; index++) {
                    if (
                        moment(this.deliverys[index].deliveryDate).day() == 0 ||
                        moment(this.deliverys[index].deliveryDate).day() == 3
                    ) {
                        this.isShortDay = true;
                        this.deliverys[index].l5++;
                        element = element - 1;
                    }
                }
            });
            s7parse.forEach(element => {
                element = element * 3;
                for (let index = 0; element != 0; index++) {
                    if (
                        moment(this.deliverys[index].deliveryDate).day() == 3 ||
                        moment(this.deliverys[index].deliveryDate).day() == 5 ||
                        moment(this.deliverys[index].deliveryDate).day() == 0
                    ) {
                        this.isShortDay = false;
                        this.deliverys[index].s7++;
                        element = element - 1;
                    }
                }
            });
            m7parse.forEach(element => {
                element = element * 3;
                for (let index = 0; element != 0; index++) {
                    if (
                        moment(this.deliverys[index].deliveryDate).day() == 3 ||
                        moment(this.deliverys[index].deliveryDate).day() == 5 ||
                        moment(this.deliverys[index].deliveryDate).day() == 0
                    ) {
                        this.isShortDay = false;
                        console.log(this.deliverys[index]);
                        this.deliverys[index].m7++;
                        element = element - 1;
                    }
                }
            });
            l7parse.forEach(element => {
                element = element * 3;
                for (let index = 0; element != 0; index++) {
                    if (
                        moment(this.deliverys[index].deliveryDate).day() == 3 ||
                        moment(this.deliverys[index].deliveryDate).day() == 5 ||
                        moment(this.deliverys[index].deliveryDate).day() == 0
                    ) {
                        this.isShortDay = false;
                        this.deliverys[index].l7++;
                        element = element - 1;
                    }
                }
            });
            p5parse.forEach(element => {
                element = element * 2;
                for (let index = 0; element != 0; index++) {
                    if (
                        moment(this.deliverys[index].deliveryDate).day() == 0 ||
                        moment(this.deliverys[index].deliveryDate).day() == 3
                    ) {
                        this.isShortDay = true;
                        this.deliverys[index].p5++;
                        element = element - 1;
                    }
                }
            });
            p7parse.forEach(element => {
                element = element * 3;
                for (let index = 0; element != 0; index++) {
                    if (
                        moment(this.deliverys[index].deliveryDate).day() == 3 ||
                        moment(this.deliverys[index].deliveryDate).day() == 5 ||
                        moment(this.deliverys[index].deliveryDate).day() == 0
                    ) {
                        this.isShortDay = false;
                        this.deliverys[index].p7++;
                        element = element - 1;
                    }
                }
            });
        },

        freez(index) {
            for (let i = index + 1; i < this.deliverys.length; i++) {
                this.deliverys.splice(i, this.deliverys.length);
            }
        }
    }
};
</script>

<style lang="sass" scoped>
#app
    padding: 20px

.preloader
    top: 0
    position: fixed
    width: 100vw
    height: 100vh
    z-index: 9999999
    background: rgba(#fff, .7)
    display: flex
    align-items: center
    justify-content: center
    transition: 0.25s

.maxoptraid_td
    width: 110px

.change_time
    width: 65px

.change_interval
    .col-md-6
        position: relative

        span
            font-size: 13px

        p
            font-size: 12px
            margin: 0
            text-align: center
            white-space: nowrap
            border-bottom: 2px solid #F9F5F2

        input
            display: none

            &:checked ~ label
                background-color: #2a9055
                color: #fff

            &:checked ~ p
                border-bottom: 2px solid #2a9055

        label
            width: 60px
            padding: 7px
            text-align: center
            display: block
            border-radius: 5px
            transition: .25s
            position: relative
            margin-bottom: 0

            &:hover
                cursor: pointer
                background-color: #ddd

            i
                margin-right: 10px

            small
                position: absolute
                top: -12px
                right: 0px
                color: red

.date_control_button
    position: relative

    input
        position: relative

        &.inputDateError
            border: 2px solid red

    button
        background: transparent
        border: none
        color: #38c172
        transition: 0.25s
        width: 100%
        height: 100%
        border-radius: 50%

        &:hover
            background: #38c172
            color: #fff

.deliverys_table_amo
    margin-top: 30px

    .client_info
        margin-bottom: 10px

        span
            margin-right: 30px

.table_deliverys
    tr
        td
            padding: 5px 10px

        &:nth-child(odd)
            background-color: #ddd

</style>
