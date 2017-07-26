<template>
  <div class="buycar">
    <div class="wrap">
      <section class="screen">
        <div class="buycar-zupin">
          <h3>租凭
            <span class="allchenk">
              全选 <input type="checkbox" name="" value="">
            </span>
          </h3>
          <CarItem  v-for="(item, index) in 2"></CarItem>
          <AddItem></AddItem>
          <CarItem  v-for="(item, index) in 2"></CarItem>
        </div>
        <div class="buycar-groom">
          <h3>更多推荐</h3>
          <HotItem v-for="(item, index) in 2"></HotItem>
        </div>
      </section>
    </div>
    <div class="wrap">
      <section class="screen">
        <div class="buycar-all">
          <div class="all-left">
            <span>
              租凭总价
              <strong>￥398</strong>
            </span>
            <span>
              购买总价
              <strong>￥398</strong>
            </span>
          </div>
          <div class="all-right">
            <div class="all-price">
              总价：<strong>￥796</strong>
            </div>
            <div class="all-btn">
              提交订单
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import HotItem from './games/HotItem'
import CarItem from './buycar/CarItem'
import AddItem from './buycar/AddItem'

export default {
  name: 'buycar',
  components: {
    HotItem,
    CarItem,
    AddItem

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
.buycar-zupin{
 float: left;
 width: 892px;
 overflow: hidden;
}
.buycar-zupin .allchenk{
  float: right;
  padding-right: 20px;
}
.buycar-groom{
 float: right;
 width: 286px;
}
h3{
  background-color: #fff;
  font-weight: 600;
  height: 50px;
  line-height: 50px;
  padding-left: 12px;
  border-bottom: 2px solid #145fdc
}
.buycar-all{
  width: 100%;
  height: 78px;
  line-height: 80px;
  font-size: 18px;
  border: 1px solid #ddd;
  background-color: #e5e5e5;
}
.buycar-all .all-left{
  float: left;
}
.buycar-all .all-left span{
  color: #333333;
  margin-left: 25px;
}
.buycar-all .all-left strong{
  color: #ff6c00;
}
.buycar-all .all-right{
  float: right;
  width: 300px;
}
.buycar-all .all-right .all-price{
  color: #ff6c00;
  float: left;
}
.buycar-all .all-right .all-btn{
  width: 140px;
  color: #fff;
  float: right;
  height: 78px;
  line-height: 80px;
  text-align: center;
  background-color: #145fdc;
}
</style>
