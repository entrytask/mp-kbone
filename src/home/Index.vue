<template>
  <div>
    <div class="title">
        <span>Hi Kbone!~</span>
    </div>
    <div>
      <p>来个循环绑定</p>
      <ul>
        <li v-for="(item,index) in stringArr" :key="index">
          <p>{{index}}-{{item}}</p>
        </li>
      </ul>
    </div>
    <div>
        <input type="text" v-model="itemName" placeholder="输入添加的值" />
        <button @click="addItem">加元素</button>
        <button @click="subItem">减元素</button>
        <button @click="loadStringArr">Request Data</button>
    </div>
    <myComponents ref="my_components" :name="itemName" @someevent="onCall"  ></myComponents>
    <button @click="callSon">call son</button>
    <button @click="toUserList">Mock List</button>
    <button @click="toMy">Using LocalStrong</button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import myComponents from './components/mycomponents.vue'
import $ from '../request/index'
export default Vue.extend({
  name: 'Home',
  components: {
    myComponents
  },
  data() {
    return {
      itemName: '',
      stringArr: ['hi'],
    }
  },
  created() {
    window.addEventListener('wxload', query => console.log('page1 wxload', query))
    window.addEventListener('wxshow', () => console.log('page1 wxshow'))
    window.addEventListener('wxready', () => console.log('page1 wxready'))
    window.addEventListener('wxhide', () => console.log('page1 wxhide'))
    window.addEventListener('wxunload', () => console.log('page1 wxunload'))
    if (process.env.isMiniprogram) {
      console.log('I am in miniprogram')
    } else {
      console.log('I am in Web')
    }
  },
  methods: {
    loadStringArr() {
      const that = this
      $.ajax('/getArrs', res => {
         that.stringArr = res
      })
    },
    addItem() {
      this.stringArr.push(this.itemName)
    },
    subItem() {
      this.stringArr.pop()
    },
    onCall() {
      console.log('i have son call')
    },
    callSon() {
      if (this.$refs.my_components.parentCall) {
        console.log('hi i\'m parent')
        this.$refs.my_components.parentCall('hi son')
      }
    },
    toUserList() {
      location.href = '/user/list'
    },
    toMy() {
      location.href = '/user/my'
    }
  },
})
</script>

<style lang="less">
.title {
  width:100%;
  height: 50px;
  background-color: #59BF74;
  line-height: 50px;
  text-align: center;
}
.title span {
  width: 100%;
  font-size: 18.5pt;
  text-align: center;
  color: #FFFFFF;
}

input[type=text]{
  width:100%;
  border-bottom: #999 1px solid;
   padding: 10px 10px;
}

// input[type=text] :focus{
// }

.cnt {
  margin-top: 20px;
}

a, button {
  display: block;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ddd;
}

.miniprogram-root {
  .for-web {
    display: none;
  }
}
</style>
