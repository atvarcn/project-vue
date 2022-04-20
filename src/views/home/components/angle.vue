<template>
  <div class="angle">
    <el-row class="angle-row">
      <el-col :span="8" class="angle-col">
        <angle-mark></angle-mark>
      </el-col>
      <el-col :span="8" class="angle-col border-left-none border-right-none">
        <angle-mark></angle-mark>
      </el-col>
      <el-col :span="8" class="angle-col"></el-col>
      <el-col :span="8" class="angle-col border-top-none"></el-col>
      <el-col :span="8" class="angle-col border-top-none border-left-none border-right-none">
        <angle-mark></angle-mark>
      </el-col>
      <el-col :span="8" class="angle-col border-top-none"></el-col>
    </el-row>
  </div>
</template>

<script>
import AngleMark from '../../components/angle-mark.vue'

export default {
  components: { AngleMark }
}
</script>

<style lang="less" scoped>
.angle {
  padding: 10px 0;
  .angle-row {
    width: 1180px;
    margin: 0 auto;
    background-color: #fff;
    .angle-col {
      position: relative;
      height: 220px;
      border: 1px solid #e8e8e8;
      box-sizing: border-box;
    }
  }
  .border-left-none {
    border-left: 0 !important;
  }
  .border-top-none {
    border-top: 0 !important;
  }
  .border-right-none {
    border-right: 0 !important;
  }
  .border-bottom-none {
    border-bottom: 0 !important;
  }
}
</style>
