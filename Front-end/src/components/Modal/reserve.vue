
<template>

    <button class="text-white bg-blue-700 hover:bg-blue-800 
    focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
     rounded-lg text-sm px-12 py-2.5 text-center flex" type="button" 
      data-modal-toggle="authentication-modal" v-on:click="ToggleModal()">
      Alugar
    </button>
    
    <!-- Main modal -->
    <div class="fixed inset-0 z-40 justify-center items-center flex" v-if="showModal">
        <div class="relative w-full h-full max-w-md md:h-auto flex">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 flex">
                <button v-on:click="ToggleModal()" type="button" class="absolute top-3 
                right-2.5 text-gray-400 bg-transparent hover:bg-gray-200
                 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only" >Close modal</span>
                </button>
                <div class="px-12 py-12 lg:px-8 flex">
                    <h3 class="mb-4 text-xl font-medium text-gray-900
                     dark:text-white mr-5">Alugar um Carro</h3>
                    <form class="space-y-6" action="#">
                        <div>
                            <label for="nome" class="block mb-2 text-sm font-medium
                             text-gray-900 dark:text-white">ID do carro</label>
                            <input type="text" name="car-nome" id="car-nome" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
                              dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                            required>
                            <label for="nome" class="block mb-2 text-sm font-medium mt-2
                             text-gray-900 dark:text-white">ID do motorista</label>
                            <input type="text" name="car-nome" id="car-nome" 
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
                              dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                            required>
                        </div>
                        <label for="nome" class="block text-sm font-medium mt-1
                             text-gray-900 dark:text-white">Data de Reserva</label>
                        <div date-rangepicker class="flex items-center mb-12">
                            <div class="relative flex">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input name="start" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start">
                            </div>
                            <span class="mx-4 text-gray-500">to</span>
                            <div class="relative">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input name="end" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end">
                            </div>
                        </div>

                        
                        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                         focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
                          dark:focus:ring-blue-800">Alugar carro</button>
                        
                    </form>
                </div>
            </div>
        </div>
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
      },
      data(){
        return{
            showModal: false,
        }
    
      },
      methods:{
        ToggleModal() {
          this.showModal = !this.showModal;
        },
      }
    }
    </script>