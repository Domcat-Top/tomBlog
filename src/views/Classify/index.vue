<template>
  <div class="container">
    <BackgroundImg></BackgroundImg>
    <div class="com">123</div>
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
    background-color: aqua;
  }
}
</style>