<template>
  <div>
    <h1>My Profile</h1>
    <ul >
      <li><h2><span id="name">{{firstname}}</span> <span id="surname">Surname</span></h2></li>
      <li><span id="email"><img src="img/mail.png">name.surname@mail.com</span></li>
      <li><span id="phone"><img src="img/tel.png">+385 95 555 8745</span></li>
      <li><label>LOCATION</label></li>
      <li>Country: <span>Croatia</span></li>
      <li>City: <span>Zagreb</span></li>
      <li><label>EDUCATION</label></li>
      <li><label>2003</label><p>High School</p></li>
      <li><label>2008</label><p>Bachelor's Degree</p></li>
      <li><button v-if="isEditing" id="edit" @click="isEditing = false"><img src="src\img\edit.png">EDIT</button></li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  errors: [],
  response_data: [],
  URL: "https://factory.hr/api/test.php",
  isEditing: false,
  data: function(){
        return{
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      educations: [
        {
          education: "",
          finished: null,
        }],
        }
      }
  ,  
  methods: {
    checkForm: function (event) {
      this.errors = [];
      if (!this.firstname) {
        this.errors.push("Name required.");
      }
      if (!this.lastname) {
        this.errors.push("Last name required.");
      }
      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }
      if (!this.phone) {
        this.errors.push("Phone required.");
      }
      if (!this.country) {
        this.errors.push("Country required.");
      }
      if (!this.city) {
        this.errors.push("City required.");
      }
      if (!this.educations) {
        this.errors.push("Education required.");
      }
      if (!this.errors.length) {
        return true;
      }
      event.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    save: function() {
      this.data.firstname = this.$refs["firstname"].value;
      this.data.lastname = this.$refs["lastname"].value;
      this.data.email = this.$refs["email"].value;
      this.data.phone = this.$refs["phone"].value;
      this.data.country = this.$refs["country"].value;
      this.data.city = this.$refs["city"].value;
      this.data.education = this.$refs["education"].value;
      this.data.finished = this.$refs["finished"].value;
      this.isEditing = !this.isEditing; 
    },
    mounted:function() {
      axios(URL, {
        method: 'POST',
        headers: {
        'content-type': 'application/json',
      },
    })
    .then(response => response.data)
    .catch(error => {
      throw (event);
    });
    }
  }
  }

</script> 
<style lang="sass" scoped>
ul
  position: absolute
  top: 20vh
  left: 10vw
  text-align: left
  li
    padding: 5px 0px 
    button
      img
        padding: 0px 10px
h1
  font-size: 45px
  position: absolute
  left: 10vw
  top: 12vh
h2 span
  width: fit-content
  font-size: 25px
  line-height: 30px
  color: #1D1D1D
span
  color: #383B37
  font-size: 16px
  line-height: 23px
  
label
  font-weight: bold
  font-size: 16px
  line-height: 30px
  color: #1D1D1D
#edit
  background-color: #ffffff
  border: none
  display: flex
  flex-direction: row
  padding: 18px 36px
  box-shadow: 0px 5px 10px rgba(56, 59, 55, 0.2)
  border-radius: 30px
  color: #1D1D1D
  font-family: Arial
  font-style: normal
  font-weight: bold
  font-size: 16px
  line-height: 23px
</style>