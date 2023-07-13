import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { defineStore } from 'pinia';

const useAuthGoogleStore = defineStore('authGoogle', {
  state: () => {
    return {
      /* estas son las variables de este store aqui se estan guardando los datos que se recive de google */
      token: null as string | null /* serverAuthCode */,
      token2: null as string | null /* AUTENTICATION: ACCESS TOKEN */,
      email: null as string | null /* EMAIL */,
      fristName: null as string | null /* givenName */,
      lastName: null as string | null /* familyName */,
      imageUrl: null as string | null /* IMG */,
      baseURl: 'http://127.0.0.1:8000/api'
    };
  },
  actions: {
    async verifications(email: string) {
      const uriRegister = `${this.baseURl}/auth/register`;
      const rawResponse = await fetch(uriRegister, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json'
        }
      });
    }
  }
});

export default useAuthGoogleStore;
