<template>
    <div class="nav">
        <router-link href="#" to="customer">Kontakte</router-link>
        <a href="#">Offerten</a>
        <router-link href="#" to="product">Produkte</router-link>
        <a v-on:click="logout" href="#">Logout {{name}}</a>
    </div>
</template>

<script>
export default {
    name:"Header",
    data() {
        return {
            name:''
        }
    },
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:"Login"})
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if(!user) {
            this.$router.push({name:'SignUp'});
        }
        console.log(user);
        let array = user.toString().split(",");
        this.name = array[2].slice(1, -2);
    }
}
</script>

<style>
    .nav {
        background-color: #483D8B;
        overflow: hidden;
    }

    .nav a {
        float: left;
        color: whitesmoke;
        padding: 14px 15px;
        font-size: 17px;
        text-align: center;
        margin-right: 5px;
        text-decoration: none;
    }

    .nav a hover {
        background-color: #ddd;
        color: #333;
    }
    
</style>