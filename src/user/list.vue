<template>
    <div>
        <a href="/">回到首页</a>
        <ul>
            <li v-for="item in userList" :key="item.id">
                id:{{item.id}} name:{{item.name}} <span @click="showDetail(item)">查看细节</span>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import $ from '../request/index'
export default Vue.extend({
    name: 'userlist',
    data() {
        return {
            userList: [],
        }
    },
    created() {
        const that = this
        $.ajax('/user/list',res => {
            console.log(res)
            that.userList = res
        })
    },
    methods:{
        showDetail(user) {
            window.open('/user/detail/'+ user.id + '?name=' + user.name)
        }
    }
})
</script>

<style lang="less">
li {
    font-size: 12pt;
    line-height: 30px;
    border-bottom: #999 1px solid;
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

</style>