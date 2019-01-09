<template>
  <div class="shop-car" v-if="$store.state.login">
    <mt-cell-swipe
      v-for="(item, index) in shops"
      :key="item.id"
      :right="[
    {
      content: '删除',
      style: { background: 'red', color: '#fff', display: 'flex', alignItems: 'center' },
      handler: () => this.$messagebox('确认删除？')
    }
  ]"
    >
      <div class="item" slot="title">
        <div class="radio-checkbox-panel">
          <span
            :class="{active: item.check}"
            @click="toggleCheck(index)"
            class="radio-checkbox-img"
          ></span>
        </div>
        <div class="left" @click="godetail(item.id)">
          <img :src="item.img" alt="商品图片">
        </div>
        <div class="middle" @click="godetail(item.id)">
          <div class="title">{{item.title}}</div>
          <div class="price">￥{{item.price}}</div>
        </div>
        <div class="right">
          <AddReduce @add="addNum(index)" @reduce="reduceNum(index)" :num="item.num"></AddReduce>
        </div>
      </div>
    </mt-cell-swipe>
    <div class="footer">
      <div class="left">
        <span class="radio-checkbox-img" :class="{active: allCheck}"></span> 全选
        <span class="total">合计
          <span class="price">￥{{totalPrice}}</span>
        </span>
      </div>
      <div class="right" @click="submitOrder">提交订单</div>
    </div>
    <Footer></Footer>
  </div>
  <div v-else>
    <EmptyLogin></EmptyLogin>
  </div>
  
</template>
<script>
import Footer from "@/components/_footer";
import AddReduce from "@/components/AddReduce";
import EmptyLogin from "@/components/EmptyLogin";
import { Button } from "mint-ui";
export default {
  name: "shopCar",
  components: { Footer, AddReduce, Button, EmptyLogin },
  data() {
    return {
      shops: []
    };
  },
  computed: {
    totalPrice() {
      var total = 0;
      this.shops.map(value => {
        if (value.check) total += value.num * value.price;
      });
      return total;
    },
    allCheck() {
      var newLength = this.shops.filter(value => {
        return value.check;
      }).length;

      return newLength === this.shops.length ? true : false;
    }
  },
  methods: {
    godetail(id) {
      this.$router.push(`/shopdetail/${id}`);
    },
    addNum(index) {
      this.shops[index].num++;
    },
    reduceNum(index) {
      if (this.shops[index].num === 1) return;
      this.shops[index].num--;
    },
    toggleCheck(index) {
      this.shops[index].check = !this.shops[index].check;
    },
    submitOrder() {
      this.$router.push(`/pay`);
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
  margin-bottom: 2rem;

  .active {
    background-position: 0 -0.34rem !important;
  }

  .radio-checkbox-img {
    background: url('/images/icon/xz@2x.png') no-repeat;
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
      align-items: center;
      padding: 0.2rem;

      .left {
        margin: 0 0.2rem;

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
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
      }

      .right {
        height: 1.4rem;
        display: flex;
        align-items: flex-end;

        .group {
          border: 1px solid #ddd;
          border-radius: 0.04rem;
          display: flex;

          span {
            &:first-child {
              border-right: 1px solid #ddd;
            }

            &:last-child {
              border-left: 1px solid #ddd;
            }
          }

          input, span {
            width: 0.4rem;
            text-align: center;
          }
        }
      }
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 0.01rem solid #ddd;
    position: fixed;
    bottom: 1rem;
    width: 100vw;
    height: 1rem;
    background-color: #f8f8f8;

    .left {
      display: flex;
      align-items: center;
      margin: 0 0.2rem;

      .total {
        margin: 0 0.2rem;
      }

      .price {
        color: red;
      }
    }

    .right {
      height: 1rem;
      width: 1.8rem;
      text-align: center;
      line-height: 1rem;
      background: rgb(255, 214, 58);
    }
  }
}
</style>
