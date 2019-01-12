<template>
  <div class="panel-person">
    <div class="person-info">
      <img src="/images/photo/MrXu.jpg" alt>
      <span class="name">MrXu</span>
    </div>
    <mt-cell @click="toCoupons" title="卡券包" icon="more" value="带 icon"></mt-cell>
    <mt-cell title="收藏地址" icon="more" value="带 icon"></mt-cell>
    <mt-cell title="投诉建议" icon="more" value="带 icon"></mt-cell>
    <mt-cell title="更多内容敬请期待" icon="more" value="带 icon"></mt-cell>
    <div class="describe">有兴趣的朋友可以一起加QQ群讨论:954917384</div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/_footer";
import { Cell } from "mint-ui";
export default {
  components: { Cell, Footer },
  methods: {
    toCoupons() {
      this.$router.push(`coupons`);
    }
  }
};
</script>

<style lang="stylus">
.panel-person {
  .person-info {
    height: 1.8rem;
    display: flex;
    align-items: center;
    background: url('../assects/images/decorate/wd-beijing.png');
    padding: 0.4rem;

    img {
      margin-right: 0.2rem;
      height: 1.6rem;
      border-radius: 50%;
    }

    .name {
      color: white;
    }
  }

  .describe {
    margin-top: 0.4rem;
    background: white;
    padding: 10%;
    text-align: center;
  }
}
</style>

