import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: 'My title',
        links: [
            { title: 'Twitter', url: 'https://codepen.io/netsi1964' },
            { title: 'Codepen', url: 'https://twitter.com/netsi1964' },
        ],
    },
    mutations: {},
    actions: {},
});
