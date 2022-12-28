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

            <p class="inputLabel" >Vorname</p>
            <input v-model="Surname">

            <p class="inputLabel" >Nachname</p>
            <input v-model="Lastname">

            <p class="inputLabel" >Geburtsdatum</p>
            <input v-model="Dob">

            <p class="inputLabel" >Strasse</p>
            <input v-model="Street">

            <p class="inputLabel" >Hausnummer</p>
            <input v-model="Nr">

            <p class="inputLabel" >PLZ</p>
            <input v-model="Postcode">

            <p class="inputLabel" >Land</p>
            <input v-model="Country">

            <p class="inputLabel" >Handy</p>
            <input v-model="Cellphone">

            <p class="inputLabel" >Festnetz</p>
            <input v-model="Landlinephone">

            <p class="inputLabel" >Notitzen</p>
            <input v-model="Note">

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
        var resp = await axios.get("http://localhost:49146/api/customer/"+this.$route.params.id);
        this.result = resp.data;
    }
}
</script>