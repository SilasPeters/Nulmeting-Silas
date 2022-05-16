<template>
	<div>
		<Menu></Menu>

		<h2 id="kaas">KAAS!</h2>
		<p>{{message}}</p>

		<nuxt-link class="hyperlink" to="/">Doe toch maar bier</nuxt-link>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			message: "\"What else?\" - George Clooney"
		}
	}
}
</script>

<style scoped>
#kaas {
	font-size: 26pt;
	color: #ebe71c;
}
</style>