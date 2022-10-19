<template>
    <Header/>
    <h1>Customer</h1>
    <thead id="cthead">
        <tr>
            <th> 
                <router-link type="button" to="/addCustomer">+</router-link>
            </th>
            <th>
                KundenNr
            </th>
            <th>
                Vorname
            </th>
            <th>
                Nachname
            </th>
            <th>
                Geburtsdatum
            </th>
            <th>
                Strasse
            </th>
            <th>
                Nr
            </th>
            <th>
                PLZ
            </th>
            <th>
                Land
            </th>
            <th>
                Mobil
            </th>
            <th>
                Festnetz
            </th>
            <th>
                Notitzen
            </th>
            <th>
                Email
            </th>
            <th>
            </th>
        </tr>
    </thead>
    <tbody border = "1">
        <tr v-for = "cus in customer" :key="cus.id">
            <td>
                <router-link type="button" to="/updateCustomer">Update</router-link>
            </td> 
            <td>{{cus.customer_nr}}</td>
            <td>{{cus.lastname}}</td>
            <td>{{cus.surname}}</td>
            <td>{{cus.dob}}</td>
            <td>{{cus.street}}</td>
            <td>{{cus.nr}}</td>
            <td>{{cus.postcode}}</td>
            <td>{{cus.country}}</td>
            <td>{{cus.cellphone}}</td>
            <td>{{cus.landlinephone}}</td>
            <td>{{cus.note}}</td>
            <td>{{cus.email}}</td>
            <td>
                <button type="button" width="14" height="14">-
                </button>
            </td>
        </tr>
    </tbody>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
    name:'Home',
    data() {
        return {
            customer:[],
            newCustomer: false,
            customer_nr: 1,
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
    },

    components: {
        Header
    },

    async mounted() {
        let user = localStorage.getItem("user-info");
        if(!user) {
            this.$router.push({name:'SignUp'});
        }
        let result = await axios.get('https://men5.azurewebsites.net/api/Customer');
        console.warn(result);
        this.customer = result.data;
    }
}
</script>

<style>

    thead{
        background-color: antiquewhite;
    }

    tbody{
        background-color: azure;
    }

    tr{
        
    }
    td{
        width: 150px;
        height: 50px;
    }


    button{
        width: 50px;
        height: 50px;
    }
</style>
