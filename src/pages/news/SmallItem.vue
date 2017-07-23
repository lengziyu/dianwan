<template>
  <div class="smallitem">
    <div class="smallitem-pic">
      <img src="../../assets/newsdetail/pic03.jpg" alt="">
    </div>
    <div class="smallitem-info">
      <div class="smallitem-title">球王马拉多纳炮轰Konami
未经授权在《实况足球20...</div>
      <div class="smallitem-date">
        2017-03-31
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'smallitem'

}
</script>


<style scoped>
.smallitem{
  margin-top: 15px;
  padding: 20px;
  padding-right: 12px;
  background: #fff;
  overflow: hidden;
}
.smallitem-pic{
  float: left;
}
.smallitem-info{
  float: left;
  width: 220px;
  margin-left: 12px;
}
.smallitem-title{
  font-size: 18px;
}
.smallitem-date{
  text-align: right;
  color: #999;
  margin-top: 30px;
}
</style>
