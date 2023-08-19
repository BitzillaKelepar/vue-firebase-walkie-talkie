import { createApp } from 'vue';
import App from './App.vue';
import router from "./router/index";

// import Tailwind CSS
import './styles/index.css';

// create and mount root instance
const app = createApp(App);

// use router
app.use(router)
app.mount('#app');

