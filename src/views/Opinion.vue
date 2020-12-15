<template>
  <div>
    <h1>Opiniones</h1>
    <div v-if="listaOpiniones.length > 0">

      <div class="accordion" id="accordionExample">
        <div class="accordion-item" v-for="(item) of listaOpiniones" :key="item.id">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Opinion Sobre: {{item.personaje}}: realizado por {{item.usuario}}
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              {{item.opinion}}
            </div>
          </div>
        </div>

      </div>
    </div>

    <div v-else>
      <div>
        <div class="alert alert-primary" role="alert">
          Aún no existen Opiniones de los usuarios
        </div>
      </div>
    </div>
  </div>

</template>
<script>


import {mapGetters} from "vuex";

export  default {
  name: 'Opinion',
  methods:{

  },

  computed: mapGetters([
     'listaOpiniones'
  ]),
}
</script>
