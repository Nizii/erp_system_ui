<template>
    <h1>Welcome to Home</h1>
</template>

<script>
export default{
    name:'MyHome',
    mounted() {
        let user = localStorage.getItem("user-info");
        if(!user) {
            this.$router.push({name:'SignUp'});
        }
    }
}
</script>
