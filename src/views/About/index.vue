<template>
  <div class="container">
    <BackgroundImg></BackgroundImg>
    <div class="com">关于我</div>
  </div>
</template>
  
<script setup lang="ts">
import BackgroundImg from '@/components/BackgroundImg/index.vue';
</script>
  
<style lang="scss" scoped>
.container {
  position: relative;

  .com {
    position: absolute;
    top: 76vh;
    width: 100%;
    height: 1000px;
    background-color: yellowgreen;
  }
}
</style>