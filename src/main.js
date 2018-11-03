import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'
import './../node_modules/jquery/dist/jquery.min.js';
import animate from 'animate.css';


import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueScrollTo);
Vue.use(animate);



new Vue({
  el: '#app',
  render: h => h(App)
});

Vue.use(VueScrollTo, {
     container: "#container",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })
