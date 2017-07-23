<template>
  <div class="zhuanti">
    <div class="zt-left">
      <div class="zt-head">
        <span class="line"></span>
        <span class="text">E3专题</span>
      </div>
      <div class="zt-title">
        E3 2017：索尼称今年发布会故意有所保留 会在晚些时候展示
      </div>
      <div class="zt-date">
        2017-06-13
      </div>
    </div>
    <div class="zt-right">
      <img src="../../assets/news/center-pic.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'zhuanti'

}
</script>


<style scoped>
.zhuanti{
  overflow: hidden;
  padding-right: 4px;
  margin-bottom: 30px;
}
.zhuanti .zt-left{
  float: left;
  background-color: #749dd1;
  width: 603px;
  height: 338px;
}
.zt-head{
  padding: 20px;
}
.zt-head .line{
  width: 120px;
  height: 3px;
  display: inline-block;
  background-color: #fff;
}
.zt-head .text{
  float: right;
  display: inline-block;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
}
.zt-title{
  padding: 20px;
  padding-bottom: 0;
  color: #fff;
  margin-top: 140px;
  font-size: 24px;
  font-weight: 600;
}
.zt-date{
  padding: 20px;
  color: #fff;
  font-size: 18px;
}
.zhuanti .zt-right{
  float: right;
}
</style>
