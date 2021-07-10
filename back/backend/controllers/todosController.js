const Todo = require('../models').Todo;

module.exports = {
  //show a list of todos
  showTodos: async (req, res) => {
    const todos = await Todo.findAll();
    console.log(todos);
    res.json({ todos });
  },
  // add a new todo
  addNewTodo: async (req, res) => {
    const newTodo = {
      taskName: req.body.taskName,
      isDone: req.body.isDone,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    await Todo.create(newTodo);
    res.json('success');
  },
  // update a todo
  updateTodo: async (req, res) => {
    const editedTodo = req.body;
    console.log(editedTodo);
    await Todo.update(
      {
        taskName: editedTodo.taskName,
        isDone: editedTodo.isDone,
      },
      { where: { id: editedTodo.id } }
    );
    msg = 'Your todo is updated!!';
    res.json({ msg });
  },
  // delete a todo
  deleteTodo: async (req, res) => {
    const deleteTodoId = req.params.id;
    await Todo.destroy({ where: { id: deleteTodoId } });
    const msg = `Your todo is deleted!!!`;
    res.json({ msg });
  },
};
