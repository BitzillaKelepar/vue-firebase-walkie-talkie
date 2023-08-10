<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/feed">Feed</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
  </header>
  <div>
    <h1 class="text-3xl font-poppins">Vue Voxer</h1>
    <p class="font-poppins">Realtime Voice Chat</p>
  </div>
  
  <router-view/>
</template>

<script>
// debugging
import {auth} from "./firebase";

console.log(auth);

export default {
  name: 'App',
  components: {}
}
</script>

<style>

</style>
