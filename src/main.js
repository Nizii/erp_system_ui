import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import contextmenu from "v-contextmenu";
import "v-contextmenu/dist/themes/default.css";


createApp(App).use(router).use(contextmenu).mount('#app')
