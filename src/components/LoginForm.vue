<script setup>
import { ref, reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required, minLength } from "@vuelidate/validators";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const registerMode = ref(true);
const formModeText = ref("Not registered yet ?");

const state = reactive({
  password: "",
  confirmPassword: "",
  email: "",
  errorMsg: ""
});

const passwordIsSame = (password) => {
  return password === state.password;
};

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) },
  confirmPassword: { required, sameAsPassword: passwordIsSame },
};

const v$ = useVuelidate(rules, state);

const toggleMode = () => {
  registerMode.value = !registerMode.value;
  registerMode.value == true
    ? (formModeText.value = "Not registered yet ?")
    : (formModeText.value = "Already registered?");
};

const registerNewUser = () => {
  createUserWithEmailAndPassword(getAuth(), state.email, state.password, state.confirmPassword)
    .then((data) => {
      router.push('/about')
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    })
}

const signInUser = () => {
  signInWithEmailAndPassword(getAuth(), state.email, state.password)
    .then((data) => {
      router.push('/about')
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          state.errorMsg = "Invalid email";
          break;
        case "auth/user-not-found":
          state.errorMsg = "No account with that email was found";
          break;
        case "auth/wrong-password":
          state.errorMsg = "Incorrect password";
          break;
        default:
          state.errorMsg = "Email or password was incorrect";
          break;
      }
    })
}
</script>

<template>
  <v-sheet max-width="500" class="mx-auto">
    <form>
      <v-text-field variant="underlined" v-model="state.email" :error-messages="v$.email.$errors.map((e) => e.$message)"
        label="E-mail" required @input="v$.email.$touch" @blur="v$.email.$touch"></v-text-field>

      <v-text-field variant="underlined" v-model="state.password"
        :error-messages="v$.password.$errors.map((e) => e.$message)" type="password" label="Password"
        required @input="v$.password.$touch" @blur="v$.password.$touch"></v-text-field>

      <v-slide-x-transition>
        <v-text-field v-if="!registerMode" variant="underlined" v-model="state.confirmPassword"
          :error-messages="v$.confirmPassword.$errors.map((e) => e.$message)"  type="password"
          label="Repeat password" required @input="v$.confirmPassword.$touch"
          @blur="v$.confirmPassword.$touch"></v-text-field>
      </v-slide-x-transition>

      <p v-if="state.errorMsg" class="text-red-darken-1">{{ state.errorMsg }}</p>

      <v-btn v-if="registerMode" @click="signInUser" rounded="xl" width="130" class="me-4 bg-blue-darken-1">
        Log In
      </v-btn>
      <v-btn v-else @click="registerNewUser" rounded="xl" width="130" class="me-4 bg-blue-darken-1">
        Register
      </v-btn>

      <v-btn @click="toggleMode()" variant="plain text-blue-darken-1">
        {{ formModeText }}
      </v-btn>
    </form>
  </v-sheet>
</template>