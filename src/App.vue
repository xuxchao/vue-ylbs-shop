<template>
  <div id="app">
    <!-- <transition :name="transitionName">
        <router-view class="child-view"></router-view>
    </transition> -->
    <router-view v-transition></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transitionName: "slide-left",
      effect: "fade"
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  }
};
</script>

<style lang="stylus">
.animated {
    height: 100vh;
    background: #f8f8f8;
}

/* 初始化设置 */
* {
    margin: 0;
    padding: 0;
    font-size: 0.28rem;
    font-family: 'microsoft yahei', '微软雅黑', Verdana, Arial, Helvetica, sans-serif;
}

.font_bold {
    font-family: bold;
}

.font_extralight {
    font-family: extralight;
}

.font_heavy {
    font-family: heavy;
}

.font_light {
    font-family: light;
}

.font_medium {
    font-family: medium;
}

ul li {
    list-style: none;
}

a {
    outline: none;
    color: inherit;
}

a:link {
    text-decoration: none;
    color: inherit;
}

a:visited {
    text-decoration: none;
    color: inherit;
}

a:hover {
    text-decoration: none;
    color: inherit;
}

a:active {
    /* star: expression(this.onFocus=this.blur()); */
    text-decoration: none;
    color: inherit;
}

a:focus {
    outline: 0;
    color: inherit;
    text-decoration: none;
}

input, textarea {
    outline-style: none;
    outline-width: 0px;
    border: none;
    border-style: none;
    text-shadow: none;
    -webkit-appearance: none;
    -webkit-user-select: text;
    outline-color: transparent;
    box-shadow: none;
}

/* Mint UI 样式修改 */
/* 轮播图 */
.mint-swipe-indicator.is-active {
    background: #fee009;
}

.mint-swipe-indicator {
    background: #FFFFFF;
    width: 0.13rem;
    height: 0.13rem;
    opacity: 1;
}

/* toast 浮层 */
.mint-toast-text {
    font-size: 0.28rem;
}

/* messagebox弹窗 */
.mint-msgbox-title {
    font-size: 0.28rem !important;
}

.mint-msgbox-message {
    font-size: 0.3rem !important;
    line-height: 0.75rem !important;
}

.mint-msgbox-btns {
    height: 0.75rem !important;
    line-height: 0.75rem !important;
}

.mint-msgbox-confirm {
    color: #ffc107 !important;
}

.mint-msgbox-confirm:active {
    color: #ffc107 !important;
}

/* loading弹窗 */
.mint-spinner-snake {
    height: 0.6rem !important;
    width: 0.6rem !important;
}

/* 底部footer */
.mint-tab-item-icon {
    width: 0.54rem !important;
    height: 0.54rem !important;
}

.mint-tab-item-label {
    font-size: 0.2rem !important;
}

.mint-tabbar > .mint-tab-item.is-selected {
    color: black !important;
}

/* button */
.mint-button--normal {
    padding: 0 0.24rem !important;
}

.mint-button {
    height: 0.61rem !important;
    font-size: 0.18rem !important;
}
.mint-button--yellow {
    background #fee009 !important
    color black !important
}
</style>
