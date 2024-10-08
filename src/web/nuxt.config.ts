// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxtjs/google-fonts"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: ["~/assets/css/main.css"],
  tailwindcss: {
    cssPath: ["~/assets/css/main.css", { injectPosition: "first" }],
  },
  googleFonts: {
    preload: true,
    families: {
      Roboto: [100, 200, 300, 400, 500, 700, 900],
    },
  },
});
