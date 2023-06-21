<template>
  <footer class="footer-wrapper">
    <p>Tom</p>
    <span>放一些其他信息</span>
  </footer>
</template>

<script setup lang="ts">
</script>



<style lang="scss" scoped>
.footer-wrapper {
  // 这是钉死在底部了，无论什么时候都存在
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  font-size: 15px;
  text-align: center;
  color: var(--grey-0);
  background: var(--footer-bg);
  background-size: 300% 300%;

  // 动画---要不就不放了，不会搞这个颜色搭配，实在是没有美感
  // animation: gradientBG 10s ease infinite;
}

@keyframes gradientBG {
  0% {
    background-position: 0 50%;
    background-image: linear-gradient(
      110.6deg,
      rgb(179, 157, 219) 7%,
      rgb(150, 159, 222) 47.7%
    );
  }

  50% {
    background-position: 100% 50%;
    background-image: linear-gradient(
      110.6deg,
      rgb(150, 159, 222) 47.7%,
      rgb(24, 255, 255) 100.6%
    );
  }

  100% {
    background-position: 0 50%;
    background-image: linear-gradient(
      110.6deg,
      rgb(24, 255, 255) 100.6%,
      rgb(150, 159, 222) 47.7%,
      rgb(179, 157, 219) 7%
    );
  }
}
</style>