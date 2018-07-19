<template>
<div class="OperationDetail-content">
  <p>我的推广明细</p>
  <ul>
    <li><span>用户名</span><span>注册日期</span><span>激活</span><span>充值</span><span>奖励</span></li>
    <li v-for="item in list"><span>{{item.username}}</span><span>{{item.day}}</span><span>{{item.status}}</span><span>{{item.blance}}</span><span>{{item.bronus}}</span></li>
    <li><span class="nodata">暂无数据</span></li>
  </ul>
</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
      qrsrc: '/public/yspc/img/qr.png',
      list: [{
        username: 'xxxx',
        day: '2018/05/22',
        status: '已激活',
        blance: '9999.00',
        bronus: '999.00'
      }, {
        username: 'xxxx',
        day: '2018/05/22',
        status: '已激活',
        blance: '9999.00',
        bronus: '999.00'
      }, {
        username: 'xxxx',
        day: '2018/05/22',
        status: '已激活',
        blance: '9999.00',
        bronus: '999.00'
      }, {
        username: 'xxxx',
        day: '2018/05/22',
        status: '已激活',
        blance: '9999.00',
        bronus: '999.00'
      }, {
        username: 'xxxx',
        day: '2018/05/22',
        status: '已激活',
        blance: '9999.00',
        bronus: '999.00'
      }, {
        username: 'xxxx',
        day: '2018/05/22',
        status: '已激活',
        blance: '9999.00',
        bronus: '999.00'
      }, {
        username: 'xxxx',
        day: '2018/05/22',
        status: '已激活',
        blance: '9999.00',
        bronus: '999.00'
      }, ]
    }
  },
  methods: {

  },
  components: {},
}
</script>

<style lang="scss" scoped>
.OperationDetail-content {
    width: 830px;
    background: url("/public/yspc/img/tg.png")repeat-Y;
    padding-top: 47px;
    background-size: 100%;
    text-align: center;
    p {
        background: #695b39;
        height: 40px;
        line-height: 40px;
    }
    ul {
        li {

            span {
                width: 19.7%;
                display: inline-block;
                height: 40px;
                line-height: 40px;
                border-bottom: 1px solid #333233;
                border-top: 1px solid #534e43;
                border-left: 1px solid #3b3c3c;
                border-right: 1px solid #3b3a3a;
            }
            .nodata {
                width: 100%;
                margin-bottom: 100px;
            }
        }
    }

}
</style>
