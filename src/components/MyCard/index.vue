<template>
  <!-- 整体卡片 -->
  <div class="card">
    <div class="leftInfo">
      <span>置顶</span>
      <span>发表时间</span>
      <a href="#">分类</a>
      <div class="blogContent">
        <div class="title">
          <span>博客标题</span>
        </div>
        <div class="content">具内容具内容具内容具内容具内容具内容v</div>
      </div>
      <div class="bottom">
        <span class="btn">more...</span>
        <div class="label">
          <span>标签</span>
          <span>标签</span>
          <span>标签</span>
        </div>
      </div>
    </div>
    <div class="imgCover">
      <img src="@/assets/testImages/background.png" alt="封面图" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.card {
  width: 850px;
  height: 230px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;

  .imgCover {
    img {
      width: 350px;
      height: 100%;
      /* 斜着切一刀 */
      clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%);
      // 再次对图片切割圆角
      border-radius: 10px;
    }
  }
}
</style>