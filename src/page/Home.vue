<template>
<div class="home">

<Nav :navlist='navlist'/>
  <Swiper2/>
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
import Swiper2 from '@/components/Swiper2';
import GameList from '@/components/GameList';
import marquee from '@/components/marquee';
import Nav from '@/components/Nav';
export default {
  data() {
    return {
      navlist: [{
        name: '热门游戏',
      }, {
        name: 'PT',
      }, {
        name: 'MG',
      }, {
        name: 'PNG',
      },{
        name: 'SW',
      },{
        name: 'BS',
      },{
        name: 'QT',
      },{
        name: 'MW',
      },{
        name: 'BBIN',
      }, ],
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
    Swiper2,
    GameList,
    marquee,
    Nav
  }
}
</script>

<style lang="scss" >
.home {
    overflow: hidden;
    width: 1024px;
    margin: 0 auto;
    ul {
        font-size: 0;
        li {
            list-style: none;
            display: inline-block;
            padding: 5px;
            color: #949494;
            img {
                height: 170px;
            }
        }
    }

}
</style>
