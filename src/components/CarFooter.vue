<template>
  <div class="footer-panel">
    <div class="car-footer">
      <div class="icon-panel kefu" @click="handleClick('customer')" >
        <img src="@/assets/images/icon/kefu.png" alt="客服">
        <div>客服</div>
      </div>
      <div class="icon-panel shop-car" @click="handleClick('shopCar')" >
        <img src="@/assets/images/icon/car.png" alt="购物车">
        <div>购物车</div>
      </div>
      <div class="add-car" @click="handleClick('addCar')">加入购物车</div>
      <div class="pay" @click="handleClick('pay')">立即购买</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'car-footer',
  methods: {
    handleClick(eventName) {
      this.$emit(eventName)
    }
  }
}
</script>

<style lang="stylus">
.footer-panel {
  height .8rem
  margin-top .6rem
}
.car-footer {
  display  flex
  align-items center
  border-top 1px solid #999999
  position fixed
  bottom 0
  left 0
  width 100vw
  height 1rem
  background white

  .icon-panel {
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    flex 1
    border-right 1px solid #999999
    height 100%
    
    img {
      width 30%
    }
  }

  .add-car, .pay {
    text-align center
    flex 2
    height 1rem
    line-height 1rem
  }

  .pay {
    background  #fee009
  }
}
</style>

