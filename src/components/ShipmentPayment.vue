<template>
    <div class="main-container">
        <section>
            <a href="">
                &larr; Back to cart
            </a>
            <div class="section-header">
                <h1><span>Shipment</span></h1>
            </div>
            <div class="section-header">
                <form class="row" autocomplete="false">
                    <div class="form-group">
                        <div class="form-group-box">
                            <label for="go-send">
                                GO-SEND <br> 15,000
                            </label>
                            <input type="checkbox" id="go-send" v-model="$parent.form.goSend_checked">
                            <label for="go-send" class="shipment-label"></label>
                        </div>
                    </div>
                   <div class="form-group">
                       <div class="form-group-box">
                            <label for="jne">
                                JNE <br> 9,000
                            </label>
                            <input type="checkbox" id="jne" v-model="$parent.form.jne_checked">
                            <label for="jne" class="shipment-label"></label>
                        </div>
                   </div>
                   <div class="form-group">
                       <div class="form-group-box">
                            <label for="personal-courier">
                                Personal Courier <br> 20,000
                            </label>
                            <input type="checkbox" id="personal-courier" v-model="$parent.form.personal_courier_checked">
                            <label for="personal-courier" class="shipment-label"></label>
                        </div>
                   </div>
               </form>
            </div>
            <div class="section-header">
                <h1><span>Payment</span></h1>
            </div>
            <div class="section-header">
                <form class="row" autocomplete="false">
                    <div class="form-group">
                        <div class="form-group-box">
                            <label for="e-wallet">
                                e-Wallet
                            </label>
                            <input type="checkbox" id="e-wallet" v-model="$parent.form.eWallet_checked">
                            <label for="e-wallet" class="shipment-label"></label>
                        </div>
                    </div>
                   <div class="form-group">
                       <div class="form-group-box">
                            <label for="bank-transfer">
                                Bank Transfer
                            </label>
                            <input type="checkbox" id="bank-transfer" v-model="$parent.form.bankTransfer_checked">
                            <label for="bank-transfer" class="shipment-label"></label>
                        </div>
                   </div>
                   <div class="form-group">
                       <div class="form-group-box">
                            <label for="virtual-acc">
                                Virtual Account
                            </label>
                            <input type="checkbox" id="virtual-acc" v-model="$parent.form.virtualAcc_checked">
                            <label for="virtual-acc" class="shipment-label"></label>
                        </div>
                   </div>
               </form>
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
                <div class="aside-button">
                    <div class="button_payment" v-if="$parent.form.eWallet_checked">
                        <button @click="$router.push('/3')">Pay with e-Wallet</button>
                    </div>
                    <div class="button_payment" v-if="$parent.form.bankTransfer_checked">
                        <button @click="$router.push('/3')">Pay with Bank Transfer</button>
                    </div>
                    <div class="button_payment" v-if="$parent.form.virtualAcc_checked">
                        <button @click="$router.push('/3')">Pay with Virtual Account</button>
                    </div>
                </div>
            </div>
        </aside>
    </div>
</template>
<script src="./ShipmentPayment.js"></script>
<style scoped src="@/assets/style_shipment.css"></style>