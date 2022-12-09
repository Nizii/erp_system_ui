<template>
    <Header/>
    <form>
        <div id="backBtnContent">
            <button class="backBtn" type="button" v-on:click="goback()">
             Zurück
            </button>
        </div>
        <div v-for = "(value, key) in result[0]" :key="value.value">
            <div class="inputContent">
            <p class="inputLabel" >{{key}}</p>
            <Input :value=value />
            </div>
        </div>
        <div class="addBtnContent">
            <button class="addInputBtn" type="button" v-on:click="add(this.$route.params.case)">
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
            result:[],
        }
    },

    methods:{
        goback(){
            this.$router.push({name:"Customer"});
        },
        getResult(){
            console.log(this.result);
        },
        add(value){
            console.log("Case "+ this.$route.params.case);
            switch(value) {
                case "updateCustomer":
                    this.updateCustomer();
                break;
                case "addCustomer":
                    this.addCustomer();
                break;
                case "updateCustomerBill":
                    this.updateCustomerBill();
                break;
                case "addCustomerBill":
                    this.addCustomerBill();
                break;
                case "updateProduct":
                    this.updateProduct();
                break;
                case "addProduct":
                    this.addProduct();
                break;
                default: 
            }
        },
        async addCustomer() {
            const result = await axios.post("http://localhost:49146/api/customer", {
                CompanyName:this.result.CompanyName,
                Surname:this.result.Surname,
                Lastname:this.result.Lastname,
                Dob:this.result.Dob,
                Street:this.result.Street,
                Nr:this.result.Nr,
                Postcode:this.result.Postcode,
                Country:this.result.Country,
                Cellphone:this.result.Cellphone,
                Landlinephone:this.result.Landlinephone,
                Email:this.result.Email,
                Note:this.result.Note
            });
            if (result.status == 201 || result.status == 200) {
                this.$router.push({name:"Customer"});
            } else {
                alert("Result " + result.status);
            }
        },
        async updateCustomer(){
            const result = await axios.put("http://localhost:49146/api/customer/",{
                customer_nr:this.result.customer_nr,
                surname:this.result.surname,
                lastname:this.result.lastname,
                dob:this.result.dob,
                street:this.result.street,
                nr:this.result.nr,
                postcode:this.result.postcode,
                country:this.result.country,
                cellphone:this.result.cellphone,
                landlinephone:this.result.landlinephone,
                email:this.result.email,
                note:this.result.note
            });
            if(result.status == 200){
                this.$router.push({name:"Customer"});
            } else {
                alert("Result " + result.status);
            }
        }, 
        async addCustomerBill() {
            const result = await axios.post("http://localhost:49146/api/customerBill", {
                Amount:this.result.CompanyName,
                CompanyName:this.result.Surname,
                ContactPerson:this.result.Lastname,
                Currency:this.result.Dob,
                CustomerBillNr:this.result.Street,
                CustomerPostcode:this.result.Nr,
                CustomerStreet:this.result.Postcode,
                IssuedOn:this.result.Country,
                PaymentDate:this.result.Cellphone,
            });
            if (result.status == 201 || result.status == 200) {
                this.$router.push({name:"CustomerBill"});
            } else {
                alert("Result " + result.status);
            }
        },
        async updateCustomerBill(){
            const result = await axios.put("http://localhost:49146/api/customerBill/",{
                CustomerBillNr:this.result.CustomerBillNr,
                Amount:this.result.CompanyName,
                CompanyName:this.result.Surname,
                ContactPerson:this.result.Lastname,
                Currency:this.result.Dob,
                CustomerBillNr:this.result.Street,
                CustomerPostcode:this.result.Nr,
                CustomerStreet:this.result.Postcode,
                IssuedOn:this.result.Country,
                PaymentDate:this.result.Cellphone,
            });
            if(result.status == 200){
                this.$router.push({name:"CustomerBill"});
            } else {
                alert("Result " + result.status);
            }
        }, 
        async addProduct() {
            const result = await axios.post("http://localhost:49146/api/product", {
                ProductName:this.result.ProductName,
                ProductSize:this.result.ProductSize,
                PurchasingPricePerUnit:this.result.PurchasingPricePerUnit,
                SellingPricePerUnit:this.result.SellingPricePerUnit,
                Unit:this.result.Unit,
                UnitsAvailable:this.result.UnitsAvailable,
                Description:this.result.Description,
            });
            if (result.status == 201 || result.status == 200) {
                this.$router.push({name:"Product"});
            } else {
                alert("Result " + result.status);
            }
        },
        async updateProduct(){
            const result = await axios.put("http://localhost:49146/api/product/",{
                ProductNr:this.result.ProductNr,
                ProductName:this.result.ProductName,
                ProductSize:this.result.ProductSize,
                PurchasingPricePerUnit:this.result.PurchasingPricePerUnit,
                SellingPricePerUnit:this.result.SellingPricePerUnit,
                Unit:this.result.Unit,
                UnitsAvailable:this.result.UnitsAvailable,
                Description:this.result.Description,
            });
            if(result.status == 200){
                this.$router.push({name:"Product"});
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
                    var result = await axios.get("http://localhost:49146/api/customer/"+this.$route.params.id);
                    this.result = result.data;
                break;
                case "addCustomer":
                    var result = await axios.get("http://localhost:49146/api/customer/"+this.$route.params.id);
                    this.result = result.data;
                break;
                case "updateCustomerBill":
                var result = await axios.get("http://localhost:49146/api/customerBill/"+this.$route.params.id);
                    this.result = result.data;
                break;
                case "addCustomerBill":
                var result = await axios.get("http://localhost:49146/api/customerBill/"+this.$route.params.id);
                    this.result = result.data;
                break;
                case "updateProduct":
                var result = await axios.get("http://localhost:49146/api/product/"+this.$route.params.id);
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
