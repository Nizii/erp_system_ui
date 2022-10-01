<template>
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="user_name" placeholder="Enter Name"/>
        <input type="text" v-model="user_email" placeholder="Enter Email"/>
        <input type="password" v-model="user_password" placeholder="Enter Password"/>
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>
</template>

<script>
    const bcrypt = require('bcryptjs');
    import axios from 'axios'
    export default {
    name: 'SignUp',
    data() {
        localStorage.clear();
        return{
            user_name:'',
            user_email:'',
            user_password:''
        }
    },
    methods:{
        async signUp() {
            await axios.post("https://men5.azurewebsites.net/api/user", { 
                params: {
                //let result = axios.post(variables.API_URL + "user",{
                //let result = axios.post("http://localhost:49146/api/User",{
                //"http://localhost:49146/api/User", {
                    user_name:this.user_name,
                    user_email:this.user_email,
                    user_password:this.user_password
                }
            }).then(resp =>{
                if(resp.status == 200 && resp.data[1] != null && resp.data[2] != null) {
                    alert(resp.data[0]);
                    localStorage.setItem("user-info", JSON.stringify(resp.data));
                    this.$router.push({name:'Home'});
                } 
                else {
                    alert(resp.data[0]);
                }
            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
                });
        }/*,
        async signUp2() {
            const saltRounds = 10;
            const hash = bcrypt.hashSync(this.user_password, saltRounds);
            await axios.post(//"https://men5.azurewebsites.net/api/user", {
                //let result = axios.post(variables.API_URL + "user",{
                //let result = axios.post("http://localhost:49146/api/User",{
                "http://localhost:49146/api/User", { params: {
                user_name:this.user_name,
                user_email:this.user_email,
                user_password:hash
                }
            }).then(resp =>{
                localStorage.setItem("user-info", JSON.stringify(resp.data));
                //alert("Registration Erfolgreich");
                this.$router.push({name:'Home'});
            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
                });
        },*/
    },
    mounted() {        
        let user = localStorage.getItem("user-info");
        if(user) {
            this.$router.push({name:'Home'});
        } 
    } 
}
</script>

<style>
</style>