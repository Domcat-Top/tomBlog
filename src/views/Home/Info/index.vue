<template>
  <!-- 最上面放一个波浪组件 -->
  <Waves></Waves>
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
          <span class="tom">Tom</span>
          <span class="welcome">欢迎来到汤姆的博客</span>
          <!-- 这里还是需要展示一下博客、标签、分类数量，否则太突兀了，不好看 -->
          <div class="number">
            <div class="blogNumber">
              <div class="specificNumber">1</div>
              <div>文章</div>
            </div>
            <div class="classifyNumber">
              <div class="specificNumber">99</div>
              <div>分类</div>
            </div>

            <div class="labelNumber">
              <div class="specificNumber">99</div>
              <div>标签</div>
            </div>
          </div>
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

        <div class="notice">
          <div class="title">
            <!-- 这个图标后期要替换的，最后等项目结束再找图标吧 -->
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shouye"></use>
            </svg>
            公告
          </div>
          <div class="info">记录一下开发中遇到到知识点。</div>
        </div>
        <div class="question">这一块儿我不知道该写什么了</div>
        <div class="websiteInfo">
          <div class="title">
            <span>图标</span>
            <span>网站咨询</span>
          </div>
          <div class="content">
            <div class="titleNumber">文章数</div>
            <div class="currentTime">当前时间</div>
            <div class="totalClick">总访问量</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 波浪组件
import Waves from '@/components/Waves/index.vue'
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 76vh;
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
    // 左边的卡片列表
    .cardList {
      width: 860px;
      height: 2000px;
      background-color: cadetblue;
    }
    // 右边的信息，比如作者信息，网站公告等
    .info {
      width: 290px;
      display: flex;
      flex-direction: column;
      margin-left: 15px;
      // 作者信息
      .selfInfo {
        display: flex;
        flex-direction: column;
        width: 260px;
        // 下面15，左边
        margin-bottom: 15px;
        background-color: white;
        border-radius: 10px;
        // XY的偏移都是0，阴影范围是1rem单位的，然后阴影的颜色是这样的，透明度是0.1
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        img {
          // 只有这个生效了，我也不知道为什么，很是奇怪
          margin: 0px auto;
          margin-top: 10px;
          width: 110px;
          height: 110px;
          border-radius: 100%;
        }
        .tom {
          font-size: 20px;
          color: rgb(87, 87, 87, 0.8);
          // 只有这个生效了，我也不知道为什么，很是奇怪
          margin: 0px auto;
          margin-top: 5px;
          line-height: 1.4;
        }
        .welcome {
          // 只有这个生效了，我也不知道为什么，很是奇怪
          margin: 0px auto;
          font-size: 15px;
          letter-spacing: 0.1em;
          color: rgb(150, 150, 150, 0.7);
        }
        // 这里显示的是文章、分类、标签数
        .number {
          font-size: 17px;
          display: flex;
          margin: 0 auto;
          margin-top: 20px;
          margin-bottom: 10px;
          font-size: 16px;
          .blogNumber {
            border-right: 1px solid rgb(150, 150, 150, 0.8);
            padding-right: 12px;
            // 搭配下面的，实现水平居中
            display: grid;
            .specificNumber {
              font-size: 20px;
              font-weight: 1000;
              margin: auto;
            }
          }
          .classifyNumber {
            border-right: 1px solid rgb(150, 150, 150, 0.8);
            padding-left: 12px;
            padding-right: 12px;
            display: grid;
            .specificNumber {
              font-size: 20px;
              font-weight: 1000;
              margin: auto;
            }
          }
          .labelNumber {
            padding-left: 12px;
            display: grid;
            .specificNumber {
              font-size: 20px;
              font-weight: 1000;
              margin: auto;
            }
          }
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
      // 公告信息
      .notice {
        width: 260px;
        // 下面15px
        margin-bottom: 15px;
        background-color: white;
        border-radius: 10px;
        // XY的偏移都是0，阴影范围是1rem单位的，然后阴影的颜色是这样的，透明度是0.1
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        .title {
          margin: 18px 15px 5px 15px;
          font-size: 1.2rem;
        }
        .info {
          display: flex;
          margin: 0px 15px 15px 15px;
          font-size: 15px;
          letter-spacing: 0.03em;
          // 这个为啥不生效，我不知道
          white-space: pre-wrap;
          text-align: left;
        }
      }
      // 这一块儿不知道改写什么了
      .question {
        width: 260px;
        // 下面15px
        margin-bottom: 15px;
        background-color: white;
        border-radius: 10px;
        // XY的偏移都是0，阴影范围是1rem单位的，然后阴影的颜色是这样的，透明度是0.1
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        .title {
          margin: 18px 15px 5px 15px;
          font-size: 1.2rem;
        }
        .info {
          display: flex;
          margin: 0px 15px 15px 15px;
          font-size: 15px;
          letter-spacing: 0.03em;
          // 这个为啥不生效，我不知道
          white-space: pre-wrap;
          text-align: left;
        }
      }
      // 网站信息卡牌
      .websiteInfo {
        width: 260px;
        background-color: white;
        border-radius: 10px;
        // XY的偏移都是0，阴影范围是1rem单位的，然后阴影的颜色是这样的，透明度是0.1
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        
      }
    }
  }
}
</style>