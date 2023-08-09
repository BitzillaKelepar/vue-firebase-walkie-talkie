<template>
  <aside>
    <h3 class="text-2xl font-poppins">Sign-in Anonymously</h3>
    <button @click="auth.signInAnonymously()" class="bg-sky-500 hover:bg-sky-700">Login</button>
  </aside>
</template>

<script>
import {auth} from "@/firebase";

export default {
  data() {
    return {
      auth,
    }
  },
}
</script>