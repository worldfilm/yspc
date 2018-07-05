<template>
  <div class="Promotion-conter">
    <div class="left" @click="left">
        <p>优惠大厅</p>
    </div>
    <div class="right">

    </div>
  </div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
      list: [{
        },
      ]
    }
  },
  methods: {
     left(){
        Hub.$emit('active', false);
     },
  },
  components: {},
}
</script>

<style lang="scss" scoped>
.Promotion-conter{
    padding-bottom: 20px;
    .left {
        height: 530px;
        width: 530px;
        border: 1px solid #9a6810;
            display: inline-block;
    }
    .right {
        height: 380px;
        width: 280px;
        border: 1px solid #9a6810;
        float: right;
    }
}
</style>
