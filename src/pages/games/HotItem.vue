<template>


  <div class="hotitem">
    <router-link to="gamesdetail">
      <div class="hotitem-pic">
        <img src="../../assets/games/hotitem.jpg" alt="">
      </div>
    </router-link>
    <div class="hotitem-title">
      <router-link to="gamesdetail">
        <div class="hotitem-text">
          刺客信条
        </div>
      </router-link>
      <div class="hotitem-sale">
        <span><img src="../../assets/games/hot-zu.png" alt=""></span>
        <span><img src="../../assets/games/hot-shou.png" alt=""></span>
      </div>
    </div>
    <div class="hotitem-info">
      <div class="hotitem-star"><img src="../../assets/games/hot-star.png" alt=""></div>
      <div class="hotitem-surplus">库存：999</div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'hotitem'

}
</script>


<style scoped>
.gameshot1 .hotitem{
  margin-left: 17px;
}
.gameshot2 .hotitem{
  margin-left: 18px;
}
.hotitem{
  float: left;
  background-color: #fff;
  margin-top: 12px;
}
.gameshot1 .hotitem:nth-child(2),.gameshot1 .hotitem:nth-child(5),.gameshot1 .hotitem:nth-child(8){
  margin-left: 0;
}
.gameshot2 .hotitem:nth-child(2),.gameshot2 .hotitem:nth-child(6),.gameshot2 .hotitem:nth-child(10){
  margin-left: 0;
}
.hotitem-title{
  padding: 8px 10px;
  overflow: hidden;
}
.hotitem-title .hotitem-text{
  font-size: 22px;
  float: left;
  padding-left: 34px;
  background: url('../../assets/games/hot-icon-title.jpg') no-repeat center left;
}
.hotitem-title  a{
  color: #777;
}
.hotitem-title .hotitem-sale{
  float: right;
}
.hotitem-info{
  padding: 0px 10px;
  padding-bottom: 10px;
  overflow: hidden;
}
.hotitem-info .hotitem-star{
  float: left;
}
.hotitem-info .hotitem-surplus{
  float: right;
}
</style>
