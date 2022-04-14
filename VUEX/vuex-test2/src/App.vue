<template>
  <div id="app">
    <h1>{{$store.state.count}}</h1>
    <h3>{{listReverse}}</h3>
    <button @click="addcount">1씩 증가합니다</button>
    <button @click="timecount">1초 뒤 1 증가합니다</button>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    listReverse(){
      return this.$store.getters.listReverse;
    }
  },
  methods: {
    addcount() {
      this.$store.commit('addcount');
    },
    timecount(time) {
      // dispatch나 commit을 이용해서 값을 전달할때 하나만 전달가능
      // 
      this.$store.dispatch('timecount', time);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
