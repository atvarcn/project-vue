<template>
  <div class="home">
    <!-- Header -->
    <Header :curIndex="curIndex" @sendCurIndexFn="sendCurIndexFn"></Header>
    <!-- Footer -->
    <Footer></Footer>
    <!-- 三角形角标 -->
    <Angle v-show="curIndex === 0"></Angle>
    <!-- 步骤条 -->
    <Step v-show="curIndex === 1"></Step>
    <!-- 图片旋转 -->
    <ImageRotate v-show="curIndex === 2"></ImageRotate>
    <!-- 国际化 -->
    <I18n v-show="curIndex === 3"></I18n>
    <!-- 动画 -->
    <Animation v-show="curIndex === 4"></Animation>
    <!-- TinyMCE -->
    <Tinymce v-show="curIndex === 5"></Tinymce>
    <!-- 设置字体大小 -->
    <FontSize v-show="curIndex === 6"></FontSize>
    <!-- 按钮阻止多次点击 -->
    <PreventDbclick v-show="curIndex === 7"></PreventDbclick>
    <!-- antv-xsix -->
    <AntvXsix v-if="curIndex === 8"></AntvXsix>
    <!-- antv-demo -->
    <AntvDemo v-if="curIndex === 9"></AntvDemo>
    <!-- upload-file -->
    <UploadFile v-if="curIndex === 10"></UploadFile>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Angle from './components/angle.vue'
import Step from './components/step.vue'
import ImageRotate from './components/image-rotate.vue'
import I18n from './components/i18n.vue'
import Animation from './components/animation.vue'
import Tinymce from './components/tinymce.vue'
import FontSize from './components/font-size.vue'
import PreventDbclick from './components/prevent-dbclick.vue'
import AntvXsix from './components/antv-xsix.vue'
import AntvDemo from './components/antv-demo.vue'
import UploadFile from './components/upload-file.vue'

export default {
  components: { Header, Footer, Angle, Step, ImageRotate, I18n,
    Animation, Tinymce, FontSize, PreventDbclick, AntvXsix, AntvDemo,
    UploadFile },
  data() {
    return {
      curIndex: 10
    }
  },
  created() {
    
  },
  methods: {
    // Header 点击事件
    sendCurIndexFn(curIndex) {
      this.curIndex = curIndex;
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  position: relative;
  padding-bottom: 64px;
}
</style>
