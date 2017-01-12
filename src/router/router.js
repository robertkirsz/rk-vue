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
    name: 'Intro',
    component: IntroPage,
    meta: { routeIndex: -1 }
  },
  {
    path: '/nav',
    name: 'Navigation',
    component: NavigationPage,
    meta: { routeIndex: 0 }
  },
  {
    path: '/me',
    name: 'Me',
    component: MePage,
    meta: { routeIndex: 1 }
  },
  {
    path: '/skills',
    name: 'Skills',
    component: SkillsPage,
    meta: { routeIndex: 2 }
  },
  {
    path: '/works',
    name: 'Works',
    component: WorksPage,
    meta: { routeIndex: 3 },
    children: [
      {
        path: ':id',
        name: 'Work',
        component: WorkPage,
        meta: { routeIndex: 3 }
      }
    ]
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
    meta: { routeIndex: 4 }
  },
  {
    path: '*',
    name: 'Not Found',
    component: NotFoundPage
  }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
