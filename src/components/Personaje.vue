<template>
  <div>
    <!-- Modal Personaje -->
    <div class="modal fade" id="verPersonajeModal" tabindex="-1" role="dialog" aria-labelledby="verPersonajeModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="verPersonajeModalLabel">{{ personaje.name }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <img class="card-img-top" :src="personaje.image">
              </div>
              <div class="col-6">
                <p>Status: {{personaje.status}}</p>
                <p> Especie: {{personaje.species}}</p>
                <p>Ubicacion: {{getUbicacion(personaje)}}</p>
                <p>Episodios: {{getCantidadEpisodios(personaje)}}</p>
                <p>Fecha Creacion: {{personaje.created}} </p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Personaje',
  data(){
    return {
      personaje: []
    }
  },
  props: {
    listaPersonajes: {}
  },
  methods:{

    async verPersonaje(id){
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
    }
  }
}
</script>
