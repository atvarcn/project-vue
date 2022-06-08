<template>
  <div>
    <el-dialog title="上传" :visible.sync="dialogFlag" width="520px" @close="dialogCloseFn">
      <el-radio-group v-model="radioValue" size="small" class="radio-group" @change="radioChangeFn">
        <el-radio label="A">无Input</el-radio>
        <el-radio label="B">有Input</el-radio>
      </el-radio-group>
      <el-form v-if="radioValue==='B'" ref="formRef" :model="formData" :rules="formRules" label-width="75px" size="mini" class="csv-form">
        <el-form-item label="csv列名" prop="csv" class="csv-item">
          <el-input v-model.number="formData.csv" style="width: 150px"></el-input>
          <p class="csv-tips">这是tips内容</p>
        </el-form-item>
      </el-form>
      <el-upload action=""
        drag
        multiple
        class="upload-demo">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFlag: true,
      radioValue: 'A', // radio默认值
      formRules: {
        csv: [{ required: true, message: '请填写csv列名', trigger: 'blur' }]
      },
      formData: {
        csv: ''
      }
    }
  },
  methods: {
    radioChangeFn(value) {
      // 这里是radio改变事件，可进行逻辑处理
      console.log('radio', value)
    },
    dialogCloseFn() {
      this.$emit('dialogCloseFn');
    }
  }
}
</script>

<style lang="less" scoped>
.radio-group {
  margin: -20px 60px 10px;
}
.csv-form {
  margin: 0 60px;
  .csv-item {
    position: relative;
    .csv-tips {
      position: absolute;
      top: -12px;
      right: 0;
      width: 120px;
      color: #909399;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
.upload-demo {
  text-align: center;
}
</style>
