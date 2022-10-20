<template>
    <Header/>
    <h1>Produkt hinzufügen</h1>
    <form>
        <input class="addProduct" type="text" name="Produkt" placeholder="Produkt" v-model="product.product_name"/>
        <input class="addProduct" type="text" name="Dimension" placeholder="Dimension" v-model="product.product_size"/>
        <input class="addProduct" type="text" name="Beschreibung" placeholder="Beschreibung" v-model="product.description"/>
        <input class="addProduct" type="text" name="Einheiten verfügbar" placeholder="Einheiten verfügbar" v-model="product.units_available"/>
        <input class="addProduct" type="text" name="Einheit" placeholder="Einheit" v-model="product.unit"/>
        <input class="addProduct" type="text" name="Einkaufspreis" placeholder="Einkaufspreis" v-model="product.purchasing_price_per_unit"/>
        <input class="addProduct" type="text" name="Verkaufspreis" placeholder="Verkaufspreis" v-model="product.selling_price_per_unit"/>
        <button class="addCustomerBtn" type="button" v-on:click="addProduct()">
            Neu hinzufügen
        </button>
    </form>
</template>

<script>
import axios from 'axios';
import Header from '../Header.vue';
export default {
    name:'AddProduct',
    components:{
        Header
    },
    data() {
        return {
            product:{
                product_nr: "",
                product_name: "",
                product_size: "",
                description: "",
                units_available: "",
                unit: "",
                purchasing_price_per_unit: "",
                selling_price_per_unit: "",
            }
        }
    },

    methods:{
        async addProduct() {
            const result = await axios.post("https://men5.azurewebsites.net/api/Product", {
                product_name:this.product.product_name,
                product_size:this.product.product_size,
                description:this.product.description,
                units_available:this.product.units_available,
                unit:this.product.unit,
                purchasing_price_per_unit:this.product.purchasing_price_per_unit,
                selling_price_per_unit:this.product.selling_price_per_unit,
            });
            if (result.status == 201 || result.status == 200) {
                this.$router.push({name:"Product"});
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
