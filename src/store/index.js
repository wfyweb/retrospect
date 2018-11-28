import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: { // 初始化数据，只要有可能的用到的最好都初始化
    data: {},
    Loading: false
  },
  actions: {
    // 封装一个ajax方法
    saveForm (context, url) {
      axios.get('http://localhost:8200/webService/query?' + url, context.state.test)
        .then(res => { // 调用接口
          context.commit('handleLoading')
          context.commit('changeData', res.data) // 通过接口获取的后台数据保存到store中，等待组件取用
        })
    }
  },
  mutations: {
    changeData (state, obj) { // store中的数据只能通过commit mutation来改变
      state.data = obj
    },
    handleLoading (state) {
      state.Loading = true
    }
  }
})

export default store
