<template>
  <div class="userdata">
    <form class="form-horizontal">
      <div class="form-group">
        <label class="col-sm-2 control-label">头像</label>
        <div class="col-sm-10">
          <div class="touxiang"></div>
          <a class="user-btn user-btn-detail float-right">编辑头像</a>
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">昵称</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" placeholder="Email">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">简介</label>
        <div class="col-sm-10">
          <textarea name="name" class="form-control" rows="8" cols="80"></textarea>
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">标签</label>
        <div class="col-sm-10">
          <a class="user-btn user-btn-detail float-right">添加标签</a>
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">性别</label>
        <div class="col-sm-10">
          <label><input name="Fruit" type="radio" checked />男 </label>
          <label><input name="Fruit" type="radio"/>女 </label>
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">城市</label>
        <div class="col-sm-10">

        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label">生日</label>
        <div class="col-sm-10">

        </div>
      </div>

      <div class="form-group">
        <div class="float-right">
          <a class="outloginbtn" href="">退出登陆</a>
          <a class="savebtn" href="">保存</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'userdata'
}
</script>


<style scoped>
.float-right{
  float: right;
}
.userdata{
  background: #fff;
  padding: 20px 40px;
  width: 880px;
}
.form-group{
  width: 100%;
  overflow: hidden;
  margin-top: 15px;
}
.col-sm-2{
  float: left;
  padding-top: 12px;
  width: 80px;
}
.touxiang{
  width: 64px;
  height: 64px;
  border-radius: 50%;
  float: left;
  background-color: #eee;
}
.col-sm-10{
  float: left;
  width: 780px;
  padding-left: 20px;
  padding-bottom: 15px;
  min-height: 30px;
  border-bottom: 1px solid #ddd;
}
.user-btn{
  padding: 2px 6px;
  margin-top: 20px;
  font-size: 14px;
  display: inline-block;
  float: right;
  margin-left: 12px;
  border-radius: 10px;
  line-height: 24px;
  min-width: 80px;
  text-align: center;
  text-decoration: none;
  border: 1px solid #145fdc;
}
.user-btn-detail{
  color: #fff;
  background-color: #145fdc
}
input.form-control{
  height: 40px;
  border: none;
  background-color: #eee;
  outline: none;
  padding: 0 10px;
  width: 240px;
}
textarea.form-control{
  border: none;
  background-color: #eee;
  outline: none;
  padding: 10px 10px;
  width: 756px;
}
.outloginbtn{
  padding: 2px 6px;
  font-size: 14px;
  display: inline-block;
  margin-left: 12px;
  border-radius: 10px;
  line-height: 28px;
  min-width: 80px;
  color: #e32132;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 30px;
  text-decoration: none;
  border: 1px solid #e32132;
}
.savebtn{
  padding: 3px 10px;
  font-size: 14px;
  display: inline-block;
  margin-left: 12px;
  border-radius: 10px;
  line-height: 30px;
  min-width: 80px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #145fdc;
}
</style>
