// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favico.png" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@vueuse/nuxt"],
  ssr: false,
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
  i18n: {
    baseUrl: "my-happy-page.de",
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
    locales: [
      {
        name: "Deutsch",
        code: "de-DE",
        iso: "de-DE",
        dir: "ltr",
        file: "de-DE.ts",
      },
      {
        name: "English",
        code: "en-GB",
        iso: "en-GB",
        dir: "ltr",
        file: "en-GB.ts",
      },
    ],
    langDir: "lang",
    lazy: true,
    defaultLocale: "de-DE",
    detectBrowserLanguage: false,
  },
});
