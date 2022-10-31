<template>
    <Header/>
    <h1>Welcome {{name}} to Home</h1>
</template>

<script>
import Header from './Header.vue';
export default {
    name:'Home',
    data() {
        return {
            name:''
        }
    },
    name:'Home',
    components: {
        Header
    },
    mounted() {
        let token = localStorage.getItem("user-info");
        if(!token) {
            this.$router.push({name:'SignUp'});
        }
    }
}
</script>
