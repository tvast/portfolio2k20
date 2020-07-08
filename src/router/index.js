import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HelloWorld from "../components/HelloWorld.vue";
Vue.use(VueRouter)

//A bit late for this but, in case if any of you are looking for I handled the situation like this: I added meta to my router:


//then on beforeeach function


const routes = [

  {
    path: '/',
    name: 'mainView',
    component: Home,
    meta: {
      'hasDesktopView ': true
    }
  },
  {
    path: '/mobile-view',
    name: 'mobileView',
    component: HelloWorld,
    meta: {
      'hasMobileView': true
    }
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/dashboard.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/contact.vue')
  }
]



const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const hasMobileView = to.matched.some((route) => route.meta.hasMobileView)
  if (hasMobileView) {
    if (navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)) {
      next('/mobile-view')
    } else {
      next()
    }
  }
})

export default router
