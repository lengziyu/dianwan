
<template>
  <div id="app">
    <Navbar></Navbar>

    <div class="content">
      <router-view></router-view>
    </div>
    
    <Footbar></Footbar>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footbar from '@/components/Footbar'
export default {
  name: 'app',
  components: {
    Navbar,
    Footbar
  }
}
</script>

<style  lang="scss">
*{
  margin: 0;
  padding: 0;
}
.content{
  margin-top: 80px;
  overflow: hidden;
}
#app {
  font-family: 'noto sans s chinese';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f7f7f7;
  color: #333;
}
li{
  list-style: none;
}
.wrap{
  max-width: 1200px;
  margin: 0 auto;
}
.bannerwrap{
  position: relative;
}
.flickity-page-dots{
  position: absolute;
  bottom: 220px;
  left: 50%;
  margin-left: -100px;
  width: 200px;
  z-index: 999;
}
.flickity-page-dots .dot{
  width: 25px;
  height: 25px;
  float: left;
  margin-left: 20px;
  background: url('./assets/index/bn-btn.png') no-repeat;
}
.flickity-page-dots .dot.is-selected{
  background: url('./assets/index/bn-btn-active.png') no-repeat;
}
</style>
