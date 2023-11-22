<template lang="">
  <div>
  {{count}} 
  <button @click = "increment"> 증가 </button>
  <button @click = "decrement"> 감소 </button>
  <p v-if="limit"> count값이 20임 stop </p>
  <p v-else-if="count == 15"> 흐헤흫 </p>
  <p v-else> 20까지만 누르셈 좀 </p>
  </div>
</template>
<script>
import {  mapState, mapMutations, mapActions, mapGetters } from 'vuex';

export default {
  computed:{
    ...mapState(['count']),
    /* store에 있는 state 안에 count를 가져온 것 */
    ...mapGetters(['limit'])
  },
  methods:{
    ...mapMutations(['changeCount']),
    /* store에 있는 mutations 안에 changeCount를 가져온 것 */
    ...mapActions(['requestCount']),    
    increment(){
      // this.changeCount(this.count+1)   ----> mutation 으로만 이용했을 때
    
      this.requestCount({type:'증가', num: this.count})
    },
    decrement(){
      // this.changeCount(this.count-1)   ----> mutation 으로만 이용했을 때
      
      this.requestCount({type:'감소', num: this.count})

    }
  }
}
</script>
<style lang="">
  
</style>