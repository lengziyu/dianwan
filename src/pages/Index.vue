<template>
  <div class="index">
    <Banner></Banner>
    <div class="wrap">
      <Zixun></Zixun>
      <Guize></Guize>

    </div>
    <div class="wrap">
      <h3>弹出框测试</h3>
      <ul class="testpop">
        <li @click="$modal.show('goalipay')">跳转到支付宝</li>
        <li @click="$modal.show('go404')">404页面</li>
        <li @click="$modal.show('addplay')">加入想玩</li>
        <li @click="$modal.show('addcar')">加入购物车</li>
        <li @click="$modal.show('notpay')">未选择支付方式</li>
        <li @click="$modal.show('report')">举报弹框</li>
      </ul>
      <GoAlipay></GoAlipay>
      <Report></Report>
    </div>

  </div>
</template>

<script>

import Banner from './index/Banner'
import Zixun from './index/Zixun'
import Guize from './index/Guize'
import vmodal from 'vue-js-modal'
import Vue from 'vue'
import GoAlipay from '@/components/GoAlipay'
import Report from '@/components/Report'

Vue.use(vmodal)


export default {
  name: 'index',
  components: {
    Banner,
    Zixun,
    Guize,
    GoAlipay,
    Report
  }
}
</script>

<style scoped>
 h5{
   color: #145fdc;
 }
 .wrap{
   overflow: hidden;
 }
  .testpop {
    margin-top: 10px;
    margin-bottom: 60px;
  }
 .testpop li{
   float: left;
   margin-right: 20px;
 }
</style>
