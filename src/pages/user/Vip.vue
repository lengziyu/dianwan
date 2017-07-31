<template>
  <div class="uservip">
    <div class="user-head">
      <div class="user-text">你当前会员： <span>非会员</span></div>
      <div class="user-lastdate">
        会员到期时间：9天
      </div>
    </div>
    <div class="user-main">
      <div class="uservip-pic"><img src="../../assets/user/vip.jpg" alt=""></div>
      <div class="uservip-select">已选择：钻石会员</div>
    </div>
    <div class="uservip-table">
      <ul>
        <li><span class="ub-type">原价（499/月x1月）</span><span class="ub-price">￥499</span></li>
        <li><span class="ub-type">押金</span><span class="ub-price">￥300</span></li>
        <li><span class="ub-type">优惠券</span><span class="ub-price">-￥200</span></li>
        <li class="ub-allprice"><span class="ub-type">总价：￥599</span><span class="ub-price">去支付<small>(获得99积分)</small>></span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'uservip'

}
</script>


<style scoped>
.user-head{
  overflow: hidden;
  padding-bottom: 30px;
  margin-bottom: 30px;
  line-height: 50px;
  padding: 20px;
  width: 925px;
  background-color: #fff;
}
.user-text{
  float: left;
  font-size: 16px;
  color: #888;
}
.user-text span{
  font-weight: 600;
  font-size: 18px;
}
.user-lastdate{
  float: right;
}
.user-main{
  width: 967px;
  background: #fff;
  overflow: hidden;
  margin-bottom: 30px;
}
.uservip-select{
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
  color: #777;
  font-weight: 600;
}
.uservip-table{
  background-color: #fff;
  padding: 30px;
  width: 907px;
}
.uservip-table li{
  overflow: hidden;
  line-height: 70px;
  height: 70px;
  border-bottom: 1px solid #ddd;
}
.uservip-table li .ub-type{
  float: left;
  color: #999;
}
.uservip-table li .ub-price{
  float: right;
  color: #777;
}
.uservip-table li.ub-allprice{
  background-color: #145fdc
}
.uservip-table li.ub-allprice {
  padding: 0 20px;
}
.uservip-table li.ub-allprice .ub-type,.uservip-table li.ub-allprice .ub-price{
  color: #fff;
  font-size: 18px;
  font-weight: 600;
}
.uservip-table li.ub-allprice .ub-price small{
  font-size: 14px;
  font-weight: 100;
  padding: 0 10px;
}
.ub-allprice{
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 926px;
  z-index: 3;
  margin-left: -360px;
}
</style>
