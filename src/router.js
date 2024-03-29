import Home from'./components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'

import Customer from './components/Customer'
import InsertCustomer from './components/InsertCustomer'
import UpdateCustomer from './components/UpdateCustomer'

import InputForm from './components/InputForm'
//

import Product from './components/Product'
import InsertProduct from './components/InsertProduct'
import UpdateProduct from './components/UpdateProduct'

import CustomerBill from './components/CustomerBill'
import InsertCustomerBill from './components/InsertCustomerBill'
import UpdateCustomerBill from './components/UpdateCustomerBill'


import { createRouter, createWebHistory} from 'vue-router'

const routes = [
    /*
    {
        name:'Chart',
        component:Chart,
        path:'/chart'
    },
    */
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
    {
        name:'UpdateCustomer',
        component:UpdateCustomer,
        path:'/updatecustomer/:id/',
        probs: true
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
        name:'UpdateProduct',
        component:UpdateProduct,
        path:'/updateproduct/:id/',
        probs: true
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
    {
        name:'UpdateCustomerBill',
        component:UpdateCustomerBill,
        path:'/updatecustomerbill/:id/',
        probs: true
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;