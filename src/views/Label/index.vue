<template>
  <div class="container">
    <BackgroundImg></BackgroundImg>
    <div class="info">
      <div class="labelList">
        <div class="item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye"></use>
          </svg>
          <span>这个是标签</span><sup>999</sup>
        </div>
        <div class="item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye"></use>
          </svg>
          <span>这个是标签</span><sup>999</sup>
        </div>
        <div class="item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye"></use>
          </svg>
          <span>这个是标签</span><sup>999</sup>
        </div>
        <div class="item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye"></use>
          </svg>
          <span>这个是标签</span><sup>999</sup>
        </div>
        <div class="item">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye"></use>
          </svg>
          <span>这个是标签</span><sup>999</sup>
        </div>
      </div>
      <!-- 显示所有的标签，估计是for -->
      <MyFooter></MyFooter>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import BackgroundImg from '@/components/BackgroundImg/index.vue';
import MyFooter from '@/layout/MyFooter/index.vue';

</script>
  
<style lang="scss" scoped>
.container {
  position: relative;

  .info {
    position: absolute;
    top: 66vh;
    width: 100%;
    background-color: white;
    animation: slideUpIn 1s;

    .labelList {
      display: flex;
      // 当前div保持水平居中
      margin: 0 auto;
      margin-top: 20px;
      padding: 20px 36px 20px 36px;
      border-radius: 0.75rem;
      width: $classify-container-width;
      // XY的偏移都是0，阴影范围是1rem单位的，然后阴影的颜色是这样的，透明度是0.1
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
      justify-content: center;

      .item {
        font-size: 17px;
        margin: 10px 10px 10px 0px;
        font-weight: 600;
        color: rgba(102, 153, 255, 0.8);
      }
    }
  }
}
</style>