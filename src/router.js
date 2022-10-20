import Home from'./components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Customer from './components/Customer/Customer'
import AddCustomer from './components/Customer/AddCustomer'
import UpdateCustomer from './components/Customer/UpdateCustomer'
import Product from './components/Product/Product'
import AddProduct from './components/Product/AddProduct'
import UpdateProduct from './components/Product/UpdateProduct'
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
    },
    {
        name:'Product',
        component:Product,
        path:'/customer'
    },
    {
        name:'AddProduct',
        component:AddProduct,
        path:'/addProduct'
    },
    {
        name:'UpdateProduct',
        component:UpdateProduct,
        path:'/updateproduct/:id'
    }

];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;