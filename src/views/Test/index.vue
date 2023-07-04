<template>
  <div class="container">
    <div class="imgs">
      <div class="item">
        <!-- 这个要从外面传递进来，后期实现吧 -->
        <span class="articleTitle">文章标题</span>
        <span></span>
      </div>
    </div>
    <Waves class="waves"></Waves>
  </div>
</template>
  
<script setup lang="ts">
import Waves from '@/components/Waves/index.vue';
</script>
  
<style lang="scss" scoped>
.container {
  .imgs {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70vh;
    // 图片的显示层级，要放到最后，不然的话，就会把前面的东西盖住了
    z-index: -9;

    .item {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: no-repeat 50% 50% / cover;
      background-image: url('https://static.ttkwsd.top/articles/84aae58f4246f8419cf018d7d7f6bae8.jpg');

      .articleTitle {
        position: relative;
        left: 46vw;
        top: 30vh;
        width: 500px;
        color: white;
        font-size: 50px;
        line-height: 1.2;
        animation: titleScale 1.2s;

        @keyframes titleScale {
          0% {
            opacity: 0;
          }

          100% {
            opacity: 1;
          }
        }
      }
    }
  }

  .waves {
    top: $other-waves-height;
  }
}
</style>