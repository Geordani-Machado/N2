
<template>

<button class="block text-white bg-blue-700 hover:bg-blue-800 
focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
 rounded-lg text-sm px-5 py-2.5 text-center " type="button" 
  data-modal-toggle="authentication-modal" v-on:click="ToggleModal()">
  Colocar Carro para alugar 🚙
</button>

<!-- Main modal -->
<div class="fixed inset-0 z-40 justify-center items-center flex" v-if="showModal">
    <div class="relative w-full h-full max-w-md md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button v-on:click="ToggleModal()" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only" >Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Colocar Carro para Alugar</h3>
                <form class="space-y-6" action="#">
                    <div>
                        <label for="nome" class="block mb-2 text-sm font-medium
                         text-gray-900 dark:text-white">Nome do Carro</label>
                        <input type="text" name="car-nome" id="car-nome" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
                          dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                        required>
                        <label for="nome" class="block mb-2 text-sm font-medium mt-2
                         text-gray-900 dark:text-white">Cor do Carro</label>
                        <input type="text" name="car-nome" id="car-nome" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
                          dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                        required>
                    
                   
                        <label for="nome" class="block mb-2 text-sm font-medium
                         text-gray-900 dark:text-white">Nº Portas</label>
                        <input type="text" name="car-nome" id="car-nome" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
                          dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                        required>
                   
                   
                        <label for="nome" class="block mb-2 text-sm font-medium
                         text-gray-900 dark:text-white">Ano</label>
                        <input type="text" name="car-nome" id="car-nome" 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
                          dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                        required>
                    
    
                      <label class="inline-flex relative items-center cursor-pointer mt-4">
                        <input type="checkbox" name="eletrico" id="iseletrico"  value="eletrico" class="sr-only peer" required>
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none   dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ml-3 text-sm font-medium dark:text-white">Eletrico</span>
                      </label>
                    </div>
                    
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                     focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
                      dark:focus:ring-blue-800">Criar Anuncio de Carro para locação</button>
                    
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