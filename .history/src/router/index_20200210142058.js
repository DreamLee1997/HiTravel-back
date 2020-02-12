import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  {path: '/login', component: () => import('@/views/login/index'), hidden: true},
  {path: '/404', component: () => import('@/views/404'), hidden: true},
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: {title: '首页', icon: 'home'}
    }]
  },
  {
    path:'/ums',
    component: Layout,
    redirect: '/ums/user',
    name: 'ums',
    meta: {title: '用户管理', icon: 'order'},
    children: [
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/ums/user/user'),
        meta: {title: '用户列表', icon: 'product-list'}
      },
      {
        path: '',
        name: 'modifyUserInfo',
        component: () => import('@/views/ums/modifyUserInfo/modifyUserInfo.vue'),
        meta: {title: '用户审核', icon: 'order-return-reason'},
      },
    ]
  },
  {
    path:'/tms',
    component: Layout,
    redirect: '/tms/strategy',
    name: 'tms',
    meta: {title: '攻略管理', icon: 'product'},
    children: [
      {
        path: 'strategy',
        name: 'strategy',
        component: () => import('@/views/tms/strategy/strategy'),
        meta: {title: '攻略列表', icon: 'product-list'}
      },
      {
        path: 'strategyVerify',
        name: 'strategyVerify',
        component: () => import('@/views/tms/strategyVerify/strategyVerify'),
        meta: {title: '攻略审核', icon: 'order-setting'}
      },
    ]
  },
  {
    path: '/hms',
    component: Layout,
    redirect: '/hms/hotel',
    name: 'hms',
    meta: {title: '酒店管理', icon: 'table'},
    children: [
      {
        path: 'hotel',
        name: 'hotel',
        component: () => import('@/views/hms/hotel/hotel'),
        meta: {title: '酒店列表', icon: 'product-list'}
      },
      {
        path: 'hotelAudit',
        name: 'hotelAudit',
        component: () => import('@/views/hms/hotelAudit/hotelAudit'),
        meta: {title: '酒店审核', icon: 'order-setting'},
        // hidden:true
      }
    ]
  },
  {
    path: '/sms',
    component: Layout,
    redirect: '/sms/scenic',
    name: 'sms',
    meta: {title: '景区管理', icon: 'sms'},
    children: [
      {
        path: 'scenic',
        name: 'scenic',
        component: () => import('@/views/sms/scenic/scenic'),
        meta: {title: '景区列表', icon: 'product-list'}
      },
      {
        path: 'scenicVerify',
        name: 'scenicVerify',
        component: () => import('@/views/sms/scenicVerify/scenicVerify'),
        meta: {title: '景区审核', icon: 'order-setting'},
        // hidden:true
      }
    ]
  },
  {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

