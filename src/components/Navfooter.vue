<!--底部导航-->
<template>
<div class="footer">
  <div class="container">
    <ul>
      <li v-for='item in list'>
        <img :src="item.src" alt="">
      </li>
    </ul>
    <div class="">
      <p>亚盛国际│ya3.com│所有线上娱乐整合平台拥有菲律宾 PAGCOR 专业博彩执照，提供您安全信誉之博彩环境 </p>
      <p>Copyright 2011-2017 亚盛国际 All Rights Reserved.</p>
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
    background: #989797;
    text-align: center;
    height: 335px;
    .container {
        width: 1200px;
        margin: 0 auto;
        padding-top: 30px;
        ul {
            border-bottom: 1px solid #fff;
            border-top: 1px solid #fff;
            padding-top: 20px;
            li {
                height: 65px;
                line-height: 65px;
                margin-right: 50px;
                display: inline-block;
                img {
                    height: 28px;
                }
            }
        }
        div {
          p{
            padding-top: 40px;
          }
        }

    }
}
</style>
