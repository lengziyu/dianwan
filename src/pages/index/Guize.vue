<template>
  <div class="guize">
    <div class="gz-head">
      <div class="gz-head-title">新手规则</div>
    </div>
    <div class="gz-main">
      <ul>
        <li>
          <div class="pic"><img src="../../assets/index/zupin.png" alt=""></div>
          <div class="title">租凭规则</div>
        </li>
        <li>
          <div class="pic"><img src="../../assets/index/huodong.png" alt=""></div>
          <div class="title">新手活动</div>
        </li>
        <li>
          <div class="pic"><img src="../../assets/index/chongzhi.png" alt=""></div>
          <div class="title">G币充值</div>
        </li>
      </ul>
    </div>
    <div class="yuliu">

    </div>
  </div>
</template>

<script>
export default {
  name: 'guize'

}
</script>


<style scoped>
.guize{
  width: 290px;
  margin-top: 30px;
  overflow: hidden;
  float: right;
}
.gz-head{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #145fdc;
  background-color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
}

.gz-main li{
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #fff;
  margin-bottom: 20px;
}
.yuliu{
  width: 100%;
  height: 340px;
  background-color: #ddd;
}
</style>
