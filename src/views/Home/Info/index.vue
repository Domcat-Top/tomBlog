<template>
  <!-- 最上面放一个波浪组件 -->
  <Waves></Waves>
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
                <svg class="icon" aria-hidden="true" style="margin-right: 2px">
                  <use xlink:href="#icon-shouye"></use>
                </svg>
                <span style="margin-right: 10px">Java</span>
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
        <!-- 这是一大块儿 -->
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
.container {
  position: absolute;
  top: 76vh;
  width: 100%;
  background-color: white;
  height: 2000px;

  // 版心
  .specific {
    margin-top: 20px;
    width: 1160px;
    margin-left: calc((100% - 1160px) / 2);
    // 左右排布
    display: flex;
    justify-content: space-between;

    // 左边的卡片列表
    .cardList {
      width: 890px;
      height: 2000px;

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
        height: 240px;
        display: flex;
        justify-content: space-between;
        // XY的偏移都是0，阴影范围是1rem单位的，然后阴影的颜色是这样的，透明度是0.1
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        border-radius: 10px;

        .info {
          width: 520px;
          margin: 15px 15px;

          .titleLine {
            font-size: 13px;
            height: 30px;
            line-height: 30px;
            display: flex;
            align-content: center;
            color: rgba(150, 150, 150, 1);
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
          img {
            width: 350px;
            height: 100%;
            /* 斜着切一刀 */
            // 删掉了关于Chrome的兼容性写法
            clip-path: polygon(0 0, 100% 0, 100% 100%, 8% 100%);
            // 设置斜切角对面的角为圆
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
          }
        }
      }
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