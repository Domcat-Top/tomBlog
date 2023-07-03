<template>
  <div class="container">
    <BackgroundImg></BackgroundImg>
    <div class="info">
      <!-- 卡片 -->
      <div class="card">
        <div class="timeLine">
          <div class="title">
            <!-- 时间轴上的小圆点 -->
            <span class="dot"></span>
            <span class="titleInfo">文章汇总 - 999</span>
          </div>
          <!-- 时间轴卡片 -->
          <div class="item">
            <!-- 时间轴上的小圆点 -->
            <span class="dot"></span>
            <!-- 内容区 -->
            <div class="articleInfo">
              <div class="cover">
                <img src="../../assets/delete.png" alt="封面图">
              </div>
              <div class="dateAndTitle">
                <a href="#">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-yonghu"></use>
                  </svg>
                  2023-02-20</a>
                <span class="dateAndTitleTitle">文章标题</span>
              </div>
            </div>
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

    .card {
      margin: 0 auto;
      margin-top: 20px;
      padding: 20px 36px 20px 36px;
      border-radius: 0.75rem;
      width: $classify-container-width;
      // XY的偏移都是0，阴影范围是1rem单位的，然后阴影的颜色是这样的，透明度是0.1
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

      // 时间轴
      .timeLine {
        width: 804px;
        margin: 0 auto;

        // 文章汇总这句话
        .title {
          // 时间轴的宽度，这个颜色需要后期再次设计
          border-left: 2px solid #49b1f5;
          padding-left: 25px;
          position: relative;

          .dot {
            position: absolute;
            display: block;
            width: 14px;
            height: 14px;
            border-radius: 100%;
            // 圆圈中心的颜色
            background-color: white;
            // 圆圈的颜色
            border: 6px solid #49b1f5;
            // 别忘记了边框的距离
            left: -14px;
            transition: 0.2s all;
          }

          // 字体居中，就不说了
          .titleInfo {
            font-size: 25px;
            height: 20px;
            line-height: 25px;
            margin-right: 30px;
            color: black;
          }

          &:hover {
            .dot {
              // 圆圈的颜色
              border: 6px solid #49b1f5;
              // 圆圈中心的颜色
              background-color: #ec8c69;
            }
          }
        }

        // 时间轴卡片实体
        .item {
          width: 500px;
          // 时间轴的宽度，这个颜色需要后期再次设计
          border-left: 2px solid #49b1f5;
          position: relative;
          padding-top: 20px;

          .dot {
            position: absolute;
            display: block;
            width: 6px;
            height: 6px;
            border-radius: 100%;
            // 圆圈中心的颜色
            background-color: white;
            // 圆圈的颜色
            border: 2px solid #49b1f5;
            left: -6px;
            top: 50%;
            // 向下位移半个圆的长度   （高度 + 边框） / 2
            margin-top: 5px;
            transition: 0.2s all;

          }

          // 封面图 和 日期标题 的样式
          .articleInfo {
            width: 500px;
            padding-left: 25px;
            display: flex;

            // 这个写法很重要，可以等比例缩小图片
            .cover {
              width: 120px;
              height: 120px;
              /* 隐藏掉那个条子 */
              overflow: hidden;
              border-radius: 10px;

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: 0.5s all;

                &:hover {
                  transform: scale(1.1);
                  border-radius: 10px;
                }
              }
            }

            .dateAndTitle {
              margin-left: 20px;
              display: flex;
              flex-direction: column;
              text-align: left;
              justify-content: center;
              font-size: 15px;
              line-height: 30px;
            }
          }

          &:hover {
            .dot {
              // 圆圈的颜色
              background-color: #ec8c69;
            }


          }
        }
      }
    }
  }
}
</style>