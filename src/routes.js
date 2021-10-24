import Battle from './pages/Battle/Battle.vue'
import Home from './pages/Home/Home.vue'
import Inventory from './pages/Inventory/Inventory.vue'
import NewPlayer from './pages/NewPlayer/NewPlayer.vue'
import TutorialJs from './pages/TutorialJs/TutorialJs.vue'

// Export default significa que toda vez que imporarem este arquivo diretamente, sem especificar
// uma função especifica, o que será exportado é o array [...]
export default [
    { path: '/', alias: ['/home'], component: Home, name: 'home' },
    { path: '/tutorial-js', component: TutorialJs },
    { path: '/new-player', component: NewPlayer, name: 'new-player', meta: { requiresNewPlayer: true } },
    { path: '/battle', component: Battle, meta: { requiresExistingPlayer: true } },
    { path: '/inventory', component: Inventory, meta: { requiresExistingPlayer: true } },
]