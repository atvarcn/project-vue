<template>
  <div class="header">
    <div class="logo-wrapper"><img class="logo" :src="logoUrl" alt="logo"></div>
    <div class="menu-wrapper">
      <ul class="menu-list">
        <li v-for="(item, index) in menuList"
          :key="index"
          :class="{ active: curIndex===index }"
          class="menu-item"
          @click="menuChangeFn(index)">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    curIndex: {
      type: Number,
      default: () => {
        return 0;
      }
    }
  },
  data() {
    return {
      logoUrl: require('../../../assets/logo.png'),
      menuList: [
        { name: '三角形角标' },
        { name: '步骤条' },
        { name: '图片旋转'},
        { name: '国际化'},
        { name: '自动撑开动画'},
        { name: 'TinyMCE'},
        { name: '设置字体大小'},
        { name: '阻止按钮多次点击'},
        { name: 'AntV | X6'},
        { name: 'AntV | Demo'},
        { name: '上传文件'},
      ]
    }
  },
  methods: {
    menuChangeFn(index) {
      this.$emit('sendCurIndexFn', index);
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  position: sticky;
  top: 0;
  display: flex;
  width: 100%;
  height: 64px;
  z-index: 9999;
  border-bottom: 1px solid rgba(34, 34, 34, 0.16);
  box-shadow: none;
  box-sizing: border-box;
  background-color: #f6f8f9;
  .logo-wrapper {
    flex: 0 0 60px;
    width: 60px;
    height: 60px;
    overflow: hidden;
    .logo {
      width: 100%;
      height: 100%;
    }
  }
  .menu-wrapper {
    flex: 1;
    .menu-list {
      list-style: none;
      padding: 0 20px;
      margin: 0;
      overflow: hidden;
      .menu-item {
        float: left;
        line-height: 64px;
        margin-right: 20px;
        font-size: 14px;
        color: #191A24;
        font-family: PingFangSC-Regular;
        cursor: pointer;
        &:hover {
          color: #2469f3;
        }
      }
    }
  }
  .active {
    color: #2469f3 !important;
  }
}
</style>
