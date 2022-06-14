<template>
    <div>
        <div class="row mt-2 ml-1">
            <div class="col-md-1">
                <button class="btn btn-dark" onclick="history.back()">Назад</button>
            </div>
        </div>
        <div class="container">
            <h2>Список исключений</h2>
            <div class="row">
                <div class="col-md-4">
                    <input class="form-control" type="date" v-model="selectDate" />
                </div>
                <div class="col-md-2" v-if="forPrint.length > 0">
                    <button class="btn btn-success" @click="goToPrint">Напечатать</button>
                </div>
                <div class="col-md-2" v-if="forPrint.length > 0">
                    <json-excel :data="dataForExcel">Выгрузить в еxcel</json-excel>
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped table-hover" width="100%">
                        <thead class="thead-dark">
                        <tr>
                            <th>
                                <input type="checkbox" v-model="selectAll" @click="select" />
                            </th>
                            <th>Lead</th>
                            <th>Примечание</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item,index) in items" :key="index">
                            <td>
                                <input type="checkbox" :id="index" v-model="forPrint" :value="item" />
                            </td>
                            <td>{{item.lead}}</td>
                            <td>{{item.exclude}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const moment = require("moment");
    require("moment/locale/ru");
    const convert = require("xml-js");

    var JsBarcode = require("jsbarcode");
    const { createCanvas } = require("canvas");
    import JsonExcel from 'vue-json-excel'

    export default {
        components: {
            JsonExcel
        },
        data() {
            return {
                items: [],
                responseDeliverys: "",
                token: "",
                selectDate: "",
                activeDeliverys: [],
                orders: "",
                forPrint: [],
                selectAll: false,
                dataForExcel: [],
            };
        },
        watch: {
            selectDate(e) {
                let date = moment(e).format("YYYY-MM-DD");
                self = this;
                this.activeDeliverys = [];
                fetch("/maxoptralistdateexclude?datelist=" + date)
                    .then(response => {
                        return response.json();
                    })
                    .then(text => {
                        this.items = text.items;
                        console.log(this.items);
                    })
            },
            forPrint(){
                this.dataForExcel = [];
                this.forPrint.forEach(element => {
                    this.dataForExcel.push({
                        Lead: element.lead,
                        Исключение: element.exclude,
                        Примечание:""
                    })
                })
            }
        },
        computed: {},
        mounted() {
            self = this;
            fetch("/maxoptraauth")
                .then(response => {
                    return response.text();
                })
                .then(token => {
                    self.token = token;
                })
                .catch(alert => {
                    console.log(alert);
                });
        },
        methods: {
            goToPrint() {
                var docInfo = {
                    content: [
                        {
                            text: this.selectDate,
                            fontSize: 200,
                            pageBreak: "after",
                            alignment: "center",
                            pageOrientation: "landscape"
                        }
                    ],
                    pageMargins: [10, 100, 10, 10],
                    pageSize: {
                        width: 2100,
                        height: 1000
                    }
                };

                this.forPrint.forEach(element => {
                    if (element.lead != null)
                    {
                        docInfo.content.push(
                            {
                                text: element.lead,
                                fontSize: 180,
                                alignment: "center"
                            },
                            {
                                alignment: "center",
                                columns: [
                                    {
                                        fontSize: 160,
                                        text: element.client,
                                        alignment: "center"
                                    }
                                ]
                            },
                            {
                                columns: [
                                    {
                                        fontSize: 200,
                                        text: element.packet,
                                        alignment: "center"
                                    }],
                                pageBreak: "after"
                            }
                        );
                    }
                });

                pdfMake.createPdf(docInfo).download("otbabuliBarcode.pdf");
            },
            select() {
                this.forPrint = [];
                if (!this.selectAll) {
                    for (let i in this.items) {
                        this.forPrint.push(this.items[i]);
                    }
                }
            },
            getClientName(id) {
                this.orders.forEach(elem => {
                    if (elem._attributes.id === id) {
                        return elem._attributes.contactPerson;
                    }
                });
            },
            getComment(item) {
                if (item.indexOf("!!!") + 1 != 0) {
                    return "!!!*";
                }
            },
            currentDel(venicles) {
                let deliverys = this.activeDeliverys;
                if (venicles.length) {
                    venicles.forEach(element => {
                        let newLocations = element.run.location.filter(function(i) {
                            return i._attributes.locationType == "DROP";
                        });

                        newLocations.forEach(address => {
                            if (address.order.length) {
                                address.order.forEach(order => {
                                    this.activeDeliverys.push({
                                        driverName: element._attributes.driverName,
                                        driverNumber: address._attributes.number,
                                        orderId: order._attributes.orderId,
                                        address: address._attributes.address,
                                        orderReference: order._attributes.orderReference,
                                        packages: order._attributes.packages,
                                        comment: ""
                                    });
                                });
                            } else {
                                this.activeDeliverys.push({
                                    driverName: element._attributes.driverName,
                                    driverNumber: address._attributes.number,
                                    orderId: address.order._attributes.orderId,
                                    address: address._attributes.address,
                                    orderReference: address.order._attributes.orderReference,
                                    packages: address.order._attributes.packages,
                                    comment: ""
                                });
                            }
                        });
                    });
                } else {
                    let newLocations = venicles.run.location.filter(function(i) {
                        return i._attributes.locationType == "DROP";
                    });
                    newLocations.forEach(address => {
                        this.activeDeliverys.push({
                            driverName: venicles._attributes.driverName,
                            driverNumber: address._attributes.number,
                            orderId: address.order._attributes.orderId,
                            date: moment(address._attributes.planArrivalTime).format(
                                "DD.MM.YYYY"
                            ),
                            address: address._attributes.address,
                            orderReference: address.order._attributes.orderReference,
                            packages: address.order._attributes.packages,
                            comment: ""
                        });
                    });
                }
            }
        }
    };
</script>

<style lang="sass" scoped>
    tr
        page-break-after: always
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
                    &:checked~label
                        background-color: #2a9055
                        color: #fff
                    &:checked~p
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
            button
                position: absolute
                right: 0
                top: 0
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
            padding: 10px
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
