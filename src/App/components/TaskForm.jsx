import { useContext, useState } from "react";
import Button from "./Button";
import { addtask } from "../handlers/Tasks";
import { TasksContextData } from "../context/TasksContext";
import { Link, useNavigate } from "react-router-dom";

export default function TaskForm() {
    const { tasks, setTasks } = useContext(TasksContextData)

    const navigate = useNavigate();

    // Використовуємо юзестейт ( змінна яку можно настроїти. )
    const [taskName, setTaskName] = useState('');

    async function handleTaskAdd() {

        // Добавляємо задачу в базу даних
        const { task } = await addtask(taskName, setTaskName);

        // Тепер говормио react про нову задачу
        setTasks([...tasks, task])

        // Перекинути на список задач
        navigate('/tasks')
    }

    return (
        <div id="taskForm">
            <Link to="/tasks">Всі задачі</Link>
            <input
                id="taskInput"
                type="text"
                placeholder="Назва задачі"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)} />
            <Button className={'taskAdd'} onclick={handleTaskAdd}>
                +
            </ Button>
        </div>
    )
}
