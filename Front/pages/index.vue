<template>
  <div class="min-h-screen bg-red-500 flex flex-col items-center">
    <div class="bg-slate-800 h-screen text-teal-400 h-screen w-3/4">
      oiii
    </div>
    <div class="bg-slate-900 text-white h-screen w-3/4">
      oiii
    </div>
    <div v-for="p in posts" :key="p.id">
      <NuxtLink :to="`/${p.post_id}`">{{ p.title }}</NuxtLink>
    </div>
    <div>{{ posts[1].title }}</div>
  </div>
</template>

<script setup>

const { data: posts } = await useFetch('http://localhost:4000/posts')

</script>
