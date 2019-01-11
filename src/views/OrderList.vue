<template>
  <div class="panel-order-list">
    <mt-navbar v-model="selected">
      <mt-tab-item id="0">全部</mt-tab-item>
      <mt-tab-item id="1">待付款</mt-tab-item>
      <mt-tab-item id="2">代发货</mt-tab-item>
      <mt-tab-item id="3">待收货</mt-tab-item>
      <mt-tab-item id="4">已完成</mt-tab-item>
      <mt-tab-item id="5">已取消</mt-tab-item>
      <mt-tab-item id="6">售后处理</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container style="margin-top: .2rem" v-model="selected">
      <mt-tab-container-item :id="selected">
        <div class="order" v-for="item in orderList" :key="item.id">
          <div class="order-num">
            <div class="left">订单编号:{{item.payId}}</div>
            <div class="right">{{item.status | statusToText}}</div>
          </div>
          <div class="shop-content">
            <img src="/images/shops/1.jpg" alt>
            <div class="middle">
              <div class="name">{{item.title}}</div>
              <!-- <div class="price">￥{{item.price}}</div> -->
            </div>
            <div class="num">×{{item.num}}</div>
          </div>
          <div class="total">
            <div class="item">共一件商品</div>
            <div class="item">
              实付款
              <span style="color: rgb(180, 40, 46)">{{item.price}}</span>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { Navbar, TabItem } from "mint-ui";
export default {
  components: { Navbar, TabItem },
  data() {
    return {
      selected: "2",
      orderList: []
    };
  },
  watch: {
    selected(newVal) {
      this.getOrderList(newVal);
    }
  },
  filters: {
    statusToText(value) {
      let reValue;
      switch (value) {
        case 1:
          reValue = "代付款";
          break;
        case 2:
          reValue = "代发货";
          break;
        case 3:
          reValue = "待收货";
          break;
        case 4:
          reValue = "已完成";
          break;
        case 5:
          reValue = "已取消";
          break;
        case 6: 
          reValue = "售后处理";
          break;
      }
      return reValue
    }
  },
  methods: {
    getOrderList(num = 1) {
      /**
       * 状态代表的值
       * 0 全部
       * 1 代付款
       * 2 代发货
       * 3 待收货
       * 4 已完成
       * 5 已取消
       * 6 售后处理
       */
      this.$store.dispatch("getOrderList").then(res => {
        if (num != 0)
          this.orderList = res.data.filter(item => item.status == num);
        else this.orderList = res.data;
      });
    }
  },
  created() {
    this.getOrderList(this.selected);
  }
};
</script>

<style lang="stylus">
.panel-order-list {
  .order-num {
    border-bottom: 0.01rem solid #dddddd;
    padding: 0.2rem;
    background: white;
    margin-top: 0.2rem;
    display: flex;
    justify-content: space-between;

    .right {
      font-weight: 700;
    }
  }

  .shop-content {
    display: flex;
    padding: 0.2rem;
    background: white;

    img {
      height: 1.6rem;
    }

    .middle {
      flex: 1;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      margin: 0 0.2rem;

      .price {
        color: #b4282e;
      }
    }

    .num {
      align-self: flex-end;
    }
  }

  .total {
    display: flex;
    justify-content: flex-end;
    border-bottom: 0.01rem solid #dddddd;
    border-top: 0.01rem solid #dddddd;
    background: white;
    padding: 0.2rem;

    .item {
      margin-left: 0.3rem;
    }
  }
}
</style>

