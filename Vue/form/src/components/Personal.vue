<template>
    <div>
  <h3 >
  <b>PERSONAL</b>
  </h3>
  
  <p>
  <label for="name">First Name</label><br>
  <input
  id="name"
  v-model="name"
  type="text"
  name="name"
  placeholder="First Name">
  </p>
  
  <p>
  <label for="name">Last Name</label><br>
  <input
  id="surname"
  v-model="name"
  type="text"
  name="name"
  placeholder="Last Name">
  </p>
  
  <p>
  <label for="e-mail">E-mail Address</label><br>
  <input
  id="e-mail"
  type="email"
  name="e-mail"
  placeholder="xxxxx@email.com">
  </p>
  
  <p>
  <label for="phone">Phone</label><br>
  <input
  id="phone"
  
  type="number"
  name="phone"
  placeholder="Enter Phone Number">
  </p>               
  </div>
  
</template>




<script>
export default {
    props:{
        name,
        
    }
}
</script>

<style scoped lang="sass">

</style>