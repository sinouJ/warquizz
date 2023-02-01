import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'
import { nextTick } from 'vue'

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

const DEFAULT_TITLE = 'Warquizz'

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.afterEach((to, from) => {
    nextTick(() => document.title = to.meta.title || DEFAULT_TITLE)
})

export default router
