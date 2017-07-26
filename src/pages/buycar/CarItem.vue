<template>
  <div class="caritem">
    <div class="caritem-pic">
      <img src="../../assets/buycar/item.jpg" alt="">
    </div>
    <div class="car-wrap">
      <div class="caritem-head">
        <div class="ci-title">
          刺客信条
          <span>（Assassin's Creed）</span>
        </div>
        <div class="ci-nums">
          <span class="ci-number">数量</span>
          <span class="ci-chenk">选择</span>
        </div>
      </div>
      <div class="caritem-subtitle">
        版本：港行
      </div>
      <div class="caritem-info">
        <div class="caritem-pirce">
          租赁价：￥199
          <span>市场价：399元</span>
        </div>
        <div class="caritem-operation">
          <div class="delect-game">
            删除游戏
          </div>
          <div class="move-game">
            移到想玩
          </div>
        </div>
      </div>
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
.caritem:hover{
  background: #fef6d8
}
.caritem-pic{
  width: 120px;
  float: left;
}
.car-wrap{
  margin-left: 30px;
  width: 680px;
  float: left;
}
.caritem-head{
  overflow: hidden;
}
.ci-title{
  font-size: 22px;
  float: left;
}
.ci-title span{
  font-size: 14px;
  color: #999;
}
.ci-nums{
  float: right;
}
.caritem-subtitle{
  font-size: 16px;
  margin-top: 10px;
}
.caritem-info{
  overflow: hidden;
  margin-top: 32px;
}
.caritem-pirce{
  float: left;
  font-size: 16px;
  color: #ff6c00;
}
.caritem-pirce span{
  color: #999;
  font-size: 14px;
  padding-left: 10px;
  text-decoration: line-through;
}
.caritem-operation{
  float: right;
}

.caritem-operation .move-game,.caritem-operation .delect-game{
  float: left;
  padding-left: 30px;
  margin-left: 12px;
  display: inline-block;
}
.caritem-operation .move-game{
  background: url('../../assets/buycar/move-game.png') no-repeat;
}
.caritem-operation .delect-game{
  background: url('../../assets/buycar/delect-game.png') no-repeat;
}
</style>
