<template>
  <div class="caritem">
    <div class="caritem-pic">
      <img src="../../assets/buycar/addgame.png" alt="">
    </div>
    <div class="car-wrap">
      添加游戏
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
  padding: 30px;
  padding-right: 25px;
  margin-top: 15px;
  overflow: hidden;
  background: #fff;
}
.caritem-pic{
  float: left;
  width: 120px;
  margin-top: 10px;
}
.car-wrap{
  float: right;
  line-height: 150px;
  text-align: right;
  font-size: 18px;
  padding-right: 20px;
  color: #999;
}
</style>
