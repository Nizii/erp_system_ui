import MyHome from'./components/MyHome.vue'
import SingUp from './components/SignUp.vue'
import { createRouter, createWebHistory} from 'vue-router'
import Login from './components/Login.vue'

const routes = [
    {
        name:'MyHome',
        component:MyHome,
        path:'/'
    },
    {
        name:'SignUp',
        component:SingUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    }

];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;