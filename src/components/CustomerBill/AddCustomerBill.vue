<template>
    <Header/>
    <h1>Kunden Rechung hinzufügen</h1>
    <form>
        <input class="addInput" type="text" name="Firma" placeholder="Firma" v-model="customerBill.company_name"/>
        <input class="addInput" type="text" name="Ansprechsperson" placeholder="Ansprechsperson" v-model="customerBill.customer_name"/>
        <input class="addInput" type="text" name="Strasse" placeholder="Strasse" v-model="customerBill.customer_street"/>
        <input class="addInput" type="text" name="PLZ" placeholder="PLZ" v-model="customerBill.customer_postcode"/>
        <input class="addInput" type="text" name="Betrag" placeholder="Betrag" v-model="customerBill.amount"/>
        <input class="addInput" type="text" name="Währung" placeholder="Währung" v-model="customerBill.currency"/>
        <input class="addInput" type="text" name="Ausgestellt" placeholder="Ausgestellt" v-model="customerBill.issued_on"/>
        <input class="addInput" type="text" name="Fällig" placeholder="Fällig" v-model="customerBill.deadline"/>
        <button class="addInputBtn" type="button" v-on:click="addCustomerBill()">
            Neu hinzufügen
        </button>
    </form>
</template>

<script>
import axios from 'axios';
import Header from '../Header.vue';
export default {
    name:'AddCustomerBill',
    components:{
        Header
    },
    data() {
        return {
            customerBill:{
                customer_bill_nr: "",
                company_name: "",
                customer_name: "",
                customer_street: "",
                customer_postcode: "",
                amount: "",
                currency: "",
                issued_on: "",
                deadline: "",
            }
        }
    },

    methods:{
        async addCustomerBill() {
            const result = await axios.post("https://men5.azurewebsites.net/api/CustomerBill", {
                company_name:this.customerBill.company_name,
                customer_name:this.customerBill.customer_name,
                customer_street:this.customerBill.customer_street,
                customer_postcode:this.customerBill.customer_postcode,
                amount:this.customerBill.amount,
                currency:this.customerBill.currency,
                issued_on:this.customerBill.issued_on,
                deadline:this.customerBill.deadline,
            });
            if (result.status == 201 || result.status == 200) {
                this.$router.push({name:"CustomerBill"});
            } else {
                alert("Result " + result.status);
            }
        }
    },

    mounted() {
        let user = localStorage.getItem("user-info");
        if(!user) {
            this.$router.push({name:"SignUp"});
        }
        let array = user.toString().split(",");
        this.name = array[2].slice(1, -2);
    }
}


</script>

<style>

</style>
