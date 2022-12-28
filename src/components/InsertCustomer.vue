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
            <input v-model="CompanyName">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Vorname</p>
            <input v-model="Surname">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Nachname</p>
            <input v-model="Lastname">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Geburtsdatum</p>
            <input v-model="Dob">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Strasse</p>
            <input v-model="Street">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Hausnummer</p>
            <input v-model="Nr">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >PLZ</p>
            <input v-model="Postcode">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Land</p>
            <input v-model="Country">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Handy</p>
            <input v-model="Cellphone">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Festnetz</p>
            <input v-model="Landlinephone">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Notitzen</p>
            <input v-model="Note">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Email</p>
            <input v-model="Email">
        </div>
        <div class="addBtnContent">
            <button class="addInputBtn" type="button" v-on:click="addCustomer()">
                OK
            </button>
        </div>
    </form>
</template>

<script>
import axios from "axios";
import Header from './Header.vue';

export default {   
    name:'InsertCustomer',
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
        async addCustomer() {
            const result = await axios.post("http://localhost:49146/api/customer", {
                CompanyName:this.CompanyName,
                Surname:this.Surname,
                Lastname:this.Lastname,
                Dob:this.Dob,
                Street:this.Street,
                Nr:this.Nr,
                Postcode:this.Postcode,
                Country:this.Country,
                Cellphone:this.Cellphone,
                Landlinephone:this.Landlinephone,
                Email:this.Email,
                Note:this.Note
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
        var resp = await axios.get("http://localhost:49146/api/customer");
        this.result = resp.data;
    }
}
</script>