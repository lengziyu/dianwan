<template>
  <div class="footbar">
    <div class="foot-main">
      <div class="foot-left">
        <div class="foot-info">
          <a href="">广告合作</a>
          <a href="">免责声明</a>
          <a href="">友情链接</a>
          <a href="">联系我们</a>
          <a href="">关于我们</a>
          <a href="">@ 梦想互娱</a>
          <a href="">梦想官方QQ群</a>
        </div>
        <div class="foot-copy">
          Copyright © 2017 梦现-gloryvg - 梦现官方微信号：<span>youshege - 鄂ICP备16005435号-1</span>
        </div>
      </div>
      <div class="foot-logo">
        <img src="../assets/foot-logo.png" alt="">
      </div>
    </div>
    <div class="foot-link">
      友情链接：
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
  min-height: 250px;
}
.foot-main{
  max-width: 720px;
  margin: 0 auto;
  overflow: hidden;
}
.footbar a{
  color: #9e9e9e;
  font-size: 14px;
  text-decoration: none;
}
.foot-left{
  float: left;
}
.foot-logo{
  float: right;
}
.foot-info{
  margin-bottom: 30px;
}
.foot-info a{
  display: inline-block;
  margin-right: 10px;
}
.foot-copy{
  font-size: 14px;
}
.foot-copy span{
  background-color: #878787;
  padding: 2px;
  color: #aaaaaa;
}
.foot-link{
  width: 710px;
  height: 32px;
  line-height: 32px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 0 5px;
  background-color: #434343;
  font-size: 14px;
  color: #aaaaaa;
}
</style>
