<template>
    <div class="name">
        <p>hi i’m myComponents</p>
        <p>父级传值：{{name}}</p>
        <button @click="callParent">call parent</button>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: {
      type: String,
      value: '',
    }
  },
  created() {
    console.log('myComponents created')
  },
  methods: {
    callParent() {
      console.log('hi i\'m son')
      this.$emit('someevent')
    },
    parentCall() {
      console.log('i have parent call')
    }
  }
})
</script>

<style lang="less">
.name {
    background-color: #f00;
    text-align: center;
}

</style>
