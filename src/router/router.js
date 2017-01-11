import Vue          from 'vue'
import VueRouter    from 'vue-router'
import MePage       from 'components/MainContent/MePage'
import SkillsPage   from 'components/MainContent/SkillsPage'
import WorksPage    from 'components/MainContent/WorksPage'
import WorkPage     from 'components/MainContent/WorkPage'
import ContactPage  from 'components/MainContent/ContactPage'
import NotFoundPage from 'components/NotFoundPage'

Vue.use(VueRouter)

const routes = [
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
