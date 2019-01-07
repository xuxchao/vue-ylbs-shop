<template>
  <div class="home">
    <div class="page-wrap">
      <div class="play-list">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item in playList" :key="item.img">
            <img :src="item.img" alt="轮播图图片">
          </mt-swipe-item>
        </mt-swipe>
      </div>
    <div class="xsg-title">
      限时购<span>本期活动已结束</span>
      <a href="~/"></a>
    </div>
    <div class="xsg-shop">
      <div class="item-panel" v-for="item in shops" :key="item.id" @click="tapDetail(item)">
        <span>{{item.icon}}</span>
        <img :src="item.img" alt="商品">
        <div class="title">{{item.title}}</div>
        <div class="describe">{{item.describe}}</div>
        <div class="price">¥{{item.price}}</div>
      </div>
    </div>
    <div class="active">
      <div class="yqyl">
        <div>邀请有礼</div>
        <div>邀请好友有礼物</div>
        <img src="/images/icon/yaoqingyouli.png" alt="邀请有礼">
      </div>
      <div class="lqyh">
        <div>领券优惠</div>
        <div>领取神券有优惠</div>
        <img src="/images/icon/lingquanyouhui.png" alt="领券优惠">
      </div>
    </div>
    <div class="xsg-title">猜你喜欢</div>
    <div class="item-shop" v-for="item in shops" :key="item.id" @click="tapDetail(item)">
      <div class="item-panel">
        <span>{{item.icon}}</span>
        <img :src="item.img" alt="商品">
        <div class="title">{{item.title}}</div>
        <div class="describe">{{item.describe}}</div>
        <div class="price">¥{{item.price}}</div>
      </div>
    </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "mint-ui";
import Footer from "@/components/_footer";
export default {
  name: "home",
  components: { Swipe, SwipeItem, Footer },
  data() {
    return {
      vuegConfig:{
        forwardAnim: 'fadeIn', //前进动画，默认为fadeInRight
      },
      playList: [],
      shops: []
    };
  },
  methods: {
    tapDetail(item) {
      this.$router.push(`shopdetail/${item.id}`);
    }
  },
  created() {
    this.$store.dispatch("getShops").then(res => {
      this.shops = res.data;
    });
    this.$store.dispatch("getPlayList").then(res => {
      this.playList = res.data;
    });
  }
};
</script>
<style lang="stylus">
.home {
  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }

  .play-list {
    height: 3rem;

    img {
      height: 100%;
      width: 100%;
    }
  }

  .xsg-title {
    margin: 0.2rem 0;
    background: #ffffff;
    height: 1rem;
    width: 100%;
    text-align: center;
    font-size: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 0.3rem;
    }
  }

  .xsg-shop {
    margin-top: 0.2rem;
    padding: 0.2rem 0;
    background: #ffffff;
    display: flex;
    overflow-x: scroll;

    .item-panel {
      width: 2rem;

      img {
        height: 2rem;
        width: 2rem;
      }
    }
  }

  .item-panel {
    position: relative;
    margin-left: 0.2rem;

    span {
      position: absolute;
      top: 0.1rem;
      right: 0.2rem;
      background: #fee009;
      padding: 0.002rem 0.1rem;
      border-radius: 0.1rem;
      font-size: 0.24rem;
    }

    .title {
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .describe {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #999999;
    }

    .price {
      color: #be272d;
    }
  }

  .active {
    padding-top: 0.2rem;
    display: flex;
    text-align: center;
    justify-content: space-around;
    margin-top: 0.2rem;
    background: #ffffff;

    img {
      margin-top: 0.2rem;
      height: 1rem;
    }
  }

  .item-shop {
    float: left;
    width: 50%;
    box-sizing: border-box;
    padding-bottom: 4px;
    position: relative;

    .item-panel {
      overflow: hidden;
      margin: 0 0.1rem;

      img {
        width: 100%;
      }
    }
  }
}
</style>
