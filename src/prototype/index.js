import Vue from 'vue'

let docs = require.context('./', true, /\.js$/)
docs.keys().forEach(item => {
  let docsItem = docs(item).default
  let fileName = item.replace('./','').replace('.js','');
  if (fileName.toLowerCase() !== 'index') {
    Vue.prototype[fileName] = docsItem
  }
})
