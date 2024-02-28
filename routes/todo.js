const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const auth = require('../middleware/auth');

// Routes related to todos
router.get('/', auth, todoController.getAllTodos);
router.post('/', auth, todoController.createTodo);
router.get('/:todoId', auth, todoController.getTodoById);
router.put('/:todoId', auth, todoController.updateTodo);
router.delete('/:todoId', auth, todoController.deleteTodo);

module.exports = router;
