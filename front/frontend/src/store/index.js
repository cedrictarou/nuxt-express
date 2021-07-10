import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// Storeを生成
const BASE_API = 'http://localhost:3000/api/todos';

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
  },
  actions: {
    async getTodosFromApi({ commit }) {
      const response = await axios.get(BASE_API);
      const todosFromApi = response.data.todos;
      commit('setTodos', todosFromApi);
    },
    addNewTodoToApi(content, newTodo) {
      axios.post(BASE_API, newTodo);
    },
    editTodoToApi(content, editedTodo) {
      axios.put(BASE_API, editedTodo).then((response) => {
        const msg = response.data.msg;
        alert(msg);
      });
    },
    deleteTodoFromApi(content, deleteTodoIndex) {
      axios.delete(`${BASE_API}/${deleteTodoIndex}`).then((response) => {
        const msg = response.data.msg;
        alert(msg);
      });
    },
  },
});
export default store;
