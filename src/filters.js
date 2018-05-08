import Vue from 'vue'

let filters = {
  init(val) {
    return 'filter init'
  }
}
for (var key in filters) {
  Vue.filter(key, filters[key])
}
