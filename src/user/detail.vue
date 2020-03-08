<template>
    <div>
         <button @click="back">回到上一页</button>
        <p>id ={{ id }}</p>
        <p>name ={{ name }}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'userdetail',
    computed:{
        id() {
            return this.$route.params.id || 0
        },
        name() {
            return this.$route.query.name || ''
        }
    },
    created() {
        console.log(this.$route)
    },methods:{
        back() {
            if (process.env.isMiniprogram) {
                wx.navigateBack()
            }else{
                window.history.go(-1)
            }
        }
    }
})
</script>

<style lang="less">

</style>