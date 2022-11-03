<template>
    <form>
        <button class="backBtn" type="button" v-on:click="goback()">
            Zurück
        </button>
        <input class="updateInput" type="text" name="lastname" v-model="customer.lastname"/>
        <input class="updateInput" type="text" name="surname" v-model="customer.surname"/>
        <input class="updateInput" type="text" name="dob" v-model="customer.dob"/>
        <input class="updateInput" type="text" name="street" v-model="customer.street"/>
        <input class="updateInput" type="text" name="nr" v-model="customer.nr"/>
        <input class="updateInput" type="text" name="postcode" v-model="customer.postcode"/>
        <input class="updateInput" type="text" name="country" v-model="customer.country"/>
        <input class="updateInput" type="text" name="cellphone" v-model="customer.cellphone"/>
        <input class="updateInput" type="text" name="landlinephone" v-model="customer.landlinephone"/>
        <input class="updateInput" type="text" name="note" v-model="customer.note"/>
        <input class="updateInput" type="text" name="email" v-model="customer.email"/>
        <button class="updateInputBtn" type="button" v-on:click="updateCustomer()">
            Kontakt ändern
        </button>
    </form>
</template>

<script>
import axios from "axios";
export default {   
    name:'UpdateCustomer',

    data() {
        return {
            customer:{
                customer_nr: "",
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
        async updateCustomer(){
            let token = localStorage.getItem("user-info");
            const result = await axios.put("http://localhost:49146/api/customer/",{
            //const result = await axios.put("http://localhost:49146/api/Customer",{
                customer_nr:this.customer.customer_nr,
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
            },{headers: {"AuthToken" : token}});
            if(result.status == 200){
                this.$router.push({name:"Customer"});
            } else {
                alert("Result " + result.status);
            }
        }
    },

    async mounted() {
        let token = localStorage.getItem("user-info");
        console.log("Update " + token);
        if(!token) {
            this.$router.push({name:'SignUp'});
        }
        const result = await axios.get("http://localhost:49146/api/customer/"+this.$route.params.id, {headers: {"AuthToken" : token}});
        this.customer = result.data;
    }
}


</script>

<style>

</style>
