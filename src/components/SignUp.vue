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
    import axios from 'axios'
    export default {
    name: 'SignUp',
    data() {
        return{
            user_name:'',
            user_email:'',
            user_password:''
        }
    },
    methods:{
        async signUp() {
            let result = axios.post("https://men5.azurewebsites.net/api/user",{
            //let result = axios.post(variables.API_URL + "user",{
            //let result = axios.post("http://localhost:49146/api/User",{
            user_name:this.user_name,
            user_email:this.user_email,
            user_password:this.user_password
        });
        console.log("Result Response" + result);
        
        console.warn(result);
        if(result.status == 201){
            alert("SignUp done");
            localStorage.setItem("user-info", JSON.stringify(result.data));
            //this.$router.push({name:'MyHome'});
            }
            this.$router.push({name:'MyHome'});
        }
        
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if(user) {
            this.$router.push({name:'MyHome'});
        }
    }
}
</script>

<style>
</style>