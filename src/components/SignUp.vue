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
            const saltRounds = 10;
            const hash = bcrypt.hashSync(this.user_password, saltRounds);
            await axios.post("https://men5.azurewebsites.net/api/user", {
                //let result = axios.post(variables.API_URL + "user",{
                //let result = axios.post("http://localhost:49146/api/User",{
                user_name:this.user_name,
                user_email:this.user_email,
                user_password:hash
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
        }
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