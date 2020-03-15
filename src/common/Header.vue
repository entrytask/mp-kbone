<template>
  <div class="header">
    <h3>Benchmark Platform</h3>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapState(['headerTips', 'input']),
  },
  mounted() {
    this.FAKE_ACTION('june')
  },
  methods: {
    ...mapActions(['FAKE_ACTION']),
  },
}
</script>

<style lang="less">
.header {
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
}
</style>
