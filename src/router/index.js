import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'

Vue.use(Router)

export default new Router({
  routes: [ {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/sign_up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/sign_in',
    name: 'SignIn',
    component: SignIn
  }
  ]
})
