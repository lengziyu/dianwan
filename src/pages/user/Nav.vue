<template>
  <div class="usernav">
    <ul>
      <li><router-link to="/user">修改个人资料 <span>></span></router-link></li>
      <li><router-link to="/user/gbi">我的G币<span>></span></router-link></li>
      <li><router-link to="/user/wallet">我的钱包<span>></span></router-link></li>
      <li><router-link to="/user/record">交易记录<span>></span></router-link></li>
      <li><router-link to="/user/game">我的游戏<span>></span></router-link></li>
      <li><router-link to="/user/vip">会员中心<span>></span></router-link></li>
      <li><router-link to="/user/addr">我的收货信息<span>></span></router-link></li>
      <li><router-link to="/user/rule">平台租凭规则<span>></span></router-link></li>
      <li><router-link to="/user/issue">常见问题<span>></span></router-link></li>
      <li><router-link to="/user/call">联系我们<span>></span></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'usernav'

}
</script>


<style scoped>
.usernav{
  width: 200px;
  background: #fff;
  padding-left: 15px;
  padding-right: 15px;
  height: 529px;
  float: left;
  overflow: hidden;
}
.usernav li{
  width: 200px;
  height: 40px;
  line-height: 40px;
  padding: 6px 0;
  border-bottom: 1px solid #ddd;
}
.usernav li.active{
  border-bottom: 1px solid #145fdc;
}
.usernav li span{
  float: right;
  display: inline-block;
}
.usernav li a{
  color: #999;
  font-size: 14px;
  width: 100%;
  display: inline-block;
  text-decoration: none;
}
</style>
