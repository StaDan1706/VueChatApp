<template>
    <v-app-bar :elevation="9" rounded>
        <v-img class="mx-3" src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg"
            max-height="30" max-width="30" contain></v-img>
        <v-app-bar-tittle class="font-weight-bold title">Messenger</v-app-bar-tittle>

        <template v-slot:append>
            <v-btn icon="mdi-theme-light-dark"></v-btn>
            <v-btn icon="mdi-account" disabled></v-btn>
        </template>
    </v-app-bar>
</template>

<style scoped>
.title {
    background: -webkit-linear-gradient(83.84deg, #0088FF -6.87%, #A033FF 26.54%, #FF5C87 58.58%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>