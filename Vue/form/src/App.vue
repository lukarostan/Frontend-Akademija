<template>
  <div id="app">
    <Header />
    <Form />
  </div>
</template>

<script>

import Header from "./components/page-header.vue"

import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    Form,
    Header
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
