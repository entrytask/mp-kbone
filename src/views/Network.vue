<template>
  <div>
    <Header></Header>
    <div>
      <h2>这是Network配置</h2>
      <h2>这是Network配置</h2>
      <h2>这是Network配置</h2>
      <h2>这是Network配置</h2>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../common/Header.vue'
import Footer from '../common/Footer.vue'

export default {
  name: 'Network',
  components: { Footer, Header },
}
</script>

<style lang="less">
.inner {
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
}
</style>
