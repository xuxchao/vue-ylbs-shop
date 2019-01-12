<template>
  <div class="panel-shop-detail">
    <yl-header>
      <div slot="title" class="shop-detail-title">
        <a :class="{active : pageActive==1}" @click="pageClick(1)" >商品</a>
        <a :class="{active : pageActive==2}" @click="pageClick(2)" >详情</a>
      </div>
      <img slot="right" @click="gohome" src="../assects/images/icon/home.png" alt>
    </yl-header>
    <div class="play-list">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in playList" :key="item.img">
          <img :src="item.img" alt="轮播图图片">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="v-title">高雅3D水漾修护保湿面膜 <yl-badge>特价</yl-badge></div>
    <div class="v-describe">全面呵护滋养皮肤，软化和补充水分</div>
    <div class="v-price">¥298.00</div>
    <yl-cell title="商品规格" right="请选择" style="margin-bottom: .2rem;" @click="showPopup('ggPopup')"></yl-cell>
    <yl-cell title="领券" content="暂无活动" @click="showPopup('couponsPopup')"> 
      <span slot="content" style="display: block;width: 4.3rem;overflow: scroll;white-space: nowrap;">
          <span class="yhq-name">不同仓商品测试</span>
          <span class="yhq-name">不同仓商品测试</span>
      </span>
    </yl-cell>
    <yl-cell title="活动" content="暂无活动" @click="showPopup('activePopup')"></yl-cell>
    <yl-cell title="运费" content="运费" @click="showPopup('freightPopup')"></yl-cell>
    <yl-cell title="说明" content="假一赔十" icon ></yl-cell>
    <yl-cell title="商品评价" style="margin: .2rem 0" to="/evaluation/123">
      <div slot="right" style="display: flex; align-items:center">
        <span style="display: inline-block;margin-right: 0.2rem; color: #ffc107; font-size: 0.38rem;">★</span>2好评
      </div>
    </yl-cell>
    <!-- 商品规格浮层 -->
    <mt-popup
      v-model="ggPopup"
      position="bottom">
      <yl-float @close="showPopup('ggPopup')" title="商品" style="margin-bottom: 1rem">
        <div slot="content" class="panel">
          <div class="shop-detail">
            <img :src="img" alt="商品图片">
            <div class="describe">
              <div class="price">¥298</div>
              <div class="text">请选择规格属性</div>
            </div>
          </div>
          <div class="shop-num">
            <div class="num-title">数量</div>
            <AddReduce @add="add" @reduce="reduce" :num="num"></AddReduce>
          </div>
          <car-footer @customer="customer" @shopCar="shopCar" @addCar="addCar" @pay="pay"></car-footer>
        </div>
      </yl-float>
    </mt-popup>
    <!-- 优惠券 -->
    <mt-popup
      v-model="couponsPopup"
      position="bottom">
      <yl-float @close="showPopup('couponsPopup')" title="优惠券">
        <div slot="content" class="panel">
          <yl-coupons v-for="item in coupons" :key="item.id" :price="item.price" :minPrice="item.minPrice" :name="item.name" :startTime="item.startTime" :endTime="item.endTime"></yl-coupons>
        </div>
      </yl-float>
    </mt-popup>
    <!-- 活动 -->
    <mt-popup
      v-model="activePopup"
      position="bottom">
      <yl-float @close="showPopup('activePopup')" title="活动说明">
        <div slot="content" class="panel">
          暂无活动
        </div>
      </yl-float>
    </mt-popup>
    <!-- 运费 -->
    <mt-popup
      v-model="freightPopup"
      position="bottom">
      <yl-float @close="showPopup('freightPopup')" title="运费说明">
        <div slot="content" class="panel">
          暂无运费说明
        </div>
      </yl-float>
    </mt-popup>
    <car-footer @customer="customer" @shopCar="shopCar" @addCar="showPopup('ggPopup')" @pay="showPopup('ggPopup')" ></car-footer>
  </div>
</template>
<script>
import YlCell from "@/components/Cell";
import YlHeader from "@/components/_header";
import YlBadge from "@/components/Badge";
import YlFloat from "@/components/Float";
import CarFooter from "@/components/CarFooter";
import YlCoupons from "@/components/Coupons";
import AddReduce from "@/components/AddReduce";
import { MessageBox, Toast } from "mint-ui";
export default {
  components: { YlCell, YlHeader, YlBadge, YlFloat, CarFooter, YlCoupons, AddReduce, Toast },
  data() {
    return {
      pageActive: 1,
      ggPopup: false,
      couponsPopup: false,
      activePopup: false,
      freightPopup: false,
      img: "/images/shops/1.jpg",
      playList: [],
      coupons: [],
      num: 1
    };
  },
  methods: {
    gohome() {
      this.$router.push('/index')
    },
    add() {
      this.num++
    },
    reduce() {
      if (this.num > 1) this.num--
    },
    shopCar() {
      this.$router.push(`/car`)
    },
    addCar() {
      if (!this.$store.state.login) this.$router.push(`/login`)
      else {
        this.ggPopup = !this.ggPopup
        Toast('成功加入购物车')
      }
    },
    pay() {
      if (!this.$store.state.login) this.$router.push(`/login`)
      else this.$router.push(`/pay`)
    },
    customer() {
      MessageBox({
        title: "电话",
        message: "客服电话:4006666866",
        showCancelButton: true
      }).then(function(action) {
        if (action === "confirm") {
          location.href = "tel://4006666866";
        }
      });
    },
    showPopup(namePopup) {
      this[namePopup] = !this[namePopup];
    },
    pageClick(num) {
      this.pageActive = num;
    }
  },
  created() {
    this.$store.dispatch("getPlayList").then(res => {
      this.playList = res.data;
    });
    this.$store.dispatch("getCouponList").then(res => {
      this.coupons = res.data;
    });
  }
};
</script>

<style lang="stylus">
.panel-shop-detail {
  margin-bottom 1.2rem
  .panel {
    display: flex;
    flex-direction: column;
    padding: 0 0.2rem;

    .shop-detail {
      display: flex;

      img {
        width: 1.2rem;
        height: 1.2rem;
      }

      .describe {
        margin-left: 0.2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .price {
          color: #b4282e;
        }

        .text {
          color: #8c8c8c;
          font-size: 0.22rem;
        }
      }
    }

    .shop-num {
      margin-top: 0.3rem;

      .num-title {
        color: #676767;
      }
    }
  }

  .play-list {
    height: 3rem;

    img {
      height: 100%;
      width: 100%;
    }
  }

  .v-title {
    padding-top: 0.2rem;
    padding-left: 0.2rem;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: white;
  }

  .v-describe {
    padding-top: 0.2rem;
    padding-left: 0.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #999999;
    background-color: white;
  }

  .v-price {
    padding-top: 0.2rem;
    padding-left: 0.2rem;
    color: #be272d;
    background-color: white;
    margin-bottom: 0.2rem;
    padding-bottom: 0.2rem;
  }

  .icon-lable {
    background: #fee009;
    padding: 0.002rem 0.1rem;
    border-radius: 0.1rem;
    font-size: 0.24rem;
  }

  .yhq-name {
    display: inline-block;
    padding: 0.1rem 0.2rem;
    margin-right: 0.1rem;
    background-image: url('../assects/images/icon/spxq-yhq.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .shop-detail-title {
    border: 1px solid #999999;
    color: #666666;
    border-radius: 0.04rem;

    .active {
      color: #ffffff;
      background-color: #999999;
    }

    a {
      display: inline-block;
      width: 1rem;
      height: 0.4rem;
      text-align: center;
    }
  }
}
</style>
