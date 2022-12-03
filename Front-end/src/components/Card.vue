<template>
  <div class="border-4 rounded-xl ml-1 mb-1">
    <img v-bind:src="url" className="rounded-xl justify-center ml-3" style="width: 280px;"/>
    <h1 class=" text-center text-slate-600 text-xl font-semibold">{{ nome }}</h1>
    <div class="flex justify-center">
      <h1 class="ml-2 mr-2">Cor: {{ cor }}</h1>
      <h1 class="ml-2 mr-2"> | </h1>
      <h1 class="ml-2 mr-2"> Ano Fabricação: {{ ano }}</h1>
    </div>
    <button class=" justify-center text-center ml-8 mt-2">Reservar</button>
   
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
