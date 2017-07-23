<template>
  <div class="Banner">
    <flickity class="bannerwrap" ref="flickity" :options="flickityOptions">
      <div class="carousel-cell"><img src="../../assets/index/banner01.jpg" alt=""></div>
  </flickity>
  <div class="bn-nav">
    <ul>
      <li><a href="">聚划算会员</a></li>
      <li><a href="">新品上线</a></li>
      <li><a href="">人气单品</a></li>
      <li><a href="">主机租凭</a></li>
    </ul>
  </div>
  </div>
</template>

<script>
import Flickity from 'vue-flickity';
import Vue from 'vue';

export default {
  name: 'banner',
  components: {
      Flickity
  },
  data () {
    return {
      flickityOptions: {
          initialIndex: 3,
          prevNextButtons: false,
          pageDots: true,
          wrapAround: true

          // any options from Flickity can be used
      }
    }
  }
}

</script>


<style scoped>
.Banner{
  width: 100%;
  height: 1000px;
  overflow: hidden;
}
.bannerwrap{
  margin: 0 auto;
  height: 1000px;
  text-align: center;
}
.flickity-slider{
  min-width: 1200px;
  margin: 0 auto;
}
.carousel-cell{
  width: 100%;
}

.bn-nav{
  position: relative;
  bottom: 200px;
  height: 120px;
  width: 1200px;
  z-index: 2;
  margin: 0 auto;
}
.bn-nav li{
  width: 285px;
  height: 160px;
  float: left;
  margin-left: 20px;
  text-align: center;
  line-height: 160px;
  background-repeat: no-repeat;
}
.bn-nav li a{
  color: #fff;
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 22px;
  font-weight: 600;
  text-decoration: none;
}
.bn-nav li:nth-child(1){
  margin-left: 0;
  background-image: url('../../assets/index/bn-huiyuan.png');
}
.bn-nav li:nth-child(2){
  background-image: url('../../assets/index/bn-xinpin.png');
}
.bn-nav li:nth-child(3){
  background-image: url('../../assets/index/bn-danpin.png');
}
.bn-nav li:nth-child(4){
  background-image: url('../../assets/index/bn-zupin.png');
}

</style>
