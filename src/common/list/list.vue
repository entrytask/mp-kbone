<template>
  <KView class="list">
    <!-- <KCells>
      <KCell v-for="v in list" :key="v.id">
        <KIcon slot="icon" type="info" />
      </KCell>
    </KCells> -->
    <KView  v-for="v in list" :key="v.id" class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" :src="v.imgsrc" alt="">
        </div>
        <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title">{{v.title}}</h4>
            <p class="weui-media-box__desc">{{v.content}}</p>
        </div>
    </KView>
  </KView>
</template>

<script>
import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
import { KView, KCells, KCell, KIcon } from 'kbone-ui'

export default Vue.extend({
  name: 'list',
  components: {
  },
  props: {
    list: { type: Array }
  },
  data() {
    return {}
  },
  methods: {}
})
</script>
