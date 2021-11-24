import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import App from './App.vue'
import routes from './routes'

import { isNewPlayer } from './helpers/index'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // To: é um objeto com os dados da rota de destino (para onde o usuário está indo)
  // From: é um objeto com os dados da rota de origem (de onde o usuário está vindo)
  // Next: é a função que é executada quando entra na roda de destino
  console.log('Before each on route', to, from, next)
  console.log('Is new player', isNewPlayer())

  const computedIsNewPlayer = isNewPlayer()

  if (to.meta.requiresNewPlayer && !computedIsNewPlayer) {
    next({ name: 'home' })
  } else if (to.meta.requiresExistingPlayer && computedIsNewPlayer) {
    next({ name: 'new-player' })
  } else {
    // Precisamos chamar a função next para que a rota "To" seja de fato 'executada'
    next()
  }
})

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store = new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    complexCounterCalculation (state) {
      return state.count ** 5 / 3 - 4
    }
  },
  mutations: {
    increment (state, amount) {
      state.count += amount
    },
    decrement (state, amount) {
      state.count -= amount
    }
  },
  actions: {
    doubleCount(context) {
      context.commit('increment', context.state.count)
    }
  },
  plugins: [vuexLocal.plugin]
})

new Vue({
  router,
  render: h => h(App),
  store: store,
}).$mount('#app')
