<template>
  <div class="container">
    <BackgroundImg></BackgroundImg>
    <div class="info">
      <div class="card">
        <img src="../../assets/logo.jpg" alt="Tom头像">
        <p>各位访客，大家好，我是Tom，此站点的开发者。</p>
        <p>喜欢编程，喜欢游戏，喜欢猫和老鼠</p>
        <p>我很喜欢的一句话：只要朝着一个方向努力，一切都会变的得心应手。</p>
        <p>世界很大</p>
        <p>有些鸟儿注定是不会被关在笼子里的</p>
        <p>因为它们的每一片羽毛都闪耀着自由的光辉</p>
        <p>既然来到了人间</p>
        <p>便去经历，去拼搏，去感受</p>
        <p>生命不息，折腾不止</p>
        <p>总有些人，有些事，会让你感觉到生命的温暖和满足，让你感慨生命的“不虚此行”</p>
        <p>届时，我会说</p>
        <p>我来过，我不后悔。</p>
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
      padding: 20px 36px 20px 36px;
      border-radius: 0.75rem;
      width: $classify-container-width;
      // XY的偏移都是0，阴影范围是1rem单位的，然后阴影的颜色是这样的，透明度是0.1
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
      // 开启过渡
      transition: all 0.15s ease-in-out 0s;

      &:hover {
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
      }

      img {
        border-radius: 100%;
        width: 200px;
        height: 200px;
        margin: 0 auto;
        margin-bottom: 15px;
      }

      p {
        font-size: 18px;
        text-align: center;
        line-height: 1.7;
        font-weight: bold;
        color: rgba(150, 150, 170, 0.95);
      }
    }
  }
}
</style>