<template>
  <div class="live">
    <div class="live-pic">
      <img src="../../assets/gamesdetail/live01.jpg" alt="">
    </div>
    <div class="live-main">
      <div class="live-title">
        实况足球2017
      </div>
      <div class="live-title-en">
        PRO EVOLUTION SOCCER 2017
      </div>
      <div class="live-pingfen">
        评分：<img src="../../assets/games/hot-star.png" alt="">
      </div>
      <div class="live-date">
        上市时间:  2016-09-05(XBOX)
      </div>
      <div class="live-attr">
        游戏属性:  体育游戏 、3D
      </div>
      <div class="live-lang">
        官方中文:  支持
      </div>
      <div class="live-platform">
        支持平台:
        <span><img src="../../assets/gamesdetail/xbox.jpg"></span>
        <span><img src="../../assets/gamesdetail/ps4.jpg"></span>
      </div>
      <div class="live-info">
        <span class="addplay">
          加入想玩
        </span>
        <span class="nowbuy">
          立即购买
        </span>
      </div>
      <div class="live-zupin">
        立即租凭
      </div>

      <div class="live-comment">
        发表评论
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'live'

}
</script>


<style scoped>
.live{
  width: 364px;
  background: #fff;
  overflow: hidden;
  margin-bottom: 30px;
}
.live-main{
  padding: 20px;
}
.live-main .live-title{
  font-size: 22px;
  margin-bottom: 4px;
}
.live-main > div{
  margin-bottom: 10px;
}
.live-platform img{
  vertical-align: bottom;
}
.live-main .live-title-en{
  color: #777;
  margin-bottom: 25px;
}
.nowbuy,.addplay,.live-zupin,.live-comment{
  border: 1px solid #145fdc;
  display: inline-block;
  width: 100px;
  line-height: 45px;
  color: #145fdc;
  border-radius: 10px;
  padding-left: 50px;
  height: 45px;
  background-repeat: no-repeat;
  font-size: 16px;
  background-position: 20px 7px;
  margin-top: 20px;
}
.nowbuy{
  background-image: url('../../assets/gamesdetail/buy.png');
  margin-left: 15px;
}
.addplay{
  background-image: url('../../assets/gamesdetail/add.png');
}
.live-zupin{
  width: 200px;
  color: #fff;
  padding-left: 120px;
  background:#145fdc url('../../assets/gamesdetail/zupin.png') no-repeat 90px 7px;
}
.live-comment{
  width: 190px;
  padding-left: 130px;
  border-radius: 0;
  border: 1px solid #999;
  height: 55px;
  color: #777;
  font-size: 18px;
  line-height: 55px;
  background:#fff url('../../assets/gamesdetail/pinglun.png') no-repeat 90px 12px;
}
</style>
