<template>
	<div>
		<Menu></Menu>
		<h1>Maak hier een message aan</h1>

		<label>Message:</label>
		<input type="text" id="input" value="01000010 01100001 01101110 01100001 01100001 01101110">
		<button @click="saveMessage()">Save</button>
		<label>{{status}}</label>

		<br><br>
		<nuxt-link class="hyperlink" to="/message/read">Bekijk de lijst aan messages in de store</nuxt-link>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			status: null
		}
	},

	methods: {
		saveMessage() {
			let inputField = document.getElementById("input");
			if (!inputField.value) return; //lege inputs negeren

			this.$store.commit('addMessage', inputField.value);

			//user feedback
			inputField.value = "";
			this.status = "Succes!" //ik ga er voor nu van uit dat mutations altijd slagen :)
			inputField.focus();
		},
	},
};
</script>