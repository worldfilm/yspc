<template>
<div id="app">
  <Navheader/>
  <Logoin v-show='Showlogin' />
  <Register v-show='ShowRegister' />
  <router-view></router-view>
  <Navfooter/>
</div>
</template>
<script>
import Navfooter from '@/components/Navfooter.vue';
import Navheader from '@/components/Navheader.vue';
import Logoin from '@/components/Logoin';
import Register from '@/components/Register';
import Hub from '@/components/Hub';
export default {
  name: 'App',
  components: {
    Navfooter,
    Navheader,
    Logoin,
    Register,
  },
  data() {
    return {
      Showlogin: false,
      ShowRegister: false,
    }
  },
  methods: {

  },
  props: [],
  created() {
    Hub.$on('closed', (data) => {
      this.Showlogin = data
      this.ShowRegister = data
    });
    Hub.$on('change1', (data) => {
      this.Showlogin = data

    });
    Hub.$on('change2', (data) => {
      this.ShowRegister = data
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
