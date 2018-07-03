
<template>
<div class="pay-layer">
  <div class="pay-layer-container">
    <form action=" http://v2.vz22.space/payment/pay " method="post" target="_blank">
      <input type="hidden">
      <input type="hidden">
      <input type="hidden">
      <div class="pay-layer-close  close" @click='closed'></div>
      <div class="layer-order-user-info">
        <img src="http://img.cksource.space/user_head/default_4_4.jpg">
        <div>
          <span class="info-username">guo555</span>
          <span>下单时间：2018-06-28 11:13:12</span>
        </div>
      </div>
      <div class="layer-package">
        <div class="layer-package-title">选择套餐：</div>
        <div class="layer-package-container clearfix">
          <ul>
            <li class="layer-package-content layer-type-0 layer-package-li-hover">
              <div class="layer-package-money">1个月<span>100.00</span>元</div>
              <p>特惠充值月度会员免费续赠3天</p>
              <div class="layer-package-tip">火爆3元/天</div>
            </li>
            <li class="layer-package-content layer-type-1">
              <div class="layer-package-money">3个月<span>200.00</span>元</div>
              <p>特惠充值季度会员免费续赠10天</p>
              <div class="layer-package-tip">火爆2元/天</div>
            </li>
            <li class="layer-package-content layer-type-2">
              <div class="layer-package-money">6个月<span>300.00</span>元</div>
              <p>特惠充值6个月会员免费续赠25天</p>
              <div class="layer-package-tip">火爆1元/天</div>
            </li>
            <li class="layer-package-content layer-type-3">
              <div class="layer-package-money">12个月<span>500.00</span>元</div>
              <p>特惠充值年费会员免费续赠60天</p>
              <div class="layer-package-tip">火爆1元/天</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="layer-pay-type">
        <div class="pay-type-weixin">
          <input type="radio" checked="">
          <label for="payment_1">
                <img width="120" height="35" src="http://img.cksource.space/pic/2017-11-17/2017-11-17-16-47-42_S2KRHgvs3j.png">
            </label>
        </div>
      </div>
      <a class="layer-pay-QRcode">立即支付</a>
      <div class="QRcode-table clearfix">
        <label class="QRcode-tip">若在线支付失败,可以加客服妹妹微信,获得兑换码  </label>
        <div class="QRcode-grid pull-left">
          <label for="payment_2">
                <img width="180" height="180" src="http://img.cksource.space/pic/2018-04-20/2018-04-20-01-03-51_ZKMMNncYmY.jpg">
            </label>
        </div>
        <div class="QRcode-grid pull-left">
          <label for="payment_3">
                <img width="180" height="180" src="http://img.cksource.space/pic/2018-06-11/2018-06-11-18-07-11_imL07SOQ8E.png">
            </label>
        </div>
      </div>
    </form>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
      list: [{}, ]
    }
  },
  methods: {
    closed(){
       Hub.$emit('change4',false);
    },
  },
  components: {}
}
</script>
<style lang="scss" scoped>
.pay-layer {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200011;
    overflow: auto;
    .pay-layer-container {
        max-width: 980px;
        height: auto;
        margin: 160px auto;
        background-color: #fff;
        padding: 50px 35px;
        position: relative;
        form {
            input {
                font-size: 12px;
                color: #333;
                -webkit-font-smoothing: antialiased;
            }
            .pay-layer-close {
                background-image: url("../../static/v2-pay-popup-box-close.png");
                width: 18px;
                height: 18px;
                position: absolute;
                top: 10px;
                right: 10px;
                cursor: pointer;
            }
            .layer-order-user-info {
                img {
                    width: 60px;
                    height: 60px;
                    border: 1px solid #ddd;
                    border-radius: 50%;
                    margin-right: 15px;
                }
                div {
                    color: #333;
                    font-size: 14px;
                    display: inline-block;
                    .info-username {}
                    span {
                        font-size: 20px;
                        margin-right: 60px;
                    }
                }
            }
            .layer-package {
                margin-top: 40px;
                .layer-package-title {
                    font-size: 16px;
                    color: #333;
                    margin-bottom: 15px;
                }
                .layer-package-container {
                    ul {
                        width: 930px;
                        li {
                            float: left;
                            position: relative;
                            width: 220px;
                            height: 120px;
                            border: 1px solid #e5e5e5;
                            text-align: center;
                            margin-right: 10px;
                            cursor: pointer;
                            .layer-package-money {
                                font-size: 20px;
                                color: #333;
                                margin-top: 22px;
                                span {}
                            }
                            p {
                                font-size: 14px;
                                color: #666;
                            }
                            .layer-package-tip {
                                position: absolute;
                                top: 0;
                                right: 0;
                                background-color: #ff7800;
                                color: #fff;
                                font-size: 12px;
                                padding: 0 5px;
                            }
                        }
                    }
                }
            }
            .layer-pay-type {
                font-size: 0;
                margin-top: 40px;
                .pay-type-weixin {
                    input {
                        margin-right: 15px;
                    }
                    label {
                        display: inline-block;
                        max-width: 100%;
                        margin-bottom: 5px;
                        img {}
                    }
                }
            }
            .layer-pay-QRcode {
                display: inline-block;
                width: 172px;
                height: 38px;
                line-height: 38px;
                color: #fff;
                background-color: #f07;
                border-radius: 2px;
                margin-top: 40px;
                text-align: center;
                font-size: 16px;
                cursor: pointer;
            }
            .QRcode-table {
                width: 100%;
                padding-top: 20px;
                label {
                    display: inline-block;
                    max-width: 100%;
                    margin-bottom: 5px;
                    font-size: 16px;
                    width: 100%;
                    text-align: left;
                    margin-top: 20px;
                    font-weight: 100;
                }
            }
            .QRcode-grid {
                margin: 10px;
                label {    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
                    img {}
                }
            }
        }
    }
}
</style>
