<template>
  <div class="gbi user-wrap">
    <div class="user-head">
      <div class="user-text">我的G币：<span>999</span>个</div>
      <div class="uer-btns">
        <div class="uer-btn uer-btn-whire">邀请好友得G币</div>
        <div class="uer-btn uer-btn-detail">充值G币</div>
      </div>
    </div>

    <div class="user-main">
      <h4>如何获得更多G币？</h4>
      <ul>
        <li>1、进行所有平台的支付</li>
        <li>2、点击广告</li>
        <li>3、点赞评论</li>
        <li>4、下载游戏</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'gbi'

}
</script>


<style scoped>
.user-head{
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  padding-bottom: 30px;
  margin-bottom: 30px;
  margin-top: 10px;
}
.user-text{
  float: left;
  font-size: 18px;
  color: #888;
}
.user-text span{
  font-weight: 600;
  font-size: 22px;
}
.uer-btns{
  float: right;
}
.uer-btn{
  padding: 2px 6px;
  font-size: 14px;
  float: left;
  margin-left: 12px;
  border-radius: 5px;
  line-height: 24px;
  min-width: 80px;
  text-align: center;
  border: 1px solid #145fdc;
}
.uer-btn-whire{
  color: #145fdc;
  background-color: #fff;
}
.uer-btn-detail{
  color: #fff;
  background-color: #145fdc
}
.user-main{
  font-weight: 100;
  color: #888;
  margin-bottom: 10px;
}
.user-main h4{
  margin-bottom: 20px;
}
.user-main li{
  line-height: 34px;
}
</style>
