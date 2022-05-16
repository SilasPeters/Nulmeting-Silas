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
  async echo({ commit }, formData) {
    let data = {
      echo: formData,
    };
    let options = {
      url: "https://d5gryl2o0g.execute-api.eu-west-1.amazonaws.com/development/echo",
      method: "POST",
      headers: {
        "x-api-key": process.env.API_KEY,
      },
      data,
    };
    //alert(JSON.stringify(options));
    let response = await this.$axios(options);//this.$axios.$get(options);
    alert(response);
    commit("setEchoResponse", response);
  },
};