<template>
  <div class="bigitem">
    <router-link to="newsdetail">
      <div class="bigitem-pic">
        <img src="../../assets/news/big-item-pic.jpg" alt="">
        <img class="big-item-bg" src="../../assets/news/big-item-bg.jpg" alt="">
      </div>
      <div class="bigitem-info">
        <div class="bigitem-title">
          球王马拉多纳炮轰Konami未经授权在《实况足球2017》中使用自身肖像 将采取法律手段
        </div>
        <div class="bigitem-comment">
          999
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'bigitem'

}
</script>


<style scoped>
.bigitem{
  width: 588px;
  height: 330px;
  float: left;
  margin-bottom: 30px;
  position: relative;
}
.bigitem-pic{
  position: relative;
}
.big-item-bg{
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.bigitem-info{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
  width: 548px;
  padding: 18px;
}
.bigitem-title{
  font-size: 20px;
  font-weight: 600;
  color: #fff;
}
.bigitem-comment{
  position: absolute;
  right: 24px;
  bottom: 20px;
  color: #fff;
  font-size: 18px;
}
</style>
