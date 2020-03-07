<template>
    <div >
        <div class="info">
            <img class="img" src="https://i01piccdn.sogoucdn.com/e51b2d66260a4caf"/>
            <span>这是名字</span>
         </div>
        <div v-for="item in list" :key="item" class="info_action">
          <div>
            {{item}}
          </div>
        </div>
    </div>
</template>
<style lang="less" >
    .info_action{
          height: 45px;
          box-sizing: border-box;
          padding: 0px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1px;
          background: #fff;
    }
    .info{
        display: flex;
        align-items: center;
        padding: 10px;
        background: #fff;
        margin-bottom: 10px;
       .img{
           height: 62px;
           width: 62px;
           border-radius: 50%;
       }
    }
</style>

<script>
import Vue from 'vue'
import { KIcon } from 'kbone-ui'

export default Vue.extend({
  name: 'UserInfo',
  data: () => ({
    list: ['我的评论', '回复我的', '绑定账号']
  }),
  components: {
    KIcon
  },
})
</script>
