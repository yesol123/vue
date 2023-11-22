<template lang="">
      <li @click="itemAction(item.id)" :class="{active:check}"> {{item.title}} </li>
</template>
<script>
export default {
  props:['item', 'check'],
  /* props로 item을 받아옴 */
  data(){
    return{
      isActive : false
      /* 기본값을 false로 잡아줌 */
    }
  },
  methods: {
    itemAction(id){
      this.isActive = !this.isActive;
      /* 함수를 실행시키면 false가 true로 */
      
      this.$emit('parent', id)
      /* 해당 부모에게 실행시키는 함수 */
      console.log(id);
    }
  } 
}
</script>


<style lang="scss">
  .active{ color: blue; }
</style>