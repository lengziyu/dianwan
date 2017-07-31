<template>
  <div class="usernav">
      <router-link to="/user">修改个人资料 <span>></span></router-link>
      <router-link to="/user/gbi">我的G币<span>></span></router-link>
      <router-link to="/user/wallet">我的钱包<span>></span></router-link>
      <router-link to="/user/record">交易记录<span>></span></router-link>
      <router-link to="/user/game">我的游戏<span>></span></router-link>
      <router-link to="/user/vip">会员中心<span>></span></router-link>
      <router-link to="/user/addr">我的收货信息<span>></span></router-link>
      <router-link to="/user/rule">平台租凭规则<span>></span></router-link>
      <router-link to="/user/issue">常见问题<span>></span></router-link>
      <router-link to="/user/call">联系我们<span>></span></router-link>
  </div>
</template>

<script>
export default {
  name: 'usernav'

}
</script>


<style scoped>
.usernav{
  width: 190px;
  background: #fff;
  padding-left: 15px;
  padding-right: 15px;
  height: 529px;
  float: left;
  position: fixed;
  left: 50%;
  margin-left: -605px;
  overflow: hidden;
}
.usernav a{
  width: 190px;
  height: 40px;
  padding: 6px 0;
  line-height: 40px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  display: block;
  text-decoration: none;
  font-size: 14px;
  color: #999;
}
.usernav a span{
  float: right;
  display: inline-block;
}

.usernav a.router-link-exact-active{
  border-bottom: 1px solid #145fdc;
  color: #145fdc;
}

</style>
