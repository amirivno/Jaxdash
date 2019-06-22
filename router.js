import Vue from 'vue'
import Router from 'vue-router'
import goTo from 'vuetify/lib/components/Vuetify/goTo'
import Home from './views/Home.vue'
import About from './views/About.vue'
import SignIn from './views/signin.vue'
import StudyPort from './views/studyPort.vue'
import Plan from './views/plan.vue'
import Strategy from './views/strategy.vue'
import Team from './views/team.vue'
import Projects from './views/projects.vue'

Vue.use(Router)

export default new Router({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/studyport',
      name: 'studyport',
      component: StudyPort
    },
    {
      path: '/plan',
      name: 'plan',
      component: Plan
    },
    {
      path: '/strategy',
      name: 'strategy',
      component: Strategy
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
  ]
})
