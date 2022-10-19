<template>
<Header/>
<h1>Customer</h1>
<body>
    <thead id="cthead">
        <tr>
            <th> 
                <router-link class="addBtn" type="button" to="/addCustomer">
                    <button class="addBtn">
                        +
                    </button>
                </router-link>
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
                Delete
            </th>
        </tr>
    </thead>
    <tbody border = "1">
        <tr v-for = "cus in customer" :key="cus.customer_nr">
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
                <button type="button" class="deleteBtn" width="14" height="14">-
                </button>
            </td>
        </tr>
    </tbody>
</body>
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
        this.customer = result.data;
    }
}
</script>

<style>

</style>
