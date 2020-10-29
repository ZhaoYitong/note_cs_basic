<template>
	<h2 class="red">test...</h2>
</template>

<script>
	export default {
		name: 'Hello World',
		props: {
			msg: {
				type: String,
				default: " test msg"
			}
		},
		methods: {
			
		},
		data() {
			return {
				
			}
		},
	}
</script>

<style>
	.red {color: red;}
</style>