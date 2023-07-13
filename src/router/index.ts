/* eslint-disable @typescript-eslint/no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router';
import useAuthStore from '@/store/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        requireAuth: true,
        role: 'admin'
      }
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/auth/AuthVue.vue'),
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: () => import('../views/auth/registrarVue.vue'),
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/recuperar',
      name: 'recuperar',
      component: () => import('../views/auth/recuperarPassword.vue'),
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/authFire',
      name: 'authFire',
      component: () => import('../views/auth/FirebaseVue.vue'),
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/authSocial',
      name: 'authSocial',
      component: () => import('../views/auth/SocialVue.vue'),
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/mdb',
      name: 'mdb',
      component : () => import('../views/mdbootstrap.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  // to = a donde el usuario quiere ir // from = de donde viene // next = a donde va a ir
  const storeAuth = useAuthStore();
  const isAuth = storeAuth.jwt;
  const needAuth = to.meta.requireAuth;
  const role = to.meta.role;

  if (needAuth && (isAuth === null || role !== 'admin')) {
    next('auth');
  } else {
    next();
  }
});

export default router;
