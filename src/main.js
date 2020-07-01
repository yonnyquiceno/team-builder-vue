import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store/store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import TeamWidget from './components/TeamWidget'
import HelloWorld from './components/HelloWorld'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin) 

Vue.config.productionTip = false

const routes = [
  {path: '/team_builder', component: TeamWidget},
  {path: '/hello_world', component: HelloWorld, props: {msg: "Priori's Vue Prototype"}}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
