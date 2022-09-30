<template>
    <div class="nav">
        <a href="#">Kontakte</a>
        <a href="#">Offerten</a>
        <a href="#">Produkte</a>
        <a href="#">Logout</a>
    </div>
</template>

<script>
export default {
    name:"Header"
}
</script>

<style>
    .nav {
        background-color: #333;
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