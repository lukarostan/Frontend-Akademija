<template>
    <header>
        <div class="menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#services">Services</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
            <div class="icons">
                <img src="/img/heart.png" class="far fa-heart"> 
                <img src="/img/cart.png" class="fas fa-shopping-cart"> 
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name:"page-header",
    
    
}
</script>

<style scoped lang="sass">
header 
    background: #383B37
    box-shadow: 0px 1vh 2vh rgba(0, 0, 0, 0.2)
    width: 100%
    height: 9vh
    .menu
        display: flex
        flex-direction: row
        justify-content: center
        a
            text-decoration: none
            color: white
            font-weight: bold
            font-size: 1.8vh
            line-height: 2vh
            text-align: center
            margin-top: 3.1vh
            padding: 0 2.2vh
            border-right: solid 1px black
        .icons
            color: white
            float: right
            img
                margin-top: 3.3vh
                margin-left: 3.1vh
                cursor: pointer
                width: 2.5vh
                height: 2.5vh

</style>