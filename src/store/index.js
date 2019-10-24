import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
        ff: 1,
        user: {
            id: 'a',
            password: 'a',
			name: '이수재'
        },
        logined: false
    },

    mutations: {
        incrementCounter(state, payload) {
            state.count += payload;
        },
        login: function(state, param) {
			if(	state.user.id == param.uid && state.user.password == param.upw){
				state.logined = true;				
			}

        }
    },

    actions: {
        inrementAction({ commit }, payload) {
            commit('incrementCounter', payload);
        }
    },

    getters: {
        counter(state) {
            return state.count;
        },
        ff(state) {
            return state.ff;
        }
    }
});