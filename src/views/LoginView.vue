<script setup>
import AppBar from "../components/AppBar.vue"
import LoginTitle from "../components/LoginTitle.vue"
import LoginForm from "../components/LoginForm.vue"
import LoginPreview from "../components/LoginPreview.vue";
</script>

<template>
  <AppBar />

  <v-main class="d-flex">

    <v-container class="container">
      <LoginTitle />
      <LoginForm />
    </v-container>

    <LoginPreview />
  </v-main>
</template>

<style scoped>
.container {
    max-width: 100%;
}


@media screen and (min-width: 1024px) {
  .container {
    max-width: 50%;
}

}
</style>