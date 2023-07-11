import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './style.css';


//firebase
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCEXzIPwAIBYnB0eOgAuGTfezmeRffRTw4',
  authDomain: 'login-prueba-base.firebaseapp.com',
  projectId: 'login-prueba-base',
  storageBucket: 'login-prueba-base.appspot.com',
  messagingSenderId: '863293711818',
  appId: '1:863293711818:web:3f2298a4e0aba8b3e39b33',
  measurementId: 'G-J2H1MNY1JD'
};

// Initialize Firebase
initializeApp(firebaseConfig);
// end firebase

const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(router).mount('#app');
