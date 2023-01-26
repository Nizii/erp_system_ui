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

.bodyInsideApp{
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
}

.logo{
  width: 100px;
}

.item{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border:1px solid black;
  background-color: #ccc;
}

.item:hover{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border:1px solid black;
  background-color: yellow;
  color: black
}

.menu-container{

}

#chartContainer{
  margin-top: 50px;
  width: 300px;
  height: 300px;
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

/*
.addInput, .updateInput, .backBtn{
  width: 300px;
  height: 20px;
  display: block;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
  border:1px solid skyblue;
}
*/
.addInputBtn, .updateInputBtn, .backBtn{
  width: 135px;
  height: 40px;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
}

.addInputBtn, .updateInputBtn{
  background-color: rgb(64, 147, 180);
}
.addInputBtn:hover{
  background-color: rgb(199, 199, 199);
  color:black;
}

.backBtn:hover {
  background-color: rgb(199, 199, 199);
  color:black;
}

.updateInputBtn:hover{
  background-color: rgb(199, 199, 199);
  color:black;
}


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

form{
  background-color: GhostWhite;
}

#backBtnContent{

}
#addBtnContent{

}

form input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

#select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}


.inputContent {
  display: flex; 
  flex-direction: row; 
  justify-content: center; 
  align-items: center;
  height: 50px;
  background-color: antiquewhite;
  margin-left: 39%;
  margin-right: 39%;  
  margin-top: 0.3%;
  margin-bottom: 0.3%;
  padding-right: 0.33%;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.inputContent:nth-child(even){background-color: #f2f2f2}


.addInput{
  height: 30px;
}

.inputLabel {
  text-align: left;
  width: 300px;  
  padding-left: 3%;
}

table {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  border-collapse: collapse;
  border-spacing: 0;
}

th {
  background-color: Sienna;
  color: whitesmoke;
  font-weight: normal;
}

tr{
  background-color: antiquewhite;
  border: 1px solid #ccc;
  height: 40px;
}


td{
  border: 1px solid #ccc;
}

th, td {
  text-align: left;
  padding: 8px;
  width: auto;
}
tr:nth-child(even){background-color:  #f2f2f2}

.selected-row{
  /*background-color: rgb(199, 199, 199) !important;*/
  background-color: #bcc2f3 !important;
}

tr:hover {
  background-color: #bcc2f3;
}
.pointer {cursor: pointer;}

th:hover {
  background-color: #7a260e;
}.pointer {cursor: pointer;}


.tableBtn{
  width: 25px;
  height: 25px;
}

.tableBtn:hover{
  transform: scale(1.2);
}

.updateBtn, .deleteBtn, .addBtn{
  font-size: 15px;
  color: whitesmoke;
  padding: 0;
}

#myInput {
  background-position: 10px 12px; /* Position the search icon */
  background-repeat: no-repeat; /* Do not repeat the icon image */
  width: auto; /* Full-width */
  font-size: 16px; /* Increase font-size */
  padding: 12px 20px 12px 40px; /* Add some padding */
  border: 1px solid #ccc;
  border-radius: 4px;
  border-collapse: collapse;
  border-spacing: 0;
  margin-bottom: 12px; /* Add some space below the input */
}
</style>
