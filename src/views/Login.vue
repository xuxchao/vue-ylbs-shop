<template>
<div class='login'>
  <img src="@/assets/images/icon/logo144.png" alt="一龄图标">
  <div class="input-panel">
    <input type="text" placeholder="请输入手机号">
  </div>
  <div class="input-panel">
    <input type="text" placeholder="请输入验证码">
    <mt-button type="default" size="normal">获取验证码</mt-button>
  </div>
  <mt-button type="primary" class="mint-button--yellow"  size="large" @click="goback()">登陆</mt-button>
  <div class="agreement">登陆即代表您已同意<span class="text">《用户注册协议》</span>和<span class="text">《隐私政策》</span></div>
</div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      vuegConfig:{
        forwardAnim: 'fadeInDown', //前进动画，默认为fadeInRight
        backAnim: 'fadeInUp', //后退动画，默认为fedeInLeft
      }
    }
  },
  methods: {
    goback() {
      this.$store.state.login = true
      this.$router.go(-1)
    }
  }
};
</script> 
<style lang="stylus">
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;

  img {
    width: 2rem;
    margin-bottom: 0.6rem;
  }

  .input-panel {
    box-sizing: border-box;
    margin-top: 0.4rem;
    width: 80%;
    border-bottom: 1px solid rgb(188, 188, 188);
    padding: 0.2rem;
    display: flex;
    justify-content: space-between;
  }

  .mint-button--yellow {
    margin-top: 0.8rem;
    width: 80%;
  }

  .agreement {
    margin-top: 3.6rem;

    .text {
      color: #fee009;
    }
  }
}
</style>
