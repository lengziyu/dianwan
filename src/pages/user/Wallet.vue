<template>
  <div class="wallet user-wrap">
    <div class="user-head">
      <div class="user-text">余额： <span>9，990.99</span>元</div>
      <div class="user-btns">
        <div class="user-btn user-btn-not">查看明细</div>
        <div class="user-btn user-btn-whire">充值</div>
        <div class="user-btn user-btn-detail">提现</div>
      </div>
    </div>

    <div class="user-main">
      <h4>我的优惠券</h4>
      <ul>
        <li class="wallet-item">
          <div class="money">20元</div>
          <div class="state">不能参与<a href="">特惠活动</a></div>
          <div class="date-info">
            <p>2017-01-23 22:00:43 开始</p>
            <p>2017-01-28 22:00:43 截止</p>
          </div>
          <div class="date-last">
            剩余2天<a href="">立即使用</a>
          </div>
        </li>
        <li class="wallet-item">
          <div class="money">20元</div>
          <div class="state">不能参与<a href="">特惠活动</a></div>
          <div class="date-info">
            <p>2017-01-23 22:00:43 开始</p>
            <p>2017-01-28 22:00:43 截止</p>
          </div>
          <div class="date-last">
            剩余2天<a href="">立即使用</a>
          </div>
        </li>
        <li class="wallet-item wallet-item-die">
          <div class="money">20元</div>
          <div class="state">不能参与<a href="">特惠活动</a></div>
          <div class="date-info">
            <p>2017-01-23 22:00:43 开始</p>
            <p>2017-01-28 22:00:43 截止</p>
          </div>
          <div class="date-last">
            已过期
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'wallet'

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
  font-size: 16px;
  color: #888;
}
.user-text span{
  font-weight: 600;
  font-size: 20px;
}
.user-btns{
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
}
.user-btn-not{
  color: #145fdc;
  background-color: #fff;
  border-color: #fff;
}
.user-btn-whire{
  color: #145fdc;
  background-color: #fff;
}
.user-btn-detail{
  color: #fff;
  background-color: #145fdc
}
.user-main h4{
  margin-bottom: 20px;
  font-weight: 100;
}

.wallet-item{
  padding: 20px;
  margin-bottom: 12px;
  background-color: #fffbec;
  border: 1px solid #fef6d8;
  overflow: hidden;
}
.wallet-item > div{
  float: left;
  width: 210px;
  text-align: center;
  color: #999;
  padding-top: 8px;
}
.wallet-item .money{
  width: 120px;
  font-size: 18px;
  color: #e32132;
}
.wallet-item .state{
  width: 260px;
  font-size: 14px;
}
.wallet-item .state a{
  color: #999;
}
.wallet-item .date-info{
  font-size: 14px;
  padding-top: 0;
}
.wallet-item .date-last{
  font-size: 14px;
  width: 180px;
}
.wallet-item .date-last a{
  color: #145fdc;
}
.wallet-item-die{
  background-color: #f7f7f7;
  border-color: #eeeeee;
}
.wallet-item-die .money{
  color: #999
}
</style>
