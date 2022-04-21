<template>
  <div class="footer">
    <el-row>
      <el-col :span="24" align="center">footer</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 64px;
  line-height: 64px;
  color: #fff;
  border-top: 1px solid rgba(34, 34, 34, 0.16);
  box-shadow: none;
  box-sizing: border-box;
  background-color: #626b7d;
  z-index: 9999;
}
</style>
