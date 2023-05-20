<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/useAuthStore";

const store = useAuthStore();
const registerMode = ref(true);
const formModeText = ref("Not registered yet ?");

const toggleFormMode = () => {
  registerMode.value = !registerMode.value;
  registerMode.value == true
    ? (formModeText.value = "Not registered yet ?")
    : (formModeText.value = "Already registered?");
};

</script>

<template>
  <v-sheet max-width="500" class="mx-auto">
    <form>
      <v-text-field variant="underlined" v-model="store.email" label="E-mail" ></v-text-field>

      <v-text-field variant="underlined" v-model="store.password" type="password" label="Password" ></v-text-field>

      <v-slide-x-transition>
        <v-text-field v-if="!registerMode" variant="underlined" v-model="store.nickname" label="Nickname"></v-text-field>
      </v-slide-x-transition>

      <p v-if="store.errorMsg" class="text-red-darken-1 mb-4">{{ store.errorMsg }}</p>

      <v-btn v-if="registerMode" @click="store.signInUser" rounded="xl" width="130" class="me-4 bg-blue-darken-1">
        Log In
      </v-btn>

      <v-btn v-else @click="store.registerUser" rounded="xl" width="130" class="me-4 bg-blue-darken-1">
        Register
      </v-btn>

      <v-btn @click="toggleFormMode()" variant="plain text-blue-darken-1">
        {{ formModeText }}
      </v-btn>

    </form>
  </v-sheet>
</template>