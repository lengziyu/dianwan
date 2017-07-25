<template>
  <div class="usergame">
    <div class="user-tabs">
      <ul>
        <li class="active">在玩</li>
        <li>想玩</li>
      </ul>
    </div>
    <div class="record-items">
      <ul>
        <GameItem  v-for="(item, index) in 4"></GameItem>
      </ul>
    </div>
  </div>
</template>

<script>
import GameItem from '../buycar/GameItem'

export default {
  name: 'usergame',
  components: {
    GameItem
  }
}
</script>


<style scoped>
.record{

}
.user-tabs{
  background-color: #fff;
  height: 72px;
  width: 833px;
  padding: 0 30px;
  margin-bottom: 15px;
}
.user-tabs li{
  cursor: pointer;
  float: left;
  padding: 0 20px;
  line-height: 70px;
  border-bottom: 2px solid #fff;
  color: #555;
}
.user-tabs li.active{
  border-bottom: 2px solid #145fdc;
  color: #145fdc;
}
.user-btn{
  padding: 2px 6px;
  font-size: 14px;
  float: left;
  margin-left: 12px;
  border-radius: 5px;
  line-height: 24px;
  min-width: 80px;
  text-align: center;
  border: 1px solid #145fdc;
}
.user-btn-detail{
  color: #fff;
  background-color: #145fdc
}
.record-items-head .cricle{
  display: inline-block;
  width: 20px;
  vertical-align: middle;
  margin-top: -2px;
  height: 20px;
  border-radius: 50%;
  background: #145fdc;
}
.record-items-head{
  background-color: #fff;
  margin-top: 20px;
  padding-left: 20px;
  line-height: 40px;
  color: #999;
  width: 873px;
}
</style>
