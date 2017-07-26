<template>
  <div class="zixunItem">
    <div class="item-pic"><img src="../../assets/pic01.jpg" alt=""></div>
    <div class="item-info">
      <div class="item-title">球王马拉多纳炮轰Konami未经授权在《实况足球2017》中使用自身肖像 将
采取法律手段</div>
      <div class="item-content">今日早些时候，著名的足球运动员马拉多纳在自己的脸书账号上用包括英语在内的三种语言发表声明，
        要针对科乐美（Konami）公司采取法律手段。根据马拉多纳的描述，科乐美在未经自...</div>
      <div class="item-date">2017-03-31</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zixunItem'

}
</script>


<style scoped>
.zixunItem{
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  overflow: hidden;
}
.item-pic{
  width: 160px;
  height: 160px;
  float: left;
}
.item-info{
  float: left;
  width: 680px;
  padding-left: 20px;
}
.item-info .item-title{
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
}
.item-info .item-content,.item-info .item-date{
  font-size: 14px;
  color: #777;
}
.item-info .item-date{
  margin-top: 20px;
}
</style>
