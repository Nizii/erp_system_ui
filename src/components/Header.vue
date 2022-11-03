<template>
    <div class="nav">
        <router-link class="routerNav" href="#" to="customer">Kontakte</router-link>
        <router-link class="routerNav" href="#" to="customerBill">Rechungen</router-link>
        <router-link class="routerNav" href="#" to="product">Produkte</router-link>
        <a id="logoutBtn" class="routerNav" v-on:click="logout" href="#">Logout {{name}}</a>
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
        let token = localStorage.getItem("user-info");
        if(!token) {
            this.$router.push({name:'SignUp'});
        } 
        console.log("Header " + token);
    }
}
</script>

<style>
    .nav {
        background-color: #483D8B;
        overflow: hidden;
    }

    .routerNav {
        float: left;
        color: whitesmoke;
        padding: 14px 15px;
        font-size: 15px;
        text-align: center;
        text-decoration: none;
        transition: 0.3s;
    }

    .nav .routerNav:hover {
        background-color: #ddd;
        color: #333;
    }

    #logoutBtn{
        float: right;
    }
    
</style>