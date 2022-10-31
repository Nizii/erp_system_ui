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
        localStorage.clear();
        return{
            user_name:'',
            user_email:'',
            user_password:''
        }
    },
    methods:{
        async signUp() {
            await axios.post("https://men5.azurewebsites.net/api/user?user_name="+this.user_name+"&user_email="+this.user_email+"&user_password="+this.user_password)
                //let result = axios.post(variables.API_URL + "user",{
                //let result = axios.post("http://localhost:49146/api/User",{
            .then(resp =>{
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
        }
    },
    mounted() {        
        let token = localStorage.getItem("user-info");
        if(token) {
            this.$router.push({name:'Home'});
        } 
    } 
}
</script>

<style>
</style>