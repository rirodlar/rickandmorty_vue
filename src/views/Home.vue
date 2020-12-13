<template>
  <div class="row">

    <div v-for="(item) of personajes" :key="item.id" class="card"  style="width: 18rem;">
      <div class="card-block d-flex flex-column">
          <img class="card-img-top" :src="item.image">
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
              <div class="d-flex justify-content-between">
                <a href="#" class="btn btn-primary">Opinar</a>
                <a href="#" class="btn btn-primary">ver</a>
            </div>
          </div>
      </div>
    </div>


  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return {
      personajes: []
    }
   },
  created() {
    this.getPersonajes()
  },
  methods:{
      async getPersonajes(){
        try {
          const personajes = await this.axios.get("https://rickandmortyapi.com/api/character");
          this.personajes = personajes.data.results;


        }catch (error){
            console.log(error);
        }
      }
  }
}
</script>
