<template>
	<div>
		<div class="z-10 flex justify-center h-screen w-screen">
			<div
				class="w-4/5 h-4/5 bg-slate-800 opacity-80 rounded-3xl mt-24 border-2 border-dashed"
			>
				<div class="grid justify-items-start mt-12 font-mono">
					<input
						class="bg-transparent w-3/5 px-2 py-1 border-b-2 border-white outline-none focus:border-white text-white ml-2 text-2xl"
						placeholder="Title"
						type="text"
						maxlength="50"
					/>
				</div>
				<div class="mt-8 ml-8 flex justify-start">
					<h3 class="text-white text-lg">Select topic:</h3>
					<select class="ml-2 rounded-lg">
						<option>Math 1c</option>
						<option>Math 2c</option>
						<option>Math 3c</option>
						<option>Math 4</option>
						<option>Math 5</option>
						<option>Swedish</option>
						<option>Español</option>
					</select>
				</div>
				<div class="flex justify-center mt-20">
					<input class="w-3/4 h-80 bg-slate-800 flex justify-start" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({ layout: false });
</script>

<style>
body {
	background-image: url("https://wallpaper.dog/large/10915157.jpg");
	background-color: #cccccc;
	background-repeat: no-repeat;
	background-size: cover;
}
::placeholder {
	color: black;
}
</style>
