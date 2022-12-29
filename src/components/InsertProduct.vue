<template>
    <Header/>
    <form>
        <div id="backBtnContent">
            <button class="backBtn" type="button" v-on:click="goback()">
             Zurück
            </button>
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Produkt</p>
            <input v-model="product_name">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Grösse</p>
            <input v-model="product_size">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Beschreibung</p>
            <input v-model="description">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Verfügbare Einheiten</p>
            <input v-model="units_available">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Einheit</p>
            <input v-model="unit">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Einkaufspreis pro Einheit</p>
            <input v-model="purchasing_price_per_unit">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Verkaufspreis pro Einheit</p>
            <input v-model="selling_price_per_unit">
        </div>
        <div class="addBtnContent">
            <button class="addInputBtn" type="button" v-on:click="addProduct()">
                OK
            </button>
        </div>
    </form>
</template>

<script>
import axios from "axios";
import Header from './Header.vue';

export default {   
    name:'InsertProduct',
    components: {
        Header,
    },
    data() {
        return {
            result:[],
            product_nr:"",
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
        goback(){
            this.$router.push({name:"Product"});
        },
        async addProduct() {
            const result = await axios.post("http://localhost:49146/api/product", {
                product_name:this.product_name,
                product_size:this.product_size,
                description:this.description,
                units_available:this.units_available,
                unit:this.unit,
                purchasing_price_per_unit:this.purchasing_price_per_unit,
                selling_price_per_unit:this.selling_price_per_unit,
            });
            if (result.status == 201 || result.status == 200) {
                this.$router.push({name:"Product"});
            } else {
                alert("Result " + result.status);
            }
        },
       
    },

    async mounted() {
        let token = localStorage.getItem("user-info");
        if(!token) {
            this.$router.push({name:'SignUp'});
        }
    }
}
</script>