<template>
  <div :style="angleMarkStyle" class="angle-mark">
    <p class="angle-mark-text">{{ angleMarkData.angleMarkText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    angleMarkData: {
      type: Object,
      default: () => {
        return {
          borderBottom: '46px solid transparent',
          borderRight: '46px solid #ff2626',
          angleMarkText: '热销'
        }
      }
    }
  },
  computed: {
    angleMarkStyle() {
      return {
        '--border-bottom': this.angleMarkData.borderBottom,
        '--border-right': this.angleMarkData.borderRight
      }
    }
  }
}
</script>

<style lang="less" scoped>
.angle-mark {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: var(--border-bottom);
  border-right: var(--border-right);
  .angle-mark-text {
    position: absolute;
    top: -5px;
    right: -45px;
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1px;
    transform: rotate(45deg);
    font-family: PingFang-SC-Heavy;
  }
}
</style>
