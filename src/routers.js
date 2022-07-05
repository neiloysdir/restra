import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import SignUp from '@/components/SignUp.vue'
import LoginPage from '@/components/Login.vue'
import AddRest from '@/components/AddRest.vue'
import EditRest from '@/components/EditRest.vue'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'AddRest',
        component: AddRest,
        path: '/AddRest'
    },
    {
        name: 'EditRest',
        component: EditRest,
        path: '/EditRest'
    },
    {
        name: 'LoginPage',
        component: LoginPage,
        path: '/Login'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/SignUp'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;