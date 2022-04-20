<template>
  <div class="step">
    <!-- element步骤条组件 -->
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <h3>element步骤条组件</h3>
        <el-steps :active="1" align-center>
          <el-step title="步骤 1" icon="el-icon-edit">
            <span slot="icon" class="el-icon-s-tools"></span>
            <span slot="icon" class="el-icon-edit"></span>
          </el-step>
          <el-step title="步骤 2" icon="el-icon-upload"></el-step>
          <el-step title="步骤 3" icon="el-icon-picture"></el-step>
        </el-steps>
      </el-col>
    </el-row>
    
    <!-- 自定义步骤条 -->
    <el-row>
      <el-col :span="24" align="center">
        <h3>自定义组件</h3>
        <div class="custom-step-swrapper">
          <div :class="{ 'custom-step-selected': curStep===0, 'custom-step-unselected': curStep!==0 }" class="custom-step-first">
            <span class="el-icon-edit"></span>
            <span>基本信息</span>
          </div>
          <div :class="{ 'custom-step-selected': curStep===1, 'custom-step-unselected': curStep!==1 }" class="custom-step-second">
            <span class="el-icon-setting"></span>
            <span>SQL配置</span>
          </div>
          <div :class="{ 'custom-step-selected': curStep===2, 'custom-step-unselected': curStep!==2 }" class="custom-step-third">
            <span class="el-icon-tickets"></span>
            <span>确认信息</span>
          </div>
          <div :class="{ 'custom-step-fourth-selected': curStep===3, 'custom-step-fourth-unselected': curStep!==3 }">
            <span class="el-icon-document-checked"></span>
            <span>注册成功</span>
          </div>
        </div>
      </el-col>
      <el-col :span="24" align="center">
        <el-button v-show="curStep!==0" type="default" @click="stepChangeFn('back')">上一步</el-button>
        <el-button v-show="curStep!==2&&curStep!==3" type="primary" @click="stepChangeFn('next')">下一步</el-button>
        <el-button v-show="curStep===2" type="primary" @click="stepSubmitFn">提交</el-button>
        <el-button v-show="curStep===3" type="primary">数据服务列表</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curStep: 0
    }
  },
  methods: {
    // 步骤改变
    stepChangeFn(type) {
      if(type === 'next') {
        this.curStep++;
      } else {
        this.curStep--;
      }
    },
    // 提交
    stepSubmitFn() {
      this.curStep++;
    }
  }
}
</script>

<style lang="less" scoped>
.step {
  margin: 10px 0;
  .custom-step-swrapper {
    position: relative;
    width: 939px;
    height: 50px;
    line-height: 50px;
    margin: 20px auto;
    .custom-step-first {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 8;
    }
    .custom-step-second {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 233px;
      z-index: 7;
    }
    .custom-step-third {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 466px;
      z-index: 6;
    }
    .custom-step-fourth-unselected {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 686px;
      width: 253px;
      height: 50px;
      color: #606266;
      z-index: 5;
    }
    .custom-step-fourth-unselected::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
      background-image: url(../../../assets/svg/step_unselected.svg);
      transform: rotate(180deg);
    }
    .custom-step-fourth-selected {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 686px;
      width: 253px;
      height: 50px;
      color: #fff;
      z-index: 5;
    }
    .custom-step-fourth-selected::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
      background-image: url(../../../assets/svg/step_selected.svg);
      transform: rotate(180deg);
    }
    .custom-step-selected {
      width: 253px;
      height: 50px;
      color: #fff;
      background-image: url(../../../assets/svg/step_selected.svg);
    }
    .custom-step-unselected {
      width: 253px;
      height: 50px;
      color: #606266;
      background-image: url(../../../assets/svg/step_unselected.svg);
    }
  }
}
</style>
