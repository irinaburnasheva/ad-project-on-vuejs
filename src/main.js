import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import * as fb from 'firebase'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyB_sIvlFe-NNtm-9XtntymOoisfZbYUc3M',
      authDomain: 'ads-v-project.firebaseapp.com',
      databaseURL: 'https://ads-v-project.firebaseio.com',
      projectId: 'ads-v-project',
      storageBucket: 'ads-v-project.appspot.com',
      messagingSenderId: '272452568189',
      appId: '1:272452568189:web:c4b04f7be01954cd141d14'
    })
  },
  render: h => h(App)
}).$mount('#app')
