<template>
	<div>
		<Menu></Menu>

		<h1>Messages:</h1>
		<pre>{{messages}}</pre> <!--is een pre zodat \n gebruikt kan worden in script/messages hieronder-->
		<button @click="clear()">Clear</button><br><br>
		
		<nuxt-link class="hyperlink" to="/message/add">Terug</nuxt-link>
	</div>
</template>

<script>
export default {
	computed: {
		messages() {
			return this.$store.state.messages[0] != null ? this.$store.state.messages.join("\n") : "[Geen messages]"
    }
  },

	methods:{
		clear() {
			this.$store.commit('clear');
		}
	}
};
</script>