<template>
  <div class="animation">
    <el-row>
      <el-col :span="10">
        <el-checkbox-group v-model="tagList" size="small">
          <el-checkbox-button v-for="item in curnTag"
            :key="item"
            :label="item"
            class="custom-checkbox-btn">{{ item }}</el-checkbox-button>
          <el-button type="primary"
            plain
            size="small"
            style="vertical-align: middle"
            @click="tagShowFn">
            {{ showWhole ? "收起" : "更多" }}
            <i :class="{ 'el-icon-arrow-down': !showWhole, 'el-icon-arrow-up': showWhole }" class="el-icon--right"></i>
          </el-button>
        </el-checkbox-group>
      </el-col>
      <el-col :span="24">
        <div class="text-box"></div>
      </el-col>
    </el-row>
    <el-row class="remarks-row">
      <el-col :span="24">
        <strong>备注：</strong>
        <br />
        自动撑开动画未实现。
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showWhole: false,
      initTag: [
        '你好',
        '标签特殊化',
        '唯一性',
        '赋能',
        '努力进步',
        '超长标签展示样式可能不一样',
        '超乎想象',
        '宗教',
        '荥阳',
        '天安门',
        '佛山无影脚',
        '唐诗宋词',
        '四大名著',
        '主角光环',
        '百年孤独',
        '外国',
        '四海',
        '这又是一个超长标签',
        '电脑',
        '收购',
        '自然',
        '归属感',
        '结尾'
      ],
      curnTag: [],
      tagList: []
    }
  },
  created() {
    this.curnTag = this.initTag.slice(0, 6);
  },
  methods: {
    // tag标签展开收起
    tagShowFn() {
      this.showWhole = !this.showWhole;
      if(this.showWhole) {
        this.curnTag = this.initTag;
      } else {
        this.curnTag = this.initTag.slice(0, 6);
      }
    }
  }
}
</script>

<style lang="less" scoped>
.animation {
  padding: 10px;
  .custom-checkbox-btn {
    margin-right: 10px;
    margin-bottom: 10px;
    border: 1px solid #DCDFE6;
  }
  .text-box {
    width: 200px;
    height: 200px;
    background-color: #409EFF;
    transition: all 0.9s;
    &:hover {
      width: 300px;
      height: 300px;
    }
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
