<template>
  <div class="container">
    <div class="imgs">
      <ul>
        <li
          class="item"
          style="
            background-image: url('https://static.ttkwsd.top/articles/84aae58f4246f8419cf018d7d7f6bae8.jpg');
          "
        ></li>
        <li
          class="item"
          style="
            background-image: url('https://static.ttkwsd.top/articles/5b43ce3015351615d3654b8cac53c525.jpg');
          "
        ></li>
        <li
          class="item"
          style="
            background-image: url('https://static.ttkwsd.top/articles/2ce1129fceee7f14cb4cf554ed167534.jpg');
          "
        ></li>
        <li
          class="item"
          style="
            background-image: url('https://static.ttkwsd.top/articles/6becdfb5062ec2e1f9b9b16dd4b65d7e.jpg');
          "
        ></li>
        <li
          class="item"
          style="
            background-image: url('https://static.ttkwsd.top/articles/80ae8255603788a1305d4bcc177097a2.jpg');
          "
        ></li>
        <li
          class="item"
          style="
            background-image: url('https://static.ttkwsd.top/articles/379ce4b2ddf4b087441c196fbffa2f3b.jpg');
          "
        ></li>
      </ul>
    </div>
    <!-- Tom的博客，可以拆分出去 -->
    <div class="blog-title">
      <span>Tom's blog</span>
    </div>
    <!-- 打字机，可以拆分出去 -->
    <div class="printer">
      <span class="position">{{ obj.output }}</span>
      <!-- 这是个动画，实现一闪一闪的效果 -->
      <span class="position end-symble" style="margin-left: 440px">|</span>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
// 打字机
import EasyTyper from 'easy-typer-js'
// 挂载
import { onMounted, reactive } from 'vue'

const obj = reactive({
  output: '',
  isEnd: false,
  speed: 100,
  singleBack: false,
  sleep: 0,
  type: 'normal',
  backSpeed: 100,
  sentencePause: false
})

// 这里替换后端接口，但是需要确定一下字的数量，否则会出现答辩
onMounted(() => {
  new EasyTyper(
    obj,
    `须知少日拏云志，曾许人间第一流。`,
    () => {},
    () => {}
  )
})
</script>
  
<style lang="scss" scoped>
.container {
  .imgs {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80vh;
    z-index: -9;
    background-color: #363636;
    overflow: hidden;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      transition: all 0.2s ease-in-out 0s;
    }

    .item {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: no-repeat 50% 50% / cover;
      opacity: 0;
      animation: imageAnimation 30s linear infinite 0s;
      backface-visibility: hidden;
      transform-style: preserve-3d;

      &:nth-child(2) {
        animation-delay: 5s;
      }

      &:nth-child(3) {
        animation-delay: 10s;
      }

      &:nth-child(4) {
        animation-delay: 15s;
      }

      &:nth-child(5) {
        animation-delay: 20s;
      }

      &:nth-child(6) {
        animation-delay: 25s;
      }
    }

    @keyframes imageAnimation {
      0% {
        opacity: 0;
        animation-timing-function: ease-in;
      }

      2% {
        opacity: 1;
      }

      8% {
        opacity: 1;
        transform: scale(1.05);
        animation-timing-function: ease-out;
      }

      17% {
        opacity: 1;
        transform: scale(1.1);
      }

      25% {
        opacity: 0;
        transform: scale(1.1);
      }

      100% {
        opacity: 0;
      }
    }
  }
  // 汤姆的博客
  .blog-title {
    // 布局
    position: fixed;
    span {
      position: absolute;
      left: 45vw;
      top: 30vh;
      width: 500px;
      color: white;
      font-family: 'Fredericka-the-great';
      font-size: 50px;
      line-height: 1.2;
      animation: titleScale 1.2s;
      @font-face {
        font-family: 'Fredericka-the-great';
        src: url('@/style/font/Fredericka-the-great.ttf');
      }
    }
  }
  // 打字机
  .printer {
    position: fixed;
    .position {
      position: absolute;
      left: 40.5vw;
      top: 38.5vh;
      width: 1000px;
      font-size: 25px;
      color: white;
      letter-spacing: 0.1em;
    }
    .end-symble {
      margin-left: 25px;
      animation: showLineCartoon 0.9s infinite;
    }
    @keyframes showLineCartoon {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  }
}
</style>