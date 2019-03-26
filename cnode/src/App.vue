<template>
  <div id="app">
    <!-- <router-view/> -->
    <Header></Header>
    <contain></contain>
  </div>
</template>

<script>
import Header from './components/Header'
import contain from './components/contain'
export default {
  name: 'App',
  components: {
    contain,Header
  }
}
</script>

<style>
 *{
   margin: 0;
   padding: 0;
 }
 a{
   text-decoration: none;
   color: #ccc;
    text-shadow: none;
 }
</style>
