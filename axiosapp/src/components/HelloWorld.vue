<template>
  <div class="hello">
    <h2>这里是axiosdemo</h2>
    <button @click='getData'>get获取数据</button>
    <button @click='postData'>post获取数据</button>
    <ol>
      <li v-for="item in items">{{item.title}}</li>
    </ol>
  </div>
</template>

<script>
Vue.prototype.$http = axios
import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'
export default {
  name: 'HelloWorld',
  data () {
    return {
      items: []
    }
  },
  methods:{
    postData(){
      // _self = this
      // this.$http.get('https://cnodejs.org/api/v1/topics?page=1&limit=15')
      this.$http.post('https://cnodejs.org/api/v1/accesstoken',qs.stringify({}))
      .then(function(res){
        // _self.items = res.data.data
        console.log(res)
      })
      .catch(function(){

      })
    },
    getData(){
      self = this
      // this.$http.get('https://cnodejs.org/api/v1/topics?page=1&limit=15')
      this.$http.get('https://cnodejs.org/api/v1/topics',{
        params:{
          page: 1,
          limit: 20
        }
      })
      .then(function(res){
        self.items = res.data.data
        console.log(res.data.data)
      })
      .catch(function(){

      })
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
  margin: 0 10px;
  text-align: left;
}
a {
  color: #42b983;
}
</style>
