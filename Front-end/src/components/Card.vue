<template>
  <div class="border-4 rounded-xl ml-1 mb-1">
    <img v-bind:src="url" className="rounded-xl p-2" style="height: 200px;"/>
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
