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
      <ul>
        <li>
          <p @click="register"><span>创建账号</span></p>
          <p><input type="text" name="" value="" placeholder="用户名"></p>
        </li>
        <li>
          <p @click="login"><span>忘记密码了吗？</span></p>
          <p><input type="password" name="" value="" placeholder="密码"></p>
        </li>
        <li class="logoinbtn">
          <p>登录</p>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  name: 'Navheader',
  components: {},
  data() {
    return {
      Showlogin: false,
      ShowRegister: false,
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
    login() {
      Hub.$emit('change1', 'true');
      this.Showlogin = true
    },
    register() {
      Hub.$emit('change2', 'true');
      this.ShowRegister = true
    }

  },
  props: [],
  created() {
    Hub.$on('change1', (data) => {
      this.title = data
    });
    Hub.$on('change2', (data) => {
      this.title = data
    });
  }
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
            ul {
                li {
                    display: inline-block;
                    float: left;
                    text-align: left;
                    width: 150px;
                    line-height: 85px;
                    height: 85px;
                    p {
                        height: 50%;
                        width: 100%;
                        span {
                            position: relative;
                            top: -15px;
                        }
                        input {
                            position: relative;
                            width: 100px;
                            top: -20px;
                            border: none;
                            border-bottom: 1px solid #ddd;
                        }
                    }

                }
                .logoinbtn {
                    width: 50px;
                    p {
                        background: #f3cc53;
                        top: 35px;
                        width: 90px;
                        left: -40px;
                        height: 40px;
                        text-align: center;
                        line-height: 40px;
                        position: relative;
                    }
                }
            }
        }
    }
}
</style>
