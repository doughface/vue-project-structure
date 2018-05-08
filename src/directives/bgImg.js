function setBgImg(el, binding) {
  if (binding.value !== undefined) {
    el.style.backgroundSize = 'cover'
    el.style.backgroundPosition = 'center'
    el.style.backgroundImage = `url(${binding.value})`
  }
}
export default {
  install(Vue) {
    Vue.directive('bgImg', {
      inserted: setBgImg,
      updated: setBgImg
    })
  }
}
