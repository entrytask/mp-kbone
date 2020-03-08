<template>
    <div v-if="isLogin">Hello!{{username}}</div>
    <div v-else>
      <a href="/user/login">请先登录>></a>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
  name: 'my',
  computed: {
    ...mapState(['isLogin', 'username']),
  },
  created() {

  }
})
</script>
