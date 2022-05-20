<template>
	<div>
		<h1>Todolist:</h1>
		<button @click="expand()">Expand</button><br>
		<table>
			<thead>
				<th>Slachtoffer</th>
				<th>Deadline</th>
				<th>Wat te doen</th>
			</thead>
			<tbody>
				<tr v-for='todo in todolist' :key="todo.id">
					<td>{{ todo.assignee }}</td>
					<td>{{ new Date(todo.dueDateTime).toLocaleDateString() }}</td>
					<td>{{ todo.description }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
  computed: {
		todolist() {
 			return this.$store.state.todolist;
 		},
  },

	methods: {
		expand() {
			this.$store.dispatch('WhatToDo');
		}
	}
};
</script>