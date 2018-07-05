<template>
  <div class="Slider">
    <el-carousel :interval="5000"  trigger="click">
      <el-carousel-item v-for="item in list">
        <img :src='item.src'/>
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<script>
export default {
  data() {
    return {
      imgsrc:'../../static/b1.jpg',
      list: [{
          src: '../../static/b2.jpg'
        },
        {
          src: '../../static/b3.jpg'
        },
        {
          src: '../../static/b4.jpg'
        },
      ]
    }
  },
  computed: {

  },
  methods: {

  },
}
</script>

<style lang="scss" >

</style>
