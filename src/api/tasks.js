const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tasksRoute = require('./routes/tasksRoute');

const app = express();

// Підключення до MongoDB
mongoose.connect('mongodb+srv://alexsir318:YAdWRewL64TikgqR@cluster0.rvgkk.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

// Роутінг
app.use('/tasks', tasksRoute);

module.exports = app;
