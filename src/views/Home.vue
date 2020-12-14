<template>
  <div class="row">

    <ListaPersonajes></ListaPersonajes>


  </div>

</template>

<script>
// @ is an alias to /src
import ListaPersonajes from "@/components/ListaPersonajes";

export default {
  name: 'Home',
  components: {
    ListaPersonajes
  }

}
</script>
