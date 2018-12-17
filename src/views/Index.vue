<template>
  <div id="index">
    <router-view v-transition></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/_footer";
export default {
  components: { Footer },
  data() {
    return {
      transitionName: "slide-left",
      effect: "fade"
    };
  },
  watch: {}
};
</script>
