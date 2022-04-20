<template>
  <div class="image-rotate-swapper">
    <div class="image-initial">旋转前图片</div>
    <div class="image-rotate">旋转后图片</div>
  </div>
</template>

<style lang="less" scoped>
.image-rotate-swapper {
  margin: 20px;
  line-height: 50px;
  .image-initial {
    width: 253px;
    height: 50px;
    margin-bottom: 20px;
    background: url(../../../assets/svg/step_unselected.svg) 0 0 no-repeat;
    overflow: hidden;
  }
  .image-rotate {
    position: relative;
    width: 253px;
    height: 50px;
    overflow: hidden;
  }
  .image-rotate::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background: url(../../../assets/svg/step_unselected.svg) 0 0 no-repeat;
    transform: rotate(180deg);
  }
}
</style>
