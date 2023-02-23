<script setup>
import { ref, watch, onMounted } from "vue"

const isPassword = ref(false)
const isPassCheck = ref(false)
const pass = ref("password")
const check = ref("password")
const acceptTOS = ref(false)

const UserEmail = ref()
const Username = ref()
const Password = ref()
const PasswordCheck = ref()

watch(isPassword, (val) => {
	if (val) {
		pass.value = "text"
	} else {
		pass.value = "password"
	}
})
watch(isPassCheck, (val) => {
    if (val) {
        check.value = "text"
    } else {
        check.value = "password"
    }
})

async function Register() {
    console.log(Password.value, " ", PasswordCheck.value, " ", UserEmail.value, " ", Username.value)
    if (!Password.value || !UserEmail.value || !Username.value){
        alert("Fileds can not be empty!")
    } else {
        if (acceptTOS.value == false) {
            alert("You must accept our Terms Of Service to register")
        } else {
            if (Password.value != PasswordCheck.value) {
                alert("Passwords must match")
            } else {
                const res = fetch('http://localhost:5000/users', {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Access-Control-Allow-Origin": '*',
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: UserEmail.value,
                        username: Username.value,
                        password: Password.value
                    })
                });
                alert("Passwords match, user "+Username.value+" registered!")
            }
        }
    }
}
</script>

<template>
    <div>
        <div class="z-10 flex justify-center mt-24 h-screen">
            <div class="bg-neutral-700 opacity-80 w-2/6 h-4/6 bg-black rounded-br-3xl rounded-tl-3xl">
                <div class="rounded-tl-3xl h-1/6 w-full bg-gradient-to-b from-teal-500 to-teal-700 flex justify-center">
                <h1 class="text-5xl mt-2 font-serif">Register</h1>
                </div>
                <div class="flex justify-center flex-col">
                    <input class="px-4 h-8 w-72 mx-16 mt-4 border-b-2 bg-transparent focus:border-white text-white outline-none invalid:border-red-500" type="text" v-model="UserEmail" placeholder="Email ex. Jimny.bob@example.com">
                    <input class="px-4 h-8 w-72 mx-16 mt-4 border-b-2 bg-transparent focus:border-white text-white outline-none invalid:border-red-500" type="text" v-model="Username" placeholder="Username ex.JimnyBob77">
                    <div class="flex flex-row">   
                    <input class="px-4 h-8 w-72 ml-16 mt-4 border-b-2 bg-transparent focus:border-white text-white outline-none invalid:border-red-500" v-model="Password" placeholder="Password" :type="pass"> 
                    <input type="checkbox" class="ml-2 mt-4 focus:outline-none" v-model="isPassword">
                    </div>
                    <div class="flex flex-row">   
                    <input class="px-4 h-8 w-72 ml-16 mt-4 border-b-2 bg-transparent focus:border-white text-white outline-none invalid:border-red-500" v-model="PasswordCheck" placeholder="Confirm Password" :type="check"> 
                    <input type="checkbox" class="ml-2 mt-4 focus:outline-none" v-model="isPassCheck">
                    </div>
                </div>
                <div class="flex justify-center">  
                    <input class="mt-4 mr-2 focus:outline-none" type="checkbox" name="TOS" v-model="acceptTOS">
                    <p class="mt-4 text-white text-sm">I have read and agree to the <a class="no-underline hover:underline focus:outline-none focus:underline" href="/TOS">Terms Of Service</a></p>
                </div>
                <div class="flex justify-center pt-8 space-x-24">
                    <button class="bg-teal-500 h-16 w-24 text-2xl rounded-xl hover:bg-teal-700 focus:outline-none focus:bg-teal-700" @click="Register">Register</button>
                    <input type="button" class="bg-teal-500 h-16 w-24 text-2xl rounded-xl hover:bg-red-500 focus:outline-none focus:bg-red-500" href="/" value="Cancel">
                </div>
            </div>
        </div>
    </div>
</template>



<style>
body {
    overflow-y: hidden; /* Hide vertical scrollbar */
    background-image: url("https://media.istockphoto.com/id/1308684522/vector/blue-and-green-blurred-motion-abstract-background.jpg?s=612x612&w=0&k=20&c=ELAPwLRDLH1AbjPDL9RyKBuJR9vcJqn0j8Iz4JLfuCI=");
    background-color: #cccccc; 
    background-repeat: no-repeat;
    background-size: cover;
    }
</style>
