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
        <div class="articleCharts" ref="articleCharts">1</div>
      </div>
      <!-- 页脚 -->
      <MyFooter></MyFooter>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import BackgroundImg from '@/components/BackgroundImg/index.vue';
import MyFooter from '@/layout/MyFooter/index.vue';
// 引入内置的函数
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
// 获取图形图表的节点
let articleCharts = ref()
  // 配置项
  let option = {
    legend: {
      orient: 'horizontal',
      bottom: 'left'
    },
    series: [
      {
        type: 'pie',
        radius: '60%',
        // 数据
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
        // 阴影样式
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
onMounted(() => {
  echarts.init(articleCharts.value).setOption(option);
})

</script>
  
<style lang="scss" scoped>
.container {
  position: relative;

  .info {
    position: absolute;
    top: 66vh;
    width: 100%;
    background-color: white;
    animation: slideUpIn 1s;

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
      // 版心的标题
      .title {
        font-size: 17px;
        font-weight: bold;
      }

      // 图表
      .articleCharts {
        height: 350px;
        width: 300px;
      }
    }
  }
}
</style>