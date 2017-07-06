import Vue from 'vue';
import Router from 'vue-router';
import Blog48 from "blog/Blog48"

Vue.use(Router);

var routes = new Router({
    routes: [
        {
            path: "/a",
            component: Blog48
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