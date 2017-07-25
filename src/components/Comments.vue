<template>
  <div class="comments">
    <modal name="foo" :height="620" :width="900">
      <textarea name="name" rows="8" cols="80" placeholder="输入你想说的，发送评论"></textarea>
      <div class="comments-btn">
        <a @click="$modal.hide('foo')">发表评论</a>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'comments'

}
</script>


<style scoped>
.v--modal{
  border-radius: 10px;
}
.comments textarea{
  padding-top: 10px;
  border: 1px solid #ddd;
  width: 840px;
  margin-top: 30px;
  margin-left: 30px;
  outline: none;
  height: 450px;
  text-indent: 12px;
  font-size: 18px;
  color: #999;
  background-color: #f7f7f7;
}
.comments-btn{
  text-align: center;
  margin-top: 20px;
}
.comments-btn a{
  display: inline-block;
  width: 160px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  line-height: 45px;
  height: 45px;
  background-color: #145fdc;
  color: #fff;
}
</style>
