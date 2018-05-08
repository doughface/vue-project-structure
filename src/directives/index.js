import Vue from 'vue'

let docs = require.context('./', true, /\.js$/)
docs.keys().forEach(item => {
  let docsItem = docs(item).default
  if (docsItem) {
    Vue.use(docsItem)
  }
})
