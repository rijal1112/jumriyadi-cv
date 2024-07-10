// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
  app: {
    head: {
      title: "Muh Jumri Yadi Curriculum Vitae",
      link: [
        { rel: "stylesheet", href: "https://www.w3schools.com/w3css/4/w3.css" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto" },
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" },
      ],
    },
  },
});
