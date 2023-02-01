import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'

const routes = [
    {
        path: '/',
        component: Home,
        meta: { title: 'Warquizz - Bienvenue' }
    },
    {
        path: '/game',
        component: GameView,
        meta: { title: 'Warquizz - Quizz' }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router
