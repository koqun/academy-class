import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 번호, 제목, 본문, 조회수
    boardlist:[
      {id:1, title:"첫번째 게시글", memo:"첫번째 게시글 내용", count:0},
      {id:2, title:"두번째 게시글", memo:"두번째 게시글 내용", count:0},
    ]
  },
  getters: {
  },
  mutations: {
    addcount(state, id){
      // console.log(tihs.$store.state.boardlist[id-1])
      state.boardlist[id-1].count++;
    }
  },
  actions: {
  },
  modules: {
  }
})
