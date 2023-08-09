import { createApp } from 'vue';
import App from './App.vue';
import router from "./router/index";
/*import {firestorePlugin} from "vuefire";
import {firebaseApp} from "./firebase";*/
import './styles/index.css';

// create and mount root instance
const app = createApp(App);
/*app.use(firestorePlugin);*/
app.use(router)
app.mount('#app');

