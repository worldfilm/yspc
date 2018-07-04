<template>
<div id="app">
  <Navheader/>
  <Register v-show='ShowRegister' />
  <forgetpassword v-show='ShowForgetPassword' />
  <User v-show='ShowUser' />
  <router-view></router-view>
  <Navfooter/>
</div>
</template>
<script>
import Navfooter from '@/components/Navfooter.vue';
import Navheader from '@/components/Navheader.vue';
import Register from '@/components/Register';
import forgetpassword from '@/components/forgetpassword';
import User from '@/components/User';
import Hub from '@/components/Hub';
export default {
  name: 'App',
  components: {
    Navfooter,
    Navheader,
    Register,
    forgetpassword,
    User,
  },
  data() {
    return {
      ShowRegister: false,
      ShowForgetPassword: false,
      ShowUser: false,
    }
  },
  methods: {

  },
  props: [],
  created() {
    Hub.$on('closed', (data) => {
      this.Showlogin = data
      this.ShowRegister = data
      this.ShowForgetPassword = data
      this.ShowUser = data
    });
    Hub.$on('register', (data) => {
      this.ShowRegister = data
    });
    Hub.$on('forgetpassword', (data) => {
      this.ShowForgetPassword = data
    });
    Hub.$on('user', (data) => {
      this.ShowUser = data
    });
  },

}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

* {
  margin: 0;
  padding: 0;
  font-family: 微软雅黑;
}

a {
  text-decoration: none;
}

input {
  outline: none;
}

li {
  list-style: none;
}

label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
}

body {
  background: #f5f4f5;
  font-size: 14px;
  color: #333;
  display: block;
}

.clearfix:after {
  content: "";
  display: block;
  clear: both;
}

.pull-left {
  float: left
}

.pull-right {
  float: right
}

.loginclose {
  background-image: url("../static/v2-login-pop-close.png");
  width: 18px;
  height: 18px;
  position: relative;
  /* top: -56px; */
  left: 70px;
  cursor: pointer;
  float: right;
}
</style>
