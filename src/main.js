import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routes from './routes'

import store from './store/index'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // To: é um objeto com os dados da rota de destino (para onde o usuário está indo)
  // From: é um objeto com os dados da rota de origem (de onde o usuário está vindo)
  // Next: é a função que é executada quando entra na roda de destino
  console.log('Before each on route', to, from, next)

  if (to.meta.requiresNewPlayer && !store.getters.isNewPlayer) {
    next({ name: 'home' })
  } else if (to.meta.requiresExistingPlayer && store.getters.isNewPlayer) {
    next({ name: 'new-player' })
  } else {
    // Precisamos chamar a função next para que a rota "To" seja de fato 'executada'
    next()
  }
})

new Vue({
  router,
  render: h => h(App),
  store: store,
}).$mount('#app')
