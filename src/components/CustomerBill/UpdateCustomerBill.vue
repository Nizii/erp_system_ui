<template>
    <Header/>
    <h1>Kunden Rechung bearbeiten</h1>
    <form>
        <button class="backBtn" type="button" v-on:click="goback()">
            Zurück
        </button>
        <input class="updateInput" type="text" name="Firma" placeholder="Firma" v-model="customerBill.company_name"/>
        <input class="updateInput" type="text" name="Ansprechsperson" placeholder="Ansprechsperson" v-model="customerBill.customer_name"/>
        <input class="updateInput" type="text" name="Strasse" placeholder="Strasse" v-model="customerBill.customer_street"/>
        <input class="updateInput" type="text" name="PLZ" placeholder="PLZ" v-model="customerBill.customer_postcode"/>
        <input class="updateInput" type="text" name="Betrag" placeholder="Betrag" v-model="customerBill.amount"/>
        <input class="updateInput" type="text" name="Währung" placeholder="Währung" v-model="customerBill.currency"/>
        <input class="updateInput" type="text" name="Ausgestellt" placeholder="Ausgestellt" v-model="customerBill.issued_on"/>
        <input class="updateInput" type="text" name="Fällig" placeholder="Fällig" v-model="customerBill.deadline"/>
        <button class="updateInputBtn" type="button" v-on:click="updateCustomerBill()">
            Rechung ändern
        </button>
    </form>
</template>

<script>
import axios from "axios";
export default {   
    name:'UpdateCustomerBill',
    data() {
        return {
            customerBill:{
                product_nr: "",
                company_name: "",
                customer_name: "",
                customer_street: "",
                customer_postcode: "",
                amount: "",
                currency: "",
                issued_on: "",
                deadline: ""
            }
        }
    },

    methods:{
        goback(){
            this.$router.push({name:"CustomerBill"});
        },
        async updateCustomerBill(){
            const result = await axios.put("https://men5.azurewebsites.net/api/CustomerBill/",{
            //const result = await axios.put("http://localhost:49146/api/Customer",{
                company_name:this.customerBill.company_name,
                customer_name:this.customerBill.customer_name,
                customer_street:this.customerBill.customer_street,
                customer_postcode:this.customerBill.customer_postcode,
                amount:this.customerBill.amount,
                currency:this.customerBill.currency,
                issued_on:this.customerBill.issued_on,
                deadline:this.customerBill.deadline
            });
            
            if(result.status == 200){
                this.$router.push({name:"CustomerBill"});
            } else {
                alert("Result " + result.status);
            }
        }
    },


    async mounted() {
        let user = localStorage.getItem("user-info");
        if(!user) {
            this.$router.push({name:'SignUp'});
        }
        let array = user.toString().split(",");
        this.name = array[2].slice(1, -2);

        const result = await axios.get("https://men5.azurewebsites.net/api/CustomerBill/"+this.$route.params.id);
        this.customerBill = result.data;
    }
}


</script>

<style>

</style>
