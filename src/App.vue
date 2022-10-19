<template>
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
}


body{
  padding: 0;
  margin: 0;
}

.logo{
  width: 100px;
}

.register input, .addCustomer, .updateCustomer{
  width: 300px;
  height: 30px;
  display: block;
  padding-left: 20px;
  margin-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
  border:1px solid skyblue;
}

.register button, .addCustomerBtn, .updateCustomerBtn{
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: white;
  cursor: pointer;
}



thead{
  background-color: antiquewhite;
}

tbody{
  background-color: azure;
}

.addBtn{
  background-color: #52BE80;
}
.deleteBtn{
  background-color: #EC7063;
}
.updateBtn{
  background-color: #5DADE2;
}

button{
  width: 50px;
  height: 50px;
}

.updateBtn, .deleteBtn, .addBtn{
  font-size: 30px;
  font-weight: bold;
  color: whitesmoke
}

tr{

}
td{
  padding: 10px;
}


</style>
