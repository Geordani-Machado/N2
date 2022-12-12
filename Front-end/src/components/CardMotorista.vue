<template>
  <div class="rounded-xl ml-2 mb-1">
    <img class=" rounded-xl" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
    style="width: 30px;  justify-items: center; align-items: center; margin: auto;"/>
    <h1 class="ml-2 text-center text-slate-600 font-semibold font-mono">{{ nome }}</h1>
      <h1 class=" ml-2 text-center font-semibold font-mono">Idade: {{ idade }}</h1>
  </div>
</template>

<script>

export default {
  name: 'CardMotorista',
  props: {
    nome: String,
    idade: String,
    sexo: String,
  }
}
</script>
