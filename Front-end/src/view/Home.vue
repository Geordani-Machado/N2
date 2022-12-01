<script>
import Card from '@/components/Card.vue';
import api from '../api/api.ts';

  export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    data(){
        return{
            ListCarros: []
        }
    },
    mounted(){
        api.get('/carro/')
        .then((Response)=>{
            this.ListCarros = Response.data;
            console.log(this.ListCarros)
        })
    },
    components: { Card }
}
  </script>
<template>
    
        <div className="p-5"> 
        <h1 className="ml-7 text-slate-600 text-xl font-semibold">Ritter Locações</h1>
         </div>

         <div className="w-screen flex justify-content align-items">
            <div className="w-10/12 mt-32 ml-32">
                <h1 className="text-5xl mt-32 text-slate-800 font-bold">
                    Ritter Locação de Carros.
                </h1>
                <h1 className="text-1xl  text-slate-800 font-bold">
                    Os melhores preços para você alugar um carro.
                </h1>
                <div className="py-1 mt-5 flex rounded-lg">
                    <div className="p-3 border-4 rounded-lg border-slate mr-3">
                       
                            <button> 🚙 Colocar meu carro para alugar </button>
                       
                    </div>
                    <div className="p-3 border-4 rounded-lg border-slate ml-3 mr-3">
                        
                            <button> 🚗 Alugar um Carro </button>
                        
                    </div>
                </div>
            </div>
            <div className="rounded-l-lg ...">
                <img className="border-3" src="../assets/hero-banner.jpg"/>
            </div>
         </div>

         <div classNAme="mt-15">
            <h1 className="text-1xl text-center mt-8 text-slate-800 font-bold animate-bounce">
                    Ver Modelos
                </h1>

                <div className=" grid-cols-4 gap-4 flex justify-center mt-12 mb-20 px-32" >
                    <Card v-for="(ListCarros, index) in ListCarros" :key="index"
                    :nome="ListCarros.nome"
                    :cor="ListCarros.cor"
                    :ano="ListCarros.Ano_Fabricante"/>
                    
                
                </div>
                
         </div>
    
     
      
        
        
      
     
      
     
      
  </template>
