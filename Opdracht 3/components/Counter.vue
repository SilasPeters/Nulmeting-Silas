<template>
	<div>
		<p id="counter">{{count}}</p>
		<button type="button" autofocus="true" @click="Increment()">Een mysterieuze knop</button>
	</div>
</template>

<script>
export default {
	computed: {
		count() {
			let count = this.$store.state.count;

			if (count == 0)	return "Je hebt nog niet je tijd verspilt. Gefeliciteerd!";
			else						return "Je hebt al " + (count > 9 ? count + "(!)" : count) + " keer je tijd verspilt.";
    }
  },

	methods: {
		Increment() {
			this.$store.commit('increment');
		}
	}
}
</script>