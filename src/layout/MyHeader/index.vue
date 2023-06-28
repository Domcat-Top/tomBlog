<template>
  <header class="header">
    <div class="logo">
      <span>Tom</span>
    </div>
    <div class="list">
      <div class="items">
        <a href="#" class="hvr-underline-from-center">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye"></use>
          </svg>
          首页</a>
      </div>
      <div class="items">
        <router-link to="/classify" class="hvr-underline-from-center">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye"></use>
          </svg>
          分类</router-link>
      </div>
      <div class="items">
        <router-link to="/label" class="hvr-underline-from-center">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye"></use>
          </svg>
          标签</router-link>
      </div>
      <div class="items">
        <a href="#" class="hvr-underline-from-center">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye"></use>
          </svg>
          时间轴</a>
      </div>
      <div class="items">
        <a href="#" class="hvr-underline-from-center">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liaotianduihua"></use>
          </svg>
          留言板</a>
      </div>
      <div class="items">
        <router-link to="/about" class="hvr-underline-from-center">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yonghu"></use>
          </svg>
          关于我</router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
// 导航条
.header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;

  .logo {
    span {
      color: white;
      line-height: 70px;
      font-family: "Fredericka-the-great";
      font-size: 25px;
      margin-left: 20px;
    }
  }

  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .items {
      a {
        color: white;
        line-height: 40px;
        font-size: 20px;
        margin-right: 10px;
      }
    }

    .items:last-child {
      margin-right: 30px;
    }
  }
}
</style>