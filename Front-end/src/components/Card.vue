<template>
  <div class="border-4 rounded-xl ml-1 mb-1 justify-center">
    <img v-bind:src="url" className="rounded-xl justify-center items-center" style="width: 280px; 
    height: 160px; justify-items: center;"/>
    <h1 class=" text-center text-slate-600 text-xl font-semibold">{{ nome }}  #{{ id }} </h1>
    <div class="flex justify-center">
      <h1 class="ml-2 mr-2">Cor: {{ cor }}</h1>
      <h1 class="ml-2 mr-2"> | </h1>
      <h1 class="ml-2 mr-2"> Ano: {{ ano }}</h1>
    </div>
    <div class="flex justify-center">
    <div class="flex justify-center">
      <img src="https://cdn-icons-png.flaticon.com/512/4564/4564336.png" 
      className="justify-center" style="width: 28px;"/>
      {{Eletrico ? 'Verdadeiro' : 'Falso '}}
      <h1 class="ml-2 mr-2"> | </h1>
    </div>
    <div class=" justify-center">
      <h1 class="ml-2 mr-2">Portas: {{ Portas }}</h1>
    </div>
    </div>
    <div class="w-full h-full flex  mt-1 justify-center">
      <ReservaButton class="w-full h-full flex"/>
    </div>
    
  </div>
</template>

<script>
import ReservaButton from '@/components/Modal/reserve.vue'

export default {
  name: 'HelloWorld',
  props: {
    nome: String,
    cor: String,
    ano: String,
    url: String,
    Eletrico: Boolean,
    Portas : String,
    id: String
  },
  components: {  ReservaButton  }
}

</script>
