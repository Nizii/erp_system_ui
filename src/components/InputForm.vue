<template>
    <Header/>
    <form>
        <div id="backBtnContent">
            <button class="backBtn" type="button" v-on:click="goback()">
             Zurück
            </button>
        </div>
        <div v-for = "(value, key) in result[0]" :key="value.value" >
            <div class="inputContent">
                <p class="inputLabel" >{{key}}</p>
                <Input v-if="this.$route.params.case === 'updateCustomer'" :value = value />
                <Input v-else-if="this.$route.params.case === 'updateCustomerBill'" :value = value />
                <Input v-else-if="this.$route.params.case === 'updateProduct'" :value = value />
                <Input v-else v-model="this.result[0][value]" />
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
            switch(value) {
                case "updateCustomer":
                    this.updateCustomer();
                break;
                case "addCustomer":
                    console.log("Here" + this.result[0]);
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
                CompanyName:this.result[0].CompanyName,
                Surname:this.result[0].Surname,
                Lastname:this.result[0].Lastname,
                Dob:this.result[0].Dob,
                Street:this.result[0].Street,
                Nr:this.result[0].Nr,
                Postcode:this.result[0].Postcode,
                Country:this.result[0].Country,
                Cellphone:this.result[0].Cellphone,
                Landlinephone:this.result[0].Landlinephone,
                Email:this.result[0].Email,
                Note:this.result[0].Note
            });
            if (result.status == 201 || result.status == 200) {
                this.$router.push({name:"Customer"});
            } else {
                alert("Result " + result.status);
            }
        },
        async updateCustomer(){
            const result = await axios.put("http://localhost:49146/api/customer/",{
                CustomerNr:this.result[0].CustomerNr,
                CompanyName:this.result[0].CompanyName,
                Surname:this.result[0].Surname,
                Lastname:this.result[0].Lastname,
                Dob:this.result[0].Dob,
                Street:this.result[0].Street,
                Nr:this.result[0].Nr,
                Postcode:this.result[0].Postcode,
                Country:this.result[0].Country,
                Cellphone:this.result[0].Cellphone,
                Landlinephone:this.result[0].Landlinephone,
                Email:this.result[0].Email,
                Note:this.result[0].Note
            });
            if(result.status == 200){
                this.$router.push({name:"Customer"});
            } else {
                alert("Result " + result.status);
            }
        }, 
        async addCustomerBill() {
            console.log(this.result)
            const result = await axios.post("http://localhost:49146/api/customerBill", {
                CompanyName:this.result[0].CompanyName,
                ContactPerson:this.result[0].ContactPerson,
                CustomerStreet:this.result[0].CustomerStreet,
                CustomerPostcode:this.result[0].CustomerPostcode,
                Amount:this.result[0].Amount,
                Currency:this.result[0].Currency,
                CustomerBillNr:this.result[0].CustomerBillNr,
                IssuedOn:this.result[0].IssuedOn,
                PaymentDate:this.result[0].PaymentDate,
            });
            if (result.status == 201 || result.status == 200) {
                this.$router.push({name:"CustomerBill"});
            } else {
                alert("Result " + result.status);
            }
        },
        async updateCustomerBill(){
            const result = await axios.put("http://localhost:49146/api/customerBill/",{
                CustomerBillNr:this.result[0].CustomerBillNr,
                CompanyName:this.result[0].CompanyName,
                ContactPerson:this.result[0].ContactPerson,
                CustomerStreet:this.result[0].CustomerStreet,
                CustomerPostcode:this.result[0].CustomerPostcode,
                Amount:this.result[0].Amount,
                Currency:this.result[0].Currency,
                IssuedOn:this.result[0].IssuedOn,
                PaymentDate:this.result[0].PaymentDate,
            });
            if(result.status == 200){
                this.$router.push({name:"CustomerBill"});
            } else {
                alert("Result " + result.status);
            }
        }, 
        async addProduct() {
            const result = await axios.post("http://localhost:49146/api/product", {
                ProductName:this.result[0].ProductName,
                ProductSize:this.result[0].ProductSize,
                PurchasingPricePerUnit:this.result[0].PurchasingPricePerUnit,
                SellingPricePerUnit:this.result[0].SellingPricePerUnit,
                Unit:this.result[0].Unit,
                UnitsAvailable:this.result[0].UnitsAvailable,
                Description:this.result[0].Description,
            });
            if (result.status == 201 || result.status == 200) {
                this.$router.push({name:"Product"});
            } else {
                alert("Result " + result.status);
            }
        },
        async updateProduct(){
            const result = await axios.put("http://localhost:49146/api/product/",{
                ProductNr:this.result[0].ProductNr,
                ProductName:this.result[0].ProductName,
                ProductSize:this.result[0].ProductSize,
                PurchasingPricePerUnit:this.result[0].PurchasingPricePerUnit,
                SellingPricePerUnit:this.result[0].SellingPricePerUnit,
                Unit:this.result[0].Unit,
                UnitsAvailable:this.result[0].UnitsAvailable,
                Description:this.result[0].Description,
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
        if(!token) {
            this.$router.push({name:'SignUp'});
        }
        switch(this.$route.params.case) {
                case "updateCustomer":
                    var resp = await axios.get("http://localhost:49146/api/customer/"+this.$route.params.id);
                    var resp = await axios.get("http://localhost:49146/api/customer/"+this.$route.params.id);
                    this.result = resp.data;
                break;
                case "addCustomer":
                    var resp = await axios.get("http://localhost:49146/api/customer/"+this.$route.params.id);
                    this.result = resp.data;
                break;
                case "updateCustomerBill":
                var resp = await axios.get("http://localhost:49146/api/customerBill/"+this.$route.params.id);
                    this.result = resp.data;
                break;
                case "addCustomerBill":
                var resp = await axios.get("http://localhost:49146/api/customerBill/"+this.$route.params.id);
                    this.result = resp.data;
                break;
                case "updateProduct":
                var resp = await axios.get("http://localhost:49146/api/product/"+this.$route.params.id);
                    this.result = resp.data;
                break;
                case "addProduct":
                var resp = await axios.get("http://localhost:49146/api/product/"+this.$route.params.id);
                    this.result = resp.data;
                break;
                default: 
            }
    }
}


</script>

<style>

</style>
