<template>
    <Header/>
    <h1>Kontakt hinzufügen</h1>
</template>

<script>

export default {
    name:'UpdateCustomer',
    data() {
        return {

        }
    },

    mounted() {
        let user = localStorage.getItem("user-info");
        if(!user) {
            this.$router.push({name:'SignUp'});
        }
        let array = user.toString().split(",");
        this.name = array[2].slice(1, -2);
    }
}


</script>

<style>

</style>
