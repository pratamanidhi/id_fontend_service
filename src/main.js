import Vue from 'vue'
import VueRouter from "vue-router"
import { BootstrapVue, IconsPlugin,  BootstrapVueIcons  } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import App from './App.vue'
import Index from './components/product/ListOfClient.vue'
import insert from './components/product/AddProduct.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    name : 'Index',
    path : '/',
    component : Index
  },
  {
    name : 'Insert',
    path : '/insert',
    component : insert
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
