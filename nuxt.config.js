export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // RuntimeConfig: {
  //   gmail_client_id: process.env.GMAIL_CLIENT_ID,
  // },
  // privateRuntimeConfig: {
  //   myPrivateToken: process.env.PRIVATE_TOKEN
  // },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Streamo - Netflix Like VueJs Website Template',
    htmlAttrs: {
      lang: 'en'
    },
    script: [
      {
        src: 'https://accounts.google.com/gsi/client',
      },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel:"stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" 
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/material-design-iconic-font.min.css',
    '~/assets/css/swiper.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/vue-awesome-swiper.js', 
      ssr: false
    },
    '~/plugins/vue-observe-visibility.js',
    {
      src: '~/plugins/vue-plyr', 
      mode: 'client' 
    },
    {
      src: '~/plugins/vue-cool-lightbox.js', 
      ssr: false
    },
    {
      src: '~/plugins/click-outside.js', 
      ssr: false
    },
    {
      src: '~/plugins/vuejs-paginate.js'
    },
    {
      src: '~/plugins/vue-nav-tabs.js'
    },
    { src: "~/plugins/amplify.js", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    '@nuxtjs/dayjs',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // '@sidebase/nuxt-auth',    
  ],
  auth: {
    // Options
    strategies: {
      local: {
        token: {
          required: false,
          type: false
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
        }
      },
      github: { /* ... */ },
      social: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://accounts.google.com/o/oauth2/auth',
          token: undefined,
          userInfo: 'https://www.googleapis.com/oauth2/v3/userinfo',
          logout: 'https://example.com/logout'
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 1800
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },
        responseType: 'token',
        grantType: 'authorization_code',
        accessType: undefined,
        redirectUri: undefined,
        logoutRedirectUri: undefined,
        clientId: 'SET_ME',
        scope: ['openid', 'profile', 'email'],
        state: 'UNIQUE_AND_NON_GUESSABLE',
        codeChallengeMethod: '',
        responseMode: '',
        acrValues: '',
        // autoLogout: false
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}