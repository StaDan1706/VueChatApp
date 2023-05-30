<template>
    <v-img aspect-ratio="16/9" cover class="preview-img"
        src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.8562-6/120973513_338186077283942_8148888802958728934_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=Qq8eHA9_Yy8AX8ldVuu&_nc_ht=scontent-waw1-1.xx&oh=00_AfA9MgzhsrMFYWMo0RkqrEeTW5HXqRKMj8XYYzGn-3x2rQ&oe=647B7367"></v-img>
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