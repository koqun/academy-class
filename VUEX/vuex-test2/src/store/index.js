import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 컴포넌트의 data
    count:0,
    list: [
      {id:0, memo:"첫번째 내용입니다"}
    ]
  },
  getters: {
    // 컴포넌트의 computed
    // 인수값으로 항상 state를 들고옴 : state 값 수정(계산)
    listReverse(state){
      // 값 내보내기위해 return
      return state.list.reverse();
    }
  },
  mutations: {
    // 컴포넌트의 methods
    // 인수값으로 항상 state를 들고옴 : state 값 변형
    addcount(state){
      state.count++
    }
  },
  actions: {
    // mutation의 내용을 비동기적으로 사용
    // store의 내용을 들고옴(mutations 사용을 위해) : context
    timecount(context, time){
      setTimeout(function(){
        context.commit("addcount");
      }, time);
    }
  },
  modules: {
  }
})
