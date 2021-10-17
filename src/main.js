import Vue from 'vue'
import App from './components/App.vue'

// Vue Material
import VueMaterial from 'vue-material'
import 'vue-material/dist/theme/default.css'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueMaterial)

new Vue({
  el: '#app',
  render: h => h(App)
})
