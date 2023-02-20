import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import about from '../components/pages/about.vue'
import works from '../components/pages/works.vue'
import reviews from '../components/pages/reviews.vue'


const routes = [
    {
        alias: '/admin',
        component: about,
    },
    {
        alias: '/admin/works',
        component: works,
    },
    {
        alias: '/admin/reviews',
        component: reviews,
    },
];

export default new VueRouter({ routes, mode: 'history' });