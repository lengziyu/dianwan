<template>
  <div class="zixun">
    <div class="zx-head">
      <div class="zx-head-title">资讯</div>
      <div class="zx-head-more">更多资讯》</div>
    </div>
    <div class="zx-main">
      <ZixunItem v-for="(item, index) in 4"></ZixunItem>
    </div>
    <div class="zx-foot-more">更多资讯》</div>
  </div>
</template>

<script>
import ZixunItem from './ZixunItem'
export default {
  name: 'zixun',
  components: {
    ZixunItem
  }
}
</script>


<style scoped>
.zixun{
  width: 895px;
  margin-top: 30px;
  float: left;
  overflow: hidden;
}
.zx-head{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #145fdc;
  background-color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
}
.zx-head-title{
  float: left;
}
.zx-head-more{
  float: right;
  color: #666666;
}
.zx-foot-more{
  text-align: center;
  background-color: #fff;
  margin-bottom: 20px;
  height: 45px;
  line-height: 45px;
}
</style>
