import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routes from './routes'

import { isNewPlayer } from './helpers/index'

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
  console.log('Is new player', isNewPlayer())
  if (to.meta?.requiresExistingPlayer && isNewPlayer()) {
    next({ name: 'new-player' })
  } else {
    // Precisamos chamar a função next para que a rota "To" seja de fato 'executada'
    next()
  }

})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
