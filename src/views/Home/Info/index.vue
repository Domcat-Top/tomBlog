<template>
  <!-- 最上面放一个波浪组件 -->
  <Waves></Waves>
  <div class="container">
    <div class="specific">
      <!-- 这里放卡片和个人信息 -->
      <!-- 左边的卡片 -->
      <div class="cardList">
        <h2>这是左边的布局</h2>
        <!-- 这里就是需要循环出现的文章卡片样式，下面还需要一个分页 -->
        <!-- 目前的想法是只出现上一页和下一页还有总页数 -->
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
            <span style="margin-left: 5px">公告</span>
          </div>
          <span class="info">用于记录个人笔记，欢迎阅读~</span>
        </div>
        <!-- 这里到地方什么我还是没想好，暂时空着吧 -->
        <div class="fiveArticle">
          <div class="title">
            <!-- 这个图标后期要替换的，最后等项目结束再找图标吧 -->
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shouye"></use>
            </svg>
            <span style="margin-left: 5px">推荐文章</span>
          </div>
          <!-- 这个就是后期要v-for循环的前端样式 -->
          <div class="content">
            <img src="../../../assets/logo.jpg" alt="tomAvatar" />
            <div class="rightInfo">
              <span>SpringBoot添加IP工具类</span>
              <span>作者</span>
              <span>日期</span>
            </div>
          </div>
        </div>
        <div class="websiteInfo">
          <div class="title">
            <!-- 这个图标后期要替换的，最后等项目结束再找图标吧 -->
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shouye"></use>
            </svg>
            <span style="margin-left: 5px">网站咨询</span>
          </div>
          <div class="content">
            <div class="currentTime">
              <span>当前时间：</span>
              <span>{{ time }}</span>
            </div>
            <div class="titleNumber">
              <span>文章数：</span>
              <p>999</p>
            </div>
            <div class="totalClick">
              <span>总访问量：</span>
              <span>9999</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 波浪组件
import Waves from '@/components/Waves/index.vue'
import { ref, onMounted } from 'vue'

let time = ref()
const getTime = () => {
  setInterval(() => {
    time.value = new Date().toLocaleString()
  }, 1000)
}
onMounted(() => {
  getTime()
})
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
      width: 890px;
      height: 2000px;
      background-color: rgb(71, 133, 97, 0.3);
    }
    // 右边的信息，比如作者信息，网站公告等
    .info {
      width: 260px;
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
          width: 138px;
          height: 138px;
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
          // 这个为啥不生效，我不知道***这个貌似很重要
          white-space: pre-wrap;
          text-align: left;
        }
      }
      // 暂时考虑放五篇文章得了，但是这一块儿先不写了，如果这一块儿要改的话
      // 还需要去删掉数据库中临时添加的那个字段
      .fiveArticle {
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
        .content {
          margin-left: 0 15px;
          display: flex;
          // 左边的文章封面图
          img {
            display: flex;
            flex: 1;
            flex-direction: row;
            height: 90px;
            border-radius: 15px;
            margin-left: 15px;
            margin-right: 10px;
          }
          // 右边显示文章的作者等信息
          .rightInfo {
            // 设置布局
            flex: 10;
            display: flex;
            flex-direction: column;
            // 设置样式
            font-size: 12px;
            justify-content: center;
          }
        }
      }
      // 网站信息卡牌
      .websiteInfo {
        width: 260px;
        background-color: white;
        border-radius: 10px;
        // XY的偏移都是0，阴影范围是1rem单位的，然后阴影的颜色是rgb，透明度是0.1
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        .title {
          margin: 18px 15px 5px 15px;
          font-size: 1.2rem;
        }
        .content {
          margin: 0px 15px 15px 15px;
          font-size: 15px;
          letter-spacing: 0.03em;
          line-height: 1.8;
          .titleNumber {
            display: flex;
            justify-content: space-between;
          }
          .currentTime {
            display: flex;
            justify-content: space-between;
          }
          .totalClick {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>