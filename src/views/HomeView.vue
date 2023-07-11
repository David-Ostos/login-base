<script setup lang="ts">
import { type Ref, ref, onMounted } from 'vue';
import { useCounterStore } from '@/store/counter';
import useAuthStore from '@/store/auth';
import type INotes from '@/interfaces/INotes';
import router from '@/router';

const storeAuth = useAuthStore();
const storeCount = useCounterStore(); //por combencion si tenemos mas de 1 estore se llama cada estore por su nombre ejemplo en este caso seria counterStore

const notas: Ref<Array<INotes>> = ref([]);
const note = ref('');

onMounted(async () => {
  notas.value = await storeAuth.getNotes();
});

const sendToNote = async () => {
  const response = await storeAuth.createNotes(note.value);
  if (!response) {
    alert('Error recording the note');
  } else {
    alert('Success recording the note');
    note.value = '';
    notas.value = await storeAuth.getNotes();
  }
};

</script>


<template>


  <div class="flex flex-col gap-10 px-10">
    <div class="grid grid-cols-gallery1 gap-14 justify-items-center items-end">
      <div
        class="relative flex w-96 flex-col justify-between rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-40 h-48"
      >
        <div class="p-6">
          <h5
            class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
          >
            Contador con Pinia
          </h5>
          <p
            class="block font-sans text-base font-light leading-relaxed text-inherit antialiased text-center"
          >
            {{ storeCount.count }} x 2 = {{ storeCount.times2 }}
          </p>
        </div>
        <div class="p-6 pt-0 flex gap-2">
          <button
            @click="storeCount.increment(3)"
            class="select-none rounded-lg bg-[#3B82f6] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#3B82f6] transition-all hover:shadow-lg hover:shadow-[#3B82f6] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Aumentar
          </button>
        </div>
      </div>

      <div
        class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-20 h-48"
      >
        <div class="p-6">
          <h5
            class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
          >
            Agregar nota
          </h5>
          <div class="relative h-10 w-full min-w-[200px]">
            <input
              class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#3B82f6] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              v-model="note"
            />
            <label
              class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#3B82f6] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#3B82f6] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#3B82f6] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
              Required
            </label>
          </div>
        </div>
        <div class="p-6 pt-0 flex gap-2">
          <button
            @click.prevent="sendToNote"
            class="select-none rounded-lg bg-[#3B82f6] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#3B82f6] transition-all hover:shadow-lg hover:shadow-[#3B82f6] focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Enviar nota
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-gallery gap-14 justify-items-center" v-if="notas">
      <div
        v-for="nota in notas"
        :key="nota.id"
        class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-20 h-48"
      >
        <div class="p-6">
          <h5
            class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
          >
            Nota {{ nota.id }}
          </h5>
          <p
            class="block font-sans text-base font-light leading-relaxed text-inherit antialiased text-center"
          >
            {{ nota.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
