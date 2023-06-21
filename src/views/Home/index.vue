<template>
  <div class="container">
    <Imgs></Imgs>
    <Info class="info"></Info>
  </div>
</template>

<script setup lang="ts">
import Imgs from "./Imgs/index.vue";
import Info from "./Info/index.vue";
</script>

<style lang="scss" scoped>
.container {
  .info {
    margin-top: 92vh;
  }
}
</style>