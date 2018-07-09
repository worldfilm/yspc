<template>
<div class="OperationHelp">
  <div class="top">
    <p v-for='item in list'>{{item.tex}}</p>
  </div>
  <div class="bottom">
    <p class="title">如何推广</p>
    <div class="content">
      <p v-for="item in list2" class="tex-p">{{item.tex}}</p>
      <div class="left">
        <p class="tit">推广文案：</p>
        <div class="info">
          <p>亚盛国际——注册免费送彩金，亚盛有最流量MG游戏和PT游戏，优惠特别给力下分几分钟！这是注册网址 https://ya3.com/Index/index</p>
        </div>
      </div>
      <div class="right">
        <p>图片素材：</p>
        <img src="../../static/tg_tu.png" alt="">
        <p class="saveimg">↑↑长按图片保存↑↑</p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
      list: [{
        tex: '怎么通过推广赚钱?'
      }, {
        tex: '推广奖金如何计算和发放？'
      }, {
        tex: '推广过程中应规避哪些问题？'
      }, ],
      list2: [{
        tex: '1。最简单方式：QQ签名和微信签名改亚盛国际（包含您的推广链接了）。'
      }, {
        tex: '2。每天到您常去的论坛或者QQ群，微信群发信息，介绍亚盛国际，用您的体验告诉更多的人来亚盛国际。'
      }]
    }
  },
  methods: {

  },
  components: {},
}
</script>

<style lang="scss" scoped>
.OperationHelp {
    background: url("../../static/tg.png") repeat-y;
    background-size: 100%;
    .top {
        width: 800px;
        margin: 40px auto 0;
        p {
            background: #695b39;
            height: 40px;
            line-height: 40px;
            padding-left: 20px;
            margin-bottom: 3px;
        }
    }
    .bottom {
        width: 800px;
        margin: 40px auto 0;
        .title {
            background: #695b39;
            height: 40px;
            line-height: 40px;
            text-align: center;
        }
        .content {
            width: 800px;
            height: 660px;
            padding: 30px;
            .tex-p {
                font-size: 14px;
                height: 20px;
                line-height: 20px;
            }
            .left {
                width: 360px;
                height: 450px;
                overflow: hidden;
                float: left;
                padding-top: 220px;
                .tit {
                    padding: 10px;
                }
                .info {
                    width: 358px;
                    height: 190px;
                    border: 1px solid #fff;
                    p {
                        padding: 20px;
                    }
                }
            }
            .right {
                float: right;
                width: 300px;
                overflow: hidden;
                padding-top: 220px;
                height: 400px;
                p {
                    padding: 10px;
                }
                img {
                    width: 250px;
                    height: 250px;
                }
                .saveimg{
                  text-align: center;
                }
            }
        }
    }
}
</style>
