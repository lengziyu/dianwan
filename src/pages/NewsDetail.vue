<template>
  <div class="newsdetail">
    <div class="wrap">
      <section class="screen">
        <div class="navbar">
          <ul>
            <li>游戏详情</li>
            <li>></li>
            <li>游戏资讯</li>
          </ul>
        </div>
        <div class="gd-main">
          <h1>
            球王马拉多纳炮轰Konami未经授权在《实况足球
2017》中使用自身肖像 将采取法律手段
          </h1>
          <div class="nd-info">
              <div class="nd-user">电玩之光编辑部</div>
              <div class="nd-date">
                2017-03-14
              </div>
            </div>
            <article>
              <p>今日早些时候，著名的足球运动员马拉多纳在自己的脸书账号上用包括英语在内的三种语言发表声明，要针对科乐美（Konami）
                公司采取法律手段。</p>
              <p>
                <img src="../assets/newsdetail/pic01.jpg" alt="">
              </p>
              <p>根据马拉多纳的描述，科乐美在未经自己授权的情况下，在游戏《实况足球2017》中使用了自己的形象。</p>
              <p>
                <img src="../assets/newsdetail/pic02.jpg" alt="">
              </p>
              <p>马拉多纳在声明中说道：“昨天的时候我听说日本科乐美公司在《实况足球2017》中使用了我的形象。
                我的律师Matias Morla将会发起相应的法律行动，我希望这不是另一个骗局。”</p>
            </article>
        </div>
        <div class="gd-details">
          <h3>相关资讯</h3>
          <SmallItem  v-for="(item, index) in 4"></SmallItem>
        </div>
      </section>
    </div>
    <div class="wrap">
      <section class="screen">
        <div class="pinglun">
          <div class="pinglun-num">
            <img src="../assets/newsdetail/pl-icon.png" alt="">
            <span>999</span>
          </div>
          <div class="pinglun-say">
            <input type="text" name="" placeholder="输入你想说的，发表评论" value="">
            <div class="pinglun-send"
            @click="$modal.show('foo')">
              发送
            </div>
          </div>
        </div>
      </section>
    </div>
    <Comments></Comments>
  </div>
</template>

<script>
import SmallItem from './news/SmallItem'
import vmodal from 'vue-js-modal'
import Vue from 'vue'
import Comments from '@/components/Comments'

Vue.use(vmodal)

export default {
  name: 'newsdetail',
  components: {
    SmallItem,
    Comments
  },
  methods: {
    show () {
      this.$modal.show('foo');
  },
    hide () {
      this.$modal.hide('foo');
  }
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
  width: 750px;
  float: left;
  padding: 45px 30px;
  background-color: #fff;
}
.gd-main h1{
  font-size: 32px;
  color: #333333;
  margin-bottom: 25px;
}
.nd-info{
  overflow: hidden;
  height: 30px;
  margin-bottom: 50px;
  border-bottom: 1px solid #ddd;
}
.nd-info .nd-user{
  float: left;
}
.nd-info .nd-date{
  float: right;
}
.newsdetail article p{
  font-size: 22px;
  padding: 20px 0;
  color: #555;
}
.gd-details{
  float: right;
  width: 368px;
}
.pinglun{
  height: 50px;
  line-height: 50px;
  padding: 20px;
  background-color: #fff;
}
.pinglun-num{
  float: left;
  color: #999;
}
.pinglun-num img{
  vertical-align: middle;
}
.pinglun-say{
  float: left;
  width: 1050px;
  border: 1px solid #eee;
  border-radius: 5px;
  margin-left: 20px;
}
.pinglun-say input{
  float: left;
  border: none;
  width: 910px;
  outline: none;
  height: 47px;
  line-height: 47px;
  text-indent: 12px;
  font-size: 18px;
  color: #999;
}
.pinglun-send{
  float: right;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  background-color: #145fdc;
  width: 120px;
}
</style>
