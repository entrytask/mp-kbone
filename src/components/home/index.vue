<template>
  <div class="home">
    这是首页
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  components: {},
  created() {
    window.addEventListener('wxload', query => console.log('page1 wxload', query))
    window.addEventListener('wxshow', () => console.log('page1 wxshow'))
    window.addEventListener('wxready', () => console.log('page1 wxready'))
    window.addEventListener('wxhide', () => console.log('page1 wxhide'))
    window.addEventListener('wxunload', () => console.log('page1 wxunload'))
  },
  methods: {
    onClickJump() {
      window.location.href = '/test/list/123'
    },

    onClickOpen() {
      window.open('/test/detail/123')
    },
  },
})
</script>

<style lang="less">
.home{
 font-size: 16px;
}
</style>
