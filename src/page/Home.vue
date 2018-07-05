<template>
<div class="home">

  <ul class="nav">
    <li>热门游戏</li>
    <li>PT</li>
    <li>MG</li>
    <li>PNG</li>
    <li>SW</li>
    <li>BS</li>
    <li>QT</li>
    <li>MW</li>
    <li>BBIN</li>
    <input type="text" name="" value="" placeholder="过滤">
  </ul>
  <Carousel/>
  <marquee/>
  <ul>
    <li v-for="item in list">
      <img :src="item.src" alt="">
    </li>
  </ul>
</div>
</template>

<script>
import Hub from '@/components/Hub';
import Carousel from '@/components/Carousel';
import GameList from '@/components/GameList';
import marquee from '@/components/marquee';
export default {
  data() {
    return {
      list: [{
          src: '../../static/yx1.png',
          name: '',
        }, {
          src: '../../static/yx2.png',
          name: '',
        }, {
          src: '../../static/yx3.png',
          name: '',
        }, {
          src: '../../static/yx4.png',
          name: '',
        }, {
          src: '../../static/yx5.png',
          name: '',
        }, {
          src: '../../static/yx6.png',
          name: '',
        }, {
          src: '../../static/yx7.png',
          name: '',
        }, {
          src: '../../static/yx8.png',
          name: '',
        }, {
          src: '../../static/yx9.png',
          name: '',
        }, {
          src: '../../static/yx10.png',
          name: '',
        }, {
          src: '../../static/yx11.png',
          name: '',
        }, {
          src: '../../static/yx12.png',
          name: '',
        }, {
          src: '../../static/yx13.png',
          name: '',
        }, {
          src: '../../static/yx14.png',
          name: '',
        }, {
          src: '../../static/yx15.png',
          name: '',
        }, {
          src: '../../static/yx16.png',
          name: '',
        }, {
          src: '../../static/yx17.png',
          name: '',
        }, {
          src: '../../static/yx18.png',
          name: '',
        }, {
          src: '../../static/yx19.png',
          name: '',
        }, {
          src: '../../static/yx20.png',
          name: '',
        }, {
          src: '../../static/yx21.png',
          name: '',
        }, {
          src: '../../static/yx22.png',
          name: '',
        }, {
          src: '../../static/yx23.png',
          name: '',
        }, {
          src: '../../static/yx24.png',
          name: '',
        }, {
          src: '../../static/yx25.png',
          name: '',
        }, {
          src: '../../static/yx26.png',
          name: '',
        }, {
          src: '../../static/yx27.png',
          name: '',
        }, {
          src: '../../static/yx28.png',
          name: '',
        }, {
          src: '../../static/yx29.png',
          name: '',
        }, {
          src: '../../static/yx30.png',
          name: '',
        }, {
          src: '../../static/yx31.png',
          name: '',
        }, {
          src: '../../static/yx32.png',
          name: '',
        },

      ]
    }
  },
  components: {
    Carousel,
    GameList,
    marquee
  }
}
</script>

<style lang="scss" >
.home {
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
    ul {
        font-size: 0;
        li {
            list-style: none;
            display: inline-block;
            padding: 5px;
            color: #949494;
            img {
                width: 250px;
                height: 174px;
            }
        }
    }
    .nav {
        font-size: 14px;
        color: #fff;
        height: 50px;
        line-height: 50px;
        border-top: 1px solid #595959;
        border-bottom: 1px solid #595959;
        width: 1024px;
        overflow: hidden;
        margin: 0 auto 10px;
        li {
            float: left;
            padding: 0 5px;
        }
        input {
            float: right;
            background: none;
            border: none;
            line-height: 50px;
            color: #949494;
            width: 66px;
            background: url("../../static/search.png") no-repeat 37px 14px;
        }
    }
}
</style>
