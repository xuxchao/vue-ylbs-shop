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
  data() {
    return {
      selected: '',
      footerList: [
        { id: 'index', name: '首页', img: 'images/footer/index.png'},
        { id: 'car', name: '购物车', img: 'images/footer/car.png'},
        { id: 'orderlist', name: '订单', img: 'images/footer/orderlist.png'},
        { id: 'person', name: '我的', img: 'images/footer/person.png'}
      ]
    }
  },
  methods: {
    tabClick() {
      this.defautIcon()
      this.$router.push({path: `/${this.selected}`})
    },
    defautIcon() {
      this.footerList.map( (value) => {
        value.img = `images/footer/${value.id}.png` 
        if (value.id == this.selected) value.img = `images/footer/${this.selected}-c.png` 
      })
    }
  },
  created() {
    this.selected = this.$route.path.split('/')[1] === '' ? 'index' : this.$route.path.split('/')[1]
    this.defautIcon()
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
