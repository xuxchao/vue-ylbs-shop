<template>
  <div class="yl-coupons card">
    <img src="../assects/images/icon/yhq.png" alt="卡片">
    <div class="yl-coupons-price"><span>￥</span>{{price}}</div>
    <div class="max-minus">满{{minPrice}}元可用</div>
    <div class="yl-coupons-name">{{name}}</div>
    <div class="yl-coupons-time">有效期至:{{startTime | formatDate('yyyy/MM/dd')}}-{{endTime | formatDate('yyyy/MM/dd')}}</div>
    <div class="description"><span>一龄博士魅力商品专享：限时购</span></div>
  </div>
</template>
<script>
export default {
  name: 'yl-coupons',
  props: {
    price: Number,
    minPrice: Number,
    name: String,
    startTime: String,
    endTime: String
  }
}
</script>

<style lang="stylus">
 .card {
    width: 100%;
    position: relative;
    text-align: center;
    color: white;
    margin-bottom: 0.3rem;
}

 .card img {
    width: 81%;
}

 .card .yilingqu {
    width: 9%;
    position: absolute;
    top: 8%;
    right: 16%;
}

 .card .yl-coupons-price {
    position: absolute;
    top: 12%;
    left: 13%;
    font-size: 0.5rem;
}

 .card .yl-coupons-price span {
    font-size: 0.25rem;
}

 .card .max-minus {
    position: absolute;
    top: 49%;
    left: 13%;
    font-size: 0.2rem;
}

 .card .yl-coupons-name {
    position: absolute;
    top: 20%;
    left: 42%;
    width: 47%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.3rem;
    color: #ffffff;
}

 .card .yl-coupons-time {
    position: absolute;
    top: 44%;
    left: 42%;
    font-size: 0.2rem;
}

 .card .description {
    position: absolute;
    bottom: 8%;
    left: 13%;
    width: 70%;
    text-align: left;
    font-size: 0.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

 .card .phone input {
    margin-left: 20px;
    width: 70%;
}

 .card .code input {
    margin-left: 20px;
    width: 40%;
}
</style>


