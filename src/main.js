import Vue from 'vue'
import App from './App.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faMailBulk, faPhone, faMobile, faEnvelope, faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin, faTwitter,faInstagram, faFacebook, faMobile,faPhone,faMailBulk, faEnvelope, faSearch);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
