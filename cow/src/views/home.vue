<template>
  <div class="home">
    <!-- 导航搜索 -->
    <topbar></topbar>
    <!-- 索引 -->
    <div class="detail">
      <navi></navi>
      <!-- 详细内容 -->
      <detail></detail>
      <!-- footer -->
      <foot></foot>
    </div>
  </div>
</template>

<script>
  import Topbar from './topbar'
  import Navi from './nav'
  import Content from './content'
  import Footer from './footer'
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Hello'
      }
    },
    components: {
      'topbar': Topbar,
      'navi': Navi,
      'detail': Content,
      'foot': Footer
    }
  }
</script>
<style scoped>
  .home {
    position: relative;
    min-height: 100%;
  }
</style>
