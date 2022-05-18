export const state = () => ({
	count: 0,
	messages: [],
	echoResponse: "",
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
	setEchoResponse(state, responseData){
		state.echoResponse = responseData;
	},
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
	}
}