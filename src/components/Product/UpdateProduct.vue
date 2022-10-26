<template>
    <Header/>
    <h1>Produkt bearbeiten</h1>
    <form>
        <button class="backBtn" type="button" v-on:click="goback()">
            Zurück
        </button>
        <input class="updateInput" type="text" name="Produkt" placeholder="Produkt" v-model="product.product_name"/>
        <input class="updateInput" type="text" name="Dimension" placeholder="Dimension" v-model="product.product_size"/>
        <input class="updateInput" type="text" name="Beschreibung" placeholder="Beschreibung" v-model="product.description"/>
        <input class="updateInput" type="text" name="Einheiten verfügbar" placeholder="Einheiten verfügbar" v-model="product.units_available"/>
        <input class="updateInput" type="text" name="Einheit" placeholder="Einheit" v-model="product.unit"/>
        <input class="updateInput" type="text" name="Einkaufspreis" placeholder="Einkaufspreis" v-model="product.purchasing_price_per_unit"/>
        <input class="updateInput" type="text" name="Verkaufspreis" placeholder="Verkaufspreis" v-model="product.selling_price_per_unit"/>
        <button class="updateInputBtn" type="button" v-on:click="updateProduct()">
            Produkt ändern
        </button>
    </form>
</template>

<script>
import axios from "axios";
export default {   
    name:'UpdateProduct',
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
        goback(){
            this.$router.push({name:"Product"});
        },
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
            console.log(result);
            if(result.status == 200){
                this.$router.push({name:"Product"});
            } else {
                alert("Result " + result.status);
            }
        }
    },


    async mounted() {
        let user = localStorage.getItem("user-info");
        if(!user|| user == null) {
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
