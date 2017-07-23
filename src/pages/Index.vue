<template>
  <div class="index">
    <Banner></Banner>
    <div class="wrap">
      <Zixun></Zixun>
      <Guize></Guize>
    </div>
  </div>
</template>

<script>

import Banner from './index/Banner'
import Zixun from './index/Zixun'
import Guize from './index/Guize'

export default {
  name: 'index',
  components: {
    Banner,
    Zixun,
    Guize
  }
}
</script>

<style scoped>
 h5{
   color: #145fdc;
 }
 .wrap{
   overflow: hidden;
 }
</style>
