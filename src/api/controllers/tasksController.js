const mongoose = require('mongoose');
const autoId = require('mongoose-sequence')(mongoose);

// Схема та модель задачі прямо тут
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    done: { type: Boolean, default: false },
    taskId: { type: Number, unique: true }
});
taskSchema.plugin(autoId, { inc_field: 'taskId' });
const Task = mongoose.model('Task', taskSchema);

// Контролери:
exports.getAllTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

exports.addTask = async (req, res) => {
    const { title } = req.body;

    try {
        const existingTask = await Task.findOne({ title });
        if (existingTask) {
            return res.status(400).json({ type: 'error', message: 'Task with this title already exists' });
        }
        const newTask = new Task({ title });
        await newTask.save();
        res.json({ type: 'added', task: newTask });
    } catch (err) {
        res.status(400).json({ type: 'error', message: err.message });
    }
};

exports.deleteTask = async (req, res) => {
    const { taskId } = req.params;
    const deleted = await Task.findOneAndDelete({ taskId: Number(taskId) });
    if (!deleted) {
        return res.status(404).json({ type: 'error', message: 'Task not found' });
    }
    res.json({ type: 'deleted' });
};

exports.updateTask = async (req, res) => {
    const { taskId } = req.params;
    const { title } = req.body;
    try {
        const updatedTask = await Task.findOneAndUpdate(
            { taskId: Number(taskId) },
            { title },
            { new: true }
        );
        if (!updatedTask) {
            return res.status(404).json({ type: 'error', message: 'Task not found' });
        }
        res.json({ type: 'updated', task: updatedTask });
    } catch (err) {
        res.status(400).json({ type: 'error', message: err.message });
    }
};

exports.doneTask = async (req, res) => {
    const { taskId } = req.params;
    const { status } = req.body; // беремо з body статус (true/false)

    try {
        const updatedTask = await Task.findOneAndUpdate(
            { taskId: Number(taskId) },
            { done: status }, // оновлюємо поле done
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ type: 'error', message: 'Task not found' });
        }

        res.json({ type: 'done-updated', task: updatedTask });
    } catch (err) {
        res.status(400).json({ type: 'error', message: err.message });
    }
};



