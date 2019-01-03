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
    }
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
</style>
