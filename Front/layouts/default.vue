<template>
    <div class="neor">
        <Headir />
        <slot />
        <Footer />
    </div>
</template>

<script setup>

</script>

<style scoped>
.neor {
    background-image: url(../static/gruun.png);
    height: fit-content;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
}
</style>