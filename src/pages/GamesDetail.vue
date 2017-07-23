<template>
  <div class="gamedetail">
    <div class="wrap">
      <section class="screen">
        <div class="navbar">
          <ul>
            <li>游戏库</li>
            <li>></li>
            <li>实况足球游戏详情页</li>
          </ul>
        </div>
        <div class="gd-main">
          <h3>游戏视频</h3>
          <Carousel></Carousel>

          <h3>资讯</h3>
          <Zixun  v-for="(item, index) in 4"></Zixun>
          <Moremsg></Moremsg>

          <h3>图片</h3>
          <Carousel></Carousel>

          <h3>玩家评论</h3>
          <PlayComment></PlayComment>
          <Moremsg></Moremsg>
        </div>
        <div class="gd-details">
          <Live></Live>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Carousel from './gamesdetail/Carousel'
import Zixun from './gamesdetail/Zixun'
import PlayComment from './gamesdetail/PlayComment'
import Moremsg from '@/components/Moremsg'
import Live from './gamesdetail/Live'

export default {
  name: 'gamedetail',
  components: {
    Carousel,
    Zixun,
    Moremsg,
    PlayComment,
    Live
  }

}
</script>


<style scoped>
.wrap{
  overflow: hidden;
}
.screen{
  margin-bottom: 30px;
  overflow: hidden;
}
.navbar{
  overflow: hidden;
  margin: 5px 0;
}
.navbar li{
  float: left;
  color: #999;
  line-height: 30px;
  margin-left: 8px;
}
h3{
  background-color: #fff;
  font-weight: 600;
  height: 50px;
  line-height: 50px;
  padding-left: 12px;
  border-bottom: 2px solid #145fdc
}
.gd-main{
  width: 818px;
  float: left;
}
.gd-details{
  float: right;
}
</style>
