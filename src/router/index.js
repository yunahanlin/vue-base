import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/news',
          name: 'news',
          component: News
        }
      ]
    },
    {
      path:'/list',
      component:List
    }
  ]
})
