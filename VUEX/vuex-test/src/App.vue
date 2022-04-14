<template>
  <div id="app">
    <!-- $store.state.count를 통해서 바로 값을 들고올수 있다. -->
    <h1>카운터에서 가져온 값 {{count}}</h1>

    <ul>
      <li v-for="list in $store.state.list" :key="list.id">{{list.memo}}</li>
    </ul>
  </div>

</template>

<script>

export default {
  name: 'App',
  computed:{
    // 머스태치 안의 내용이 길어지면 computed를 통해서 출력해줄수있다
    count:function(){
      return this.$store.state.count
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
