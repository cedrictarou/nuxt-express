<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <div>
      <div>
        <form>
          <input type="text" v-model="taskName" name="taskName" />
          <button @click.prevent="addNewTodo()">Add</button>
        </form>
      </div>
      <div>
        <h2>My todos {{ totalTodos }}</h2>
        <table class="table">
          <thead>
            <tr>
              <th>Check</th>
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
              <td>
                <input
                  type="checkbox"
                  v-model="todo.isDone"
                  @click="changeIsDone(index)"
                />
              </td>
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
    };
  },
  created() {
    this.$store.dispatch("getTodosFromApi");
  },
  computed: {
    todos() {
      return this.$store.getters.todos;
    },
    totalTodos() {
      return this.todos.length;
    },
  },
  methods: {
    addNewTodo() {
      const newTodo = {
        taskName: this.taskName,
        isDone: false,
      };
      this.todos.push(newTodo);
      this.taskName = "";
      this.$store.dispatch("addNewTodoToApi", newTodo);
    },
    editTodo(index) {
      const editedTaskName = prompt(
        "Edit your task.",
        this.todos[index].taskName
      );
      if (editedTaskName === null || "") {
        return;
      } else {
        this.todos[index].taskName = editedTaskName;
      }
      const editedTodo = this.todos[index];
      return this.$store.dispatch("editTodoToApi", editedTodo);
    },
    deleteTodo(index) {
      const msg = "Are you scure?";
      const result = confirm(msg);
      if (result) {
        this.todos.splice(index, 1);
        return this.$store.dispatch("deleteTodoFromApi", index);
      } else {
        return;
      }
    },
    changeIsDone(index) {
      // console.log(this.todos[index]);
      const editedTodo = this.todos[index];
      return this.$store.dispatch("editTodoToApi", editedTodo);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 400px;
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
