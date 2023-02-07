<template>
    <div class="h-screen">
        <p class="text-2xl">ALT</p>
        <NavBar />
        <div class="h-14"></div>
        <slot class="min-h-full" />
        <Footer />
    </div>
</template>

<script>
export default {
    head () {
        return {
            title: "FN",
        }
    },
}
</script>