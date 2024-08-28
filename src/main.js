const originalWarn = console.warn

console.warn = (message, ...optionalParams) => {
  if (![
    "Invalid prop: type check failed for prop \"icon\"",
    "Invalid prop: type check failed for prop \"editIcon\""
  ].some((warning) => message.includes(warning))) {
    originalWarn.apply(console, [ message, ...optionalParams ])
  }
}

import "./styles/settings.scss"
import "aos/dist/aos.css"
import "vuetify/styles"

import AOS from "aos"
import App from "./App.vue"
import router from "./router"
import Vue3Autocounter from "vue3-autocounter"

import { createPinia } from "pinia"
import { createApp } from "vue"
import { createVuetify } from "vuetify"
import { aliases, mdi } from "vuetify/iconsets/mdi-svg"
import { en } from "vuetify/locale"

const app = createApp(App)

app.component("AutoCounter", Vue3Autocounter)

app.use(AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  mirror: true
}))
app.use(createPinia())
app.use(createVuetify({
  icons: {
    aliases,
    defaultSet: "mdi",
    sets: { mdi }
  },
  locale: {
    locale: "en",
    messages: { en }
  },
  ssr: false,
  theme: {
    defaultTheme: "dark",
    themes: {
      dark: {
        colors: {
          accent: "#BD93F9",
          background: "#00040E",
          error: "#FF5555",
          info: "#8BE9FD",
          primary: "#FFB86C",
          secondary: "#50FA7B",
          success: "#50FA7B",
          text: "#F8F8F2",
          warning: "#FF79C6"
        },
        dark: true
      },
      light: {
        colors: {
          accent: "#BD93F9",
          background: "#DBDBCC",
          error: "#FF5555",
          info: "#8BE9FD",
          primary: "#FFB86C",
          secondary: "#50FA7B",
          success: "#50FA7B",
          text: "#00040E",
          warning: "#FF79C6"
        },
        dark: false
      }
    },
    variations: {
      colors: [ "accent", "background", "error", "info", "primary", "secondary", "success", "text", "warning" ],
      darken: 3,
      lighten: 3
    }
  }
}))
app.use(router)

app.mount("#app")
