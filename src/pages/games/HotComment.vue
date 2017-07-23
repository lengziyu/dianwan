<template>
  <div class="hotcomment">
    <div class="hotcomment-info">
      <span class="hc-avatar"><img src="../../assets/games/hot-avatar.png" alt=""></span>
      <span class="hc-name">昵称</span>
      <span class="hc-date">07-19</span>
    </div>
    <div class="hotcomment-title">
      这是一条评论这是一条评论这是一条
评论这是一条评论这是一条评论</div>
    <div class="hotcomment-author">
      ——转自刺客信条游戏评论
    </div>
  </div>
</template>

<script>
export default {
  name: 'hotcomment'

}
</script>


<style scoped>
.hotcomment{
  background-color: #fff;
  margin-top: 15px;
  padding: 12px;
}
.hotcomment-info{
  overflow: hidden;
}
.hotcomment-info .hc-avatar{
  float: left;
}
.hotcomment-info .hc-name{
  float: left;
  color: #999;
  margin-left: 12px;
  font-size: 14px;
}
.hotcomment-info .hc-date{
  float: right;
  color: #999;
  font-size: 14px;
}
.hotcomment-title{
  margin: 10px 0;
}
.hotcomment-author{
  text-align: right;
  color: #999;
  font-size: 14px;
}
</style>
