<template>
  <div>
    <h1>Editar Opinion</h1>

    <div class="row">
              <div class="col-12">
                <form>
                  <div class="form-group">
                    <label for="tuNombre">Tu nombre:</label>
                    <input v-model="usuario" value="$route.params.id"  type="text" class="form-control" id="tuNombre"  placeholder="Ingresa tu nombre">
                  </div>
                  <div class="form-group">
                    <label for="tuOpinion">Tu Opinion</label>
                    <textarea v-model="opinion" class="form-control" id="tuOpinion" rows="3"></textarea>
                  </div>

                  <div class="p-3">
                    <button class="btn btn-secondary m-3" @click="regresar()">Regresar</button>
                    <button class="btn btn-primary m-3" @click="actualizarOpinion()">Guardar</button>
                  </div>

                </form>
              </div>


    </div>
  </div>
</template>
<script>
export default {
  name: 'EditarOpinion',
  data: function () {
    return {
      id: this.$route.params.id,
      usuario:  this.$route.params.usuario,
      opinion: this.$route.params.opinion
    }
  },
  methods:{
      regresar(){
        this.$router.push({path: '/administracion'})
      },
    actualizarOpinion(){
      this.$store.dispatch("actualizarOpinion",[this.id, this.usuario, this.opinion]);
      this.$router.push({path: '/administracion'})
    }


  }
}
</script>
