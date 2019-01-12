<template>
  <div class="_header">
    <div class="yl-header-left"></div>
    <div class="yl-header-title">
      <slot name="title">
        标题
      </slot>
    </div>
    <div class="yl-header-right">
      <slot name="right">
        <img src="../assects/images/icon/home.png" alt="">
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'yl-header'
}
</script>
<style lang="stylus">
._header {
  display  flex
  height .8rem
  align-items center

  .yl-header-left {
    flex 1
  }

  .yl-header-title {
    text-align center
  }

  .yl-header-right {
    flex 1
    text-align right
    margin-right .2rem

    img {
      width .3rem
      height .3rem
    }
  }
}
</style>


