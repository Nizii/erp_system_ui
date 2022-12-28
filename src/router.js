import Home from'./components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Customer from './components/Customer'
import InsertCustomer from './components/InsertCustomer'
import InputForm from './components/InputForm'
import Product from './components/Product'
import InsertProduct from './components/InsertProduct'
import CustomerBill from './components/CustomerBill'
import InsertCustomerBill from './components/InsertCustomerBill'

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
        name:'InsertCustomer',
        component:InsertCustomer,
        path:'/insertcustomer'
    },
    /*
    {
        name:'InputForm',
        component:InputForm,
        path:'/inputForm/:id/', name:'InputForm', component:InputForm, probs: true
    },
    */
    {
        name:'Product',
        component:Product,
        path:'/product'
    },
    {
        name:'InsertProduct',
        component:InsertProduct,
        path:'/insertproduct'
    },
    {
        name:'InsertProduct',
        component:InsertProduct,
        path:'/insertproduct'
    },
    {
        name:'CustomerBill',
        component:CustomerBill,
        path:'/customerBill'
    },
    {
        name:'InsertCustomerBill',
        component:InsertCustomerBill,
        path:'/insertcustomerbill'
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;