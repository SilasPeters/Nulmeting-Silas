<template>
  <div>
    <Menu></Menu>

    <h1>Echo...</h1>
		<form v-on:submit.prevent="submit"> <!--voorkomt een redirection waardoor de state verloren raakt, maar voert wel submit() uit-->
			<label>Wat zijn je favoriete dieren?</label><br>
    		<input type="text" name="animal1" id="animal1Field"><br>
    		<input type="text" name="animal2" id="animal2Field"><br>
			<label for="email">Wat is je hoogst persoonlijke email?</label><br>
    		<input type="email" name="email" id="emailField"><br><br>
			<input type="submit" value="Hoor mij!">
		</form>

		<br><br>
		<p>> Echo response:</p>
		<p>{{echo}}</p>
  </div>
</template>

<script>
export default {
	computed: {
   	echo() {
     	return this.$store.state.echoResponse;
   	}
 	},
	methods: {
		submit() {
			let formData = [
				document.getElementById("animal1Field").value,
				document.getElementById("animal2Field").value,
				document.getElementById("emailField").value,
			]
			this.$store.dispatch("echo", formData);
		},
	},
}
</script>