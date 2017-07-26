<template>
  <div class="useraddr">
    <ul>
      <li>
        <div class="useraddr-name">刘德华（1388888888888）</div>
        <div class="useraddr-addr">广东省广州市海珠区赤岗街道财智大厦520</div>
        <div class="useraddr-info">
          <div class="useraddr-left"> <input type="checkbox" name="" value=""> 设为默认</div>
          <div class="useraddr-operation">
            <span class="useraddr-delect">删除</span>
            <div class="useraddr-aditor">编辑</div>
          </div>
        </div>
      </li>
      <li>
        <div class="useraddr-name">刘德华（1388888888888）</div>
        <div class="useraddr-addr">广东省广州市海珠区赤岗街道财智大厦520</div>
        <div class="useraddr-info">
          <div class="useraddr-left"> <input type="checkbox" name="" value=""> 设为默认</div>
          <div class="useraddr-operation">
            <span class="useraddr-delect">删除</span>
            <div class="useraddr-aditor">编辑</div>
          </div>
        </div>
      </li>
      <li>
        <div class="useraddr-name">刘德华（1388888888888）</div>
        <div class="useraddr-addr">广东省广州市海珠区赤岗街道财智大厦520</div>
        <div class="useraddr-info">
          <div class="useraddr-left"> <input type="checkbox" name="" value=""> 设为默认</div>
          <div class="useraddr-operation">
            <span class="useraddr-delect">删除</span>
            <div class="useraddr-aditor">编辑</div>
          </div>
        </div>
      </li>
    </ul>
    <div class="add-useraddr">
      <a class="user-btn user-btn-detail" href="">新增地址</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'useraddr'

}
</script>


<style scoped>
.useraddr li{
  padding: 10px 20px 0 20px;
  overflow: hidden;
  background: #fff;
  width: 910px;
  margin-bottom: 15px;
}
.useraddr li .useraddr-name{
  font-size: 16px;
  line-height: 50px;
}
.useraddr li .useraddr-addr{
  color: #777;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
}
.useraddr li .useraddr-info{
  overflow: hidden;
  line-height: 30px;
  color: #999;
  line-height: 45px;
}
.useraddr li .useraddr-left{
  float: left;
  width: 120px;
}
.useraddr li .useraddr-operation{
  float: right;
}
.useraddr li .useraddr-delect{
  float: left;
}
.useraddr li .useraddr-aditor{
  float: left;
  margin-left: 20px;
}
.user-btn{
  padding: 2px 14px;
  font-size: 14px;
  display: inline-block;
  margin-left: 12px;
  border-radius: 5px;
  line-height: 32px;
  min-width: 80px;
  text-align: center;
  text-decoration: none;
  border: 1px solid #145fdc;
}
.user-btn-detail{
  color: #fff;
  background-color: #145fdc
}
.add-useraddr{
  text-align: center;
  margin-top: 30px;
}
</style>
