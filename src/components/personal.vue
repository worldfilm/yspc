<template>
<div class="personal-conter">
  <div class="left" @click="left">
    <p class="title">个人信息</p>
    <form>
      <div class="form-group">
        <span>姓名：</span> <input type="text" class="form-control" placeholder="请填写真实姓名用于提款" v-model='username'>
      </div>
      <p class="warn" v-text='tex'></p>
      <div class="form-group">
        <span>电子邮箱：</span><input type="password" class="form-control" placeholder="请输入微信号" v-model='password'>
        <button type="button" class="btn" @click='' :disable='disable'>邮箱验证</button>
      </div>
      <p class="warn" v-text='tex'></p>
      <div class="form-group">
        <span>微信：</span><input type="password" class="form-control" placeholder="请输入微信号" v-model='confirmPassword'>
        <button type="button" class="btn" @click='' :disable='disable'>邮箱验证</button>
      </div>
      <p class="warn" v-text='tex'></p>
      <div class="form-group">
        <span>QQ：</span><input type="password" class="form-control" placeholder="请输入QQ号" v-model='confirmPassword'>
        <button type="button" class="btn" @click='' :disable='disable'>邮箱验证</button>
      </div>
      <p class="warn" v-text='tex'></p>
      <div class="form-group">
        <span>手机：</span><input type="password" class="form-control" placeholder="请输入手机号" v-model='confirmPassword'>
        <button type="button" class="btn" @click='' :disable='disable'>邮箱验证</button>
      </div>
      <p class="warn" v-text='tex'></p>
    </form>
  </div>
  <div class="right">
    <p class="title">更改密码</p>
    <form>
      <div class="form-group">
        <span>旧密码：</span><input type="text" class="form-control" placeholder="请输入旧密码" v-model='username'>
        <p class="warn" v-text='tex'></p>
      </div>
      <div class="form-group">
        <span>新密码：</span><input type="password" class="form-control" placeholder="请输入新密码" v-model='password'>
        <p class="warn" v-text='tex'></p>
      </div>
      <div class="form-group">
        <span>确认密码：</span><input type="password" class="form-control" placeholder="请再次输入密码" v-model='confirmPassword'>
        <p class="warn" v-text='tex'></p>
      </div>
      <button type="button" class="surebtn" @click='btnSubmit' :disable='disable'>更&nbsp;&nbsp;改</button>
    </form>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
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
    left() {
      Hub.$emit('active', false);
    },
    btnSubmit(){

    },
  },
  components: {},
}
</script>

<style lang="scss" scoped>
.personal-conter {
    padding-bottom: 20px;
    .title {
        font-size: 20px;
        padding: 20px;
    }
    .left {
        height: 530px;
        width: 530px;
        border: 1px solid #9a6810;
        display: inline-block;
        .btn {
            float: right;
            background: linear-gradient(to top, #efbd4a, #f2ca51, #f6da5c);
            color: #6b5f5f;
            border-radius: 2px;
            border: none;
            padding: 5px;
            position: relative;
            bottom: 10px;
        }
    }
    .right {
        height: 380px;
        width: 280px;
        border: 1px solid #9a6810;
        float: right;
        .surebtn {
            height: 40px;
            width: 150px;
            line-height: 38px;
            background: linear-gradient(to top, #efbd4a, #f2ca51, #f6da5c);
            font-size: 20px;
            border-radius: 2px;
            color: #6b5f5f;
            border: none;
            position: relative;
            left: 55px;
            top: 40px;
        }
    }
    form {
        .form-group {
            border-bottom: 1px solid #5f512e;
            width: 90%;
            padding-top: 30px;
            margin: 0 auto;
            height: 28px;
            line-height: 20px;
            span {
                color: #a77e26;
                width: 72px;
                display: inline-block;
            }
            .form-control {
                font-size: 16px;
                color: #fff;
                border: none;
                width: 178px;
                background: none;
            }
            input::-webkit-input-placeholder {
                color: #cababa;
            }
            input::-moz-placeholder {
                /* Mozilla Firefox 19+ */
                color: #cababa;
            }
            input:-moz-placeholder {
                /* Mozilla Firefox 4 to 18 */
                color: #cababa;
            }
            input:-ms-input-placeholder {
                /* Internet Explorer 10-11 */
                color: #cababa;
            }
            .input-group-addon {
                img {}
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
</style>
