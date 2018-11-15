<template>
  <span class="yl-badge">
    <slot>
      {{text}}
    </slot>
  </span>
</template>
<script>
export default {
  name: "yl-badge",
  props: {
    text: String
  }
};
</script>

<style lang="stylus">
.yl-badge {
  background: #fee009;
  padding: 0.002rem 0.1rem;
  border-radius: 0.1rem;
  font-size: 0.24rem;
}
</style>

