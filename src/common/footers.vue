<template>
  <KView class="">
    <KView v-if="isFill" class="isFill"></KView>
    <KFlex class="footers">
      <KFlexItem>
        <KView class="placeholder">首页</KView>
      </KFlexItem>
      <KFlexItem>
        <KView class="placeholder">文档</KView>
      </KFlexItem>
      <KFlexItem>
        <KView class="placeholder">我的</KView>
      </KFlexItem>
    </KFlex>
  </KView>
</template>

<script>
import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
import { KView, KFlex, KFlexItem } from 'kbone-ui'

export default Vue.extend({
  name: 'footers',
  props: {
    isFill: { type: Boolean, default: true } // 是否显示填充div
  },
  data() {
    return {}
  },
  methods: {}
})
</script>
<style scoped>
.footers {
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #ffffff;
}
.isFill {
  width: 100%;
  height: 65px;
}
</style>
