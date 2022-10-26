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

.content{
  width: 100%;
}

body{
  padding: 0;
  margin: 0;
}

.bodyInsideApp{
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
}

.logo{
  width: 100px;
}

.register input{
  width: 300px;
  height: 40px;
  display: block;
  padding-left: 20px;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  border:1px solid skyblue;
}

.register button{
  width: 326px;
  height: 50px;
  border: 1px solid skyblue;
  background: skyblue;
  color: white;
  cursor: pointer;
}

.addInput, .updateInput, .backBtn{
  width: 300px;
  height: 30px;
  display: block;
  padding-left: 20px;
  margin-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
  border:1px solid skyblue;
}

.addInputBtn, .updateInputBtn, .backBtn{
  width: 326px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: white;
  cursor: pointer;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

th {
  background-color: antiquewhite;
}

th, td {
  text-align: left;
  padding: 3px;
  text-align: center;
  border: 0.5px solid;
}
tr:nth-child(even){background-color: #f2f2f2}
tr:hover {
  background-color: yellow;
}
.pointer {cursor: pointer;}

.addBtn{
  background-color: #52BE80;
}
.deleteBtn{
  background-color: #EC7063;
}
.updateBtn{
  background-color: skyblue;
}
.backBtn{
  background-color: #483D8B;
  color: white;
}

button{
  width: 20px;
  height: 20px;
}

.updateBtn, .deleteBtn, .addBtn{
  font-size: 15px;
  font-weight: bold;
  color: whitesmoke;
  padding: 0;
}


</style>
