<template>
  <div class='dg-login'>
    <div class='login'>
      <img src="../assects/images/icon/logo.png" alt="一龄图标">
      <div class="input-panel">
        <input type="text" placeholder="请输入手机号">
      </div>
      <div class="input-panel">
        <input type="text" placeholder="请输入验证码">
        <mt-button type="default" size="small">获取验证码</mt-button>
      </div>
      <mt-button type="primary" class="mint-button--yellow"  size="large" @click="goback()">登陆</mt-button>
      <div class="agreement">登陆即代表您已同意<span class="text">《用户注册协议》</span>和<span class="text">《隐私政策》</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
    }
  },
  methods: {
    goback() {
      this.$store.commit('login');
      this.$router.go(-1)
    }
  }
};
</script> 
<style lang="stylus">
.dg-login {
  background: white;
  height: 100vh;
  width: 100vw;

  .login {
    padding-top: .6rem;
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
      width: 90%;
      border-bottom: 1px solid rgb(188, 188, 188);
      padding: 0.2rem;
      display: flex;
      justify-content: space-between;
      height: 1rem;
    }

    .mint-button--yellow {
      margin-top: 0.8rem;
      width: 80%;
    }

    .agreement {
      margin-top: 2.6rem;

      .text {
        color: #fee009;
      }
    }
  }
}

</style>
