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
        <div class="ci-nums">
          <span class="ci-number">数量：X1</span>
        </div>
      </div>
      <div class="caritem-subtitle">
        版本：港行
      </div>
      <div class="caritem-info">
        <div class="caritem-pirce">
          租赁价：￥199
        </div>
        <div class="caritem-operation">
          <a class="user-btn user-btn-detail" href="">查看物流</a>
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
  border-top: 1px solid #ddd;
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
  font-size: 24px;
  float: left;
}
.ci-title span{
  font-size: 16px;
  color: #999;
}
.ci-nums{
  float: right;
}
.caritem-subtitle{
  font-size: 18px;
  margin-top: 10px;
}
.caritem-info{
  overflow: hidden;
  margin-top: 32px;
}
.caritem-pirce{
  float: left;
  font-size: 18px;
  color: #ff6c00;
}
.caritem-pirce span{
  color: #999;
  font-size: 16px;
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
  text-decoration: none;
  min-width: 80px;
  text-align: center;
  border: 1px solid #145fdc;
}
.user-btn-detail{
  color: #fff;
  background-color: #145fdc
}
</style>
