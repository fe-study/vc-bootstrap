import router from './router/index.js'
import Vue from 'vue'
import './index.less'

Vue.config.devtools = true

router.init(Vue.extend({}), '#vcBootstrap')
