import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: {
        id: 0,
        detallePersonaje: {},
        listaPersonajes: [],
        favoritos: [],
        opiniones: []
    },
    getters: {


        getPersonaje(state) {
            return state.detallePersonaje;
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
        },
        getFavoritos(state) {
            return state.favoritos;
        },
        getOpiniones(state) {
            return state.opiniones;
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
        },
        añadirFavorito(state, personaje) {
            let isRepetido = false;
            state.favoritos.forEach(per => {
                if (per.id == personaje.id) {
                    isRepetido = true;
                    return;
                }
            })
            if (!isRepetido) {
                state.favoritos.push({
                    id: personaje.id,
                    name: personaje.name,
                    image: personaje.image
                });
            }
        },
        eliminarFavorito(state, id) {
            console.log(id);

          let pos =   this.state.favoritos.findIndex(p => p.id === id)

            this.state.favoritos.splice(pos,1);

        },

        opinar(state, params) {
            console.log("Opinar ::"+params);

            state.opiniones.push({
                id: params[0],
                name: params[1],
                opinion: params[2]
            });
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

        },
        añadirFavorito({commit}, personaje) {
            console.log("añadir favorito(store)" + personaje);
            commit('añadirFavorito', personaje);
        },
        eliminarFavorito({commit}, id) {
            console.log("eliminar favorito(store)" + id);
            commit('eliminarFavorito', id);
        },
        opinar({commit}, id, nombre, opinion) {
            console.log("eliminar favorito(store)" + id);
            commit('opinar', id, nombre, opinion);
        }
    },
    modules: {}
})
