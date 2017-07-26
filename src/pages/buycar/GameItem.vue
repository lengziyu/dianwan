<template>
  <div class="caritem">
    <div class="caritem-pic">
      <img src="../../assets/buycar/item.jpg" alt="">
    </div>
    <div class="car-wrap">
      <div class="caritem-head">
        <div class="ci-title">
          刺客信条
          <span>（Assassin's Creed）</span>
        </div>
      </div>
      <div class="caritem-subtitle">
        版本：港行
      </div>
      <div class="caritem-info">
        <div class="caritem-pirce">
          等待商品返库
        </div>
        <div class="caritem-operation">
          <a class="user-btn user-btn-detail" href="">购买</a>
          <a class="user-btn user-btn-detail" href="">立即租</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'caritem'

}
</script>


<style scoped>
.caritem{
  width: 838px;
  padding: 13px 30px;
  padding-right: 25px;
  overflow: hidden;
  background: #fff;
  margin-bottom: 15px;
}
.caritem-pic{
  width: 120px;
  float: left;
}
.car-wrap{
  margin-left: 30px;
  width: 680px;
  float: left;
}
.caritem-head{
  overflow: hidden;
}
.ci-title{
  font-size: 22px;
  float: left;
}
.ci-title span{
  font-size: 14px;
  color: #999;
}
.ci-nums{
  float: right;
}
.caritem-subtitle{
  font-size: 16px;
  margin-top: 10px;
}
.caritem-info{
  overflow: hidden;
  margin-top: 32px;
}
.caritem-pirce{
  float: left;
  font-size: 16px;
  color: #ff6c00;
}
.caritem-pirce span{
  color: #999;
  font-size: 14px;
  padding-left: 10px;
  text-decoration: line-through;
}
.caritem-operation{
  float: right;
}
.user-btn{
  padding: 2px 6px;
  font-size: 14px;
  float: left;
  margin-left: 12px;
  border-radius: 5px;
  line-height: 24px;
  min-width: 80px;
  text-align: center;
  border: 1px solid #145fdc;
  text-decoration: none;
}
.user-btn-detail{
  color: #fff;
  background-color: #145fdc
}
</style>
