export const state = () => ({
	count: 0,
	messages: [],
	echoResponse: "",
	todolist: []
});
export const mutations = {
	increment(state) {
		state.count++;
	},
	addMessage(state, newMessage) {
		state.messages.push(newMessage);
	},
	clear(state) {
		state.messages = [];
	},
	setEchoResponse(state, responseData) {
		state.echoResponse = responseData;
	},
	expandTodolist(state, addition) {
		let duplicate = false;
		Object.entries(state.todolist).forEach((todo) => { //voor elke todo-item zoeken we naar of addition een duplicate is
			if (duplicate) return; //stop met zoeken naar duplicates
			if (todo[1].id == addition.id)
				duplicate = true;
		})
		if (duplicate == true) return;
		
		state.todolist.push(addition);
	}
};
export const actions = {
	async echo ({ commit }, formData) {
		let data = {
			echo: formData
		}
		let options = {
			url: "https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/echo",
			method: "POST",
			headers: {
				"x-api-key": process.env.API_KEY
			},
			data
		}
		let response = await this.$axios(options);
		commit('setEchoResponse', response.data);
	},
	async WhatToDo ({ commit }) {
		var config = {
  		method: 'get',
  		url: 'https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/nulmeting/todo',
  		headers: { 
  		  'x-api-key': process.env.API_KEY
  		}
		};
		this.$axios(config)
			.then(function (response) {
			  commit('expandTodolist', response.data.todo);
			})
			.catch(function (error) {
			  console.log(error);
				commit('expandTodolist', error)
			});
		
	}
}