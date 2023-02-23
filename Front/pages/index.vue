<template>
  <div class="min-h-screen flex flex-col items-center pt-16">

    <div class="bg-slate-800 text-teal-400 w-3/4">

      <p class="flex justify-center text-2xl py-4">Articles</p>

      <div v-for="p in posts" :key="p.id" class="flex items-center p-2">
        <NuxtLink :to="`/${p.post_id}`"
          class="bg-slate-900 w-full mx-24 my-4 px-4 flex flex wrap items-center rounded-br-3xl rounded-tl-3xl">
          <img src="../static/buuk.png" class="flex justify-start mx-2">
          <div class="px-8">
            <p class="text-teal-400 text-xl ">{{ p.title }}</p>
            <p class="text-teal-400 text-md w-96 truncate">{{ p.content }}</p>
          </div>
        </NuxtLink>
      </div>

      <p class="flex justify-center text-2xl py-4">Dev Team</p>

      <div class="flex flex-row justify-around">
        <div class="bg-slate-900 py-8 px-6 rounded-br-3xl rounded-tl-3xl flex flex-col items-center">
          <p class="text-lg">Theodor</p>
          <p>Backend</p>
        </div>
        <div class="bg-slate-900 py-8 px-6 rounded-br-3xl rounded-tl-3xl flex flex-col items-center">
          <p class="text-lg">Zimon</p>
          <p>Backend</p>
        </div>
        <div class="bg-slate-900 py-8 px-6 rounded-br-3xl rounded-tl-3xl flex flex-col items-center">
          <p class="text-lg">Max</p>
          <p>Frontend</p>
        </div>
        <div class="bg-slate-900 py-8 px-6 rounded-br-3xl rounded-tl-3xl flex flex-col items-center">
          <p class="text-lg">Erling</p>
          <p>Frontend</p>
        </div>
        <div class="bg-slate-900 py-8 px-6 rounded-br-3xl rounded-tl-3xl flex flex-col items-center">
          <p class="text-lg">Neo</p>
          <p>Frontend</p>
        </div>
      </div>

      <p class="flex justify-center text-2xl py-4">About the Site</p>

      <p class="bg-slate-900 mx-24 my-4 px-4 p-4 text-center rounded-br-3xl rounded-tl-3xl">Lorem ipsum dolor sit amet
        consectetur,
        adipisicing elit.
        Numquam,
        ipsum. Cum numquam possimus dolor, error
        quidem optio nam id tempora omnis mollitia voluptatem dolores nesciunt soluta magnam rerum iure itaque? Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Veniam placeat doloremque sed perspiciatis accusantium quo
        soluta aliquid reprehenderit, similique voluptas ea quia quidem doloribus dolores neque voluptate perferendis
        qui vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, vero? Maiores, aliquam voluptatum! A
        hic totam animi, consequatur nihil optio id veniam ratione enim provident rerum, voluptate repudiandae
        laudantium tempore.
        Repellendus laborum quis culpa, in dicta a. Dolore commodi provident incidunt enim odio nam earum saepe aliquam
        ut repellat officia tempore magni, modi eum doloremque veniam architecto ipsa voluptatem doloribus.
        Cum amet molestiae harum. Placeat voluptas explicabo unde animi, libero odio. Animi provident atque omnis,
        facere natus aliquam, velit unde magni repudiandae accusantium porro beatae ad obcaecati reiciendis rerum
        voluptatum.
        Perspiciatis accusamus eum iusto esse illum animi repellat officiis vitae nemo ex, vero error quibusdam quod
        beatae velit ut mollitia itaque sit cupiditate, similique recusandae nam fuga totam? Aspernatur, maxime!
        Ex sint ipsa commodi nisi nihil perspiciatis eius nam eos autem harum dolorem ipsam reprehenderit, possimus
        officiis voluptatem dolore odio dolorum id similique. Minima laudantium beatae asperiores aperiam vero corporis.
      </p>

      <p class="flex justify-center text-2xl py-4">FAQ</p>

      <div class="flex flex-col justify-around">
        <div class="bg-slate-900 mx-24 my-4 py-4 rounded-br-3xl rounded-tl-3xl flex flex-col items-center">
          <p class="text-lg">Question</p>
          <p class="text-center">Answer: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur harum
            laborum rem
            assumenda?
            Repellat molestiae optio assumenda voluptas dolor sunt. Nam itaque ipsam praesentium repellendus quia sed,
            qui provident inventore.*3</p>
        </div>
        <div class="bg-slate-900 mx-24 my-4 py-4 rounded-br-3xl rounded-tl-3xl flex flex-col items-center">
          <p class="text-lg">Question</p>
          <p class="text-center">Answer: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur harum
            laborum rem
            assumenda?
            Repellat molestiae optio assumenda voluptas dolor sunt. Nam itaque ipsam praesentium repellendus quia sed,
            qui provident inventore.*3</p>
        </div>
        <div class="bg-slate-900 mx-24 my-4 py-4 rounded-br-3xl rounded-tl-3xl flex flex-col items-center">
          <p class="text-lg">Question</p>
          <p class="text-center">Answer: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur harum
            laborum rem
            assumenda?
            Repellat molestiae optio assumenda voluptas dolor sunt. Nam itaque ipsam praesentium repellendus quia sed,
            qui provident inventore.*3</p>
        </div>
      </div>

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
