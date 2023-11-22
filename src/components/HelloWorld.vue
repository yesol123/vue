<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="test">{{ num }}</div>
    <img :src="reUrl" />
    <button @click="imgChange"> 이미지 변경</button>
  </div>
</template>

<script>
export default {
  data() {
    return { num: 10000, reUrl: '/img/09.jpg' }
  },
  name: 'HelloWorld', //컴포넌트 파일과 이름을 맞춰줘야함 대소문자 구분
  props: {
    msg: String
  },
  methods: {
    imgChange() {
      this.num = 300;
      this.reUrl = '/img/05.jpg'
      console.log(this.num);
    }
  },

  mounted() {
    const ele = document.querySelector('.hello');
    console.log('화면이 나타났다!!!!!', ele);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "/src/assets/css/test.scss";
</style>
