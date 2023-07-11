<template>
  <div class="font-sans">
    <!-- Container -->
    <div class="container mx-auto text-gray-700">
      <div class="flex justify-center px-6 my-12">
        <!-- Row -->
        <div class="w-full xl:w-3/4 lg:w-11/12 flex">
          <!-- Col -->
          <div
            class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg bg-car-login bg-[-10rem]"
          ></div>
          <!-- Col -->
          <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 class="pt-4 text-2xl text-center">¡Crear Cuenta!</h3>
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                    Nombre
                  </label>
                  <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    v-model="nombre"
                  />
                </div>
                <div class="md:ml-2">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                    Apellido
                  </label>
                  <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    v-model="apellido"
                  />
                </div>
              </div>
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                  Email
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  v-model="email"
                />
              </div>
              <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                    Contraseña
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    v-model="password"
                  />
                  <p class="text-xs italic text-red-500">Por favor elija una contraseña.</p>
                </div>
                <div class="md:ml-2">
                  <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                    Confirma la Contraseña
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="c_password"
                    type="password"
                    placeholder="******************"
                    v-model="rePassword"
                  />
                </div>
              </div>
              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  @click="createUser"
                >
                  Registrar Cuenta
                </button>
                <hr class="my-6 border-t" />
                <BotonSocial :imagen="imgGoogle" name="Inica sesión con Google" />
              </div>
              <hr class="my-6 border-t" />
              <div class="text-center">
                <a
                  class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  <RouterLink to="/recuperar">¿Olvidaste la contraseña?</RouterLink>
                </a>
              </div>
              <div class="text-center">
                <a
                  class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="./index.html"
                >
                  <RouterLink to="/auth">¿Ya estas registrado? ¡Inicia sesión!</RouterLink>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

<script setup lang="ts">
import BotonSocial from '@/components/botonSocial.vue';
import { ref } from 'vue';
import imgGoogle from '../assets/google.svg';
import useAuthStore from '@/store/auth';
import router from '@/router';

const store = useAuthStore();

const nombre = ref('');
const apellido = ref('');
const email = ref('');
const password = ref('');
const rePassword = ref('');


const createUser = async () => {
  const name = ref(nombre.value + ' ' + apellido.value);

  if (password.value !== rePassword.value) {
    alert('Las contraseñas no coinciden');
    return false

  }else if (rePassword.value === "" || password.value === "") {
    alert("ingrese la contraseña")
    return false;
  }
  const response = await store.register(name.value, email.value, password.value);

  if (!response) {
    const errors = store.errors
    for(const error in errors ){
            console.log(errors[error])
            alert(errors[error])
        }
  } else {
    router.push({ name: 'home' });
  }
};
</script>
