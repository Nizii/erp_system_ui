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
            <p class="inputLabel" >Vorname</p>
            <input v-model="result.Surname">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Nachname</p>
            <input v-model="result.Lastname">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Geburtsdatum</p>
            <input v-model="result.Dob">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Strasse</p>
            <input v-model="result.Street">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Hausnummer</p>
            <input v-model="result.Nr">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >PLZ</p>
            <input v-model="result.Postcode">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Land</p>
            <input v-model="result.Country">
        </div>
        <div class="inputContent">
            <p class="inputLabel">Handy</p>
            <input v-model="result.Cellphone">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Festnetz</p>
            <input v-model="result.Landlinephone">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Notitzen</p>
            <input v-model="result.Note">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Email</p>
            <input v-model="result.Email">
        </div>
        <div class="addBtnContent">
            <button class="addInputBtn" type="button" v-on:click="updateCustomer()">
                OK
            </button>
        </div>
    </form>
</template>

<script>
import axios from "axios";
import Header from './Header.vue';

export default {   
    name:'UpdateCustomer',
    components: {
        Header,
    },
    data() {
        return {
            result:[],
            CustomerNr:"",
            CompanyName: "",
            Surname: "",
            Lastname: "",
            Dob: "",
            Street: "",
            Nr: "",
            Postcode: "",
            Country: "",
            Cellphone: "",
            Landlinephone:" ",
            Note: "",
            Email: ""
        }
    },

    methods:{
        goback(){
            this.$router.push({name:"Customer"});
        },
        getResult(){
            console.log(this.result);
        },
        async updateCustomer() {
            const result = await axios.put("http://localhost:49146/api/customer", {
                CustomerNr:this.result.CustomerNr,
                CompanyName:this.result.CompanyName,
                Surname:this.result.Surname,
                Lastname:this.result.Lastname,
                Dob:this.result.Dob,
                Street:this.result.Street,
                Nr:this.result.Nr,
                Postcode:this.result.Postcode,
                Country:this.result.Country,
                Cellphone:this.result.Cellphone,
                Landlinephone:this.result.Landlinephone,
                Email:this.result.Email,
                Note:this.result.Note
            });
            if (result.status == 201 || result.status == 200) {
                this.$router.push({name:"Customer"});
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
        var resp = await axios.get("http://localhost:49146/api/customer/"+this.$route.params.id);
        this.result = resp.data;
    }
}
</script>