<template>
  <div>
    <header>
      <img src="./assets/logo.png" alt="">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </header>
    <!-- 对应的组件要渲染到routerview中 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:'web前端'
    }
  },
  mounted() {
    console.log(this,'-+++')
    console.log(this.$bus,'---')
  }
  
}
</script>
<style lang="scss">
.logo {
  width: 160px;
  height: 50px;
  background: url(./assets/logo.png) no-repeat;
}
</style>