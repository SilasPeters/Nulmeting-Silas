<template>
	<div class="flex">
		<nuxt-link to="/">Home</nuxt-link>
		<nuxt-link to="/count">Count</nuxt-link>
		<nuxt-link to="/message/add">Message</nuxt-link>
		<nuxt-link to="/echo">Echo</nuxt-link>
	</div>
</template>

<style scoped>
.flex {
	display: flex;
	flex-wrap: nowrap;
	background-color: #2c67a1;
}
.flex > * {
	background-color: #f1f1f1;
	width: 75px;
	margin: 10px;
	text-align: center;
	font-size: 18px;
	appearance: button;
	text-decoration: none;
}
</style>>