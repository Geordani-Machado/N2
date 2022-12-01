<template>
  <div class="border-4 rounded-xl ">
    <img src="../assets/car-1.jpg" className="rounded-xl p-2"/>
    <h1>Nome: {{ nome }}</h1>
    <h1>Cor: {{ cor }}</h1>
    <h1> Ano Fabricação: {{ ano }}</h1>
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    nome: String,
    cor: String,
    ano: String,
  }
}
</script>
