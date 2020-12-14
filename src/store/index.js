import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: {
        numero: 10,
        detallePersonaje: {},
        listaPersonajes: [],
        favoritos: []
    },
    getters: {

        getName(state) {
            return state.detallePersonaje.name;
        },
        getSpecies(state){
              return state.detallePersonaje.species;
        },
        getFechaCreated(state){
            return state.detallePersonaje.created;
        },
        getStatus(state){
            return state.detallePersonaje.status;
        },
        getLocalizacion(state) {
            if (state.detallePersonaje.location != null) {
                return state.detallePersonaje.location.name;
            }
        },
        getCantidadEpiside(state) {
            if (state.detallePersonaje.episode != null) {
                return state.detallePersonaje.episode.length;
            }
        }
    },
    mutations: {
        aumentar(state) {
            state.numero++;
        },
        llenarPersonajes(state, listaPersonajes) {

            state.listaPersonajes = listaPersonajes.results;
        },

        obtenerDetallePersonaje(state, listaPersonaje) {
            state.detallePersonaje = listaPersonaje;
        }
    },
    actions: {
        obtenerPersonajes({commit}) {
            console.log("obtenerPersonajes");

            axios
                .get('https://rickandmortyapi.com/api/character')
                .then(r => r.data)
                .then(result => {
                    commit('llenarPersonajes', result)
                })

        },
        obtenerDetallePersonaje({commit}, id) {
            console.log("obtenerPersonaje");

            axios
                .get('https://rickandmortyapi.com/api/character/' + id)
                .then(r => r.data)
                .then(result => {
                    commit('obtenerDetallePersonaje', result)
                })

        }
    },
    modules: {}
})
