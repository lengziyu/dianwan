<template>
  <div class="goalipay">
    <modal name="goalipay" :height="330" :width="820">
      <img src="../assets/popup/goalipay.png" alt="">
    </modal>
    <modal name="go404" :height="330" :width="820">
      <div class="modal-404">
        <img src="../assets/popup/go404.png" alt="">
        <a href="#" @click="$modal.hide('go404')"></a>
      </div>
    </modal>
    <modal name="addplay" :height="330" :width="820">
      <div class="modal-icon">
        <img src="../assets/popup/wantplay.png" alt="">
      </div>
      <div class="modal-title">已成功加入想玩</div>
      <div class="modal-btn">
        <a @click="$modal.hide('addplay')">确定</a>
      </div>
    </modal>
    <modal name="addcar" :height="330" :width="820">
      <div class="modal-icon">
        <img src="../assets/popup/wantplay.png" alt="">
      </div>
      <div class="modal-title">已成功加入购物车</div>
      <div class="modal-btn">
        <a @click="$modal.hide('addcar')">确定</a>
      </div>
    </modal>
    <modal name="notpay" :height="200" :width="490">
      <div class="modal-title modal-notpay-title">你未选择支付方式</div>
      <div class="modal-btn modal-notpay-btn">
        <a @click="$modal.hide('notpay')">确定</a>
      </div>
    </modal>
  </div>
</template>

<script>

export default {
  name: 'goalipay'
}
</script>


<style scoped>
.modal-icon{
  text-align: center;
  margin-top: 80px;
}
.modal-title{
  text-align: center;
  margin-top: 10px;
  font-size: 22px;
  color: #333;
}
.modal-btn{
  margin-top: 20px;
  text-align: center;
}
.modal-btn a{
  display: inline-block;
  width: 160px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  line-height: 45px;
  height: 45px;
  background-color: #145fdc;
  color: #fff;
}
.modal-notpay-title{
  margin-top: 60px;
  color: #e32132;
}
.modal-notpay-btn a{
  border: 1px solid #ddd;
  background: #fff;
  color: #777;
  height: 40px;
  line-height: 40px;
  width: 140px;
}
.modal-404{
  position: relative;
}
.modal-404 a{
  width: 140px;
  height: 30px;
  display: block;
  position: absolute;
  z-index: 2;
  top: 270px;
  left: 330px;
}
</style>
