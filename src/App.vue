<template>
    <div id="app">
        <div class="steps">
            <div class="steps-detail" :class="{'steps-active': step >= 1}">
                <div class="steps-detail-number">1</div>
                <div class="steps-detail-name">Delivery</div>
            </div>
            <div class="steps-arrow">
                &rsaquo;
            </div>
            <div class="steps-detail" :class="{'steps-active': step >= 2}">
                <div class="steps-detail-number">2</div>
                <div class="steps-detail-name">Payment</div>
            </div>
            <div class="steps-arrow">
                &rsaquo;
            </div>
            <div class="steps-detail" :class="{'steps-active': step >= 3}">
                <div class="steps-detail-number">3</div>
                <div class="steps-detail-name">Finish</div>
            </div>
        </div>
        <div class="main">
            <router-view/>
        </div>
    </div>
</template>

<script src="./App.js"></script>

<style src="@/assets/style.css"></style>