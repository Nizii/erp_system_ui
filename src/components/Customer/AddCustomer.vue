<template>
    <Header/>
    <form>
        <div id="backBtnContent">
            <button class="backBtn" type="button" v-on:click="goback()">
             Zurück zu Kontakte
            </button>
        </div>
        <div class="inputContent">
            <p class="inputLabel">Nachname</p>
            <input class="addInput" type="text" name="lastname" v-model="customer.lastname"/>
        </div>
        <div class="inputContent">
            <p class="inputLabel">Vorname</p>
            <input class="addInput" type="text" name="surname" v-model="customer.surname"/>
        </div>
        <div class="inputContent">
            <p class="inputLabel">Geburtsdatum</p>
            <input class="addInput" type="text" name="dob" v-model="customer.dob"/>
        </div>
        <div class="inputContent">
            <p class="inputLabel">Strasse</p>
            <input class="addInput" type="text" name="street" v-model="customer.street"/>
        </div>
        <div class="inputContent">
            <p class="inputLabel">Hausnummer</p>
            <input class="addInput" type="text" name="nr" v-model="customer.nr"/>
        </div>
        <div class="inputContent">
            <p class="inputLabel">PLZ</p>
            <input class="addInput" type="text" name="postcode" v-model="customer.postcode"/>
        </div>
        <div class="inputContent">
            <p class="inputLabel">Land</p>
            <input class="addInput" type="text" name="country" v-model="customer.country"/>
        </div>
        <div class="inputContent">
            <p class="inputLabel">Mobile</p>
            <input class="addInput" type="text" name="cellphone" v-model="customer.cellphone"/>
        </div>
        <div class="inputContent">
            <p class="inputLabel">Festnetz</p>
            <input class="addInput" type="text" name="landlinephone" v-model="customer.landlinephone"/>
        </div>
        <div class="inputContent">
            <p class="inputLabel">Notizen</p>
            <input class="addInput" type="text" name="note" v-model="customer.note"/>
        </div>
        <div class="inputContent">
            <p class="inputLabel">Email</p>
            <input class="addInput" type="text" name="email" v-model="customer.email"/>
        </div>
        <div class="addBtnContent">
            <button class="addInputBtn" type="button" v-on:click="addCustomer()">
            Neu hinzufügen
            </button>
        </div>
    </form>
</template>

<script>
import axios from 'axios';
import Header from '../Header.vue';
export default {
    name:'AddCustomer',
    components:{
        Header
    },
    data() {
        return {
            customer:{
                surname: "",
                lastname: "",
                dob: "",
                street: "",
                nr: "",
                postcode: "",
                country: "",
                cellphone: "",
                landlinephone:" ",
                note: "",
                email: ""
            }
        }
    },

    methods:{
        goback(){
            this.$router.push({name:"Customer"});
        },
        async addCustomer() {
            let token = localStorage.getItem("user-info");
            console.log("Func AddCus " +token);
            const result = await axios.post("http://localhost:49146/api/Customer", {
                surname:this.customer.surname,
                lastname:this.customer.lastname,
                dob:this.customer.dob,
                street:this.customer.street,
                nr:this.customer.nr,
                postcode:this.customer.postcode,
                country:this.customer.country,
                cellphone:this.customer.cellphone,
                landlinephone:this.customer.landlinephone,
                email:this.customer.email,
                note:this.customer.note
            }, 
            {
                headers: {"AuthToken" : token}
            });

            if (result.status == 201 || result.status == 200) {
                this.$router.push({name:"Customer"});
            } else {
                alert("Result " + result.status);
            }
        }
    },

    mounted() {
        let token = localStorage.getItem("user-info");
        console.log("Add " + token);
        if(!token) {
            this.$router.push({name:"SignUp"});
        }
    }
}


</script>

<style>

</style>
