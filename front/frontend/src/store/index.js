import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// Storeを生成
const store = new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    todos: (state) => state.todos,
  },
  mutations: {
    setTodos(state, todosFromApi) {
      state.todos = [];
      state.todos.push(...todosFromApi);
    },
    addNewTodo() {},
    editTodo() {},
    deleteTodo() {},
  },
  actions: {
    async getTodosFromApi({ commit }) {
      const response = await axios.get('http://localhost:3000/api/todos');
      const todosFromApi = response.data.todos;
      commit('setTodos', todosFromApi);
    },
  },
});
export default store;
