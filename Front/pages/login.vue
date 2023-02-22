<template>
	<div>
		<div class="z-10 flex justify-center mt-36 h-screen">
			<div
				class="transition-transform bg-slate-800 opacity-60 w-2/6 h-4/6 rounded-br-3xl rounded-tl-3xl drop-shadow-2xl transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-105 duration-200"
			>
				<div
					class="rounded-tl-3xl h-1/6 w-full bg-gradient-to-r from-teal-400 to-teal-500"
				>
					<div class="h-full flex items-center justify-center">
						<h1 class="font-mono text-4xl">Studyflow</h1>
					</div>
				</div>
				<div class="flex justify-center mt-12">
					<p class="text-red-300">{{ _errorMessage }}</p>
				</div>
				<div class="grid justify-items-center mt-12 font-mono">
					<input
						class="bg-transparent w-3/5 px-2 py-1 border-b-2 border-white outline-none focus:border-white text-white invalid:text-red-300"
						placeholder="Email"
						type="email"
						v-model="_email"
					/>
					<input
						class="bg-transparent w-3/5 px-2 py-1 border-b-2 border-white outline-none focus:border-white text-white mt-8"
						placeholder="Password"
						:type="type"
						id="password"
						v-model="_password"
					/>
					<input class="mt-2" type="checkbox" v-model="isPassword" />
					<p class="text-white">Show Password</p>
				</div>
				<div
					class="flex justify-center justify-start justify-evenly mt-4 font-mono"
				>
					<div>
						<input class="mt-2" type="checkbox" style="display: inline" />
						<p class="text-white italic" style="display: inline">
							remember me?
						</p>
					</div>

					<button @click="ForgotPassword" class="text-white italic underline">
						Forgot password?
					</button>
				</div>
				<div class="flex justify-center justify-around mt-8 font-mono">
					<NuxtLink to="/">
						<button
							class="bg-gradient-to-r from-teal-400 to-teal-500 px-6 py-2 rounded-xl"
						>
							Return Home
						</button>
					</NuxtLink>
					<button
						class="bg-gradient-to-r from-teal-400 to-teal-500 px-6 py-2 rounded-xl font-mono"
						@click="Login"
					>
						Login
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from "vue";

definePageMeta({ layout: false });

const _email = ref();
const _password = ref();
const _redirectPage = ref();
const _errorMessage = ref();

const _email = ref();
const _password = ref();
const _redirectPage = ref();
const _errorMessage = ref();

const isPassword = ref(false);
const isCorrectInformation = ref(false);
const type = ref("password");

watch(isPassword, (val) => {
	if (val) {
		type.value = "text";
	} else {
		type.value = "password";
	}
});
function ForgotPassword() {
	alert("Out of order!");
}
function Login() {
	console.log("i Fun");
	if (_email.value == "KalleKula@gmail.com" && _password.value == "Max123") {
		alert("Sucessfully logged in! Please return to Home");
		_errorMessage.value = "Sucess!";
	} else {
		_errorMessage.value = "*Incorrect password or email!";
	}
}
</script>

<style>
body {
	overflow-y: hidden;
	/* Hide vertical scrollbar */
	background-image: url("https://media.istockphoto.com/id/1308684522/vector/blue-and-green-blurred-motion-abstract-background.jpg?s=612x612&w=0&k=20&c=ELAPwLRDLH1AbjPDL9RyKBuJR9vcJqn0j8Iz4JLfuCI=");
	background-color: #cccccc;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
