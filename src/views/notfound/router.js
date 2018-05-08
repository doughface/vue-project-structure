import App from './App.vue';
import Index from './Index.vue';

export default [{
  path: '/notfound',
  name: 'notfound',
  redirect: '/notfound/index',
  component: App,
  meta: {
    keepAlive: true // 需要被缓存
  },
  children: [{
    name: 'notfound',
    path: 'index',
    component: Index,
    meta: {
      keepAlive: true // 需要被缓存
    },
  }]
}]
