<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

</script>

<template>
    <v-img class="mx-3" src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg"
        max-height="30" max-width="30" contain></v-img>
    <h1>Website is unavailable</h1>
    <p>The link you used may be broken or the page may have been removed.</p>
    <v-btn @click="router.push('/')">Return</v-btn>
</template>