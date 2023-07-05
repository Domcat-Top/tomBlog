<template>
  <!-- 最上面放一个波浪组件 -->
  <!-- 波浪组件的高度，在不同的页面下，是不同的，由于 -->
  <!-- 由于我的前端技艺不精，才导致了这个问题 -->
  <Waves class="waves"></Waves>
  <div class="container">
    <div class="specific">
      <!-- 左边的卡片 -->
      <div class="cardList">
        <!-- 这里加一个小条幅，显示一下最近的提示消息，最后端的时候再写吧 -->
        <div class="welcomeCard">
          <span class="welcomeIcon" style="margin-right: 5px">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shouye"></use>
            </svg>
          </span>
          <span class="content">欢迎阅读Tom的博客</span>
        </div>
        <!-- 轮播图 -->
        <!-- 轮播图组件，展示的是置顶的文章 -->
        <swiper :modules="modules" :pagination="{ clickable: true }" :autoplay="autoplayOptions" navigation
          @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide style="
              background-image: url('https://static.ttkwsd.top/articles/84aae58f4246f8419cf018d7d7f6bae8.jpg');
            ">
            <span class="title">背包问题啥的</span>
            <span class="time">创建时间:{{ new Date().toLocaleString() }}</span>
          </swiper-slide>
          <swiper-slide style="
              background-image: url('https://static.ttkwsd.top/articles/5b43ce3015351615d3654b8cac53c525.jpg');
            ">
            <span class="title">第二个轮播图</span>
            <span class="time">创建时间:{{ new Date().toLocaleString() }}</span>
          </swiper-slide>
        </swiper>
        <!-- 文章的卡片 -->
        <div class="card">
          <div class="info">
            <div class="titleLine">
              <div class="timeStyle">
                <svg class="icon" aria-hidden="true" style="margin-right: 3px">
                  <use xlink:href="#icon-shouye"></use>
                </svg>
                <span style="margin-right: 10px">{{ new Date().toLocaleString() }}</span>
              </div>
              <!-- for 循环生成标签和标签的内容 -->
              <div class="labelStyle">
                <div class="item">
                  <svg class="icon" aria-hidden="true" style="margin-right: 2px">
                    <use xlink:href="#icon-shouye"></use>
                  </svg>
                  <span style="margin-right: 10px">Java</span>
                </div>
                <div class="item">
                  <svg class="icon" aria-hidden="true" style="margin-right: 2px">
                    <use xlink:href="#icon-shouye"></use>
                  </svg>
                  <span style="margin-right: 10px">Java</span>
                </div>
              </div>
            </div>
            <div class="contentInfo">
              <span class="title">文章标题（红色加粗）</span>
              <div class="articleContent">
                博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、
              </div>
            </div>
            <div class="bottomLine">
              <div class="readButton"><a href="#">More...</a></div>
              <div class="classifyStyle">
                <svg class="icon" aria-hidden="true" style="margin-right: 3px">
                  <use xlink:href="#icon-shouye"></use>
                </svg>
                <span style="margin-right: 10px">分类名称</span>
              </div>
            </div>
          </div>
          <div class="articleImg">
            <img src="../../../assets/delete.png" alt="文章的封面图片" />
          </div>
        </div>
        <!-- 第二个卡片，我暂时粘贴的 -->
        <div class="card">
          <div class="info">
            <div class="titleLine">
              <div class="timeStyle">
                <svg class="icon" aria-hidden="true" style="margin-right: 3px">
                  <use xlink:href="#icon-shouye"></use>
                </svg>
                <span style="margin-right: 10px">{{ new Date().toLocaleString() }}</span>
              </div>
              <!-- for 循环生成标签和标签的内容 -->
              <div class="labelStyle">
                <div class="item">
                  <svg class="icon" aria-hidden="true" style="margin-right: 2px">
                    <use xlink:href="#icon-shouye"></use>
                  </svg>
                  <span style="margin-right: 10px">Java</span>
                </div>
              </div>
            </div>
            <div class="contentInfo">
              <span class="title">文章标题（红色加粗）</span>
              <div class="articleContent">
                博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、
              </div>
            </div>
            <div class="bottomLine">
              <div class="readButton"><a href="#">More...</a></div>
              <div class="classifyStyle">
                <svg class="icon" aria-hidden="true" style="margin-right: 3px">
                  <use xlink:href="#icon-shouye"></use>
                </svg>
                <span style="margin-right: 10px">分类名称</span>
              </div>
            </div>
          </div>
          <div class="articleImg">
            <img src="../../../assets/delete2.png" alt="文章的封面图片" />
          </div>
        </div>
        <!-- 第3个卡片，我暂时粘贴的 -->
        <div class="card">
          <div class="info">
            <div class="titleLine">
              <div class="timeStyle">
                <svg class="icon" aria-hidden="true" style="margin-right: 3px">
                  <use xlink:href="#icon-shouye"></use>
                </svg>
                <span style="margin-right: 10px">{{ new Date().toLocaleString() }}</span>
              </div>
              <!-- for 循环生成标签和标签的内容 -->
              <div class="labelStyle">
                <div class="item">
                  <svg class="icon" aria-hidden="true" style="margin-right: 2px">
                    <use xlink:href="#icon-shouye"></use>
                  </svg>
                  <span style="margin-right: 10px">Java</span>
                </div>
              </div>
            </div>
            <div class="contentInfo">
              <span class="title">文章标题（红色加粗）</span>
              <div class="articleContent">
                博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、博客内容（限制显示的内容只有三行，多了省略号代替）、
              </div>
            </div>
            <div class="bottomLine">
              <div class="readButton"><a href="#">More...</a></div>
              <div class="classifyStyle">
                <svg class="icon" aria-hidden="true" style="margin-right: 3px">
                  <use xlink:href="#icon-shouye"></use>
                </svg>
                <span style="margin-right: 10px">分类名称</span>
              </div>
            </div>
          </div>
          <div class="articleImg">
            <img src="../../../assets/delete.png" alt="文章的封面图片" />
          </div>
        </div>
      </div>
      <RightInfo></RightInfo>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script setup lang="ts">
// 页脚
import MyFooter from '@/layout/MyFooter/index.vue';
// 右边的卡片
import RightInfo from '../RightInfo/index.vue';
// 波浪组件
import Waves from '@/components/Waves/index.vue'
import { ref, onMounted } from 'vue'
// 这里就是更新后的路径，从下一级找到的组件会报错
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, Navigation } from 'swiper'
import 'swiper/css/pagination' // 轮播图底面的小圆点
import 'swiper/css/navigation' // 轮播图两边的左右箭头
//这里就是更新后的路径，以前是import 'swiper/css'
import 'swiper/swiper.min.css'

//自动轮播的配置
const autoplayOptions = {
  delay: 5000,
  // 不会自动禁用轮播图
  disableOnInteraction: false,
  loop: false,
  pauseOnMouseEnter: true,
  reverseDirection: true
}
// 初始化的时候执行的方法貌似是
const onSwiper = (swiper: any) => {
  console.log(swiper)
}
// swiper切换的时候执行的方法
const onSlideChange = e => {
  // swiper切换的时候执行的方法---输出了下标
  // console.log('slide change', e.activeIndex)
}
// 对用到的组件进行一个挂载
const modules = [Pagination, Autoplay, Navigation]

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
.waves {
  top: $home-waves-height;
}

.container {
  position: absolute;
  top: 76vh;
  width: 100%;
  background-color: white;

  // 版心
  .specific {
    margin-top: 20px;
    width: $base-container-width;
    margin-left: calc((100% - $base-container-width) / 2);
    // 左右排布
    display: flex;
    justify-content: space-between;
    animation: slideUpIn 1s;

    // 左边的卡片列表
    .cardList {
      width: 890px;

      // 欢迎语，这个可以搞成一个说说之类的
      .welcomeCard {
        width: 100%;
        height: 40px;
        // XY的偏移都是0，阴影范围是1rem单位的，然后阴影的颜色是这样的，透明度是0.1
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        border-radius: 7px;
        font-size: 20px;
        margin-bottom: 15px;
        text-align: center;
        line-height: 40px;
      }

      // 这里是轮播图。显示的是置顶的文章
      .swiper {
        // 设置阴影
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        margin-bottom: 15px;
        width: 890px;
        height: 230px;
        border-radius: 10px;
        // API：设置左右两个小标的颜色和大小
        --swiper-navigation-color: rgba(148, 228, 255, 0.85);
        --swiper-navigation-size: 30px;

        // 深度修改swiper的内部样式，没这样写过，也不晓得
        ::v-deep .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #ffffff;
          opacity: 1;
        }

        // 下面小圆点选中的样式
        ::v-deep .swiper-pagination-bullet-active {
          width: 20px;
          height: 10px;
          border-radius: 3px;
          opacity: 1;
          background-color: rgba(0, 255, 255, 0.5);
        }

        // 图片的样式，有些扁平
        .swiper-slide {
          border-radius: 10px;
          width: 890px;
          height: 230px;
          background-position: center;
          background-size: cover;

          .title {
            display: block;
            text-align: center;
            margin: 0 auto;
            margin-top: 80px;
            font-size: 30px;
            color: white;
          }

          .time {
            display: block;
            text-align: center;
            margin: 0 auto;
            margin-top: 5px;
            font-size: 18px;
            color: white;
          }
        }
      }

      // 文章的卡片
      .card {
        width: 890px;
        display: flex;
        justify-content: space-between;
        // XY的偏移都是0，阴影范围是1rem单位的，然后阴影的颜色是这样的，透明度是0.1
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        margin-bottom: 15px;
        // 下面两行设置了图片缩放时不超过原始div，也就是说，缩放的控制，是要放在最外部的盒子
        position: relative;
        overflow: hidden;
        // 开启过渡
        transition: all 0.15s ease-in-out 0s;

        // 巧妙的写法，需要加一个取地址符，指定是父盒子吧
        &:hover {
          box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);

          .articleImg {
            transform: scale(1.05) rotate(1deg);
          }
        }

        // 下一个孩子，需要实现左右排布
        &:nth-child(even) {
          flex-direction: row-reverse;

          // 设置图片切一刀的方向改变
          .articleImg {
            img {
              /* 斜着切一刀 */
              clip-path: polygon(0 0, 92% 0, 100% 100%, 0 100%);
              // 设置斜切角对面的角为圆
              border-radius: 10px 0 0 10px;

            }
          }

          // 设置内容区的
          .titleLine {
            flex-direction: row-reverse;
          }

          .bottomLine {
            flex-direction: row-reverse;
          }
        }

        .info {
          width: 520px;
          margin: 15px 15px;

          .titleLine {
            font-size: 13px;
            height: 30px;
            line-height: 30px;
            display: flex;
            justify-content: space-between;
            color: rgba(150, 150, 150, 1);

            .labelStyle {
              display: flex;
            }
          }

          // 文章标题和文章内容
          .contentInfo {
            height: 170px;

            .title {
              display: block;
              margin: 13px 0px 10px 0px;
              font-size: 22px;
              font-weight: bold;
              color: rgba(230, 46, 0, 0.85);
              letter-spacing: 0.01em;
            }

            .articleContent {
              font-size: 13px;
              line-height: 27px;
              // 下面五行，规定了div内显示的 文字行数 为 3
              // 超出部分隐藏，这五个属性不能删掉任何一个，我也不知道为什么
              display: -webkit-box;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }
          }

          // 底部按钮和分类标签
          .bottomLine {
            display: flex;
            height: 40px;
            justify-content: space-between;
            margin-top: 10px;

            .readButton {
              height: 40px;
              font-size: 16px;
              background-image: linear-gradient(to right, #ec8c69 0, #ed6ea0 100%);
              border-radius: 3px;
              // 开启过渡
              transition: all 0.15s ease-in-out 0s;

              &:hover {
                transform: scale(1.05);
              }

              a {
                margin: 10px;
                color: white;
                line-height: 40px;
              }
            }

            .classifyStyle {
              line-height: 40px;
              font-size: 16px;
              color: rgba(150, 150, 150, 1);
            }
          }
        }

        .articleImg {
          // 开启过渡
          transition: all 0.15s ease-in-out 0s;

          img {
            width: 350px;
            height: 100%;
            /* 斜着切一刀 */
            clip-path: polygon(0 0, 100% 0, 100% 100%, 8% 100%);
            // 设置斜切角对面的角为圆
            border-radius: 0 10px 10px 0;
          }
        }
      }
    }
  }
}
</style>