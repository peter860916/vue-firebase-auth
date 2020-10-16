import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import * as firebase from "firebase";
import store from "./store";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyBZe6nnTJEDxear8vJjvnmHLkQYEJJQAI0",
  authDomain: "gestion-recursos.firebaseapp.com",
  databaseURL: "https://gestion-recursos.firebaseio.com",
  projectId: "gestion-recursos",
  storageBucket: "gestion-recursos.appspot.com",
  messagingSenderId: "1083091933827",
  appId: "1:1083091933827:web:1c30ea64bcea60b42159b6"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
