<template>
<div class="Promotion-conter">
  <ul>
    <li class="li1"><img src="../../static/backmoney.png" alt=""> </li>
    <li class="li2"><img src="../../static/getmoney.png" alt=""></li>
    <li class="li3"><img src="../../static/uptovip.png" alt=""></li>
  </ul>

</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
      list: [{}, ]
    }
  },
  methods: {
    left() {
      Hub.$emit('active', false);
    },
  },
  components: {},
}
</script>

<style lang="scss" >
.Promotion-conter {
    height: 660px;
    ul {
        li {
            width: 825px;
            height: 105px;
            display: block;
            margin-bottom: 10px;
        }
        .li1 {
            background: url(../../static/bg1.png)no-repeat;
            img {
                position: relative;
                top: 42px;
                left: 327px;
            }
        }
        .li2 {
            background: url(../../static/bg2.png)no-repeat;
            img {
                position: relative;
                top: 42px;
                left: 315px;
            }
        }
        .li3 {
            background: url(../../static/bg3.png)no-repeat;
            img {
                position: relative;
                top: 42px;
                left: 293px;
            }
        }
    }
}
</style>
