<template>
  <div class="min-h-screen flex flex-col items-center">
    <img src="../static/FN-codeflow.png">
    <div class="bg-slate-800 text-teal-400 w-3/4">
      oi
    </div>

    <div v-for="p in posts" :key="p.id" class="bg-slate-800 w-3/4 flex items-center">
      <img src="../static/FN-codeflow.png">
      <NuxtLink :to="`/${p.post_id}`" class="text-teal-400">{{ p.title }}</NuxtLink>
    </div>

    <div class="bg-slate-900 text-white h-screen w-3/4">
      oiii
    </div>

  </div>
</template>

<script setup>

const { data: posts } = await useFetch('http://localhost:4000/posts')

</script>
<style>
.body {
  overflow-x: hidden;
}
</style>
