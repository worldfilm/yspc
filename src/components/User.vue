<template>
<div class="user">
  <div class="user-container">
    <div class="user-content">
      <div class="loginclose close" @click="closed"></div>
      <div class="container-top"></div>
      <div class="container">
        <div class="nav">
          <el-tabs type="border-card">
            <el-tab-pane label="个人中心">
              <personal />
            </el-tab-pane>
            <el-tab-pane label="历史">
              <History />
            </el-tab-pane>
            <el-tab-pane label="优惠大厅">
              <Promotion/>
            </el-tab-pane>
            <el-tab-pane label="VIP">
              <Vip/>
            </el-tab-pane>
            <el-tab-pane label="游戏转账">
              <Transfer/>
            </el-tab-pane>
            <el-tab-pane label="推广赚钱">
              <Operation/>
            </el-tab-pane>
            <el-tab-pane label="VIP商场">
              <Operation/>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Hub from '@/components/Hub';
import personal from '@/components/personal';
import History from '@/components/History';
import Promotion from '@/components/Promotion';
import Vip from '@/components/Vip';
import Transfer from '@/components/Transfer';
import Operation from '@/components/Operation';

export default {
  components: {
    personal,
    History,
    Promotion,
    Vip,
    Transfer,
    Operation,
  },
  data() {
    return {
      ShowPersonal: null,
      ShowHistory: null,
      ShowPromotion: null,
      ShowVip: null,
      ShowTransfer: null,
      ShowOperation: null,
      toggerClass: 0,
      Showleft: '',
      index: 0,
      // list: [{
      //     name: '个人中心',
      //     fun: function() {
      //       // console.log('personal')
      //       return 'personal'
      //     },
      //   },
      //   {
      //     name: '历史',
      //     fun: function() {
      //       // console.log('history')
      //       return 'history'
      //     },
      //   },
      //   {
      //     name: '优惠大厅',
      //     fun: function() {
      //       // console.log('Promotion')
      //       return 'Promotion'
      //     },
      //   },
      //   {
      //     name: 'VIP',
      //     fun: function() {
      //       // console.log('VIP')
      //       return 'VIP'
      //     },
      //   },
      //   {
      //     name: '游戏转账',
      //     fun: function() {
      //       // console.log('Transfer')
      //       return 'Transfer'
      //     },
      //   },
      //   {
      //     name: '推广赚钱',
      //     fun: function() {
      //       // console.log('Operation')
      //       return 'Operation'
      //     },
      //   },
      // ]
    }
  },
  methods: {
    closed() {
      Hub.$emit('closed', false);
    },
    toggle(item, index) {
      item(item)
      // console.log()
      // let arr = [this.toggerClass, this.ShowPersonal, this.ShowHistory, this.ShowPromotion, this.ShowVip, this.ShowTransfer, this.ShowOperation]
      // this.toggerClass = index
      // this.ShowPersonal=index
      // this.ShowHistory=index
      // this.ShowPromotion=index
      // this.ShowVip=index
      // this.ShowTransfer=index
      // this.ShowOperation=index
      // for(var i=0;i<arr.length;i++){
      // var index=0
      // console.log(arr[i])
      // }
    },
  },
  created() {

    Hub.$on('active', (data) => {
      console.log(data)
      this.Showleft = data
    });
  },
}
</script>

<style lang="scss" >
.user {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    z-index:10;
    left: 0;
    background-color: rgba(0,0,0,.6);
    .user-container {
        width: 890px;
        margin: 10% auto;
        .user-content {
            background: linear-gradient(to top, #040404, #1f1a1a, #4c463a);
            .container-top {
                height: 60px;
                width: 100%;
                background: linear-gradient(to right, #4e4a3f, #8f7128, #b98a16);
            }
            .container {
                width: 820px;
                margin: 0 auto;
                color: #a6a6a6;
                .nav {
                    width: 100%;
                    text-align: left;
                    .el-tabs--border-card {
                        background: none;
                        border: none;
                        box-shadow: none;
                        .el-tabs__header {
                            background: none;
                            border-bottom: none;
                            .el-tabs__nav-scroll {
                                .el-tabs__nav {
                                    .el-tabs__item {
                                        display: inline-block;
                                        margin: 35px 0;
                                        font-size: 20px;
                                        padding-right: 20px;
                                        padding-left: 20px;
                                        border-left: 1px solid #a6a6a6;
                                        height: 20px;
                                        line-height: 19px;
                                    }
                                    .el-tabs__item:first-child {
                                        padding-left: 0;
                                        border-left: none;
                                    }
                                    .is-active {
                                        color: #fff000;
                                        background: none;
                                        border-right: none;
                                    }
                                }
                            }
                        }
                        .el-tabs__content {
                            padding: 0;
                        }
                    }
                }

            }
        }
    }
}
</style>
