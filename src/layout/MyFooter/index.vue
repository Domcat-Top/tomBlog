<template>
  <footer class="footer-wrapper">
    <div class="item">Copyright &copy; Tom's website 2020 - to now</div>
    <div class="item">Author： Tom</div>
  </footer>
</template>

<script setup lang="ts">
</script>



<style lang="scss" scoped>
.footer-wrapper {
  margin-top: 25px;
  height: 100px;
  width: 100%;
  font-size: 15px;
  background-image: linear-gradient(to right, #e9546b, #38a1db, #23d5ab);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  
  .item {
    color: white;
  }
}
</style>