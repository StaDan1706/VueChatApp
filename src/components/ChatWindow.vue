<script setup>
import ChatMessageCard from "./ChatMessageCard.vue"
import { reactive, ref as vueRef } from "vue";
import { getDatabase, ref, onChildAdded } from "firebase/database";


const db = getDatabase();
const chatMessagesRef = ref(db, 'chat');

const messages = reactive([])
const bottom = vueRef(null)

onChildAdded(chatMessagesRef, async(data) => {
     await messages.push(
        {
            from: data.val().username,
            message: data.val().message,
            time: data.val().time,
            userId: data.val().userId
        }
    )
    bottom.value?.scrollIntoView()
})

</script>

<template>
    <v-container style="height: 400px;" class="overflow-y-auto d-flex flex-column">
        <ChatMessageCard v-for="message in messages" :message="message" />
        <div ref="bottom"></div>
    </v-container>
</template>


<style scoped></style>
