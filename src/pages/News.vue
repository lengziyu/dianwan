<template>
  <div class="news">
    <div class="wrap">
      <div class="news-nav">
        <ul>
          <li class="active">热门</li>
          <li>PS4</li>
          <li>XBOX</li>
          <li>VPS</li>
          <li>SWITCH</li>
          <li>WII</li>
          <li>其他</li>
        </ul>
      </div>
      <div class="news-content">
        <Bigitem></Bigitem>
        <Item v-for="(item, index) in 6"></Item>
      </div>

      <div class="news-zhuanti">
        <Zhuanti></Zhuanti>
      </div>

      <div class="news-content2">
        <Item v-for="(item, index) in 12"></Item>
      </div>
      <Moremsg></Moremsg>
    </div>
  </div>
</template>

<script>
import Bigitem from './news/Bigitem'
import Item from './news/Item'
import Zhuanti from './news/Zhuanti'
import Moremsg from '@/components/Moremsg'

export default {
  name: 'news',
  components: {
    Bigitem,
    Item,
    Zhuanti,
    Moremsg
  }
}
</script>

<style scoped>

 .wrap{
   margin-top: 30px;
   overflow: hidden;
 }
 .news-nav{
   background-color: #fff;
   height: 80px;
   margin-bottom: 20px;
 }
 .news-nav li{
   height: 78px;
   float: left;
   width: 171px;
   font-size: 20px;
   font-weight: 600;
   text-align: center;
   border-bottom: 2px solid #fff;
   line-height: 78px;
 }
  .news-nav li.active{
    border-bottom: 2px solid #145fdc;
  }
  .news-content,.news-content2{
    overflow: hidden;
  }
</style>
