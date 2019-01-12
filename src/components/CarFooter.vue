<template>
  <div class="footer-panel">
    <div class="car-footer">
      <div class="icon-panel" @click="handleClick('customer')">
        <img src="../assects/images/icon/kefu.png" alt="客服">
        <div>客服</div>
      </div>
      <div class="icon-panel" @click="handleClick('shopCar')">
        <img src="../assects/images/icon/car.png" alt="购物车">
        <div>购物车</div>
      </div>
      <div class="add-car" @click="handleClick('addCar')">加入购物车</div>
    </div>
    <div class="pay" @click="handleClick('pay')">立即购买</div>
  </div>
</template>
<script>
export default {
  name: "car-footer",
  methods: {
    handleClick(eventName) {
      this.$emit(eventName);
    }
  }
};
</script>

<style lang="stylus">
.footer-panel {
  display flex
  position: fixed;
  width: 100vw;
  left 0
  bottom 0
  height 1rem
  background white


  .car-footer {
    display: flex;
    align-items: center;
    border-top: 0.01rem solid rgba(153, 153, 153, .9);
    height: 1rem;

    .icon-panel {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      flex: 1;
      border-right: 0.01rem solid rgba(153, 153, 153, .9);
      height: 100%;
      width: 2rem;

      div {
        font-size: 0.01rem;
      }

      img {
        width: 30%;
      }
    }

    .add-car {
      text-align: center;
      flex: 2;
      height: 1rem;
      line-height: 1rem;
    }
  }

  .pay {
    text-align: center;
    flex: 1;
    height: 1rem;
    line-height: 1rem;
  }

  .pay {
    background: #fee009;
  }
}
</style>

