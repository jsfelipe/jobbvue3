import './assets/main.css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'jsvectormap/dist/jsvectormap.css'
import 'flatpickr/dist/flatpickr.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import VueApexCharts from 'vue3-apexcharts'
import { api, apiV2,  $api } from "./services/http";
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App)

// Configuração do vue3-toastify
app.use(toast, {
    autoClose: 3000, // Fecha automaticamente após 3 segundos
    position: 'top-right', // Posição das notificações
  });

// Adiciona $api como uma propriedade global
app.config.globalProperties.$api = api;
app.config.globalProperties.$apiV2 = apiV2;
app.config.globalProperties.$api = $api;

app.config.globalProperties.$http = (token) => $api(token);
app.config.globalProperties.$rt = router


app.use(router)
app.use(store)
app.use(VueApexCharts)

app.mount('#app')
