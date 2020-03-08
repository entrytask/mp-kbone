/* eslint-disable no-unused-vars */
<template>
  <KView class="page home js_show">
    <KView class>
      <KSwiper
        :indicator-dots="true"
        :circular="true"
        :autoplay="true"
        :duration="500"
        :interval="2000"
      >
        <KSwiperItem>
          <KView class="swiper-item" >
            1
          </KView>
        </KSwiperItem>
        <KSwiperItem>
          <KView class="swiper-item" >
            2
          </KView>
        </KSwiperItem>
        <KSwiperItem>
          <KView class="swiper-item" >
            3
          </KView>
        </KSwiperItem>
      </KSwiper>
      <List :list="list"></List>
    </KView>
    <KView class="page__bd page__bd_spacing"></KView>

    <Footers></Footers>

  </KView>
</template>

<script>
import Vue from 'vue'
// eslint-disable-next-line no-unused-vars
import { KView, KSwiper, KSwiperItem, KCells, KCell, KIcon } from 'kbone-ui'
// eslint-disable-next-line no-unused-vars
import List from '../common/list/list.vue'
import Footers from '../common/footers.vue'

export default Vue.extend({
  name: 'index',
  components: {
    List,
    Footers
  },
  data() {
    return {
      list: [
        { id: '1', title: '入门指南1', username: '鲤鱼溪', imgsrc: 'https://www.runoob.com/wp-content/uploads/2015/06/go128.png', content: '测试测试测试内容1' },
        { id: '2', title: '入门指南2', username: '鲤鱼溪', imgsrc: 'https://www.runoob.com/wp-content/uploads/2015/06/go128.png', content: '测试测试测试内容2' },
        { id: '3', title: '入门指南3', username: '鲤鱼溪', imgsrc: 'https://www.runoob.com/wp-content/uploads/2015/06/go128.png', content: '测试测试测试内容2' },
        { id: '4', title: '入门指南4', username: '鲤鱼溪', imgsrc: 'https://www.runoob.com/wp-content/uploads/2015/06/go128.png', content: '测试测试测试内容2' },
        { id: '5', title: '入门指南5', username: '鲤鱼溪', imgsrc: 'https://www.runoob.com/wp-content/uploads/2015/06/go128.png', content: '测试测试测试内容2' },
        { id: '6', title: '入门指南6', username: '鲤鱼溪', imgsrc: 'https://www.runoob.com/wp-content/uploads/2015/06/go128.png', content: '测试测试测试内容2' },
        { id: '7', title: '入门指南7', username: '鲤鱼溪', imgsrc: 'https://www.runoob.com/wp-content/uploads/2015/06/go128.png', content: '测试测试测试内容2' },
        { id: '8', title: '入门指南8', username: '鲤鱼溪', imgsrc: 'https://www.runoob.com/wp-content/uploads/2015/06/go128.png', content: '测试测试测试内容2' },
        { id: '9', title: '入门指南9', username: '鲤鱼溪', imgsrc: 'https://www.runoob.com/wp-content/uploads/2015/06/go128.png', content: '测试测试测试内容2' },
        { id: '10', title: '入门指南10', username: '鲤鱼溪', imgsrc: 'https://www.runoob.com/wp-content/uploads/2015/06/go128.png', content: '测试测试测试内容2' },
        { id: '11', title: '入门指南11', username: '鲤鱼溪', imgsrc: 'https://www.runoob.com/wp-content/uploads/2015/06/go128.png', content: '测试测试测试内容2' },
        { id: '12', title: '入门指南12', username: '鲤鱼溪', imgsrc: 'https://www.runoob.com/wp-content/uploads/2015/06/go128.png', content: '测试测试测试内容2' },
        { id: '13', title: '入门指南13', username: '鲤鱼溪', imgsrc: 'https://www.runoob.com/wp-content/uploads/2015/06/go128.png', content: '测试测试测试内容2' },
        { id: '14', title: '入门指南14', username: '鲤鱼溪', imgsrc: 'https://www.runoob.com/wp-content/uploads/2015/06/go128.png', content: '测试测试测试内容2' },
        { id: '15', title: '入门指南15', username: '鲤鱼溪', imgsrc: 'https://www.runoob.com/wp-content/uploads/2015/06/go128.png', content: '测试测试测试内容2' },
        { id: '16', title: '入门指南16', username: '鲤鱼溪', imgsrc: 'https://www.runoob.com/wp-content/uploads/2015/06/go128.png', content: '测试测试测试内容2' },
        { id: '17', title: '入门指南17', username: '鲤鱼溪', imgsrc: 'https://www.runoob.com/wp-content/uploads/2015/06/go128.png', content: '测试测试测试内容2' },
        { id: '18', title: '入门指南18', username: '鲤鱼溪', imgsrc: 'https://www.runoob.com/wp-content/uploads/2015/06/go128.png', content: '测试测试测试内容2' },
        { id: '19', title: '入门指南19', username: '鲤鱼溪', imgsrc: 'https://www.runoob.com/wp-content/uploads/2015/06/go128.png', content: '测试测试测试内容2' },
        { id: '20', title: '入门指南20', username: '鲤鱼溪', imgsrc: 'https://www.runoob.com/wp-content/uploads/2015/06/go128.png', content: '测试测试测试内容2' },
      ]
    }
  },
  methods: {}
})
</script>
<style scoped>
 .weui-swiper {
   background: #ffffff;
 }
</style>
