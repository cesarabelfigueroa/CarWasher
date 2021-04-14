import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';


const firebaseConfig = {
  apiKey: "AIzaSyAMTjUuZvYTPQdc7xCor5fpAU1WXmPFUr0",
  authDomain: "carwasher-8831d.firebaseapp.com",
  projectId: "carwasher-8831d",
  storageBucket: "carwasher-8831d.appspot.com",
  messagingSenderId: "276606773528",
  appId: "1:276606773528:web:f13ce20b3bfc20af21166d",
  measurementId: "G-C8CYQB09JY"
};



firebase.initializeApp(firebaseConfig);

export const fb = firebase;
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

let app: any;

auth.onAuthStateChanged(async user => {
  console.log(user);
  if (!app) {
    app = createApp(App)
      .use(IonicVue)
      .use(router);

    router.isReady().then(() => {
      app.mount('#app');
    });
  }
})