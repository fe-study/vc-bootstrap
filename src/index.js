import router from './router/index.js'
import Vue from 'vue'

Vue.config.devtools = true

router.init(Vue.extend({}), '#vcBootstrap')
