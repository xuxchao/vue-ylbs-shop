<template>
  <div class="empty-login">
    <img src="../assects/images/empty/zhifchenggong.png" alt>
    <span>支付成功</span>
    <mt-button
      type="primary"
      class="mint-button--yellow"
      size="normal"
      @click="toOrderList"
      style="width: 33%"
    >查看订单</mt-button>
  </div>
</template>
<script>
export default {
  methods: {
    toOrderList() {
      this.$router.push("/orderlist");
    }
  }
};
</script>

<style lang="stylus">
.empty-login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    width: 2rem;
  }
  span {
    margin-bottom: 0.4rem;
  }
}
</style>

