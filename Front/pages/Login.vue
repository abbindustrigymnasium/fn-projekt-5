<template>
	<div>
		<div class="z-10 flex justify-center mt-36 h-screen">
			<div class="transition-transform bg-slate-800 opacity-60 w-2/6 h-4/6 rounded-br-3xl rounded-tl-3xl drop-shadow-2xl transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-105 duration-200">
				<div class="rounded-tl-3xl h-1/6 w-full bg-gradient-to-r from-teal-400 to-teal-500">
					<div class="h-full flex items-center justify-center">
						<h1 class="font-mono text-4xl">Studyflow</h1>
					</div>
				</div>
				<div class="grid justify-items-center mt-24 font-mono">
					<input class="bg-transparent w-3/5 px-2 py-1 border-b-2 border-white outline-none focus:border-white text-white invalid:text-red-500" placeholder="Email" type="email"/>
					<input class="bg-transparent w-3/5 px-2 py-1 border-b-2 border-white outline-none focus:border-white text-white mt-8" placeholder="Password" :type="type" id="password"/>
					<input class="mt-2" type="checkbox" v-model="isPassword" />
					<p class="text-white">Show Password</p>
				</div>
				<div class="flex justify-center justify-start justify-evenly mt-4 font-mono">
					<div>
						<input class="mt-2" type="checkbox" style="display: inline" />
						<p class="text-white italic" style="display: inline">remember me?</p>
					</div>
					<button class="text-white italic underline" onclick="forgotPassword()">
						Forgot password?
					</button>
				</div>
				<div class="flex justify-center justify-around mt-8 font-mono">
					<button class="bg-gradient-to-r from-teal-400 to-teal-500 px-6 py-2 rounded-xl">
						Back
					</button>
					<button class="bg-gradient-to-r from-teal-400 to-teal-500 px-6 py-2 rounded-xl font-mono">
						Login
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from "vue";
const isPassword = ref(false);
const type = ref("password");
watch(isPassword, (val) => {
	if (val) {
		type.value = "text";
	} else {
		type.value = "password";
	}
});
function forgotPassword() {
	alert("I am an alert box!");
}
</script>

<style>
body {
	overflow-y: hidden; /* Hide vertical scrollbar */
	background-image: url("https://media.istockphoto.com/id/1308684522/vector/blue-and-green-blurred-motion-abstract-background.jpg?s=612x612&w=0&k=20&c=ELAPwLRDLH1AbjPDL9RyKBuJR9vcJqn0j8Iz4JLfuCI=");
	background-color: #cccccc;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
