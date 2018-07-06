<template>
<div class="vip-content">
    <div class="top-content">
      <el-table  :data="tableData"  border  style="width: 100%">
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
    <div class="main-content">
      <el-table  :data="tableData"  border  style="width: 100%">
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
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

<style lang="scss" scoped>
.vip-content {
  .top-content{
     height:325px;    background: #4a494a;
  }
  .main-content{

  }
}
</style>
