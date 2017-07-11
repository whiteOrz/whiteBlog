import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var store = new Vuex.Store({
    state: {
        homePage: [],
        top48: [],
        blogContext: ""
    }
});

export default store;