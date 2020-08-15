<template>
  <div class="form">
    <h1>My Profile</h1>
    <h2>Edit account information</h2>
    <div>


    <!-- <form id="app" @submit="checkForm" action="" method="post"> -->
    <Personal />
    
    
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
    <div>
    <h3>
    <b>EDUCATION</b>
    </h3>
    
    <p>
    <label for="education">Education</label><br>
    <input
    id="education"
    v-model="education"
    type="text"
    name="education">
    <br>
    <br>
    <input
    id="education"
    v-model="education"
    type="text"
    name="education">
    </p>
    <p>
    <label for="Finished">Finished</label><br>
    <input
    id="finished"
    v-model="finished"
    type="number"
    name="finished"
    min="1980"
    max="2020">
    <br>
    <br>
    <input
    id="finished"
    v-model="finished"
    type="number"
    name="finished"
    min="1980"
    max="2020">
    </p>
    <button><i class="fas fa-plus-circle"></i>Add</button>
    </div>
    <input type="submit" value="SAVE CHANGES">    
    <!-- </form> -->
    </div>
</template>

<script>

import Personal from "./Personal.vue"

export default {
  name: 'Form',
  components:{
    Personal,
    
/* 
  data(){
    return{
    
    surName: "",
    eMail:"",
    phone:"",
    country:"",
    city:"",
    education:"",

    } */
  }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h1
  font-size: 45px
  position: absolute
  left: 10vw
  top: 12vh

</style>
