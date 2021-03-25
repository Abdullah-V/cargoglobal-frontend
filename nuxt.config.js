// const secret = require('./secret.json')

// require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'CARGOGLOBAL',
    meta: [
      { charset: 'utf-8' },
      { name: 'language', content: 'tr-TR'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Cargoglobal lojistik ilanlarının paylaşılması için sitedir' },
      { name: 'author', content: 'Abdullah Veliyev'},
      { name: 'designer', content: 'Abdullah Veliyev' },
      { name: 'publisher', content: 'Abdullah Veliyev' },
      { name: 'web_author', content: 'Abdullah Veliyev' },
      { name: 'rating', content: 'general'},
      { name: 'revisit-after', content: '1 days'},
      { name: 'keywords', content: 'elan,lojistik,kargo,tır,ilan,cargoglobal,lojistik ilanları,yük maşını,yükdaşıma elanları'},
      { name: 'distribution', content: 'global' },
      { name: 'theme-color', content: '#fc1515' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // {rel: "stylesheet", href: "https://unpkg.com/aos@next/dist/aos.css"}
      ],
    script:[
      {src: 'https://kit.fontawesome.com/4d8d9d6354.js'},
      // {src: "https://unpkg.com/aos@next/dist/aos.js"}
      // {src: "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.6/lottie.min.js"}
    ]
  },

  router: {
    middleware: 'app'
  },

  loading: {
    color: '#fc1515',
    height: "5px",
    continuous: true
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/app.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/aos",
      ssr: false
    },
    {
      src: '~plugins/v-calendar.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-phone-number-input.js',
      ssr: false
    },
    {
      src: "~/plugins/globalErrorHandler.js",
      ssr: false
    },
    {
      src: '~/plugins/hello.js',
      ssr: false
    },
    {
      src: "~plugins/crisp.js",
      mode: "client"
    },
    {
      src: "~/plugins/vue-select.js",
      mode: 'client'
    }
  ],

  env: {
    API_URL: process.env.API_URL,
    // API_KEY: process.env.API_KEY,
  },

  // privateRuntimeConfig: {
  //   API_KEY: process.env.API_KEY
  // },
  // publicRuntimeConfig: {
  //   API_URL: process.env.API_URL
  // },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'tr',
      name: 'Cargoglobal',
      short_name: 'Cargoglobal',
      description: "Cargoglobal lojistik ilanlarının paylaşılması için sitedir",
      theme_color: "#fc1515",
    },
    meta: {
      author: 'Abdullah Veliyev',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // extend (config, ctx) {
  //   config.resolve.symlinks = false
  // },
  //
  // errorCaptured(err, vm, info) {
  //   console.log("sa1")
  // },
  //
  // renderError(createElement, err) {
  //   console.log("sa2")
  // }


}


// global.HTMLElement = typeof window === 'undefined' ? Object : window.HTMLElement
