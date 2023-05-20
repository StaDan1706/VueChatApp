<script setup>
import AppBar from './components/AppBar.vue';
import { onMounted } from 'vue';
import { useAuthStore } from "./stores/useAuthStore"
const store = useAuthStore();

onMounted(() => {
  store.init()
})

</script>

<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>