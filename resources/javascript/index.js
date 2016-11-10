// import 'whatwg-fetch';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './routes/application.vue';
import Index from './routes/index.vue';
import NewPost from './routes/new-post.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/app',
    name: 'index',
    component: Index,
  },
  {
    path: '/app/new-post',
    name: 'new-post',
    component: NewPost,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

const app = new Vue({ ...App, router }).$mount('.medium-editor');
