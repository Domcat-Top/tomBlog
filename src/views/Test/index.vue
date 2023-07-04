<template>
  <div class="container">
    <BackgroundImg></BackgroundImg>
    <div class="info">
      <div class="card">
        <div class="item">
          <div class="myImg">
            <img src="../../assets/delete.png" alt="">
          </div>
          <div class="articleInfo">
            <div class="articleTitle">文章标题</div>
            <div class="articleDateAndClassify">
              <div class="date">
                <a href="#" class="hvr-underline-from-center">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-liaotianduihua"></use>
                  </svg>
                  2023-07-04</a>
              </div>
              <div class="classify">
                <a href="#" class="hvr-underline-from-center">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-liaotianduihua"></use>
                  </svg>
                  分类</a>
              </div>
            </div>
            <div class="articleLabel">
              <div class="labelItem">
                <a href="#" class="hvr-underline-from-center">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-liaotianduihua"></use>
                  </svg>
                  标签</a>
              </div>
            </div>
          </div>
        </div>
        <!-- 删掉 -->
        <div class="item">
          <div class="myImg">
            <img src="../../assets/delete2.png" alt="">
          </div>
          <div class="articleInfo">
            <div class="articleTitle">文章标题</div>
            <div class="articleDateAndClassify">
              <div class="date">
                <a href="#" class="hvr-underline-from-center">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-liaotianduihua"></use>
                  </svg>
                  2023-07-04</a>
              </div>
              <div class="classify">
                <a href="#" class="hvr-underline-from-center">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-liaotianduihua"></use>
                  </svg>
                  分类</a>
              </div>
            </div>
            <div class="articleLabel">
              <div class="labelItem">
                <a href="#" class="hvr-underline-from-center">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-liaotianduihua"></use>
                  </svg>
                  标签</a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <!-- 显示所有的标签，估计是for -->
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

  // 这个要放页脚
  .info {
    position: absolute;
    top: 66vh;
    width: 100%;
    background-color: white;
    animation: slideUpIn 1s;

    .card {
      margin: 0 auto;
      text-align: left;
      margin-top: 20px;
      padding: 25px 20px 25px 30px;
      border-radius: 0.75rem;
      width: $classify-container-width;
      // XY的偏移都是0，阴影范围是1rem单位的，然后阴影的颜色是这样的，透明度是0.1
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 330px;
        border-radius: 10px;
        margin: 10px 10px 10px 0px;
        border-radius: 10px;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        // 开启过渡
        transition: all 0.5s;

        // 巧妙的写法，需要加一个取地址符，指定是父盒子吧
        &:hover {
          box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.3);

          .myImg {
            img {
              transform: scale(1.05);
            }
          }
        }

        .myImg {
          width: 100%;
          height: 200px;
          /* 隐藏掉那个条子 */
          overflow: hidden;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.25s;
          }
        }

        .articleInfo {
          padding: .6rem .8rem 1rem;

          .articleTitle {
            font-size: 28px;
            color: rgb(77, 77, 77, 1);
          }

          .articleDateAndClassify {
            display: flex;
            justify-content: space-between;
            margin-top: 5px;
            font-size: 15px;
            color: rgb(77, 77, 77, 0.7);
          }

          .articleLabel {
            margin-top: 5px;
            font-size: 15px;
            color: rgb(77, 77, 77, 0.7);
          }
        }
      }
    }
  }
}
</style>