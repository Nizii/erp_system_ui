<template>
    <Header/>
    <form>
        <div id="backBtnContent">
            <button class="backBtn" type="button" v-on:click="goback()">
             Zurück
            </button>
        </div>
        <div v-for = "(value, key) in result" :key="value.value">
            <div class="inputContent">
            <p class="inputLabel" >{{key}}</p>
            <Input :value=value />
            </div>
        </div>
        <div class="addBtnContent">
            <button class="addInputBtn" type="button" v-on:click="addCustomer()">
                OK
            </button>
        </div>
    </form>
</template>

<script>
import axios from "axios";
import Input from "./Input.vue"
import Header from './Header.vue';

export default {   
    name:'InputForm',
    components: {
        Header,
        Input,
    },
    data() {
        return {
            result:{},
            company_name: "",
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
        goback(){
            this.$router.push({name:"Customer"});
        },
        getResult(){
            console.log(this.result);
        },
        async addCustomer() {
            let token = localStorage.getItem("user-info");
            console.log("Func AddCus " +token);
            const result = await axios.post("http://localhost:49146/api/Customer", {
                company_name:this.customer.company_name,
                surname:this.customer.surname,
                lastname:this.customer.lastname,
                dob:this.customer.dob,
                street:this.customer.street,
                nr:this.customer.nr,
                postcode:this.customer.postcode,
                country:this.customer.country,
                cellphone:this.customer.cellphone,
                landlinephone:this.customer.landlinephone,
                email:this.customer.email,
                note:this.customer.note
            }, 
            {
                headers: {"AuthToken" : token}
            });

            if (result.status == 201 || result.status == 200) {
                this.$router.push({name:"Customer"});
            } else {
                alert("Result " + result.status);
            }
        },
        async updateCustomer(){
            let token = localStorage.getItem("user-info");
            const result = await axios.put("http://localhost:49146/api/customer/",{
            //const result = await axios.put("http://localhost:49146/api/Customer",{
                customer_nr:this.customer.customer_nr,
                surname:this.customer.surname,
                lastname:this.customer.lastname,
                dob:this.customer.dob,
                street:this.customer.street,
                nr:this.customer.nr,
                postcode:this.customer.postcode,
                country:this.customer.country,
                cellphone:this.customer.cellphone,
                landlinephone:this.customer.landlinephone,
                email:this.customer.email,
                note:this.customer.note
            },{headers: {"AuthToken" : token}});
            if(result.status == 200){
                this.$router.push({name:"Customer"});
            } else {
                alert("Result " + result.status);
            }
        }, 
    },

    async mounted() {
        let token = localStorage.getItem("user-info");
        console.log("Update " + token);
        if(!token) {
            this.$router.push({name:'SignUp'});
        }
        console.log("Case "+ this.$route.params.case);
        switch(this.$route.params.case) {
                case "updateCustomer":
                    var result = await axios.get("http://localhost:49146/api/customer/"+this.$route.params.id, {headers: {"AuthToken" : token}});
                    this.result = result.data;
                    console.log("Result "+result);
                break;
                case "addCustomer":
                    var result = await axios.get("http://localhost:49146/api/customer/"+this.$route.params.id, {headers: {"AuthToken" : token}});
                    this.result = result.data;
                break;
                case "updateCustomerBill":
                var result = await axios.get("http://localhost:49146/api/customerBill/"+this.$route.params.id, {headers: {"AuthToken" : token}});
                    this.result = result.data;
                break;
                case "addCustomerBill":
                var result = await axios.get("http://localhost:49146/api/customerBill/"+this.$route.params.id, {headers: {"AuthToken" : token}});
                    this.result = result.data;
                break;
                case "updateProduct":
                var result = await axios.get("http://localhost:49146/api/product/"+this.$route.params.id, {headers: {"AuthToken" : token}});
                    this.result = result.data;
                break;
                case "addProduct":
                var result = await axios.get("http://localhost:49146/api/product/"+this.$route.params.id, {headers: {"AuthToken" : token}});
                    this.result = result.data;
                break;
                default:
                
            }
    }
}


</script>

<style>

</style>
