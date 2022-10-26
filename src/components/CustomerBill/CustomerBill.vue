<template>
<Header/>
<h1>Kunden Rechnungen</h1>
<body class="bodyInsideApp">
    <table>
        <tr>
            <th> 
                <router-link class="addBtn" type="button" to="addCustomerBill">
                    <button class="addBtn">
                        +
                    </button>
                </router-link>
            </th>
            <th>
                Rechungs Nr
            </th>
            <th>
                Firma
            </th>
            <th>
                Ansprechsperson
            </th>
            <th>
                Strasse
            </th>
            <th>
                PLZ
            </th>
            <th>
                Betrag
            </th>
            <th>
                Währung
            </th>
            <th>
                Ausgestellt
            </th>
            <th>
                Fällig
            </th>
            <th>
                Löschen
            </th>
        </tr>
        <tr v-for = "cbill in customerBill" :key="cbill.customer_bill_nr" class="pointer">
            <td>
                <router-link type="button" class="updateBtn" :to="'/updateCustomerBill/'+cbill.customer_bill_nr">
                    <button class="updateBtn">
                        B
                    </button>
                </router-link>
            </td>
            <td>{{cbill.customer_bill_nr}}</td>
            <td>{{cbill.company_name}}</td>
            <td>{{cbill.customer_name}}</td>
            <td>{{cbill.customer_street}}</td>
            <td>{{cbill.customer_postcode}}</td>
            <td>{{cbill.amount}}</td>
            <td>{{cbill.currency}}</td>
            <td>{{cbill.issued_on}}</td>
            <td>{{cbill.deadline}}</td>
            <td>
                <button v-on:click="deleteCustomerBill(cbill.customer_bill_nr)" type="button" class="deleteBtn">-
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
            customerBill:[],
            company_name: "",
            customer_name: "",
            customer_street: "",
            customer_postcode: "",
            amount: "",
            currency: "",
            issued_on: "",
            deadline: ""
        }
    },

    methods:{
        async deleteCustomerBill(id){
            let result = await axios.delete('https://men5.azurewebsites.net/api/CustomerBill/'+id);
            if(result.status==200){
                this.loadData();
            }
        },
        async loadData(){
        let user = localStorage.getItem("user-info");
        if(!user) {
            this.$router.push({name:'SignUp'});
        }
        let result = await axios.get('https://men5.azurewebsites.net/api/CustomerBill');
        this.customerBill = result.data;
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
