<template>
  <div class="yl-float">
    <yl-header>
      <div slot="title" @click="handleClick('closee')">{{title}}</div>
      <img slot="right" @click="handleClick('close')" src="../assects/images/icon/close.png" alt>
    </yl-header>
    <div class="yl-float-conetnt">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<style lang="stylus">
.yl-float {
  width: 100vw;
  
  ._header {
    border-bottom: 0.01rem solid rgba(153, 153, 153, 0.9);
    margin-bottom: 0.2rem;
  }

  .yl-float-conetnt {
    min-height: 3rem;
  }
}
</style>

<script>
import YlHeader from "./_header";
export default {
  name: "yl-float",
  components: { YlHeader },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: String
  },
  methods: {
    handleClick(eventName) {
      this.$emit(eventName);
    }
  }
};
</script>
