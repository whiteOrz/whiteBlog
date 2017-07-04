import vue from "vue";
import app from "./App";
import router from './router';

new vue({
    el: "#app",
    router,
    render: h => h(app)
});