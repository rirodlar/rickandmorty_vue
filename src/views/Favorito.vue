<template>
  <div class="about">
    <h1>This is an Favorito page: {{$store.state.numero}}</h1>
    <button @click="$store.commit('aumentar')">+</button>
  </div>
</template>
<script>
export  default {
  name: 'Favorito'
}
</script>
