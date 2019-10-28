<template>
   <div class="main-container">
       <section>
           <a href="">
                &larr; Back to cart
            </a>
           <div class="section-header">
               <h1><span>Delivery details</span></h1>
               <div class="dropshipper-checkbox">
                   <input type="checkbox" id="dropshipper-checkbox" v-model="$parent.form.dropshipper_checked">
                   <label for="dropshipper-checkbox" class="dropshipper-checkbox-label"></label>
                   <label for="dropshipper-checkbox">Send as dropshipper</label>
               </div>
           </div>
           <div class="section-content">
               <form class="row" autocomplete="false">
                    <div class="form-group">
                        <div class="form-group-box" :class="{'form-group-success': $parent.form.email.valid == 1, '$parent.form-group-error': $parent.form.email.valid == 0}">
                            <input type="email" id="email" v-model="$parent.form.email.value">
                            <label for="email" class="floating-label">Email</label>
                        </div>
                    </div>
                   <div class="form-group" v-if="$parent.form.dropshipper_checked">
                       <div class="form-group-box" :class="{'form-group-success': $parent.form.dropshipper_name.valid == 1, 'form-group-error': $parent.form.dropshipper_name.valid == 0}">
                           <input type="text" id="dropshipper-name">
                           <label for="dropshipper-name" class="floating-label">Dropshipper name</label>
                       </div>
                   </div>
                   <div class="form-group">
                       <div class="form-group-box" :class="{'form-group-success': $parent.form.phone_number.valid == 1, 'form-group-error': $parent.form.phone_number.valid == 0}">
                           <input type="text" id="phone-number" v-model="$parent.form.phone_number.value">
                           <label for="phone-number" class="floating-label">Phone Number</label>
                       </div>
                   </div>
                   <div class="form-group" v-if="$parent.form.dropshipper_checked">
                       <div class="form-group-box" :class="{'form-group-success': $parent.form.dropshipper_phone_number.valid == 1, 'form-group-error': $parent.form.dropshipper_phone_number.valid == 0}">
                           <input type="text" id="dropshipper-phone-number" v-model="$parent.form.dropshipper_phone_number.value">
                           <label for="dropshipper-phone-number" class="floating-label">Dropshipper phone number</label>
                       </div>
                   </div>
                   <div class="form-group">
                       <div class="form-group-box" :class="{'form-group-success': $parent.form.delivery_address.valid == 1, 'form-group-error': $parent.form.delivery_address.valid == 0}">
                           <textarea id="delivery-address" v-model="$parent.form.delivery_address.value"></textarea>
                           <label for="delivery-address" class="floating-label">Delivery Address</label>
                       </div>
                   </div>
               </form>
           </div>
       </section>
       <aside>
           <div class="aside-header">
               <h1>Summary</h1>
               <p>10 items purchased</p>
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
               </div>
               <div class="total">
                   <h1>Total</h1>
                   <h1 class="total-price">{{$parent.total}}</h1>
               </div>
               <div class="aside-button">
                   <button @click="$router.push('/2')" id="continue_payment">Continue to payment</button>
               </div>
           </div>
       </aside>
   </div>
</template>
<script src="./DeliveryDetails.js"></script>