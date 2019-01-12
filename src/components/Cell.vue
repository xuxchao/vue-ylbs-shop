<template>
  <a class="yl-cell" @click="handleClick">
    <div class="yl-cell-title">{{title}}</div>
    <div class="yl-cell-content">
      <slot name="content">
        {{content}}
      </slot>
    </div>
    <div class="yl-cell-right">
      <slot name="right">
        {{right}}
      </slot>
    </div>
    <img class="icon" v-if="!icon" :src="iconUrl" alt="图标">
  </a>
</template>
<script>
import Icon from '../assects/images/icon/right-icon.png'
export default {
  name: 'yl-cell',
  props: {
    title: String,
    content: String,
    right:String,
    icon: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: null
    },
    iconUrl: {
      type: String,
      default: Icon
    }
  },
  methods: {
    handleClick(evt) {
      if (this.to) return this.$router.push(this.to);
      this.$emit('click', evt);
    }
  }
}
</script>

<style lang="stylus">
.yl-cell {
  display flex
  background white
  height .8rem
  align-items center
  padding 0 .2rem
  border-bottom 2px solid #f8f8f8

  &:last-child {
    border-bottom none 
  }
  .yl-cell-title {
    width 2rem
  }

  .yl-cell-content {
    flex 2
  }

  .yl-cell-right {
    margin-right .1rem
  }
  .icon {
      height .3rem
  }
}
</style>
