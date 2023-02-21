<template>
    <div class="h-screen">
        <p class="text-2xl">ALT</p>
        <NavBar />
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