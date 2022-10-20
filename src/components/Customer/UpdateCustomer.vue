<template>
    <Header/>
    <h1>Kontakt bearbeiten</h1>
    <form>
        <input class="updateInput" type="text" name="lastname" placeholder="Nachname" v-model="customer.lastname"/>
        <input class="updateInput" type="text" name="surname" placeholder="Vorname" v-model="customer.surname"/>
        <input class="updateInput" type="text" name="dob" placeholder="Geburtsdatum" v-model="customer.dob"/>
        <input class="updateInput" type="text" name="street" placeholder="Strasse" v-model="customer.street"/>
        <input class="updateInput" type="text" name="nr" placeholder="Hausnummer" v-model="customer.nr"/>
        <input class="updateInput" type="text" name="postcode" placeholder="PLZ" v-model="customer.postcode"/>
        <input class="updateInput" type="text" name="country" placeholder="Land" v-model="customer.country"/>
        <input class="updateInput" type="text" name="cellphone" placeholder="Mobile" v-model="customer.cellphone"/>
        <input class="updateInput" type="text" name="landlinephone" placeholder="Festnetz" v-model="customer.landlinephone"/>
        <input class="updateInput" type="text" name="note" placeholder="Notizen" v-model="customer.note"/>
        <input class="updateInput" type="text" name="email" placeholder="Email" v-model="customer.email"/>
        <button class="updateInputBtn" type="button" v-on:click="updateCustomer()">
            Kontakt ändern
        </button>
    </form>
</template>

<script>
import Header from '../Header.vue';
import axios from "axios";
export default {   
    name:'UpdateCustomer',
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
        async updateCustomer(){
            const result = await axios.put("https://men5.azurewebsites.net/api/Customer/",{
            //const result = await axios.put("http://localhost:49146/api/Customer",{
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
            if(result.status == 200){
                this.$router.push({name:"Customer"});
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

        const result = await axios.get("https://men5.azurewebsites.net/api/Customer/"+this.$route.params.id);
        this.customer = result.data;
    }
}


</script>

<style>

</style>
