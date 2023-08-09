import { createApp } from 'vue';
import App from './App.vue';
/*import {firestorePlugin} from "vuefire";
import {firebaseApp} from "./firebase";*/
import './styles/index.css';

const app = createApp(App);
/*app.use(firestorePlugin);*/
app.mount('#app');

