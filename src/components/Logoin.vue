<template>
<div class="login  hide">
  <div class="login-container">
    <div class="login-pop-title">登录
      <div class="login-close close" @click="closed">
      </div>
    </div>
    <div class="login-pop-content">
      <form role="form" id="signInForm" novalidate="novalidate">
        <div class="form-group">
          <label for="username">用户名</label>
          <input type="text" class="form-control" id="username" name="username" placeholder="请输入用户名" v-model='username'>
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input type="password" class="form-control" id="password" name="password" placeholder="请输入密码" v-model='password'>
        </div>
        <div class="form-group">
          <label for="verifycode">验证码</label>
          <input type="text" class="form-control"  placeholder="右侧图片字母和数字" maxlength="4" style="width:200px;" v-model='verifycode'>
          <a class="input-group-addon vimg" href="Javascript:;" @click='VerifyCode'>
            <img class="verify-img" src="../../static/VerifyCode.png" alt="点击刷新" width="100" height="26">
          </a>
        </div>
        <p class="warn" v-text='tex'></p>
        <p class="butn"><button type="button" class="btn signInBtn"  @click='btnLogin'>登&nbsp;&nbsp;录</button></p>
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
  data(){
  	return {
      username:null,
      password:null,
      verifycode:null,
      chose:true,
      tex: null,
      data: {},
  	}
  },
  methods: {
     checkd(){
        this.chose?(this.chose=false):(this.chose=true);
     },
      closed(){
      	Hub.$emit('closed',false);
      },
      VerifyCode(){
         console.log('验证码')
      },
      btnLogin() {
        let verifycodeReg = /^[a-zA-Z0-9]{4,12}$/;
        let userReg = /^[a-zA-Z0-9]{4,12}$/;
        let pwdReg = /^[a-zA-Z0-9]{6,12}$/;
        if (!userReg.test(this.username)) {
          this.tex = "请检查您输入的用户名~";
        }else if (!pwdReg.test(this.password)) {
          this.tex = "请检查您输入的密码~";
        } else if (!verifycodeReg.test(this.verifycode)) {
          this.tex = "请检查您输入的验证码~";
        } else {
          if(this.chose){
            this.tex = "登录成功~";
            network('https://www.apiopen.top/satinApi?type=1&page=1', {
              username: this.username,
              password: this.password,
              verifycode: this.verifycode
            })
          }else {
            this.tex = "不勾选表示不同意网站协议，不能注册！";
          }
        }
        if (!this.username) {
          this.tex = "用户名不得为空!";
        }  else if (!this.password) {
          this.tex = "密码不得为空!";
        }  else if (!this.verifycode) {
          this.tex = "验证码不得为空!";
        }
      },
  },
}
</script>

<style lang="scss" scoped>
	.login{
		width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 2000001;
    left: 0;
    background-color: rgba(0,0,0,.6);
		.login-container{
			 width: 460px;
        margin: 10% auto;
			.login-pop-title {
            position: relative;
            height: 38px;
            background-color: #f07;
            color: #fff;
            line-height: 38px;
            font-size: 16px;
            padding-left: 10px;
            .login-close {
                background-image: url("../../static/v2-login-pop-close.png");
                width: 18px;
                height: 18px;
                position: absolute;
                top: 10px;
                right: 10px;
                cursor: pointer;
            }
        }
			.login-pop-content{
				background-color: #fff;
        padding: 20px 25px;
				form{
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

            }
					.sure {
                label {
                    display: inline-block;
                    max-width: 100%;
                    margin-bottom: 5px;
                    .form-check-input {
                        margin-right: 8px;

                        font-size: 12px;
                        color: #333;
                        -webkit-font-smoothing: antialiased;
                    }
                }
            }
					.warn {
                color: #f07;
                padding: 7px;
            }
            .butn {
                width: 410px;
                text-align: center;
                button {
                    height: 38px;
                    width: 270px;
                    line-height: 38px;
                    background-color: #f07;
                    font-size: 16px;
                    border-radius: 2px;
                    color: #fff;
                }
            }
				}
			}
		}
	}
</style>
