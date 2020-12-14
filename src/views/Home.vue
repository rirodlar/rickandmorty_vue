<template>
  <div class="row">

    <ListaPersonajes :listaPersonajes="listaPersonajes"></ListaPersonajes>


  </div>

</template>

<script>
// @ is an alias to /src
import ListaPersonajes from "@/components/ListaPersonajes";

export default {
  name: 'Home',
  components: {
    ListaPersonajes
  },
  data(){
    return {
      listaPersonajes: []
    }
   },
  created() {
    this.getPersonajes()
  },
  methods:{
      async getPersonajes(){
        try {
          const listaPersonajes = await this.axios.get("https://rickandmortyapi.com/api/character");
          this.listaPersonajes = listaPersonajes.data.results;


        }catch (error){
            console.log(error);
        }
      }
  }
}
</script>
