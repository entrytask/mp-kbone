<template>
  <div class="footer">
    <router-link class="bottom_bar_item" tag="div" :to="ix.path" v-for="(ix,i) in barList" :key="i">
      <span class="desc">{{ ix.desc }}</span>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      barList: [
        {
          desc: 'home',
          path: '/home',
        }, {
          desc: 'network',
          path: '/network',
        }, {
          desc: 'client',
          path: '/client',
        },
      ],
    }
  }
}
</script>

<style lang="less">
.footer {
  position: fixed;
  width:100%;
  bottom: 0;
  height:13.515vw;
  background: #fff;
  border-top :.5Px solid #efefef;
  display :flex;
  align-items: center;
  font-size: 5vw;
  color: #666;

  .bottom_bar_item {
    flex :1;
    display :flex;
    align-items: center;
    flex-flow :column;
  }
  .desc {
    margin-top :1vw;
  }
  .router-link-active {
    .iconfont {
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-image: -webkit-linear-gradient(top, #ff4040, #ff7f73);
    }
  }
}
</style>
