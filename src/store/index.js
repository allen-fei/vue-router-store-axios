import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        apiUrl: 
            process.env.NODE_ENV == 'development' ? 
            'http://cusp.x2x.cn:8500' : 
            'https://app.shenlijin.com',
        count: 0
    },
    mutations: {
        increment(state){
            state.count++
        }
    }
})