<template>
    <Header/>
    <form>
        <div id="backBtnContent">
            <button class="backBtn" type="button" v-on:click="goback()">
             Zurück
            </button>
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Firma</p>
            <input v-model="result.CompanyName">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Kontakt</p>
            <input v-model="result.ContactPerson">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Strasse</p>
            <input v-model="result.CustomerStreet">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >PLZ</p>
            <input v-model="result.CustomerPostcode">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Betrag</p>
            <input v-model="result.Amount">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Währung</p>
            <select name="select" v-model="result.Currency" id="select">
                <option value="CHF">CHF</option>
                <option value="EURO">EURO</option>
                <option value="USD">USD</option>
            </select>
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Ausgestellt</p>
            <!--<input v-model="result.IssuedOn"-->
            <input v-model="result.IssuedOn" type="date" id="dateInput" name="Ausgestellt">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Fällig</p>
            <!--<input v-model="result.PaymentDate"-->
            <input v-model="result.PaymentDate" type="date" id="dateInput" name="Fällig">
        </div>
        <div class="addBtnContent">
            <button class="addInputBtn" type="button" v-on:click="update()">
                OK
            </button>
        </div>
    </form>
</template>

<script>
import axios from "axios";
import Header from './Header.vue';

export default {   
    name:'UpdateCustomerBill',
    components: {
        Header,
    },
    data() {
        return {
            result:[],
            CustomerBillNr:"",
            CompanyName: "",
            ContactPerson: "",
            CustomerStreet: "",
            CustomerPostcode: "",
            Amount: "",
            Currency: "",
            IssuedOn: "",
            PaymentDate: ""
        }
    },

    methods:{
        goback(){
            this.$router.push({name:"CustomerBill"});
        },
        getResult(){
            console.log(this.result);
        },
        async update() {
            const result = await axios.put("http://localhost:49146/api/customerBill", {
                CustomerBillNr:this.result.CustomerBillNr,
                CompanyName:this.result.CompanyName,
                ContactPerson:this.result.ContactPerson,
                CustomerStreet:this.result.CustomerStreet,
                CustomerPostcode:this.result.CustomerPostcode,
                Amount:this.result.Amount,
                Currency:this.result.Currency,
                IssuedOn:this.result.IssuedOn,
                PaymentDate:this.result.PaymentDate,
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
        var resp = await axios.get("http://localhost:49146/api/customerBill/"+this.$route.params.id);
        this.result = resp.data;
    }
}
</script>