<template>
<div class="pay-bottom-package v-container">
  <div class="container">
    <div class="bottom-package-title">选择套餐</div>
    <div class="bottom-package-container clearfix">
      <ul>
        <li v-for='item in list' class="package-content" data-type-id="0">
          <div class="package-money"><span>{{item.month}}</span>{{item.spanmoney}}元</div>
          <p v-text="item.tex"></p>
          <div class=" please-login  package-login-join-btn" data-type-id="0" data-vip-type="21" @click='fastjoin'>立即加入</div>
          <div class="package-tip" v-text="item.daymoney"></div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
      logoState:false,
      list: [{
        month: '1个月',
        spanmoney: '100.00',
        tex: '特惠充值月度会员免费续赠3天',
        daymoney: '火爆3.03元/天'
      }, {
        month: '3个月',
        spanmoney: '200.00',
        tex: '特惠充值季度会员免费续赠10天',
        daymoney: '火爆3.03元/天'
      }, {
        month: '6个月',
        spanmoney: '300.00',
        tex: '特惠充值6个月会员免费续赠25天',
        daymoney: '火爆1.46元/天'
      }, {
        month: '12个月',
        spanmoney: '500.00',
        tex: '特惠充值年费会员免费续赠60天',
        daymoney: '火爆1.18元/天'
      }]
    }
  },
  methods: {
    fastjoin(){
      if(this.logoState){
        Hub.$emit('change1','true');
        this.Showlogin=true
      }else{
        Hub.$emit('change3','true');
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.pay-bottom-package {
    margin-bottom: 30px;
    .container {
        width: 1200px;
        margin: 0 auto;
        .bottom-package-title {
            width: 100%;
            font-size: 28px;
            color: #333;
            border-bottom: 1px solid #ccc;
            margin-bottom: 20px;
            height: 45px;
            line-height: 45px;
            padding-left: 20px;

        }
        .bottom-package-container {
                width: 100%;
                ul {
                    width: 101.7%;
                    width: calc(100% + 20px);
                    li {
                        float: left;
                        background-color: #fff;
                        position: relative;
                        width: 22%;
                        height: 198px;
                        border: 1px solid #fff;
                        text-align: center;
                        margin-right: 1.4%;
                        font-family: 微软雅黑;
                        .package-money {
                            font-size: 20px;
                            color: #333;
                            margin-top: 45px;
                            span {
                                font-size: 30px;
                                color: #f07;
                                padding: 0 5px;
                            }
                        }
                        p {
                            font-size: 14px;
                            color: #666;
                        }
                        .package-login-join-btn {
                            font-size: 16px;
                            width: 200px;
                            height: 38px;
                            line-height: 38px;
                            cursor: pointer;
                            color: #fff;
                            border-radius: 2px;
                            text-align: center;
                            background-color: #f07;
                            margin: 12px auto;
                        }
                        .package-tip {
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
}
</style>
