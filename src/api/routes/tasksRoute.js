const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

router.get('/', tasksController.getAllTasks);
router.post('/', tasksController.addTask);
router.delete('/:taskId', tasksController.deleteTask);
router.put('/:taskId', tasksController.updateTask);
router.put('/done/:taskId', tasksController.doneTask);

module.exports = router;