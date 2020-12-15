<template>
  <div>
    <h1>Favoritos</h1>

    <div class="row" v-if="listaFavoritos.length > 0">
      <div v-for="(item) of listaFavoritos" :key="item.id" class="card" style="width: 18rem;">
        <div class="card-block d-flex flex-column">
          <img class="card-img-top" :src="item.image">
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <div class="d-flex justify-content-between">
              <a href="#" class="btn btn-primary" data-toggle="modal"
                 @click="eliminarFavoritos(item.id)"
                 data-target="#opinarPersonajeModal">Eliminar de Favoritos</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div>
        <div class="alert alert-primary" role="alert">
          Aún no existen favoritos seleccionados por el usuario...
        </div>
      </div>
    </div>
  </div>

</template>
<script>


import {mapGetters} from "vuex";

export  default {
  name: 'Favorito',
  methods:{
    eliminarFavoritos(id){
      console.log("eliminando :"+id);
      this.$store.dispatch("eliminarFavorito", id);
    }
  },

  computed: mapGetters([
    'listaFavoritos'
  ]),
}
</script>
