<template>
  <div class="playcomment">
    <div class="pc-avatar">
    </div>
    <div class="pc-main">
      <div class="pc-head">
        <div class="pc-name">
          昵称2
        </div>
        <div class="pc-date">
          2017-07-23
        </div>
      </div>
      <div class="pc-content">
        这是一条评论这是一条评论这是一条评论这是一条评论
        这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这评论...
      </div>
      <div class="pc-content-after">
        @昵称：这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论
        这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这评论...
      </div>
      <div class="pc-info">
        <div class="pc-tip">举报</div>
        <div class="pc-huifu">回复</div>
        <div class="pc-zan">赞</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'playcomment'

}
</script>


<style scoped>
.playcomment{
  padding: 30px;
  background: #fff;
  overflow: hidden;
  margin-top: 15px;
  margin-bottom: 20px;
}
.pc-avatar{
  width: 64px;
  height: 64px;
  background: #145fdc;
  border-radius: 50%;
  float: left;
  overflow: hidden;
}
.pc-main{
  margin-left: 25px;
  float: left;
  width: 660px;
}
.pc-head{
  line-height: 64px;
  height: 64px;
  overflow: hidden;
}
.pc-name{
  font-size: 18px;
  float: left;
}
.pc-date{
  float: right;
  color: #999;
}
.pc-content{
  color: #737373
}
.pc-content-after{
  background: #eeeeee;
  padding: 20px;
  margin-top: 10px;
  color: #737373
}
.pc-info{
  overflow: hidden;
  margin-top: 20px;
}
.pc-info .pc-tip,.pc-info .pc-zan,.pc-info .pc-huifu{
  width: 40px;
  border: 1px solid #b7b6b6;
  border-radius: 8px;
  height: 30px;
  line-height: 30px;
  color: #999;
  padding-left: 27px;
}
.pc-info .pc-tip{
  float: left;
  background: url('../../assets/gamesdetail/tip.png') no-repeat  center left;
}
.pc-info .pc-zan{
  float: right;
  background: url('../../assets/gamesdetail/zan.png') no-repeat  center left;
}
.pc-info .pc-huifu{
  float: right;
  margin-left: 15px;
  background: url('../../assets/gamesdetail/huifu.png') no-repeat  center left;
}
</style>
