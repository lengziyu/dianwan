<template>
  <div class="user">
    <div class="wrap">
      <UserNav></UserNav>
      <div class="user-main">
        {{$route.params.id}}
        <router-view></router-view>
      </div>

    </div>


  </div>
</template>

<script>
import UserNav from "./user/Nav"


export default {
  name: 'user',
  components: {
    UserNav
  }
}
</script>


<style scoped>
.user{
  overflow: hidden;
  margin-top: 30px;
  padding-bottom: 40px;
}
.user-main{
  float: left;
  width: 880px;
  min-height: 700px;
  margin-left: 25px;
}
.user-wrap{
  background-color: #fff;
  padding: 30px;
  min-height: 700px;
}
</style>
