import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router)
  .mount("#app");
  

// dark mode
let toggler = document.querySelector(".yes");
let fullscreen = document.querySelector("#app");

toggler.addEventListener('click', () => {
    fullscreen.classList.toggle("dark");
})