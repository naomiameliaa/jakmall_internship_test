<template>
    <div class="main-container">
        <section>
            <div class="section-header">
                <h1><span>Thank you</span></h1>
            </div>
            <div class="section-content">
                <div class="order_ID">
                    <b>Order ID : {{$parent.orderID}}</b>
                </div>
                <div class="delivery_detail">
                    Your order will be delivery
                    <span v-if="$parent.form.goSend_checked"> today with GO-SEND</span>
                    <span v-if="$parent.form.jne_checked"> 1-2 day with JNE</span>
                    <span v-if="$parent.form.personalCourier_checked"> next day with Personal Courier</span>
                </div>
                <div class="button_homePage">
                    <a href="/">
                        &larr; Go to HomePage
                    </a>
                </div>
            </div>
        </section>
        <aside>
            <div class="aside-header">
                <h1>Summary</h1>
                <p id="p">10 items purchased</p>
                <div class="est_detail" v-if="$parent.form.goSend_checked">
                   Delivery estimation
                   <br><br>
                   <b>today by GO-SEND</b>
                </div>
                <div class="est_detail" v-if="$parent.form.jne_checked">
                    Delivery estimation
                    <br><br>
                    <b>2 days by JNE</b>
                </div>
                <div class="est_detail" v-if="$parent.form.personal_courier_checked">
                    Delivery estimation
                    <br><br>
                    <b>1 day by Personal Courier</b>
                </div>
                <div class="pay_with" v-if="$parent.form.eWallet_checked">
                    Payment method
                    <br><br>
                    <b>E-Wallet</b>
                </div>
                <div class="pay_with" v-if="$parent.form.bankTransfer_checked">
                    Payment method
                    <br><br>
                    <b>Bank Transfer</b>
                </div>
                <div class="pay_with" v-if="$parent.form.virtualAcc_checked">
                    Payment method
                    <br><br>
                    <b>Virtual Account </b>
                </div>
            </div>
            <div class="aside-content">
                <div class="items">
                    <div class="item">
                        <div class="item-name">Cost of goods</div>
                        <div class="item-price">{{$parent.cost_of_goods}}</div>
                    </div>
                    <div class="item" v-if="$parent.form.dropshipper_checked">
                        <div class="item-name">Dropshipping Fee</div>
                        <div class="item-price">{{$parent.dropshipping_fee}}</div>
                    </div>
                    <div class="item" v-if="$parent.form.goSend_checked">
                       <div class="item-name">
                           <b>GO-SEND</b> Shipment
                       </div>
                       <div class="item-price">{{$parent.goSend_fee}}</div>
                    </div>
                    <div class="item" v-if="$parent.form.jne_checked">
                        <div class="item-name">
                            <b>JNE</b> Shipment
                        </div>
                        <div class="item-price">{{$parent.jne_fee}}</div>
                    </div>
                    <div class="item" v-if="$parent.form.personal_courier_checked">
                       <div class="item-name">
                           <b>Personal Courier</b> Shipment
                       </div>
                       <div class="item-price">{{$parent.personalCourier_fee}}</div>
                    </div>
                </div>
                <div class="total">
                    <h1>Total</h1>
                    <h1 class="total-price">{{$parent.total}}</h1>
                </div>
            </div>
        </aside>
    </div>
</template>
<script src="./Finish.js"></script>
<style scoped src="@/assets/style_finish.css"></style>