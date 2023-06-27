<template>
    <div class="container">
        <div class="imgs">
            <div class="item"></div>
        </div>
        <Waves></Waves>
    </div>
</template>
    
<script setup lang="ts">
import Waves from '../Waves/index.vue';
</script>
    
<style lang="scss" scoped>
.container {
    .imgs {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 80vh;
        z-index: -9;
        .item {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: no-repeat 50% 50% / cover;
            background-image: url('https://static.ttkwsd.top/articles/84aae58f4246f8419cf018d7d7f6bae8.jpg');
        }
    }
}
</style>