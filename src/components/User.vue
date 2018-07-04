<template>
<div class="user">
  <div class="user-container">
    <div class="user-content">
      <div class="loginclose close" @click="closed"></div>
      <div class="container-top"></div>
      <div class="container">
        <div class="nav">
          <ul>
            <li :class="{'ativetitle':index==toggerClass}" v-for='(item,index) in list' @click='toggle(item.fun,index)'>{{item.name}}</li>
          </ul>
        </div>
        <personal v-show='ShowPersonal'/>
        <History v-show='ShowHistory'/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Hub from '@/components/Hub';
import personal from '@/components/personal';
import History from '@/components/History';
export default {
  components: {
    personal,History
  },
  data() {
    return {
      ShowPersonal:null,
      ShowHistory:null,
      toggerClass: 0,
      Showleft: '',
      list: [{
          name: '个人中心',
          fun: function() {
            console.log('personal')

          },
        },
        {
          name: '历史',
          fun: function() {
            console.log('history')
          },
        },
        {
          name: '优惠大厅',
          fun: function() {
            console.log('Promotion')
          },
        },
        {
          name: 'VIP',
          fun: function() {
              console.log('VIP')
          },
        },
        {
          name: '游戏转账',
          fun: function() {
            console.log('Transfer')
          },
        },
        {
          name: '推广赚钱',
          fun: function() {
            console.log('Promotion')
          },
        },
      ]
    }
  },
  methods: {
    closed() {
      Hub.$emit('closed', false);
    },
    toggle(item,index) {
      item()
      console.log(index)
      this.toggerClass=index
      this.ShowPersonal=index
      this.ShowHistory=index
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

<style lang="scss" scoped>
.user {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 2000001;
    left: 0;
    background-color: rgba(0,0,0,.6);
    .user-container {
        width: 890px;
        margin: 10% auto;
        .user-content {
            background: linear-gradient(to top, #4e4c4c, #565555, #615948);
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
                    ul {
                        li {
                            display: inline-block;
                            margin: 35px 0;
                            font-size: 20px;
                            padding-right: 20px;
                            padding-left: 20px;
                            border-left: 1px solid #a6a6a6;
                        }
                        li:first-child {
                            padding-left: 0;
                            border-left: none;
                        }
                    }

                }

            }
        }
    }
}
</style>
