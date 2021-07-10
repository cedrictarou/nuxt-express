var express = require('express');
const todosController = require('../controllers/todosController');
var router = express.Router();

router.get('/', todosController.showTodos);

router.post('/', todosController.addNewTodo);

// update a todo
router.put('/', todosController.updateTodo);

// delete a todo
router.delete('/:id', todosController.deleteTodo);

module.exports = router;
