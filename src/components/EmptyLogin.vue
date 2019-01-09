<template>
  <div class="empty-login">
    <img :src="url" alt>
    <span>暂无相关信息</span>
    <mt-button type="primary" class="mint-button--yellow" size="normal" @click="toLogin" style="width: 33%">请登录</mt-button>
  </div>
</template>
<script>
export default {
    props: {
        url: {
            type: String,
            default: '/images/empty/gouwuchekong.png'
        }
    },
    methods: {
        toLogin() {
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="stylus">
.empty-login {
    height 100vh
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
      width: 2rem;
  }
  span {
      margin-top .2rem
      margin-bottom .3rem
  }
}
</style>

