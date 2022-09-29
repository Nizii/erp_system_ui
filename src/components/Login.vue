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
export default {
    name: "Login"
}
</script>
