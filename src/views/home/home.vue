<template>
  <div class="home">
    <!-- Header -->
    <Header @sendCurIndexFn="sendCurIndexFn"></Header>
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

export default {
  components: { Header, Footer, Angle, Step, ImageRotate, I18n, Animation, Tinymce },
  data() {
    return {
      curIndex: 0
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
