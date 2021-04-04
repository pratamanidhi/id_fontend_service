import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import Index from './components/ListOfClient.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    name : 'Index',
    path : '/',
    component : Index
  }
];

const router = new VueRouter({
  mode : 'history',
  routes : routes
})

new Vue({
  router,
  render : h => h(App),
}).$mount('#app')
