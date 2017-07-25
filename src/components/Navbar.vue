<template>
  <div class="navbar">
    <div class="wrap">
      <h1><img src="../assets/logo.png" alt=""></h1>
      <div class="nav-right">
        <div class="nav-list">
         <router-link to="/">首页</router-link>
         <router-link to="/news">新闻</router-link>
         <router-link to="/games">游戏库</router-link>
         <router-link to="/buycar">购物车</router-link>
       </div>
        <div class="nav-line"></div>
        <div class="nav-search">
          <input class="nav-search-input" type="text" placeholder="搜索 刺客信条">
        </div>
        <div class="nav-user"><router-link to="user"><a class="nav-icon-user" href=""></a></router-link></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'navbar'
    }
  }
}
</script>

<style scoped>
.navbar{
  height: 80px;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
}
.navbar h1{
  float: left;
  padding-top: 15px;
}
.nav-right{
  float: right;
  width: 670px;
}
.nav-list{
  float: left;
}
.nav-list a{
  float: left;
  border-bottom: 2px solid #fff;
  line-height: 78px;
  padding: 0 20px 0 20px;
  cursor: pointer;
  font-size: 20px;
}
.nav-list a{
  color: #555;
  display: inline-block;
  text-decoration: none;
}
.nav-list .router-link-exact-active{
  color: #145fdc;
  border-bottom: 2px solid #145fdc;
}
.nav-search{
  float: left;
  margin-top: 22px;
  padding-left: 20px;
}
.nav-search-input{
  display: inline-block;
  background: url('../assets/search-bg.png') no-repeat;
  width: 170px;
  height: 30px;
  border: none;
  padding-left: 30px;
  line-height: 30px;
  outline: none
}
.nav-line{
  height: 22px;
  float: left;
  width: 1px;
  margin-top: 28px;
  background-color: #ddd;
  margin-left: 15px;
  margin-right: 15px;
}
.nav-user{
  float: left;
  height: 80px;
}
.nav-icon-user{
  display: inline-block;
  background: url('../assets/icon-user.png') no-repeat;
  width: 30px;
  height: 30px;
  margin-top: 20px;
  margin-left: 20px;
}

</style>
