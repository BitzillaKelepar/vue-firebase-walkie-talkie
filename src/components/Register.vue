<template>
  <div>
    <h1 class="text-3xl font-poppins">Create an Account</h1>
    <p><input type="text" placeholder="E-Mail" v-model="email"/></p>
    <p><input type="text" placeholder="Password" v-model="password"/></p>
    <button @click="register">Submit</button>
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