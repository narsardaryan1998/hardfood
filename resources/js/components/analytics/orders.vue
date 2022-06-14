<template>
    <div>
        <div v-if="preloader" class="preloader">
            <clip-loader :loading="true" color="#000000" size="80px"></clip-loader>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead class="table-dark">
                        <tr>
                            <td colspan="2">
                                Скачать csv файлы
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                Клиенты, у кого нет заказов сейчас
                            </td>
                            <td>
                                <button class="btn btn-success" type="submit"
                                        @click="$refs.downloadCustomerNumbersWhoHaveNotOrders.submit()">Скачать
                                </button>
                                <form enctype="multipart/form-data" ref="downloadCustomerNumbersWhoHaveNotOrders" type="get"
                                      action="/api/download-customer-numbers-without-order">
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Клиенты, у кого были заказы, но в данный момент нет
                            </td>
                            <td>
                                <button class="btn btn-success" type="submit"
                                        @click="$refs.whoHadOrdersButNorCurrently.submit()">Скачать
                                </button>
                                <form enctype="multipart/form-data" ref="whoHadOrdersButNorCurrently" type="get"
                                      action="/api/download-customer-numbers-who-had-orders-but-not-currently">
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Майлы пользователя
                            </td>
                            <td>
                                <button class="btn btn-success" type="submit"
                                        @click="$refs.downloadCustomerEmails.submit()">Скачать
                                </button>
                                <form enctype="multipart/form-data" ref="downloadCustomerEmails" type="get"
                                      action="/api/download-customer-emails">
                                </form>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <h1>Аналитика / Заказы</h1>
        <div class="row">
            <div class="col-2">
                <input @change="filtration" v-model="filter.date" class="form-control w-100" type="date"
                       name="datelist">
            </div>
        </div>
        <div id="chart">
            <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
        </div>
        <div class="row">
            <div class="mt-4 col-md-12">
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead class="table-dark">
                        <tr>
                            <th scope="col" style="width: 20%"></th>
                            <th scope="col">Пн</th>
                            <th scope="col">Вт</th>
                            <th scope="col">Ср</th>
                            <th scope="col">Чт</th>
                            <th scope="col">Пт</th>
                            <th scope="col">Сб</th>
                            <th scope="col">Вс</th>
                            <th scope="col">Итого</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="info in ordersData">
                            <td>{{ info.name }}</td>
                            <td v-for="infoByDat in info.data">{{ infoByDat }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

const moment = require("moment");
require("moment/locale/ru");

export default {
    name: "analyticsOrders",
    components: {
        apexchart: VueApexCharts,
        ClipLoader
    },
    data() {
        return {
            preloader: false,
            filter: {
                date: moment().format("YYYY-MM-DD")
            },
            ordersData: [
                {
                    name: 'Всего лидов',
                    data: [0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: 'Всего оформлено',
                    data: [0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: '- новые клиенты',
                    data: [0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: '- повторные заказы клиентов',
                    data: [0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: 'Среднее кол-во дней',
                    data: [0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: 'Средний чек',
                    data: [0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: 'Сумма заказов за день',
                    data: [0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: '- оплачен картой',
                    data: [0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: '- оплачен наличными',
                    data: [0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: '- не оплачены',
                    data: [0, 0, 0, 0, 0, 0, 0, 0]
                },
            ],
            series: [
                {
                    name: 'Всего лидов',
                    data: [0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: 'Всего оформлено',
                    data: [0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: '- новые клиенты',
                    data: [0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: '- повторные заказы клиентов',
                    data: [0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: 'Среднее кол-во дней',
                    data: [0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: 'Средний чек',
                    data: [0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: 'Сумма заказов за день',
                    data: [0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: '- оплачен картой',
                    data: [0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: '- оплачен наличными',
                    data: [0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: '- не оплачены',
                    data: [0, 0, 0, 0, 0, 0, 0]
                },
            ],
            chartOptions: {
                chart: {
                    height: 350,
                    type: 'area'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    categories: ['Всего лидов', 'Всего оформлено', '- новые клиенты', '- повторные заказы клиентов',
                        'Среднее кол-во дней', 'Средний чек', 'Сумма заказов за день', '- оплачен картой', '- оплачен наличными', '- не оплачены']
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy'
                    },
                },
            },
        }
    },
    created() {
        this.filtration();
    },
    methods: {
        filtration() {
            this.preloader = true;
            axios.post('/admin/analytics/orders', {
                date: this.filter.date,
            }, {
                header: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                },
            }).then(response => {
                this.ordersData = response.data.tableArray
                this.series = response.data.chartArray
                this.preloader = false;
            })
        },
    }
}
</script>

<style scoped>
.preloader {
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 9999999;
    background: #efefefb5;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.25s;
}

.table-hover > thead > tr:hover {
    background-color: #343A40; /* Assuming you want the hover color to be white */
}

</style>
