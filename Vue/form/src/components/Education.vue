<template>
    <div class="education-container">
        <h3><b>EDUCATION</b></h3>
        <div class="education-container-grid">
            <div>
                <label for="education">Education</label><br>
                <input id="education" v-model="education" type="text" name="education">
            </div>
            <div>
                <label for="finished">Finished</label><br>
                <input id="finished" v-model="finished" type="number" name="finished" min="1980" max="2020">
            </div>
        </div>
        
        <button class="add"><img src="/img/add.png">Add</button>

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
.education-container
    position: absolute
    top: 0vh
    right: -8vw
    
.education-container-grid
    position: absolute

    display: grid 
    grid-template-columns: 1fr 1fr
    
button
    border: none
    background-color: white
    color: #85B2FF
    font-size: 16px
    padding: 10px

input
    padding: 15px 10px 15px 10px
    font-size: 16px
    width: 315px
    border: 1px solid #CCCCCC
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08)
    transition: box-shadow 0.3s , border 0.3s


input#finished
    width: 100px
input:hover
    box-shadow: 0px 5px 20px #C4C4C4
    border-color: #fff

h3 b
    float: left
    font-size: 16px

label
    float: left
    padding: 5px 0px 5px 10px
.add
    position: relative
    top: 100px
</style>
