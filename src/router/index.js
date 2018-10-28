import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes';

Vue.use(Router);

let router = new Router({
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});

export default router
