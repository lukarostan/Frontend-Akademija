<template>
    <div>
    <h3><b>LOCATION</b></h3>
    
    <p>
    <label for="country">Country</label><br>
    <input
    id="country"
    v-model="country"
    type="text"
    name="country"
    placeholder="Enter Country">
    </p>
    
    <p>
        <label for="city">City</label><br>
        <input
        id="city"
        v-model="city"
        type="text"
        name="city"
        placeholder="Enter City">
    
    </p>
    </div>
        
</template>

<script>
export default {
    props:{
        country:String,
        city:String
    }
    
}
</script>

<style lang="sass" scoped>
div
    display: flex
    flex-direction: column
input
    padding: 15px 10px 15px 10px
    min-width: 420px
    font-size: 16px
    border: 1px solid #CCCCCC
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08)
    transition: box-shadow 0.3s , border 0.3s

input:hover
    box-shadow: 0px 5px 20px #C4C4C4
    border-color: #fff

h3 b
    padding: 10px 0px
    float: left
    font-size: 16px

label
    float: left
    padding: 5px 0px 5px 10px
</style>

