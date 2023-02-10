<template>
	<div>
		<div class="z-10 flex justify-center my-12 h-screen">
			<div
				class="transition-transform bg-slate-800 opacity-60 w-4/6 min-h-full rounded-3xl drop-shadow-2xl transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-105 duration-200"
			></div>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from "vue";
</script>

<style>
/*
body {
	background-image: url("https://media.istockphoto.com/id/1308684522/vector/blue-and-green-blurred-motion-abstract-background.jpg?s=612x612&w=0&k=20&c=ELAPwLRDLH1AbjPDL9RyKBuJR9vcJqn0j8Iz4JLfuCI=");
	background-color: #cccccc;
	background-repeat: repeat;
	background-size: cover;
}
*/
body {
	background-image: linear-gradient(
		to right,
		#40aa45,
		#0bad68,
		#00ae85,
		#00ae9d,
		#00acae,
		#00a3b2,
		#009ab4,
		#0090b3,
		#007da8,
		#006b9c,
		#00588e,
		#00467e
	);
	background-size: cover;
}
</style>
