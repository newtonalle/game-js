import Battle from './pages/Battle/Battle.vue'
import Home from './pages/Home/Home.vue'
import Inventory from './pages/Inventory/Inventory.vue'

export default [
    { path: '/', alias: ['/home'], component: Home },
    { path: '/battle', component: Battle },
    { path: '/inventory', component: Inventory }
]