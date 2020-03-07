<template>
  <div class="doc">
      <div class="doc_item" v-for="item in list" :key='item'>
       <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Doc',
  data: () => ({
    list: ['英文文档', '中文文档', '标准库中文文档', 'Go指南']
  }),
  components: {},
})
</script>
<style lang="less">
  .doc{
    box-sizing: border-box;
    padding: 10px 20px;
  }
  // .img_right{
  //   height:16px ;
  // }
  .doc_item{
    margin-bottom: 16px;
    background: #fff;
    height: 80px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
  }
</style>
