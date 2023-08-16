<template>
  <div class="h-screen flex justify-center items-center">
    <div class="flex flex-col items-center bg-sky-50 rounded-lg p-8 shadow-lg w-[400px] h-[300px]">
      <h1 class="text-3xl font-poppins mb-3">Create Account</h1>
      <div class="flex flex-col mb-3">
        <input class="p-1.5 h-7 w-64 my-3 font-poppins rounded-lg" type="text" placeholder="E-Mail" v-model="email"/>
        <input class="p-1.5 h-7 w-64 my-3 font-poppins rounded-lg" type="text" placeholder="Password" v-model="password"/>
      </div>
      <button @click="register" class="mt-3.5 place-content-center bg-sky-600 border-sky-600 border-2 text-sky-50 py-2 w-[100px] rounded-lg font-poppins hover:border-gray-700 hover:bg-gray-700">Submit</button>
    </div>
  </div>
</template>

<script setup>
// imports
import {ref} from "vue";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useRouter} from "vue-router";

// variables
const auth = getAuth();
const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
  // create a user with ref values
  createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(`Successfully registered as ${user}`);
        // redirect to feed view
        router.push("/feed");
      }).catch((error) => {
    console.log(error.code);
    alert(error.message);
  })
}
</script>