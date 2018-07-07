<template>
<div class="select-content" @blur='listonblur()'>
  <p @click='showoption'><span>{{this.tex}}</span><span class="span"><i class="el-icon-arrow-down"></i></span></p>
  <ul class="selectoption" v-show='Showlist'>
    <li :value=item.name v-for='(item,index) in list' @click="changeType(item.name)">{{item.name}}</li>
  </ul>
</div>
</template>
<script>
import Hub from '@/components/Hub';
export default {
  data() {
    return {
      Showlist: false,
    }
  },
  props:['list','tex'],
  methods: {

    changeType(idx) {
      Hub.$emit('selectoption',idx);
    },
    showoption() {
      this.Showlist = !this.Showlist
    },
    listonblur(e) {
      console.log(e)
    }
  },
}
</script>

<style lang="scss" scoped>
.select-content {
    display: inline-block;
    p {border-bottom: 1px solid #89898a;
        width: 141px;
        height: 23px;
        line-height: 23px;
        display: inline-block;
        span {
            padding-left: 16px;
        }
        .span {
            display: inline-block;
            float: right;
            height: 23px;
            width: 15px;
            background: #b1b1b1;
            padding-left: 0;
            // margin-top: 1px;
            i {
                color: #42414e;
            }
        }
    }
    .selectoption {
        width: 142px;
        height: 119px;
        position: absolute;
        overflow: auto;
        color: #c9c9c8;
        li {
            background: #616161;
            border: 1px solid #616161;
            color: #c9c9c8;
            margin-bottom: 1px;
            width: 110px;
            height: 27px;
            line-height: 27px;
            padding-left: 13px;
            z-index: 11;
            display: inline-block;
        }
        li:hover {
            color: #fff;
            background: #9d7a23;
        }
        li:first-child {

        }
    }
    ::-webkit-scrollbar-track-piece {
        background: #616161;
    }
    ::-webkit-scrollbar {
        height: 16px;
    }
    ::-webkit-scrollbar-track {
        background: #616161;
    }
    ::-webkit-scrollbar-thumb {
        background: #b1b0b0;
    }
}
</style>
