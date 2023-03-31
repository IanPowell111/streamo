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
    title: 'My Sweet Sport - Develop your consciousness',
    htmlAttrs: {
      lang: 'en'
    },
    script: [
      {
        src: "https://js.stripe.com/v3/",
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
    {
      src: "~/plugins/amplify.js", 
      ssr: false
    },
    { 
      src: "~/plugins/stripe.js", 
      ssr: false 
    }
  ],
  env: {
    STRIPE_PK: process.env.STRIPE_PUBLISHABLE_KEY,
  },
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
    // '@nuxtjs/tailwindcss', 'nuxt-icon' 
    '@nuxtjs/toast',
    "@nuxtjs/axios", 
    "@nuxtjs/proxy"
  ],
  axios: {
    proxy: false,
  },
  toast: {
      position: 'top-right',
      duration: 5000,
      transition: {
        name: 'fadeIn',
      },
      pauseOnHover: true,
      maxToasts: 5,
      register: [ // Register custom toasts
        {
          name: 'my-error',
          message: 'Oops...Something went wrong',
          options: {
            type: 'error'
          }
        }
      ]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["axios"], // Description: Avoid duplicate packaging.
  }
}
