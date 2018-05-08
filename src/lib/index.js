import Vue from 'vue'

let libdocs = require.context('./', true, /\.js$/)
libdocs.keys().forEach(item => {
  let libItem = libdocs(item).default
  if (libItem) {
    Vue.use(libItem)
  }
})