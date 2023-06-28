<template>
  <div class="container">
    <BackgroundImg></BackgroundImg>
    <div class="info">
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

  }
}
</style>