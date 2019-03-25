<template>
  <div class="hello">
    <h1>这里是父组件</h1>-----{{fromsonmsg}}
    <!-- <child /> -->
    <child :msg="tosonmsg" @handle='getmsg'></child>
  </div>
</template>

<script>
import child from './child'
export default {
  name: 'father',
  data:function(){
    return {
      tosonmsg: '我是父组件传递过来的数据',
      fromsonmsg: ''
    }
  },
  methods:{
      getmsg: function(value){
          this.fromsonmsg = value
      }
  },
  components:{
      child
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
