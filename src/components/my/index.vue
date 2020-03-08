<template>
  <div>
    <UserInfo/>
  </div>
</template>

<script>
import Vue from 'vue'
import UserInfo from '../user_info/index.vue'

export default Vue.extend({
  name: 'My',
  components: {
    UserInfo
  },
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

