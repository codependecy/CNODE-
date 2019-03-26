<template>
  <div id="app">
    <!-- <router-view/> -->
    <Header></Header>
    <contain></contain>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import contain from './components/contain'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    contain,Header,Footer
  }
}
</script>

<style>
 *{
   margin: 0;
   padding: 0;
 }
 ul{
   list-style: none;
 }
 a{
   text-decoration: none;
   color: #000;
   text-shadow: none;
 }
</style>
