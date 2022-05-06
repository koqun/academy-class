import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// vuex의 store에서 따로 하므로 vue의 프로토타입에 넣지않고 사용

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: "",
    // memolist data
    memos: [
      {id: 1, writer: "익명", title: "제목"}
    ],
    // pagelist data
    memo: [
      {title: "제목", memo: "내용"}
    ],
    comment: [
      {writer: "익명", comment: "내용"}
    ]
  },
  getters: {
  },
  mutations: {
    loginuser(state, user){
      state.user= user;
    },
    changememolist(state, mlist) {
      state.memos = mlist;
    },
    changememo(state, memo){
      state.memo = memo;
    },
    changecomments(state, comments){
      state.comments = comments;
    }
  },
  actions: {
    getmemolist(){
      axios.get('/api/memo').then((response) => {
        // 가져온 response.data 값을 memos에 넣어줌
        commit("changememolist", response.data);
      })
    },
    // id값은 사용하는 컴포넌트에서 전달
    getmemo({commit}, id) {
      axios.get(`/api/memo/${id}`).then((response) => {
        // 가져온 response.data 값을 memo에 넣어줌
        commit("changememo", response.data);
      })
    },
    getcomment({commit}, id) {
      axios.get(`/api/comment/${id}`).then((response) => {
        // 가져온 response.data 값을 memo에 넣어줌
        commit("changecomments", response.data);
      })
    },
    // comment 객체를 컴포넌트에서 받아옴
    postcomment() {
      axios.post('/api/comment', {
        data:{
          comment: {comment}
        }
      }).then((response) => {
        console.log(response.data)
      });
    }
  },
  modules: {
  }
})
