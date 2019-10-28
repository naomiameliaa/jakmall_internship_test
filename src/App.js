export default {
    name: 'App',
    data() {
        return {
            step: 0,
            form: {
                goSend_checked: false,
                jne_checked: false,
                personal_courier_checked: false,
                eWallet_checked: false,
                bankTransfer_checked: false,
                virtualAcc_checked: false,
                email: {
                    value: '',
                    valid: -1
                },
                phone_number: {
                    value: '',
                    valid: -1
                },
                dropshipper_checked: false,
                dropshipper_name: {
                    value: '',
                    valid: -1
                },
                dropshipper_phone_number: {
                    value: '',
                    valid: -1
                },
                delivery_address: {
                    value: '',
                    valid: -1
                },
            },
            cost_of_goods: 500000,
            dropshipping_fee: 5900,
            goSend_fee: 15000,
            jne_fee: 9000,
            personalCourier_fee: 20000,
            total: 500000,
            orderID: (Math.floor(Math.random()*8)+2)*10+
            (Math.floor(Math.random()*8)+2)*100+
            (Math.floor(Math.random()*8)+2)*1000+
            (Math.floor(Math.random()*8)+2)*10000+
            (Math.floor(Math.random()*8)+2)
        }

    },

    watch: {
        form: {
            handler: function(val) {
                if (val.dropshipper_checked) {
                    this.total = this.cost_of_goods + this.dropshipping_fee;
                } else {
                    this.total = this.cost_of_goods;
                }

                if(val.email.value === "") {
                    this.form.email.valid = -1;
                } else {
                    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val.email.value)){
                        this.form.email.valid = 1;
                    } else{
                        this.form.email.valid = 0;
                    }
                }

                if(val.dropshipper_name.value === ""){
                    this.form.dropshipper_name.valid = -1
                }else{
                    if(val.dropshipper_name.value.length >= 3){
                        this.form.dropshipper_name.valid = 1;
                    }else{
                        this.form.dropshipper_name.valid = 0;
                    }
                }

                if(val.phone_number.value === ""){
                    this.form.phone_number.valid = -1;
                }else{
                    if(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/.test(val.phone_number.value) && val.phone_number.value.length >= 6 && val.phone_number.value.length <= 20){
                        this.form.phone_number.valid = 1;
                    }else{
                        this.form.phone_number.valid = 0;
                    }
                }

                if(val.dropshipper_phone_number.value === ""){
                    this.form.dropshipper_phone_number.valid = -1;
                }else{
                    if(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/.test(val.dropshipper_phone_number.value) && val.dropshipper_phone_number.value.length >= 6 && val.phone_number.value.length <= 20){
                        this.form.dropshipper_phone_number.valid = 1;
                    }else{
                        this.form.dropshipper_phone_number.valid = 0;
                    }
                }

                if(val.delivery_address.value === ""){
                    this.form.delivery_address.valid = -1;
                }else{
                    if(val.delivery_address.value.length <= 120){
                        this.form.delivery_address.valid = 1;
                    }else{
                        this.form.delivery_address.valid = 0;
                    }
                }

                if (val.goSend_checked) {
                    document.getElementById("go-send").disabled = false;
                    document.getElementById("jne").disabled = true;
                    document.getElementById("personal-courier").disabled = true;
                    document.getElementById("p").style.marginBottom = "0.5rem";
                    this.total = this.cost_of_goods + this.dropshipping_fee + this.goSend_fee;
                }else if(val.jne_checked){
                    document.getElementById("jne").disabled = false;
                    document.getElementById("go-send").disabled = true;
                    document.getElementById("personal-courier").disabled = true;
                    document.getElementById("p").style.marginBottom = "0.5rem";
                    this.total = this.cost_of_goods + this.dropshipping_fee + this.jne_fee;
                }else if(val.personal_courier_checked) {
                    document.getElementById("personal-courier").disabled = false;
                    document.getElementById("go-send").disabled = true;
                    document.getElementById("jne").disabled = true;
                    document.getElementById("p").style.marginBottom = "0.5rem";
                    this.total = this.cost_of_goods + this.dropshipping_fee + this.personalCourier_fee;
                }else{
                    document.getElementById("go-send").disabled = false;
                    document.getElementById("jne").disabled = false;
                    document.getElementById("personal-courier").disabled = false;
                    this.total = this.cost_of_goods + this.dropshipping_fee;
                    document.getElementById("p").style.marginBottom = "10rem";
                }

                if(val.eWallet_checked) {
                    document.getElementById("e-wallet").disabled = false;
                    document.getElementById("bank-transfer").disabled = true;
                    document.getElementById("virtual-acc").disabled = true;
                    document.getElementsByClassName("est_detail").style.marginBottom = "0.5rem"
                    document.getElementById("p").style.marginBottom = "0.5rem";
                }else if(val.bankTransfer_checked) {
                    document.getElementById("bank-transfer").disabled = false;
                    document.getElementById("e-wallet").disabled = true;
                    document.getElementById("virtual-acc").disabled = true;
                    document.getElementsByClassName("est_detail").style.marginBottom = "0.5rem"
                    document.getElementById("p").style.marginBottom = "0.5rem";
                }else if(val.virtualAcc_checked) {
                    document.getElementById("virtual-acc").disabled = false;
                    document.getElementById("e-wallet").disabled = true;
                    document.getElementById("bank-transfer").disabled = true;
                    document.getElementsByClassName("est_detail").style.marginBottom = "0.5rem"
                    document.getElementById("p").style.marginBottom = "0.5rem";
                }else{
                    document.getElementById("e-wallet").disabled = false;
                    document.getElementById("bank-transfer").disabled = false;
                    document.getElementById("virtual-acc").disabled = false;
                    document.getElementsByClassName("est_detail").style.marginBottom = "10rem"
                    document.getElementById("p").style.marginBottom = "0.5rem";
                }

            },
            deep: true
        }
    }

    // created() {
    //     this.step = this.$route.params.step;
    // }
}