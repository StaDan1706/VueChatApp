<script setup>
import ChatInput from "../components/ChatInput.vue"
import ChatWindow from "../components/ChatWindow.vue";
</script>

<template>
  <v-container class="mt-10">
    <v-row justify="space-around">
      <v-card width="600">
        <ChatWindow />
        <ChatInput />
      </v-card>

    </v-row>

  </v-container>
</template>