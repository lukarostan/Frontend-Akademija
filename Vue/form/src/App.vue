<template>
  <div id="app">
    <Header />
    <Form />
    <SecondLayout />
  </div>
</template>

<script>

import Header from "./components/page-header.vue"
import SecondLayout from "./components/second_layout.vue"
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    Form,
    Header,
    SecondLayout
  },
  methods:{
    showInfo: function(){

    }
  }
}
</script>

<style lang="sass">
*
  list-style-type: none
  padding: 0
  margin: 0
  box-sizing: border-box
  
#app 
  font-family: Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center

</style>
