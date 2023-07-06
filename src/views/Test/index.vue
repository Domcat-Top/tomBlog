<template>
  <div class="container">
    <div class="imgs" :style="{ 'background-image': 'url(' + backUrl + ')' }">
      <div class="info">
        <span class="articleTitle">文章标题</span>
        <div class="otherInfo">
          <div class="articleInfo">
            <span href="#" style="margin-right: 5px;">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liaotianduihua"></use>
              </svg>
              阅读量：99999999999</span>
            <span href="#" style="margin-right: 5px;">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liaotianduihua"></use>
              </svg>
              字数统计 99.7K</span>
            <span href="#">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liaotianduihua"></use>
              </svg>
              分类名</span>
          </div>
          <div class="time">
            <span href="#" style="margin-right: 5px;">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liaotianduihua"></use>
              </svg>
              发表于2023-07-05</span>
            <span href="#">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liaotianduihua"></use>
              </svg>
              更新于2023-07-05</span>
          </div>
        </div>
      </div>
    </div>
    <Waves class="waves"></Waves>
    <!-- 这里放内容区 -->
    <div class="articleContent">
      123123123
    </div>
  </div>
</template>
  
<script setup lang="ts">
import Waves from '@/components/Waves/index.vue';

import { ref, } from 'vue';

let backUrl = ref('https://static.ttkwsd.top/articles/84aae58f4246f8419cf018d7d7f6bae8.jpg');
</script>
  
<style lang="scss" scoped>
.container {
  .imgs {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70vh;
    background: no-repeat 50% 50% / cover; 
    // 图片的显示层级，要放到最后，不然的话，就会把前面的东西盖住了
    z-index: -9;

    .info {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: no-repeat 50% 50% / cover;

      .articleTitle {
        position: relative;
        left: 46vw;
        top: 25vh;
        width: 500px;
        color: white;
        font-size: 40px;
        line-height: 1.2;
        animation: titleScale 1.2s;


      }

      .otherInfo {
        width: 400px;
        position: absolute;
        left: 40%;
        top: 45%;
        color: white;
        font-size: 15px;
        letter-spacing: 0.05rem;
        display: flex;
        flex-direction: column;

        .articleInfo {
          margin: 3px 0px;
        }

        .time {
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  .waves {
    top: $other-waves-height;
  }
}
</style>