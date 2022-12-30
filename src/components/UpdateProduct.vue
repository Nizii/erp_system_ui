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
            <input v-model="result.product_name">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Grösse</p>
            <input v-model="result.product_size">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Beschreibung</p>
            <input v-model="result.description">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Verfügbare Einheiten</p>
            <input v-model="result.units_available">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Einheit</p>
            <input v-model="result.unit">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Einkaufspreis pro Einheit</p>
            <input v-model="result.purchasing_price_per_unit">
        </div>
        <div class="inputContent">
            <p class="inputLabel" >Verkaufspreis pro Einheit</p>
            <input v-model="result.selling_price_per_unit">
        </div>
        <div class="addBtnContent">
            <button class="addInputBtn" type="button" v-on:click="update()">
                OK
            </button>
        </div>
    </form>
</template>

<script>
import axios from "axios";
import Header from './Header.vue';

export default {   
    name:'UpdateProduct',
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
        getResult(){
            console.log(this.result);
        },
        async update() {
            const result = await axios.put("http://localhost:49146/api/product", {
                product_nr:this.result.product_nr,
                product_name:this.result.product_name,
                product_size:this.result.product_size,
                description:this.result.description,
                units_available:this.result.units_available,
                unit:this.result.unit,
                purchasing_price_per_unit:this.result.purchasing_price_per_unit,
                selling_price_per_unit:this.result.selling_price_per_unit,
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
        var resp = await axios.get("http://localhost:49146/api/product/"+this.$route.params.id);
        this.result = resp.data;
    }
}
</script>