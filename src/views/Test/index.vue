<template>
  <div class="bg">
    <div class="page-container">
      <div class="archive-title">文章总览 - {{ count }}</div>
      <div class="archive-list">
        <div class="archive-item" v-for="archive in archivesList" :key="archive.id">
          <router-link class="article-cover" :to="`/article/${archive.id}`">
            <img class="cover" v-lazy="archive.articleCover">
          </router-link>
          <div class="article-info">
            <!-- 时间那一行 -->
            <div class="article-time">
              <svg-icon icon-class="calendar" style="margin-right:0.4rem;"></svg-icon>
              <time>{{ formatDate(archive.createTime) }}</time>
            </div>
            <router-link class="article-title" :to="`/article/${archive.id}`">
              {{ archive.articleTitle }}
            </router-link>
          </div>
        </div>
      </div>
      <Pagination v-if="count > 0" v-model:current="queryParams.current" :total="Math.ceil(count / 5)">
      </Pagination>
    </div>
  </div>
</template>
  
<script setup lang="ts">

</script>


<style lang="scss" scoped>
.page-container {
  position: relative;
  width: calc(100% - 0.625rem);
  margin: 1.5rem auto;
  padding: 1.75rem 2.25rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 1rem #000;
  animation: slideUpIn 1s;

  @keyframes slideUpIn {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.archive-title {
  position: relative;
  margin-left: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  font-size: 1.5rem;

  &::before {
    position: absolute;
    top: 16px;
    left: -8px;
    z-index: 1;
    width: 18px;
    height: 18px;
    border: 5px solid #49b1f5;
    border-radius: 10px;
    content: '';
    line-height: 10px;
  }

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
    width: 2px;
    height: 1.5em;
    background: #aadafa;
    content: '';
  }
}

.archive-title:hover:before {
  border-color: #ec8c69;
}

.archive-list {
  margin-left: 10px;
  padding-left: 20px;
  border-left: 2px solid #aadafa;
}

.archive-item {
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 0 20px 10px;

}

.archive-item:hover:before {
  border-color: #ec8c69;
}

.archive-item::before {
  position: absolute;
  left: -36px;
  width: 10px;
  height: 10px;
  border: 3px solid #49b1f5;
  border-radius: 6px;
  background: #fff;
  content: '';
}

.article-cover {
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 12px;

  .cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 375ms ease-in 0.2s, transform 0.6s;
  }
}

.cover:hover {
  transform: scale(1.1);
}

.article-info {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 1rem;

  .article-time {
    font-size: 14px;
  }

  .article-title {
    font-size: 0.9rem;
    margin: 2px 0;
  }
}

.article-title:hover {
  color: #e9546b;
  transform: translateX(10px);

}
</style>