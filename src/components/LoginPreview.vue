<template>
    <v-img aspect-ratio="16/9" cover class="preview-img"
        src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.8562-6/120973513_338186077283942_8148888802958728934_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=P5Is-KcqDLoAX-p4n4M&_nc_ht=scontent-waw1-1.xx&oh=00_AfCBuceNcd0VH1YjY70zK8eN0TzvzY4SgPleSe3Eu6GRbA&oe=6469A727"></v-img>
</template>

<style scoped>
.preview-img {
    display: none;
}


@media screen and (min-width: 1024px) {
    .preview-img {
        max-width: 670px;
        display: block;
    }
}
</style>