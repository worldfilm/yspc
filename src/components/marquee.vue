<!--滚动文字-->
<template>
<div class='marquee-box'>
  <div class='notice-icon'>
    <img src='../../static/gg.png' alt="" />
  </div>
  <marquee data-behavior="scroll" data-direction="left" data-width='100%' data-scrollamount='40'>{{msg}}</marquee>
</div>
</template>

<script>
export default {
  data() {
    return {
      msg: '本平台禁止七码及七码以上的无风险投注，禁止利用平台进行套利、套现、对打等违规行为，风控系统如检测到玩家有违规行为，将会对该账号进行封号处理，请遵守“幸运彩票”游戏规则，幸运彩票祝您游戏愉快，盈利多多！！！'
    }
  }
}
</script>

<style lang="scss" scoped>
.marquee-box {
    display: flex;
    background: linear-gradient(#ffeb6a, #ca8811);
    color: white;
    flex-direction: row;
    align-items: center;
    width: 1024px;
    margin: 0 auto 10px;
    .notice-icon {
        margin-left: 30px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 19px;
            height: 17px;
        }
    }
    marquee {
        line-height: 2.8em;
        width: 100%;
        color: #000;
    }
}
</style>
