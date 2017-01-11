import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    counter: 0
  },
  getters: {
    counter: state => state.counter,
    doubleCounter: state => state.counter * 2
  },
  mutations: {
    increment (state, payload = {}) {
      state.counter += payload.amount || 1
    },
    decrement (state) {
      state.counter--
    }
  },
  actions: {
    asyncIncrement (context, payload) {
      setTimeout(() => {
        context.commit('increment', payload)
      }, 1000)
    }
  }
})
