<template>
  <div>
    <!-- 路由组件的出口位置 -->
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <!-- 渲染layout一级路由组件的子路由 -->
        <!-- 这样做可以在路由切换的时候，稍微的添加一些过度动画，看起来舒服点 -->
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
// .fade-enter-from {
//   opacity: 0;
// }
// .fade-enter-active {
//   transition: all 1s;
// }
// .fade-enter-to {
//   opacity: 1;
// }
</style>