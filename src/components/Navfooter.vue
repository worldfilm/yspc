<!--底部导航-->
<template>
<div class="footer">
  <div class="container">
    <div class="nav">
      <ul class="nav-ul">
        <li><a href="#">查找更多关于亚盛国际的信息</a></li>
        <li><a href="#">安全</a></li>
        <li><a href="#">代理商入口>></a></li>
      </ul>
      <ul class="nav-ul2">
        <li><i></i>常见问题</li>
        <li><i></i>隐私权保护规则</li>
        <li><i></i>注册</li>
        <li><i></i>一般的优惠规则与条款</li>
        <li><i></i>注册规则与条款</li>
        <li><i></i>登录</li>
      </ul>
    </div>
    <ul>
      <li v-for='item in list'>
        <img :src="item.src" alt="">
      </li>
    </ul>
    <div class="">
      <p class="info-p">亚盛国际│ya3.com│所有线上娱乐整合平台拥有菲律宾 PAGCOR 专业博彩执照，提供您安全信誉之博彩环境合法登记执照 NO.12-OCGO-004。浏览者需遵守所在地相关法律，在任何情况下引致触犯所属地区之法律，浏览者需自行承担一切责任。 </p>
      <p>Copyright 2011-2017 亚盛国际 All Rights Reserved.</p>
    </div>
  </div>
  <div class="left">

  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
      list: [{
          src: '../../static/footerlogo_2.png'
        },
        {
          src: '../../static/footerlogo_3.png'
        },
        {
          src: '../../static/footerlogo_11.png'
        },
        {
          src: '../../static/footerlogo_5.png'
        },
        {
          src: '../../static/footerlogo_6.png'
        },
        {
          src: '../../static/footerlogo_7.png'
        },
        {
          src: '../../static/footerlogo_8.png'
        },
        {
          src: '../../static/footerlogo_9.png'
        },
        {
          src: '../../static/footerlogo_12.png'
        },
        {
          src: '../../static/footerlogo_10.png'
        },
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
.footer {
    text-align: center;
    height: 750px;
    .container {
        width: 1024px;
        margin: 0 auto;
        padding-top: 30px;
        color: #949494;
        .left {
            width: 80px;
            height: 530px;
            background: #fff;
        }
        .nav {
            .nav-ul {
                text-align: left;
                height: 65px;
                line-height: 65px;
                li {
                    height: 20px;
                    line-height: 20px;
                    border-bottom: 1px solid #949494;
                    margin-right: 9px;
                    padding-right: 20px;
                    width: 211px;
                    padding-bottom: 2px;
                }
                a {
                    color: #949494;
                }
            }
            .nav-ul2 {
                height: 80px;
                padding-top: 10px;
                text-align: left;
                padding-bottom: 50px;
                li {
                    width: 250px;
                    height: 20px;
                    line-height: 20px;
                    display: inline-block;
                    padding-left: 10px;
                    i {
                        height: 20px;
                        width: 15px;
                        right: 10px;
                        top: 4px;
                        position: relative;
                        display: inline-block;
                        background: url(../../static/tb.png)no-repeat 1px 3px;
                    }
                }

            }

        }
        ul {
            border-top: 1px solid #595959;
            border-bottom: 1px solid #595959;
            padding-top: 20px;
            li {
                height: 65px;
                line-height: 65px;
                margin-right: 50px;
                display: inline-block;
                img {
                    height: 19px;
                }
            }
        }
        div {
            .info-p {
                width: 840px;
                margin: 0 auto;
            }
            p {
                padding-top: 75px;
            }
        }

    }
}
</style>
