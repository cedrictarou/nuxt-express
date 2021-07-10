var express = require('express');
var router = express.Router();

const todos = [
  { id: 1, taskName: 'study Vue.js', isDone: true },
  { id: 2, taskName: 'study express.js', isDone: false },
  { id: 3, taskName: 'study typescript', isDone: false },
];

/* a list of todos */
router.get('/', (req, res, next) => {
  res.json({ todos });
});

// add a new todo
router.post('/', (req, res, next) => {
  const newTodo = {
    id: todos.length + 1,
    taskName: req.body.taskName,
    isDone: req.body.isDone,
  };
  console.log('newTodo', newTodo);
  todos.push(newTodo);
  res.json('success');
});

// update a todo
router.put('/', (req, res, next) => {
  const editedTodo = req.body;
  todos[editedTodo.id - 1] = editedTodo;
  msg = 'Your todo is updated!!';
  res.json({ msg });
});

// delete a todo
router.delete('/:id', (req, res, next) => {
  const deleteTodoId = req.params.id;
  todos.splice(deleteTodoId, 1);
  const msg = `Your todo is deleted!!!`;
  res.json({ msg });
});

module.exports = router;
