import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/test',
      name: 'test',
      component: () => import('./views/Test.vue')
    },

    {
      path: '/inshop',
      name: 'inshop',
      component: () => import( /* webpackChunkName: "about" */ './views/Inshop.vue')
    },
    {
      path: '/phone',
      name: 'phone',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "text-and-colors" */ './views/Phone.vue')
    },
    {
      path: '/delivery',
      name: 'delivery',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/Delivery.vue')
    },
    {
      path: '/timeclocksignin',
      name: 'timeclocksignin',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/TimeClockSignin.vue')
    },
    {
      path: '/ordersearch',
      name: 'ordersearch',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/OrderSearch.vue')
    },
    {
      path: '/customersearch',
      name: 'customersearch',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/CustomerSearch.vue')
    },
    {
      path: '/mainmenu',
      name: 'mainmenu',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/MainMenu.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/Admin.vue'),

    },
    {
      path: '/adminsignin',
      name: 'adminsignin',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/AdminSignin.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/Menu.vue'),
      props: (route) => ({
        orderID: route.query.order_id
      })
    },
    {
      path: '/deliverymenu',
      name: 'deliverymenu',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/DeliveryMenu.vue')
    },
    {
      path: '/pickupmenu',
      name: 'pickupmenu',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/PickupMenu.vue'),
      props: (route) => ({
        orderID: route.query.order_id,
        customerID: route.query.customer_id
      })
    },
    {
      path: '/orderComplete',
      name: 'orderComplete',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/orderComplete.vue')
    },
    {
      path: '/tombstone',
      name: 'tombstone',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/Sandwiches/Tombstone.vue')
    },
    {
      path: '/testpage',
      name: 'testpage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/TestPage.vue')
    },
    {
      path: '/newcustomer',
      name: 'newcustomer',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/NewCustomer.vue')
    },
    {
      path: '/customerprofile',
      name: 'customerprofile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/CustomerProfile.vue'),
      props: (route) => ({
        customerID: route.query.customerID
      })
    },
    {
      path: '/schedule',
      name: 'schedule',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/Schedule.vue')
    },
    {
      path: '/schedule1',
      name: 'schedule1',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/Schedule1.vue')
    },
    {
      path: '/addshift',
      name: 'addShift',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/Schedule/AddShift.vue')
    },

    {
      path: '/editshifts/:id',
      name: 'editShifts',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/Schedule/EditShifts.vue')
    },

    {
      path: '/shiftlist',
      name: 'shiftList',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/Schedule/ShiftList.vue')
    },

    {
      path: '/showshifts/:id',
      name: 'showShifts',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/Schedule/ShowShifts.vue')
    },
    {
      path: '/thisweeksschedule',
      name: 'thisWeeksSchedule',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/ThisWeeksSchedule.vue')
    },
    {
      path: '/nextweeksschedule',
      name: 'nextWeeksSchedule',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/NextWeeksSchedule.vue')
    },
    {
      path: '/reports',
      name: 'reports',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/Reports.vue')
    },
    {
      path: '/editschedule',
      name: 'editschedule',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/EditSchedule.vue')
    },
    {
      path: '/employeemanagement',
      name: 'employeemanagement',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/EmployeeManagement.vue')
    },
    {
      path: '/menumanagement',
      name: 'menumanagement',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/MenuManagement.vue')
    },
    {
      path: '/storedashboard',
      name: 'storedashboard',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/StoreDashboard.vue')
    },
    {
      path: '/timeclockmanagement',
      name: 'timeclockmanagement',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/TimeClockManagement.vue')
    },
    {
      path: '/inventorymanagement',
      name: 'inventorymanagement',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/InventoryManagement.vue')
    },
    {
      path: '/customermanagement',
      name: 'customermanagement',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/CustomerManagement.vue')
    },
    {
      path: '/payoutmanagement',
      name: 'payoutmanagement',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/PayOutManagement.vue')
    },
    {
      path: '/ordermanagement',
      name: 'ordermanagement',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "buttons-and-icons" */ './views/OrderManagement.vue')
    }





  ],

  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  }

})