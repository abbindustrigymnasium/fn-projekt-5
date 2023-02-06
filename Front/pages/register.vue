<template>
    <div>
        <div class="z-10 flex justify-center mt-24 h-screen">
            <div class="bg-neutral-700 opacity-80 w-2/6 h-4/6 bg-black rounded-br-3xl rounded-tl-3xl">
                <div class="rounded-tl-3xl h-1/6 w-full bg-gradient-to-b from-teal-500 to-teal-700 flex justify-center">
                <h1 class="text-5xl mt-2 font-serif">Register</h1>
                </div>
                <div class="flex justify-center flex-col">
                    <input class="px-4 h-8 mx-16 mt-4 bg-gray-700 rounded-lg focus:bg-gray-500 focus:outline-none" type="text" v-model="UserEmail" placeholder="Email ex.Jimny.bob@example.com">
                    <input class="px-4 h-8 mx-16 mt-4 bg-gray-700 rounded-lg focus:bg-gray-500 focus:outline-none" type="text" v-model="Username" placeholder="Username ex.JimnyBob77">
                    <input class="px-4 h-8 mx-16 mt-4 bg-gray-700 rounded-lg focus:bg-gray-500 focus:outline-none" v-model="Password" placeholder="Password" :type="type" id="password"> 
                    <button type="checkbox" class="focus:outline-none">Remember me</button>
                    <input class="px-4 h-8 mx-16 mt-4 bg-gray-700 rounded-lg focus:bg-gray-500 focus:outline-none" type="password" v-model="PasswordCheck" placeholder="Confirm Password">
                </div>
                <div class="flex justify-center">  
                    <input class="mt-4 mr-2 focus:outline-none" type="checkbox" name="TOS" v-model="acceptTOS">
                    <p class="mt-4 text-white text-sm">I have read and agree to the <a class="no-underline hover:underline focus:outline-none focus:underline" href="/TOS">Terms Of Service</a></p>
                </div>
                <div class="flex justify-center pt-8 space-x-24">
                    <button class="bg-teal-500 h-16 w-24 text-2xl rounded-xl hover:bg-teal-700 focus:outline-none focus:bg-teal-700" onclick="forgotPassword()">Register</button>
                    <button class="bg-teal-500 h-16 w-24 text-2xl rounded-xl hover:bg-red-500 focus:outline-none focus:bg-red-500" >Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
const Password = ref(false);
const type = ref("password");
watch(Password, (val) => {
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