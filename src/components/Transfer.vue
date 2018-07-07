<template>
<div class="Transfer-conter">
  <div class="Transfer-top">
    <ul>
      <li v-for='(item,index) in list'>{{item.name}}:{{item.money}}</li>
    </ul>
  </div>
  <div class="Transfer-bottom">
    <div class="top">
      <p><span>从</span>
        <SelectOption :list='list' :tex='list[0].name'/><span>到</span>
        <SelectOption :list='list' :tex='list[3].name'/><span>惠</span>
        <SelectOption :list='list' :tex='list[6].name'/><span>金额</span>
        <input type="text" name="" value="">
      </p>
      <p class="button-content">
        <button type="button" class="surebtn">确认转账</button>
        <button type="button" class="surebtn">一键转回钱包</button>
      </p>
    </div>
    <div class="bottom">
      <p>温馨提醒：1、优惠红利只能全额转账，不可修改转账金额~ 2、中心钱包可参与存送优惠并同时转账到游戏平台~ 3、活动任务需流水达标才能转回中心钱包提款哦~</p>
    </div>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
import SelectOption from '@/components/SelectOption';
export default {
  data() {
    return {
      list: [{
        name: '中心钱包',
        money: '10000.00'
      }, {
        name: 'AG真人',
        money: '144.00'
      }, {
        name: 'AGQ极速',
        money: '144.00'
      }, {
        name: 'eBET真人',
        money: '144.00'
      }, {
        name: 'MG全平台',
        money: '144.00'
      }, {
        name: 'PT电子游艺',
        money: '144.00'
      }, {
        name: 'QT电子游艺',
        money: '144.00'
      }, {
        name: '沙巴体育',
        money: '144.00'
      }, {
        name: 'BBIN平台',
        money: '144.00'
      }, {
        name: 'PNG电子游艺',
        money: '144.00'
      }, {
        name: 'MW电子游艺',
        money: '144.00'
      }, {
        name: 'SW电子游艺',
        money: '144.00'
      }, {
        name: 'Betsoft',
        money: '144.00'
      }, ],

    }
  },
  methods: {

  },
  created() {
    Hub.$on('selectoption', (data) => {
      console.log(data)
      // console.log(data.target.value)
    });
  },
  components: {
    SelectOption
  },
}
</script>

<style lang="scss" scoped>
.Transfer-conter {
    .Transfer-top {
        ul {
            li {
                width: 180px;
                height: 50px;
                line-height: 50px;
                display: inline-block;
                border-bottom: 1px solid #616161;
                margin-right: 20px;
            }
        }
    }
    .Transfer-bottom {
        width: 820px;
        margin-top: 40px;
        height: 430px;
        .top {
            width: 820px;
            height: 270px;
            background: url("../../static/bg3.png") no-repeat 1px 1px;
            background-size: 100% 100%;
            p {
                width: 680px;
                position: relative;
                top: 60px;
                margin: 0 auto;
                z-index: 1;
                span {
                    padding: 0 7px;
                }
                input {
                    outline: none;
                    background: none;
                    border: none;
                    width: 100px;
                    border-bottom: 1px solid #616161;
                }
            }
            .button-content {
                z-index: 0;
                width: 330px;
                padding-top: 100px;
                .surebtn {
                    height: 40px;
                    width: 140px;
                    line-height: 40px;
                    background: linear-gradient(to top, #efbd4a, #f2ca51, #f6da5c);
                    font-size: 20px;
                    border-radius: 2px;
                    color: #6b5f5f;
                    border: none;
                    margin-right: 20px;
                }
            }
        }
        .bottom {
            width: 640px;
            height: 40px;
            margin: 60px auto 0;
        }
    }
}
</style>
