<template>
    <div>
        <p>{{ error.statusCode }}</p>
        <p>{{ error.message }}</p><button @click="ErrCls">Go Home...</button>
    </div>
</template>

<script setup>
defineProps(['error'])

const ErrCls = () => clearError({ redirect: '/' })
</script>

<style scoped>

</style>