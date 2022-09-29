<template>
  <img class="logo" alt="Vue logo" src="./assets/images.png">
  <router-view/>
</template>

<script>
  export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo{
  width: 100px;
}
.register input{
  width: 300px;
  height: 40px;
  display: block;
  padding-left: 20px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border:1px solid skyblue;
}

.register button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: white;
  cursor: pointer;
}
</style>
