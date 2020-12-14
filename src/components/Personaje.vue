<template>
  <div>
    <!-- Modal Personaje -->
    <div class="modal fade" id="verPersonajeModal" tabindex="-1" role="dialog" aria-labelledby="verPersonajeModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="verPersonajeModalLabel">{{$store.getters.getName}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <img class="card-img-top" :src="detallePersonaje.image">
              </div>
              <div class="col-6">
                <p><strong>Status:</strong> {{$store.getters.getStatus}}</p>
                <p><strong>Especie: </strong> {{$store.getters.getSpecies}}</p>
                <p><strong>Fecha Creacion: </strong> {{$store.getters.getFechaCreated}} </p>
                <p><strong>Episodios</strong>  {{$store.getters.getLocalizacion}}</p>
                <p><strong>Fecha Creación</strong> {{$store.getters.getCantidadEpiside}} </p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Agregar a Favoritos</button>
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
