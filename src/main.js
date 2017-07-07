import vue from "vue";
import app from "./App";
import router from './router';
import store from "./store";

new vue({
    el: "#app",
    store,
    router,
    render: h => h(app)
});