<template>
  <div class="container">
    <h1>My Profile</h1>
    <h2>Edit account information</h2>
    <form>
      <Personal />
      <Location />
      <Education />
      <input class="submit" type="submit" value="SAVE CHANGES">
    </form>
  </div>
</template>

<script>

import Personal from "./Personal.vue"
import Location from "./Location.vue"
import Education from "./Education.vue"

export default {
  name: 'Form',
  components:{
    Personal,
    Location,
    Education
    
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
h2
  font-size: 25px
  position: absolute
  left: 23.5vw
  top: 17.2vh
form
  position: absolute
  left: 23.5vw
  top: 22.5vh
.submit
  background: #575756
  box-shadow: 0px 5px 10px rgba(56, 59, 55, 0.2)
  border-radius: 30px
  color: white
  width: 221px
  height: 60px
  border: none
</style>
