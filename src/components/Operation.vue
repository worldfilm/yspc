<template>
<div class="Operation">
  <div class="Operation-nav">
    <ul>
      <li v-for='(item,index) in list' @click="toggle(index,item.name)" :class="{isactive:index == num}">{{item.name}}</li>
    </ul>
    <div class="Operation-content">
      <OperationLearn v-show="ShowLearn" />
      <OperationDetail v-show="ShowDetail" />
      <OperationHelp v-show="ShowHelp" />
    </div>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
import OperationLearn from '@/components/OperationLearn';
import OperationDetail from '@/components/OperationDetail';
import OperationHelp from '@/components/OperationHelp';
export default {
  data() {
    return {
      qrsrc: '../../static/qr.png',
      ShowLearn: true,
      ShowDetail: false,
      ShowHelp: false,
      num: 0,
      list: [{
        name: '推广赚钱'
      }, {
        name: '推广明细'
      }, {
        name: '推广帮助'
      }, ],
    }
  },
  methods: {
    toggle(index, name) {
      this.num = index
      name == this.list[0].name ? (this.ShowLearn = true) : (this.ShowLearn = false)
      name == this.list[1].name ? (this.ShowDetail = true) : (this.ShowDetail = false)
      name == this.list[2].name ? (this.ShowHelp = true) : (this.ShowHelp = false)
    },
  },
  components: {
    OperationLearn,
    OperationDetail,
    OperationHelp
  },
}
</script>

<style lang="scss" scoped>
.Operation {
    padding-bottom: 20px;
    .Operation-nav {
        ul {
            height: 60px;
            border-bottom: 2px solid #8c702b;
            li {
                width: 33.3%;
                height: 60px;
                line-height: 60px;
                display: inline-block;
                text-align: center;
                font-size: 20px;
                border: none;
                float: left;
                cursor: pointer;
            }
            .isactive {
                background: linear-gradient(to top, #efbd4a, #f2ca51, #f6da5c);
                color: #545353;
            }
        }
    }
    .Operation-content {}

}
</style>
