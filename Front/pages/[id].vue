<template>
    <div class="h-screen">
        <div class="h-full">hej {{ id }} hallå {{ post }}</div>
    </div>
</template>

<script setup>

const { id } = useRoute().params
const url = 'http://localhost:4000/posts/' + id

const { data: post } = useFetch(url, { key: id })

if (!post) {
    throw createError({ statusCode: 404, statusMessage: 'Post not Found', fatal: true })
}

</script>
