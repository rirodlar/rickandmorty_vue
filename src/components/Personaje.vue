<template>
  <div>
    <!-- Modal Personaje -->
    <div class="modal fade" id="verPersonajeModal" tabindex="-1" role="dialog" aria-labelledby="verPersonajeModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="verPersonajeModalLabel">{{$store.getters.getPersonaje.name}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <img class="card-img-top" :src="$store.getters.getPersonaje.image">
              </div>
              <div class="col-6">
                <p><strong>Status:</strong> {{$store.getters.getPersonaje.status}}</p>
                <p><strong>Especie: </strong> {{$store.getters.getPersonaje.species}}</p>
                <p><strong>Ubiación: </strong> {{$store.getters.getLocalizacion}} </p>
                <p><strong>Episodios</strong>  {{$store.getters.getCantidadEpiside}}</p>
                <p><strong>Fecha Creación</strong> {{$store.getters.getPersonaje.created}} </p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" data-dismiss="modal"  @click="añadirFavorito( $store.getters.getPersonaje)" class="btn btn-primary">Agregar a Favoritos</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import {mapState} from "vuex";

export default {
  name: 'Personaje',

  computed: mapState([
    'detallePersonaje'
  ]),
/*  data(){
    return {
      personaje: []
    }
  },
  props: {
    listaPersonajes: {}
  },*/
  methods:{
    verPersonaje(id){
      console.log(id);
        console.log("verPersonaje");
      this.$store.dispatch("obtenerDetallePersonaje", id);
    },

    añadirFavorito(personaje){
      console.log("añadir a favoritos::"+personaje);
      this.$store.dispatch("añadirFavorito", personaje);

      this.$router.push('favorito')
    }

   /* async verPersonaje(id){
      try {
        console.log("id :"+id);
        this.personaje = await this.axios.get("https://rickandmortyapi.com/api/character/"+id);
        this.personaje = this.personaje.data;

      }catch (error){
        console.log(error);
      }
    },

    getUbicacion(personaje){
      if(personaje != null && personaje.location != null) {
        return personaje.location.name;
      }
    },

    getCantidadEpisodios(personaje){
      if(personaje != null && personaje.episode != null) {
        return personaje.episode.length;
      }
    }*/
  }
}
</script>
