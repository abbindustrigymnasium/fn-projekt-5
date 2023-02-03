<template>
    <div>
        <div class="z-10 flex justify-center mt-24 h-screen">
            <div class="bg-neutral-700 opacity-80 w-2/6 h-4/6 bg-black rounded-br-3xl rounded-tl-3xl">
                <div class="rounded-tl-3xl h-1/6 w-full bg-gradient-to-b from-teal-500 to-teal-700 flex justify-center">
                <h1 class="text-5xl mt-2 font-serif">Register</h1>
                </div>
                <div class="flex justify-center flex-col">
                    <input class="px-4 h-8 mx-16 mt-4 bg-gray-700 rounded-lg" type="text" name="Email" value="" placeholder="Email ex.Jimny.bob@example.com">
                    <input class="px-4 h-8 mx-16 mt-4 bg-gray-700 rounded-lg" type="text" name="Username" value="" placeholder="Username ex.JimnyBob77">
                    <input class="px-4 h-8 mx-16 mt-4 bg-gray-700 rounded-lg" type="password" name="pass" value="" placeholder="Password">
                    <input class="px-4 h-8 mx-16 mt-4 bg-gray-700 rounded-lg" type="password" name="passCheck" value="" placeholder="Password again">
                </div>
                <div class="flex justify-center pt-8 space-x-24">
                    <button class="bg-teal-500 h-16 w-24 text-2xl rounded-xl" type="">Register</button>
                    <button class="bg-teal-500 h-16 w-24 text-2xl rounded-xl" type="">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

};
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


<!-- <template>
    <div class="flex justify-center bg-gray-700 min-h-screen">
        <div id="login-div" class="h-64 w-64 mt-36 border-6 border-dashed bg-black">
            <div>
                <input class="w-64 border-2 border-black rounded-md" type="text" name="username" value="" placeholder="Username:"><br>
                <input class="w-64 border-2 border-black rounded-md" type="text" name="email" value="" placeholder="Email:"><br>
                <input class="w-64 border-2 border-black rounded-md" type="password" name="password" value="" placeholder="Password:">
            </div>
            <div class="inline-flex text-white">   
                <input type="checkbox" name="TOS" value=""><p> Acknowledge that you have read and agreed to our <a href="/TOS" class="underline"> Terms of service</a></p>
            </div>
            <div class="flex inline-flex space-x-6">
                <button type="Submit" class="m-8 p-1 border-black border-2 rounded-lg h-8 flex inline-flex bg-teal-500">Sign Up</button>
                <button type="Submit" class="p-1 border-black border-2 rounded-lg h-8 flex inline-flex bg-teal-500">Cancel</button> 
            </div>
            <p> reactive text: {{msg}} </p>
            <button click="MessageChange()">Text change</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

let msg = ref("Whats up?")

// function MessageChange() {
//     msg.value = "Hello"
//     console.log("success!")
// }
</script>
-->