<template>
    <Header/>
    <h1>Kontakt hinzufügen</h1>
    <form>
        <button class="backBtn" type="button" v-on:click="goback()">
            Zurück
        </button>
        <input class="addInput" type="text" name="lastname" placeholder="Nachname" v-model="customer.lastname"/>
        <input class="addInput" type="text" name="surname" placeholder="Vorname" v-model="customer.surname"/>
        <input class="addInput" type="text" name="dob" placeholder="Geburtsdatum" v-model="customer.dob"/>
        <input class="addInput" type="text" name="street" placeholder="Strasse" v-model="customer.street"/>
        <input class="addInput" type="text" name="nr" placeholder="Hausnummer" v-model="customer.nr"/>
        <input class="addInput" type="text" name="postcode" placeholder="PLZ" v-model="customer.postcode"/>
        <input class="addInput" type="text" name="country" placeholder="Land" v-model="customer.country"/>
        <input class="addInput" type="text" name="cellphone" placeholder="Mobile" v-model="customer.cellphone"/>
        <input class="addInput" type="text" name="landlinephone" placeholder="Festnetz" v-model="customer.landlinephone"/>
        <input class="addInput" type="text" name="note" placeholder="Notizen" v-model="customer.note"/>
        <input class="addInput" type="text" name="email" placeholder="Email" v-model="customer.email"/>
        <button class="addInputBtn" type="button" v-on:click="addCustomer()">
            Neu hinzufügen
        </button>
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
            const result = await axios.post("https://men5.azurewebsites.net/api/Customer", {
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
            });
            if (result.status == 201 || result.status == 200) {
                this.$router.push({name:"Customer"});
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
