<template>
  <div class="hello">
<ul>
    <li><router-link :to="{name: 'helloworld',params:{worldmsg: '你好世界'}}">Hello World</router-link></li>
    <li><router-link :to="{name: 'helloearth',params:{earthmsg: '你好地球'}}">Hello Earth</router-link></li>

    <!-- <li><router-link :to="{path: '/helloworld',query:{worldmsg:'你好世界'}}">Hello World</router-link></li>
    <li><router-link :to="{name: 'helloearth',params:{earthmsg: '你好地球'}}">Hello Earth</router-link></li> -->


</ul>

  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
