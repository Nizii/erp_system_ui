import Home from'./components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Customer from './components/Customer'
import AddCustomer from './components/AddCustomer'
import UpdateCustomer from './components/UpdateCustomer'
import { createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'Customer',
        component:Customer,
        path:'/customer'
    },
    {
        name:'AddCustomer',
        component:AddCustomer,
        path:'/addCustomer'
    },
    {
        name:'UpdateCustomer',
        component:UpdateCustomer,
        path:'/updateCustomer/:id'
    }

];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;