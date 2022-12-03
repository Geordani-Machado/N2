<template>
  <div class="border-4 rounded-xl ml-1 mb-1">
    <img v-bind:src="url" className="rounded-xl " style="height: 170px;"/>
    <h1>Nome: {{ nome }}</h1>
    <h1>Cor: {{ cor }}</h1>
    <h1> Ano Fabricação: {{ ano }}</h1>
    <button >Reservar</button>
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    nome: String,
    cor: String,
    ano: String,
    url: String
  }
}
</script>
