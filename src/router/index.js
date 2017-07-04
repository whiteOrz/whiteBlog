import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

var routes = new Router({
    routes: [
        {
            path: "/a",
            component: {
                template: '<div>a</div>'
            }
        }, {
            path: "/b",
            component: {
                template: '<div>b</div>'
            }
        }, {
            path: "/c",
            component: {
                template: '<div>c</div>'
            }
        }, {
            path: '/',
            redirect: "/a"
        }
    ]
});

export default routes;