<template>
    <div>
        <input type="text" v-model="username" placeholder="请输入用户名" />
        <button @click="Login">登录</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default Vue.extend({
    name: 'login',
    computed: {
        ...mapState(['isLogin']),
    },
    data() {
        return {
            username: '',
        }
    },
    created() {
        if (this.isLogin){
            this.JumpMy()
        }
    },
    methods:{
        ...mapActions(['LOGIN']),
        JumpMy() {
            window.location.href = '/user/my'
        },
        Login() {
          const username = (this.username || 'ghost')
          this.LOGIN(username)
          this.JumpMy()
        }
    }
})
</script>

<style lang="less">

input[type=text]{
  width:100%;
  border-bottom: #999 1px solid;
   padding: 10px 10px;
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