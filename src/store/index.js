import Vue from 'vue'
import Vuex from 'vuex'

import counter from '@/store/modules/counter'
import qiita from '@/store/modules/qiita'
import graph from '@/store/modules/graph'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter,
    qiita,
    graph
  }
})