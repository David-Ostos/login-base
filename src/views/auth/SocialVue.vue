<template>
  <div class="font-sans">
    <!-- Container -->
    <div class="container mx-auto">
      <div class="flex justify-center px-6 my-12">
        <!-- Row -->
        <div class="w-full xl:w-3/4 lg:w-11/12 flex">
          <!-- Col -->
          <div
            class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg bg-social bg-[-10rem]"
          ></div>
          <!-- Col -->
          <div class="w-full lg:w-1/2 text-gray-700 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 class="pt-4 text-2xl text-center">¡Bienvenido!</h3>
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                  Email
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                  v-model="email"
                />
              </div>
              <div class="mb-4">
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
                <p class="text-xs italic text-red-500">Por favor ingrese su contraseña.</p>
              </div>
              <div class="mb-4">
                <input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                <label class="text-sm" for="checkbox_id"> ¿Quieres recordar? </label>
              </div>
              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  @click.prevent="authUser"
                >
                  Iniciar sesión
                </button>
              </div>
              <hr class="my-6 border-t" />
              <div class="flex">
                <BotonSocial @eventSocial="googleSignIn" :imagen="imgGoogle" scale="scale-125" />
                <BotonSocial
                  @eventSocial="facebookSignIn"
                  :imagen="imgFacebook"
                  scale="scale-150"
                />
                <BotonSocial @eventSocial="twitterSignIn" :imagen="imgTwitter" scale="scale-150" />
                <BotonSocial @eventSocial="githubSignIn" :imagen="imgGithub" scale="scale-150" />
              </div>
              <hr class="my-6 border-t" />
              <div class="text-center">
                <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
                  <RouterLink to="/registrar">¡Crear cuenta!</RouterLink>
                </a>
              </div>
              <div class="text-center">
                <a
                  class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  <RouterLink to="/recuperar">¿Olvidaste la contraseña?</RouterLink>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//eslint-disable @typescript-eslint/no-unused-vars
import BotonSocial from '@/components/botonSocial.vue';
import { ref } from 'vue';
import AuthService from '@/services/AuthService';

import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup
} from 'firebase/auth';

import imgGoogle from 'assets/google.svg';
import imgFacebook from 'assets/facebook.svg';
import imgTwitter from 'assets/twitter-3.svg';
import imgGithub from 'assets/github-icon-1.svg';

// backend tradicional
let email = ref('');
let password = ref('');

const authUser = async () => {
  const auth = new AuthService();
  const success = await auth.login(email.value, password.value);
  if (success) {
    alert('Exito!');
  } else {
    alert('Login failed');
  }
};

// social with Firebase
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvide = new GithubAuthProvider();
const auth = getAuth();

function googleSignIn() {
  signInWithPopup(auth, googleProvider)
    .then((resul) => {
      const credential = GoogleAuthProvider.credentialFromResult(resul);
      const token = credential?.accessToken;
      console.log(token);
      alert('Success!');
    })
    .catch((err) => {
      alert(err.message);
      throw new Error(err.message);
    });
}

function facebookSignIn() {
  signInWithPopup(auth, facebookProvider)
    .then((resul) => {
      const credential = FacebookAuthProvider.credentialFromResult(resul);
      const token = credential?.accessToken;
      const user = resul.user;
      console.log(token);
      console.log(user);
      alert('Success!');
    })
    .catch((err) => {
      alert(err.message);
      throw new Error(err.message);
    });
}

function twitterSignIn() {
  signInWithPopup(auth, twitterProvider)
    .then((resul) => {
      const credential = TwitterAuthProvider.credentialFromResult(resul);
      const token = credential?.accessToken;
      const user = resul.user;
      console.log(token);
      console.log(user);
      alert('Success!');
    })
    .catch((err) => {
      alert(err.message);
      throw new Error(err.message);
    });
}

function githubSignIn() {
  signInWithPopup(auth, githubProvide)
    .then((resul) => {
      const credential = GithubAuthProvider.credentialFromResult(resul);
      const token = credential?.accessToken;
      const user = resul.user;
      console.log(token);
      console.log(user);
      alert('Success!');
    })
    .catch((err) => {
      alert(err.message);
      throw new Error(err.message);
    });
}
</script>
