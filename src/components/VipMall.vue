<template>
<div class="vipmall">
  <ul>
    <li v-for="item in list">
      <img :src="item.src" alt="">
      <div class="info">
        <p class="price">￥{{item.price}}</p>
        <span>筹码{{item.name}}:</span>
        <span>勇士{{item.warrior}}</span>
        <span>精英{{item.Elite}}</span>
        <span>大师{{item.Grandmaster}}</span>
        <span>宗师{{item.Shizong}}</span>
        <span>史诗{{item.epic}}</span>
        <span>传奇{{item.legend}}</span>
        <span>神话{{item.myth}}</span>
      </div>
      <button type="button" name="button">立即购买</button>
    </li>
  </ul>
</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
      vipmall: [{
        price: '80',
        warrior: '80',
        Elite: '80',
        Grandmaster: '80',
        Shizong: '80',
        epic: '80',
        legend: '80',
        myth: '80',
        src: '../../static/8.png',
        name: '8'
      }, {
        price: '200',
        warrior: '200',
        Elite: '200',
        Grandmaster: '196',
        Shizong: '192',
        epic: '188',
        legend: '184',
        myth: '180',
        src: '../../static/20.png',
        name: '20'
      }, {
        price: '1000',
        warrior: '1000',
        Elite: '1000',
        Grandmaster: '980',
        Shizong: '960',
        epic: '940',
        legend: '920',
        myth: '900',
        src: '../../static/100.png',
        name: '100'
      }, {
        price: '5000',
        warrior: '5000',
        Elite: '5000',
        Grandmaster: '4900',
        Shizong: '4800',
        epic: '4700',
        legend: '4600',
        myth: '4500',
        src: '../../static/500.png',
        name: '500'
      }, {
        price: '10000',
        warrior: '10000',
        Elite: '10000',
        Grandmaster: '9800',
        Shizong: '9600',
        epic: '9400',
        legend: '9200',
        myth: '9000',
        src: '../../static/1000.png',
        name: '1000'
      }, {
        price: '50000',
        warrior: '50000',
        Elite: '50000',
        Grandmaster: '49000',
        Shizong: '48000',
        epic: '47000',
        legend: '46000',
        myth: '45000',
        src: '../../static/5000.png',
        name: '5000'
      }, {
        price: '100000',
        warrior: '100000',
        Elite: '100000',
        Grandmaster: '98000',
        Shizong: '96000',
        epic: '94000',
        legend: '92000',
        myth: '90000',
        src: '../../static/10000.png',
        name: '10000'
      }, {
        price: '98000',
        warrior: '98000',
        Elite: '98000',
        Grandmaster: '96040',
        Shizong: '94080',
        epic: '92120',
        legend: '90160',
        myth: '88200',
        src: '../../static/x.png',
        name: 'Iphone X'
      }, {
        price: '76000',
        warrior: '76000',
        Elite: '76000',
        Grandmaster: '74480',
        Shizong: '72960',
        epic: '71440',
        legend: '69920',
        myth: '68400',
        src: '../../static/s9.png',
        name: '三星S9+'
      }, {
        price: '50000',
        warrior: '50000',
        Elite: '50000',
        Grandmaster: '49000',
        Shizong: '48000',
        epic: '47000',
        legend: '46000',
        myth: '45000',
        src: '../../static/mate10.png',
        name: '华为M10 Pro'
      }, {
        price: '350000',
        warrior: '350000',
        Elite: '350000',
        Grandmaster: '343000',
        Shizong: '336000',
        epic: '329000',
        legend: '322000',
        myth: '315000',
        src: '../../static/waixr.png',
        name: '外星人',
      }, {
        price: '180000',
        warrior: '180000',
        Elite: '180000',
        Grandmaster: '176400',
        Shizong: '172800',
        epic: '169200',
        legend: '165600',
        myth: '162000',
        src: '../../static/thinkpad.png',
        name: 'thinkpad X1'
      }, {
        price: '1980000',
        warrior: '1980000',
        Elite: '1980000',
        Grandmaster: '1940400',
        Shizong: '1900800',
        epic: '1861200',
        legend: '1821600',
        myth: '178200',
        src: '../../static/gold.png',
        name: '黄金按摩椅'
      }, {
        price: '1900000',
        warrior: '1900000',
        Elite: '1900000',
        Grandmaster: '1862000',
        Shizong: '1824000',
        epic: '1786000',
        legend: '1748000',
        myth: '1710000',
        src: '../../static/tral.png',
        name: '海岛旅游私人定制'
      }, ]
    }
  },
  methods: {

  },
  components: {},
}
</script>

<style lang="scss" scoped>
.vipmall {
    ul {
        li {
            width: 690px;
            height: 150px;
            margin: 0 auto;border-bottom: 1px solid #4e4a4a;
            img {
                padding: 2px;
                height: 80px;
                display: inline-block;
                float: left;    padding: 51px 0px 18px 35px;
            }
            .price {
                color: #f6d85a;
            }
            .info {
                width: 320px;
                height: 100px;
                display: inline-block;
                float: left;
                padding: 2px 80px 0 30px;
                span{
                  color: #ad9343;
                }
            }
            button {
                display: inline-block;
                float: left;
            }
        }
    }
}
</style>
