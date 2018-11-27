<template>

<!-- 优惠券单元格 -->
<!-- <van-coupon-cell
  :coupons="coupons"
  :chosen-coupon="chosenCoupon"
  @click="showList = true"
/>


<van-popup v-model="showList" position="bottom">
  <van-coupon-list
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    :disabled-coupons="disabledCoupons"
    @change="onChange"
    @exchange="onExchange"
  />
</van-popup> -->

</template>
<script>
 // import Vue from 'vue';
  //import { CouponCell, CouponList } from 'vant';

//Vue.use(CouponCell).use(CouponList);
// const coupon = {
//   available: 1,
//   discount: 0,
//   denominations: 150,
//   originCondition: 0,
//   reason: '',
//   value: 150,
//   name: '优惠券名称',
//   startAt: 1489104000,
//   endAt: 1514592000
// };

// export default {
//   data() {
//     return {
//       chosenCoupon: -1,
//       coupons: [coupon],
//       disabledCoupons: [coupon]
//     }
//   },

//   methods: {
//     onChange(index) {
//       this.showList = false;
//       this.chosenCoupon = index;
//     },
//     onExchange(code) {
//       this.coupons.push(coupon);
//     }
//   }
//}
</script>
<style>

</style>
