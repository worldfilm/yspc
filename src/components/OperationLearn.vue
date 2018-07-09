<template>
  <div class="OperationLearn-content">
    <div class="left">
      <p class="left-top">累计奖金<span>0</span>元</p>
      <p class="let">已发放<span>0</span>元</p>
      <p class="let">已发放<span>0</span>元</p>
    </div>
    <div class="right">
      <p class="left-top">累计奖金<span>0</span>元</p>
      <p class="let">激活<span>0</span></p>
      <p class="let">充值<span>0</span></p>
      <p class="let">优秀<span>0</span></p>
      <p class="let">优异<span>0</span></p>
      <p class="let">卓越<span>0</span></p>
    </div>
    <div class="middle">
      <p class="middle-p">我的推广链接：</p>
      <p><input type="text" name="" value=""><button type="button" name="button">一键复制</button> </p>
    </div>
    <div class="bottom">
      <div class="qrcode">
        <img :src="qrsrc" alt="">
        <p class="">↑↑您的专属推广二维码↑↑</p>
      </div>
      <div class="info">
        <p>奖励机制：</p>
        <p>激活：1元（通过邀请链接注册账号并游戏）</p>
        <p>充值：10元（被推荐人已充值）</p>
        <p>优秀：88元（被推荐人累计充值超过500元）</p>
        <p>优异：120元</p>
      </div>
    </div>
  </div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
      qrsrc:'../../static/qr.png',
      list: [{
        },
      ]
    }
  },
  methods: {

  },
  components: {},
}
</script>

<style lang="scss" scoped>
.OperationLearn-content {
    width: 830px;
    height: 680px;
    background: url("../../static/tg.png") no-repeat;
    padding-top: 47px;
    background-size: 100%;
    .left {
        width: 280px;
        height: 120px;
        float: left;
        text-align: center;
        margin-left: 13px;
        .left-top {
            height: 40px;
            line-height: 40px;
            background: #695b39;
        }
        .let {
            width: 47px;
            float: left;
            padding: 20px 46px;
            box-shadow: 2px 2px 4px #2f2727;
        }
    }
    .right {
        width: 500px;
        height: 120px;
        float: right;
        text-align: center;
        margin-right: 13px;
        .left-top {
            height: 40px;
            line-height: 40px;
            background: #695b39;
        }
        .let {
            width: 28px;
            float: left;
            padding: 20px 36px;
            box-shadow: 2px 2px 4px #2f2727;
        }
    }
    .middle {
        width: 800px;
        height: 220px;
        float: left;
        color: #c0c0c0;
        p {
            height: 60px;
            line-height: 60px;
            padding-left: 30px;
            input {
                color: #c0c0c0;
                width: 470px;
                height: 35px;
                background: none;
                border: 1px solid #5e5f5e;padding-left: 10px;
            }
            button {
                width: 160px;
                height: 35px;
                border: none;
                outline: none;
                background: linear-gradient(to top, #efbd4a, #f2ca51, #f6da5c);
            }
        }
        .middle-p {
            padding-top: 50px;
        }
    }
    .bottom {
        width: 800px;
        height: 230px;
        float: left;
        .qrcode {
            width: 180px;
            height: 210px;
            float: left;
            padding:12px 97px ;
            text-align: center;
            img{
              width: 180px;
              height: 180px;
            }
            p{
              height: 40px;
              line-height: 40px;
            }
        }
        .info {
            width: 320px;
            height: 220px;
            float: right;
            p:first-child{
                padding-top:110px;
            }
            p{
              height: 25px;
              line-height: 25px;
            }
        }
    }
}
</style>
