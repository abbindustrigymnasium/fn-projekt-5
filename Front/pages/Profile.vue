<template>
	<div>
		<div class="z-10 flex justify-center my-12 h-screen">
			<div class="transition-transform bg-slate-800 opacity-60 w-4/6 min-h-min rounded-3xl drop-shadow-2xl transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-105 duration-200">
				<div class="flex flex-row">
					<img class="w-32 h-32 mt-4 ml-4 rounded-full" src="https://t4.ftcdn.net/jpg/03/31/69/91/360_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg" alt="Profile Picture" />
					<div class="flex flex-col">
						<div class="flex flex-row">
							<p class="text-7xl text-black ml-8">{{ Username || "Anonymous" }}</p>
							<button class="w-16 h-16 mt-4 justify-end">
								<img class="w-16 h-16" src="https://assets.stickpng.com/images/6002fa8551c2ec00048c6c79.png" alt="Settings Button" />
							</button>
						</div>
						<div class="flex flex-row">
							<p class="text-4xl mx-8">Posts: {{ CurPosts || 0 }}</p>
							<p class="text-4xl">Likes: {{ TotalLikes || "0" }}</p>
						</div>
					</div>
				</div>
				<div class="mx-16 mt-8">
					<p class="text-white">For each post gotten from database:</p>
					<div class="min-w-6/6 bg-gray-100 h-32 mt-2 mb-8 rounded-lg">
						<div class="flex flex-row">
							<img class="w-8 h-8 rounded-3xl ml-2 mt-2" src="https://t4.ftcdn.net/jpg/03/31/69/91/360_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg" alt="Profile Pic" />
							<input class="ml-2 text-3xl mt-2 bg-gray-300" v-model="NewPostTitle" />
						</div>
						<div>
							<input class="ml-2 mr-2 border-bottom bg-gray-300 mt-2 w-5/6 h-16" v-model="NewPostContent" />
						</div>
					</div>
					<div class="min-w-6/6 bg-gray-100 h-32 mt-2 rounded-lg" @click="RenderPost">
						<div class="flex flex-row">
							<img class="w-8 h-8 rounded-3xl ml-2 mt-2" src="https://t4.ftcdn.net/jpg/03/31/69/91/360_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg" alt="Profile Pic" />
							<p class="ml-2 text-3xl mt-1">{{ TitleOfPost }}</p>
						</div>
						<div>
							<p class="ml-2 mr-2">{{ PostContent }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, watch } from "vue";

	const CurPosts = ref(92);
	const TotalLikes = ref("142.2k");
	const Username = ref("Admin User");
	const TitleOfPost = ref("Title of the post");
	const PostContent = ref("This should contain all the text in the current fetched post and then cycle to the next one and make a new div set");

	definePageMeta({ layout: false });

	function RenderPost(PostName) {
		//Render the post with the title that was clicked
	}
	//function GetInfo(Username or Email){}
	//get profile pic of user as well as posts

	//function Posts(){}
	//load all posts returned by GetInfo() onto the page in either rows of 3 or one by one
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
		background-image: linear-gradient(to right, #40aa45, #0bad68, #00ae85, #00ae9d, #00acae, #00a3b2, #009ab4, #0090b3, #007da8, #006b9c, #00588e, #00467e);
		background-size: cover;
	}
</style>
