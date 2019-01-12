<template>
  <div id="_footer" @click.stop='tabClick'>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item  :id="item.id" v-for="item in footerList" :key="item.id">
        <img v-if="selected == item.id" slot="icon" :src="item.selected">
        <img v-else slot="icon" :src="item.img">
        {{item.name}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabItem } from "mint-ui";
import Index from "../assects/images/footer/index.png";
import IndexC from "../assects/images/footer/index-c.png";
import Car from "../assects/images/footer/car.png";
import CarC from "../assects/images/footer/car-c.png";
import OrderList from "../assects/images/footer/orderlist.png";
import OrderListC from "../assects/images/footer/orderlist-c.png";
import Person from "../assects/images/footer/person.png";
import PersonC from "../assects/images/footer/person-c.png";

export default {
  name: "Footer",
  components: { Tabbar, TabItem },
  data() {
    return {
      selected: '',
      footerList: [
        { id: 'index', name: '首页', img: Index, selected: IndexC},
        { id: 'car', name: '购物车', img: Car, selected: CarC},
        { id: 'orderlist', name: '订单', img: OrderList, selected: OrderListC},
        { id: 'person', name: '我的', img: Person, selected: PersonC}
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
        value.img = value.img
        if (value.id == this.selected) value.img = value.selected
      })
    }
  },
  created() {
    this.selected = this.$route.path.split('/')[1] === '' ? 'index' : this.$route.path.split('/')[1]
    // this.defautIcon()
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
