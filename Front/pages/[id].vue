<template>
    <div class="min-h-screen flex flex-col items-center pt-16">

        <div class="bg-slate-800 text-teal-400 w-3/4">

            <p class="flex justify-center text-2xl py-4">{{ id }}</p>
            <p class="flex justify-center text-2xl py-4">{{ post }}</p>

            <p class="flex justify-center text-2xl py-4">Content</p>

            <p class="bg-slate-900 mx-24 my-4 px-4 p-4 text-center rounded-br-3xl rounded-tl-3xl">Lorem ipsum dolor sit
                amet
                consectetur,
                adipisicing elit.
                Numquam,
                ipsum. Cum numquam possimus dolor, error
                quidem optio nam id tempora omnis mollitia voluptatem dolores nesciunt soluta magnam rerum iure itaque?
                Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Veniam placeat doloremque sed perspiciatis
                accusantium
                quo
                soluta aliquid reprehenderit, similique voluptas ea quia quidem doloribus dolores neque voluptate
                perferendis
                qui vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, vero? Maiores, aliquam
                voluptatum! A
                hic totam animi, consequatur nihil optio id veniam ratione enim provident rerum, voluptate repudiandae
                laudantium tempore.
                Repellendus laborum quis culpa, in dicta a. Dolore commodi provident incidunt enim odio nam earum saepe
                aliquam
                ut repellat officia tempore magni, modi eum doloremque veniam architecto ipsa voluptatem doloribus.
                Cum amet molestiae harum. Placeat voluptas explicabo unde animi, libero odio. Animi provident atque
                omnis,
                facere natus aliquam, velit unde magni repudiandae accusantium porro beatae ad obcaecati reiciendis
                rerum
                voluptatum.
                Perspiciatis accusamus eum iusto esse illum animi repellat officiis vitae nemo ex, vero error quibusdam
                quod
                beatae velit ut mollitia itaque sit cupiditate, similique recusandae nam fuga totam? Aspernatur, maxime!
                Ex sint ipsa commodi nisi nihil perspiciatis eius nam eos autem harum dolorem ipsam reprehenderit,
                possimus
                officiis voluptatem dolore odio dolorum id similique. Minima laudantium beatae asperiores aperiam vero
                corporis.
            </p>

            <p class="flex justify-center text-2xl py-4">Comments</p>

            <div class="flex flex-col justify-around">
                <div class="bg-slate-900 mx-24 my-4 py-4 rounded-br-3xl rounded-tl-3xl flex flex-col items-center">
                    <p class="text-lg">Random people</p>
                    <p class="text-center">Opinion: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
                        harum
                        laborum rem
                        assumenda?
                        Repellat molestiae optio assumenda voluptas dolor sunt. Nam itaque ipsam praesentium repellendus
                        quia sed,
                        qui provident inventore.*3</p>
                </div>
                <div class="bg-slate-900 mx-24 my-4 py-4 rounded-br-3xl rounded-tl-3xl flex flex-col items-center">
                    <p class="text-lg">Random people</p>
                    <p class="text-center">Opinion: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
                        harum
                        laborum rem
                        assumenda?
                        Repellat molestiae optio assumenda voluptas dolor sunt. Nam itaque ipsam praesentium repellendus
                        quia sed,
                        qui provident inventore.*3</p>
                </div>
                <div class="bg-slate-900 mx-24 my-4 py-4 rounded-br-3xl rounded-tl-3xl flex flex-col items-center">
                    <p class="text-lg">Random people</p>
                    <p class="text-center">Opinion: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
                        harum
                        laborum rem
                        assumenda?
                        Repellat molestiae optio assumenda voluptas dolor sunt. Nam itaque ipsam praesentium repellendus
                        quia sed,
                        qui provident inventore.*3</p>
                </div>
            </div>

        </div>
    </div>
    <!-- <div class="h-screen">
        <div class="h-full">hej  hallå {{ post }}</div>
    </div> -->
</template>

<script setup>

const { id } = useRoute().params
const url = 'http://localhost:4000/posts/' + id

const { data: post } = useFetch(url, { key: id })

if (!post) {
    throw createError({ statusCode: 404, statusMessage: 'Post not Found', fatal: true })
}

</script>
