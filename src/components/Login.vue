<template>
    <h1>Login</h1>
    <div class="register">
        <input type="text" v-model="user_name" placeholder="Enter Name"/>
        <input type="password" v-model="user_password" placeholder="Enter Password"/>
        <button v-on:click="login">Login</button>
        <p>
            <router-link to="/sign-up">Sign Up</router-link>
        </p>
    </div>
</template>

<script>
    const bcrypt = require('bcryptjs');
    import axios from "axios"
    export default {
        name: "Login",
        data() {
            localStorage.clear();
            return {
                user_name:"",
                user_password:""
            }
        },
        methods: {
            async login() {
                await axios.get("https://men5.azurewebsites.net/api/user?user_name=" + this.user_name)
                .then(resp => {
                    bcrypt.compare(this.user_password, resp.data, function(err, hash_result){
                        if(hash_result && resp.status == 200 && resp.data.length > 0) {
                            alert("Login Erfolgreich " + hash_result);
                            localStorage.setItem("user-info", JSON.stringify(resp.data));
                            this.$router.push({name:'Home'});
                        } else {
                            alert("Login nicht Erfolgreich " + hash_result);
                        }
                    });
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
