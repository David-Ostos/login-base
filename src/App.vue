<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import router from './router';
import useAuthStore from '@/store/auth';
import { ref } from 'vue';

const storeAuth = useAuthStore();

let mostrar = ref(false);

const menu = () => {
  if (mostrar.value) {
    mostrar.value = false;
  } else {
    mostrar.value = true;
  }
};

const logout = () => {
  storeAuth.logout();
  menu();
  router.push({ name: 'auth' });
};
</script>

<template>
  <header>
    <div class="absolute top-4 left-4">
      <button
        data-ripple-light="true"
        data-popover-target="menu"
        class="middle none center mr-3 rounded-lg bg-gradient-to-tr from-[#3B82f6] to-[#3B82f6] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#3B82f680] active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        v-show="storeAuth.jwt !== null"
        @click="menu"
      >
        Menu
      </button>
      <ul
        v-if="storeAuth.jwt !== null"
        v-show="mostrar"
        role="menu"
        data-popover="menu"
        data-popover-placement="bottom"
        class="absolute z-10 min-w-[180px] overflow-auto rounded-md border border-gray-50 bg-white p-3 font-sans text-sm font-normal text-gray-500 shadow-lg shadow-gray-500/10 focus:outline-none"
      >
        <li
          role="menuitem"
          class="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-gray-50 hover:bg-opacity-80 hover:text-gray-900 focus:bg-gray-50 focus:bg-opacity-80 focus:text-gray-900 active:bg-gray-50 active:bg-opacity-80 active:text-gray-900"
          @click="logout"
        >
          Logout
        </li>
      </ul>
    </div>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/auth">Backend</RouterLink>
        <RouterLink to="/authFire"> Firebase</RouterLink>
        <RouterLink to="/authSocial"> Social</RouterLink>
        <RouterLink to="/mdb"> Mdb</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #386bc0 ;
}

nav a.router-link-exact-active:hover {
  background-color: transparent !important;
}

nav a {
  text-decoration: none;
  color: #8d8d8d;
  transition: 0.4s;
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
