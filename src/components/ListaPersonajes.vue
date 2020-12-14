<template>
    <div class="row">
      <div v-for="(item) of listaPersonajes" :key="item.id" class="card"  style="width: 18rem;">
        <div class="card-block d-flex flex-column">
          <img class="card-img-top" :src="item.image">
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <div class="d-flex justify-content-between">
              <a href="#" class="btn btn-primary" @click="veopinarrPersonaje(item.id)" data-toggle="modal" data-target="#opinarPersonajeModal">Opinar</a>
              <a href="#" class="btn btn-primary" @click="verPersonaje(item.id)" data-toggle="modal" data-target="#verPersonajeModal">ver</a>
            </div>
          </div>
        </div>
      </div>

      <Personaje ref="personaje"></Personaje>
      <Opinar></Opinar>

    </div>


</template>

<script>
import Personaje from "@/components/Personaje";
import Opinar from "@/components/Opinar";

import { mapState } from 'vuex'

export default {


  name: 'ListaPersonajes',
  components: {Personaje, Opinar},


  mounted() {
    this.$store.dispatch("obtenerPersonajes");
  },
  computed: mapState([
    'listaPersonajes'
  ]),
  methods: {

    verPersonaje(id) {

         this.$refs.personaje.verPersonaje(id);

    }
  }
}

</script>

