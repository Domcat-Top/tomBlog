<template>
  <div class="container">
    <BackgroundImg></BackgroundImg>
    <div class="info">
      <div class="card">
        <div class="container">
          <!-- 上面的汇总显示 -->
          <div class="titleLine">
            <div class="timeline-box">
              <div class="out-circle">
                <div class="in-circle"></div>
              </div>
              <div class="long-line"></div>
            </div>
            <!-- 右边的，看都不用看 -->
            <div class="timeline-content">
              <span>文章汇总 - <span>999</span></span>
            </div>
          </div>
          <!-- 下面循环的个例 -->
          <ul class="timeline-wrapper">
            <li class="timeline-item">
              <div class="timeline-box">
                <div class="out-circle">
                  <div class="in-circle"></div>
                </div>
                <div class="long-line"></div>
              </div>
              <!-- 右边的 -->
              <div class="timeline-content">
                <div class="cover">
                  <img class="myImg" src="../../assets/logo.jpg" alt="">
                </div>
                <div class="info">
                  <span>图标 + <span>日期</span></span>
                  <span>文章的标题</span>
                </div>
              </div>
            </li>
          </ul>
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
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1); // 开启过渡

      .container {
        margin-left: 10vw;
        // 上面的标题
        .titleLine {
          margin-top: 20px;
          margin-bottom: 30px;

          .timeline-box {
            text-align: center;
            position: absolute;

            .out-circle {
              width: 16px;
              height: 16px;
              background: rgba(14, 116, 218, 0.1);
              box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
              /*opacity: 0.1;*/
              border-radius: 50%;
              display: flex;
              align-items: center;

              .in-circle {
                width: 8px;
                height: 8px;
                margin: 0 auto;
                background: rgba(14, 116, 218, 1);
                border-radius: 50%;
                box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
              }
            }

            .long-line {
              width: 2px;
              height: 50px;
              // 这个是来控制选中的颜色的！！！
              background: rgba(0, 0, 0, 1);
              opacity: 1;
              margin-left: 8px;
            }
          }

          .timeline-content {
            box-sizing: border-box;
            margin-left: 20px;
            height: 20px;
            padding: 0 0 0 20px;
            text-align: left;
            font-size: 20px;
          }
        }
        // 具体的 文章 格子
        .timeline-wrapper {
          .timeline-item {
            position: relative;
            margin-bottom: 15px;

            .timeline-box {
              text-align: center;
              position: absolute;

              .out-circle {
                width: 16px;
                height: 16px;
                background: rgba(14, 116, 218, 0.1);
                box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
                /*opacity: 0.1;*/
                border-radius: 50%;
                display: flex;
                align-items: center;

                .in-circle {
                  width: 8px;
                  height: 8px;
                  margin: 0 auto;
                  background: rgba(14, 116, 218, 1);
                  border-radius: 50%;
                  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
                }
              }

              .long-line {
                width: 2px;
                // 线的长度
                height: 117px;
                // 这个是来控制选中的颜色的！！！
                background: rgba(0, 0, 0, 1);
                opacity: 1;
                margin-left: 8px;
              }
            }

            // 内容区
            .timeline-content {
              box-sizing: border-box;
              margin-left: 20px;
              padding: 0 0 0 20px;
              text-align: left;
              display: flex;
              .cover {
                width: 120px;
                height: 120px;
                overflow: hidden;
                border-radius: 12px;

                .myImg {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
              // 右边要显示的--日期、标题
              .info {
                margin-left: 20px;
              }
            }
          }

          .timeline-item:last-of-type .timeline-content {
            margin-bottom: 0;
          }
        }

        /* 时间线 */

      }

    }
  }
}
</style>