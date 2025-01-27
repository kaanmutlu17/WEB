import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import en from '@/lang/en'
import tr from '@/lang/tr'
import de from '@/lang/de'
import fr from '@/lang/fr'
import ru from '@/lang/ru'

let locale = localStorage.getItem("language") || navigator.language || navigator.userLanguage || 'en-US'

export default new VueI18n({
  locale,
  messages: {
    en,
    tr,
    de,
    fr,
    ru
  }
})
