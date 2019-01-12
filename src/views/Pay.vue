<template>
  <div class="panel-pay">
    <div class="address-info" @click="toast()">
      <div class="left">
        <div class="top">
          <span class="name">MrXu</span>
          <span class="tel">12345678910</span>
        </div>
        <div class="bottom">
          <img src="../assects/images/icon/address.png" alt>
          <span>北京市,通州区</span>
        </div>
      </div>
      <div class="right">
        <img src="../assects/images/icon/right-icon.png" alt>
      </div>
    </div>
    <img class="caitiao" src="../assects/images/decorate/caitiao.png" alt>
    <div class="canku-title">一龄直营仓</div>
    <div class="shop-content">
      <img src="/images/shops/1.jpg" alt>
      <div class="middle">
        <div class="name">植萃精华气色BB霜</div>
        <div class="price">￥928.00</div>
      </div>
      <div class="num">×1</div>
    </div>
    <yl-cell class="yhq" title="优惠券" @click="showPopup('couponsPopup')"></yl-cell>
    <div class="canku-title">支付方式</div>
    <yl-cell title="微信支付" :iconUrl="wxIcon"></yl-cell>
    <yl-cell class="yhq" title="发票(非必填)" @click="toast()"></yl-cell>

    <div class="resultPrice">
      <div class="item">
        <span class="title">商品金额</span>
        <span class="price">￥928</span>
      </div>
      <div class="item">
        <span class="title">运费</span>
        <span class="price">￥928</span>
      </div>
      <div class="item">
        <span class="title">活动优惠</span>
        <span class="price">￥928</span>
      </div>
      <div class="item">
        <span class="title">优惠券</span>
        <span class="price">￥928</span>
      </div>
    </div>
    <div class="footer">
      <div class="left">
        <span>实付:</span>
        <span class="price">￥928</span>
      </div>
      <div class="right" @click="toPaySuccess()">结算</div>
    </div>
    <mt-popup v-model="couponsPopup" position="bottom">
      <yl-float @close="showPopup('couponsPopup')" title="优惠券">
        <div slot="content" class="panel">
          <yl-coupons
            v-for="item in coupons"
            :key="item.id"
            :price="item.price"
            :minPrice="item.minPrice"
            :name="item.name"
            :startTime="item.startTime"
            :endTime="item.endTime"
            :img="item.img"
          ></yl-coupons>
        </div>
      </yl-float>
    </mt-popup>
  </div>
</template>
<script>
import YlFloat from "@/components/Float";
import YlCell from "@/components/Cell";
import YlCoupons from "@/components/Coupons";
import { Toast } from "mint-ui";
import  WxIcon from "../assects/images/icon/wx-icon.png";
export default {
  components: { YlFloat, YlCell, YlCoupons, Toast },
  data() {
    return {
      couponsPopup: false,
      wxIcon: WxIcon,
      coupons: []
    };
  },
  methods: {
    showPopup(namePopup) {
      this[namePopup] = !this[namePopup];
    },
    toast() {
      Toast("功能开发中");
    },
    toPaySuccess() {
      this.$router.push('/paysuccess')
    }
  },
  created() {
    this.$store.dispatch("getCouponList").then(res => {
      this.coupons = res.data;
    });
  }
};
</script>

<style lang="stylus">
.panel-pay {
  font-size: 0;
  margin-bottom: 1.2rem;

  .address-info {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0.2rem;
    align-items: center;
    background: white;

    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 1rem;

      .top {
        display: flex;

        .name {
          margin-right: 0.1rem;
        }
      }

      .bottom {
        img {
          height: 0.3rem;
        }
      }
    }
    .right {
        img {
            height .3rem
        }
        }
  }

  .caitiao {
    height: 0.08rem;
  }

  .canku-title {
    border-bottom: 0.01rem solid #dddddd;
    padding: 0.2rem;
    background: white;
    margin-top: 0.2rem;
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

  .yhq {
    margin-top: 0.2rem;
  }

  .resultPrice {
    margin-top: 0.2rem;
    display: flex;
    flex-direction: column;
    background: white;
    padding: 0.2rem;

    .item {
      display: flex;
      justify-content: space-between;
      margin: 0.1rem 0;
      color: #8c8c8c;

      &:first-child {
        color: #333;
      }
    }
  }

  .footer {
    background: white;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100vw;

    .left {
      flex: 1;
      margin-left: 0.2rem;

      .price {
        color: #b4282e;
      }
    }

    .right {
      background: #ffdf0a;
      width: 2rem;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
    }
  }
}
</style>
