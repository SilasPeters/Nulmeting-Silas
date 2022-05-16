export const state = () => ({
  count: 0,
  messages: [],
	echoResponse: "test",
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
  async echo({ commit }, formData) {
    let data = {
      echo: formData,
    };
    let options = {
      url: "https://d5gryl2o0g.execute-api.eu-west-1.amazonaws.com/development/echo",
      method: "POST",
      headers: {
        "x-api-key": "apikeyhere",
      },
      data,
    };
    let response = "kaas"//await this.$axios(options);
    commit("setEchoResponse", response);
  },
};
