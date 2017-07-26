<template>
  <div class="games">
    <div class="wrap">
      <section class="screen">
        <div class="games-banner">
          <img src="../assets/games/banner.jpg" alt="">
        </div>
        <div class="games-adver">
          <AdverImgs></AdverImgs>
        </div>
      </section>

      <section class="screen">
        <div class="games-hot gameshot1">
          <h3>热门</h3>
          <HotItem v-for="(item, index) in 6"></HotItem>
        </div>
        <div class="games-comment">
          <h3>热门评论</h3>
          <HotComment v-for="(item, index) in 6"></HotComment>
        </div>
      </section>
    </div>
    <section class="screen">
      <img src="../assets/games/longbanner.jpg" alt="">
    </section>
    <div class="wrap">
      <section class="screen">
        <div class="games-hot gameshot2">
          <div class="gameshot-ranking">
            <ul>
              <li>人气排行 ﹀ <span>|</span></li>
              <li>游戏平台 ﹀<span>|</span></li>
              <li>游戏类别 ﹀<span>|</span></li>
              <li>语言 ﹀</li>
            </ul>
          </div>
          <HotItem v-for="(item, index) in 8"></HotItem>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import AdverImgs from './games/AdverImgs'
import Titlebar from '@/components/Titlebar'
import HotItem from './games/HotItem'
import HotComment from './games/HotComment'

export default {
  name: 'games',
  components: {
    AdverImgs,
    Titlebar,
    HotItem,
    HotComment
  }
}
</script>

<style scoped>
 .wrap{
   margin-top: 30px;
   overflow: hidden;
 }
 .screen{
   margin-bottom: 30px;
   overflow: hidden;
 }
.games-banner{
  float: left;
  width: 892px;
  height: 502px;
  overflow: hidden;
}
.games-adver{
  float: right;
  width: 298px;
  height: 502px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.games-hot{
  width: 890px;
  float: left;
}
.gameshot2{
  float: none;
  width: auto;
}
h3{
  background-color: #fff;
  font-weight: 600;
  height: 50px;
  line-height: 50px;
  padding-left: 12px;
  border-bottom: 2px solid #145fdc
}
.games-comment{
  width: 282px;
  float: right;
}
.gameshot-ranking{
  margin-bottom: 30px;
  overflow: hidden;
  width: 100%;
  background: #fff;
}
.gameshot-ranking li{
  float: left;
  height: 68px;
  line-height: 68px;
  border-bottom: 2px solid #145fdc;
  text-align: center;
  width: 300px;
  color: #222;
  font-size: 16px;
}
.gameshot-ranking li span{
  float: right;
  color: #ddd;
  font-size: 20px;
}
</style>
