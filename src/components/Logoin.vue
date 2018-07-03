<template>
<div class="formlogoin">
  <ul>
    <li>
      <p @click="register"><span>创建账号</span></p>
      <p><input type="text" name="" value="" placeholder="用户名"v-model='username'></p>
      <p class="warn-logo" v-text='logousername'></p>
    </li>
    <li>
      <p @click="forgetpassword"><span>忘记密码了吗？</span></p>
      <p><input type="password" name="" value="" placeholder="密码" v-model='password'></p>
      <p class="warn-logo" v-text='logopassword'></p>
    </li>
    <li class="logoinbtn">
      <p @click="btnLogin">登录</p>
    </li>
  </ul>
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
      password: null,
      chose: true,
      logousername: null,
      logopassword: null,
      ChildLogoin:true,
      ChildOline:false,
      data: {},
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
    VerifyCode() {
      console.log('验证码')
    },
    btnLogin() {
      let userReg = /^[a-zA-Z0-9]{4,12}$/;
      let pwdReg = /^[a-zA-Z0-9]{6,12}$/;
      if (this.username == null || this.username == '') {
        this.logousername = "用户名不得为空!";
        this.logopassword=null
      } else if (this.password == null || this.password == '') {
        this.logousername =null
        this.logopassword = "密码不得为空!";
      }else{
        if (!userReg.test(this.username)) {
          this.logopassword=null
          this.logousername = "请检查您输入的用户名~";
        } else if (!pwdReg.test(this.password)) {
          this.logousername=null;
          this.logopassword = "请检查您输入的密码~";
        }else {
          this.logopassword='登录成功'
          Hub.$emit('loginsuccess', this.ChildLogoin);
          Hub.$emit('login', this.ChildOline);
            network('https://www.apiopen.top/satinApi?type=1&page=1', {
              username: this.username,
              password: this.password,
              verifycode: this.verifycode
            })
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.formlogoin {
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
            .warn-logo {
                color: #ff0000;
                height: 10px;
                position: relative;
                top: -47px;
                font-size: 12px;
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
</style>
