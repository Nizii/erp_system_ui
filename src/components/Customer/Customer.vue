<template>
<Header/>
<h1>Kunde</h1>
<body class="bodyInsideApp">
    <table border = "1">
        <tr>
            <th> 
                <router-link class="addBtn" type="button" to="addCustomer">
                    <button class="addBtn">
                        +
                    </button>
                </router-link>
            </th>
            <th>
                Kunden Nr
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
                Löschen
            </th>
        </tr>
        <tr v-for = "cus in customer" :key="cus.customer_nr" class="pointer">
            <td>
                <router-link type="button" class="updateBtn" :to="'/updateCustomer/'+cus.customer_nr">
                    <button class="updateBtn">
                        B
                    </button>
                </router-link>
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
                <button v-on:click="deleteCustomer(cus.customer_nr)" type="button" class="deleteBtn">-
                </button>
            </td>
        </tr>
    </table>
</body>
</template>

<script>
import Header from '../Header.vue';
import axios from 'axios';
export default {
    name:'Home',
    data() {
        return {
            customer:[],
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

    methods:{
        async deleteCustomer(id){
            let result = await axios.delete('https://men5.azurewebsites.net/api/Customer/'+id);
            if(result.status==200){
                this.loadData();
            }
        },
        async loadData(){
        let user = localStorage.getItem("user-info");
        if(!user) {
            this.$router.push({name:'SignUp'});
        }
        let result = await axios.get('https://men5.azurewebsites.net/api/Customer');
        this.customer = result.data;
        }
    },

    components: {
        Header
    },

    async mounted() {
        this.loadData();
    }
}
</script>

<style>
</style>
