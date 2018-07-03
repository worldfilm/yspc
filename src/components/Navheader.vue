<!--头部-->
<template>
<div class='header'>
  <div class="container">
    <div class="header-left">
      <ul class="navbar">
        <li @click='help'><a>常见问题</a></li>
        <li @click='accunt'><a>账户</a></li>
        <li @click='deposit'><a>存款</a></li>
        <li @click='Withdrawals'><a>取款</a></li>
        <li @click='stadium'><a>体育场</a></li>
        <li @click='Playground'><a>娱乐场</a></li>
      </ul>
    </div>
    <div class="header-middle">
      <a class="logo">
       <img src='../../static/logo.png' >
      </a>
    </div>
    <div class="header-right">
       <Logoin v-on:='Showlogin' />
       <LogoOline v-show='ShowLogoOline'/>
    </div>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
import Logoin from '@/components/Logoin';
import LogoOline from '@/components/LogoOline';
export default {
  name: 'Navheader',
  components: {Logoin,LogoOline,},
  data() {
    return {
      Showlogin:true,
      ShowLogoOline:false,
    }
  },
  methods: {
    //常见问题
    help() {
      this.$router.push({
        path: '/Home'
      })
    },
    // 账户
    accunt() {
      this.$router.push({
        path: '/videoList'
      })
    },
    // 存款
    deposit() {
      this.$router.push({
        path: '/Vip'
      })
    },
    // 取款
    Withdrawals() {

    },
    // 体育场
    stadium() {

    },
    // 娱乐场
    Playground() {

    },
    created() {
      console.log('xxxxxxxxxx')
      Hub.$on('loginsuccess', (data) => {
        console.log(this.ShowLogoOline)
        this.ShowLogoOline = data
      });
      Hub.$on('login', (data) => {
        console.log(this.Showlogin)
        this.Showlogin = data
      });
    },

  },
}
</script>
<style lang="scss" scoped>
.header {
    background: #fff;
    height: 85px;
    .container {
        width: 1200px;
        margin: 0 auto;
        .header-left {
            line-height: 85px;
            float: left;
            width: 33.3%;
            ul {
                li {
                    display: inline-block;
                    a {}
                }
            }
        }
        .header-middle {
            float: left;
            width: 33.3%;
            a {
                img {
                    height: 85px;
                }
            }
        }
        .header-right {
            float: left;
            width: 33.3%;

        }
    }
}
</style>
