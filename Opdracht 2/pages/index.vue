<template>
	<div>
		<h1>Psst...</h1>
		<p>{{message}}</p>

		<nuxt-link class="hyperlink" to="/kaas">Zoek het uit!</nuxt-link>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			message: "Wat is lekkerder dan bier?"
		}
	}
}
</script>

<!-- Note: ik maak gebruik van layouts/default.vue voor global styles etc.-->