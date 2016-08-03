import vApp from '../pages/index/index.js'
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
          //name: 'home',
          //component: vIndex
        }
      }
    }
  })
}