<template>
<div class="history-conter">
  <div class="title">
    <p class="title-p">交易记录</p>
    <SelectOption :list='historylist' :tex='historylist[0].name'/>
  </div>
  <div class="historylist">
    <p class='list-item'><span>类型</span><span>金额</span><span>日期</span><span>状态</span></p>
    <ul>
      <li class='list-item' v-for="item in list">
        <span v-text="item.type"></span>
        <span v-text="item.money"></span>
        <span v-text="item.day"></span>
        <span v-text="item.status"></span>
      </li>
    </ul>
  </div>
  <div class="block">
    <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000" :current-change='currentPage' @click='foo(currentPage)'>
    </el-pagination>
  </div>
</div>
</template>
<script>
import Hub from '@/components/Hub';
import SelectOption from '@/components/SelectOption';
export default {
  data() {
    return {
      currentPage: null,
      value: '',
      historylist:[
        {name:'所有',},{name:'存款',},{name:'取款',},{name:'红利',}
      ],
      list: [{
        type: '第三方支付',
        money: '999999',
        day: '2018-12-12 12:22:22',
        status: '完成',
      }, {
        type: '网银转账',
        money: '999999',
        day: '2018-12-12 12:22:22',
        status: '完成',
      }, {
        type: '手工提款',
        money: '999999',
        day: '2018-12-12 12:22:22',
        status: '拒绝',
      }, {
        type: '及时反水',
        money: '999999',
        day: '2018-12-12 12:22:22',
        status: '完成',
      }, ],
    }
  },
  methods: {
    left() {
      Hub.$emit('active', false);
    },
    foo(val) {
      console.log('val')
      console.log(val)
    }
  },
  components: {
    SelectOption
  },
}
</script>

<style lang="scss" >
.history-conter {
    padding-bottom: 20px;
    .title {
        width: 250px;
        height: 60px;
        .title-p {
            width: 89px;
            font-size: 20px;
            display: inline-block;
            line-height: 35px;
        }
        .el-select {
            float: right;
            .el-input {
                .el-input__inner {
                    background: none;
                    border: none;
                    padding: 0;
                }
            }
            .el-input__suffix {
                background: #b3b3b3;
                width: 16px;
                height: 25px;
                top: 9px;
                .el-input__suffix-inner {
                    .el-select__caret {
                        color: #0a0c0e;
                        width: 12px;
                        line-height: 22px;
                    }
                }
            }
            .el-input__inner {
                padding: 0;
            }
            .el-input__inner {
                background: none;
                border: none;
                padding: 0;
            }
        }
        .el-select-dropdown {
            background-color: #3f3f3f;
            .el-select-dropdown__item.hover,
            .el-select-dropdown__item:hover {
                background-color: #fff000;
            }
            border: none;
            z-index: 11;
            .el-scrollbar {
                .el-scrollbar__wrap {
                    .el-select-dropdown__list {
                        background: #3f3f3f;
                        .el-select-dropdown__item {
                            background: #656565;
                            margin-bottom: 1px;
                            .hover {
                                color: #9f7c25;
                            }
                        }
                        .el-select-dropdown__item:hover {
                            color: #9f7c25;
                        }
                    }
                }
            }
        }
    }
    .right {
        height: 380px;
        width: 280px;
        border: 1px solid #9a6810;
        float: right;
    }
    .historylist {
        .list-item {
            height: 45px;
            line-height: 45px;
            border-bottom: 1px solid #7a7a7a;
            span {
                width: 21%;
                display: inline-block;
                padding-left: 30px;
            }
        }
    }
}
</style>
