<template>
  <div class="hello">
    {{msg}}{{getnum}}
    <button @click="tofather">点击向父组件传递数据</button>
  </div>
</template>

<script>
export default {
  name: 'father',
  props:{
      msg: {
          type: String,
          default: ''
      }
  },
  data :function(){
    return {
     tofathermsg: '我是子组件传递给父组件的数据'
    }
  },
  methods:{
      tofather: function(){
          this.$emit('handle',this.tofathermsg)
      }
  },
  computed: {
      getnum: function(){
          console.log(this.$store)
        //   debugger
          return this.$store.state.num
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
