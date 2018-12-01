<template>
  <div id="_footer" @click.stop='tabClick'>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item  :id="item.id" v-for="item in footerList" :key="item.id">
        <img slot="icon" :src="item.img">
        {{item.name}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabItem } from "mint-ui";
export default {
  name: "Footer",
  components: { Tabbar, TabItem },
  props: {
    idd: String
  },
  data() {
    return {
      selected: this.idd,
      footerList: [
        { id: '', name: '首页', img: 'images/footer/index.png'},
        { id: 'car', name: '购物车', img: 'images/footer/car.png'},
        { id: 'dingdan', name: '订单', img: 'images/footer/dingdan.png'},
        { id: 'person', name: '我的', img: 'images/footer/people.png'}
      ]
    }
  },
  methods: {
    tabClick() {
      this.$router.push({path: `/${this.selected}`})
    }
  },
  created() {
    this.footerList.map( (value) => {
      if (value.id == this.idd) value.img = `images/footer/${this.idd}-c.png` 
    })
  }
};
</script>

<style>
.is-fixed {
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 1;
}
</style>
