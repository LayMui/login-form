import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import SecureComponent from "../views/secure.vue"
Vue.use(VueRouter)


const routes = [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
      path: "/secure",
      name: "secure",
      component: SecureComponent
  }
]
    
  
  
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router
  