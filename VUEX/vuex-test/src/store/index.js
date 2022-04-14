import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:69,
    list:[
      {id:1, memo:'a'},
      {id:2, memo:'b'},
    ],
    name:[
      
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
