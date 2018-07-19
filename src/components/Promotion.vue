<template>
  <div class="Promotion-content">
  <div class="top-content">
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="name" label="日期"></el-table-column>
      <el-table-column prop="upgrad1" label="姓名"></el-table-column>
      <el-table-column prop="upgrad2" label="地址"></el-table-column>
      <el-table-column prop="upgrad3" label="地址"></el-table-column>
      <el-table-column prop="upgrad4" label="地址"></el-table-column>
    </el-table>
  </div>
  <div class="main-content">
    <el-table :data="viplist" border style="width: 100%">
      <el-table-column prop="name" label="日期"></el-table-column>
      <el-table-column prop="upgrad1" label="姓名"></el-table-column>
      <el-table-column prop="upgrad2" label="地址"></el-table-column>
      <el-table-column prop="upgrad3" label="地址"></el-table-column>
      <el-table-column prop="upgrad4" label="地址"></el-table-column>
      <el-table-column prop="upgrad5" label="地址"></el-table-column>
      <el-table-column prop="upgrad6" label="地址"></el-table-column>
      <el-table-column prop="upgrad7" label="地址"></el-table-column>
    </el-table>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
      list: [{
        name: '勇士',
        upgrad1: '注册玩家自动获取',
        upgrad2: '',
        upgrad3: '无',
        upgrad4: '无'
      },{
        name: '精英',
        upgrad1: '10',
        upgrad2: '完成个人信息',
        upgrad3: '无',
        upgrad4: '无'
      },{
        name: '大师',
        upgrad1: '30000',
        upgrad2: '1800',
        upgrad3: '24000',
        upgrad4: '1400'
      },{
        name: '宗师',
        upgrad1: '100000',
        upgrad2: '6000',
        upgrad3: '80000',
        upgrad4: '4800'
      },{
        name: '史诗',
        upgrad1: '5000000',
        upgrad2: '30000',
        upgrad3: '400000',
        upgrad4: '24000'
      },{
        name: '传奇',
        upgrad1: '1000000',
        upgrad2: '60000',
        upgrad3: '800000',
        upgrad4: '48000'
      },{
        name: '神话',
        upgrad1: '特邀玩家尊享',
        upgrad2: '',
        upgrad3: '无',
        upgrad4: '无'
      } ],
      viplist:[{
        name: '每月首存红利',
        upgrad1: '-',
        upgrad2: '-',
        upgrad3: '588',
        upgrad4: '688',
        upgrad5: '888',
        upgrad6: '1288',
        upgrad7: '38888',
      },{
        name: '升级红包',
        upgrad1: '-',
        upgrad2: '-',
        upgrad3: '118',
        upgrad4: '288',
        upgrad5: '588',
        upgrad6: '1888',
        upgrad7: '18888',
      },{
        name: '每周免费筹码',
        upgrad1: '-',
        upgrad2: '-',
        upgrad3: '88',
        upgrad4: '118',
        upgrad5: '288',
        upgrad6: '588',
        upgrad7: '1888',
      },{
        name: 'VIP专属客服',
        upgrad1: '-',
        upgrad2: '-',
        upgrad3: 'V',
        upgrad4: 'V',
        upgrad5: 'V',
        upgrad6: 'V',
        upgrad7: 'V',
      },{
        name: '新游戏优先体验',
        upgrad1: '-',
        upgrad2: '-',
        upgrad3: 'V',
        upgrad4: 'V',
        upgrad5: 'V',
        upgrad6: 'V',
        upgrad7: 'V',
      },{
        name: '提款专属通道',
        upgrad1: '-',
        upgrad2: '-',
        upgrad3: '-',
        upgrad4: 'V',
        upgrad5: 'V',
        upgrad6: 'V',
        upgrad7: 'V',
      },{
        name: '存款专属通道',
        upgrad1: '-',
        upgrad2: '-',
        upgrad3: '-',
        upgrad4: 'V',
        upgrad5: 'V',
        upgrad6: 'V',
        upgrad7: 'V',
      },{
        name: '线下活动邀请',
        upgrad1: '-',
        upgrad2: '-',
        upgrad3: '-',
        upgrad4: '-',
        upgrad5: 'V',
        upgrad6: 'V',
        upgrad7: 'V',
      },{
        name: 'VIP客服经理',
        upgrad1: '-',
        upgrad2: '-',
        upgrad3: '-',
        upgrad4: '-',
        upgrad5: '-',
        upgrad6: 'V',
        upgrad7: 'V',
      },{
        name: '老虎机返水',
        upgrad1: '0.4%',
        upgrad2: '0.6%',
        upgrad3: '0.8%',
        upgrad4: '0.8%',
        upgrad5: '0.8%',
        upgrad6: '1%',
        upgrad7: '1.2%',
      },{
        name: '真人视讯返水',
        upgrad1: '0.4%',
        upgrad2: '0.6%',
        upgrad3: '0.6%',
        upgrad4: '0.65%',
        upgrad5: '0.7%',
        upgrad6: '0.8%',
        upgrad7: '1%',
      },{
        name: '体育返水',
        upgrad1: '0.4%',
        upgrad2: '0.4%',
        upgrad3: '0.6%',
        upgrad4: '0.6%',
        upgrad5: '0.6%',
        upgrad6: '0.7%',
        upgrad7: '0.8%',
      },{
        name: '彩票返水',
        upgrad1: '0.4%',
        upgrad2: '0.6%',
        upgrad3: '0.6%',
        upgrad4: '0.65%',
        upgrad5: '0.7%',
        upgrad6: '0.8%',
        upgrad7: '1%',
      },{
        name: '会员商城折扣',
        upgrad1: '100%',
        upgrad2: '100%',
        upgrad3: '98%',
        upgrad4: '96%',
        upgrad5: '94%',
        upgrad6: '92%',
        upgrad7: '90%',
      },{
        name: '每日提款上限',
        upgrad1: '1万',
        upgrad2: '8万',
        upgrad3: '19万',
        upgrad4: '19万',
        upgrad5: '30万',
        upgrad6: '70万',
        upgrad7: '无上限',
      },]
    }
  },
  methods: {
    left() {
      Hub.$emit('active', false);
    },
  },
  components: {},
}
</script>

<style lang="scss" scoped>
.vip-content {
    .top-content {
        height: 325px;
        background: #4a494a;
    }
    .main-content {
        }
}
</style>
-conter">
  <ul>
    <li class="li1"><img src="../../static/backmoney.png" alt=""> </li>
    <li class="li2"><img src="../../static/getmoney.png" alt=""></li>
    <li class="li3"><img src="../../static/uptovip.png" alt=""></li>
  </ul>

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
    left() {
      Hub.$emit('active', false);
    },
  },
  components: {},
}
</script>

<style lang="scss" >
.Promotion-conter {
    height: 660px;
    ul {
        li {
            width: 825px;
            height: 105px;
            display: block;
            margin-bottom: 10px;
        }
        .li1 {
            background: url(../../static/bg1.png)no-repeat;
            img {
                position: relative;
                top: 42px;
                left: 327px;
            }
        }
        .li2 {
            background: url(../../static/bg2.png)no-repeat;
            img {
                position: relative;
                top: 42px;
                left: 315px;
            }
        }
        .li3 {
            background: url(../../static/bg3.png)no-repeat;
            img {
                position: relative;
                top: 42px;
                left: 293px;
            }
        }
    }
}
</style>
