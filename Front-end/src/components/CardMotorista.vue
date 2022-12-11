<template>
  <div class="rounded-xl ml-2 mb-1">
    <img class=" rounded-xl" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
    style="width: 30px;  justify-items: center; align-items: center; margin: auto;"/>
    <h1 class=" text-center text-slate-600 font-semibold">{{ nome }}</h1>
      <h1 class="ml-2 mr-2 text-center font-semibold">Idade: {{ idade }}</h1>
  </div>
</template>

<script>
 import {Masculino} from "@/assets/Masculino.png"
 import {Feminino} from "@/assets/Feminino.png"
export default {
  name: 'CardMotorista',
  props: {
    nome: String,
    idade: String,
    sexo: String,
  },
  methods:{
    ifSrc(){
      if(this.sexo=='M'){
        return Masculino
      }else{
         return Feminino
      }
    }
  }

}
</script>
