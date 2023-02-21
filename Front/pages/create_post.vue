<template>
	<div>
		<div
			class="heading text-center font-bold text-2xl mb-8 mt-16 text-teal-400 font-mono"
		>
			{{ headTitle }}
		</div>
		<div
			class="editor mx-auto w-10/12 flex flex-col text-gray-800 bg-slate-800 border border-teal-400 p-4 shadow-lg max-w-2xl mt-16 font-mono mb-16"
		>
			<input
				class="title bg-gray-100 p-2 mb-4 outline-none font-bold"
				spellcheck="false"
				:placeholder="title_placeholder"
				type="text"
				v-model="title"
			/>
			<input
				class="bg-gray-100 p-2 mb-4 outline-none"
				spellcheck="false"
				placeholder="Image URL:"
				type="text"
				v-model="imgUrl"
			/>
			<p class="text-white">{{ subject_placeholder }}</p>
			<select class="bg-gray-100" v-model="subject">
				<option value="math 1c">math 1c</option>
				<option value="math 2c">math 2c</option>
				<option value="math 3c">math 3c</option>
				<option value="math 4">math 4</option>
				<option value="math 5">math 5</option>
				<option value="swedish">swedish</option>
				<option value="espanol">español</option>
			</select>
			<textarea
				class="description bg-gray-100 sec p-3 h-80 border border-gray-300 outline-none mt-4"
				spellcheck="false"
				:placeholder="textInp_placeholder"
				v-model="textInp"
				:maxlength="maxLen"
			></textarea>

			<!-- icons -->
			<div class="icons flex text-teal-400 m-2">
				<svg
					class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
				<svg
					class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<svg
					class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
					/>
				</svg>
				<div class="count ml-auto text-gray-400 text-xs font-semibold">
					{{ numberOfChars }}/{{ maxLen }}
				</div>
			</div>
			<!-- buttons -->
			<p class="text-red-400">{{ errorText }}</p>
			<p class="text-white">{{ succsesText }}</p>

			<div class="flex justify-end">
				<NuxtLink to="/w"
					><button
						class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto hover:text-red-400"
					>
						Cancel
					</button></NuxtLink
				>
				<div
					class="btn border border-black p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-teal-500 hover:bg-teal-700"
					@click="CreatePost"
				>
					Post
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from "vue";

const title_placeholder = ref("Title");
const subject_placeholder = ref("Subject");
const textInp_placeholder = ref("Describe everything about this post here");
const errorText = ref();
const hasError = ref();
const succsesText = ref();
const headTitle = ref("Create Post");

const title = ref();
const imgUrl = ref();
const subject = ref();
const textInp = ref();
const numberOfChars = ref();
const maxLen = ref("400");

watch(textInp, (txtvalue) => {
	numberOfChars.value = txtvalue.lenght;
});

function CreatePost() {
	console.log("Innan");
	console.log(title.value);
	console.log(textInp.value);
	console.log(subject.value);
	console.log(hasError.value);

	if (textInp.value == undefined || textInp.value == "") {
		textInp_placeholder.value = "Describe everything about this post here*";
	} else {
		textInp_placeholder.value = "Describe everything about this post here";
	}
	if (title.value == undefined || title.value == "") {
		title_placeholder.value = "Title*";
	} else {
		title_placeholder.value = "Title";
	}
	if (subject.value == undefined) {
		subject_placeholder.value = "Subject*";
	} else {
		subject_placeholder.value = "Subject";
	}

	if (
		textInp_placeholder.value == "Describe everything about this post here*" ||
		title_placeholder.value == "Title*" ||
		subject_placeholder.value == "Subject*"
	) {
		hasError.value = true;
	} else {
		hasError.value = false;
	}

	if (hasError.value == true) {
		errorText.value = "Please check all required* fields";
		succsesText.value = "";
	} else {
		errorText.value = "";
		succsesText.value =
			"Succsess! Your post has been added. Please press Cancel to return!";
		headTitle.value = "Post Created!";
	}
	console.log("Efter");
	console.log(title.value);
	console.log(textInp.value);
	console.log(subject.value);
	console.log(title_placeholder.value);
	console.log(textInp_placeholder.value);
	console.log(subject_placeholder.value);
	console.log(hasError.value);
}

definePageMeta({ layout: false });
</script>

<style>
body {
	background-image: url("https://wallpaper.dog/large/10915157.jpg");
	background-color: #cccccc;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
