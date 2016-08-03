import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import router from './route.js'

const vueRouter = new VueRouter({
	history: false
})

router(vueRouter)

export default {
	init: function(app, selector){
		vueRouter.start(app, selector)
	},
	router: function(){
		return vueRouter
	}
}
