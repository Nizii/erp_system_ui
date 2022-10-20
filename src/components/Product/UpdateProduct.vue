<template>
    <Header/>
    <h1>Produkt bearbeiten</h1>
    <form>
        <input class="addProduct" type="text" name="Produkt" placeholder="Produkt" v-model="product.product_name"/>
        <input class="addProduct" type="text" name="Dimension" placeholder="Dimension" v-model="product.product_size"/>
        <input class="addProduct" type="text" name="Beschreibung" placeholder="Beschreibung" v-model="product.description"/>
        <input class="addProduct" type="text" name="Einheiten verfügbar" placeholder="Einheiten verfügbar" v-model="product.units_available"/>
        <input class="addProduct" type="text" name="Einheit" placeholder="Einheit" v-model="product.unit"/>
        <input class="addProduct" type="text" name="Einkaufspreis" placeholder="Einkaufspreis" v-model="product.purchasing_price_per_unit"/>
        <input class="addProduct" type="text" name="Verkaufspreis" placeholder="Verkaufspreis" v-model="product.selling_price_per_unit"/>
        <button class="updateCustomerBtn" type="button" v-on:click="updateProduct()">
            Produkt ändern
        </button>
    </form>
</template>

<script>
import Header from '../Header.vue';
import axios from "axios";
export default {   
    name:'UpdateProduct',
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
        async updateProduct(){
            const result = await axios.put("https://men5.azurewebsites.net/api/Product/",{
            //const result = await axios.put("http://localhost:49146/api/Customer",{
                product_name:this.product.product_name,
                product_size:this.product.product_size,
                description:this.product.description,
                units_available:this.product.units_available,
                unit:this.product.unit,
                purchasing_price_per_unit:this.product.purchasing_price_per_unit,
                selling_price_per_unit:this.product.selling_price_per_unit,
            });
            if(result.status == 200){
                this.$router.push({name:"Product"});
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

        const result = await axios.get("https://men5.azurewebsites.net/api/Product/"+this.$route.params.id);
        this.product = result.data;
    }
}


</script>

<style>

</style>
