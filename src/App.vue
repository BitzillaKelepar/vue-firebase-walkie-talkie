<template>
  <header>
    <div class="flex justify-center items-center flex-col my-3">
      <h1 class="text-3xl font-poppins">Vue Voxer</h1>
      <p class="font-poppins">Realtime Voice Chat</p>
    </div>
    <div class="navbar-menu relative z-50 hidden">
      
    </div>
    <nav class="relative flex justify-center items-center bg-sky-50 space-x-16 py-4 overflow-y-auto">
      <ul class="space-x-4">
        <router-link class="hover:text-sky-700 font-poppins" to="/">Home</router-link>
        <router-link class="hover:text-sky-700 font-poppins" to="/feed">Feed</router-link>
      </ul>
      <ul class="flex space-x-4 flex-row">
        <router-link class="w-[100px] text-center border-solid border-2 border-sky-600 bg-sky-50 text-sky-600 py-2 px-4 rounded-lg hover:bg-gray-700 hover:border-gray-700 hover:text-sky-50 font-poppins" to="/login">Login</router-link>
        <router-link class="w-[100px] text-center border-solid border-2 border-sky-600 bg-sky-600 text-sky-50 py-2 px-4 rounded-lg hover:bg-gray-700 hover:border-gray-700 font-poppins" to="/register">Register</router-link>
        <!--button @click="signOut">Sign out</button>-->
      </ul>
    </nav>
  </header>
  
  <div class="bg-gradient-to-r from-sky-700 to-sky-100">
    <router-view/>
  </div>
  
</template>

<script>
// debugging
import {auth} from "./firebase";
console.log(auth);

// get login state
/*import { onMounted, ref} from "vue";
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});*/

export default {
  name: 'App',
  components: {}
}
</script>

<style>

</style>
