<template>
  <div>
    {{getnum}}我是HelloWorld组件
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    getnum:function(){
      return this.$store.state.num
    }
  }
}
</script>

