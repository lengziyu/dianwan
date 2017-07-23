<template>
  <div class="zixun">
    <div class="zixun-pic">
      <img src="../../assets/gamesdetail/zixun01.jpg" alt="">
    </div>
    <div class="zixun-info">
      <div class="zixun-title">球王马拉多纳炮轰Konami未经授权在《实况足球2017》中使用自
身肖像 将采取法律手段</div>
      <div class="zixun-subtitle">今日早些时候，
        著名的足球运动员马拉多纳在自己的脸书账号上用包括英语在内的三种语言发表声明，要针对科乐美（Konami）公司采取法律手段。根据马拉多纳的...</div>
      <div class="zixun-date">
        2017-03-31
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zixun'

}
</script>


<style scoped>
.zixun{
  margin-top: 10px;
  margin-bottom: 15px;
  background: #fff;
  padding: 20px;
  overflow: hidden;
}
.zixun-pic{
  float: left;
  width: 160px;
}
.zixun-info{
  padding-left: 20px;
  float: left;
  width: 598px;
}
.zixun-title{
  font-size: 20px;
  margin-bottom: 18px;
}
.zixun-subtitle{
  font-size: 16px;
  line-height: 26px;
  color: #999;
  margin-bottom: 22px;
}
.zixun-date{
  font-size: 16px;
  color: #999;
}
</style>
