// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
      ],
    css: ['~/assets/css/tailwind.css'],
    // app: {
        // pageTransition: { name: 'page', smode: 'out-in' },
        // head: {
        //   title: 'Nuxt 3 basic',
        //   meta: [{ name: 'description', content: 'Nuxt 3 for beginners' }],
        //   link: [{ rel: 'icon', href: '/icon.png' }],
        // },
    //   },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        public: {
          databaseURL: process.env.NOTION_DATABASE_ID
        },
        apiKey: process.env.NOTION_KEY
      }
})
