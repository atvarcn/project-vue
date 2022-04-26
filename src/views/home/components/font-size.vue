<template>
  <div :class="{ 'font-size-large': fontSize==='large', 'font-size-medium': fontSize==='medium', 'font-size-small': fontSize==='small' }"
    class="font-size">
    <el-row>
      <el-col :span="12">
        <div>
          <el-button type="primary" @click="changeFontSizeFn('large')">大</el-button>
          <el-button type="success" size="medium" @click="changeFontSizeFn('medium')">中</el-button>
          <el-button type="warning" size="small" @click="changeFontSizeFn('small')">小</el-button>
          <p style="font-size: 1em">默认字体大小为medium</p>
        </div>
        <h1>这是一个标题</h1>
        <p class="font-size-large">这是一个段落，字体比较大。</p>
        <p class="font-size-medium">这是另一个段落，字体中等大小</p>
        <p style="font-size: 0.8em">这是最后一个段落，字体很小</p>
      </el-col>
      <el-col :span="12">
        <div>
          <el-button type="primary" @click="changeStyleFn">改变子类样式</el-button>
        </div>
        <div :class="{ 'father-swrapper': changeStyle }">
          <div class="son-swrapper">
            <p style="color: #808695">辅助/图标 Sub Color</p>
            <p style="width: 200px; height: 40px; background-color: #2d8cf0">辅助色r</p>
            <div><p><span style="font-size: 16px">16px大小</span></p></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fontSize: 'medium',
      changeStyle: false
    }
  },
  methods: {
    changeFontSizeFn(size) {
      this.fontSize = size;
    },
    changeStyleFn() {
      this.changeStyle = !this.changeStyle;
    }
  }
}
</script>

<style lang="less" scoped>
.font-size {
  padding: 10px 20px;
  .font-size-large {
    font-size: 2em;
  }
  .font-size-medium {
    font-size: 1.5em;
  }
}
.font-size-large {
  font-size: 24px;
}
.font-size-medium {
  font-size: 18px;
}
.font-size-small {
  font-size: 12px;
}
// ****
.father-swrapper {
  & p, & span {
    font-size: 12px !important;
    background-color: #19be6b !important;
  }
}
</style>
