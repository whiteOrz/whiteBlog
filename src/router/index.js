import Vue from 'vue';
import Router from 'vue-router';
import BlogHomePage from "blog/BlogHomePage";
import Blog48 from "blog/Blog48";

Vue.use(Router);

var routes = new Router({
    routes: [
        {
            path: "/a",//首页
            component: BlogHomePage
        }, {
            path: "/b",//48小时阅读排行
            component: Blog48
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