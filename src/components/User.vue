<template>
<div class="user">
  <div class="user-container">
    <div class="user-content">
      <div class="loginclose close" @click="closed"></div>
         <div class="container-top"></div>
         <div class="container">
             <div class="nav">
               <ul>
                 <li>个人空间</li>
                 <li>历史</li>
                 <li>优惠大厅</li>
                 <li>VIP</li>
                 <li>游戏转账</li>
                 <li>推广赚钱</li>
               </ul>
             </div>
         </div>
    </div>
  </div>
</div>
</template>

<script>
import Hub from '@/components/Hub';
// import {network} from '@/config/config';

export default {
  data() {
    return {

    }
  },
  methods: {
    closed() {
      Hub.$emit('closed', false);
    },
  },
}
</script>

<style lang="scss" scoped>
.user {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 2000001;
    left: 0;
    background-color: rgba(0,0,0,.6);
    .user-container {
        width: 890px;
        margin: 10% auto;
        .user-content {
            background: linear-gradient(to top, #4e4c4c, #565555, #615948);
            height: 750px;
            .container-top{
              height:60px;
              width:100%;
              background: linear-gradient(to right, #4e4a3f, #8f7128, #b98a16);
            }
            .container{
              height:690px;
              width:100%;
            }
        }
    }
}
</style>
