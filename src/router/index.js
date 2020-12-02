import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'

import home from '../views/home/home'
import fenlei from '../views/fenlei/fenlei'
import gouwuche from '../views/gouwuche/gouwuche'
import wode from '../views/wode/wode'


Vue.use(Router)

const routes =[
    {
        path:'',
        redirect:'/home'
    },
    {
        path: '/home',
        component: home ,
    },
    {
        path: '/fenlei',
        component: fenlei ,
    },
    {
        path: '/gouwuche',
        component: gouwuche ,
    },
    {
        path: '/wode',
        component: wode ,
    }
]
const router= new VueRouter({
    routes,
    mode:'history'
})
export default router