<script setup>
import { defineProps } from "vue";

const { messageFrom } = defineProps(['messageFrom'])</script>

<template>
    <v-avatar size="25" color="surface-variant">{{ messageFrom[0] }}</v-avatar>
</template>