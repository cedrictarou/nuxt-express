<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <div>
      <div>
        <form>
          <input type="text" v-model="taskName" />
          <button @click.prevent="addNewTodo()">Add</button>
        </form>
      </div>
      <div>
        <h2>My todos</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Check</th>
              <th>No</th>
              <th>Task</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(todo, index) in todos"
              :key="todo.id"
              :class="{ done: todo.isDone }"
            >
              <td><input type="checkbox" v-model="todo.isDone" /></td>
              <td>{{ todo.id }} :</td>
              <td>{{ todo.taskName }}</td>
              <td>
                <button @click="editTodo(index)">edit</button>
              </td>
              <td><button @click="deleteTodo(index)">delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      taskName: "",
      todos: [],
    };
  },
  created() {
    this.axios.get("http://localhost:3000/api/todos").then((response) => {
      const gotTodos = response.data.todos;
      this.todos.push(...gotTodos);
    });
  },
  methods: {
    addNewTodo() {
      const newTodo = {
        id: this.todos.length + 1,
        taskName: this.taskName,
        isDone: false,
      };
      this.todos.push(newTodo);
      this.taskName = "";
    },
    editTodo(index) {
      console.log("edit item", this.todos[index]);
      const editedTaskName = prompt(
        "Edit your task.",
        this.todos[index].taskName
      );
      if (editedTaskName === null || "") {
        return;
      } else {
        this.todos[index].taskName = editedTaskName;
      }
    },
    deleteTodo(index) {
      const msg = "Are you scure?";
      const result = confirm(msg);
      if (result) {
        this.todos.splice(index, 1);
      } else {
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 80%;
  margin: 0 auto;
}
h3 {
  margin: 40px 0 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

table th,
table td {
  padding: 10px 0;
  text-align: center;
}
.done {
  text-decoration: line-through;
  color: #ddd;
}
table tr:nth-child(even) {
  background-color: #eee;
}
</style>
