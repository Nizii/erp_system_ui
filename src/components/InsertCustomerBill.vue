<template>
    <Header/>
    <form name="form">
        <div id="backBtnContent">
            <button class="backBtn" type="button" v-on:click="goback()">
             Zurück
            </button>
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Firma</p>
            <input v-model="CompanyName">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Kontakt</p>
            <input v-model="ContactPerson">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Strasse</p>
            <input v-model="CustomerStreet">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >PLZ</p>
            <input v-model="CustomerPostcode">
        </div>
        <div class="inputContent" name="betrag">
            <p class="inputLabel" >Betrag in CHF</p>
            <input v-model="Amount">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Währung</p>
            <!--<input v-model="Currency">-->
            <select name="select" v-model="Currency" id="select">
                <option value="CHF">CHF</option>
                <option value="EURO">EURO</option>
                <option value="USD">USD</option>
            </select>
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Ausgestellt</p>
            <input type="date" v-model="IssuedOn" id="dateInput" name="Ausgestellt">
            <!--<input v-model="IssuedOn">-->
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Fällig</p>
            <input type="date" v-model="PaymentDate" id="dateInput" name="Fällig">
            <!--<input v-model="PaymentDate">-->
        </div>
        <div class="addBtnContent">
            <button class="addInputBtn" type="button" v-on:click="addCustomerBill()">
                OK
            </button>
        </div>
    </form>
</template>

<script>
import axios from "axios";
import Header from './Header.vue';

export default {   
    name:'InsertCustomerBill',
    components: {
        Header,
    },
    data() {
        return {
            result:[],
            CompanyName: "",
            ContactPerson: "",
            CustomerStreet: "",
            CustomerPostcode: "",
            Amount: 0,
            Currency: "CHF",
            IssuedOn: "",
            PaymentDate: "",
        }
    },

    methods:{
        goback(){
            this.$router.push({name:"CustomerBill"});
        },
        getResult(){
            console.log(this.result);
        },
        async addCustomerBill() {
            console.log("Currency " + this.Currency);
            const result = await axios.post("http://localhost:49146/api/customerBill", {
                CompanyName:this.CompanyName,
                ContactPerson:this.ContactPerson,
                CustomerStreet:this.CustomerStreet,
                CustomerPostcode:this.CustomerPostcode,
                Amount:this.Amount,
                Currency:this.Currency,
                IssuedOn:this.IssuedOn,
                PaymentDate:this.PaymentDate,
            });
            if (result.status == 201 || result.status == 200) {
                this.$router.push({name:"CustomerBill"});
            } else {
                alert("Result " + result.status);
            }
        },
       
    },

    async mounted() {
        let token = localStorage.getItem("user-info");
        if(!token) {
            this.$router.push({name:'SignUp'});
        }
        /*
        var resp = await axios.get("http://localhost:49146/api/customerBill");
        this.result = resp.data;
        */
    }
}
</script>