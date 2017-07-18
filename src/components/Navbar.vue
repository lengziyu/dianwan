<template>
  <div class="navbar">
    <h1>{{ msg }}</h1>
    <ul>
     <li>首页</li>
     <li>新闻</li>
     <li>游戏库</li>
     <li>购物车</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'navbar'
    }
  }
}
</script>

<style scoped>



</style>
