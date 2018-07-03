<template>
<div class="formlogoin">
  <ul>
    <li>
      <p class="" >{{this.username}}</p>
    </li>
    <li>
      <p><span>{{this.money}}￥</span></p>
    </li>
    <li class="logoinbtn">
      <p @click="LoginOut">退出</p>
    </li>
  </ul>
</div>
</template>
<script>
import Hub from '@/components/Hub';
import {network} from '@/config/config';
export default {
  data() {
    return {
      username: null,
      money: '',
      data: {},
    }
  },
  methods: {
    LoginOut() {
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
