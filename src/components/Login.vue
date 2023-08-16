<template>
  <div class="h-screen flex justify-center items-center">
    <div class="flex flex-col items-center bg-sky-50 rounded-lg p-8 shadow-lg w-auto h-auto">
      <h1 class="text-3xl font-poppins mb-3">Login to your Account</h1>
      <div class="flex flex-col mb-3">
        <input class="p-1.5 h-7 w-64 my-3 font-poppins rounded-lg" type="text" placeholder="E-Mail" v-model="email"/>
        <input class="p-1.5 h-7 w-64 my-3 font-poppins rounded-lg" type="text" placeholder="Password" v-model="password"/>
      </div>
      <button @click="login" class="place-content-center bg-sky-600 text-sky-50 py-2 px-4 w-32 rounded font-poppins hover:bg-gray-700">Login</button>
    </div>
    
  </div>
</template>

<script setup>
// imports
import {ref} from "vue";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useRouter} from "vue-router";

// variables
const auth = getAuth();
const email = ref("");
const password = ref("");
const errMsg = ref(); // ERROR MESSAGE
const router = useRouter();

const login = () => {
  // create a user with ref values
  signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(`Successfully logged in as ${user}`);
        // redirect to feed view
        router.push("/feed");
      }).catch(error => {
    switch (error.code) {
      case 'auth/invalid-email':
        errMsg.value = 'Invalid E-Mail'
        break
      case 'auth/user-not-found':
        errMsg.value = 'No account with that E-Mail was found'
        break
      case 'auth/wrong-password':
        errMsg.value = 'Incorrect password'
        break
      default:
        errMsg.value = 'E-Mail or password was incorrect'
        break
    }
  });
}
</script>