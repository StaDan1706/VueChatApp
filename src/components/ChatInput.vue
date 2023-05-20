<script setup>
import { useAuthStore } from "../stores/useAuthStore";

const store = useAuthStore();

</script>

<template>
    <v-divider></v-divider>
    <v-text-field variant="underlined" class="mx-4 mt-4" v-model="store.message">
        <template v-slot:append>
            <v-btn @click="store.writeOnChat(store.user.id, store.nickname, store.message)" icon="mdi-arrow-right"
                color="blue">
            </v-btn>
        </template>
    </v-text-field>
</template>