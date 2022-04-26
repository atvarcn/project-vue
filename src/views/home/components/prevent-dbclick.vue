<template>
  <div class="prevent-dbclick">
    <el-row>
      <el-col :span="12">
        <el-form label-width="220px">
          <el-form-item label="200毫秒间隔">
            <el-button v-preventdbclick="200"
              type="primary"
              @click="preventdbclickFn('short')">{{ timingCounter.short }} 次</el-button>
          </el-form-item>
          <el-form-item label="1200毫秒间隔（默认值）">
            <el-button v-preventdbclick
              type="success"
              @click="preventdbclickFn('long')">{{ timingCounter.long }} 次</el-button>
          </el-form-item>
          <el-form-item label="重置点击次数">
            <el-button @click="timingCounterResetFn">timingCounterReset</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <el-form label-width="220px">
          <el-form-item label="900毫秒">
            <el-button type="primary"
              :loading="shortLoading"
              @click="dbclickloadingFn('shortLoading', 900)">{{ loadingCounter.shortLoading }} 次</el-button>
          </el-form-item>
          <el-form-item label="2000毫秒">
            <el-button type="warning"
              :disabled="longLoading"
              @click="dbclickloadingFn('longLoading', 2000)">{{ loadingCounter.longLoading }} 次</el-button>
          </el-form-item>
          <el-form-item label="重置点击次数">
            <el-button @click="loadingCounterResetFn">loadingCounterReset</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row class="remarks-row">
      <el-col :span="12" >
        <strong>备注：</strong>
        <br />
        使用了Vue的自定义指令，并全局注册
      </el-col>
      <el-col :span="12" >
        <strong>备注：</strong>
        <br />
        使用了 button 的 loading 和 disabled 属性
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timingCounter: {
        short: 0,
        long: 0
      },
      shortLoading: false,
      longLoading: false,
      loadingCounter: {
        shortLoading: 0,
        longLoading: 0
      }
    }
  },
  methods: {
    preventdbclickFn(type) {
      this.timingCounter[type]++;
    },
    timingCounterResetFn() {
      this.timingCounter = {
        short: 0,
        long: 0
      };
    },

    dbclickloadingFn(type, time) {
      this.loadingCounter[type]++;
      this[type] = true;
      setTimeout(() => {
        this[type] = false;
      }, time);
    },
    loadingCounterResetFn() {
      this.loadingCounter = {
        shortLoading: 0,
        longLoading: 0
      }
    }
  }
}
</script>

<style lang="less" scoped>
.prevent-dbclick {
  padding: 10px;
  .remarks-row {
    margin: 20px;
    padding: 10px;
    color: #606266;
    font-size: 14px;
    background-color: #EBEEF5;
  }
}
</style>
