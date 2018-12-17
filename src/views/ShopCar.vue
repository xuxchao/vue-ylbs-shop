<template>
<div class='shop-car'>
  <mt-cell-swipe v-for="(item, index) in shops" :key="item.id"
  :right="[
    {
      content: '删除',
      style: { background: 'red', color: '#fff', display: 'flex', alignItems: 'center' },
      handler: () => this.$messagebox('确认删除？')
    }
  ]">
    <div class="item" slot="title">
      <div class="radio-checkbox-panel">
        <span :class="{active: item.check}" @click="toggleCheck(index)" class="radio-checkbox-img"></span>
      </div>
      <div class="left"><img :src="item.img" alt="商品图片"></div>
      <div class="middle">
        <div class="title">{{item.title}}</div>
        <div class="price">￥{{item.price}}</div>
      </div>
      <div class="right">
        <div class="group">
          <span :style="{color: item.num === 1 ? '#ddd' : '#333'}" @click="reduceNum(index)">-</span>
          <input type="number" v-model="item.num">
          <span @click="addNum(index)">+</span>
        </div>
      </div>
    </div>
  </mt-cell-swipe>
  <div class="footer">
    <div class="left"> 
      <span class="radio-checkbox-img" :class="{active: allCheck}"></span> 全选
      <span class="total">合计 <span class="price">￥{{totalPrice}}</span></span>
    </div>
    <div class="right">提交订单</div>
  </div>
</div>
</template>
<script>
export default {
  name: 'shopCar',
  data() {
    return {
      shops: []
    }
  },
  computed: {
    totalPrice() {
      var total = 0
      this.shops.map(value => {
        if (value.check) total += value.num * value.price
      })
      return total
    },
    allCheck() {
      var newLength = this.shops.filter(value => {
        return value.check
      }).length

      return newLength === this.shops.length ? true : false
    }
  },
  methods: {
    addNum(index) {
      this.shops[index].num ++
    },
    reduceNum(index) {
      if (this.shops[index].num === 1)  return
      this.shops[index].num --
    },
    toggleCheck(index) {
      this.shops[index].check = !this.shops[index].check
    },
    resultPay() {

    }
  },
  created() {
    this.$store.dispatch("getCarList").then(res => {
      this.shops = res.data;
    });
  }
};
</script>
<style lang="stylus">
.shop-car {
  .active {
    background-position: 0 -0.37rem !important;
  }
  .radio-checkbox-img {
    background: url('../assets/images/icon/xz@2x.png') no-repeat;
    background-position: 0 0rem;
    background-size: cover;
    width: 0.34rem;
    height: 0.34rem;
    display: inline-block;
    margin-right: 0.05rem;
  }
  .mint-cell-wrapper {
    .item {
      display: flex;
      align-items center
      padding .2rem

      .left {
        margin 0 .2rem

        img {
          display: block;
          width: 1.4rem;
          height: 1.4rem;
          background: red;
        }
      }

      .middle {
        width: 1.4rem;
        height: 1.4rem;
        display flex
        flex 1
        flex-direction column
        justify-content space-between
      }

      .right {
        width: 1.4rem;
        height: 1.4rem;
        display flex
        align-items flex-end
        .group {
          border 1px solid #ddd
          border-radius .04rem
          display flex

          span {
            &:first-child {
              border-right 1px solid #ddd
            }
            &:last-child {
              border-left 1px solid #ddd
            }
          }

          input, span {
            width .4rem
            text-align center
          }
        }
      }
    }
  }

  .footer {
    display flex
    justify-content space-between
    align-items center
    border-top 1px solid #ddd
    position fixed
    bottom .93rem
    width: 100vw

    .left {
      display flex
      align-items center
      margin 0 .2rem

      .total {
        margin 0 .2rem
      }

      .price {
        color red
      }
    }
    .right {
      height .8rem
      width 1.8rem
      text-align center
      line-height .8rem
      background rgb(255,214,58)
    }
  }
}
</style>
