import Vue from 'vue'
const weex = require('weex-vue-render').WeexVueRender
/* global Vue */

weex.init(Vue)
/* weex initialized here, please do not move this line */
import router from './router'
const App = require('@/index.vue')
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App))
router.push('/')
