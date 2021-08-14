import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

Vue.use(VueRouter)

//配置路由字典

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path:'/about',
    name: 'About',
    component: About
  },
  //跳转
  {
    path:'/',
    redirect: '/home'
  }

];

const router = new VueRouter({routes})

export default router