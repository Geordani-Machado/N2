<script>
import Card from '@/components/Card.vue';
import CardMotorista from "@/components/CardMotorista"
import  CreateButton from '@/components/Modal/create.vue';
import ReservaButton from '@/components/Modal/reserve.vue'
import api from '../api/api.ts';

  export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    data(){
        return{
            ListCarros: [],
            ListMotorista: []
        }
    },
    mounted(){
        api.get('/carro/',
            ).then((Response)=>{
            this.ListCarros = Response.data;
        })

        api.get('/motorista/')
        .then((Response)=>{
            this.ListMotorista = Response.data;
            
        })
    },
    components: { Card, CreateButton, ReservaButton , CardMotorista }
}
  </script>
<template>
    
        <div className="p-5 flex"> 
        <h1 className="ml-7 text-slate-600 text-xl font-semibold">Ritter Locações</h1>
        <h1 className="ml-32 text-slate-600  font-semibold">Alugar Carro</h1>
        <h1 className="ml-7 text-slate-600  font-semibold">Colocar Carro para alugar</h1>
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
                    <div class="mr-2">
                        <CreateButton/>
                    </div>
                            
                        <ReservaButton/>
                </div>

                <div className="text-1xl mt-10 text-slate-800 font-bold">

                Motoristas
                <div className="flex mt-2 mb-20" >
                    <div v-for="(ListMotorista, index) in ListMotorista" :key="index">
                        <CardMotorista
                        :nome="ListMotorista.nome"
                        :idade="ListMotorista.idade"
                        :sexo="ListMotorista.sexo"
                    />
                    </div>
                    </div>
                </div>
            </div>
            <div className="rounded-l-lg ...">
                <img className="border-3" 
                src="../assets/hero-banner.jpg"/>
            </div>
         </div>

         <div classNAme="mt-18">
            <h1 className="text-1xl text-center mt-8
             text-slate-800 font-bold animate-bounce"> 
             Ver Modelos </h1> 
            <div class="flex justify-center">
            <div className="ml-8 w-2/12">
                <h1 className="text-slate-600 text-xl font-semibold mt-12">Filtros</h1>
                <div className="mt-4">
                    <label>Cores</label><br/>
                    <input 
                    id="link-checkbox" 
                    type="checkbox" 
                    value="vermelho" 
                    class="w-4 h-4">
                    Vermelho
                    <br/>
                    <input 
                    id="link-checkbox" 
                    type="checkbox" 
                    value="vermelho" 
                    class="w-4 h-4">
                    Verde
                    <br/>
                    <input 
                    id="link-checkbox" 
                    type="checkbox" 
                    value="vermelho" 
                    class="w-4 h-4">
                    Preto
                    <br/>
                    <input 
                    id="link-checkbox" 
                    type="checkbox" 
                    value="vermelho" 
                    class="w-4 h-4">
                    Vermelho
                    <br/>
                    
                </div>

                <div className="mt-4">
                    <label>Anos</label><br/>
                    <input 
                    id="link-checkbox" 
                    type="checkbox" 
                    value="vermelho" 
                    class="w-4 h-4">
                    2022-2021
                    <br/>
                    <input 
                    id="link-checkbox" 
                    type="checkbox" 
                    value="vermelho" 
                    class="w-4 h-4">
                    2019-2018
                    <br/>
                    <input 
                    id="link-checkbox" 
                    type="checkbox" 
                    value="vermelho" 
                    class="w-4 h-4">
                    2017-2016
                    <br/>
                    <input 
                    id="link-checkbox" 
                    type="checkbox" 
                    value="vermelho" 
                    class="w-4 h-4">
                    2015-2014
                    <br/>
                    <input 
                    id="link-checkbox" 
                    type="checkbox" 
                    value="vermelho" 
                    class="w-4 h-4">
                    2013-2012
                    <br/>
                    <input 
                    id="link-checkbox" 
                    type="checkbox" 
                    value="vermelho" 
                    class="w-4 h-4">
                    2011-2010
                    <br/>
                    <input 
                    id="link-checkbox" 
                    type="checkbox" 
                    value="vermelho" 
                    class="w-4 h-4">
                    2009-2008
                    <br/><input 
                    id="link-checkbox" 
                    type="checkbox" 
                    value="vermelho" 
                    class="w-4 h-4">
                    2007-2006
                    <br/>
                    <input 
                    id="link-checkbox" 
                    type="checkbox" 
                    value="vermelho" 
                    class="w-4 h-4">
                    2005-2004
                    <br/>
                    <input 
                    id="link-checkbox" 
                    type="checkbox" 
                    value="vermelho" 
                    class="w-4 h-4">
                    2003-2002
                    <br/>
                    <input 
                    id="link-checkbox" 
                    type="checkbox" 
                    value="vermelho" 
                    class="w-4 h-4">
                    2001-2000
                    <br/>
                    <input 
                    id="link-checkbox" 
                    type="checkbox" 
                    value="vermelho" 
                    class="w-4 h-4">
                    1999-1998
                    <br/>

                    <label class="inline-flex relative items-center cursor-pointer mt-4">
                        <input type="checkbox" value="" class="sr-only peer">
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none   dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ml-3 text-sm font-medium">Eletrico</span>
                    </label>

                    <div class="mt-4">
                        <label>Portas</label><br/>
                    
                    <input 
                    id="link-checkbox" 
                    type="checkbox" 
                    value="vermelho" 
                    class="w-4 h-4">
                    2 Portas
                    <br/>
                    <input 
                    id="link-checkbox" 
                    type="checkbox" 
                    value="vermelho" 
                    class="w-4 h-4">
                    3 Portas
                    <br/>
                    <input 
                    id="link-checkbox" 
                    type="checkbox" 
                    value="vermelho" 
                    class="w-4 h-4">
                    4 Portas
                    <br/>
                    </div>

                    <button class="bg-blue-500 hover:bg-blue-700
                     text-white font-bold py-2 px-4 rounded 
                     justify-center w-full mt-4">Consultar</button>
                </div>
                 
            </div>
                <div className="grid grid-cols-4 gap-4 justify-center mt-8 mb-20 px-32" >
                    <div v-for="(ListCarros, index) in ListCarros" :key="index">
                        <Card 
                        :nome="ListCarros.nome"
                        :cor="ListCarros.cor"
                        :ano="ListCarros.Ano_Fabricante"
                        :url="ListCarros.url"
                        :Eletrico="ListCarros.isEletrico"
                        :Portas="ListCarros.portas"
                        :id="ListCarros.id_carro"
                    />
                    </div>
                </div>
                </div>
            </div>
            <div class="flex justify-center">
                <div class="ml-4 mr-4">
                    <h1 class="mb-4 ml-2">Feito com muito ❤️☕ por Geordani Machado & Gabriela Von
                    </h1>

                </div>
                <div class="flex">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="rounded-xl justify-center" style="height: 20px;"/>
                <h1 class="ml-1 mb-4">
                Projeto Open Sorce: <a href="https://github.com/Geordani-Machado/N2"> https://github.com/Geordani-Machado/N2 </a> </h1>
                </div>

            </div>
           
                
  </template>
