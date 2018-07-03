<template>
<div class="forgetpassword-pop hide">
  <div class="register-pop-container">

    <div class="register-pop-content">
      <div class="login-title">忘记密码了吗?
        <div class="loginclose close" @click="closed"></div>
      </div>
      <form role="form" id="signUpForm" novalidate="novalidate">
        <div class="form-group">
          <input type="text" class="form-control" id="register_username" name="username" placeholder="登录名为4-12位字母或数字" v-model='username'>
          <p class="warn" v-text='texusername'></p>
        </div>
        <div class="form-group">
          <button type="button" class="btn signUpBtn" @click='btnRegister' :disable='disable'>提&nbsp;&nbsp;交</button>
        </div>
      </form>
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
  data() {
    return {
      username: null,
      nickname: null,
      password: null,
      confirmPassword: null,
      verifycode: null,
      texusername: null,
      texpassword: null,
      tex: null,
      data: {},
      chose: true,
      disable: 'disable',
    }
  },
  methods: {
    closed() {
      Hub.$emit('closed', false);

    },
    checkd() {
      this.chose ? (this.chose = false) : (this.chose = true);
    },
    VerifyCode() {
      console.log('验证码')
    },
    btnRegister() {
      let verifycodeReg = /^[a-zA-Z0-9]{4,12}$/;
      let userReg = /^[a-zA-Z0-9]{4,12}$/;
      let pwdReg = /^[a-zA-Z0-9]{6,12}$/;
      if (this.username==null||this.username=='') {
        this.texusername = "用户名不得为空!";
        this.texpassword=null;
        this.tex=null
      } else  if (this.password==null||this.password=='') {
        this.texusername=null;
        this.tex=null
        this.texpassword = "密码不得为空!";
      } else if(this.confirmPassword==null||this.confirmPassword=='') {
        this.texusername=null;
        this.texpassword=null;
        this.tex = "请再次输入密码!";
      }else{
        this.tex=null
        if (!userReg.test(this.username)) {
          this.texusername = "请检查您输入的用户名~";
          this.texpassword=null;
          this.tex=null
        } else if (!pwdReg.test(this.password)) {
          this.texpassword = "请检查您输入的密码~";
          this.texusername=null;
          this.tex=null
        } else if (this.password != this.confirmPassword) {
          this.tex = "两次输入的密码不一致~";
          this.texusername=null;
          this.texpassword=null;
        } else {
          if(this.chose){
            this.tex = "注册成功~";
            network('Register', {
              username: this.username,
              nickname: this.nickname,
              password: this.password,
              verifycode: this.verifycode
            })
          }else {
            this.tex = "不勾选表示不同意网站协议，不能注册！";
          }

        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.forgetpassword-pop {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 2000001;
    left: 0;
    background-color: rgba(0,0,0,.6);
    .register-pop-container {
        width: 600px;

        margin: 10% auto;
        .login-title {
            position: relative;
            height: 38px;
            color: #fff;
            line-height: 38px;
            font-size: 30px;
            padding-left: 10px;
            top: 54px;
            .loginclose {
                background-image: url("../../static/v2-login-pop-close.png");
                width: 18px;
                height: 18px;
                position: absolute;
                top: -56px;
                right: -5px;
                cursor: pointer;
            }
        }
    }
    .register-pop-content {
        background: linear-gradient(to top, #332f2f, #656161, #887f7f);
        height: 600px;
        padding: 20px 25px;
        form {
            padding-top: 130px;
            .form-group {
                margin-left: -15px;
                margin-right: -15px;
                label {
                    font-size: 16px;
                    color: #333;
                    font-weight: 400;
                    padding: 7px 0 0;
                    width: 70px;
                }
                .form-control {
                    height: 42px;
                    line-height: 42px;
                    font-size: 16px;
                    color: #666!important;
                    border: 1px solid #ddd;
                    border-radius: 2px;
                    width: 270px;
                    padding: 0 12px;
                    margin-bottom: 15px;
                }
                .input-group-addon {
                    img {}
                }
                button {
                    height: 74px;
                    width: 171px;
                    line-height: 38px;
                    background: linear-gradient(to top, #efbd4a, #f2ca51, #f6da5c);
                    font-size: 20px;
                    border-radius: 2px;
                    color: #6b5f5f;
                    border: none;
                }

            }
            .warn {
                position: relative;
                top: -7px;
                width: 330px;
                line-height: 50px;
                color: #fff;
                background: #99751f;
                display: inline-block;
                font-size: 16px;
            }
            .sure {
                label {
                    display: inline-block;
                    max-width: 100%;
                    margin-bottom: 5px;
                    color: #fff;
                    padding-bottom: 10px;
                    .form-check-input {
                        margin-right: 8px;

                        font-size: 12px;
                        color: #333;
                        -webkit-font-smoothing: antialiased;
                    }
                }
            }

        }
    }
}
</style>
