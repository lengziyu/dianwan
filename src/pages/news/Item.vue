<template>
  <div class="newsitem">
    <div class="item-pic">
      <img src="../../assets/news/item-pic.jpg" alt="">
    </div>
    <div class="item-title">
      球王马拉多纳炮轰Konami未经授权在《实况足球2017》中使用自身肖像 将采取法律手段
    </div>
    <div class="item-subtitle">
      今日早些时候，著名的足球运动员马拉多纳在自己的脸书账号上用包括...
    </div>
    <div class="item-info">
      <div class="item-date">
        2017-06-14
      </div>
      <div class="item-comment">
        999
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'newsitem'

}
</script>


<style scoped>
.newsitem{
  width: 284px;
  height: 330px;
  float: left;
  margin-left: 20px;
  margin-bottom: 30px;
  background-color: #fff;
}
.news-content .newsitem:nth-child(4){
  margin-left: 0;
}
.news-content2 .newsitem:nth-child(1),.news-content2 .newsitem:nth-child(5),.news-content2 .newsitem:nth-child(9){
  margin-left: 0;
}
.news-content2 .newsitem:nth-child(13),.news-content2 .newsitem:nth-child(17),.news-content2 .newsitem:nth-child(21){
  margin-left: 0;
}
.newsitem .item-pic{

}
.newsitem .item-title{
  font-size: 16px;
  font-weight: 600;
  color: #222;
  height: 32px;
  line-height: 22px;
  overflow: hidden;
  padding: 12px;
}
.newsitem .item-subtitle{
  font-size: 14px;
  font-weight: 600;
  color: #777;
  padding: 12px;
}
.newsitem .item-info{
  overflow: hidden;
  padding-left: 12px;
  padding-right: 12px;
}
.newsitem .item-date{
  float: left;
  color: #777;
  font-size: 18px;
}
.newsitem .item-comment{
  float: right;
  color: #777;
  font-size: 18px;
}
</style>
