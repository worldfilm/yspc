<template>
<ul class="nav">
  <li v-for='(item,index) in navlist' @click='togglelink(item.name)'><a href="#">{{item.name}}</a> </li>
  <input type="text" name="" value="" placeholder="过滤">
</ul>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
    }
  },
  props:['navlist'],
  methods: {
     togglelink(e){
       e='/'+e
       console.log(e)
       this.$router.push({
         path:e
       })
     }
  },
  components: {},
  created() {
    console.log('created')
  },
}
</script>

<style lang="scss" scoped>
.nav {
    font-size: 14px;
    color: #fff;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #595959;
    border-bottom: 1px solid #595959;
    width: 1024px;
    overflow: hidden;
    margin: 0 auto 10px;
    li {
        float: left;
        padding: 0 5px;
        a{
            color: #949494;
        }
    }
    input {
        float: right;
        background: none;
        border: none;
        line-height: 50px;
        color: #949494;
        width: 66px;
        background: url("../../static/search.png") no-repeat 37px 14px;
    }
}
</style>
