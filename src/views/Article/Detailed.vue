<template>
    <div class="container">
      <BackgroundImg></BackgroundImg>
      <div class="info">
        <div class="card">
  
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
  
    // 这个要放页脚
    .info {
      position: absolute;
      top: 66vh;
      width: 100%;
      background-color: white;
      animation: slideUpIn 1s;
  
      .card {
        margin: 0 auto;
        text-align: left;
        margin-top: 20px;
        padding: 25px 20px 25px 30px;
        border-radius: 0.75rem;
        width: $classify-container-width;
        // XY的偏移都是0，阴影范围是1rem单位的，然后阴影的颜色是这样的，透明度是0.1
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

      }
    }
  }
  </style>