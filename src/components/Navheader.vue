<!--头部-->
<template>
<div class='header'>
  <div class="header-left">
    <ul class="navbar">
      <li @click='Slotmachine'><a>老虎机</a></li>
      <li @click='Sport'><a>体育</a></li>
      <li @click='Dealer'><a>真人荷官</a></li>
      <li @click='Lottery'><a>彩票</a></li>
      <li @click='Promotions'><a>优惠活动</a></li>
      <li @click='User' v-show='ShowLogoOline'><a>个人中心</a></li>
    </ul>
  </div>
  <div class="header-middle">
    <a class="logo" href="Home">

      </a>
  </div>
  <div class="header-right">

    <div class="formlogoin" v-show='Showlogin'>
      <ul>
        <li>
          <p @click="register"><span>创建账号</span></p>
          <p><input type="text" name="" value="" placeholder="用户名" v-model='username'></p>
        </li>
        <li>
          <p @click="forgetpassword"><span>忘记密码了吗？</span></p>
          <p><input type="password" name="" value="" placeholder="密码" v-model='password'></p>
        </li>
        <li class="logoinbtn">
          <p @click="btnLogin">登录</p>
        </li>
      </ul>
      <p class="warn-logo" v-text='tex'></p>
    </div>

    <div class="formlogoin" v-show='ShowLogoOline'>
      <ul>
        <li>
          <p class="username">{{this.username}}</p>
        </li>
        <li>
          <p class="money"><span>{{this.money}}￥</span></p>
        </li>
        <li class="logoinbtn">
          <p @click="LoginOut">退出</p>
        </li>
      </ul>
    </div>

  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';

import {
  network
} from '@/config/config';
export default {
  name: 'Navheader',
  components: {

  },
  // props: ['ShowloginR', 'ShowLogoOlineR'],
  data() {
    return {
      Showlogin: true,
      ShowLogoOline: false,
      ShowloginR: '',
      ShowLogoOlineR: '',
      username: null,
      password: null,
      chose: true,
      tex: null,
      data: {},
      money: '200',
    }
  },
  methods: {
    checkd() {
      this.chose ? (this.chose = false) : (this.chose = true);
    },
    register() {
      Hub.$emit('register', 'true');
      this.ShowRegister = true
    },
    forgetpassword() {
      Hub.$emit('forgetpassword', 'true');
    },
    closed() {
      Hub.$emit('closed', false);
    },

    btnLogin() {
      let userReg = /^[a-zA-Z0-9]{4,12}$/;
      let pwdReg = /^[a-zA-Z0-9]{6,12}$/;
      if (this.username == null || this.username == '') {
        this.tex = "用户名不得为空!";
      } else if (this.password == null || this.password == '') {
        this.tex = "密码不得为空!";
      } else {
        if (!userReg.test(this.username)) {
          this.tex = "请检查您输入的用户名~";
        } else if (!pwdReg.test(this.password)) {
          this.tex = "请检查您输入的密码~";
        } else {
          // this.tex = '登录成功'
          this.Showlogin = false;
          this.ShowLogoOline = true;
          network('https://www.apiopen.top/satinApi?type=1&page=1', {
            username: this.username,
            password: this.password,
            verifycode: this.verifycode
          })
        }
      }
    },
    LoginOut() {
      this.Showlogin = true;
      this.ShowLogoOline = false;
    },
    //老虎机
    Slotmachine() {
      this.$router.push({
        path: '/Slotmachine'
      })
    },
    // 体育
    Sport() {
      this.$router.push({
        path: '/Sport'
      })
    },
    // 真人荷官
    Dealer() {
      this.$router.push({
        path: '/Dealer'
      })
    },
    // 彩票

    Lottery() {
      this.$router.push({
        path: '/Lottery'
      })
    },
    // 优惠活动
    Promotions() {
      this.$router.push({
        path: '/Promotions'
      })
    },
    User() {
      Hub.$emit('user', true);
    },
  },

}
</script>
<style lang="scss" scoped>
.header {
    overflow: hidden;
    width: 1024px;
    margin: 0 auto;
    .header-left {
        line-height: 85px;
        float: left;
        width: 327px;
        ul {
            li {
                display: inline-block;
                padding: 0 5px;
                float: left;
                a {
                    position: relative;
                    top: 13px;
                    color: #949494;
                }
            }
        }
    }
    .header-middle {
        float: left;
        width: 28.3%;
        height: 85px;
        a {
            background: url("/static/logo.png") no-repeat 0 30px;
            display: block;
            height: 100%;
            padding-top: 6px;
            img {
                height: 64px;
                position: relative;
                top: 30px;
                left: 12px;
            }
        }
    }
    .header-right {
        float: right;
        height: 90px;
        width: 400px;
        .formlogoin {
            .warn-logo {
                position: absolute;
                top: 80px;
                right: 300px;
                width: 330px;
                line-height: 50px;
                color: #000;
                background: #f2ce54;
                display: inline-block;
                font-size: 16px;
                border-radius: 5px;
            }
            ul {
                li {
                    display: inline-block;
                    float: left;
                    text-align: left;
                    width: 150px;
                    padding-top: 22px;
                    p {
                        height: 20px;
                        line-height: 20px;
                        padding-bottom: 14px;
                        span {
                            color: #9c7522;
                        }
                        input {
                            color: #fff;
                            width: 120px;
                            border: none;
                            border-bottom: 1px solid #595959;
                            background: none;
                            padding-bottom: 5px;
                        }
                    }
                    .username {
                        font-size: 20px;
                        color: #ddd;
                        line-height: 55px;
                        padding-left: 30px;
                    }
                    .money {
                        font-size: 20px;
                        line-height: 53px;
                        color: #ecbc4a;
                    }

                }
                .logoinbtn {
                    width: 50px;
                    p {
                        background: linear-gradient(#ffeb6a, #ca8811);
                        width: 90px;
                        height: 40px;
                        text-align: center;
                        line-height: 40px;
                        padding: 0;
                        margin-top: 11px;
                    }
                }
            }

        }
    }
}
</style>
