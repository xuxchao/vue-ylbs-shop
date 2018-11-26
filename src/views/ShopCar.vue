<template>
<div class='shop-car'>
  <mt-cell-swipe
  :right="[
    {
      content: 'Delete',
      style: { background: 'red', color: '#fff' },
      handler: () => this.$messagebox('delete')
    }
  ]">
    <div class="item" slot="title">
      <div class="radio-checkbox-panel">
        <span class="radio-checkbox-img"></span>
      </div>
      <div class="left"><img src="" alt="商品图片"></div>
      <div class="middle">
        <div class="title">一龄酸乳粉</div>
        <div class="price">￥880.00</div>
      </div>
      <div class="right">
        <div class="group">
          <span>-</span>
          <input type="number" value="0">
          <span>+</span>
        </div>
      </div>
    </div>
  </mt-cell-swipe>
</div>
</template>
<script>
export default {};
</script>
<style lang="stylus">
.shop-car {
  .mint-cell-wrapper {
    .item {
      display: flex;
      align-items center
      padding .2rem
      .radio-checkbox-panel {

        .radio-checkbox-img {
          background: url('../assets/images/icon/xz@2x.png') no-repeat;
          background-position: 0 0rem;
          background-size: cover;
          width: 0.34rem;
          height: 0.34rem;
          display: inline-block;
          margin-right: 0.05rem;
        }
      }

      .left {
        margin 0 .2rem
        img {
          display: block;
          width: 1.4rem;
          height: 1.4rem;
          background: red;
        }
      }

      .middle {
        width: 1.4rem;
        height: 1.4rem;
        display flex
        flex 1
        flex-direction column
        justify-content space-between
      }

      .right {
        width: 1.4rem;
        height: 1.4rem;
        display flex
        align-items flex-end
        .group {
          border 1px solid #ddd
          border-radius .04rem
          display flex

          span {
            &:first-child {
              border-right 1px solid #ddd
            }
            &:last-child {
              border-left 1px solid #ddd
            }
          }

          input, span {
            width .4rem
            text-align center
          }
        }
      }
    }
  }
}
</style>
