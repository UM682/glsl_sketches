const title = 'sketches'
const description = 'sketches'
const url = 'https://sharp-mcnulty-a52ff3.netlify.app/'
const ogImage = `https://lh3.googleusercontent.com/hOjUfZCv3t0aJqcjG5JH98VN_64QlnHUbycNC1c08UIRGMPHkj-utp8eVZfcmCpqQyXQG-KYavIo_FRra4xU6GoK-3NHLcBEQ1nvC_AXTmqL4Wii4bsv5oJQoI5X5Hh6E9yx_viaiUk=w800-h450`

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'sketches',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'ogTitle', property: 'og:title', content: title },
      { hid: 'ogType', property: 'og:type', content: 'website' },
      { hid: 'ogUrl', property: 'og:url', content: url },
      {
        hid: 'ogImage',
        property: 'og:image',
        content: ogImage
      },
      { property: 'og:site_name', content: title },
      {
        hid: 'ogDescription',
        property: 'og:description',
        content: description
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitterSite', name: 'twitter:site', content: title },
      { hid: 'twitterUrl', name: 'twitter:url', content: url },
      { hid: 'twitterTitle', name: 'twitter:title', content: title },
      {
        hid: 'twitterDescription',
        name: 'twitter:description',
        content: description
      },
      {
        hid: 'twitterImage',
        name: 'twitter:image:src',
        content: ogImage
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } // ここを変更する
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'tachyons/css/tachyons.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend(config, ctx) {
      if (!!config.module) {
        config.module.rules.push({ test: /\.(vert|frag)$/i, use: ["raw-loader"] });
      }
    }
  }
}
