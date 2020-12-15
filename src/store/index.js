import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: {
        id: 0,
        name: '',
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
        listaFavoritos(state) {
            return state.favoritos;
        },
        listaOpiniones(state) {
            return state.opiniones;
        }
    },
    mutations: {

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
        eliminarOpinion(state, id) {

            let pos =   this.state.opiniones.findIndex(p => p.id === id)

            this.state.opiniones.splice(pos,1);

        },

        opinar(state, params) {
           let personaje =  this.state.listaPersonajes.filter(p => p.id == params[0])
            console.log(personaje[0])
            state.opiniones.push({
                id: params[0],
                personaje : personaje[0].name,
                usuario: params[1],
                opinion: params[2]
            });
        },

        actualizarOpinion(state, params) {
            let opinion =  this.state.opiniones.filter(p => p.id == params[0])
            console.log("actualizsr opinion ::" +opinion)
            opinion[0].usuario = params[1];
            opinion[0].opinion = params[2];
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
        },
        eliminarOpinion({commit}, id) {
            console.log("eliminar Opinion(store)" + id);
            commit('eliminarOpinion', id);
        },
        actualizarOpinion({commit}, id, usuario, opinion) {
            console.log("eliminar favorito(store)" + id);
            commit('actualizarOpinion', id, usuario, opinion);
        },


    },
    modules: {}
})
