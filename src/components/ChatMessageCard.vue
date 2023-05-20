<script setup>
import ChatAvatar from "./ChatAvatar.vue"
import { defineProps } from "vue";
import { useAuthStore } from "../stores/useAuthStore";

const store = useAuthStore();
const { message } = defineProps(['message'])


const verifyUser = (message) => {
    if (message.userId == store.user.id) {
        return "You!"
    } else return message.from
}


</script>

<template>
    <v-container
        :class="verifyUser(message) == 'You!' ? 'messageCardContainer currentlyLoggedUserMessage' : 'messageCardContainer'">
        <v-card style="max-width: 85%">
            <v-row class="d-flex align-center px-5 pt-2 ">
                <ChatAvatar />
                <v-card-title>{{ verifyUser(message) }}</v-card-title>
                <v-card-subtitle class="text-caption">{{ message.time }}</v-card-subtitle>
            </v-row>
            <v-card-text>{{ message.message }}</v-card-text>
        </v-card>
    </v-container>
</template>

<style scoped>
.messageCardContainer {
    width: 100%;
    display: flex;
}

.currentlyLoggedUserMessage {
    justify-content: end;
}
</style>