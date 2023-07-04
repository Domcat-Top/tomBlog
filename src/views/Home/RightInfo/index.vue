<template>
    <div>
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
            <!-- 最新文章 -->
            <div class="fiveArticle">
                <div class="title">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shouye"></use>
                    </svg>
                    <span style="margin-left: 5px">最新文章（倒叙）</span>
                </div>
                <div class="fiveArticleContent">
                    <!-- 每一个 -->
                    <div class="item">
                        <div class="myImg">
                            <img src="../../../assets/delete.png" alt="tomAvatar" />
                        </div>
                        <div class="rightInfo">
                            <span class="rightInfoTitle">SpringBoot添加IP工具类</span>
                            <span class="rightInfoDate">2023-07-04</span>
                        </div>
                    </div>
                    <div class="item">
                        <div class="myImg">
                            <img src="../../../assets/delete2.png" alt="tomAvatar" />
                        </div>
                        <div class="rightInfo">
                            <span class="rightInfoTitle">SpringBoot添加IP工具类</span>
                            <span class="rightInfoDate">2023-07-04</span>
                        </div>
                    </div>
                    <div class="item">
                        <div class="myImg">
                            <img src="../../../assets/delete.png" alt="tomAvatar" />
                        </div>
                        <div class="rightInfo">
                            <span class="rightInfoTitle">SpringBoot添加IP工具类</span>
                            <span class="rightInfoDate">2023-07-04</span>
                        </div>
                    </div>
                    <div class="item">
                        <div class="myImg">
                            <img src="../../../assets/delete2.png" alt="tomAvatar" />
                        </div>
                        <div class="rightInfo">
                            <span class="rightInfoTitle">SpringBoot添加IP工具类</span>
                            <span class="rightInfoDate">2023-07-04</span>
                        </div>
                    </div>
                    <div class="item">
                        <div class="myImg">
                            <img src="../../../assets/delete2.png" alt="tomAvatar" />
                        </div>
                        <div class="rightInfo">
                            <span class="rightInfoTitle">SpringBoot添加IP工具类</span>
                            <span class="rightInfoDate">2023-07-04</span>
                        </div>
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
                        <span>2023-07-04</span>
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
</template>
  
  
<script setup lang="ts">
</script>
<style scoped lang="scss">
// 右边的信息，比如作者信息，网站公告等
.info {
    width: 300px;
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    // 作者信息
    .selfInfo {
        display: flex;
        flex-direction: column;
        // 下面15，左边
        margin-bottom: 15px;
        background-color: white;
        border-radius: 10px;
        // XY的偏移都是0，阴影范围是1rem单位的，然后阴影的颜色是这样的，透明度是0.1
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        // 开启过渡
        transition: all 0.15s ease-in-out 0s;

        // 巧妙的写法，需要加一个取地址符，指定是父盒子吧
        &:hover {
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
        }

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
        // 下面15px
        margin-bottom: 15px;
        background-color: white;
        border-radius: 10px;
        // XY的偏移都是0，阴影范围是1rem单位的，然后阴影的颜色是这样的，透明度是0.1
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        // 开启过渡
        transition: all 0.15s ease-in-out 0s;

        // 巧妙的写法，需要加一个取地址符，指定是父盒子吧
        &:hover {
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
        }

        .title {
            margin: 18px 15px 5px 15px;
            font-size: 1.2rem;
        }

        .info {
            display: flex;
            margin: 0px 15px 15px 15px;
            font-size: 15px;
            letter-spacing: 0.03em;
            text-align: left;
            color: rgb(77, 77, 77, 1);
        }
    }

    // 放五篇最新的文章，倒叙即可
    .fiveArticle {
        // 下面15px
        margin-bottom: 15px;
        background-color: white;
        border-radius: 10px;
        // XY的偏移都是0，阴影范围是1rem单位的，然后阴影的颜色是这样的，透明度是0.1
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        // 开启过渡
        transition: all 0.15s ease-in-out 0s;

        // 巧妙的写法，需要加一个取地址符，指定是父盒子吧
        &:hover {
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
        }

        .title {
            margin: 18px 15px 5px 15px;
            font-size: 1.2rem;
        }

        .fiveArticleContent {
            margin: 0 15px 10px 18px;

            .item {
                display: flex;
                margin-bottom: 8px;

                .myImg {
                    width: 60px;
                    height: 60px;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 3px;
                    }
                }

                .rightInfo {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-left: 10px;
                    color: rgb(77, 77, 77, 1);

                    .rightInfoTitle {
                        font-size: 10px;
                        margin-bottom: 6px;
                    }

                    .rightInfoDate {
                        font-size: 10px;
                    }
                }
            }
        }
    }

    // 网站信息卡牌
    .websiteInfo {
        background-color: white;
        border-radius: 10px;
        // XY的偏移都是0，阴影范围是1rem单位的，然后阴影的颜色是rgb，透明度是0.1
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
        // 开启过渡
        transition: all 0.15s ease-in-out 0s;

        // 巧妙的写法，需要加一个取地址符，指定是父盒子吧
        &:hover {
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
        }

        .title {
            margin: 18px 15px 5px 15px;
            font-size: 1.2rem;
        }

        .content {
            margin: 0px 15px 15px 15px;
            font-size: 13px;
            letter-spacing: 0.03em;
            line-height: 1.8;
            color: rgb(77, 77, 77, 1);

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
</style>
  