<template>
  <div class="footbar">
    <div class="foot-main">
      <div class="foot-left">
        <a href="">广告合作</a>
        <a href="">免责声明</a>
        <a href="">友情链接</a>
      </div>
      <div class="foot-logo">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footbar',
  data () {
    return {
    }
  }
}
</script>


<style scoped>
.footbar{
  width: 100%;
  background-color: #373737;
  color: #9e9e9e;
  padding-top: 50px;
  min-height: 200px;
}
.foot-main{
  max-width: 1000px;
  margin: 0 auto;
}
.footbar a{
  color: #9e9e9e;
  text-decoration: none;
}
</style>
