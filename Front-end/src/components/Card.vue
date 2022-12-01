<template>
  <div class="border-4 rounded-xl ">
    <img src="../assets/car-1.jpg" className="rounded-xl p-2"/>
    <h1>{{ nome }}</h1>
    <h1>Velocidade</h1>
    <h1>Ano</h1>
    <h1>tipo</h1>
    
    
    
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    nome: String,
    velocidade: String,
    ano: String,
    tipo: String
  }
}
</script>
