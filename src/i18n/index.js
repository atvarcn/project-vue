import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './config/zh.js'
import en from './config/en.js'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages: { zh, en }
})

export default i18n
