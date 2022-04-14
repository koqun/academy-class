<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/show">Show</router-link> |
      <router-link to="/duplicate">Duplicate</router-link> |
      <router-link to="/dynamicduplicate">Preset</router-link>
    </nav>

    <button @click="$router.push({name:'show'})"> show </button><br>
    <button @click="$router.push('/duplicate')"> duplicate </button><br>

    <button v-for="(num, i) in 4" :key="i"
            @click="$router.push(`/dynamicduplicate/${{num}}`)"> {{num}} </button><br>
            
    <button v-for="(num, i) in 4" :key="i"
            @click="$router.push({name:'first comp name', params:{id:num}})"> {{num}} </button><br>

    <a v-for="(num, i) in 4" :key="i">
      <!-- 주소값을 조합해서 출력하고 싶을 때 -->
      <!-- 바인드를 이용해서 문자열로 바꿔넣어서 수정가능 -->
      <router-link :to="`/dynamic/${num}`"> dynamic{{num}} </router-link>
    </a>

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-active {
  color: red;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
