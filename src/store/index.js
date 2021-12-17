import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    name: ''
  },
  mutations: {
    increaseCounter(state){
      state.counter++
    },
    decreaseCounter(state){
      state.counter--
    },
    showName(state, name){
      console.log(name);
      state.name = name
    }
  },
  actions: {
    // for asynchronous code
    showName({commit}){
      console.log('showName (action)');
      fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
          // .then(json => console.log(json[0].name))
          .then(json => commit('showName',  json[0].name))
    }
  },
  modules: {
  }
})
