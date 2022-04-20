<template>
  <div class="i18n">
    <el-row class="i18n-row">
      <el-col :span="24" align="left">
        <el-button type="primary" icon="el-icon-circle-plus-outline" size="medium">{{ $t("add") }}</el-button>
        <el-button type="danger" icon="el-icon-delete" size="medium">{{ $t("delete") }}</el-button>
        <el-button type="warning" icon="el-icon-edit" size="medium">{{ $t("modify") }}</el-button>
        <el-button type="info" icon="el-icon-help" size="medium">{{ $t("check") }}</el-button>
        <el-button type="primary" plain icon="el-icon-refresh" size="medium"
          style="margin-left: 60px" @click="switchFn">{{ $t("btn.switch") }}</el-button>
      </el-col>
    </el-row>
    <el-row class="remarks-row">
      <el-col :span="24" align="left">
        <strong>备注：</strong>
        <br />
        遇到的问题：i18n版本和vue版本可能不匹配
        <br />
        vue版本为2.6.11，如果使用的i18n版本为9以上，会报错，改成8.27.1后，再重新启动，成功！
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    // 语言切换
    switchFn() {
      if(this.$i18n.locale === 'zh') {
        this.$i18n.locale = 'en';
      } else {
        this.$i18n.locale = 'zh';
      }
    }
  }
}
</script>

<style lang="less" scoped>
.i18n {
  .i18n-row {
    margin: 20px;
  }
  .remarks-row {
    margin: 20px;
    padding: 10px;
    color: #606266;
    font-size: 14px;
    background-color: #EBEEF5;
  }
}
</style>
