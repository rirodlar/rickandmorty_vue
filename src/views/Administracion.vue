<template>
  <div>
    <h1>Administracion</h1>
    <div v-if="listaOpiniones.length > 0">

      <table class="table">
        <thead>
        <tr>
          <th scope="col">N°</th>
          <th scope="col">Personaje</th>
          <th scope="col">Opinion</th>
          <th scope="col">Usuario</th>
          <th scope="col">Eliminar</th>
          <th scope="col">Editar</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, key) of listaOpiniones" :key="item.id">
          <th scope="row">{{key+1}}</th>
          <td>{{ item.personaje }}</td>
          <td>{{ item.opinion }}</td>
          <td>{{item.usuario}}</td>
          <td><button class="btn btn-danger" @click="eliminarOpinion(item.id)">Eliminar</button></td>
          <td><button class="btn btn-light" @click="editarOpinion(item.id, item.usuario, item.opinion)">Editar</button></td>
        </tr>

        </tbody>
      </table>
    </div>

    <div v-else>
      <div>
        <div class="alert alert-primary" role="alert">
          No existen datos para administrar
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
    eliminarOpinion(id){
      //alert("eliminar Pendiente :"+id);
      this.$store.dispatch("eliminarOpinion", id);
    },
    editarOpinion(id, usuario, opinion){
      console.log(id);
      //alert("Editar Pendiente "+id);
      this.$router.push({name: 'EditarOpinion', params: {
        id: id,
          usuario: usuario,
          opinion: opinion
       }
      }
      )
    }
  },

  computed: mapGetters([
    'listaOpiniones'
  ]),
}
</script>
