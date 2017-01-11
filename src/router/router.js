import Vue             from 'vue'
import VueRouter       from 'vue-router'
import IntroPage       from 'components/pages/IntroPage'
import NavigationPage  from 'components/pages/NavigationPage'
import MePage          from 'components/pages/MePage'
import SkillsPage      from 'components/pages/SkillsPage'
import WorksPage       from 'components/pages/WorksPage'
import WorkPage        from 'components/pages/WorkPage'
import ContactPage     from 'components/pages/ContactPage'
import NotFoundPage    from 'components/pages/NotFoundPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: IntroPage,
    meta: { routeIndex: -1 }
  },
  {
    path: '/nav',
    component: NavigationPage,
    meta: { routeIndex: 0 }
  },
  {
    path: '/me',
    component: MePage,
    meta: { routeIndex: 1 }
  },
  {
    path: '/skills',
    component: SkillsPage,
    meta: { routeIndex: 2 }
  },
  {
    path: '/works',
    component: WorksPage,
    meta: { routeIndex: 3 },
    children: [
      {
        path: ':id',
        component: WorkPage,
        meta: { routeIndex: 3 }
      }
    ]
  },
  {
    path: '/contact',
    component: ContactPage,
    meta: { routeIndex: 4 }
  },
  {
    path: '*',
    component: NotFoundPage
  }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
