<template>
    <div>
        <h3><b>PERSONAL</b></h3>
        
        <p>
        <label for="name">First name</label><br>
        <input
        id="name"
        v-model="firstname"
        type="text"
        name="name"
        placeholder="First Name">
        </p>
        
        <p>
        <label for="name">Last Name</label><br>
        <input
        id="surname"
        v-model="surname"
        type="text"
        name="surname"
        placeholder="Last Name">
        </p>
        
        <p>
        <label for="e-mail">E-mail Address</label><br>
        <input
        id="e-mail"
        type="email"
        v-model="email"
        name="e-mail"
        placeholder="xxxxx@email.com">
        </p>
        
        <p>
        <label for="phone">Phone</label><br>
        <input
        id="phone"
        v-model="phone"
        type="tel"
        name="phone"
        placeholder="Enter Phone Number"
        autocomplete="off">
        </p>               
    </div>
</template>




<script>
export default {
        props:{

        
        firstname: String,
        surname: String,
        email: String,
        phone: Number,
    },
    data(){
        return{
       
        }
    }
}
</script>

<style lang="sass"  scoped>
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
    float: left
    font-size: 16px

label
    float: left
    padding: 5px 0px 5px 10px

</style>
