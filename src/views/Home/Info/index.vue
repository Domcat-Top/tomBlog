<template>
  <div class="container">
    <div class="specific">
      <!-- 这里放卡片和个人信息 -->
      <!-- 左边的卡片 -->
      <div class="cardList">
        <h2>这是左边的布局</h2>
      </div>
      <!-- 右边的个人信息 -->
      <div class="info">
        <div class="selfInfo">
          <img src="../../../assets/logo.jpg" alt="tomAvatar" />
          <span>Tom</span>
          <span class="font">欢迎来到汤姆的博客</span>
          <div class="svgLine">
            <!-- 码云 -->
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-mayun1"></use>
            </svg>
            <!-- github -->
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-github"></use>
            </svg>
            <!-- bilibili -->
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bilibili"></use>
            </svg>
            <!-- QQ -->
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-qq"></use>
            </svg>
          </div>
        </div>
        <div class="notice">这是一则公告，欢迎你的到访</div>
        <div class="fiveArticle">访问前五</div>
        <div class="websiteInfo">网站信息</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 75vh;
  width: 100%;
  background-color: white;
  height: 2000px;
  // 版心
  .specific {
    width: 1160px;
    margin-left: calc((100% - 1160px) / 2);
    // 左右排布
    display: flex;
    justify-content: space-between;
    .cardList {
      width: 860px;
      height: 2000px;
      background-color: cadetblue;
    }
    .info {
      width: 290px;
      display: flex;
      flex-direction: column;
      .selfInfo {
        display: flex;
        flex-direction: column;
        width: 260px;
        margin: 15px 15px;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 0 1rem grey;
        img {
          // 只有这个生效了，我也不知道为什么，很是奇怪
          margin: 0px auto;
          margin-top: 10px;
          width: 110px;
          height: 110px;
          border-radius: 100%;
        }
        span {
          font-size: 15px;
          color: grey;
          // 只有这个生效了，我也不知道为什么，很是奇怪
          margin: 0px auto;
          margin-top: 5px;
          line-height: 1.4;
        }
        .font {
          letter-spacing: 0.1em;
        }
        .svgLine {
          display: flex;
          justify-content: center;
          margin-top: 10px;
          margin-right: 15px;
          .icon {
            margin-left: 10px;
            margin-bottom: 10px;
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
}
</style>