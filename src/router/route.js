import vApp from '../pages/index/index.js'
import vHello from '../components/helloworld/helloworld.vue'
import vDoc from '../pages/doc/doc.js'

/*
 * vue router
 */

export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: vApp,
      subRoutes: {
        '/': {
          name: 'index',
          component: vHello
        },
        '/document': {
          name: 'document',
          component: vDoc
        }
      }
    }
  })
}