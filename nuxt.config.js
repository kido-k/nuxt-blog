const pkg = require('./package')

module.exports = {
  mode: 'universal',
  srcDir: 'app',
  router: {
    middleware: ['auth-cookie']
  },

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: '#fff' },

  css: [
    'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/common.css'
  ],

  plugins: ['@/plugins/element-ui'],

  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL: 'https://nuxt-blog-service-e3b0b.firebaseio.com'
  }
}
