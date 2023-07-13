<template>
  <div class="font-sans">
    <!-- Container -->
    <div class="container mx-auto text-gray-700">
      <div class="flex justify-center px-6 my-12">
        <!-- Row -->
        <div class="w-full xl:w-3/4 lg:w-11/12 flex">
          <!-- Col -->
          <div
            class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg bg-car-login bg-[-8rem]"
          ></div>
          <!-- Col -->
          <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <div class="px-8 mb-4 text-center">
              <h3 class="pt-4 mb-2 text-2xl">¿Olvidaste tu contraseña?</h3>
              <p class="mb-4 text-sm text-gray-700">
                Lo entendemos, pasan cosas. ¡Simplemente ingrese su dirección de correo electrónico
                a continuación y le enviaremos un enlace para restablecer su contraseña!
              </p>
            </div>
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                  Email
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Coloca tu Email..."
                />
              </div>
              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Restablecer contraseña
                </button>
              </div>
              <hr class="mb-6 border-t" />
              <div class="text-center">
                <a
                  class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="./register.html"
                >
                  <RouterLink to="/registrar">¡Crear cuenta!</RouterLink>
                </a>
              </div>
              <div class="text-center">
                <a
                  class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="./index.html"
                >
                  <RouterLink to="/auth">¿Ya estas registrado? Inicia sesión!</RouterLink>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
