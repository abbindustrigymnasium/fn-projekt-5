<template>
    <div>
        <div class="z-10 flex justify-center mt-24 h-screen">
            <div class="bg-neutral-700 opacity-80 w-2/6 h-4/6 bg-black rounded-br-3xl rounded-tl-3xl">
                <div class="rounded-tl-3xl h-1/6 w-full bg-gradient-to-b from-teal-500 to-teal-700 flex justify-center">
                <h1 class="text-5xl mt-2 font-serif">Register</h1>
                </div>
                <div class="flex justify-center flex-col">
                    <input class="px-4 h-8 mx-16 mt-4 bg-gray-700 rounded-lg" type="text" v-model="UserEmail" placeholder="Email ex.Jimny.bob@example.com">
                    <input class="px-4 h-8 mx-16 mt-4 bg-gray-700 rounded-lg" type="text" v-model="Username" placeholder="Username ex.JimnyBob77">
                    <input class="px-4 h-8 mx-16 mt-4 bg-gray-700 rounded-lg" type="password" v-model="Password" placeholder="Password">
                    <input class="px-4 h-8 mx-16 mt-4 bg-gray-700 rounded-lg" type="password" v-model="PasswordCheck" placeholder="Confirm Password">
                </div>
                <div class="flex justify-center">  
                    <input class="mt-4 mr-2" type="checkbox" name="TOS" v-model="acceptTOS">
                    <p class="mt-4 text-white text-sm">I have read and agree to the <a class="underline" href="/TOS">Terms Of Service</a></p>
                </div>
                <div class="flex justify-center pt-8 space-x-24">
                    <button class="bg-teal-500 h-16 w-24 text-2xl rounded-xl" @click="Submit">Register</button>
                    <button class="bg-teal-500 h-16 w-24 text-2xl rounded-xl" >Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            UserEmail = "";
            Username = "";
            Password = "";
            PasswordCheck = "";
        }
    },
    function Submit() {
        console.log(UserEmail, " ", Username, " ", Password, " ", PasswordCheck )
    }
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