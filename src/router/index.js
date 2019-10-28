import Vue from 'vue'
import Router from 'vue-router'
import DeliveryDetails from "@/components/DeliveryDetails.vue";
import ShipmentPayment from "@/components/ShipmentPayment.vue";
import Finish from "@/components/Finish.vue";

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/1'
        },
        {
            path: '/1',
            name: 'DeliveryDetails',
            component: DeliveryDetails
        },
        {
            path: '/2',
            name: 'ShipmentPayment',
            component: ShipmentPayment
        },
        {
            path: '/3',
            name: 'Finish',
            component: Finish
        }

    ]
})
