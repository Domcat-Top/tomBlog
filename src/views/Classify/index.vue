<template>
  <!-- 分类页，显示所有的分类 -->
  <div class="container">
    <BackgroundImg></BackgroundImg>
    <!-- 显示分类的图表 -->
    <div class="info">
      <div class="specificDiv">
        <div class="title">
          <span style="margin-right: 5px">文章分类统计图</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouye"></use>
          </svg>
        </div>
        <div class="articleChart">
          文章统计图，这个是图表
        </div>
        <!-- 最下面一行，显示的是小蓝色圆圈和分类的名称以及当前分类的文章数 -->
        <div class="classifyLine">
          <!-- for循环这一部分，外面的负责整个架子的支撑 -->
          <div class="item">
            <!-- 这个图标后期要替换的，最后等项目结束再找图标吧 -->
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shouye"></use>
            </svg>
            <span style="margin-left: 5px">项目</span>
          </div>
        </div>
      </div>
      <!-- 页脚 -->
      <MyFooter></MyFooter>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import BackgroundImg from '@/components/BackgroundImg/index.vue';
import MyFooter from '@/layout/MyFooter/index.vue';
</script>
  
<style lang="scss" scoped>
.container {
  position: relative;

  .info {
    position: absolute;
    top: 66vh;
    width: 100%;
    background-color: white;

    .specificDiv {
      display: flex;
      // 当前div保持水平居中
      margin: 0 auto;
      align-items: center;
      flex-direction: column;
      margin-top: 20px;
      padding: 18px 36px 30px 36px;
      border-radius: 0.75rem;
      width: $classify-container-width;
      // XY的偏移都是0，阴影范围是1rem单位的，然后阴影的颜色是这样的，透明度是0.1
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
      .title {
        font-size: 17px;
        font-weight: bold;
      }

      .articleChart {
        height: 300px;
      }

      .classifyLine {
        .item {}
      }
    }
  }
}
</style>