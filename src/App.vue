<template>
<div id="app">
  <Navheader/>
  <Register v-show='ShowRegister' />
  <forgetpassword v-show='ShowForgetPassword'/>
  <router-view></router-view>
  <Navfooter/>
</div>
</template>
<script>
import Navfooter from '@/components/Navfooter.vue';
import Navheader from '@/components/Navheader.vue';
import Register from '@/components/Register';
import forgetpassword from '@/components/forgetpassword';
import Hub from '@/components/Hub';
export default {
  name: 'App',
  components: {
    Navfooter,
    Navheader,
    Register,
    forgetpassword,
  },
  data() {
    return {
      ShowRegister: false,
      ShowForgetPassword:false,
    }
  },
  methods: {

  },
  props: [],
  created() {
    Hub.$on('closed', (data) => {
      this.Showlogin = data
      this.ShowRegister = data
      this.ShowForgetPassword =data
    });
    Hub.$on('login', (data) => {
      this.Showlogin = data
    });
    Hub.$on('register', (data) => {
      this.ShowRegister = data
    });
    Hub.$on('forgetpassword', (data) => {
      this.ShowForgetPassword = data
    });
  }
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
</style>
