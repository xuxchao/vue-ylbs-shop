<template>
  <div class="panel-coupons">
    <yl-coupons
      v-for="item in coupons"
      :key="item.id"
      :price="item.price"
      :minPrice="item.minPrice"
      :name="item.name"
      :startTime="item.startTime"
      :endTime="item.endTime"
    ></yl-coupons>
  </div>
</template>
<script>
import YlCoupons from "@/components/Coupons";
export default {
  components: { YlCoupons },
  data() {
    return {
      coupons: []
    };
  },
  created() {
    this.$store.dispatch("getCouponList").then(res => {
      this.coupons = res.data;
    });
  }
};
</script>
<style lang="stylus">
.panel-coupons {
  padding: 0.2rem 0;
}
</style>
