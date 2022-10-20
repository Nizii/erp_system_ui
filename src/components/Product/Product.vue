<template>
<Header/>
<h1>Produkte</h1>
<body>
    <thead id="cthead">
        <tr>
            <th> 
                <router-link class="addBtn" type="button" to="addProduct">
                    <button class="addBtn">
                        +
                    </button>
                </router-link>
            </th>
            <th>
                Nr
            </th>
            <th>
                Artikel
            </th>
            <th>
                Grösse
            </th>
            <th>
                Beschreibung
            </th>
            <th>
                Verfügbar
            </th>
            <th>
                Einheit
            </th>
            <th>
                EK
            </th>
            <th>
                Verkauf
            </th>
            <th>
                Löschen
            </th>
        </tr>
    </thead>
    <tbody border = "1">
        <tr v-for = "pro in products" :key="pro.product_nr">
            <td>
                <router-link type="button" class="updateBtn" :to="'/updateProduct/'+pro.product_nr">
                    <button class="updateBtn">
                        B
                    </button>
                </router-link>
            </td> 
            <td>{{pro.product_nr}}</td>
            <td>{{pro.product_name}}</td>
            <td>{{pro.product_size}}</td>
            <td>{{pro.description}}</td>
            <td>{{pro.units_available}}</td>
            <td>{{pro.unit}}</td>
            <td>{{pro.purchasing_price_per_unit}}</td>
            <td>{{pro.selling_price_per_unit}}</td>
            <td>
                <button v-on:click="deleteProduct(pro.product_nr)" type="button" class="deleteBtn">-
                </button>
            </td>
        </tr>
    </tbody>
</body>
</template>

<script>
import Header from '../Header.vue';
import axios from 'axios';
export default {
    name:'Home',
    data() {
        return {
            products:[],
            product_nr: "",
            product_name: "",
            product_size: "",
            description: "",
            units_available: "",
            unit: "",
            purchasing_price_per_unit: "",
            selling_price_per_unit: "",
        }
    },

    methods:{
        async deleteProduct(id){
            let result = await axios.delete('https://men5.azurewebsites.net/api/Product/'+id);
            if(result.status==200){
                this.loadData();
            }
        },
        async loadData(){
        let user = localStorage.getItem("user-info");
        if(!user) {
            this.$router.push({name:'SignUp'});
        }
        let result = await axios.get('https://men5.azurewebsites.net/api/Product');
        this.products = result.data;
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
