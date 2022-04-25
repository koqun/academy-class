<template>
  <div class="home">
    <table>
      <tr>
        <td>번호</td>
        <td>게시글</td>
        <td>조회수</td>
      </tr>

      <tr v-for="board in $store.state.boardlist" :key="board.id">
        <td>{{board.id}}</td>
        <!-- 클릭했을때 /board/board.id 위치로 이동하기 -->
        <!-- router-link를 사용하게되면 클릭이벤트 사용불가 -->
        <td @click="addcount(board.id)">{{board.title}}</td>
        <td>{{board.count}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  methods:{
    addcount(id) {
      this.$store.state.commit('addcount', id);
      this.$router.push(`/board/${id}`);
    }
  }
}
</script>
