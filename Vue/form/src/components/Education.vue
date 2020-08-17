<template>
    <div>
        <h3><b>EDUCATION</b></h3>
    <div>
        <label for="education">Education</label><br>
        <label for="finished">Finished</label><br>
        <input id="education" v-model="education" type="text" name="education">
        <input id="finished" v-model="finished" type="number" name="finished" min="1980" max="2020">
    </div>
    
    <button><img src="/img/add.png">Add</button>

    </div>
</template>




<script>

export default {
    props:{
        education: String,
        finished: Number

    }
}
</script>


<style lang="sass" scoped>
div
    
button
    border: none
    background-color: white
    color: #85B2FF
    font-size: 16px
    padding: 10px

    
</style>
