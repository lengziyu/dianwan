
<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
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

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f7f7f7
}
li{
  list-style: none;
}
.wrap{
  max-width: 1200px;
  margin: 0 auto;
}
</style>
