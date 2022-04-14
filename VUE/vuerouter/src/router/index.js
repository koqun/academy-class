import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowView from '../views/ShowView.vue'
import DuplicateView from '../views/DuplicateView.vue'
import DynamicDuplicateView from '../views/DynamicDuplicateView.vue'

import CompOne from '../components/CompOne.vue'
import CompTwo from '../components/CompTwo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/show',
    name: 'show',
    component: ShowView
  },
  {
    path: '/duplicate',
    name: 'duplicate',
    component: DuplicateView,
    children: [
      {path:"1", component:CompOne},
      {path:"2", component:CompTwo}
    ]
  },
  {
    // path는 App.vue에서 사용할 링크
    path: '/dynamicduplicate',
    // name: 'dynamicduplicate',
    component: DynamicDuplicateView,
    children: function(){}
  },
]

// let check=false;

// 내비게이션 가드 확인
// 전역으로 만들어 두어서 이동할 때마다 라우팅이 발생하여 확인하기 어렵다
// router.beforeEach((to, from, next) => {
//   if(check){
//     console.log(check);
//     return next();
//   }
//   console.log(check);
//   check = true;
//   next({path:'/'});
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
